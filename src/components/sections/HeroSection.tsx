import React from 'react';
import { Download, Sparkles, ChevronRight, ShieldCheck, Cpu } from 'lucide-react';
import { PhoneMockup } from '../common/PhoneMockup';

interface HeroSectionProps {
  onOpenDownload: () => void;
  onExploreAI: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenDownload,
  onExploreAI,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Stadium Visual with Dark Overlay */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <img
          src="/assets/cricket_stadium_hero.jpg"
          alt="Cinematic cricket stadium atmospheric arena under purple ambient lighting"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform filter blur-[1px]"
          loading="eager"
        />
        {/* Deep gradient overlays for brand integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10091F]/90 via-[#10091F]/80 to-[#10091F]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#10091F]/60 to-[#10091F]" />
      </div>

      {/* Atmospheric Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-gradient-to-r from-[#3C1392]/40 to-[#841770]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 w-[300px] h-[300px] bg-[#841770]/20 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Trust/Positioning Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#E879F9] text-xs font-semibold tracking-wider uppercase shadow-inner">
              <img src="/assets/app_icon.png" alt="" className="w-4 h-4 rounded object-contain shrink-0" />
              <span>CRICKET × DATA × ARTIFICIAL INTELLIGENCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold font-heading text-white tracking-tight leading-[1.1]">
              Cricket, Understood <br className="hidden sm:inline" />
              <span className="text-gradient">Beyond the Score.</span>
            </h1>

            {/* Alternative Supporting Sub-headline */}
            <p className="text-lg sm:text-xl font-semibold text-[#DDD6FE]">
              Your Cricket Companion, Powered by AI.
            </p>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#BDB4C9] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stay connected to the game with Cricket Master Line AI — a cricket score application
              designed to bring match information and AI-powered cricket analysis together in one
              intelligent experience.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#3C1392] to-[#841770] hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_25px_rgba(132,23,112,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9] group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download the App</span>
              </button>

              <button
                onClick={onExploreAI}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#DDD6FE] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E879F9]"
              >
                <Sparkles className="w-4 h-4 text-[#E879F9]" />
                <span>Explore AI Features</span>
                <ChevronRight className="w-4 h-4 text-[#BDB4C9]" />
              </button>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#8E83A2]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C4B5FD]" />
                <span>Dedicated Mobile Application</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#E879F9]" />
                <span>Contextual AI Analysis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup with Conceptual AI Interface */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Decorative Floating AI Telemetry Badge */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#1B1230]/90 backdrop-blur-md border border-[#E879F9]/30 shadow-xl animate-subtle-float">
              <Sparkles className="w-4 h-4 text-[#E879F9]" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-[#8E83A2]">Telemetry</div>
                <div className="text-xs font-bold text-white">AI Match Modeling</div>
              </div>
            </div>

            {/* Decorative Floating Pillar Badge */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#1B1230]/90 backdrop-blur-md border border-[#3C1392]/50 shadow-xl">
              <div className="h-2 w-2 rounded-full bg-[#C4B5FD] animate-ping" />
              <span className="text-xs font-semibold text-[#DDD6FE]">
                Pattern Analysis Concept
              </span>
            </div>

            {/* The Smartphone Mockup */}
            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
};
