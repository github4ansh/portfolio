/* ==========================================================================
   PORTFOLIO CONFIG — Edit ONLY this object to update all content.
   Zero HTML changes needed. Every section reads from CONFIG.
   ========================================================================== */

const CONFIG = {
  /* ── Meta & Personal ──────────────────────────────────────────────────── */
  meta: {
    siteTitle: "Ansh Agarwal | Software Dev",
    faviconEmoji: "🚀",
  },

  personal: {
    name: "Ansh Agarwal",
    title: "Tech-Agnostic Software Development Engineer",
    subtitle: "AI & Data Science Enthusiast",
    tagline: "I build cloud-native, data-driven solutions with AI at the helm — transforming complex business problems into elegant software.",
    location: "India",
    email: "deianshagarwal@gmail.com",
    resumeURL: "#", // Replace with actual resume PDF link
  },

  social: {
    github: "https://github.com/github4ansh",
    linkedin: "https://www.linkedin.com/in/agarwal-ansh/",
    blog: "https://ansh-corner.bearblog.dev/",
  },

  /* ── Section Toggles ──────────────────────────────────────────────────── */
  sections: {
    showHero: true,
    showAbout: true,
    showSkills: true,
    showExperience: true,
    showProjects: true,
    showBlog: true,
    showContact: true,
  },

  /* ── Feature Toggles ──────────────────────────────────────────────────── */
  features: {
    enableParticles: true,      // Animated particle background in hero
    enableScrollAnimations: true, // Scroll-triggered fade-in effects
    enableTypingEffect: true,    // Typing animation in hero
    enableSmoothScroll: true,    // Smooth scroll for nav links
    enableChatbot: true,         // AI chatbot widget
    defaultTheme: "dark",        // "dark" or "light"
  },

  /* ── Chatbot ─────────────────────────────────────────────────────────── */
  chatbot: {
    apiURL: "https://portfolio-api-sigma-one.vercel.app/api/chat",
    starterQuestions: [
      "What's his tech stack?",
      "Tell me about his AI/ML experience",
      "What projects has he built?",
      "What's his work experience?",
    ],
  },

  /* ── About Section ────────────────────────────────────────────────────── */
  about: {
    paragraphs: [
      "I'm a Software Development Engineer with <strong>5+ years</strong> of experience at the intersection of technology, business, and innovation. My journey started in the manufacturing sector — building automation solutions and real-time analytics that transformed critical operations and delivered measurable business value.",
      "Over the years, I've expanded into <strong>full-stack development</strong>, <strong>cloud-native engineering</strong> (Azure & AWS), <strong>Data Science</strong> (EDA, ETL, Forecasting), and most recently, <strong>Generative AI</strong> — where I built RAG-based enterprise Q&A systems that put intelligent information retrieval at people's fingertips.",
      "I enjoy wearing multiple hats — whether it's writing clean, scalable code, optimizing cloud infrastructure, designing APIs, conducting data analysis, or engaging with stakeholders. I believe the best engineers are the ones who understand <em>why</em> they're building something, not just <em>how</em>.",
    ],
    highlights: [
      { icon: "💼", label: "5+ Years Experience" },
      { icon: "☁️", label: "Cloud-Native (Azure & AWS)" },
      { icon: "🤖", label: "AI / GenAI Builder" },
      { icon: "✍️", label: "Technical Writer & Blogger" },
    ],
  },

  /* ── Skills & Tech ────────────────────────────────────────────────────── */
  skills: [
    {
      category: "Languages & Frameworks",
      icon: "⚡",
      items: ["Python", "SQL", "JavaScript", "Django REST Framework", "Flask", "FastAPI", "C#.NET"],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      items: ["Azure Functions", "Azure Data Factory", "Azure Batch", "Azure Blob Storage", "AWS EC2", "AWS Lambda", "AWS RDS", "CodePipeline", "Docker", "GitHub Actions"],
    },
    {
      category: "AI & Data Science",
      icon: "🧠",
      items: ["LlamaIndex", "LangChain", "vLLM", "OpenAI APIs", "RAG Systems", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "EDA / ETL"],
    },
    {
      category: "Databases & Storage",
      icon: "🗄️",
      items: ["Azure SQL", "PostgreSQL", "MS SQL Server", "DynamoDB", "MongoDB", "SQLAlchemy ORM"],
    },
    {
      category: "Tools & Practices",
      icon: "🛠️",
      items: ["Git & GitHub", "UiPath RPA", "Agile / Scrum", "REST API Design", "Database Design", "Socket Programming", "ZeroMQ"],
    },
    {
      category: "Writing & Content",
      icon: "✍️",
      items: ["Technical Documentation", "Blogging", "API Documentation", "Process Documentation"],
    },
  ],

  /* ── Experience Timeline ──────────────────────────────────────────────── */
  experience: [
    {
      company: "ArcelorMittal Digital Consulting",
      role: "Software Development Engineer",
      period: "Jan 2023 — Present",
      location: "India",
      tech: ["Python", "Django REST", "Flask", "Azure Functions", "Azure Data Factory", "AWS EC2", "SQL"],
      highlights: [
        "Built scalable backend APIs with Django REST Framework delivering real-time KPIs and dashboard insights for financial analysts.",
        "Engineered serverless ETL/ELT pipelines on Azure (Data Factory + Functions) streamlining enterprise data ingestion and warehousing.",
        "Developed an in-house RAG solution using OpenAI Embeddings & vector search — empowering users with instant intelligent document Q&A.",
        "Built a sophisticated task engine integrating ReportLab, OpenPyXL, and SQLAlchemy with Azure Blob Storage for automated report generation.",
        "Spearheaded talent mentoring initiatives, building a high-performing engineering team focused on innovation and quality delivery.",
      ],
    },
    {
      company: "Bear Blog",
      role: "Blogger — Tech, Lessons, Life & More",
      period: "Jan 2026 — Present",
      location: "Remote",
      tech: ["Technical Writing", "Content Creation"],
      highlights: [
        "Writing beginner-friendly technical articles that demystify complex software concepts.",
        "Covering topics from documentation best practices to software engineering lessons learned.",
      ],
    },
    {
      company: "Benthon Labs",
      role: "Back End Developer",
      period: "Aug 2022 — Oct 2022",
      location: "Noida, India",
      tech: ["Flask", "FastAPI", "AWS Lambda", "Docker", "GitHub Actions"],
      highlights: [
        "Worked directly with the CTO on critical development initiatives for global health-tech company HUMA.",
        "Created modular RESTful API endpoints in Flask & FastAPI with comprehensive integration and unit test suites.",
        "Built and deployed AWS Lambda functions across stages using GitHub Actions CI/CD pipelines.",
      ],
    },
    {
      company: "ArcelorMittal Nippon Steel India",
      role: "Software Development Engineer",
      period: "Jan 2021 — Jul 2022",
      location: "Surat, India",
      tech: ["Python", "FastAPI", "SQLAlchemy", "ZeroMQ", "Pandas", "Scikit-Learn"],
      highlights: [
        "Developed end-to-end software for mission-critical Finance and Manufacturing processes — driving digital transformation in heavy industry.",
        "Built real-time data streaming applications: Blast Furnace Energy Prediction, Coils Welding Analysis, and Corex Silicon Prediction.",
        "Engineered Accounts Payable invoice processing automation saving ₹1 crore annually — recognized by UiPath with an Applause Award.",
        "Implemented socket programming (ZeroMQ) for async image processing services and serialized data transfer pipelines.",
      ],
    },
    {
      company: "ArcelorMittal Nippon Steel India",
      role: "Associate Software Developer",
      period: "Jul 2020 — Dec 2020",
      location: "India",
      tech: ["UiPath", "RPA", "MS SQL Server", "PostgreSQL"],
      highlights: [
        "Automated critical business processes using UiPath Studio with Robotic Enterprise Framework, reducing FTEs and execution costs.",
        "Developed SAP PR Release, Basis Authorization, and Systems Monitoring automations deployed to production bots.",
        "Won Applause Award for SAP Basis Roles & Authorization Automation project.",
      ],
    },
    {
      company: "Essar Steel",
      role: "Data Science Intern",
      period: "Apr 2019 — Aug 2019",
      location: "Hazira, India",
      tech: ["Python", "ZeroMQ", "OpenCV", "Pandas"],
      highlights: [
        "Designed asynchronous REQ-REP and PUB-SUB socket communication services for Image Histogram Normalization using ZeroMQ and OpenCV.",
        "Performed exploratory data analysis on industrial datasets and built Python health monitoring scripts for production applications.",
      ],
    },
  ],

  /* ── Projects ─────────────────────────────────────────────────────────── */
  projects: [
    {
      title: "Enterprise RAG Q&A System",
      description: "Built a Retrieval-Augmented Generation system for financial enterprise document Q&A using OpenAI Embeddings, LlamaIndex, and vector search.",
      tags: ["GenAI", "RAG", "LlamaIndex", "OpenAI", "Python"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Invoice-to-Cash Collections Tool",
      description: "Full-stack application automating the dunning process for Accounts Receivable — real-time KPIs, auto-reminders, and dynamic report generation.",
      tags: ["Django REST", "Azure Functions", "SQL", "Azure Blob"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Cloud ETL/ELT Pipeline",
      description: "Serverless ETL/ELT solution on Azure using Data Factory and Functions for enterprise data ingestion, transformation, and warehousing.",
      tags: ["Azure Data Factory", "Azure Functions", "Python", "SQL"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Blast Furnace Energy Prediction",
      description: "Real-time data streaming application predicting energy consumption in blast furnace operations using ML models and live sensor data.",
      tags: ["Data Science", "Scikit-Learn", "Pandas", "FastAPI"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Accounts Payable Automation",
      description: "RPA solution automating invoice processing that saved ₹1 crore annually. Recognized by UiPath with Applause Award.",
      tags: ["UiPath", "RPA", "SAP", "Automation"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Async Image Processing Service",
      description: "ZeroMQ-based REQ-REP and PUB-SUB socket communication service for asynchronous image histogram normalization using OpenCV.",
      tags: ["Python", "ZeroMQ", "OpenCV", "Sockets"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ],

  /* ── Blog Posts ───────────────────────────────────────────────────────── */
  blog: [
    {
      title: "From Tech Speak to User Clarity: Mastering the Art of Documentation",
      excerpt: "Software teams often struggle with a counterintuitive problem: knowing their product too well. This deep familiarity leads to writing content aimed at insiders rather than actual readers.",
      date: "Mar 7, 2026",
      url: "https://ansh-corner.bearblog.dev/from-tech-speak-to-user-clarity-mastering-art-of-documentation/",
      tags: ["Documentation", "Best Practices"],
    },
    // Add more blog posts here as you publish them:
    // {
    //   title: "Post Title",
    //   excerpt: "Short description...",
    //   date: "Month Day, Year",
    //   url: "https://ansh-corner.bearblog.dev/your-post-slug/",
    //   tags: ["Tag1", "Tag2"],
    // },
  ],

  /* ── Education ────────────────────────────────────────────────────────── */
  education: [
    {
      institution: "Dayalbagh Educational Institute",
      degree: "Bachelor's Degree — Electrical Engineering (Computer Science Specialization)",
      period: "2017 — 2020",
    },
    {
      institution: "Dayalbagh Educational Institute",
      degree: "Diploma — Electrical Engineering",
      period: "2014 — 2017",
    },
  ],

  /* ── Certifications ───────────────────────────────────────────────────── */
  certifications: [
    "Python Certification",
    "Advanced Retrieval Vector Database",
    "CompTIA Network+ (N10-008) Cert Prep",
    "Building Conversational RAG Systems",
    "Agile Foundations",
  ],

  /* ── Awards ───────────────────────────────────────────────────────────── */
  awards: [
    "3rd Prize — Designing Low Cost Any Time Medicine (ATM)",
    "Runner Up — Smart India Hackathon",
    "Applause Award — SAP Basis Authorization Automation (UiPath)",
  ],

  /* ── Navigation labels (order matches render order) ───────────────────── */
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
};


/* ==========================================================================
   APP — Rendering logic. You should NOT need to edit below this line
   unless you're adding entirely new sections.
   ========================================================================== */

(function () {
  "use strict";

  /* ── Helpers ────────────────────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "className") node.className = v;
      else if (k === "innerHTML") node.innerHTML = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2).toLowerCase(), v);
      else node.setAttribute(k, v);
    });
    children.forEach((c) => {
      if (typeof c === "string") node.appendChild(document.createTextNode(c));
      else if (c) node.appendChild(c);
    });
    return node;
  };

  /* ── Set document title & favicon ───────────────────────────────────── */
  document.title = CONFIG.meta.siteTitle;
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${CONFIG.meta.faviconEmoji}</text></svg>`;
  document.head.appendChild(link);

  /* ── Theme Toggle ───────────────────────────────────────────────────── */
  const savedTheme = localStorage.getItem("portfolio-theme") || CONFIG.features.defaultTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    const icon = $(".theme-toggle__icon");
    if (icon) icon.textContent = next === "dark" ? "☀️" : "🌙";
  }

  /* ── Build Navigation ───────────────────────────────────────────────── */
  function buildNav() {
    const nav = $("#main-nav");
    if (!nav) return;

    const brand = el("a", { className: "nav__brand", href: "#hero" },
      el("span", { className: "nav__brand-text", innerHTML: `&lt;${CONFIG.personal.name.split(" ")[0]} /&gt;` })
    );

    const links = el("div", { className: "nav__links", id: "nav-links" });
    CONFIG.navLinks.forEach(({ label, href }) => {
      // Only render nav links for enabled sections
      const sectionKey = "show" + label.charAt(0).toUpperCase() + label.slice(1);
      if (CONFIG.sections[sectionKey] === false) return;
      links.appendChild(el("a", { className: "nav__link", href }, label));
    });

    const themeBtn = el("button", {
      className: "theme-toggle",
      "aria-label": "Toggle theme",
      onClick: toggleTheme,
    }, el("span", { className: "theme-toggle__icon" }, savedTheme === "dark" ? "☀️" : "🌙"));

    const hamburger = el("button", {
      className: "nav__hamburger",
      "aria-label": "Toggle menu",
      innerHTML: "<span></span><span></span><span></span>",
      onClick: () => {
        nav.classList.toggle("nav--open");
      },
    });

    nav.appendChild(brand);
    nav.appendChild(links);
    nav.appendChild(themeBtn);
    nav.appendChild(hamburger);
  }

  /* ── Build Hero Section ─────────────────────────────────────────────── */
  function buildHero() {
    if (!CONFIG.sections.showHero) return;
    const section = $("#hero");
    if (!section) return;

    // Particle canvas
    if (CONFIG.features.enableParticles) {
      const canvas = el("canvas", { id: "particles", "aria-hidden": "true" });
      section.appendChild(canvas);
    }

    const content = el("div", { className: "hero__content" });

    const greeting = el("p", { className: "hero__greeting animate-in" }, "Hello, I'm");
    const name = el("h1", { className: "hero__name animate-in" }, CONFIG.personal.name);
    const titleLine = el("div", { className: "hero__title-line animate-in" });

    if (CONFIG.features.enableTypingEffect) {
      titleLine.appendChild(el("span", { className: "hero__title", id: "typed-title" }));
      titleLine.appendChild(el("span", { className: "hero__cursor" }, "|"));
    } else {
      titleLine.appendChild(el("span", { className: "hero__title" }, CONFIG.personal.title));
    }

    const tagline = el("p", { className: "hero__tagline animate-in" }, CONFIG.personal.tagline);

    const ctas = el("div", { className: "hero__ctas animate-in" });
    ctas.appendChild(el("a", { className: "btn btn--primary", href: "#contact" }, "Get In Touch"));
    ctas.appendChild(el("a", { className: "btn btn--outline", href: CONFIG.personal.resumeURL, target: "_blank", rel: "noopener" }, "Resume"));

    const scrollHint = el("div", { className: "hero__scroll-hint animate-in" },
      el("span", { className: "hero__scroll-text" }, "Scroll to explore"),
      el("span", { className: "hero__scroll-arrow" }, "↓")
    );

    content.append(greeting, name, titleLine, tagline, ctas, scrollHint);
    section.appendChild(content);
  }

  /* ── Build About Section ────────────────────────────────────────────── */
  function buildAbout() {
    if (!CONFIG.sections.showAbout) return;
    const section = $("#about");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "About Me"));
    container.appendChild(el("div", { className: "section__divider" }));

    const grid = el("div", { className: "about__grid" });

    const textCol = el("div", { className: "about__text" });
    CONFIG.about.paragraphs.forEach((p) => {
      textCol.appendChild(el("p", { innerHTML: p }));
    });
    grid.appendChild(textCol);

    const highlights = el("div", { className: "about__highlights" });
    CONFIG.about.highlights.forEach(({ icon, label }) => {
      const card = el("div", { className: "about__highlight-card" },
        el("span", { className: "about__highlight-icon" }, icon),
        el("span", { className: "about__highlight-label" }, label)
      );
      highlights.appendChild(card);
    });
    grid.appendChild(highlights);

    // Education & Certs
    const extras = el("div", { className: "about__extras" });

    if (CONFIG.education.length) {
      const eduBlock = el("div", { className: "about__education" });
      eduBlock.appendChild(el("h3", {}, "Education"));
      CONFIG.education.forEach(({ institution, degree, period }) => {
        const item = el("div", { className: "about__edu-item" },
          el("strong", {}, institution),
          el("span", { className: "about__edu-degree" }, degree),
          el("span", { className: "about__edu-period" }, period)
        );
        eduBlock.appendChild(item);
      });
      extras.appendChild(eduBlock);
    }

    if (CONFIG.awards.length) {
      const awardsBlock = el("div", { className: "about__awards" });
      awardsBlock.appendChild(el("h3", {}, "Awards"));
      const list = el("ul");
      CONFIG.awards.forEach((a) => list.appendChild(el("li", {}, a)));
      awardsBlock.appendChild(list);
      extras.appendChild(awardsBlock);
    }

    grid.appendChild(extras);
    container.appendChild(grid);
    section.appendChild(container);
  }

  /* ── Build Skills Section ───────────────────────────────────────────── */
  function buildSkills() {
    if (!CONFIG.sections.showSkills) return;
    const section = $("#skills");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "Skills & Technologies"));
    container.appendChild(el("div", { className: "section__divider" }));

    const grid = el("div", { className: "skills__grid" });
    CONFIG.skills.forEach(({ category, icon, items }) => {
      const card = el("div", { className: "skills__card" });
      card.appendChild(el("div", { className: "skills__card-header" },
        el("span", { className: "skills__card-icon" }, icon),
        el("h3", { className: "skills__card-title" }, category)
      ));
      const pills = el("div", { className: "skills__pills" });
      items.forEach((item) => pills.appendChild(el("span", { className: "skills__pill" }, item)));
      card.appendChild(pills);
      grid.appendChild(card);
    });

    container.appendChild(grid);
    section.appendChild(container);
  }

  /* ── Build Experience Section ───────────────────────────────────────── */
  function buildExperience() {
    if (!CONFIG.sections.showExperience) return;
    const section = $("#experience");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "Experience"));
    container.appendChild(el("div", { className: "section__divider" }));

    const timeline = el("div", { className: "timeline" });
    CONFIG.experience.forEach((job, i) => {
      const item = el("div", { className: `timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}` });
      const dot = el("div", { className: "timeline__dot" });
      const card = el("div", { className: "timeline__card" });

      card.appendChild(el("div", { className: "timeline__header" },
        el("h3", { className: "timeline__company" }, job.company),
        el("span", { className: "timeline__period" }, job.period)
      ));
      card.appendChild(el("p", { className: "timeline__role" }, job.role));
      card.appendChild(el("p", { className: "timeline__location" }, job.location));

      if (job.tech.length) {
        const techRow = el("div", { className: "timeline__tech" });
        job.tech.forEach((t) => techRow.appendChild(el("span", { className: "timeline__tech-tag" }, t)));
        card.appendChild(techRow);
      }

      const list = el("ul", { className: "timeline__highlights" });
      job.highlights.forEach((h) => list.appendChild(el("li", {}, h)));
      card.appendChild(list);

      item.append(dot, card);
      timeline.appendChild(item);
    });

    container.appendChild(timeline);
    section.appendChild(container);
  }

  /* ── Build Projects Section ─────────────────────────────────────────── */
  function buildProjects() {
    if (!CONFIG.sections.showProjects) return;
    const section = $("#projects");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "Projects"));
    container.appendChild(el("div", { className: "section__divider" }));

    const grid = el("div", { className: "projects__grid" });
    CONFIG.projects.forEach((proj) => {
      const card = el("div", { className: `projects__card ${proj.featured ? "projects__card--featured" : ""}` });

      if (proj.featured) card.appendChild(el("span", { className: "projects__featured-badge" }, "Featured"));

      card.appendChild(el("h3", { className: "projects__title" }, proj.title));
      card.appendChild(el("p", { className: "projects__desc" }, proj.description));

      const tags = el("div", { className: "projects__tags" });
      proj.tags.forEach((t) => tags.appendChild(el("span", { className: "projects__tag" }, t)));
      card.appendChild(tags);

      const links = el("div", { className: "projects__links" });
      if (proj.github && proj.github !== "#") {
        links.appendChild(el("a", { className: "projects__link", href: proj.github, target: "_blank", rel: "noopener", "aria-label": "GitHub" }, "GitHub →"));
      }
      if (proj.demo && proj.demo !== "#") {
        links.appendChild(el("a", { className: "projects__link projects__link--demo", href: proj.demo, target: "_blank", rel: "noopener", "aria-label": "Live Demo" }, "Live Demo →"));
      }
      card.appendChild(links);
      grid.appendChild(card);
    });

    container.appendChild(grid);
    section.appendChild(container);
  }

  /* ── Build Blog Section ─────────────────────────────────────────────── */
  function buildBlog() {
    if (!CONFIG.sections.showBlog) return;
    const section = $("#blog");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "Blog & Writing"));
    container.appendChild(el("div", { className: "section__divider" }));

    if (CONFIG.blog.length === 0) {
      container.appendChild(el("p", { className: "blog__empty" }, "Posts coming soon — stay tuned!"));
    } else {
      const grid = el("div", { className: "blog__grid" });
      CONFIG.blog.forEach((post) => {
        const card = el("a", { className: "blog__card", href: post.url, target: "_blank", rel: "noopener" });
        card.appendChild(el("span", { className: "blog__date" }, post.date));
        card.appendChild(el("h3", { className: "blog__title" }, post.title));
        card.appendChild(el("p", { className: "blog__excerpt" }, post.excerpt));
        const tags = el("div", { className: "blog__tags" });
        post.tags.forEach((t) => tags.appendChild(el("span", { className: "blog__tag" }, t)));
        card.appendChild(tags);
        card.appendChild(el("span", { className: "blog__read-more" }, "Read article →"));
        grid.appendChild(card);
      });
      container.appendChild(grid);
    }

    const cta = el("div", { className: "blog__cta" });
    cta.appendChild(el("a", { className: "btn btn--outline", href: CONFIG.social.blog, target: "_blank", rel: "noopener" }, "Visit My Blog →"));
    container.appendChild(cta);

    section.appendChild(container);
  }

  /* ── Build Contact Section ──────────────────────────────────────────── */
  function buildContact() {
    if (!CONFIG.sections.showContact) return;
    const section = $("#contact");
    if (!section) return;

    const container = el("div", { className: "container" });
    container.appendChild(el("h2", { className: "section__title" }, "Let's Connect"));
    container.appendChild(el("div", { className: "section__divider" }));

    const grid = el("div", { className: "contact__grid" });

    // Left — text + social
    const info = el("div", { className: "contact__info" });
    info.appendChild(el("p", { className: "contact__text" },
      "Whether you have a project idea, want to collaborate, or just want to say hello — I'd love to hear from you."
    ));
    info.appendChild(el("a", { className: "contact__email", href: `mailto:${CONFIG.personal.email}` }, CONFIG.personal.email));

    const socials = el("div", { className: "contact__socials" });
    if (CONFIG.social.github) {
      socials.appendChild(el("a", { className: "contact__social-link", href: CONFIG.social.github, target: "_blank", rel: "noopener", "aria-label": "GitHub" },
        el("span", { innerHTML: "GitHub" })
      ));
    }
    if (CONFIG.social.linkedin) {
      socials.appendChild(el("a", { className: "contact__social-link", href: CONFIG.social.linkedin, target: "_blank", rel: "noopener", "aria-label": "LinkedIn" },
        el("span", { innerHTML: "LinkedIn" })
      ));
    }
    if (CONFIG.social.blog) {
      socials.appendChild(el("a", { className: "contact__social-link", href: CONFIG.social.blog, target: "_blank", rel: "noopener", "aria-label": "Blog" },
        el("span", { innerHTML: "Blog" })
      ));
    }
    info.appendChild(socials);
    grid.appendChild(info);

    // Right — form
    const form = el("form", { className: "contact__form", id: "contact-form" });
    form.appendChild(buildFormField("name", "Name", "text", "Your name"));
    form.appendChild(buildFormField("email", "Email", "email", "your@email.com"));
    form.appendChild(buildFormTextarea("message", "Message", "Your message..."));
    form.appendChild(el("button", { className: "btn btn--primary contact__submit", type: "submit" }, "Send Message"));
    form.appendChild(el("p", { className: "contact__form-note", id: "form-status" }));
    grid.appendChild(form);

    container.appendChild(grid);
    section.appendChild(container);
  }

  function buildFormField(name, label, type, placeholder) {
    const group = el("div", { className: "form__group" });
    group.appendChild(el("label", { className: "form__label", for: name }, label));
    group.appendChild(el("input", { className: "form__input", type, name, id: name, placeholder, required: "" }));
    return group;
  }

  function buildFormTextarea(name, label, placeholder) {
    const group = el("div", { className: "form__group" });
    group.appendChild(el("label", { className: "form__label", for: name }, label));
    group.appendChild(el("textarea", { className: "form__textarea", name, id: name, placeholder, rows: "5", required: "" }));
    return group;
  }

  /* ── Build Footer ───────────────────────────────────────────────────── */
  function buildFooter() {
    const footer = $("#main-footer");
    if (!footer) return;
    const year = new Date().getFullYear();
    footer.appendChild(el("div", { className: "container footer__inner" },
      el("p", { innerHTML: `&copy; ${year} ${CONFIG.personal.name}. Crafted with passion and clean code.` }),
      el("p", { className: "footer__links", innerHTML:
        `<a href="${CONFIG.social.github}" target="_blank" rel="noopener">GitHub</a> · ` +
        `<a href="${CONFIG.social.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · ` +
        `<a href="${CONFIG.social.blog}" target="_blank" rel="noopener">Blog</a>`
      })
    ));
  }

  /* ── Typing Effect ──────────────────────────────────────────────────── */
  function startTypingEffect() {
    if (!CONFIG.features.enableTypingEffect) return;
    const target = $("#typed-title");
    if (!target) return;

    const strings = [
      CONFIG.personal.title,
      CONFIG.personal.subtitle,
      "Full-Stack Cloud Engineer",
      "Automation Architect",
    ];
    let stringIdx = 0, charIdx = 0, deleting = false;

    function tick() {
      const current = strings[stringIdx];
      if (!deleting) {
        target.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          setTimeout(() => { deleting = true; tick(); }, 2000);
          return;
        }
      } else {
        target.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          stringIdx = (stringIdx + 1) % strings.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 80);
    }
    setTimeout(tick, 1000);
  }

  /* ── Particle Background ────────────────────────────────────────────── */
  function initParticles() {
    if (!CONFIG.features.enableParticles) return;
    const canvas = $("#particles");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let socialParticles = [];
    let animId;
    let hoveredSocial = null;

    // SVG icon paths (24x24 viewBox) for social links
    const socialIcons = {
      github: {
        path: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z",
        url: CONFIG.social.github,
        label: "GitHub",
      },
      linkedin: {
        path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
        url: CONFIG.social.linkedin,
        label: "LinkedIn",
      },
      blog: {
        path: "M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z",
        url: CONFIG.social.blog,
        label: "Blog",
      },
    };

    // Pre-build Path2D objects for each icon (scaled to unit size)
    const iconPaths = {};
    Object.keys(socialIcons).forEach((key) => {
      iconPaths[key] = new Path2D(socialIcons[key].path);
    });

    const SOCIAL_RADIUS = 18;
    const SOCIAL_HIT_RADIUS = 24;
    const SOCIAL_SPEED = 0.6;

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.0,
          vy: (Math.random() - 0.5) * 1.0,
          r: Math.random() * 2 + 0.5,
        });
      }

      // Create social particles spread across the canvas
      socialParticles = [];
      const keys = Object.keys(socialIcons).filter((k) => socialIcons[k].url);
      const padding = 80;
      keys.forEach((key, i) => {
        socialParticles.push({
          key: key,
          x: padding + Math.random() * (canvas.width - padding * 2),
          y: padding + Math.random() * (canvas.height - padding * 2),
          vx: (Math.random() - 0.5) * SOCIAL_SPEED,
          vy: (Math.random() - 0.5) * SOCIAL_SPEED,
          baseRadius: SOCIAL_RADIUS,
          currentRadius: SOCIAL_RADIUS,
          hovered: false,
          pulse: Math.random() * Math.PI * 2, // offset for pulse animation
        });
      });
    }

    function drawSocialParticle(sp, color) {
      sp.pulse += 0.02;
      const pulseScale = 1 + Math.sin(sp.pulse) * 0.05;
      const targetR = sp.hovered ? sp.baseRadius * 1.3 : sp.baseRadius;
      sp.currentRadius += (targetR - sp.currentRadius) * 0.15;
      const r = sp.currentRadius * pulseScale;

      // Glow ring
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, r + 6, 0, Math.PI * 2);
      const glowAlpha = sp.hovered ? 0.25 : 0.1;
      ctx.fillStyle = color.replace(/[\d.]+\)$/, glowAlpha + ")");
      ctx.fill();

      // Background circle
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, r, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(/[\d.]+\)$/, sp.hovered ? "0.2" : "0.1") ;
      ctx.fill();
      ctx.strokeStyle = color.replace(/[\d.]+\)$/, sp.hovered ? "0.8" : "0.4");
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw icon using Path2D — scale from 24x24 viewBox to fit inside the circle
      const iconSize = r * 1.1;
      const scale = iconSize / 24;
      ctx.save();
      ctx.translate(sp.x - iconSize / 2, sp.y - iconSize / 2);
      ctx.scale(scale, scale);
      ctx.fillStyle = color.replace(/[\d.]+\)$/, sp.hovered ? "1" : "0.7");
      ctx.fill(iconPaths[sp.key]);
      ctx.restore();

      // Label on hover
      if (sp.hovered) {
        ctx.font = "600 11px 'Inter', sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = color.replace(/[\d.]+\)$/, "0.9)");
        ctx.fillText(socialIcons[sp.key].label, sp.x, sp.y + r + 18);
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = getComputedStyle(document.documentElement).getPropertyValue("--particle-color").trim() || "rgba(100,200,255,0.5)";

      // Update and draw regular particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connections between regular particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${(1 - dist / 120) * 0.3})`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw connections from social particles to nearby regular particles
      socialParticles.forEach((sp) => {
        particles.forEach((p) => {
          const dx = sp.x - p.x;
          const dy = sp.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(sp.x, sp.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${(1 - dist / 150) * 0.4})`);
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });

      // Update and draw social particles
      socialParticles.forEach((sp) => {
        sp.x += sp.vx;
        sp.y += sp.vy;
        const pad = SOCIAL_RADIUS + 10;
        if (sp.x < pad || sp.x > canvas.width - pad) sp.vx *= -1;
        if (sp.y < pad || sp.y > canvas.height - pad) sp.vy *= -1;
        sp.x = Math.max(pad, Math.min(canvas.width - pad, sp.x));
        sp.y = Math.max(pad, Math.min(canvas.height - pad, sp.y));

        drawSocialParticle(sp, color);
      });

      animId = requestAnimationFrame(draw);
    }

    function getSocialAt(mx, my) {
      for (let i = socialParticles.length - 1; i >= 0; i--) {
        const sp = socialParticles[i];
        const dx = mx - sp.x;
        const dy = my - sp.y;
        if (dx * dx + dy * dy <= SOCIAL_HIT_RADIUS * SOCIAL_HIT_RADIUS) return sp;
      }
      return null;
    }

    canvas.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const sp = getSocialAt(mx, my);
      socialParticles.forEach((p) => (p.hovered = false));
      if (sp) {
        sp.hovered = true;
        canvas.style.cursor = "pointer";
        hoveredSocial = sp;
      } else {
        canvas.style.cursor = "default";
        hoveredSocial = null;
      }
    });

    canvas.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const sp = getSocialAt(mx, my);
      if (sp) {
        window.open(socialIcons[sp.key].url, "_blank", "noopener,noreferrer");
      }
    });

    canvas.addEventListener("mouseleave", () => {
      socialParticles.forEach((p) => (p.hovered = false));
      canvas.style.cursor = "default";
      hoveredSocial = null;
    });

    resize();
    createParticles();
    draw();
    window.addEventListener("resize", () => {
      cancelAnimationFrame(animId);
      resize();
      createParticles();
      draw();
    });
  }

  /* ── Scroll Animations ──────────────────────────────────────────────── */
  function initScrollAnimations() {
    if (!CONFIG.features.enableScrollAnimations) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all cards and items
    setTimeout(() => {
      $$(".skills__card, .timeline__item, .projects__card, .blog__card, .about__highlight-card, .about__extras, .contact__grid").forEach((el) => {
        el.classList.add("scroll-reveal");
        observer.observe(el);
      });
    }, 100);
  }

  /* ── Smooth Scroll ──────────────────────────────────────────────────── */
  function initSmoothScroll() {
    if (!CONFIG.features.enableSmoothScroll) return;
    document.addEventListener("click", (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      e.preventDefault();
      const target = $(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile nav
        const nav = $("#main-nav");
        if (nav) nav.classList.remove("nav--open");
      }
    });
  }

  /* ── Active nav on scroll ───────────────────────────────────────────── */
  function initActiveNav() {
    const sections = $$("section[id]");
    const navLinks = $$(".nav__link");
    if (!sections.length || !navLinks.length) return;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY + 100;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach((l) => l.classList.remove("nav__link--active"));
          const active = $(`.nav__link[href="#${id}"]`);
          if (active) active.classList.add("nav__link--active");
        }
      });

      // Shrink nav on scroll
      const nav = $("#main-nav");
      if (nav) {
        nav.classList.toggle("nav--scrolled", window.scrollY > 50);
      }
    });
  }

  /* ── Contact Form ───────────────────────────────────────────────────── */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = $("#form-status");
      // In production, replace with actual form backend (Formspree, Netlify Forms, etc.)
      const data = new FormData(form);
      const mailto = `mailto:${CONFIG.personal.email}?subject=Portfolio Contact from ${data.get("name")}&body=${encodeURIComponent(data.get("message"))}%0A%0AFrom: ${data.get("email")}`;
      window.open(mailto);
      if (status) {
        status.textContent = "Opening your email client...";
        status.style.color = "var(--accent)";
      }
      form.reset();
    });
  }

  /* ── Hero entrance animation ────────────────────────────────────────── */
  function animateHeroEntrance() {
    const items = $$(".hero__content .animate-in");
    items.forEach((item, i) => {
      item.style.animationDelay = `${0.2 + i * 0.15}s`;
    });
  }

  /* ── Chatbot Widget ─────────────────────────────────────────────────── */
  function buildChatbot() {
    if (!CONFIG.features.enableChatbot) return;

    let chatOpen = false;
    let messages = [];
    let isStreaming = false;

    // Create FAB button
    const fab = el("button", {
      className: "chat-fab",
      "aria-label": "Open chat",
      onClick: () => toggleChat(),
    });
    fab.innerHTML = `<svg class="chat-fab__icon chat-fab__icon--chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><svg class="chat-fab__icon chat-fab__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

    // Create chat panel
    const panel = el("div", { className: "chat-panel" });

    // Header
    const header = el("div", { className: "chat-panel__header" });
    header.innerHTML = `<div class="chat-panel__header-info"><span class="chat-panel__header-dot"></span><span class="chat-panel__header-title">Ask about Ansh</span></div>`;
    const closeBtn = el("button", {
      className: "chat-panel__close",
      "aria-label": "Close chat",
      onClick: () => toggleChat(),
    });
    closeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // Messages area
    const messagesArea = el("div", { className: "chat-panel__messages", id: "chat-messages" });
    panel.appendChild(messagesArea);

    // Footer with input
    const footer = el("div", { className: "chat-panel__footer" });
    const inputWrap = el("div", { className: "chat-panel__input-wrap" });
    const input = el("input", {
      className: "chat-panel__input",
      type: "text",
      placeholder: "Ask me anything about Ansh...",
      id: "chat-input",
    });
    const sendBtn = el("button", {
      className: "chat-panel__send",
      "aria-label": "Send message",
      onClick: () => sendMessage(),
    });
    sendBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
    inputWrap.append(input, sendBtn);
    footer.appendChild(inputWrap);
    footer.appendChild(el("p", { className: "chat-panel__powered" }, "Powered by Claude \u00B7 Answers based on portfolio data"));
    panel.appendChild(footer);

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    // Enter key
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    function toggleChat() {
      chatOpen = !chatOpen;
      fab.classList.toggle("chat-fab--open", chatOpen);
      panel.classList.toggle("chat-panel--open", chatOpen);
      if (chatOpen) {
        renderMessages();
        input.focus();
      }
    }

    function renderMessages() {
      messagesArea.innerHTML = "";

      if (messages.length === 0) {
        // Show starter questions
        const welcome = el("div", { className: "chat-msg chat-msg--assistant" });
        welcome.appendChild(el("div", { className: "chat-msg__bubble" }, "Hi! I can answer questions about Ansh's professional background, skills, and experience. What would you like to know?"));
        messagesArea.appendChild(welcome);

        const chips = el("div", { className: "chat-chips" });
        CONFIG.chatbot.starterQuestions.forEach((q) => {
          const chip = el("button", {
            className: "chat-chip",
            onClick: () => {
              input.value = q;
              sendMessage();
            },
          }, q);
          chips.appendChild(chip);
        });
        messagesArea.appendChild(chips);
      } else {
        messages.forEach((msg) => {
          const wrapper = el("div", { className: `chat-msg chat-msg--${msg.role}` });
          const bubble = el("div", { className: "chat-msg__bubble" });
          bubble.innerHTML = formatMessage(msg.content);
          wrapper.appendChild(bubble);
          messagesArea.appendChild(wrapper);
        });
      }

      messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    function formatMessage(text) {
      return text
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
    }

    function addTypingIndicator() {
      const wrapper = el("div", { className: "chat-msg chat-msg--assistant", id: "chat-typing" });
      wrapper.innerHTML = `<div class="chat-msg__bubble chat-typing"><span></span><span></span><span></span></div>`;
      messagesArea.appendChild(wrapper);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    function removeTypingIndicator() {
      const typing = $("#chat-typing");
      if (typing) typing.remove();
    }

    async function sendMessage() {
      const text = input.value.trim();
      if (!text || isStreaming) return;

      input.value = "";
      messages.push({ role: "user", content: text });
      renderMessages();

      isStreaming = true;
      sendBtn.disabled = true;
      addTypingIndicator();

      // Build history for API (last 10 messages)
      const history = messages.slice(-10).map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      }));

      try {
        const res = await fetch(CONFIG.chatbot.apiURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, history: history.slice(0, -1) }),
        });

        removeTypingIndicator();

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          const errMsg = errData.error || `Something went wrong (${res.status}). Please try again.`;
          messages.push({ role: "assistant", content: errMsg });
          renderMessages();
          isStreaming = false;
          sendBtn.disabled = false;
          return;
        }

        // Stream the response
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantMsg = "";
        messages.push({ role: "assistant", content: "" });

        // Create the bubble for streaming
        const wrapper = el("div", { className: "chat-msg chat-msg--assistant" });
        const bubble = el("div", { className: "chat-msg__bubble" });
        wrapper.appendChild(bubble);
        messagesArea.appendChild(wrapper);

        let buffer = "";
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.type === "content_block_delta" && parsed.delta && parsed.delta.text) {
                  assistantMsg += parsed.delta.text;
                  bubble.innerHTML = formatMessage(assistantMsg);
                  messagesArea.scrollTop = messagesArea.scrollHeight;
                } else if (parsed.text) {
                  assistantMsg += parsed.text;
                  bubble.innerHTML = formatMessage(assistantMsg);
                  messagesArea.scrollTop = messagesArea.scrollHeight;
                }
              } catch (_) {
                // Not JSON, might be raw text chunk
                assistantMsg += data;
                bubble.innerHTML = formatMessage(assistantMsg);
                messagesArea.scrollTop = messagesArea.scrollHeight;
              }
            }
          }
        }

        // Update the stored message
        messages[messages.length - 1].content = assistantMsg || "Sorry, I couldn't generate a response. Please try again.";
      } catch (err) {
        removeTypingIndicator();
        messages.push({ role: "assistant", content: "Network error — please check your connection and try again." });
        renderMessages();
      }

      isStreaming = false;
      sendBtn.disabled = false;
    }
  }

  /* ── Initialize Everything ──────────────────────────────────────────── */
  function init() {
    buildNav();
    buildHero();
    buildAbout();
    buildSkills();
    buildExperience();
    buildProjects();
    buildBlog();
    buildContact();
    buildFooter();
    startTypingEffect();
    initParticles();
    initScrollAnimations();
    initSmoothScroll();
    initActiveNav();
    initContactForm();
    animateHeroEntrance();
    buildChatbot();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
