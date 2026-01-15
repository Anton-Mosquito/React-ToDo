# React ToDo

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite. Open http://localhost:5173 to view it.

### `npm run build`

Builds the app for production using `vite build`. The production output is in the `dist/` folder.

### `npm run preview`

Preview the production build locally after `npm run build` using `vite preview`.

### `npm test`

Runs the test script (currently uses the CRA test runner). Consider migrating tests to Vitest in a follow-up.

### `npm run lint`

Runs ESLint across the project. Use `npm run lint:fix` to auto-fix problems where possible.

## Deployment

This repository uses a GitHub Actions workflow to build and publish the `dist/` folder to the `gh-pages` branch on pushes to `main`.

Workflow: `.github/workflows/deploy.yml` — it runs `npm ci`, `npm run build` and publishes `dist/` using `peaceiris/actions-gh-pages`.

If you prefer a different deploy action, adjust the workflow accordingly.

## Learn More

GitHub Pages site (deployed): https://anton-mosquito.github.io/React-ToDo/
