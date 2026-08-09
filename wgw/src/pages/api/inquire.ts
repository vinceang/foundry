import type { APIRoute } from 'astro';

export const prerender = false;

const env = (k: string) => import.meta.env[k] ?? process.env[k];

/**
 * Inquiry intake.
 *
 * Sends through Resend when RESEND_API_KEY is set. Until then it deliberately
 * answers 503 rather than 200 — the form treats that as a failure and hands
 * the visitor a prefilled mailto. An inquiry that silently evaporates is worse
 * than one that never sent.
 *
 * Both addresses are configurable, because the branded ones depend on things
 * that are not done yet: sending *from* wintergardenweb.com needs the domain
 * verified at Resend (which needs DNS), and delivering *to* info@ needs that
 * mailbox to exist. Defaults are therefore the pair that works with nothing
 * set up but an API key — Resend's own sending domain, which needs no
 * verification. Override them once the real ones exist.
 */
export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'bad request' }, 400);
  }

  // Honeypot — a bot fills every field it can find.
  if (data.company) return json({ ok: true }, 200);

  const name = String(data.name ?? '').trim().slice(0, 200);
  const email = String(data.email ?? '').trim().slice(0, 200);
  const what = String(data.what ?? '').trim().slice(0, 500);

  if (!name || !email || !what) return json({ error: 'missing fields' }, 422);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'bad email' }, 422);

  const key = env('RESEND_API_KEY');
  if (!key) {
    return json({ error: 'mail not configured' }, 503);
  }

  const to = env('INQUIRY_TO') || 'info@wintergardenweb.com';
  const from = env('INQUIRY_FROM') || 'The Glass House <onboarding@resend.dev>';

  // Padded to the longest label + 1, so the values line up in a monospaced
  // mail client instead of colliding with the colon.
  const row = (label: string, value: string) => `${(label + ':').padEnd(13)}${value}`;

  const lines = [
    row('Name', name),
    row('Email', email),
    row('Makes', what),
    row('Photography', String(data.photography ?? '—')),
    row('Budget', String(data.budget ?? '—')),
    '',
    String(data.message ?? '').trim().slice(0, 5000) || '(no message)',
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${key}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Commission enquiry — ${name}`,
        text: lines,
      }),
    });

    if (!res.ok) return json({ error: 'send failed' }, 502);
    return json({ ok: true }, 200);
  } catch {
    return json({ error: 'send failed' }, 502);
  }
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}
