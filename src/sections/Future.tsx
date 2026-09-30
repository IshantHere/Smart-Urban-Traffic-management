import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FUTURE_PILLARS } from '../data/future';
import { 
  Radio, 
  Layers, 
  Zap, 
  Cpu, 
  ArrowRight, 
  ArrowDown,
  Brain,
  Car,
  Wifi,
  Workflow,
  Sparkles
} from 'lucide-react';

export const Future: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Radio': return <Radio className="w-5 h-5 text-brand-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      default: return <Cpu className="w-5 h-5 text-brand-600" />;
    }
  };

  const visualFlow = [
    { label: 'Artificial Intelligence', sub: 'Deep learning models', icon: <Brain className="w-4 h-4 text-brand-600" /> },
    { label: 'Connected Vehicles', sub: 'C-V2X & onboard telemetry', icon: <Car className="w-4 h-4 text-brand-600" /> },
    { label: 'Real-Time Communication', sub: 'Sub-10ms edge telemetry', icon: <Wifi className="w-4 h-4 text-brand-600" /> },
    { label: 'Predictive Management', sub: 'Proactive signal preemption', icon: <Workflow className="w-4 h-4 text-brand-600" /> },
    { label: 'Smarter Urban Mobility', sub: 'Zero-delay, sustainable flow', icon: <Sparkles className="w-4 h-4 text-emerald-600" /> },
  ];

  return (
    <section id="future" className="py-16 sm:py-20 border-b border-charcoal-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="07 / Future Trajectory"
          title="The Future of Urban Traffic Systems"
          subtitle="Looking ahead to the convergence of artificial intelligence, cooperative vehicle communication, smart grid integration, and autonomous fleet coordination."
        />

        {/* Visual Progression: AI -> Connected Vehicles -> Real-Time Communication -> Predictive Traffic Management -> Smarter Urban Mobility */}
        <div className="mb-12 bg-charcoal-50/70 p-6 rounded-2xl border border-charcoal-200 shadow-2xs">
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-charcoal-500 mb-6">
            Evolutionary Technology Pipeline
          </div>

          <div className="hidden md:grid grid-cols-5 gap-3 relative">
            {visualFlow.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                <div className={`w-full p-4 rounded-xl border bg-white shadow-2xs ${
                  idx === visualFlow.length - 1 ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-charcoal-200'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-charcoal-50 border border-charcoal-200 flex items-center justify-center mx-auto mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-xs font-bold text-charcoal-900 leading-snug">
                    {item.label}
                  </h4>
                  <div className="text-[10px] text-charcoal-500 mt-1">
                    {item.sub}
                  </div>
                </div>

                {idx < visualFlow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-charcoal-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="md:hidden space-y-2">
            {visualFlow.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className={`p-3 rounded-xl border bg-white flex items-center gap-3 ${
                  idx === visualFlow.length - 1 ? 'border-emerald-300' : 'border-charcoal-200'
                }`}>
                  <div className="p-2 rounded-lg bg-charcoal-50 border border-charcoal-200">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-charcoal-900">{item.label}</h4>
                    <span className="text-[10px] text-charcoal-500">{item.sub}</span>
                  </div>
                </div>
                {idx < visualFlow.length - 1 && (
                  <div className="flex justify-center text-charcoal-300 py-0.5">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Forward-Looking Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FUTURE_PILLARS.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl border border-charcoal-200 bg-white shadow-2xs hover:shadow-sm transition"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="p-2.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                  {getPillarIcon(p.iconName)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-charcoal-500 font-mono bg-charcoal-100 px-2 py-0.5 rounded">
                    {p.horizon}
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-charcoal-900 mb-1">
                {p.title}
              </h3>
              <div className="text-xs font-semibold text-brand-600 mb-3">
                Standard: {p.technology}
              </div>

              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                {p.summary}
              </p>

              <div className="pt-3 border-t border-charcoal-100 text-xs text-charcoal-700 bg-charcoal-50/50 p-3 rounded-lg border border-charcoal-200/60">
                <span className="font-bold text-charcoal-900 block mb-0.5 text-[11px] uppercase tracking-wide">
                  Academic Horizon:
                </span>
                {p.academicImplications}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
