import { Download, Sparkles } from 'lucide-react';

interface DownloadCTAProps {
  onOpenDownload: () => void;
}

export const DownloadCTA = ({ onOpenDownload }: DownloadCTAProps) => {
  return (
    <section className="relative py-24 md:py-32 bg-[#10091F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card with Rich Purple-to-Magenta Gradient */}
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#3C1392] via-[#5F1582] to-[#841770] p-8 sm:p-12 md:p-16 text-center shadow-[0_20px_60px_-15px_rgba(132,23,112,0.5)] border border-white/15 overflow-hidden">
          
          {/* Background decorative pattern rings */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-white/10 opacity-30 pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/10 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-white/10 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5 text-[#E879F9]" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Ready to Explore Cricket with AI?
            </h2>

            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discover Cricket Master Line AI and bring a smarter, more analytical perspective to your cricket experience.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-bold text-[#10091F] bg-white hover:bg-[#F3E8FF] active:scale-95 transition-all shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white group"
              >
                <Download className="w-5 h-5 text-[#841770] group-hover:translate-y-0.5 transition-transform" />
                <span>Download Cricket Master Line AI</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-medium">
              Explore the application and discover its available features.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
