import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SMART_TRAFFIC_STRATEGIES, StrategyItem } from '../data/strategies';
import { 
  Sliders, 
  BrainCircuit, 
  Camera, 
  ParkingSquare, 
  Bus, 
  Navigation,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

export const Strategies: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('intelligent-signals');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Sliders': return <Sliders className="w-5 h-5 text-brand-600" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-600" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-600" />;
      case 'ParkingSquare': return <ParkingSquare className="w-5 h-5 text-purple-600" />;
      case 'Bus': return <Bus className="w-5 h-5 text-amber-600" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-teal-600" />;
      default: return <Sliders className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="strategies" className="py-16 sm:py-20 border-b border-charcoal-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="03 / Core Methodologies"
          title="Six Core Smart Traffic Management Strategies"
          subtitle="Explore the key engineering and algorithmic methodologies transforming urban mobility from static congestion to responsive, data-driven optimization."
        />

        {/* 6 Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {SMART_TRAFFIC_STRATEGIES.map((strategy) => {
            const isExpanded = expandedId === strategy.id;

            return (
              <div
                key={strategy.id}
                className={`rounded-2xl border transition-all duration-200 bg-white shadow-2xs hover:shadow-sm overflow-hidden ${
                  isExpanded ? 'border-brand-400 ring-1 ring-brand-100' : 'border-charcoal-200 hover:border-charcoal-300'
                }`}
              >
                {/* Card Header & Summary */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-charcoal-100 font-bold text-xs text-charcoal-700 flex items-center justify-center">
                        0{strategy.number}
                      </div>
                      <div className="p-2 rounded-lg bg-charcoal-50 border border-charcoal-200">
                        {getIcon(strategy.iconName)}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">
                      Strategy 0{strategy.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal-900 mb-1 leading-snug">
                    {strategy.title}
                  </h3>
                  <div className="text-xs font-medium text-brand-600 mb-3">
                    {strategy.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                    {strategy.summary}
                  </p>

                  {/* Key Mechanisms Bullet points */}
                  <div className="space-y-1.5 pt-3 border-t border-charcoal-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                      Key Mechanisms
                    </span>
                    {strategy.keyMechanisms.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Toggle Button for Expandable Detail */}
                  <button
                    onClick={() => toggleExpand(strategy.id)}
                    className="mt-5 w-full py-2 px-3 rounded-lg text-xs font-semibold text-brand-700 bg-brand-50/60 hover:bg-brand-100/80 border border-brand-200/60 flex items-center justify-center gap-1.5 transition"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Technical Specifications' : 'View Technical Specifications'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Expandable Technical Detail Panel */}
                {isExpanded && (
                  <div className="bg-charcoal-50/60 px-6 py-5 border-t border-charcoal-200 space-y-4 animate-in fade-in duration-200">
                    {/* Traditional vs Smart Comparison */}
                    {strategy.comparisons && (
                      <div className="space-y-2">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500">
                          Paradigm Comparison
                        </div>
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-200 text-rose-900">
                            <span className="font-bold block text-[11px] text-rose-800">Legacy Approach:</span>
                            {strategy.comparisons.traditional}
                          </div>
                          <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200 text-emerald-900">
                            <span className="font-bold block text-[11px] text-emerald-800">Smart Approach:</span>
                            {strategy.comparisons.smart}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Detailed Technical Points */}
                    {strategy.technicalDetails.map((sec, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-xs font-bold text-charcoal-800 flex items-center gap-1.5">
                          <Layers className="w-3 h-3 text-brand-600" />
                          <span>{sec.heading}</span>
                        </div>
                        <ul className="text-xs text-charcoal-600 space-y-1 pl-4 list-disc">
                          {sec.points.map((p, pIdx) => (
                            <li key={pIdx} className="leading-relaxed">{p}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Real-World Case Reference */}
                    <div className="pt-2 border-t border-charcoal-200">
                      <span className="text-[10px] font-bold text-charcoal-400 uppercase block mb-1">
                        Real-World Implementation
                      </span>
                      <p className="text-xs text-charcoal-700 italic bg-white p-2.5 rounded-lg border border-charcoal-200">
                        {strategy.realWorldExample}
                      </p>
                    </div>
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
