import { Sparkles } from 'lucide-react';

interface PhoneMockupProps {
  className?: string;
  showBadge?: boolean;
}

export const PhoneMockup = ({
  className = '',
  showBadge = true,
}: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto select-none ${className}`}>
      {/* Ambient atmospheric glow behind the device */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#3C1392]/50 via-[#841770]/40 to-[#E879F9]/20 rounded-[56px] blur-3xl opacity-80 -z-10 animate-pulse-glow" />

      {/* Outer Phone Chassis with Physical Buttons */}
      <div className="relative">
        {/* Hardware Side Buttons */}
        {/* Left: Volume Up & Down */}
        <div className="absolute -left-[6px] top-[90px] w-[4px] h-[32px] bg-[#3C255C] rounded-l-md border-l border-white/20 shadow-sm" />
        <div className="absolute -left-[6px] top-[132px] w-[4px] h-[32px] bg-[#3C255C] rounded-l-md border-l border-white/20 shadow-sm" />
        {/* Right: Power / Lock Button */}
        <div className="absolute -right-[6px] top-[110px] w-[4px] h-[46px] bg-[#3C255C] rounded-r-md border-r border-white/20 shadow-sm" />

        {/* Phone Hardware Body Frame (Flagship Titanium/Violet Finish) */}
        <div className="relative w-[260px] sm:w-[285px] md:w-[305px] rounded-[46px] p-2 sm:p-2.5 bg-gradient-to-b from-[#3E2563] via-[#1B1130] to-[#0D0719] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(132,23,112,0.35)] border-2 border-[#543880]/70 ring-1 ring-white/15">
          
          {/* Inner Dark Screen Bezel */}
          <div className="relative overflow-hidden rounded-[38px] bg-black border border-white/10 shadow-inner flex flex-col">
            
            {/* Sleek Top Hardware Bezel with Camera Punch-Hole & Status bar */}
            <div className="relative h-6 w-full bg-[#140C24] flex items-center justify-between px-4 z-20 border-b border-white/5 select-none shrink-0">
              <span className="text-[10px] font-semibold text-white/90">9:41</span>
              {/* Centered Camera Punch-Hole Lens */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center h-3 w-3 rounded-full bg-black border border-white/25">
                <div className="h-1.5 w-1.5 rounded-full bg-[#3C1392] flex items-center justify-center">
                  <div className="h-0.5 w-0.5 rounded-full bg-[#E879F9]/80" />
                </div>
              </div>
              {/* Battery / Network */}
              <div className="flex items-center gap-1.5 text-white/80">
                <span className="text-[8px] font-semibold text-[#C4B5FD]">5G</span>
                <div className="h-2 w-3 rounded-sm border border-white/60 p-0.5 flex items-center">
                  <div className="h-full w-1.5 bg-white rounded-2xs" />
                </div>
              </div>
            </div>

            {/* The Actual Application Screen Image */}
            <div className="relative w-full overflow-hidden bg-white aspect-[716/1600]">
              <img
                src="/assets/mobile_screen_actual.jpg"
                alt="Cricket Master Line AI Official Mobile Application Interface"
                className="w-full h-full object-cover object-top block"
                loading="eager"
              />

              {/* Subtle Specular Screen Glass Reflection */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent opacity-90" />
            </div>

            {/* Bottom Bezel with Home Indicator Bar */}
            <div className="relative h-4 w-full bg-[#140C24] flex items-center justify-center z-20 shrink-0 border-t border-white/5">
              <div className="h-1 w-24 rounded-full bg-white/40" />
            </div>

          </div>

        </div>
      </div>

      {/* Floating official interface badge */}
      {showBadge && (
        <div className="mt-3 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-[#BDB4C9]">
            <Sparkles className="w-3 h-3 text-[#E879F9]" />
            <span className="font-medium text-white">Genuine App Interface</span>
          </div>
        </div>
      )}
    </div>
  );
};
