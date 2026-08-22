import {
  TRAINS, TIMBER, SCALE_MAX,
  peakDeflection, returnTime, influence, verdict, shearMatrix, trainAt, trackPath,
} from "./sway.mjs";

const nofx = document.documentElement.classList.contains("nofx");
const still = nofx || matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ------------------------------------------------------------ chrome */

const top = document.getElementById("top");
let lastY = 0;
addEventListener(
  "scroll",
  () => {
    const y = scrollY;
    top.dataset.veiled = y > 40 ? "1" : "0";
    top.dataset.hidden = y > 320 && y > lastY ? "1" : "0";
    lastY = y;
  },
  { passive: true }
);

/* ------------------------------------------------------- scroll reveal */

if (still) {
  document.querySelectorAll(".rise").forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  document.querySelectorAll(".rise").forEach((el) => io.observe(el));
}

/* ------------------------------------------------------ THE SIGNATURE */

const svg = document.getElementById("sway-svg");
const body = document.getElementById("sway-body");
const train = document.getElementById("sway-train");
const track = document.getElementById("sway-track");
const pos = document.getElementById("sway-pos");
const needle = document.getElementById("sway-needle");
const bandEl = document.getElementById("sway-band");
const verdictEl = document.getElementById("sway-verdict");
const readEl = document.getElementById("sway-read");
const figDefl = document.getElementById("fig-defl");
const figLoad = document.getElementById("fig-load");
const figRet = document.getElementById("fig-ret");

let trainKey = "half";
let timberKey = "mid";
let t = 0.5;          // train position, 0..1
let shown = 0;        // the deflection actually drawn (inches)
let settling = null;  // damped return animation

function state() {
  const peak = peakDeflection(trainKey, timberKey);
  const inches = peak * influence(t);
  return { peak, inches };
}

/* The drawing may overshoot past plumb while it settles — a real bent does.
   The figures must not: they answer "right now" for the load, and a transient
   negative would report a deflection no bent has ever had. Draw the transient,
   read out the steady state. */
function paint(inches, readout = inches) {
  shown = inches;
  body.setAttribute("transform", shearMatrix(inches));
  track.setAttribute("d", trackPath(inches));
  const tr = trainAt(t, inches);
  train.setAttribute("transform", `translate(${tr.x.toFixed(1)},${tr.y.toFixed(1)}) rotate(${tr.deg.toFixed(2)})`);

  const pct = Math.max(0, Math.min(100, (readout / SCALE_MAX) * 100));
  needle.style.left = pct + "%";

  const v = verdict(readout);
  bandEl.dataset.state = v.state;
  verdictEl.textContent = v.text;

  const n = readout.toFixed(1);
  readEl.firstChild.nodeValue = n;
  figDefl.textContent = n + " in";
  figLoad.textContent =
    Math.round(TRAINS[trainKey].lb * influence(t)).toLocaleString("en-US") + " lb";
  figRet.textContent = returnTime(timberKey).toFixed(2) + " s";
}

function update() {
  if (settling) cancelAnimationFrame(settling), (settling = null);
  paint(state().inches);
}

/* The return. This is the half of the claim that matters: it comes back.
   A damped oscillation whose period is the timber's stated return time. */
function settle() {
  if (still) return update();
  const from = shown;
  const T = returnTime(timberKey) * 1000;
  const t0 = performance.now();
  const step = (now) => {
    const p = (now - t0) / T;
    if (p >= 1) {
      settling = null;
      paint(state().inches);
      return;
    }
    const decay = Math.exp(-4.2 * p);
    const target = state().inches;
    paint(target + (from - target) * decay * Math.cos(p * Math.PI * 2.4), target);
    settling = requestAnimationFrame(step);
  };
  settling = requestAnimationFrame(step);
}

if (svg) {
  pos.addEventListener("input", () => {
    t = Number(pos.value) / 1000;
    update();
  });
  pos.addEventListener("change", settle);

  /* Train and Timber are a sentence, not a spec sheet: each word cycles.
     The button carries the value as its label and states what it does. */
  const swTrain = document.getElementById("sw-train");
  const swTimber = document.getElementById("sw-timber");
  const trainKeys = Object.keys(TRAINS);
  const timberKeys = Object.keys(TIMBER);

  function sayState() {
    swTrain.textContent = TRAINS[trainKey].say;
    swTrain.setAttribute("aria-label", `Train load: ${TRAINS[trainKey].say} train. Activate to change.`);
    swTimber.textContent = TIMBER[timberKey].say;
    swTimber.setAttribute("aria-label", `Timber age: ${TIMBER[timberKey].say}. Activate to change.`);
  }

  swTrain.addEventListener("click", () => {
    trainKey = trainKeys[(trainKeys.indexOf(trainKey) + 1) % trainKeys.length];
    sayState(); update(); settle();
  });
  swTimber.addEventListener("click", () => {
    timberKey = timberKeys[(timberKeys.indexOf(timberKey) + 1) % timberKeys.length];
    svg.dataset.timber = timberKey;
    sayState(); update(); settle();
  });
  sayState();

  /* Drag the train directly on the drawing. */
  let dragging = false;
  const fromPointer = (e) => {
    const r = svg.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    t = Math.max(0, Math.min(1, x));
    pos.value = String(Math.round(t * 1000));
    update();
  };
  svg.addEventListener("pointerdown", (e) => {
    dragging = true;
    svg.setPointerCapture(e.pointerId);
    fromPointer(e);
  });
  svg.addEventListener("pointermove", (e) => dragging && fromPointer(e));
  svg.addEventListener("pointerup", () => {
    dragging = false;
    settle();
  });

  /* Demonstrate itself once, the first time it is seen. */
  if (!still) {
    const demo = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      demo.disconnect();
      const t0 = performance.now();
      const run = (now) => {
        const p = Math.min(1, (now - t0) / 2600);
        t = p;
        pos.value = String(Math.round(p * 1000));
        paint(state().inches);
        if (p < 1) requestAnimationFrame(run);
        else {
          t = 0.5;
          pos.value = "500";
          settle();
        }
      };
      requestAnimationFrame(run);
    }, { threshold: 0.45 });
    demo.observe(svg);
  } else {
    paint(state().inches);
  }
}

/* ------------------------------------------------------------ specimen */

document.querySelectorAll("[data-record]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const d = document.getElementById(btn.dataset.record);
    d?.showModal();
  });
});
document.querySelectorAll("dialog.record").forEach((d) => {
  d.querySelector("[data-close]")?.addEventListener("click", () => d.close());
  d.addEventListener("click", (e) => {
    if (e.target === d) d.close();
  });
});

/* ---------------------------------------------------------------- order */

const order = document.getElementById("order");
if (order) {
  const setErr = (id, msg, input) => {
    document.getElementById(id).textContent = msg;
    if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  };

  order.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(order);
    const nameEl = order.querySelector("#o-name");
    const mailEl = order.querySelector("#o-email");
    const pieceEl = order.querySelector("#o-piece");

    let ok = true;
    ok = setErr("e-name", f.get("name")?.trim() ? "" : "We need a name to put on the crate.", nameEl) && ok;
    const mail = String(f.get("email") || "").trim();
    ok = setErr(
      "e-email",
      !mail ? "We need an address to write back to." : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) ? "" : "That address is missing something.",
      mailEl
    ) && ok;
    ok = setErr("e-piece", f.get("piece") ? "" : "Pick a piece from the yard.", pieceEl) && ok;

    if (!ok) {
      order.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const btn = order.querySelector(".btn");
    btn.disabled = true;
    btn.textContent = "Sending";

    const sent = document.getElementById("order-sent");
    sent.hidden = false;
    sent.innerHTML =
      `<h3 style="font-size:20px;margin-bottom:8px">Request received.</h3>` +
      `<p>Piece <span class="fig">${f.get("piece")}</span>, for ${String(f.get("name")).replace(/[<>&]/g, "")}. ` +
      `We write back within two working days with a total including crating and freight. ` +
      `Nothing has been charged.</p>`;
    btn.textContent = "Sent";
    sent.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "center" });
  });
}

/* ------------------------------------------------------------ hero loop */

const loop = document.getElementById("hero-loop");
if (loop && !still && matchMedia("(min-width: 901px)").matches) {
  // Nothing is fetched until we are actually going to play it.
  loop.src = "/video/hero-loop.mp4";
  loop.addEventListener("canplay", () => {
    loop.play().then(() => { loop.dataset.on = "1"; }).catch(() => {});
  }, { once: true });
  loop.load();

  // Stop paying for decode once the hero is off screen.
  const seen = new IntersectionObserver((es) => {
    if (es[0].isIntersecting) loop.play().catch(() => {});
    else loop.pause();
  }, { threshold: 0.05 });
  seen.observe(loop);
}
