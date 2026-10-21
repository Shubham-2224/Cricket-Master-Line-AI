import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Logo } from '../common/Logo';

interface HeaderProps {
  onOpenDownload: () => void;
  activeRoute: string;
  onNavigate: (route: string) => void;
}

export const Header = ({
  onOpenDownload,
  activeRoute,
  onNavigate,
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', route: 'home' },
    { label: 'Features', href: '#features', route: 'home' },
    { label: 'AI Analysis', href: '#ai-analysis', route: 'home' },
    { label: 'About', href: '#about', route: 'home' },
    { label: 'FAQ', href: '#faq', route: 'home' },
  ];

  const handleNavClick = (href: string, targetRoute: string) => {
    setIsMobileMenuOpen(false);
    if (activeRoute !== targetRoute) {
      onNavigate(targetRoute);
      // Wait for route change then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#10091F]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('#home', 'home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9] rounded-lg p-1 text-left"
            aria-label="Cricket Master Line AI Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.route)}
                className="text-sm font-medium text-[#BDB4C9] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9] rounded px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#3C1392] to-[#841770] hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_16px_rgba(132,23,112,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
            >
              <Download className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#3C1392] to-[#841770] shadow-sm"
              aria-label="Download App"
            >
              <Download className="w-3.5 h-3.5" />
              <span>App</span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#BDB4C9] hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#10091F]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all p-6 space-y-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.route)}
                className="text-left py-2.5 px-3 rounded-lg text-base font-medium text-[#BDB4C9] hover:text-white hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3C1392] to-[#841770] shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download Cricket Master Line AI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
