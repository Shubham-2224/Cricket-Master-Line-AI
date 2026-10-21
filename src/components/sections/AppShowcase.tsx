import { Download, Zap, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';
import { PhoneMockup } from '../common/PhoneMockup';

interface AppShowcaseProps {
  onOpenDownload: () => void;
}

export const AppShowcase = ({ onOpenDownload }: AppShowcaseProps) => {
  return (
    <section className="relative py-24 md:py-36 bg-[#0D0719] overflow-hidden">
      {/* Radiant brand glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#3C1392]/35 to-[#841770]/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#E879F9]">
            <span>Product Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Crafted for the Mobile Era of Cricket
          </h2>

          <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
            Experience cricket information and AI-assisted perspectives harmoniously united inside a sleek,
            distraction-free mobile interface.
          </p>
        </div>

        {/* Showcase Canvas with Surrounding Feature Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Highlights */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-right order-2 lg:order-1">
            <div className="p-5 rounded-2xl bg-[#1B1230]/80 border border-white/10 shadow-lg space-y-2 hover:border-[#841770]/50 transition-colors">
              <div className="flex items-center justify-center lg:justify-end gap-2 text-[#E879F9]">
                <Zap className="w-5 h-5" />
                <h4 className="text-base font-bold font-heading text-white">Instant Context</h4>
              </div>
              <p className="text-xs text-[#BDB4C9] leading-relaxed">
                Quick, accessible match indicators designed for swift mobile review.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1230]/80 border border-white/10 shadow-lg space-y-2 hover:border-[#841770]/50 transition-colors">
              <div className="flex items-center justify-center lg:justify-end gap-2 text-[#C4B5FD]">
                <Sparkles className="w-5 h-5" />
                <h4 className="text-base font-bold font-heading text-white">AI-Powered Insights</h4>
              </div>
              <p className="text-xs text-[#BDB4C9] leading-relaxed">
                Smart interpretations highlighting tactical trends and momentum shifts.
              </p>
            </div>
          </div>

          {/* Center: Device Mockup */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <PhoneMockup />
          </div>

          {/* Right Highlights */}
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left order-3">
            <div className="p-5 rounded-2xl bg-[#1B1230]/80 border border-white/10 shadow-lg space-y-2 hover:border-[#841770]/50 transition-colors">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#E879F9]">
                <Sliders className="w-5 h-5" />
                <h4 className="text-base font-bold font-heading text-white">Modern Aesthetic</h4>
              </div>
              <p className="text-xs text-[#BDB4C9] leading-relaxed">
                Tailored purple and magenta dark interface crafted for eye comfort during long viewings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1B1230]/80 border border-white/10 shadow-lg space-y-2 hover:border-[#841770]/50 transition-colors">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#C4B5FD]">
                <CheckCircle2 className="w-5 h-5" />
                <h4 className="text-base font-bold font-heading text-white">Enthusiast Focused</h4>
              </div>
              <p className="text-xs text-[#BDB4C9] leading-relaxed">
                Engineered for cricket lovers who want depth beyond mere outcome figures.
              </p>
            </div>
          </div>

        </div>

        {/* Central Download Prompt */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#3C1392] to-[#841770] hover:brightness-110 active:scale-95 transition-all shadow-[0_6px_25px_rgba(132,23,112,0.4)]"
          >
            <Download className="w-5 h-5" />
            <span>Download Cricket Master Line AI</span>
          </button>
        </div>

      </div>
    </section>
  );
};
