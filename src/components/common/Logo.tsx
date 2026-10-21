interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo = ({
  className = '',
  size = 'md',
  showText = true,
}: LogoProps) => {
  const iconDimensions = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-14 h-14 rounded-2xl',
  }[size];

  const textSize = {
    sm: 'text-base font-semibold',
    md: 'text-lg font-bold',
    lg: 'text-2xl font-extrabold',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Cricket Master Line AI App Icon */}
      <div className={`relative shrink-0 overflow-hidden shadow-[0_4px_16px_rgba(132,23,112,0.35)] border border-white/15 bg-white ${iconDimensions}`}>
        <img
          src="/assets/app_icon.png"
          alt="Cricket Master Line AI Official App Icon"
          className="w-full h-full object-contain block"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex items-center gap-1.5 leading-tight tracking-tight">
          <span className={`font-heading text-white ${textSize}`}>
            Cricket Master Line
          </span>
          <span className="px-1.5 py-0.5 text-xs font-bold tracking-wider uppercase rounded bg-gradient-to-r from-[#3C1392] to-[#841770] text-white border border-[#E879F9]/30">
            AI
          </span>
        </div>
      )}
    </div>
  );
};
