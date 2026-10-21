# Cricket Master Line AI — Official Landing Website

> **Product Category:** Mobile cricket application with AI-powered cricket analysis.  
> **Purpose:** Introductory marketing website introducing the application, explaining its AI analysis capabilities, building trust, and driving official mobile app downloads.  
> **Brand Palette:** Primary Purple (`#3C1392`), Secondary Magenta (`#841770`), Deep Background (`#10091F`), Elevated Surface (`#1B1230`).

---

## ⚡ Core Design Principles & Restriction Compliance

- **Zero-Live-Score Guarantee:** This is an introductory marketing website, **not** a live score or gambling platform. No live match scores, ball-by-ball commentary, team totals, overs, wickets, or fabricated statistics are displayed anywhere.
- **Conceptual AI Interfaces:** Mockups present conceptual analytical models with neutral labels (*AI Match Insights*, *Performance Analysis*, *Match Trends*, *Cricket Intelligence*) without fabricated accuracy claims.
- **Brand Identity:** High-impact modern technology aesthetics, custom vector SVG logo with cricket seam & AI neural nodes, and cinematic atmospheric visuals.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript (Strict mode)
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + Custom Design Tokens
- **Icons:** Lucide React
- **Linter:** Oxlint (0 warnings, 0 errors across 21 files)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```
*(On Windows PowerShell, use `npm.cmd install` if execution policies restrict `.ps1` scripts).*

### 2. Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173/`.

### 3. Run Lint Checks
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration Guide

All site branding, official download URLs, contact emails, and legal metadata are centralized in:

📂 [`src/config/siteConfig.ts`](./src/config/siteConfig.ts)

```typescript
export const siteConfig: SiteConfig = {
  appName: "Cricket Master Line AI",
  colors: {
    primary: "#3C1392",
    secondary: "#841770",
    bgDeep: "#10091F",
    bgSurface: "#1B1230",
  },
  downloads: {
    // Insert your official store URLs here when live:
    androidPlayStoreUrl: "https://play.google.com/store/apps/details?id=com.cricketmasterline.app",
    iosAppStoreUrl: "https://apps.apple.com/app/cricket-master-line-ai/id000000000",
    isAndroidLive: false, // Set to true to activate direct Google Play link
    isIosLive: false,     // Set to true to activate direct App Store link
    statusNote: "The official Cricket Master Line AI mobile app is completing store certification...",
  },
  contact: {
    email: "contact@cricketmasterline.ai",
  },
  legal: {
    entityName: "Cricket Master Line AI Development Team",
    lastUpdated: "October 2026",
  },
};
```

When `isAndroidLive` or `isIosLive` are set to `true`, the download modal switches immediately to direct external store download buttons.

---

## 📱 Page & Component Structure

- **Navigation Header:** Sticky header with glassmorphism, responsive mobile drawer menu, smooth anchor scrolling, and download action.
- **Hero Section:** “Cricket, Understood Beyond the Score” with atmospheric stadium backdrop and smartphone frame featuring conceptual AI telemetry.
- **Value Proposition Strip:** 4 core value propositions with minimal icons and clean separators.
- **About Section:** “Meet Cricket Master Line AI” with 2-column layout and stylized AI cricket analytics visual.
- **Core Features Grid:** 6 cards with Lucide icons highlighting mobile experience, AI analysis, match insights, performance understanding, modern experience, and cricket intelligence.
- **AI Analysis Showcase:** “See Cricket Through an AI Lens” with 3 connected conceptual pillars (Match Context, Performance Patterns, AI-Assisted Insights) and abstract vector data models.
- **How It Works:** 3-step visual onboarding flow (Download -> Explore Cricket Information -> Explore AI Analysis).
- **Mobile App Showcase:** Smartphone device presentation with surrounding feature callouts and download CTA.
- **Why Choose Cricket Master Line AI:** 4 honest, specific benefit statements without exaggerated superlatives.
- **FAQ Accordion:** Keyboard-accessible interactive accordion answering the 6 key user questions.
- **Final Download CTA:** High-contrast purple-magenta gradient closing card.
- **Footer:** Quick navigation, download status, dynamic copyright year, and legal policy routes.
- **Legal Pages:**
  - `/privacy` (Privacy Policy)
  - `/terms` (Terms and Conditions)
  Both feature clearly marked draft notices for pre-launch verification.
- **Download Modal:** Accessible dialog handling Android/iOS store status and instructions.

---

## 📋 Pre-Launch Deployment Checklist

Before publishing to production or submitting app store links:
- [ ] Provide official Google Play Store package URL in `src/config/siteConfig.ts`
- [ ] Provide official Apple App Store URL in `src/config/siteConfig.ts`
- [ ] Review Privacy Policy draft terms with legal counsel regarding analytics SDKs
- [ ] Review Terms and Conditions draft terms with legal counsel
- [ ] Update contact email in `src/config/siteConfig.ts` to active mailbox
- [ ] Deploy static `dist/` directory to Vercel, Netlify, Cloudflare Pages, or AWS S3/CloudFront.
