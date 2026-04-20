const DATA_PATH = document.body.dataset.page === "project" ? "../../data/content.json" : "data/content.json";

const icons = {
  phone: "Phone",
  email: "Email",
  github: "GitHub",
  linkedin: "LinkedIn"
};

function buildHeroStats(stats) {
  const wrapper = document.getElementById("hero-stats");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = stats
    .map(
      (stat) => `
        <div>
          <dt>${stat.value}</dt>
          <dd>${stat.label}</dd>
        </div>
      `
    )
    .join("");
}

function buildSkills(groups) {
  const wrapper = document.getElementById("skills-grid");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = groups
    .map(
      (group) => `
        <article class="skill-group">
          <h3>${group.title}</h3>
          <div class="chip-list">
            ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function buildExperience(items) {
  const wrapper = document.getElementById("experience-timeline");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3>${item.role}</h3>
              <p class="timeline-meta">${item.company} • ${item.location}</p>
            </div>
            <p class="timeline-meta">${item.duration}</p>
          </div>
          <p class="timeline-projects">Projects: ${item.projects}</p>
          <ul class="impact-list">
            ${item.impacts.map((impact) => `<li>${impact}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function buildProjects(items) {
  const wrapper = document.getElementById("project-grid");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = items
    .map(
      (item) => `
        <article class="project-card">
          <p class="eyebrow">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="project-tools">
            ${item.tools.map((tool) => `<span>${tool}</span>`).join("")}
          </div>
          <a class="button-link" href="${item.path}">View Architecture</a>
        </article>
      `
    )
    .join("");
}

function buildAchievements(items) {
  const wrapper = document.getElementById("achievement-grid");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = items
    .map(
      (item) => `
        <article class="achievement-card">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `
    )
    .join("");
}

function buildContact(items) {
  const wrapper = document.getElementById("contact-list");
  if (!wrapper) {
    return;
  }

  wrapper.innerHTML = items
    .map(
      (item) => `
        <a class="contact-item" href="${item.href}" ${item.external ? 'target="_blank" rel="noreferrer"' : ""}>
          <span>${icons[item.type] || item.type}</span>
          <span>${item.label}</span>
        </a>
      `
    )
    .join("");
}

function hydrateProjectPage(content) {
  const slug = document.body.dataset.project;
  if (!slug) {
    return;
  }

  const project = content.projects.find((item) => item.slug === slug);
  if (!project) {
    return;
  }

  document.title = `${project.title} | Vadala Pavan Kumar`;
  document.querySelector("[data-project='title']").textContent = project.title;
  document.querySelector("[data-project='summary']").textContent = project.summary;
  document.querySelector("[data-project='problem']").textContent = project.problem;
  document.querySelector("[data-project='solution']").textContent = project.solution;
  document.querySelector("[data-project='outcome']").textContent = project.outcome;
  document.querySelector("[data-project='architecture']").textContent = project.architecture;
  document.querySelector("[data-project='tools']").innerHTML = project.tools.map((tool) => `<span>${tool}</span>`).join("");
}

async function loadContent() {
  const response = await fetch(DATA_PATH);
  const content = await response.json();

  document.querySelectorAll("[data-field='name']").forEach((node) => {
    node.textContent = content.hero.name;
  });
  document.querySelectorAll("[data-field='title']").forEach((node) => {
    node.textContent = content.hero.title;
  });
  document.querySelectorAll("[data-field='tagline']").forEach((node) => {
    node.textContent = content.hero.tagline;
  });

  const about = document.getElementById("about-copy");
  if (about) {
    about.textContent = content.about;
  }

  buildHeroStats(content.hero.stats);
  buildSkills(content.skills);
  buildExperience(content.experience);
  buildProjects(content.projects);
  buildAchievements(content.achievements);
  buildContact(content.contact);
  hydrateProjectPage(content);
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });
}

setupNav();
loadContent().catch((error) => {
  console.error("Unable to load portfolio content", error);
});
