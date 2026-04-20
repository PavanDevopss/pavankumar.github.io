# Pavan DevOps Portfolio

Static portfolio website for **Vadala Pavan Kumar**, built for GitHub Pages and served directly from the repository root on the `master` branch.

## Live Site

`https://pavandevopss.github.io/`

## Project Description

This portfolio presents production-focused DevOps and Site Reliability Engineering work in a clean recruiter-friendly format. It highlights CI/CD pipelines, infrastructure automation, observability, recovery planning, and platform operations experience.

## GitHub Pages Deployment

1. Push the repository to GitHub.
2. Open repository `Settings` -> `Pages`.
3. Set the source to the `master` branch.
4. Set the publishing folder to `/ (root)`.
5. Save the configuration and wait for the site to publish.

The site is structured so `index.html` lives in the repository root, which is required for this GitHub Pages setup.

## Local Preview

You can open `index.html` directly in a browser for a quick static preview.

For a closer match to GitHub Pages behavior, run a lightweight local server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Folder Structure

```text
/
|-- index.html
|-- resume.pdf
|-- resume-viewer.html
|-- README.md
|-- assets/
|   |-- css/
|   |   `-- main.css
|   |-- images/
|   |   |-- devops-grid.svg
|   |   `-- resume_qr.png
|   `-- js/
|       `-- main.js
`-- projects/
    |-- cicd-pipeline/
    |   `-- index.html
    |-- db-automation/
    |   `-- index.html
    `-- monitoring-setup/
        `-- index.html
```

## Notes

- The site is fully static and GitHub Pages ready.
- Resume download works from `resume.pdf` in the repository root.
- Resume preview opens through `resume-viewer.html`, which embeds the PDF and keeps a direct-open fallback.
- The QR code in `assets/images/resume_qr.png` points to the hosted resume URL for mobile download.
- Asset and project paths are root-ready and relative-path safe.
