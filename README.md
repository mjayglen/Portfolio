https://github.com/mjayglen/Portfolio/releases

# React + Vite Portfolio — Responsive Frontend Showcase & Skills 🎨⚡️

[![Releases](https://img.shields.io/badge/Releases-Download-blue?logo=github)](https://github.com/mjayglen/Portfolio/releases)
[![Vite](https://img.shields.io/badge/Vite-4.0-brightgreen?logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)]
[![License](https://img.shields.io/badge/License-MIT-lightgrey)]

Preview image
![Portfolio preview](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80)

About
- Frontend portfolio built with React and Vite.
- Shows projects, tech skills, and certifications.
- Uses responsive layout and performance-focused patterns.
- Optimized for modern browsers and mobile devices.

Demo
- Live demo runs from the built static site or a deployed branch.
- For packaged releases, download the release asset and run the included start script.
- Download the release asset (for example, portfolio.zip) from https://github.com/mjayglen/Portfolio/releases and execute the included start script (start.sh or ./run.sh) to serve the build locally.

Why this repo
- Present your work with semantic HTML and accessible patterns.
- Use React components and Vite for fast dev feedback.
- Keep assets small and use lazy loading where appropriate.
- Provide a clear, shareable artifact for hiring managers and clients.

Key features
- Responsive grid for project cards.
- Filterable list of skills and tags.
- Certificate section with issued date and issuer.
- Dark and light theme with CSS variables.
- Image optimization and preloading for key assets.
- Simple content management via JSON or markdown.
- CI-friendly build that outputs static files for any static host.

Tech stack and topics
- React (components, hooks)
- Vite (dev server, build)
- HTML5, CSS3, modern JavaScript (ES modules)
- Responsive design, accessibility
- Topics: css, developer-portfolio, frontend, html5, javascript, modern-ui, portfolio, react, responsive-design, vite, web-development

Setup — developer mode
1. Clone the repo
```bash
git clone https://github.com/mjayglen/Portfolio.git
cd Portfolio
```
2. Install dependencies
```bash
npm install
# or
pnpm install
# or
yarn
```
3. Run local dev server
```bash
npm run dev
```
- Vite serves the app with HMR. Open the URL Vite prints in the terminal.

Build and serve production
```bash
npm run build
npm run preview
```
- `build` creates a production-ready `dist/`.
- `preview` serves the `dist/` locally for a final check.

Release artifacts
- Visit the Releases page: https://github.com/mjayglen/Portfolio/releases
- Download the release asset (for example, portfolio-v1.0.0.zip).
- Extract the archive and execute the provided start script:
```bash
unzip portfolio-v1.0.0.zip
cd portfolio
# if a start script is provided:
chmod +x start.sh
./start.sh
# or serve the folder:
npx http-server ./dist -p 8080
```
- The release includes a ready-to-serve static build and a short README with the asset name and recommended run steps.

Design and UI notes
- Component-based design. Each page uses a small set of reusable components:
  - Header / Nav
  - ProjectCard
  - SkillList
  - CertCard
  - Footer
- CSS uses variables for theme values. Use a single source of truth for colors and spacing.
- Use prefers-reduced-motion for animations when possible.

Accessibility (a11y)
- Use semantic tags: header, main, nav, section, footer.
- Provide alt text for images and aria-labels for interactive controls.
- Ensure contrast meets WCAG AA for body text.
- Keyboard navigation for focusable elements.

Performance
- Use Vite’s ES module dev server for small rebuilds.
- Use code splitting for large libraries and dynamic imports for optional sections.
- Preload hero image and critical CSS.
- Defer non-critical scripts and use native lazy loading for below-the-fold images.

Folder structure (example)
- public/           // static assets, favicon, robots.txt
- src/
  - assets/         // images, icons
  - components/     // React components
  - pages/          // page containers
  - styles/         // CSS or PostCSS
  - data/           // projects.json, skills.json, certs.json
  - main.jsx        // app entry
- index.html
- package.json
- vite.config.js

Content model
- Projects:
  - id, title, description, tech[], repo, live, image
- Skills:
  - name, level, category, years
- Certifications:
  - title, issuer, date, link, badgeImage

Deployment
- Build outputs static assets. Deploy to:
  - GitHub Pages
  - Vercel
  - Netlify
  - Any static host
- Example: deploy to GitHub Pages
```bash
npm run build
# push the contents of dist/ to gh-pages branch, or use a deploy action
```

Testing and linting
- Add ESLint and Prettier for consistent style.
- Run unit tests for key components where logic is non-trivial.
- Check CI pipeline to ensure build passes on push.

Customization guide
- Replace projects in src/data/projects.json with your own work.
- Update skills and certs files.
- Swap hero image in public/hero.jpg.
- Edit color variables in src/styles/variables.css to match your brand.

Contributing
- Use clear, focused PRs.
- Add tests for new logic.
- Keep changes small and documented in the PR description.
- Use the issue tracker for feature requests or bug reports.

Badges and SEO
- Add Open Graph tags in index.html for better previews.
- Use descriptive titles and meta descriptions per page.
- Keep headings semantic and unique per section.

Common commands
- npm run dev     # start dev server
- npm run build   # build production
- npm run preview # preview build
- npm test        # run tests (if configured)
- npm run lint    # run linters

Troubleshooting
- If a dependency fails to install, delete node_modules and reinstall.
- If Vite fails to start, check for conflicting ports or a stale cache:
```bash
npx kill-port 5173
npm run dev
```

License
- MIT License. See LICENSE file for details.

Contact
- Report issues on the repository issues page.
- Open PRs for improvements or content updates.

Releases
[![Download Releases](https://img.shields.io/badge/Release-Page-blue?logo=github)](https://github.com/mjayglen/Portfolio/releases)

- Visit the Releases page to download packaged builds.
- Download the release asset (e.g., portfolio-vX.Y.Z.zip) and extract it.
- Execute the included start script to launch the build locally, or serve the dist folder with any static server.