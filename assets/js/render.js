/**
 * render.js — turns the data model into DOM.
 *
 * Each renderer builds an HTML string and injects it into its mount node.
 * Strings are escaped to avoid accidental markup injection from data edits.
 */

import { skills, projects, experience, education } from "./data.js";

/** Escape text destined for HTML context. */
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

const tagList = (tags = []) =>
  tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("");

function renderSkills(mount) {
  if (!mount) return;
  mount.innerHTML = skills
    .map(
      (g) => `
      <div class="skill-group reveal">
        <h3 class="skill-group__name">${esc(g.name)}</h3>
        <div class="skill-group__tags">${tagList(g.tags)}</div>
      </div>`
    )
    .join("");
}

function renderProjects(mount) {
  if (!mount) return;
  mount.innerHTML = projects
    .map((p) => {
      const links = (p.links || [])
        .map(
          (l) =>
            `<a class="card__link" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`
        )
        .join("");

      return `
      <article class="card reveal${p.feature ? " card--feature" : ""}">
        <div class="card__head">
          <div class="card__top">
            <span class="card__kicker">${esc(p.kicker)}</span>
            <div class="card__links">${links}</div>
          </div>
          <h3 class="card__title">${esc(p.title)}</h3>
        </div>
        <div class="card__body">
          <p class="card__desc">${esc(p.desc)}</p>
          <div class="card__tags">${tagList(p.tags)}</div>
        </div>
      </article>`;
    })
    .join("");
}

function renderExperience(mount) {
  if (!mount) return;
  mount.innerHTML = experience
    .map(
      (job) => `
      <article class="job reveal">
        <div class="job__period">${esc(job.period)}</div>
        <div class="job__detail">
          <h3 class="job__role">${esc(job.role)} <span class="job__company">· ${esc(job.company)}</span></h3>
          <ul class="job__points">
            ${job.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}
          </ul>
        </div>
      </article>`
    )
    .join("");
}

function renderEducation(mount) {
  if (!mount) return;
  mount.innerHTML = education
    .map(
      (e) => `
      <article class="edu-card reveal">
        <span class="edu-card__period">${esc(e.period)}</span>
        <h3 class="edu-card__degree">${esc(e.degree)}</h3>
        <p class="edu-card__school">${esc(e.school)}</p>
        <p class="edu-card__note">${esc(e.note)}</p>
      </article>`
    )
    .join("");
}

/** Render every data-driven section. */
export function renderAll() {
  renderSkills(document.getElementById("skills"));
  renderProjects(document.getElementById("projects"));
  renderExperience(document.getElementById("timeline"));
  renderEducation(document.getElementById("education-list"));
}
