import { Network, Activity, Layers, Sparkles, Info } from 'lucide-react';

export const AIAnalysisSection = () => {
  return (
    <section id="ai-analysis" className="relative py-24 md:py-36 bg-[#0E071B] overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#3C1392]/30 via-[#841770]/25 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#3C1392]/40 to-[#841770]/40 border border-[#E879F9]/30 text-xs font-semibold uppercase tracking-wider text-[#E879F9] shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#E879F9]" />
            <span>AI Innovation Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
            See Cricket Through an AI Lens
          </h2>

          <p className="text-base sm:text-lg text-[#BDB4C9] leading-relaxed">
            Cricket is more than numbers. Explore how artificial intelligence can help bring
            context, patterns, and deeper understanding to the game.
          </p>
        </div>

        {/* 3 Connected Concept Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Concept 1: Match Context */}
          <div className="relative rounded-3xl bg-[#1B1230] border border-white/10 p-8 flex flex-col justify-between hover:border-[#841770]/60 transition-all duration-300 shadow-xl group">
            <div>
              {/* Concept Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3C1392]/60 text-[#C4B5FD] border border-white/10 shadow-inner">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#E879F9] px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                  Concept 01
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#E879F9] transition-colors">
                Match Context
              </h3>

              <p className="text-sm text-[#BDB4C9] leading-relaxed mb-6">
                Explain how match information can provide useful context for cricket fans. By observing
                phases of play together rather than in isolation, cricket enthusiasts can follow how conditions
                influence match flow.
              </p>
            </div>

            {/* Abstract Graphic: Contextual Layering (No fake stats) */}
            <div className="rounded-2xl bg-[#10091F] p-4 border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs text-[#8E83A2]">
                <span className="font-semibold text-white">Contextual Phases</span>
                <span className="text-[#C4B5FD] text-[10px]">Macro Analysis</span>
              </div>
              <div className="space-y-2">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#DDD6FE]">Initial Game Assessment</span>
                  <div className="h-2 w-16 rounded-full bg-gradient-to-r from-[#3C1392] to-[#841770]" />
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#DDD6FE]">Mid-Game Equilibrium</span>
                  <div className="h-2 w-24 rounded-full bg-gradient-to-r from-[#841770] to-[#E879F9]" />
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#DDD6FE]">Closing Phase Dynamics</span>
                  <div className="h-2 w-20 rounded-full bg-gradient-to-r from-[#3C1392] to-[#C4B5FD]" />
                </div>
              </div>
            </div>
          </div>

          {/* Concept 2: Performance Patterns */}
          <div className="relative rounded-3xl bg-[#1B1230] border border-white/10 p-8 flex flex-col justify-between hover:border-[#841770]/60 transition-all duration-300 shadow-xl group">
            <div>
              {/* Concept Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#841770]/50 text-[#E879F9] border border-white/10 shadow-inner">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#E879F9] px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                  Concept 02
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#E879F9] transition-colors">
                Performance Patterns
              </h3>

              <p className="text-sm text-[#BDB4C9] leading-relaxed mb-6">
                Introduce the concept of analyzing cricket performance and trends where the application
                supports it. Recognizing shifts in momentum and strategic adaptations provides richer insight into team rhythm.
              </p>
            </div>

            {/* Abstract Graphic: Multi-Axis Radar Matrix (No fake numbers) */}
            <div className="rounded-2xl bg-[#10091F] p-4 border border-white/5 flex flex-col items-center">
              <div className="w-full flex justify-between items-center text-xs text-[#8E83A2] mb-2">
                <span className="font-semibold text-white">Pattern Vector</span>
                <span className="text-[#E879F9] text-[10px]">Multi-Axis Model</span>
              </div>
              <svg className="w-36 h-36" viewBox="0 0 100 100">
                {/* Hexagonal radar grid */}
                <polygon
                  points="50,15 80,32 80,68 50,85 20,68 20,32"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <polygon
                  points="50,28 70,39 70,61 50,72 30,61 30,39"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1"
                />
                {/* Radar axes */}
                <line x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.1)" />
                <line x1="20" y1="32" x2="80" y2="68" stroke="rgba(255,255,255,0.1)" />
                <line x1="20" y1="68" x2="80" y2="32" stroke="rgba(255,255,255,0.1)" />
                {/* Conceptual pattern shape */}
                <polygon
                  points="50,20 75,36 68,64 50,76 28,58 35,35"
                  fill="rgba(132, 23, 112, 0.35)"
                  stroke="#E879F9"
                  strokeWidth="1.8"
                />
                <circle cx="50" cy="20" r="2.5" fill="#FFFFFF" />
                <circle cx="75" cy="36" r="2.5" fill="#C4B5FD" />
                <circle cx="68" cy="64" r="2.5" fill="#E879F9" />
                <circle cx="50" cy="76" r="2.5" fill="#C4B5FD" />
                <circle cx="28" cy="58" r="2.5" fill="#E879F9" />
                <circle cx="35" cy="35" r="2.5" fill="#FFFFFF" />
              </svg>
              <div className="w-full flex justify-between text-[9px] text-[#8E83A2] mt-1">
                <span>Adaptability</span>
                <span>Tactics</span>
                <span>Discipline</span>
              </div>
            </div>
          </div>

          {/* Concept 3: AI-Assisted Insights */}
          <div className="relative rounded-3xl bg-[#1B1230] border border-white/10 p-8 flex flex-col justify-between hover:border-[#841770]/60 transition-all duration-300 shadow-xl group">
            <div>
              {/* Concept Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3C1392] to-[#841770] text-white shadow-md">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#E879F9] px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                  Concept 03
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-3 group-hover:text-[#E879F9] transition-colors">
                AI-Assisted Insights
              </h3>

              <p className="text-sm text-[#BDB4C9] leading-relaxed mb-6">
                Explain the role of AI in organizing and interpreting cricket-related information.
                Modern algorithms help distill complex game dynamics into understandable narratives and clear trends.
              </p>
            </div>

            {/* Abstract Graphic: Neural Node Network (No fake data) */}
            <div className="rounded-2xl bg-[#10091F] p-4 border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs text-[#8E83A2]">
                <span className="font-semibold text-white">Neural Processing</span>
                <span className="text-[#E879F9] text-[10px]">Telemetry Map</span>
              </div>
              <div className="h-28 rounded-xl bg-white/5 flex items-center justify-center p-3 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 160 80">
                  <line x1="20" y1="40" x2="60" y2="20" stroke="rgba(232,121,249,0.4)" strokeWidth="1.2" />
                  <line x1="20" y1="40" x2="60" y2="60" stroke="rgba(232,121,249,0.4)" strokeWidth="1.2" />
                  <line x1="60" y1="20" x2="100" y2="40" stroke="rgba(196,181,253,0.4)" strokeWidth="1.2" />
                  <line x1="60" y1="60" x2="100" y2="40" stroke="rgba(196,181,253,0.4)" strokeWidth="1.2" />
                  <line x1="100" y1="40" x2="140" y2="40" stroke="rgba(232,121,249,0.7)" strokeWidth="1.5" />
                  {/* Nodes */}
                  <circle cx="20" cy="40" r="5" fill="#3C1392" stroke="#FFFFFF" strokeWidth="1" />
                  <circle cx="60" cy="20" r="4.5" fill="#841770" stroke="#C4B5FD" strokeWidth="1" />
                  <circle cx="60" cy="60" r="4.5" fill="#841770" stroke="#C4B5FD" strokeWidth="1" />
                  <circle cx="100" cy="40" r="6" fill="#841770" stroke="#E879F9" strokeWidth="1.5" />
                  <circle cx="140" cy="40" r="7" fill="#E879F9" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Required Mandatory Illustrative Disclaimer */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3 text-xs text-[#8E83A2] max-w-2xl mx-auto text-center">
          <Info className="w-4 h-4 text-[#C4B5FD] shrink-0" />
          <span>
            <strong>Illustrative Marketing Visuals:</strong> The diagrams and models presented above are conceptual
            illustrations highlighting analytical capabilities and do not represent live match scores or speculative predictions.
          </span>
        </div>

      </div>
    </section>
  );
};
