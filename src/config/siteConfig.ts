/**
 * Cricket Master Line AI - Central Site Configuration
 * 
 * Edit this file to update brand details, download URLs, contact information,
 * and deployment parameters.
 */

export interface DownloadLinkConfig {
  androidPlayStoreUrl: string;
  iosAppStoreUrl: string;
  isAndroidLive: boolean;
  isIosLive: boolean;
  statusNote: string;
}

export interface SiteConfig {
  appName: string;
  brandText: string;
  aiBadgeText: string;
  tagline: string;
  subTagline: string;
  appIconUrl: string;
  metaDescription: string;
  canonicalUrl: string;
  colors: {
    primary: string;
    secondary: string;
    bgDeep: string;
    bgSurface: string;
    bgSurfaceElevated: string;
    textPrimary: string;
    textSecondary: string;
    borderSubtle: string;
  };
  downloads: DownloadLinkConfig;
  contact: {
    email: string;
    supportNote: string;
  };
  legal: {
    entityName: string;
    lastUpdated: string;
    jurisdictionNote: string;
  };
}

export const siteConfig: SiteConfig = {
  appName: "Cricket Master Line AI",
  brandText: "Cricket Master Line",
  aiBadgeText: "AI",
  tagline: "Cricket, Understood Beyond the Score.",
  subTagline: "Your Cricket Companion, Powered by AI.",
  appIconUrl: "/assets/app_icon.png",
  metaDescription: "Discover Cricket Master Line AI, a cricket-focused mobile application combining cricket score information with AI-powered analysis. Explore the app and its features.",
  canonicalUrl: "https://cricketmasterline.ai",
  colors: {
    primary: "#3C1392",
    secondary: "#841770",
    bgDeep: "#10091F",
    bgSurface: "#1B1230",
    bgSurfaceElevated: "#241840",
    textPrimary: "#FFFFFF",
    textSecondary: "#BDB4C9",
    borderSubtle: "rgba(255, 255, 255, 0.08)",
  },
  // OFFICIAL DOWNLOAD URL CONFIGURATION PLACEHOLDER
  // Replace empty strings with genuine Google Play / App Store URLs when officially published.
  downloads: {
    androidPlayStoreUrl: "", // e.g. "https://play.google.com/store/apps/details?id=com.cricketmasterline.app"
    iosAppStoreUrl: "",      // e.g. "https://apps.apple.com/app/cricket-master-line-ai/id000000000"
    isAndroidLive: false,
    isIosLive: false,
    statusNote: "The official Cricket Master Line AI mobile app is completing store certification. Verified store links will activate immediately upon release.",
  },
  contact: {
    email: "contact@cricketmasterline.ai", // Draft contact placeholder
    supportNote: "For general inquiries and product questions regarding Cricket Master Line AI.",
  },
  legal: {
    entityName: "Cricket Master Line AI Development Team",
    lastUpdated: "October 2026",
    jurisdictionNote: "Draft placeholders for legal policies. Review and finalize legal counsel terms prior to commercial launch.",
  },
};
