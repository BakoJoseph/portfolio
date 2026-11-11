# Olamide — Developer Portfolio

A React portfolio for Olamide, built with Vite. It includes animated navigation, an intro, profile cards, an animated technology stack, a project gallery, About and Contact sections, and a responsive mobile menu.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Personalize the content

- Update the About copy and portrait in `src/constants/about.js`.
- Replace the placeholder social and email URLs in `src/constants/contactLinks.js`.
- Add each project’s title, description, image, and live URL in `src/constants/projects.js`.
- Update the profile cards and technology stack in their files under `src/constants/`.
- Keep the Altron and Goodly font files in `public/fonts/` so the deployed site can load them.

## Build for deployment

```bash
npm run build
```

Vite writes the production site to `dist/`. You can preview that build locally with:

```bash
npm run preview
```

## Deploy

This is a static Vite site; no server-side runtime or environment variables are required.

### Vercel

1. Push the project to a Git provider such as GitHub.
2. Import the repository in Vercel and keep the detected Vite framework preset.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Deploy.

### Netlify

1. Push the project to a Git provider such as GitHub.
2. Import the repository in Netlify.
3. Set the build command to `npm run build` and the publish directory to `dist`.
4. Deploy.

For other static hosts, use the same build command and publish the contents of `dist/`.
