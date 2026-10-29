# Mohammed Jishad — Developer Portfolio

[![Deploy to GitHub Pages](https://github.com/mohammedjishad/jishad-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/mohammedjishad/jishad-portfolio/actions/workflows/deploy.yml)

A modern, high-performance, responsive personal portfolio website for **Mohammed Jishad**, a **Python & Odoo Developer** specializing in custom Odoo 17 & 18 module engineering, multi-branch ERP workflows, OWL 2, and PostgreSQL.

Designed with inspiration from Brittany Chiang's typography and navigation structure and Astro Me's minimal footprint.

- **Live URL**: [https://mohammedjishad.github.io/jishad-portfolio/](https://mohammedjishad.github.io/jishad-portfolio/)
- **Repository**: [https://github.com/mohammedjishad/jishad-portfolio](https://github.com/mohammedjishad/jishad-portfolio)
- **Flagship Project**: [Textile ERP Suite (Odoo 18)](https://github.com/mohammedjishad/textile-erp-odoo18)

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Astro.js](https://astro.build/) (Static Site Generation, zero runtime JS payload)
- **Styling**: Vanilla CSS3 (Custom design system, CSS Grid & Flexbox, Light & Dark mode tokens)
- **Typography**: Plus Jakarta Sans, Inter, JetBrains Mono
- **Icons**: Clean inline SVG icons
- **Hosting & CI/CD**: GitHub Pages with automated GitHub Actions workflow

> **Design Philosophy**: No heavy UI frameworks (no React, Next.js, or bulky CSS libraries). Pure static generation for instant load times, sub-second First Contentful Paint (FCP), and optimal Google Lighthouse scores.

---

## 📁 Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD
├── public/
│   ├── favicon.svg               # Brand monogram SVG favicon
│   ├── robots.txt                # SEO crawler directives
│   ├── images/
│   │   └── textile-erp/          # High-resolution screenshots of Textile ERP
│   │       ├── dashboard.png
│   │       ├── cost-sheet.png
│   │       ├── wip-tracking.png
│   │       └── product-profitability.png
│   └── resume/
│       └── Mohammed-Jishad-CV.pdf # Direct download CV
├── src/
│   ├── components/
│   │   ├── Navbar.astro          # Responsive header & theme toggle
│   │   ├── Hero.astro            # Availability badge, introduction & CTAs
│   │   ├── About.astro           # Engineering narrative & technical pillars
│   │   ├── Skills.astro          # Categorized skills (Zero fake percentages)
│   │   ├── Experience.astro      # Vertical timeline of career milestones
│   │   ├── Projects.astro        # Textile ERP visual showcase & NDA case studies
│   │   ├── Education.astro       # B.Tech degree & certifications
│   │   ├── Contact.astro         # One-click email, WhatsApp & CV links
│   │   ├── Footer.astro          # Minimal footer with back-to-top
│   │   └── Lightbox.astro        # Interactive full-res screenshot modal
│   ├── layouts/
│   │   └── MainLayout.astro      # SEO metadata & theme script
│   ├── pages/
│   │   └── index.astro           # Assembled single-page application
│   └── styles/
│       └── global.css            # Custom CSS design system
├── astro.config.mjs              # Astro configuration (base & site)
└── package.json
```

---

## 🚀 Local Development

To run the portfolio locally:

```bash
# 1. Clone the repository
git clone https://github.com/mohammedjishad/jishad-portfolio.git
cd jishad-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:4321/jishad-portfolio/` in your browser.

---

## 🔨 Building for Production

To test the static production build:

```bash
npm run build
npm run preview
```

The output will be generated in the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages

1. **Create the GitHub repository**:
   Create a new public repository named `jishad-portfolio` under your GitHub account (`mohammedjishad`).

2. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete professional portfolio with textile erp showcase"
   git branch -M main
   git remote add origin https://github.com/mohammedjishad/jishad-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `Settings` → `Pages`.
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically trigger, build the Astro static bundle, and deploy to:
     `https://mohammedjishad.github.io/jishad-portfolio/`

---

## 📸 Adding Your Profile Photo

To replace the avatar placeholder with your photo:
1. Save your professional photo as `photo.jpg` (recommended 600×600px square crop).
2. Place it in `public/images/photo.jpg`.
3. In `src/components/Hero.astro`, update the avatar container to display `<img src={`${base}/images/photo.jpg`} alt="Mohammed Jishad" />`.

---

## 📄 License & Contact

- **Developer**: Mohammed Jishad
- **Email**: [jishadalikkal1919@gmail.com](mailto:jishadalikkal1919@gmail.com)
- **WhatsApp**: [+91 8592081025](https://wa.me/918592081025)
- **LinkedIn**: [linkedin.com/in/mohammedjishad](https://linkedin.com/in/mohammedjishad)
