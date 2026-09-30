import React from 'react';

export const TrafficLegend: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-charcoal-200 p-4 shadow-sm text-xs sm:text-sm">
      <div className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-2.5">
        Traffic Flow Legend (Relative Speed Ratio)
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 border border-emerald-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-charcoal-900">Normal Flow</div>
            <div className="text-charcoal-500 text-xs">&lt; 20% delay (free flow)</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-amber-500 border border-amber-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-charcoal-900">Moderate</div>
            <div className="text-charcoal-500 text-xs">20% – 49% delay</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-rose-500 border border-rose-600 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-charcoal-900">Heavy</div>
            <div className="text-charcoal-500 text-xs">&ge; 50% delay (choke point)</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-charcoal-800 border border-charcoal-900 flex-shrink-0"></span>
          <div>
            <div className="font-semibold text-charcoal-900">Road Closed</div>
            <div className="text-charcoal-500 text-xs">Blocked / Zero flow</div>
          </div>
        </div>
      </div>
    </div>
  );
};
