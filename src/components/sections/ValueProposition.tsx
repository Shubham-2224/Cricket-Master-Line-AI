import React from 'react';
import { Radio, BrainCircuit, LineChart, HeartHandshake } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: Radio,
      title: 'Cricket Information',
      desc: 'Mobile-first cricket companion',
    },
    {
      icon: BrainCircuit,
      title: 'AI-Powered Analysis',
      desc: 'Context beyond basic scorelines',
    },
    {
      icon: LineChart,
      title: 'Performance Insights',
      desc: 'Analytical match perspectives',
    },
    {
      icon: HeartHandshake,
      title: 'Designed for Cricket Fans',
      desc: 'Built for genuine enthusiasm',
    },
  ];

  return (
    <section className="relative z-10 border-y border-white/10 bg-[#160E28]/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-[#E879F9] shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white tracking-tight">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#BDB4C9] mt-0.5">
                    {item.desc}
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
