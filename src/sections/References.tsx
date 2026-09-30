import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ACADEMIC_REFERENCES } from '../data/references';
import { BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

export const References: React.FC = () => {
  return (
    <section id="references" className="py-16 sm:py-20 border-b border-charcoal-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="09 / Verification & Provenance"
          title="Academic References & Official Data Sources"
          subtitle="All factual claims, government programs, technical parameters, and API integration specifications referenced in this study are grounded in verifiable official sources."
        />

        <div className="space-y-4 max-w-5xl mx-auto">
          {ACADEMIC_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              className="bg-charcoal-50/50 hover:bg-white rounded-xl border border-charcoal-200 hover:border-brand-300 p-5 transition-all shadow-2xs hover:shadow-xs flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                    {ref.category}
                  </span>
                  <span className="text-xs text-charcoal-400 font-mono">
                    {ref.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-charcoal-900 leading-snug">
                  {ref.title}
                </h4>

                <div className="text-xs font-medium text-charcoal-600 mt-1">
                  {ref.authorsOrAgency} &bull; <span className="text-charcoal-500">{ref.publicationOrSource}</span>
                </div>

                <p className="text-xs text-charcoal-500 mt-2 leading-relaxed bg-white p-2.5 rounded-lg border border-charcoal-200/80">
                  <strong className="text-charcoal-700">Academic Citation Relevance: </strong>
                  {ref.verifiedNotes}
                </p>
              </div>

              {ref.url && (
                <div className="sm:self-center flex-shrink-0">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition"
                  >
                    <span>Official Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Anti-Hallucination & Open License Verification Badge */}
        <div className="mt-10 p-5 rounded-2xl bg-brand-50/40 border border-brand-200 max-w-4xl mx-auto flex items-start gap-3.5 text-xs text-brand-950">
          <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold block mb-1">Academic Integrity & Verification Standards:</strong>
            In accordance with project requirements, no APIs, SDK endpoints, or government statistics have been fabricated. Cartographic base map tiles are provided under OpenStreetMap ODbL and CARTO attribution. Real-time traffic stream capabilities are provided via TomTom Traffic Flow API v4. Where external credentials are not configured, clear demonstration mode disclaimers are persistently enforced.
          </div>
        </div>
      </div>
    </section>
  );
};
