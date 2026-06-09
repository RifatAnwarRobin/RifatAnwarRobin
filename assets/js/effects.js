/**
 * effects.js — presentation behaviour, independent of content.
 *
 * Exports init functions that are safe no-ops when their target is absent or
 * when the user prefers reduced motion.
 */

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Signature element: a slow "neural field" of drifting nodes with faint links,
 * evoking an embedding space. Lightweight, pauses when the tab is hidden, and
 * is skipped entirely on reduced-motion or very small screens.
 */
export function neuralField(canvas) {
  if (!canvas || prefersReducedMotion() || window.innerWidth < 680) return;

  const ctx = canvas.getContext("2d");
  let raf = 0;
  let w = 0;
  let h = 0;
  let nodes = [];
  const LINK_DIST = 130;

  const accent = (alpha) => `rgba(138, 123, 255, ${alpha})`;

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(64, Math.round((w * h) / 19000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
    }

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = accent(0.10 * (1 - dist / LINK_DIST));
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = accent(0.6);
    for (const n of nodes) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(frame);
  }

  function start() { if (!raf) raf = requestAnimationFrame(frame); }
  function stop() { cancelAnimationFrame(raf); raf = 0; }

  size();
  start();

  window.addEventListener("resize", size, { passive: true });
  document.addEventListener("visibilitychange", () =>
    document.hidden ? stop() : start()
  );
}

/** Reveal elements tagged `.reveal` as they enter the viewport. */
export function scrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/** Mobile nav open/close + close on link click. */
export function navToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  const close = () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/** Add a hairline border to the nav once the page is scrolled. */
export function navScrollState() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/** Stamp the current year into the footer. */
export function stampYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}
