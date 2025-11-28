# Dr. Deurimar Herênio Gonçalves Júnior — Portfolio Website

A modern, responsive, and accessible portfolio website for a Plant Breeder and Data Scientist. Built with vanilla HTML5, modular CSS3, and ES6+ JavaScript — **zero external dependencies**, optimized for performance and accessibility.

**Live Site:** https://juniorherenio.github.io/

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Customization](#customization)
- [Performance & Accessibility](#performance--accessibility)
- [Browser Support](#browser-support)
- [License](#license)

---

## ✨ Features

### Core Functionality
- **Responsive Design**: Mobile-first, tested at 320px–1440px+ breakpoints
- **Dark Mode Toggle**: Theme persistence via `localStorage`, respects system preferences
- **Smooth Navigation**: Scroll-to-section with active link highlighting
- **Project Filtering**: Category-based filtering with smooth animations
- **Lazy Loading**: IntersectionObserver for images and scroll-triggered animations
- **Contact Form**: Client-side validation with real-time error feedback
- **Accessible**: WCAG 2.1 AA compliant, semantic HTML, ARIA labels, keyboard navigation

### Performance Targets
- **Lighthouse**: >95 (all metrics)
- **First Contentful Paint (FCP)**: <1.2s
- **Time to Interactive (TTI)**: <2.5s
- **Cumulative Layout Shift (CLS)**: <0.1
- **Page Size**: <500KB uncompressed

### Accessibility
- Semantic HTML5 with proper heading hierarchy
- Full ARIA support (labels, live regions, roles)
- Keyboard-only navigation (Tab, Arrow, Enter, Escape, Ctrl+Shift+T for theme)
- Focus indicators with high contrast
- Screen reader support (skip links, alt text, image descriptions)
- Color contrast ≥4.5:1 for text, ≥3:1 for UI
- No motion surprises (respects `prefers-reduced-motion`)

---

## 📁 Project Structure

```
git_io_vscode/
├── index.html                # Main landing page (semantic HTML5 + metadata)
├── README.md                 # This file
├── css/
│   ├── reset.css            # CSS normalization & accessibility utilities
│   ├── variables.css        # Design tokens (colors, spacing, shadows, Z-index)
│   ├── typography.css       # Font system, modular scale, responsive typography
│   ├── layout.css           # Container, grids, flexbox, spacing utilities
│   ├── components.css       # Buttons, cards, badges, tags, forms
│   ├── sections.css         # Navbar, hero, about, timeline, research, projects, contact, footer
│   ├── animations.css       # Keyframes, scroll animations, micro-interactions
│   ├── responsive.css       # Breakpoints (320px–1440px+), media queries
│   └── print.css            # Print-optimized styles
├── js/
│   ├── main.js              # Utilities & initialization (IIFE pattern)
│   ├── navigation.js        # Menu toggle, smooth scroll, active links
│   ├── animations.js        # Scroll-triggered animations, parallax
│   ├── darkmode.js          # Theme toggle with localStorage
│   ├── projects-filter.js   # Project category filtering
│   ├── lazy-load.js         # Image lazy loading, back-to-top button
│   └── form-validation.js   # Contact form validation
├── img/
│   ├── profile/
│   │   ├── hero-photo.jpg
│   │   └── hero-photo.webp
│   ├── projects/
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── ...
│   │   └── webp variants
│   ├── icons/
│   │   ├── github.svg
│   │   ├── linkedin.svg
│   │   ├── orcid.svg
│   │   ├── favicon-32x32.png
│   │   └── apple-touch-icon.png
│   └── backgrounds/
│       └── hero-pattern.svg
└── assets/
    ├── cv-deurimar-herenio-junior-en.pdf
    └── cv-deurimar-herenio-junior-pt.pdf
```

---

## 🛠 Technologies

| Layer | Technologies |
|-------|--------------|
| **Markup** | HTML5 (semantic, microdata, JSON-LD, OG/Twitter meta tags) |
| **Styling** | CSS3 (variables, Grid, Flexbox, animations, media queries) |
| **Scripting** | ES6+ vanilla JavaScript (no frameworks, no dependencies) |
| **Fonts** | Google Fonts: IBM Plex Sans, Serif, Mono (font-display: swap) |
| **Hosting** | GitHub Pages (static, CDN-delivered) |
| **SEO** | Structured data (Person schema), canonical URLs, Open Graph |
| **Accessibility** | WCAG 2.1 AA (semantic HTML, ARIA, keyboard nav, focus management) |

---

## 🚀 Getting Started

### Prerequisites
- Git
- A code editor (VS Code recommended)
- A modern browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js + npm (for local server with live reload)

### Local Preview (Static File)

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/juniorherenio/git_io_vscode.git
   cd git_io_vscode
   ```

2. **Open in browser**:
   - Double-click `index.html` to open directly (limited CORS for images)
   - **Better**: Use a local server

### Local Preview (With Server)

#### Option A: Python (built-in)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then visit http://localhost:8000

#### Option B: Node.js (http-server)
```bash
npm install -g http-server
http-server . -p 8000 -c-1
```
Then visit http://localhost:8000

#### Option C: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

### Customization

#### Update Personal Info
Edit `index.html`:
- Hero section: Title, subtitle, CTA buttons
- About section: Bio, skills, avatar
- Education timeline: Degrees, dates, advisors
- Research focus: Areas of expertise
- Projects: GitHub links, descriptions, tags
- Contact: Email, social links, CV links

#### Modify Design
Update `css/variables.css`:
- `--color-primary`, `--color-secondary`, `--color-accent`, `--color-gold`
- `--space-*`: Spacing scale (8px baseline grid)
- `--shadow-*`: Elevation/depth levels
- `--radius`: Border radius for consistency

#### Add Images
1. Place images in `/img/profile/`, `/img/projects/`, etc.
2. Update references in `index.html`
3. For performance: Provide both JPG (fallback) and WebP (modern)
   ```html
   <picture>
     <source srcset="img/profile/hero-photo.webp" type="image/webp">
     <img src="img/profile/hero-photo.jpg" alt="Portrait" loading="lazy">
   </picture>
   ```

#### Update CV Links
Replace PDF URLs in footer and contact section:
```html
<a href="assets/cv-deurimar-herenio-junior-en.pdf" download>Download CV (English)</a>
<a href="assets/cv-deurimar-herenio-junior-pt.pdf" download>Download CV (Portuguese)</a>
```

---

## 📤 Deployment

### GitHub Pages (Recommended)

1. **Create repository** (if not already):
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   ```

2. **Configure GitHub Pages**:
   - Go to repository settings → "Pages"
   - Source: Branch `main` (or `master`), folder `/ (root)`
   - Custom domain: `juniorherenio.github.io` (if using GitHub user pages)

3. **Push code**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push -u origin main
   ```

4. **Wait** ~1–2 minutes for GitHub to build and deploy
5. **Visit** https://juniorherenio.github.io/

### Custom Domain

1. Update DNS records:
   - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - CNAME: `your-domain.com` → `juniorherenio.github.io`

2. In GitHub repository settings → Pages, enter custom domain

3. Enable "Enforce HTTPS"

### Other Hosting Options

- **Netlify**: Drag-drop folder or connect Git repo (auto-deploy)
- **Vercel**: Similar to Netlify, optimized for static sites
- **AWS S3 + CloudFront**: Higher cost, greater control
- **Traditional hosting**: Upload via FTP/SFTP

---

## 🎨 Design System

### Color Palette
| Purpose | Light | Dark | Notes |
|---------|-------|------|-------|
| Primary | `#1b5e20` (deep green) | `#66bb6a` (light green) | Main brand color |
| Secondary | `#5d4037` (earthy brown) | `#8d6e63` (light brown) | Accents, metadata |
| Accent | `#0288d1` (tech blue) | `#29b6f2` (light blue) | Links, highlights |
| Gold | `#ff8f00` (gold) | `#ffa726` (light gold) | Badges, special elements |
| Background | `#fafafa` (off-white) | `#121212` (near-black) | Page background |
| Surface | `#ffffff` (white) | `#1e1e1e` (dark gray) | Cards, elevated elements |

### Typography Scale (Modular 1.250 Major Third)
- **xs**: 10.24px
- **sm**: 12.8px
- **base**: 16px (body)
- **lg**: 20px
- **xl**: 25px
- **2xl**: 31.25px
- **3xl**: 39.06px
- **4xl**: 48.83px
- **5xl**: 61px

### Spacing (8px baseline grid)
- `--space-1`: 8px
- `--space-2`: 16px
- `--space-3`: 24px
- `--space-4`: 32px
- `--space-5`: 40px
- `--space-6`: 48px
- `--space-7`: 56px
- `--space-8`: 64px
- `--space-9`: 72px
- `--space-10`: 128px

### Breakpoints
- **320px**: Mobile (base)
- **479px**: Small mobile
- **768px**: Tablet (2-column layouts)
- **1024px**: Desktop (3-column layouts)
- **1440px**: Large desktop (max-width container)

---

## ⚡ Performance & Accessibility

### Performance Optimization
- **Critical CSS**: Inlined key styles in `<head>`
- **Deferred JS**: All scripts use `defer` attribute (non-blocking)
- **Image Lazy Loading**: IntersectionObserver API
- **Responsive Images**: `<picture>` + srcset for WebP support
- **Font Loading**: `font-display: swap` prevents flash of invisible text (FOIT)
- **Debounce/Throttle**: Scroll handlers optimized to prevent jank
- **CSS Containment**: `contain: layout` on repeating elements
- **Gzip**: Enable on server for additional 60–70% size reduction

### Accessibility Features
- **Keyboard Navigation**:
  - Tab through interactive elements
  - Enter/Space to activate buttons
  - Arrow keys in select dropdowns
  - Escape to close menus
  - Ctrl+Shift+T to toggle theme
  - Ctrl+Home to go back-to-top

- **Screen Reader Support**:
  - Semantic HTML (header, nav, main, footer, article, section)
  - ARIA labels on icon buttons
  - ARIA live regions for form status messages
  - Skip-to-content link
  - Alternative text on images

- **Visual Accessibility**:
  - Focus indicators (3px solid outline + offset)
  - High contrast: 4.5:1 for body text, 3:1 for UI
  - Color not sole means of information
  - Motion respects `prefers-reduced-motion`
  - Sufficient touch target size (44×44px minimum)

### Lighthouse Audit Target
```
Performance:  >95  (FCP <1.2s, TTI <2.5s, CLS <0.1)
Accessibility: >95 (WCAG 2.1 AA)
Best Practices: >95 (HTTPS, no console errors, no unoptimized images)
SEO: >95        (Structured data, meta tags, mobile-friendly)
```

### Validation
- **HTML**: W3C Validator https://validator.w3.org/
- **CSS**: W3C CSS Validator https://jigsaw.w3.org/css-validator/
- **ARIA**: axe DevTools browser extension
- **Lighthouse**: Chrome DevTools → Audits tab

---

## 🌍 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full support |
| Firefox | 88+ | ✅ Full support |
| Safari | 14+ | ✅ Full support |
| Edge | 90+ | ✅ Full support |
| Mobile Safari (iOS) | 14+ | ✅ Full support |
| Chrome Mobile | 90+ | ✅ Full support |

**Unsupported**: IE 11 (no CSS Grid, no IntersectionObserver)

---

## 📝 License

This portfolio is open-source and available under the **MIT License**. Feel free to fork, modify, and use as a template for your own portfolio. Attribution is appreciated but not required.

---

## 🤝 Contributing

Found a bug? Want to suggest improvements? Feel free to:
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m "Add improvement"`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📚 Resources & Credits

### Libraries/Frameworks (None — Vanilla Only!)
- **CSS Reset**: Normalized from Eric Meyer & Nicolas Gallagher
- **Fonts**: Google Fonts (IBM Plex family)
- **Icons**: Custom SVG or Font Awesome (optional addon)

### Inspiration & Best Practices
- [MDN Web Docs](https://developer.mozilla.org/)
- [A List Apart](https://alistapart.com/)
- [Web.dev](https://web.dev/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Academic & Professional Links
- [ORCID](https://orcid.org/) — Persistent researcher identifier
- [Google Scholar](https://scholar.google.com/) — Publication profiles
- [ResearchGate](https://www.researchgate.net/) — Academic network
- [GitHub](https://github.com/) — Code collaboration

---

## 📧 Support & Contact

For questions or issues related to this portfolio:
- **Email**: junior.herenio@gmail.com
- **GitHub Issues**: [Report here](https://github.com/juniorherenio/git_io_vscode/issues)
- **ORCID**: [0000-0001-8066-5042](https://orcid.org/0000-0001-8066-5042)

---

## 🎯 Roadmap

Potential future enhancements:
- [ ] Blog section for research articles
- [ ] Dark mode auto-detection (without toggle)
- [ ] Expanded project gallery with modals
- [ ] Integration with Zotero for dynamic publications
- [ ] Backend contact form (Formspree/Netlify Forms)
- [ ] Analytics (privacy-respecting, e.g., Plausible)
- [ ] Internationalization (i18n) for EN/PT/ES

---

**Made with ❤️ and open science principles.**

Last updated: 2025 • Lighthouse Score: >95 • WCAG 2.1 AA Compliant
