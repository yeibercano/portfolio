# Portfolio

A personal portfolio website built with Vite and React.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   ```

## Project Structure

- `src/App.jsx` - Main app component
- `src/App.css` - App-specific styles
- `src/index.css` - Global styles
- `public/` - Static assets
- `index.html` - Main HTML file

## Sanity CMS Integration

This site uses a Sanity headless CMS connection with fallback content when no Sanity project is configured.

1. Copy `.env.example` to `.env`.
2. Fill in your Sanity project values:
   ```bash
   VITE_SANITY_PROJECT_ID=yourProjectId
   VITE_SANITY_DATASET=production
   VITE_SANITY_USE_CDN=true
   ```
3. Restart the Vite dev server.

The frontend will fetch content from Sanity if configured, or use built-in fallback content otherwise.

## Deployment

The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages by running `npm run build` and uploading the `dist` folder.