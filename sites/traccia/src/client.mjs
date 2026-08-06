import { build, overlapVerdict, specLine, eur, deg, DEFAULTS } from "./frame.mjs";
import { drawFrame, frameLabel } from "./draw.mjs";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const nofx = document.documentElement.classList.contains("nofx");

/* ── La traccia ──────────────────────────────────────────── */
const rig = $("#rig");
if (rig) {
  const svgEl = $("#board-svg");

  const inputs = () => ({
    altezza: +$("#altezza").value,
    cavallo: +$("#cavallo").value,
    peso: +$("#peso").value,
    strada: ($('input[name="Strada"]:checked') || { value: DEFAULTS.strada }).value,
    allungo: ($('input[name="Allungo"]:checked') || { value: DEFAULTS.allungo }).value,
  });

  function render() {
    const inp = inputs();
    const f = build(inp);
    const v = overlapVerdict(f);

    $("#o-altezza").innerHTML = `${inp.altezza}<small>cm</small>`;
    $("#o-cavallo").innerHTML = `${inp.cavallo}<small>cm</small>`;
    $("#o-peso").innerHTML = `${inp.peso}<small>kg</small>`;

    svgEl.innerHTML = `<title id="board-t">${frameLabel(f, v)}</title>` + drawFrame(f, v);

    $("#r-ang").innerHTML = `${deg(f.ha)} / ${deg(f.sa)}<small>head and seat angle</small>`;
    $("#r-trail").innerHTML = `${Math.round(f.trail)} mm<small>trail</small>`;
    $("#r-wb").innerHTML = `${Math.round(f.wheelbase)} mm<small>wheelbase</small>`;
    $("#r-tubes").innerHTML = `${f.st} / ${f.tt}<small>seat and top tube, mm</small>`;
    $("#r-sr").innerHTML = `${Math.round(f.stack)} / ${Math.round(f.reachMm)}<small>from the bottom bracket, mm</small>`;
    $("#r-gauge").innerHTML = `${f.gauge.label}<small>${f.weight} g</small>`;

    const vd = $("#verdict");
    vd.dataset.state = v.state;
    $("#v-st").innerHTML = `${v.it}<em>sovrapposizione · ${v.gloss}</em>`;
    $("#v-say").textContent = v.say;
    $("#answers").hidden = v.state === "clear";

    $("#t-price").textContent = eur(f.price);
    $("#t-note").textContent =
      f.gauge.price > 0
        ? "frameset, on oversize tubing — frame, fork, headset faced and fitted"
        : "frameset — frame, fork, headset faced and fitted";

    const spec = specLine(inp);
    $("#d-spec").textContent = spec;
    $("#d-st").textContent = `${f.st} / ${f.tt}`;
    $("#d-ang").textContent = `${deg(f.ha)} / ${deg(f.sa)}`;
    $("#d-trail").textContent = `${Math.round(f.trail)} mm`;
    $("#d-wb").textContent = `${Math.round(f.wheelbase)} mm`;
    $("#d-gauge").textContent = f.gauge.label;
    $("#d-weight").textContent = `${f.weight} g`;
    $("#d-price").textContent = eur(f.price);
    $("#h-spec").value = spec;
    $("#h-price").value = eur(f.price);
  }

  rig.addEventListener("input", render);
  rig.addEventListener("change", render);
  rig.addEventListener("submit", (e) => e.preventDefault());
  render();
}

/* ── the order ───────────────────────────────────────────── */
const order = $("#order");
if (order) {
  const bad = (id, isBad) => {
    const f = $(`#f-${id}`);
    if (!f) return;
    f.dataset.bad = isBad ? "1" : "0";
    f.querySelector("input, textarea, select")?.setAttribute("aria-invalid", isBad ? "true" : "false");
  };

  order.addEventListener("submit", (e) => {
    const nome = $("#nome").value.trim();
    const dove = $("#dove").value.trim();
    const mail = $("#mail").value.trim();
    const mailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);

    bad("nome", !nome);
    bad("mail", !mailOk);
    bad("dove", !dove);

    const first = $('.field[data-bad="1"]');
    if (first) {
      e.preventDefault();
      $("#live").textContent =
        "Not sent — " +
        [!nome && "a name", !mailOk && "an address that takes a reply", !dove && "where you ride"]
          .filter(Boolean)
          .join(", ") +
        " still missing.";
      first.querySelector("input, textarea, select")?.focus();
      first.scrollIntoView({ behavior: nofx ? "auto" : "smooth", block: "center" });
      return;
    }

    const btn = $("#submit");
    btn.disabled = true;
    btn.innerHTML = "Mandando…";
    $("#sent-spec").textContent = $("#h-spec").value;
    $("#sent").hidden = false;
    $("#live").textContent = "Sent. One reply follows within a week.";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Mandare la specifica <span aria-hidden="true">→</span>';
    }, 2600);
  });

  ["nome", "mail", "dove"].forEach((id) =>
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
