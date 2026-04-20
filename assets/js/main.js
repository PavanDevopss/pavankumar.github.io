const CONTENT = {
  hero: {
    name: "VADALA PAVAN KUMAR",
    title: "DevSecOps Engineer | Site Reliability Engineer",
    tagline: "Building reliable systems, automating everything, and ensuring zero-downtime deployments.",
    stats: [
      {
        value: "3+ Years",
        label: "Hands-on DevOps and SRE experience"
      },
      {
        value: "4 Environments",
        label: "DEV to PROD release orchestration"
      },
      {
        value: "Zero Downtime",
        label: "Deployment strategy and rollback focus"
      }
    ]
  },
  about: "DevSecOps and Site Reliability Engineer with 3+ years of experience building CI/CD pipelines, automating release workflows, and supporting hybrid infrastructure across on-prem and AWS environments. I focus on reducing manual deployment effort, strengthening rollback readiness, and improving production reliability through scripting, observability, and disciplined release governance.",
  skills: [
    {
      title: "DevOps",
      items: [
        "CI/CD",
        "Release Management",
        "Rollbacks",
        "Incident Management",
        "RCA",
        "High Availability"
      ]
    },
    {
      title: "Cloud",
      items: [
        "AWS EC2",
        "AWS VPC",
        "AWS IAM",
        "AWS S3",
        "AWS RDS",
        "AWS ALB",
        "Azure (Basic)"
      ]
    },
    {
      title: "Tools",
      items: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI/CD",
        "Bitbucket Pipelines",
        "Nexus",
        "SonarQube"
      ]
    },
    {
      title: "Automation",
      items: [
        "Bash",
        "Python",
        "Ansible",
        "Cron Jobs"
      ]
    },
    {
      title: "Containers",
      items: [
        "Docker",
        "Kubernetes"
      ]
    },
    {
      title: "Monitoring",
      items: [
        "Prometheus",
        "Grafana",
        "CloudWatch",
        "Health Checks",
        "Alert Notifications"
      ]
    }
  ],
  experience: [
    {
      role: "DevOps Engineer / Site Reliability Engineer",
      company: "Varun Group",
      location: "India",
      duration: "Jan 2025 - Present",
      projects: "Varun Management System, V-Promise, HRMS, EAM, VMS-Audit, MMS, Cosec-Backend",
      impacts: [
        "Built multi-environment CI/CD pipelines across DEV, QA, UAT, and PROD using Jenkins, GitHub Actions, GitLab CI/CD, and Bitbucket Pipelines to standardize releases for multiple business-critical applications.",
        "Automated branch-based deployments with Bash and Ansible, cutting manual release handling and improving deployment consistency across teams.",
        "Established release governance with approvals, tagging strategy, branch protection, and rollback paths to support safer production deployments.",
        "Implemented cron-based automation for health checks, database backups, cleanup workflows, and alert notifications to reduce operational toil.",
        "Handled production incidents with root cause analysis and Git-based rollback execution, strengthening service continuity and recovery readiness.",
        "Integrated SonarQube and Nexus into release workflows to improve code quality gates and artifact traceability."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Amunik Software Solutions Pvt. Ltd.",
      location: "Vijayawada - Remote",
      duration: "Mar 2023 - Dec 2024",
      projects: "JPF, VR-Garage, Clokam, HRMS, EAM",
      impacts: [
        "Managed AWS infrastructure across EC2, ALB, Auto Scaling, S3, IAM, RDS, and Route 53 to support secure, scalable application hosting.",
        "Built and maintained CI/CD pipelines with Jenkins and GitHub Actions, improving release repeatability for application teams.",
        "Configured IAM roles and access policies to align developer access with operational security needs.",
        "Supported Docker-based deployments and production troubleshooting to maintain service availability during releases.",
        "Created monitoring dashboards with CloudWatch, Prometheus, and Grafana, enabling earlier failure detection and faster response.",
        "Helped scale infrastructure and networking design with NAT, private/public architecture, and alerting for production anomalies."
      ]
    },
    {
      role: "DevOps Intern",
      company: "Pivotal Software Solutions Pvt. Ltd.",
      location: "Visakhapatnam - Remote",
      duration: "Feb 2022 - Feb 2023",
      projects: "AWS infrastructure setup and CI/CD support",
      impacts: [
        "Supported AWS environments using EC2, VPC, IAM, and Linux servers while learning production-grade operational patterns.",
        "Assisted with Jenkins pipeline setup and deployment environment configuration for application delivery workflows.",
        "Built practical hands-on depth in Linux administration, release operations, and cloud fundamentals through implementation-focused work."
      ]
    }
  ],
  projects: [
    {
      slug: "cicd-pipeline",
      label: "CI/CD Pipeline System",
      title: "Multi-Environment Release Pipeline with Rollback Controls",
      summary: "A delivery system designed for predictable promotion from DEV to PROD with approvals, branch-based routing, artifact traceability, and rollback readiness.",
      problem: "Multiple applications were being released through manual steps, which increased deployment time, made approvals inconsistent, and created risk during production changes.",
      solution: "Designed a multi-stage release workflow using Jenkins and GitHub Actions with environment gates, branch-based triggers, tagged releases, and rollback procedures aligned to Git history and deployment versions.",
      tools: [
        "Jenkins",
        "GitHub Actions",
        "GitLab CI/CD",
        "Bitbucket Pipelines",
        "Bash",
        "Ansible",
        "SonarQube",
        "Nexus"
      ],
      architecture: "Developer Push\n   |\n   v\nBranch Policy + PR Review\n   |\n   v\nBuild + Test + SonarQube Scan\n   |\n   v\nArtifact Publish to Nexus\n   |\n   v\nDEV Deploy -> QA Deploy -> UAT Approval -> PROD Deploy\n   |\n   +--> Health Checks\n   +--> Release Tagging\n   +--> Git-Based Rollback Path",
      outcome: "Reduced manual release effort, increased deployment frequency in lower environments, and enabled zero-downtime production deployment patterns with a clear rollback path.",
      path: "projects/cicd-pipeline/"
    },
    {
      slug: "db-automation",
      label: "Database Automation System",
      title: "Backup, Restore, and Migration Automation for Safe Data Movement",
      summary: "An operational database toolkit for backups, restores, controlled migrations, and failure recovery with a zero-data-loss mindset.",
      problem: "Database migrations and recovery activities were high-risk when handled manually, especially across DEV, QA, UAT, and PROD environments where consistency and recovery speed matter.",
      solution: "Created scripted backup, restore, and migration workflows using Bash, Python, and cron scheduling with validation checkpoints, recovery sequencing, and environment-aware execution paths.",
      tools: [
        "Bash",
        "Python",
        "Cron",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "PgBouncer"
      ],
      architecture: "Scheduled Backup Jobs\n   |\n   v\nEncrypted Backup Storage\n   |\n   +--> Restore Validation Sandbox\n   |\n   +--> Migration Script Runner\n           |\n           v\nEnvironment Promotion Checks\n           |\n           v\nRecovery Workflow + Verification",
      outcome: "Improved recovery confidence, supported critical database restoration after accidental deletion, and reduced the operational risk of repeated migration work.",
      path: "projects/db-automation/"
    },
    {
      slug: "monitoring-setup",
      label: "Monitoring & Alerting Stack",
      title: "Observability Stack for Faster Detection and Response",
      summary: "A monitoring foundation combining metrics, dashboards, health checks, and alerting to catch failures before users are impacted.",
      problem: "Without clear dashboards and alerting, production issues take longer to detect, triage, and resolve, which increases downtime risk and slows incident response.",
      solution: "Configured Prometheus, Grafana, and CloudWatch dashboards with service health checks, system metrics, and alert notifications to surface application and infrastructure issues early.",
      tools: [
        "Prometheus",
        "Grafana",
        "CloudWatch",
        "Linux",
        "Email Alerts",
        "Health Check Scripts"
      ],
      architecture: "Applications + Servers + AWS Resources\n   |\n   +--> Prometheus Scrape Targets\n   |\n   +--> CloudWatch Metrics and Logs\n           |\n           v\nGrafana Dashboards\n   |\n   v\nAlert Rules -> Email Notifications -> Incident Response",
      outcome: "Improved proactive failure detection, supported high-availability operations, and gave teams clearer visibility during production incidents and scaling events.",
      path: "projects/monitoring-setup/"
    }
  ],
  achievements: [
    {
      title: "Zero-Downtime Release Strategy",
      description: "Implemented deployment workflows with rollback controls that supported service continuity during production releases."
    },
    {
      title: "Critical Database Recovery",
      description: "Restored production databases after accidental deletion using prepared backup and recovery procedures."
    },
    {
      title: "Automation-Led Delivery",
      description: "Replaced repetitive manual deployment and maintenance tasks with scripted workflows across releases, backups, and health checks."
    },
    {
      title: "Performance Optimization",
      description: "Improved PostgreSQL efficiency using PgBouncer and configuration tuning to support more stable backend performance."
    }
  ],
  contact: [
    {
      type: "phone",
      label: "+91 9393141433",
      href: "tel:+919393141433",
      external: false
    },
    {
      type: "email",
      label: "iampavan.blue@gmail.com",
      href: "mailto:iampavan.blue@gmail.com",
      external: false
    },
    {
      type: "github",
      label: "GitHub Profile",
      href: "https://github.com/PavanDevopss",
      external: true
    },
    {
      type: "linkedin",
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/pavan-kumar-vadala/",
      external: true
    }
  ]
};

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
              <p class="timeline-meta">${item.company} - ${item.location}</p>
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

function loadContent() {
  document.querySelectorAll("[data-field='name']").forEach((node) => {
    node.textContent = CONTENT.hero.name;
  });
  document.querySelectorAll("[data-field='title']").forEach((node) => {
    node.textContent = CONTENT.hero.title;
  });
  document.querySelectorAll("[data-field='tagline']").forEach((node) => {
    node.textContent = CONTENT.hero.tagline;
  });

  const about = document.getElementById("about-copy");
  if (about) {
    about.textContent = CONTENT.about;
  }

  buildHeroStats(CONTENT.hero.stats);
  buildSkills(CONTENT.skills);
  buildExperience(CONTENT.experience);
  buildProjects(CONTENT.projects);
  buildAchievements(CONTENT.achievements);
  buildContact(CONTENT.contact);
  hydrateProjectPage(CONTENT);
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
loadContent();
