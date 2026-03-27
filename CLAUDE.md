# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Zero-dependency, single-page developer portfolio built with vanilla HTML, CSS, and JavaScript. No build tools, no frameworks, no package manager.

## Development

Open `index.html` directly in a browser or serve via any static file server. No build step, no install step.

## Architecture

**CONFIG-driven rendering:** All content is defined in a single `CONFIG` object at the top of `script.js`. HTML sections in `index.html` are empty shells — JavaScript reads `CONFIG` and populates the DOM at runtime.

Key parts of CONFIG:
- `personal` / `social` — identity and links
- `sections` — boolean toggles to show/hide each section
- `features` — boolean toggles for particles, typing effect, scroll animations, etc.
- `skills`, `experience`, `projects`, `blog`, `education`, `certifications`, `awards` — content arrays
- `navLinks` — navigation menu items

**To update content:** Edit CONFIG values in `script.js`. No HTML changes needed.

**Rendering flow (script.js):** An IIFE at the bottom calls builder functions (`buildNav`, `buildHero`, `buildAbout`, `buildSkills`, `buildExperience`, `buildProjects`, `buildBlog`, `buildContact`, `buildFooter`) then initializes interactive features via `init()`.

**DOM helper:** `el(tag, attrs, ...children)` creates DOM elements. `$` and `$$` are querySelector/querySelectorAll shortcuts.

**Theme system:** Dark (default) and light themes via CSS custom properties on `[data-theme]` attribute, persisted in localStorage.

**Styling (style.css):** Uses BEM naming (`.nav__link`, `.hero__content`, `.skills__card`), CSS custom properties for theming, `clamp()` for responsive typography, glassmorphism via `backdrop-filter`, and CSS Grid/Flexbox for layout.

## Adding a New Section

1. Add a toggle in `CONFIG.sections` and content data in `CONFIG`
2. Add an empty `<section>` in `index.html`
3. Write a `buildSectionName()` function following existing patterns
4. Call it from the IIFE, guarded by `CONFIG.sections.showSectionName`
5. Add corresponding styles in `style.css`
