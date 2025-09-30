# Copilot Instructions for HelloAngular

## Project Overview
- This is an Angular application generated with Angular CLI v20.3.1.
- Main source code is in `src/app/` (root app and feature modules/components).
- Entry points: `src/main.ts` (browser), `src/main.server.ts` (server-side rendering).
- Styles are managed in `src/styles.scss` and component-level `.scss` files.
- Routing is configured in `src/app/app.routes.server.ts` and related files.

## Key Workflows
- **Start Dev Server:**
  - Use `ng serve` or `npm start` to launch at `http://localhost:4200/`.
- **Build:**
  - Run `ng build` to output to `dist/`.
- **Unit Tests:**
  - Run `ng test` or `npm test` (Karma runner).
- **Scaffolding:**
  - Use `ng generate component <name>` for new components.

## Project-Specific Patterns
- **Component Structure:**
  - Each feature (e.g., `hello`) has its own folder with `.ts`, `.html`, `.scss`, and `.spec.ts` files.
  - Example: `src/app/hello/hello.ts` (logic), `hello.html` (template), `hello.scss` (styles), `hello.spec.ts` (tests).
- **Configuration:**
  - App config files: `app.config.ts` (browser), `app.config.server.ts` (server).
- **Routing:**
  - Route definitions are split for browser/server in `app.routes.server.ts` and related files.
- **Testing:**
  - Unit tests are colocated as `.spec.ts` files next to source files.

## Conventions & Integration
- **Angular CLI conventions** are followed for file structure and commands.
- **No custom build/test scripts** detected; use standard Angular CLI commands.
- **No e2e framework configured by default.**
- **No backend integration** found; app is frontend-only unless server files are extended.

## External Dependencies
- Managed via `package.json`.
- No custom integration points or unusual dependencies detected.

## Quick Start Example
```bash
npm install
npm start
```

## Key Files & Directories
- `src/app/` — main app code
- `src/app/hello/` — example feature module
- `src/app/app.ts` — root app logic
- `src/app/app.html` — root template
- `src/app/app.config.ts` — browser config
- `src/app/app.config.server.ts` — server config
- `src/app/app.routes.server.ts` — server routes
- `src/styles.scss` — global styles

---
For more details, see `README.md` or Angular CLI docs.
