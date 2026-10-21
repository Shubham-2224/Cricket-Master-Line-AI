import React from 'react';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/siteConfig';
import { Download, Mail, Shield, FileText } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
  onNavigate: (route: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({
  onOpenDownload,
  onNavigate,
}) => {

  const handleLinkClick = (e: React.MouseEvent, route: string, hash?: string) => {
    e.preventDefault();
    onNavigate(route);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0A0514] border-t border-white/10 pt-16 pb-12 text-[#BDB4C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={(e) => handleLinkClick(e, 'home', '#home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9] rounded-lg"
              aria-label="Cricket Master Line AI Home"
            >
              <Logo size="md" />
            </button>
            <p className="text-sm text-[#BDB4C9] leading-relaxed max-w-sm">
              Cricket Master Line AI is a cricket score mobile application crafted to bring match
              information and AI-powered cricket analysis together in one intelligent mobile experience.
            </p>
            <div className="pt-2 text-xs text-[#8E83A2]">
              Designed for cricket enthusiasts seeking deeper match context.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'home', '#home')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'home', '#features')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  Core Features
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'home', '#ai-analysis')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  AI Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'home', '#about')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  About Platform
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'home', '#faq')}
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal and Support */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-heading uppercase tracking-wider text-white">
              Legal &amp; Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'privacy')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  <Shield className="w-3.5 h-3.5 text-[#E879F9]" />
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleLinkClick(e, 'terms')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C4B5FD]" />
                  <span>Terms and Conditions</span>
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E879F9]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#BDB4C9]" />
                  <span>Contact: {siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenDownload}
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#E879F9]" />
                  <span>Download App Status</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E83A2]">
          <div>
            &copy; {CURRENT_YEAR} {siteConfig.appName}. All rights reserved.
          </div>
          <div className="text-center md:text-right">
            <span>Introductory website for mobile application. Does not provide live scorecards or betting services.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
