# Dr. Deurimar Herênio - Portfolio Website

> Plant Breeder × Data Scientist | Postdoctoral Researcher @ UFES

A modern, fully-responsive, and WCAG 2.1 AA-compliant portfolio website showcasing research, projects, publications, and contact information. Built with semantic HTML5, modular CSS/JavaScript architecture, and zero frameworks.

## 🚀 Live Site

Visit the live portfolio at: [https://juniorherenio.github.io](https://juniorherenio.github.io)

## 📁 Project Structure

```
juniorherenio.github.io/
├── index.html              # Main landing page
├── css/
│   ├── reset.css           # Browser normalization
│   ├── variables.css       # Design system tokens
│   ├── typography.css      # Font imports & scales
│   ├── layout.css          # Grid & containers
│   ├── components.css      # Reusable UI components
│   ├── sections.css        # Section-specific styles
│   ├── animations.css      # Keyframes & transitions
│   ├── responsive.css      # Mobile-first breakpoints
│   └── print.css           # Print optimization
├── js/
│   ├── main.js             # Core utilities
│   ├── navigation.js       # Menu & smooth scroll
│   ├── animations.js       # Scroll reveals
│   ├── darkmode.js         # Theme toggle
│   ├── projects-filter.js  # Category filtering
│   ├── lazy-load.js        # Image optimization
│   └── form-validation.js  # Form validation
├── img/
│   ├── profile/            # Profile photos
│   ├── projects/           # Project thumbnails
│   ├── backgrounds/        # Background assets
│   └── icons/              # SVG icons
├── assets/
│   ├── cv-deurimar-herenio-junior-en.pdf
│   └── cv-deurimar-herenio-junior-pt.pdf
├── .gitignore
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary (Plant Science)**: Deep green (#1b5e20, #2e7d32, #43a047)
- **Secondary (Earthy)**: Brown tones (#3e2723, #5d4037)
- **Accent (Technology)**: Blue (#0288d1), Gold (#ff8f00)
- **Neutrals**: Off-white (#fafafa) to dark gray (#212121)

### Typography
- **Display**: IBM Plex Serif (headings)
- **Body**: IBM Plex Sans (content)
- **Monospace**: IBM Plex Mono (code)
- **Scale**: Modular (1.250 ratio), fluid/responsive

### Spacing
- 8px baseline grid system
- CSS custom properties (--space-1 through --space-12)

## ✨ Features

### Performance
- ✅ Zero external dependencies (no CDNs or frameworks)
- ✅ Modular CSS/JS architecture
- ✅ Lazy loading images with IntersectionObserver
- ✅ Optimized for < 500KB initial load
- ✅ Lighthouse Performance Score target: >95

### Accessibility (WCAG 2.1 AA)
- ✅ Semantic HTML5 markup
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Escape, Enter)
- ✅ Color contrast ≥4.5:1 (text), ≥3:1 (UI)
- ✅ Focus indicators on all interactive elements
- ✅ Skip-to-content link
- ✅ Screen reader friendly

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: 320px, 768px, 1024px, 1440px
- ✅ Touch-friendly (48×48px minimum touch targets)
- ✅ Hamburger menu for mobile

### Interactive Features
- ✅ Dark mode toggle with localStorage persistence
- ✅ Smooth scrolling navigation
- ✅ Scroll-reveal animations
- ✅ Project category filtering
- ✅ Active link highlighting
- ✅ Back-to-top button
- ✅ Contact form with client-side validation

### SEO Optimized
- ✅ Complete meta tags (title, description, keywords)
- ✅ Open Graph and Twitter Card metadata
- ✅ JSON-LD structured data (Schema.org Person)
- ✅ Canonical URLs
- ✅ Semantic heading hierarchy (h1→h6)

## 🛠️ Setup & Development

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local development server

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/juniorherenio/juniorherenio.github.io.git
   cd juniorherenio.github.io
   ```

2. **Run a local server**
   ```bash
   # Option 1: Python 3
   python -m http.server 3000
   
   # Option 2: npx serve
   npx -y serve . -l 3000
   
   # Option 3: PHP
   php -S localhost:3000
   ```

3. **Open in browser**
   Navigate to: `http://localhost:3000`

### No Build Process Required!
This project uses vanilla HTML/CSS/JS with no frameworks, bundlers, or compile steps. All files are ready to deploy as-is.

## 🚢 Deployment (GitHub Pages)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main` / `root`
   - Save

3. **Access your site**
   - URL: `https://juniorherenio.github.io`
   - Typically live within 1-2 minutes

## 📝 Customization

### Update Personal Information
Edit `index.html` and update:
- Hero section (name, title, description)
- About section (bio, skills, stats)
- Education timeline
- Research focus areas
- Projects (replace with your repositories)
- Publications
- Contact information and social links

### Modify Design System
Edit `css/variables.css` to customize:
- Colors (`--color-*`)
- Spacing (`--space-*`)
- Typography (`--font-*`)
- Shadows, transitions, borders

### Add/Replace Images
1. Place images in appropriate folders:
   - Profile photos → `img/profile/`
   - Project thumbnails → `img/projects/`
   - Icons → `img/icons/`

2. Use WebP + JPEG fallbacks:
   ```html
   <picture>
     <source srcset="img/profile/photo.webp" type="image/webp">
     <img src="img/profile/photo.jpg" alt="Description">
   </picture>
   ```

### Add Your CV
Replace placeholder PDFs in `assets/`:
- `cv-deurimar-herenio-junior-en.pdf` (English version)
- `cv-deurimar-herenio-junior-pt.pdf` (Portuguese version)

## 🧪 Testing

### Performance Audit
```bash
# Using Chrome DevTools
1. Open site in Chrome
2. F12 → Lighthouse tab
3. Generate report (Desktop & Mobile)
4. Target: >95 on all metrics
```

### Accessibility Testing
```bash
# Tools:
- axe DevTools (Chrome/Firefox extension)
- WAVE (WebAIM browser extension)
- NVDA or VoiceOver (screen readers)
- Keyboard navigation (Tab through all elements)
```

### Cross-Browser Testing
Test on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest, macOS/iOS)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### HTML/CSS Validation
- HTML: [W3C Validator](https://validator.w3.org/)
- CSS: [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | 320px - 767px | Single column, hamburger menu |
| Tablet | 768px - 1023px | 2-column grids, full nav |
| Desktop | 1024px - 1439px | 3-column grids, max width 1200px |
| Large Desktop | 1440px+ | Max width 1280px, enhanced spacing |

## 🌈 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| iOS Safari | iOS 12+ |
| Chrome Android | Last 2 versions |

## 📄 License

MIT License - feel free to fork, customize, and deploy your own version!

## 👤 Author

**Dr. Deurimar Herênio Gonçalves Júnior**
- Email: junior.herenio@gmail.com
- ORCID: [0000-0001-8066-5042](https://orcid.org/0000-0001-8066-5042)
- Lattes CV: [2477163031192105](http://lattes.cnpq.br/2477163031192105)
- GitHub: [@juniorherenio](https://github.com/juniorherenio)

## 🙏 Acknowledgments

- Typography: [IBM Plex](https://www.ibm.com/plex/) font family
- Design inspiration: Modern plant science and data science aesthetics
- Built with: Vanilla HTML5, CSS3, and JavaScript (ES6+)

---

**Last Updated**: January 2025  
**Version**: 1.0.0
