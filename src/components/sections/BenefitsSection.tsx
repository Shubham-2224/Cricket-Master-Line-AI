import React from 'react';
import { Smartphone, Brain, Sparkles, Heart } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Smartphone,
      title: 'A cricket-focused mobile application',
      description:
        'Engineered from the ground up to respect cricket traditions while serving the needs of modern mobile users.',
    },
    {
      icon: Brain,
      title: 'AI analysis as part of the product experience',
      description:
        'Artificial intelligence integrated thoughtfully to help reveal contextual patterns and tactical trends.',
    },
    {
      icon: Sparkles,
      title: 'A modern, easy-to-understand presentation',
      description:
        'Complex cricket metrics translated into clean, intuitive visuals that make following matches effortless.',
    },
    {
      icon: Heart,
      title: 'A product concept designed around cricket enthusiasts',
      description:
        'Created by people who genuinely follow the sport and understand what makes cricket narratives captivating.',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#10091F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
            <span>Our Focus</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            Built for People Who Love Cricket and Want More Insight
          </h2>

          <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
            We focus on genuine product qualities and thoughtful user experience rather than exaggerated claims.
          </p>
        </div>

        {/* 4 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#1B1230] border border-white/10 hover:border-[#841770]/60 transition-all duration-300 flex items-start gap-5 shadow-lg group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3C1392] to-[#841770] text-white shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-heading text-white tracking-tight group-hover:text-[#E879F9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#BDB4C9] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
