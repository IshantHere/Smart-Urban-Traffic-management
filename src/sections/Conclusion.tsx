import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { 
  ArrowRight, 
  ArrowDown, 
  AlertTriangle, 
  Database, 
  Cpu, 
  Activity, 
  Trees 
} from 'lucide-react';

export const Conclusion: React.FC = () => {
  const synthesisStages = [
    { label: 'Traffic Problems', desc: 'Congestion, collisions & emissions', icon: <AlertTriangle className="w-5 h-5 text-rose-600" />, border: 'border-rose-200' },
    { label: 'Technology + Data', desc: 'Sensors, computer vision & GPS telemetry', icon: <Database className="w-5 h-5 text-brand-600" />, border: 'border-brand-200' },
    { label: 'Intelligent Management', desc: 'Adaptive green-splits & predictive logic', icon: <Cpu className="w-5 h-5 text-indigo-600" />, border: 'border-indigo-200' },
    { label: 'Efficient Mobility', desc: 'Reduced queue delay & smooth flow', icon: <Activity className="w-5 h-5 text-teal-600" />, border: 'border-teal-200' },
    { label: 'Safer & Sustainable Cities', desc: 'Lower emissions & resilient urban livability', icon: <Trees className="w-5 h-5 text-emerald-600" />, border: 'border-emerald-300 bg-emerald-50/40' },
  ];

  return (
    <section id="conclusion" className="py-16 sm:py-20 border-b border-charcoal-200 bg-charcoal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="08 / Academic Synthesis"
          title="Conclusion & Research Takeaways"
          subtitle="Synthesizing the core engineering principles of smart urban traffic management for the CHE 110 continuous assessment."
        />

        {/* Final Visual Progression Flowchart */}
        <div className="bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-8 shadow-sm mb-10">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-8">
            The Synthesis Continuum
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-3 relative items-stretch">
            {synthesisStages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative">
                <div className={`w-full p-5 rounded-xl border bg-white shadow-2xs flex flex-col items-center h-full ${stage.border}`}>
                  <div className="w-10 h-10 rounded-xl bg-charcoal-50 border border-charcoal-200 flex items-center justify-center mb-3">
                    {stage.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-charcoal-900 mb-1 leading-snug">
                    {stage.label}
                  </h4>
                  <p className="text-[11px] text-charcoal-500 leading-relaxed mt-auto">
                    {stage.desc}
                  </p>
                </div>

                {idx < synthesisStages.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-charcoal-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Vertical Continuum */}
          <div className="lg:hidden space-y-2">
            {synthesisStages.map((stage, idx) => (
              <React.Fragment key={idx}>
                <div className={`p-4 rounded-xl border bg-white flex items-center gap-3.5 ${stage.border}`}>
                  <div className="p-2.5 rounded-lg bg-charcoal-50 border border-charcoal-200 flex-shrink-0">
                    {stage.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-900">{stage.label}</h4>
                    <span className="text-xs text-charcoal-500">{stage.desc}</span>
                  </div>
                </div>
                {idx < synthesisStages.length - 1 && (
                  <div className="flex justify-center text-charcoal-300 py-0.5">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Academic Synthesis Essay */}
        <div className="bg-white rounded-2xl border border-charcoal-200 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto space-y-6 text-charcoal-700 text-sm sm:text-base leading-relaxed">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight">
            Academic Assessment Summary (CHE 110)
          </h3>
          <p>
            Urban traffic congestion represents a classic multi-variable optimization challenge constrained by fixed physical rights-of-way and non-linear peak-demand queuing. Conventional interventions centered strictly on expanding road asphalt exhibit diminishing returns due to induced demand.
          </p>
          <p>
            As demonstrated through the six core strategies and the live traffic telemetry monitor, 
            <strong> digital intelligence provides a high-leverage mechanism to maximize existing road capacity</strong>. Closed-loop adaptive traffic signalling, computer vision incident detection, dynamic curbside parking guidance, and priority transit green-waves transform static urban networks into self-calibrating systems capable of mitigating delay shockwaves before broad gridlock sets in.
          </p>
          <p className="border-l-4 border-brand-600 pl-4 py-1 italic bg-brand-50/40 rounded-r-lg text-charcoal-800">
            For rapidly motorizing economies like India, the optimal pathway pairs indigenous adaptive algorithms calibrated for heterogeneous, non-lane-based traffic (such as CoSiCoSt and ASTaC) with high-capacity mass transit integration and unified municipal data architectures (IUDX). Technology does not eliminate the need for sound urban spatial planning, but rather empowers transportation authorities to govern vehicular flows safely, equitably, and sustainably.
          </p>
        </div>
      </div>
    </section>
  );
};
