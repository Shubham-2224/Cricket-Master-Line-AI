import React from 'react';
import {
  Trophy,
  Brain,
  Compass,
  LineChart,
  Smartphone,
  Cpu,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Cricket Score Experience',
      description:
        'A mobile-focused way to stay connected with cricket score information. The actual score experience is available in the application, not on this website.',
      badge: 'Mobile App',
    },
    {
      icon: Brain,
      title: 'AI Cricket Analysis',
      description:
        'Discover AI-powered cricket analysis and game-related insights through the application.',
      badge: 'AI Core',
    },
    {
      icon: Compass,
      title: 'Match Insights',
      description:
        'Explore contextual information designed to help fans understand cricket matches more deeply, where supported by the app.',
      badge: 'Context',
    },
    {
      icon: LineChart,
      title: 'Performance Understanding',
      description:
        'A more analytical perspective on cricket performance and match information.',
      badge: 'Analytics',
    },
    {
      icon: Smartphone,
      title: 'Modern Mobile Experience',
      description:
        'A dedicated app experience built for people who follow and enjoy cricket.',
      badge: 'Native Feel',
    },
    {
      icon: Cpu,
      title: 'Cricket Intelligence',
      description:
        'Bringing cricket information and AI-assisted analysis into one product experience.',
      badge: 'Intelligence',
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#10091F]">
      {/* Background glowing glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#841770]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#E879F9]">
            <span>Capabilities &amp; Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Designed for Meaningful Cricket Insight
          </h2>

          <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
            Cricket Master Line AI focuses on bringing clarity, context, and analytical depth to cricket
            followers through its dedicated mobile application.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative p-8 rounded-3xl bg-[#1B1230] border border-white/10 hover:border-[#841770]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(132,23,112,0.2)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3C1392] to-[#841770] text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/5 text-[#C4B5FD] border border-white/5">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#E879F9] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#BDB4C9] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Card Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8E83A2]">
                  <span>Application Feature</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#E879F9]/50 group-hover:bg-[#E879F9] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
