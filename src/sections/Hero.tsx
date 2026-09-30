import React from 'react';
import { ArrowRight, Activity, Cpu, Database, TrendingUp, ShieldCheck, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-charcoal-200 bg-gradient-to-b from-white to-charcoal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Academic Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            <span>CHE 110 Continuous Assessment Project</span>
            <span className="text-brand-300"></span>
            <span className="text-charcoal-500 font-normal"></span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 tracking-tight leading-[1.1] mb-6">
            Smart Urban Traffic <br className="hidden sm:inline" />
            <span className="text-brand-600">Management Strategies</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-charcoal-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Harnessing real-time sensor telemetry, adaptive traffic signals, computer vision, and computational modeling to alleviate urban congestion, enhance intersection safety, and optimize mobility in high-density Indian cities.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
            <a
              href="#strategies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-600 hover:bg-brand-700 transition shadow-sm hover:shadow"
            >
              <span>Explore Strategies</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#live-traffic"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-charcoal-700 bg-white hover:bg-charcoal-50 border border-charcoal-200 transition shadow-xs"
            >
              <Activity className="w-4 h-4 text-brand-600" />
              <span>View Live Traffic Monitor</span>
            </a>
          </div>

          {/* Clean Visual Concept: Traffic -> Data -> Intelligence -> Better Mobility */}
          <div className="max-w-4xl mx-auto pt-8 border-t border-charcoal-200">
            <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-6">
             Moving from fixing traffic problems after they happen to preventing them before they even start.
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white p-4 rounded-xl border border-charcoal-200 shadow-2xs text-left">
                <div className="w-8 h-8 rounded-lg bg-charcoal-100 flex items-center justify-center text-charcoal-700 mb-2.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-charcoal-900">01. Urban Traffic</div>
                <div className="text-[11px] text-charcoal-500 mt-1">Multi-modal flow on physical city road networks</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-charcoal-200 shadow-2xs text-left">
                <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-2.5">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-charcoal-900">02. Sensor Data</div>
                <div className="text-[11px] text-charcoal-500 mt-1">Loops, ANPR cameras, radar, and GPS probes</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-charcoal-200 shadow-2xs text-left">
                <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-2.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-charcoal-900">03. Intelligence</div>
                <div className="text-[11px] text-charcoal-500 mt-1">Adaptive algorithms & predictive control logic</div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-emerald-200 bg-emerald-50/20 shadow-2xs text-left">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-2.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-charcoal-900">04. Better Mobility</div>
                <div className="text-[11px] text-charcoal-500 mt-1">Reduced delay, fuel efficiency & enhanced safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
