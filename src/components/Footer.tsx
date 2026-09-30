import React from 'react';
import { ArrowUp, Activity, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-charcoal-300 py-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-charcoal-800">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-base mb-1">
              <div className="w-7 h-7 rounded-md bg-brand-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span>Smart Urban Traffic Management Strategies</span>
            </div>
            <div className="text-xs text-charcoal-400">
              CHE 110 Continuous Assessment Academic Project &bull; Made By Ishant Singh & Team
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start md:self-center inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-200 border border-charcoal-700 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-500">
          <div>
            Designed for educational demonstration & academic research defense.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Base Maps: OpenStreetMap &amp; CARTO</span>
            <span>&bull;</span>
            <span>Traffic Stream: TomTom API v4</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
