import React from 'react';
import { 
  Car, 
  Radio, 
  Database, 
  Cpu, 
  LineChart, 
  GitMerge, 
  TrendingUp, 
  ArrowRight, 
  ArrowDown 
} from 'lucide-react';

interface FlowStep {
  step: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export const FlowDiagram: React.FC = () => {
  const steps: FlowStep[] = [
    {
      step: 1,
      title: 'Physical Traffic Flow',
      category: 'Urban Environment',
      description: 'Dynamic mix of vehicles, pedestrians, and transit on urban corridors.',
      icon: <Car className="w-5 h-5 text-brand-600" />
    },
    {
      step: 2,
      title: 'Sensors / Cameras / GPS',
      category: 'Telemetry Layer',
      description: 'Inductive loops, CCTV computer vision, radar, and crowdsourced mobile probes.',
      icon: <Radio className="w-5 h-5 text-brand-600" />
    },
    {
      step: 3,
      title: 'Data Collection & Ingestion',
      category: 'Transmission Layer',
      description: '4G/5G edge gateways & optical fiber networks streaming raw vehicular counts.',
      icon: <Database className="w-5 h-5 text-brand-600" />
    },
    {
      step: 4,
      title: 'Real-Time Data Processing',
      category: 'Compute Core',
      description: 'Map-matching, trajectory filtering, timestamp synchronization, and noise reduction.',
      icon: <Cpu className="w-5 h-5 text-brand-600" />
    },
    {
      step: 5,
      title: 'Traffic & Congestion Analysis',
      category: 'Analytics Layer',
      description: 'Queue length estimation, harmonic speed calculation, and bottleneck prediction.',
      icon: <LineChart className="w-5 h-5 text-brand-600" />
    },
    {
      step: 6,
      title: 'Intelligent Decision Engine',
      category: 'Control Logic',
      description: 'Adaptive green-splits, corridor offsets, VMS advisories, and transit prioritization.',
      icon: <GitMerge className="w-5 h-5 text-brand-600" />
    },
    {
      step: 7,
      title: 'Improved Traffic Flow',
      category: 'System Outcome',
      description: 'Reduced delay, lower fuel burn, minimized queue spillback, and enhanced safety.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="w-full bg-white border border-charcoal-200 rounded-2xl p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200">
          Core Closed-Loop Architecture
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mt-2">
          End-to-End Smart Traffic Feedback Loop
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
          How continuous physical observation transforms into automated network optimization
        </p>
      </div>

      {/* Responsive Workflow: Horizontal on large screens, vertical grid on smaller screens */}
      <div className="hidden lg:grid grid-cols-7 gap-2 relative">
        {steps.map((step, idx) => (
          <div key={step.step} className="flex flex-col items-center text-center relative group">
            {/* Card */}
            <div className={`w-full p-4 rounded-xl border transition-all duration-200 flex flex-col items-center h-full ${
              idx === steps.length - 1
                ? 'bg-emerald-50/40 border-emerald-300 ring-1 ring-emerald-200'
                : 'bg-charcoal-50/60 border-charcoal-200 hover:border-brand-300 hover:bg-white'
            }`}>
              <div className="w-8 h-8 rounded-full bg-white shadow-xs border border-charcoal-200 flex items-center justify-center font-bold text-xs text-charcoal-700 mb-2">
                0{step.step}
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-charcoal-200/80 mb-2 shadow-2xs">
                {step.icon}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal-400 mb-1">
                {step.category}
              </span>
              <h4 className="text-xs font-bold text-charcoal-900 mb-1 leading-snug">
                {step.title}
              </h4>
              <p className="text-[11px] text-charcoal-500 leading-relaxed mt-auto">
                {step.description}
              </p>
            </div>

            {/* Connecting Arrow */}
            {idx < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-charcoal-300">
                <ArrowRight className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Vertical Stack */}
      <div className="lg:hidden space-y-3">
        {steps.map((step, idx) => (
          <React.Fragment key={step.step}>
            <div className={`p-4 rounded-xl border flex items-start gap-4 ${
              idx === steps.length - 1
                ? 'bg-emerald-50/40 border-emerald-300'
                : 'bg-white border-charcoal-200'
            }`}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-charcoal-50 border border-charcoal-200 flex items-center justify-center font-bold text-xs text-brand-700">
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-bold text-brand-600 uppercase bg-brand-50 px-1.5 py-0.5 rounded">
                    Stage 0{step.step}
                  </span>
                  <span className="text-[11px] text-charcoal-400 font-medium">
                    {step.category}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-charcoal-900">
                  {step.title}
                </h4>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
            {idx < steps.length - 1 && (
              <div className="flex justify-center text-charcoal-300 py-0.5">
                <ArrowDown className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Feedback loop annotation */}
      <div className="mt-8 pt-6 border-t border-charcoal-200 text-center">
        <p className="text-xs text-charcoal-500 flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <strong className="text-charcoal-800">Closed-Loop Feedback:</strong> The improved flow is continuously monitored by Stage 2 sensors, creating an adaptive, self-tuning urban mobility system.
        </p>
      </div>
    </div>
  );
};
