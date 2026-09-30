import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { INDIA_INITIATIVES, INDIA_CHALLENGES } from '../data/indiaTraffic';
import { 
  Building2, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink, 
  Users, 
  CloudRain, 
  ZapOff, 
  GitFork,
  MapPin,
  TrendingUp
} from 'lucide-react';

export const IndiaContext: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'initiatives' | 'challenges'>('initiatives');

  const getChallengeIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-brand-600" />;
      case 'CloudRain': return <CloudRain className="w-5 h-5 text-blue-600" />;
      case 'ZapOff': return <ZapOff className="w-5 h-5 text-amber-600" />;
      case 'GitFork': return <GitFork className="w-5 h-5 text-purple-600" />;
      default: return <AlertTriangle className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="india" className="py-16 sm:py-20 border-b border-charcoal-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="05 / National Context"
          title="Smart Traffic Management in India"
          subtitle="Examining verified government programs, municipal ITMS deployments, and unique engineering challenges across Indian metropolitan ecosystems."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-charcoal-100 border border-charcoal-200">
            <button
              onClick={() => setActiveTab('initiatives')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === 'initiatives'
                  ? 'bg-white text-charcoal-900 shadow-xs'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              Operational Government Initiatives
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeTab === 'challenges'
                  ? 'bg-white text-charcoal-900 shadow-xs'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              Unique Engineering Challenges
            </button>
          </div>
        </div>

        {/* Tab 1: Verified Initiatives */}
        {activeTab === 'initiatives' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDIA_INITIATIVES.map((item) => (
              <div
                key={item.id}
                className="bg-charcoal-50/50 rounded-2xl border border-charcoal-200 p-6 flex flex-col justify-between hover:bg-white hover:border-brand-300 transition-all duration-200 shadow-2xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {item.status}
                    </span>
                    <span className="text-[11px] text-charcoal-500 font-medium">
                      {item.scope}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-charcoal-900 mb-1 leading-snug">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-brand-700 mb-3">
                    {item.agency}
                  </div>

                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-charcoal-200/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                      Key Capabilities
                    </span>
                    {item.keyFeatures.map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-charcoal-200 text-xs font-medium text-charcoal-900 bg-white p-2.5 rounded-lg border border-charcoal-200 flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{item.impactMetric}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Unique Indian Engineering Challenges */}
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDIA_CHALLENGES.map((ch) => (
              <div
                key={ch.id}
                className="bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-7 shadow-2xs hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                    {getChallengeIcon(ch.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-charcoal-900">
                    {ch.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-rose-50/40 p-4 rounded-xl border border-rose-200/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block mb-1">
                      The Engineering Reality
                    </span>
                    <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                      {ch.engineeringReality}
                    </p>
                  </div>

                  <div className="bg-emerald-50/40 p-4 rounded-xl border border-emerald-200/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                      Adaptive Technological Mitigation
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      {ch.mitigationApproach}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
