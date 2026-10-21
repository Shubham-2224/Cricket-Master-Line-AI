import React from 'react';
import { Target, Lightbulb, Smartphone, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Contextual Cricket Exploration',
      desc: 'Going beyond simple outcome numbers to appreciate how cricket matches evolve through tactical phases.',
    },
    {
      icon: Lightbulb,
      title: 'Intelligent Pattern Discovery',
      desc: 'Exploring performance trends and tactical shifts through conceptual AI-assisted modeling.',
    },
    {
      icon: Smartphone,
      title: 'Dedicated Mobile Architecture',
      desc: 'Crafted specifically as an intuitive mobile companion for cricket fans who love following the sport.',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#10091F] overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#3C1392]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#C4B5FD]">
              <span>About The Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              Meet Cricket Master Line AI
            </h2>

            <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
              Cricket Master Line AI brings cricket information and artificial intelligence together
              in a dedicated mobile experience. Its goal is to help cricket enthusiasts explore the game
              with greater context, discover meaningful insights, and enjoy a more analytical approach
              to cricket.
            </p>

            <div className="space-y-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#1B1230]/70 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3C1392] to-[#841770] text-white shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#BDB4C9] mt-1 leading-normal">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#8E83A2] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#E879F9]" />
              <span>Independent cricket technology companion concept</span>
            </div>
          </div>

          {/* Right Column: Premium Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1B1230] group">
              <img
                src="/assets/cricket_analytics_art.jpg"
                alt="Stylized cricket batsman with luminous AI telemetry and neural network nodes"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Bottom gradient overlay with caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#10091F] via-[#10091F]/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E879F9]">
                      AI Telemetry Concept
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Analytical Match Understanding
                    </div>
                  </div>
                  <span className="text-[10px] text-[#8E83A2] px-2 py-1 rounded bg-black/50 border border-white/10">
                    Concept Art
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
