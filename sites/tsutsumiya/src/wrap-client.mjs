import { WARES, build, ledgerLine, cmToSun, gToMonme, yen } from "./wrap.mjs";
import { drawWrap, svgLabel, viewBox, boardNotes } from "./draw.mjs";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sun = (cm) => cmToSun(cm).toFixed(1);
const kan = (g) => (g / 3750).toFixed(2);
const nofx = document.documentElement.classList.contains("nofx");

/* ── 包 the wrap ─────────────────────────────────────────── */
const form = $("#wrap-form");
if (form) {
  const svgEl = $("#board-svg");
  const title = $("#board-title");

  const counts = () => {
    const c = {};
    for (const w of WARES) {
      const el = $(`#w_${w.key}`);
      c[w.key] = el ? Math.max(0, Math.min(w.max, parseInt(el.value, 10) || 0)) : 0;
    }
    return c;
  };
  const knotKey = () => ($('input[name="knot"]:checked') || { value: "ma" }).value;

  function render() {
    const c = counts();
    const k = knotKey();
    const b = build(c, k);

    // keep the inputs honest about their own clamping
    for (const w of WARES) {
      const el = $(`#w_${w.key}`);
      if (el && String(c[w.key]) !== el.value) el.value = c[w.key];
      const row = $(`.ware[data-ware="${w.key}"]`);
      if (row) row.dataset.on = c[w.key] > 0 ? "1" : "0";
      const minus = $(`.step[data-for="${w.key}"][data-step="-1"]`);
      const plus = $(`.step[data-for="${w.key}"][data-step="1"]`);
      if (minus) minus.disabled = c[w.key] <= 0;
      if (plus) plus.disabled = c[w.key] >= w.max;
    }

    svgEl.setAttribute("viewBox", viewBox(b));
    svgEl.innerHTML = `<title id="board-title">${svgLabel(b)}</title>` + drawWrap(b);

    $("#board-notes").innerHTML = boardNotes(b).map((t) => `<li>${t}</li>`).join("");

    $("#r-size").innerHTML = b.L
      ? `${sun(b.L)} × ${sun(b.W)} × ${sun(b.H)}<small>sun · ${Math.round(b.L)} × ${Math.round(b.W)} × ${Math.round(b.H)} cm</small>`
      : `—<small>nothing on the cloth</small>`;
    $("#r-weight").innerHTML = `${Math.round(gToMonme(b.weightG))} 匁<small>${kan(b.weightG)} kan · ${(b.weightG / 1000).toFixed(2)} kg</small>`;
    $("#r-cloth").innerHTML = b.cloth
      ? `${b.cloth.ja}<small>${b.cloth.romaji} · ${b.cloth.cm} cm — needs ${Math.round(b.needed)}</small>`
      : `—<small>${b.L ? `needs ${Math.round(b.needed)} cm; the house stocks 130` : "no cloth called for"}</small>`;
    $("#r-price").innerHTML = `${Math.round(b.monme).toLocaleString("en-US")} 匁<small>${yen(b.totalYen)}</small>`;

    const v = $("#verdict");
    v.dataset.pass = b.mie.pass ? "yes" : "no";
    $("#v-mie").innerHTML = `${b.mie.ja}<em>見え ${b.mie.romaji} — ${b.mie.gloss}</em>`;
    $("#v-say").textContent = b.mie.say;

    $("#t-count").textContent = b.count;
    $("#t-note").textContent = !b.count
      ? "the cloth is empty"
      : !b.mie.pass
        ? "the house will not close this as one parcel"
        : `closed with the ${b.knot.romaji} in a ${b.cloth.romaji} cloth` +
          (b.carried.length ? `, and one length carried in the hand` : "");

    const line = ledgerLine(c, k);
    $("#s-line").textContent = line;
    $("#s-size").textContent = b.L ? `${sun(b.L)} × ${sun(b.W)} × ${sun(b.H)} 寸` : "—";
    $("#s-weight").textContent = `${Math.round(gToMonme(b.weightG))} 匁`;
    $("#s-cloth").textContent = b.cloth ? `${b.cloth.ja} · ${b.cloth.cm} cm` : "—";
    $("#s-mie").textContent = b.mie.ja;
    $("#s-total").textContent = `${Math.round(b.monme).toLocaleString("en-US")} 匁`;
    $("#s-yen").textContent = yen(b.totalYen);
    $("#h-parcel").value = line;
    $("#h-total").value = `${Math.round(b.monme)} monme silver — ${yen(b.totalYen)}`;

    const go = $("#to-order");
    go.setAttribute("aria-disabled", b.count ? "false" : "true");
  }

  form.addEventListener("input", render);
  form.addEventListener("change", render);
  form.addEventListener("submit", (e) => e.preventDefault());
  $$(".step").forEach((btn) =>
    btn.addEventListener("click", () => {
      const el = $(`#w_${btn.dataset.for}`);
      const w = WARES.find((x) => x.key === btn.dataset.for);
      el.value = Math.max(0, Math.min(w.max, (parseInt(el.value, 10) || 0) + Number(btn.dataset.step)));
      render();
    })
  );

  // Focusing a ware picks it out in the drawing.
  $$(".ware").forEach((row) => {
    const key = row.dataset.ware;
    const on = () => $$(`.wrap-good[data-ware="${key}"]`, svgEl).forEach((g) => g.classList.add("hi"));
    const off = () => $$(".wrap-good.hi", svgEl).forEach((g) => g.classList.remove("hi"));
    row.addEventListener("mouseenter", on);
    row.addEventListener("mouseleave", off);
    row.addEventListener("focusin", on);
    row.addEventListener("focusout", off);
  });

  render();
}

/* ── the order form ──────────────────────────────────────── */
const order = $("#order-form");
if (order) {
  const bad = (id, isBad) => {
    const f = $(`#f-${id}`);
    if (!f) return;
    f.dataset.bad = isBad ? "1" : "0";
    const input = f.querySelector("input, select, textarea");
    if (input) input.setAttribute("aria-invalid", isBad ? "true" : "false");
  };

  order.addEventListener("submit", (e) => {
    const kuchi = $("#kuchi").value.trim();
    const na = $("#na").value.trim();
    const mail = $("#tayori").value.trim();
    const mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);

    bad("kuchi", !kuchi);
    bad("na", !na);
    bad("tayori", !mailOk);

    const first = $('.field[data-bad="1"]');
    if (first) {
      e.preventDefault();
      $("#live").textContent =
        "The house cannot take this yet — " +
        [!kuchi && "a word spoken for you", !na && "a name", !mailOk && "an address the reply reaches"]
          .filter(Boolean)
          .join(", ") +
        " is missing.";
      first.querySelector("input, select, textarea")?.focus();
      first.scrollIntoView({ behavior: nofx ? "auto" : "smooth", block: "center" });
      return;
    }

    const btn = $("#submit-btn");
    btn.disabled = true;
    btn.innerHTML = "帳に付けている…";
    $("#sent-line").textContent = $("#h-parcel").value;
    $("#sent").hidden = false;
    $("#live").textContent = "Taken down. One reply follows to the address given.";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '帳に付ける <span aria-hidden="true">→</span>';
    }, 2600);
  });

  ["kuchi", "na", "tayori"].forEach((id) =>
    $(`#${id}`)?.addEventListener("input", () => bad(id, false))
  );
}

/* ── chrome ──────────────────────────────────────────────── */
const head = $("#head");
let last = 0;
addEventListener(
  "scroll",
  () => {
    const y = scrollY;
    head.dataset.veil = y > 40 ? "on" : "off";
    head.dataset.hide = y > 400 && y > last ? "on" : "off";
    last = y;
  },
  { passive: true }
);

/* ── entrances ───────────────────────────────────────────── */
const rises = $$(".rise");
if (nofx || matchMedia("(prefers-reduced-motion: reduce)").matches) {
  rises.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -12% 0px" }
  );
  rises.forEach((el) => io.observe(el));
}

/* ── the two loops ───────────────────────────────────────── */
// Desktop only, lazy, and never under reduced motion or ?nofx.
function lazyVideo(id, src) {
  const v = document.getElementById(id);
  if (!v) return;
  if (nofx || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!matchMedia("(min-width: 900px)").matches) return;
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        v.src = src;
        v.load();
        v.play()
          .then(() => {
            v.classList.add("ready");
            v.style.opacity = "1";
          })
          .catch(() => {});
      });
    },
    { rootMargin: "200px" }
  );
  io.observe(v);
}
lazyVideo("hero-video", "/video/mise.mp4");
lazyVideo("musubi-video", "/video/musubi.mp4");
