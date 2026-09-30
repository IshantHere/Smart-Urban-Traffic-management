import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BENEFITS_DATA, CHALLENGES_DATA } from '../data/impact';
import { CheckCircle2, AlertOctagon, TrendingUp, AlertTriangle } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 sm:py-20 border-b border-charcoal-200 bg-charcoal-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="06 / Academic Evaluation"
          title="Systemic Benefits vs. Implementation Challenges"
          subtitle="A balanced engineering assessment of intelligent transportation interventions. While dynamic technologies significantly reduce delay, they also face rigorous capital, physical, and privacy constraints."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Column 1: Benefits */}
          <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-100">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-900">
                  {BENEFITS_DATA.title}
                </h3>
                <p className="text-xs text-charcoal-500 mt-0.5">
                  {BENEFITS_DATA.description}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {BENEFITS_DATA.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-100/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-charcoal-900 leading-snug">
                        {item.heading}
                      </h4>
                      <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                      {item.metric && (
                        <div className="mt-2.5 inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                          {item.metric}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Challenges */}
          <div className="bg-white rounded-2xl border border-rose-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-100">
              <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
                <AlertOctagon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal-900">
                  {CHALLENGES_DATA.title}
                </h3>
                <p className="text-xs text-charcoal-500 mt-0.5">
                  {CHALLENGES_DATA.description}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {CHALLENGES_DATA.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-rose-50/30 border border-rose-100/80">
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-charcoal-900 leading-snug">
                        {item.heading}
                      </h4>
                      <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                        {item.detail}
                      </p>
                      {item.metric && (
                        <div className="mt-2.5 inline-block text-[11px] font-semibold text-rose-800 bg-rose-100/60 px-2 py-0.5 rounded">
                          {item.metric}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Synthesis Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-charcoal-200 text-center text-xs text-charcoal-600">
          <strong className="text-charcoal-900">Academic Synthesis:</strong> Smart traffic technology is not a standalone substitute for robust physical mass transit planning, street geometry discipline, and multi-modal integration. Maximum benefit occurs when digital intelligence is paired with dedicated transit corridors and active travel infrastructure.
        </div>
      </div>
    </section>
  );
};
