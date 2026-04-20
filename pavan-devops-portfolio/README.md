# Pavan DevOps Portfolio

Static DevOps portfolio website for **Vadala Pavan Kumar**, built for GitHub Pages deployment with plain HTML, CSS, and minimal JavaScript.

## Overview

This portfolio presents production-focused DevOps and SRE work in a recruiter-friendly format. The site highlights CI/CD design, automation workflows, hybrid infrastructure, observability, and real-world recovery experience.

## Live Demo

GitHub Pages URL:

`https://your-github-username.github.io/pavan-devops-portfolio/`

## Sections

- Hero section with role, positioning, and resume download
- About summary tailored to DevOps and reliability engineering
- Grouped skills for cloud, CI/CD, automation, containers, and monitoring
- Experience section rewritten as impact-driven production outcomes
- Three detailed DevOps project pages with problem, solution, architecture, tools, and outcome
- Achievements section focused on uptime, recovery, and automation wins
- Contact section for direct recruiter outreach

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- JSON content model
- GitHub Pages

## Project Structure

```text
pavan-devops-portfolio/
├── index.html
├── resume.pdf
├── README.md
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── projects/
│   ├── cicd-pipeline/
│   ├── db-automation/
│   └── monitoring-setup/
└── data/
    └── content.json
```

## Deployment

1. Push this folder to a GitHub repository.
2. In the repository settings, open `Pages`.
3. Set the deployment source to the default branch and root folder.
4. Save the settings and wait for GitHub Pages to publish the site.

## Local Preview

Open `index.html` directly in a browser for layout review.

For best results with JSON loading, serve the folder with a lightweight static server, for example:

```powershell
cd pavan-devops-portfolio
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The site is static and backend-free.
- Content is centralized in `data/content.json` for easy updates.
- Styling is intentionally minimal and performance-friendly.
- The layout is inspired by lightweight open-source portfolio patterns and fully customized for DevOps hiring use cases.
