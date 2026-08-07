import {
  LIGHTS, EYES, lightByKey, eyeByKey, isLit, reach, reachVerdict, SEASONS, gbp, STATION,
} from "./light.mjs";
import { TOWER, ROOMS } from "./tower.mjs";
import { drawPeriod, drawRange, periodLabel, rangeLabel, TL_W } from "./draw.mjs";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const nofx = document.documentElement.classList.contains("nofx");
const still = nofx || matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── An Solas ────────────────────────────────────────────── */
const rig = $("#rig");
if (rig) {
  const lampEl = $("#lamp");
  const tlSvg = $("#tl-svg");
  const rgSvg = $("#rg-svg");
  let light = lightByKey("faire");
  let t0 = performance.now();

  function drawTimeline() {
    tlSvg.innerHTML = `<title id="tl-t">${periodLabel(light)}</title>` + drawPeriod(light, 0.1);
  }

  function setLight(key) {
    light = lightByKey(key);
    t0 = performance.now();
    $("#c-char").firstChild.nodeValue = light.character;
    $("#c-name").textContent = light.name;
    const longest = Math.max(...light.seq.filter((_, i) => i % 2 === 1));
    $("#c-count").innerHTML =
      `Period <b class="num">${light.period}</b> s · <b class="num">${light.flashes}</b> ` +
      `flash${light.flashes > 1 ? "es" : ""} · longest eclipse <b class="num">${longest}</b> s`;
    $("#c-note").textContent = light.note;
    drawTimeline();
  }

  function setEye(key) {
    const r = reach(eyeByKey(key));
    const v = reachVerdict(r);
    rgSvg.innerHTML = `<title id="rg-t">${rangeLabel(r)}</title>` + drawRange(r);
    const vd = $("#verdict");
    vd.dataset.state = v.state;
    $("#v-st").innerHTML = `${r.geo.toFixed(1)} M<em>${v.en}</em>`;
    $("#v-say").textContent = v.say;
  }

  rig.addEventListener("change", (e) => {
    if (e.target.name === "light") setLight(e.target.value);
    if (e.target.name === "eye") setEye(e.target.value);
  });
  rig.addEventListener("submit", (e) => e.preventDefault());

  // The character, running true. Under reduced motion it holds at the first
  // flash — a rhythmic light must never render as an unlit lamp.
  if (still) {
    lampEl.dataset.lit = "1";
  } else {
    const head = () => $("#tl-head", tlSvg);
    const tick = (now) => {
      const t = ((now - t0) / 1000) % light.period;
      lampEl.dataset.lit = isLit(light, t) ? "1" : "0";
      const h = head();
      if (h) {
        const x = 8 + (t / light.period) * (TL_W - 16);
        h.setAttribute("x1", x);
        h.setAttribute("x2", x);
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

/* ── The record behind a point — commitment 10 ───────────── */
const dlg = $("#dlg");
if (dlg && typeof dlg.showModal === "function") {
  let opener = null;

  const open = (rec, trigger) => {
    $("#dlg-no").textContent = String(rec.no).padStart(2, "0");
    $("#dlg-h").textContent = rec.ga;
    $("#dlg-tr").textContent = `${rec.trade} — ${rec.en}`;
    $("#dlg-say").textContent = rec.line;
    $("#dlg-dl").innerHTML = rec.specs
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
      .join("");
    opener = trigger;
    trigger.setAttribute("aria-expanded", "true");
    dlg.showModal();
    document.body.style.overflow = "hidden";
  };

  const bind = (sel, attr, list) =>
    $$(sel).forEach((el) =>
      el.addEventListener("click", () => {
        const rec = list.find((x) => x.key === el.dataset[attr]);
        if (rec) open(rec, el);
      })
    );
  bind("[data-part]", "part", TOWER);
  bind("[data-room]", "room", ROOMS);

  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) dlg.close();
  });
  dlg.addEventListener("close", () => {
    document.body.style.overflow = "";
    if (opener) {
      opener.setAttribute("aria-expanded", "false");
      opener.focus();
      opener = null;
    }
  });
}

/* ── Fuireach ────────────────────────────────────────────── */
const book = $("#book");
if (book) {
  const sync = () => {
    const val = ($('input[name="Seusan"]:checked') || {}).value || "";
    const s = SEASONS.find((x) => val.startsWith(x.en)) || SEASONS[0];
    $("#d-season").textContent = s.en;
    $("#d-months").textContent = s.months;
    $("#d-dark").textContent = s.dark;
    $("#d-price").textContent = gbp(s.price);
    $("#h-price").value = gbp(s.price);
    return s;
  };
  book.addEventListener("change", sync);
  sync();

  const bad = (id, isBad) => {
    const f = $(`#f-${id}`);
    if (!f) return;
    f.dataset.bad = isBad ? "1" : "0";
    f.querySelector("input, textarea, select")?.setAttribute("aria-invalid", isBad ? "true" : "false");
  };

  book.addEventListener("submit", (e) => {
    const ainm = $("#ainm").value.trim();
    const week = $("#week").value.trim();
    const post = $("#post").value.trim();
    const postOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(post);

    bad("ainm", !ainm);
    bad("week", !week);
    bad("post", !postOk);

    const first = $('.field[data-bad="1"]');
    if (first) {
      e.preventDefault();
      $("#live").textContent =
        "Not sent — " +
        [!ainm && "a name", !week && "a week", !postOk && "an address that takes a reply"]
          .filter(Boolean).join(", ") + " still missing.";
      first.querySelector("input, textarea, select")?.focus();
      first.scrollIntoView({ behavior: nofx ? "auto" : "smooth", block: "center" });
      return;
    }

    const s = sync();
    const btn = $("#submit");
    btn.disabled = true;
    btn.innerHTML = "A' cur…";
    $("#sent-line").textContent = `${s.en}, week beginning ${week} — ${gbp(s.price)}, the whole house, sleeps four.`;
    $("#sent").hidden = false;
    $("#live").textContent = "Sent. One reply follows within two days.";
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Cuir a-null <span aria-hidden="true">→</span>';
    }, 2600);
  });

  ["ainm", "week", "post"].forEach((id) => $(`#${id}`)?.addEventListener("input", () => bad(id, false)));
}

/* ── chrome ──────────────────────────────────────────────── */
const head = $("#head");
let last = 0;
addEventListener("scroll", () => {
  const y = scrollY;
  head.dataset.veil = y > 40 ? "on" : "off";
  head.dataset.hide = y > 400 && y > last ? "on" : "off";
  last = y;
}, { passive: true });

/* ── entrances ───────────────────────────────────────────── */
const rises = $$(".rise");
if (still) {
  rises.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
    { rootMargin: "0px 0px -12% 0px" }
  );
  rises.forEach((el) => io.observe(el));
}

/* ── the loops ───────────────────────────────────────────── */
function lazyVideo(id, src) {
  const v = document.getElementById(id);
  if (!v || still || !matchMedia("(min-width: 900px)").matches) return;
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      v.src = src;
      v.load();
      v.play().then(() => { v.classList.add("ready"); v.style.opacity = "1"; }).catch(() => {});
    });
  }, { rootMargin: "200px" });
  io.observe(v);
}
lazyVideo("v-hero", "/video/gath.mp4");
lazyVideo("v-lionsa", "/video/lionsa.mp4");
lazyVideo("v-mullach", "/video/mullach.mp4");
