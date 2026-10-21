import { Download, Compass, Cpu, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenDownload: () => void;
}

export const HowItWorks = ({ onOpenDownload }: HowItWorksProps) => {
  const steps = [
    {
      step: '01',
      title: 'Download the App',
      description: 'Get Cricket Master Line AI on your compatible mobile device.',
      icon: Download,
      action: onOpenDownload,
      actionLabel: 'Check Availability',
    },
    {
      step: '02',
      title: 'Explore Cricket Information',
      description: 'Discover the cricket information and features available inside the application.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Explore AI Analysis',
      description: 'Use the app\'s available AI-powered analysis tools to explore the game from a more analytical perspective.',
      icon: Cpu,
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#10091F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
            <span>Seamless Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Your Cricket Experience, Simplified
          </h2>

          <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
            Follow three simple steps to start exploring the game through modern technology and analytical clarity.
          </p>
        </div>

        {/* 3 Step Cards with connecting elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-[#1B1230] border border-white/10 p-8 flex flex-col justify-between hover:border-[#841770]/50 transition-all duration-300 shadow-xl"
              >
                {/* Step indicator watermark */}
                <div className="text-5xl font-extrabold font-heading text-white/5 absolute top-6 right-6 select-none">
                  {item.step}
                </div>

                <div>
                  {/* Step Header */}
                  {item.step === '01' ? (
                    <div className="h-14 w-14 rounded-2xl overflow-hidden bg-white border border-white/20 shadow-lg mb-6 flex items-center justify-center p-1">
                      <img
                        src="/assets/app_icon.png"
                        alt="Cricket Master Line AI App Icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3C1392] to-[#841770] text-white shadow-lg mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                  )}

                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/5 text-[11px] font-mono text-[#E879F9] mb-3">
                    STEP {item.step}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#BDB4C9] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.action && (
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <button
                      onClick={item.action}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#E879F9] hover:text-white transition-colors"
                    >
                      <span>{item.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
