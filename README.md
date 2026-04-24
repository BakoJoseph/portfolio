# NeXus Portfolio

A React + Vite portfolio website built around a custom single-page experience with a dedicated projects view.

## Overview

This project presents a personal developer portfolio with:

- an animated landing page
- dedicated sections for home, about, skills, projects, GitHub activity, and contact
- a separate `/projects` route handled in the client
- custom glassmorphism styling, motion, and interactive UI elements

## Stack

- React 19
- Vite 8
- React Icons
- Plain CSS with inline component styling

## Project Structure

```text
src/
  App.jsx                       App-level route switching
  NeXus.jsx                     Main portfolio page
  ProjectsPage.jsx              Standalone projects page
  components/sections/          Section components
  styles.css                    Global styles and animations
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Routing

This site uses lightweight client-side navigation instead of a full routing library.

- `/` renders the main `NeXus` portfolio page
- `/projects` renders the standalone projects page

Navigation is managed in `src/App.jsx` with `window.history.pushState()` and `popstate`.

## Main Sections

- Home
- About
- Skills
- Projects
- GitHub
- Contact

## Notes

- The GitHub activity area includes fallback data if the GitHub events request fails.
- Styling is primarily driven by `src/styles.css` plus component-level inline styles.
- The app is configured as a private frontend project and is ready for static deployment.

## Author

Olamide Joseph
Built for the NeXus portfolio site.
