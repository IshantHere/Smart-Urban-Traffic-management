import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { TRAFFIC_PROBLEMS } from '../data/problems';
import { 
  ClockAlert, 
  TrafficCone, 
  Car, 
  CircleParking, 
  ShieldAlert, 
  Wind,
  ArrowRight
} from 'lucide-react';

export const TrafficProblem: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ClockAlert': return <ClockAlert className="w-5 h-5 text-rose-600" />;
      case 'TrafficCone': return <TrafficCone className="w-5 h-5 text-amber-600" />;
      case 'Car': return <Car className="w-5 h-5 text-brand-600" />;
      case 'CircleParking': return <CircleParking className="w-5 h-5 text-purple-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 'Wind': return <Wind className="w-5 h-5 text-teal-600" />;
      default: return <ClockAlert className="w-5 h-5 text-charcoal-600" />;
    }
  };

  return (
    <section id="problem" className="py-16 sm:py-20 border-b border-charcoal-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="01 / The Urban Challenge"
          title="The Crisis of Urban Traffic Congestion"
          subtitle="Modern cities face mounting transportation frictions caused by geometric constraints, outdated static infrastructure, and explosive vehicle growth. Each structural challenge generates cascading systemic delays."
        />

        {/* Problem -> Effect Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAFFIC_PROBLEMS.map((item) => (
            <div
              key={item.id}
              className="bg-charcoal-50/50 hover:bg-white rounded-xl border border-charcoal-200 hover:border-brand-300 p-6 transition-all duration-200 shadow-2xs hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-white border border-charcoal-200 shadow-2xs">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-charcoal-900 leading-tight">
                    {item.problem}
                  </h3>
                </div>

                {/* Problem -> Effect Chain */}
                <div className="space-y-3 mb-4">
                  <div className="bg-white p-3 rounded-lg border border-charcoal-200/80">
                    <span className="text-[10px] font-bold tracking-wider text-charcoal-400 uppercase block mb-1">
                      Direct Causes
                    </span>
                    <ul className="text-xs text-charcoal-700 space-y-1">
                      {item.causes.map((c, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-charcoal-400 mt-0.5">&bull;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center text-charcoal-400 py-0.5">
                    <ArrowRight className="w-4 h-4 rotate-90" />
                  </div>

                  <div className="bg-rose-50/50 p-3 rounded-lg border border-rose-200/80">
                    <span className="text-[10px] font-bold tracking-wider text-rose-700 uppercase block mb-1">
                      Systemic Effects
                    </span>
                    <ul className="text-xs text-rose-900 space-y-1">
                      {item.effects.map((e, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold mt-0.5">&rarr;</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Academic Context */}
                <p className="text-xs text-charcoal-500 leading-relaxed italic border-l-2 border-charcoal-300 pl-2.5 my-3">
                  {item.academicContext}
                </p>
              </div>

              {/* Verified Metric Pill */}
              {item.metric && (
                <div className="mt-4 pt-3 border-t border-charcoal-200/80 text-[11px] font-medium text-brand-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0"></span>
                  <span>{item.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
