# Ansh Agarwal — Developer Portfolio

A hand-crafted, modern portfolio website built with pure HTML, CSS, and JavaScript. Zero dependencies. Zero build steps. GitHub Pages ready.

> **Live Demo:** [https://github4ansh.github.io/portfolio](https://github4ansh.github.io/portfolio) *(update after deployment)*

---

## Features

- Dark / Light theme toggle with smooth transitions
- Animated particle background in the hero section
- Typing effect with rotating titles
- Scroll-triggered reveal animations
- Fully responsive (mobile → tablet → desktop)
- Alternating timeline layout for experience
- Glassmorphism navigation with backdrop blur
- All content driven from a single `CONFIG` object — zero HTML editing needed
- Section and feature toggles via config flags
- CSS custom properties for instant theme swapping
- Print-friendly styles included
- Semantic HTML5 with ARIA labels for accessibility

---

## Folder Structure

```
Portfolio/
├── index.html    # Semantic HTML shell — all content injected by JS
├── style.css     # Complete styling: dark/light themes, responsive, animations
├── script.js     # CONFIG object + rendering logic (edit CONFIG only)
└── README.md     # This file
```

---

## Deployment — GitHub Pages

### Option A: User/Org site (`username.github.io`)

1. Create a repo named `username.github.io`
2. Copy `index.html`, `style.css`, and `script.js` into the root
3. Push to `main` branch
4. Go to **Settings → Pages → Source** → select `main` / `/ (root)` → Save
5. Your site will be live at `https://username.github.io`

### Option B: Project site (`username.github.io/portfolio`)

1. Create a repo (e.g., `portfolio`)
2. Copy the files into the root
3. Push to `main`
4. Go to **Settings → Pages → Source** → select `main` / `/ (root)` → Save
5. Live at `https://username.github.io/portfolio`

No build step is needed — the site is static HTML/CSS/JS.

---

## How to Update

All changes are made in `script.js` inside the `CONFIG` object at the top of the file. You never need to touch `index.html`.

### Change Personal Info

Edit `CONFIG.personal`:
```js
personal: {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  tagline: "Your compelling tagline...",
  email: "you@example.com",
  resumeURL: "link-to-resume.pdf",
},
```

### Add a New Job

Add an entry to the `CONFIG.experience` array:
```js
{
  company: "Company Name",
  role: "Your Role",
  period: "Mon YYYY — Mon YYYY",
  location: "City, Country",
  tech: ["Tech1", "Tech2"],
  highlights: [
    "Impact-driven bullet point 1",
    "Impact-driven bullet point 2",
  ],
},
```

### Add a New Project

Add an entry to `CONFIG.projects`:
```js
{
  title: "Project Name",
  description: "What you built and why.",
  tags: ["Tag1", "Tag2"],
  github: "https://github.com/...",
  demo: "https://demo-link.com",
  featured: true, // shows a "Featured" badge
},
```

### Add a New Blog Post

Add to `CONFIG.blog`:
```js
{
  title: "Blog Post Title",
  excerpt: "First couple of sentences...",
  date: "Mar 7, 2026",
  url: "https://your-blog.com/post-slug/",
  tags: ["Tag1", "Tag2"],
},
```

### Add a New Skill Category

Add to `CONFIG.skills`:
```js
{
  category: "Category Name",
  icon: "🎯",
  items: ["Skill1", "Skill2", "Skill3"],
},
```

### Swap the Color Theme

Edit CSS custom properties in `style.css` under `[data-theme="dark"]` or `[data-theme="light"]`. Key variables:

| Variable | What it controls |
|----------|-----------------|
| `--accent` | Primary accent color |
| `--accent-secondary` | Secondary accent |
| `--bg-primary` | Page background |
| `--bg-card` | Card backgrounds |
| `--text-primary` | Main text color |
| `--gradient-primary` | Gradient used on headings & buttons |

### Enable/Disable Sections

Toggle in `CONFIG.sections`:
```js
sections: {
  showHero: true,
  showAbout: true,
  showSkills: true,
  showExperience: true,
  showProjects: true,
  showBlog: false, // hides blog section
  showContact: true,
},
```

### Enable/Disable Features

Toggle in `CONFIG.features`:
```js
features: {
  enableParticles: true,       // particle animation
  enableScrollAnimations: true, // scroll reveals
  enableTypingEffect: true,     // typing animation
  enableSmoothScroll: true,     // smooth scroll
  defaultTheme: "dark",         // "dark" or "light"
},
```

### Adding a New Section

1. Add a `<section id="newsection">` in `index.html`
2. Add a `showNewsection: true` flag in `CONFIG.sections`
3. Write a `buildNewsection()` function in `script.js`
4. Call it from `init()`
5. Add styles in `style.css`
6. Add a nav link in `CONFIG.navLinks`

---

## Dependencies

**Zero dependencies.** No npm, no build tools, no frameworks.

- Fonts loaded from Google Fonts CDN (Inter + JetBrains Mono)
- Everything else is vanilla HTML5, CSS3, and ES6+ JavaScript

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 80+ | Full |
| Firefox 80+ | Full |
| Safari 14+ | Full |
| Edge 80+ | Full |
| Mobile Safari (iOS 14+) | Full |
| Chrome Android | Full |

Uses modern CSS features: `backdrop-filter`, `clamp()`, custom properties, `gap` in flexbox. All supported in browsers from ~2020 onward.

---

## Future Enhancements

- **CMS Integration** — Connect to a headless CMS (Contentful, Sanity) to manage content without editing code
- **Contact Form Backend** — Integrate Formspree, Netlify Forms, or a serverless function for actual form submissions
- **Analytics** — Add Plausible, Umami, or Google Analytics for visitor tracking
- **Blog RSS Feed** — Auto-pull latest posts from Bear Blog's RSS feed
- **Dark Mode System Preference** — Detect `prefers-color-scheme` to auto-set theme on first visit
- **i18n** — Multi-language support via CONFIG locale keys
- **PDF Resume Generation** — Auto-generate resume PDF from CONFIG data
- **Testimonials Section** — Add a carousel/grid of recommendations
- **Project Screenshots** — Add image support to project cards with lazy loading
- **Performance Metrics** — Add Lighthouse CI to track performance scores

---

## License

MIT — feel free to fork and customize for your own portfolio.
