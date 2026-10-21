import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ValueProposition } from './components/sections/ValueProposition';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturesGrid } from './components/sections/FeaturesGrid';
import { AIAnalysisSection } from './components/sections/AIAnalysisSection';
import { HowItWorks } from './components/sections/HowItWorks';
import { AppShowcase } from './components/sections/AppShowcase';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { FAQAccordion } from './components/sections/FAQAccordion';
import { DownloadCTA } from './components/sections/DownloadCTA';
import { DownloadModal } from './components/common/DownloadModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';

export function App() {
  const [activeRoute, setActiveRoute] = useState<'home' | 'privacy' | 'terms'>('home');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Sync route with window pathname or hash
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '');
      const hash = window.location.hash;

      if (path === '/privacy' || hash === '#privacy') {
        setActiveRoute('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path === '/terms' || hash === '#terms') {
        setActiveRoute('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActiveRoute('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: string) => {
    if (route === 'privacy') {
      setActiveRoute('privacy');
      window.history.pushState({}, '', '#privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === 'terms') {
      setActiveRoute('terms');
      window.history.pushState({}, '', '#terms');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveRoute('home');
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const handleOpenDownload = () => {
    setIsDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadModalOpen(false);
  };

  const handleExploreAI = () => {
    if (activeRoute !== 'home') {
      setActiveRoute('home');
      setTimeout(() => {
        const el = document.getElementById('ai-analysis');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('ai-analysis');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#10091F] text-white flex flex-col font-sans selection:bg-[#841770] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenDownload={handleOpenDownload}
        activeRoute={activeRoute}
        onNavigate={navigateTo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeRoute === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}

        {activeRoute === 'terms' && (
          <TermsConditions onBack={() => navigateTo('home')} />
        )}

        {activeRoute === 'home' && (
          <>
            {/* Section B: Hero Section */}
            <HeroSection
              onOpenDownload={handleOpenDownload}
              onExploreAI={handleExploreAI}
            />

            {/* Section C: Value Proposition Strip */}
            <ValueProposition />

            {/* Section D: About the Application */}
            <AboutSection />

            {/* Section E: Core Features */}
            <FeaturesGrid />

            {/* Section F: AI Analysis Showcase */}
            <AIAnalysisSection />

            {/* Section G: How It Works */}
            <HowItWorks onOpenDownload={handleOpenDownload} />

            {/* Section H: Mobile App Showcase */}
            <AppShowcase onOpenDownload={handleOpenDownload} />

            {/* Section I: Why Choose Cricket Master Line AI */}
            <BenefitsSection />

            {/* Section J: FAQ Accordion */}
            <FAQAccordion />

            {/* Section K: Final Download CTA */}
            <DownloadCTA onOpenDownload={handleOpenDownload} />
          </>
        )}
      </main>

      {/* Section L: Footer */}
      <Footer
        onOpenDownload={handleOpenDownload}
        onNavigate={navigateTo}
      />

      {/* Central Configurable Download Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={handleCloseDownload}
      />
    </div>
  );
}

export default App;
