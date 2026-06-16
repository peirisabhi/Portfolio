# Abhishek Peiris — Portfolio

A premium personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Animated Developer Character** — SVG character with typing, blinking, and breathing animations
- **Particle Background** — Interactive canvas-based particle system
- **Smooth Animations** — Framer Motion page transitions, scroll reveals, stagger effects
- **GitHub Integration** — Live GitHub stats, language breakdown, contribution heatmap
- **Medium Blog** — Auto-fetched latest articles via RSS
- **Skills Visualization** — Animated orbit system + progress bars
- **Dark Mode** — Premium dark developer theme
- **SEO Optimized** — OpenGraph, Twitter cards, sitemap, robots.txt
- **Fully Responsive** — Mobile-first design

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Space Grotesk + Inter + JetBrains Mono
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy and fill in environment variables (optional)
cp .env.local.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GITHUB_TOKEN` | GitHub Personal Access Token | No (increases rate limits) |

Create a GitHub token at: https://github.com/settings/tokens

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main portfolio page
│   ├── globals.css         # Global styles & design tokens
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── api/
│       ├── github/route.ts # GitHub stats API
│       └── medium/route.ts # Medium RSS API
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar with scroll tracking
│   │   └── Footer.tsx      # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section + typewriter
│   │   ├── About.tsx       # About + interactive timeline
│   │   ├── Skills.tsx      # Skills + orbit visualization
│   │   ├── Experience.tsx  # Work experience cards
│   │   ├── Projects.tsx    # Project showcase with filters
│   │   ├── GitHub.tsx      # GitHub analytics
│   │   ├── Blog.tsx        # Medium articles
│   │   └── Contact.tsx     # Contact form
│   └── ui/
│       ├── DeveloperCharacter.tsx  # Animated SVG character
│       ├── ParticleBackground.tsx  # Canvas particle system
│       ├── AnimatedCounter.tsx     # Number counter animation
│       └── SectionWrapper.tsx      # Section with scroll reveal
└── lib/
    ├── constants.ts        # Portfolio data & config
    └── utils.ts            # Utility functions
```

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | `#7C3AED` (Purple) |
| Secondary | `#06B6D4` (Cyan) |
| Accent | `#22C55E` (Green) |
| Background | `#0B0F19` |
| Card | `#111827` |
| Heading font | Space Grotesk |
| Body font | Inter |

## 📦 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel at [vercel.com](https://vercel.com) for automatic deployments.

### Add Environment Variables in Vercel

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add `GITHUB_TOKEN` with your GitHub token

## 🔧 Customization

All portfolio data is in `src/lib/constants.ts`:

- **Personal info** — name, bio, social links
- **Skills** — categories, icons, proficiency levels
- **Experience** — company, role, achievements
- **Projects** — titles, descriptions, GitHub URLs
- **Timeline** — career milestones

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio!

---

Built with ❤️ by **Abhishek Peiris**
