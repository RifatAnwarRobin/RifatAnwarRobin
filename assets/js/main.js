/**
 * main.js — entry point.
 *
 * Render data-driven sections first, then attach presentation behaviour.
 * Order matters: scrollReveal must run after renderAll so it can observe the
 * `.reveal` nodes the renderers create.
 */

import { renderAll } from "./render.js";
import {
  neuralField,
  scrollReveal,
  navToggle,
  navScrollState,
  stampYear,
} from "./effects.js";

function init() {
  renderAll();

  neuralField(document.getElementById("neuralField"));
  scrollReveal();
  navToggle();
  navScrollState();
  stampYear();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
