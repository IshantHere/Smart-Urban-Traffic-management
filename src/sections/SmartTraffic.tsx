import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FlowDiagram } from '../components/FlowDiagram';
import { BookOpen, Cpu, ShieldCheck, Zap } from 'lucide-react';

export const SmartTraffic: React.FC = () => {
  return (
    <section id="smart-traffic" className="py-16 sm:py-20 border-b border-charcoal-200 bg-charcoal-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="02 / Conceptual Foundation"
          title="What is Smart Urban Traffic Management?"
          subtitle="A systems engineering discipline combining cyber-physical infrastructure, real-time sensing, computational modeling, and automated actuation to optimize the safety and throughput of transportation networks."
        />

        {/* Academic Definition & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          {/* Main Definition Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-charcoal-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-wider mb-3">
                <BookOpen className="w-4 h-4" />
                <span>Formal Academic Definition</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight mb-4">
                Dynamic, Data-Driven Closed-Loop Control
              </h3>
              <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-4">
                Smart Urban Traffic Management (SUTM) replaces traditional static, open-loop traffic control with an 
                <strong> automated closed-loop feedback architecture</strong>. Rather than running fixed timing plans based on periodic historical manual traffic counts, SUTM systems continuously sample vehicular presence, queue lengths, and traveling speeds across road networks.
              </p>
              <p className="text-charcoal-600 text-xs sm:text-sm leading-relaxed">
                By fusing multi-source telemetry with computational optimization algorithms, the system makes autonomous real-time adjustments to signal phase green-splits, informs travelers via roadside Variable Message Signs, and preempts signals for public transit and emergency response vehicles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal-100 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-charcoal-50 p-3 rounded-lg border border-charcoal-200">
                <div className="font-bold text-charcoal-900">Open-Loop (Traditional)</div>
                <div className="text-charcoal-500 mt-0.5">Fixed time cycles; insensitive to actual queue variations.</div>
              </div>
              <div className="bg-brand-50/50 p-3 rounded-lg border border-brand-200">
                <div className="font-bold text-brand-900">Closed-Loop (Smart)</div>
                <div className="text-brand-700 mt-0.5">Self-adjusting cycles; continuously responsive to live demand.</div>
              </div>
            </div>
          </div>

          {/* Three Foundational Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            <div className="bg-white p-5 rounded-xl border border-charcoal-200 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">1. Ubiquitous Sensing</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    Continuous monitoring of vehicle speeds, densities, and classifications using inductive loops, microwave radar, AI video cameras, and crowdsourced GPS feeds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-charcoal-200 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">2. Algorithmic Intelligence</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    Centralized and edge computational engines executing queue optimization, corridor offset synchronization, and bottleneck anticipation models.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-charcoal-200 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">3. Dynamic Actuation</h4>
                  <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                    Closed-loop physical intervention via adaptive signal controllers, automated electronic enforcement, digital VMS traveler guidance, and transit priority gates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Visual Workflow Flowchart */}
        <FlowDiagram />
      </div>
    </section>
  );
};
