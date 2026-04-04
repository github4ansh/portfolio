# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zero-dependency, single-page developer portfolio built with vanilla HTML, CSS, and JavaScript. No build tools, no frameworks, no package manager. Deployed via GitHub Pages.

## Development

Open `index.html` directly in a browser or serve via any static file server. No build step, no install step. No tests, no linter, no CI beyond GitHub Actions workflows for Claude code review.

## Architecture

**CONFIG-driven rendering:** All content is defined in a single `CONFIG` object at the top of `script.js` (lines 1–285). HTML sections in `index.html` are empty shells — JavaScript reads `CONFIG` and populates the DOM at runtime. **Never edit `index.html` to change content** — always edit `CONFIG` in `script.js`.

Key parts of CONFIG:
- `personal` / `social` — identity and links
- `sections` — boolean toggles to show/hide each section
- `features` — boolean toggles for particles, typing effect, scroll animations, etc.
- `skills`, `experience`, `projects`, `blog`, `education`, `certifications`, `awards` — content arrays
- `navLinks` — navigation menu items (auto-filtered by section toggles)

**Rendering flow (script.js):** A single IIFE (line 293) wraps all logic. `init()` (line 1066) calls builder functions in order (`buildNav` → `buildHero` → `buildAbout` → `buildSkills` → `buildExperience` → `buildProjects` → `buildBlog` → `buildContact` → `buildFooter`) then initializes interactive features (`startTypingEffect`, `initParticles`, `initScrollAnimations`, `initSmoothScroll`, `initActiveNav`, `initContactForm`, `animateHeroEntrance`). Runs on `DOMContentLoaded` or immediately if DOM is already ready.

**DOM helper:** `el(tag, attrs, ...children)` creates DOM elements. `$` and `$$` are querySelector/querySelectorAll shortcuts. All three are local to the IIFE.

**Hero particle system:** The canvas (`#particles`) renders both ambient floating particles and interactive social-link icons (GitHub, LinkedIn, Blog) that drift, connect to nearby particles via lines, respond to hover, and open URLs on click. Icon shapes are SVG paths drawn via `Path2D`.

**Contact form:** Submitting the form opens the user's email client via `mailto:` — there is no backend. This is intentional (see `initContactForm`).

**Theme system:** Dark (default) and light themes via CSS custom properties on `[data-theme]` attribute, persisted in `localStorage` under key `portfolio-theme`.

**Styling (style.css):** Uses BEM naming (`.nav__link`, `.hero__content`, `.skills__card`), CSS custom properties for theming, `clamp()` for responsive typography, glassmorphism via `backdrop-filter`, and CSS Grid/Flexbox for layout.

**Chatbot widget:** A floating chat button (bottom-right) opens a panel where visitors can ask questions about Ansh's professional background. Controlled by `CONFIG.features.enableChatbot` and configured via `CONFIG.chatbot` (API URL, starter questions). The frontend streams responses via SSE from a Vercel Edge Function backend (`portfolio-api` repo) that proxies the Anthropic Claude API. The backend lives in a separate repo/deployment at `https://portfolio-api-sigma-one.vercel.app/api/chat` with CORS locked to `github4ansh.github.io` and `localhost`. The `ANTHROPIC_API_KEY` env var is set on Vercel. CSS uses BEM under `.chat-fab`, `.chat-panel`, `.chat-msg`, `.chat-chip` classes.

## Adding a New Section

1. Add a toggle in `CONFIG.sections` and content data in `CONFIG`
2. Add an empty `<section>` in `index.html`
3. Write a `buildSectionName()` function following existing patterns
4. Call it from `init()`, guarded by `CONFIG.sections.showSectionName`
5. Add corresponding styles in `style.css`
6. Add a nav link entry in `CONFIG.navLinks` (label must match the section toggle key after `show`)
