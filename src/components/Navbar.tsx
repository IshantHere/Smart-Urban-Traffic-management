import React, { useState } from 'react';
import { Menu, X, Activity, ExternalLink } from 'lucide-react';
import { isLiveConfigured } from '../services/trafficService';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const liveConfigured = isLiveConfigured();

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Smart Traffic', href: '#smart-traffic' },
    { label: 'Strategies', href: '#strategies' },
    { label: 'Live Monitor', href: '#live-traffic', highlight: true },
    { label: 'India Initiatives', href: '#india' },
    { label: 'Impact', href: '#impact' },
    { label: 'Future', href: '#future' },
    { label: 'Conclusion', href: '#conclusion' },
    { label: 'References', href: '#references' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-charcoal-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Academic Tag */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold shadow-sm group-hover:bg-brand-700 transition">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-charcoal-900 tracking-tight text-sm sm:text-base leading-tight">
                Smart Urban Traffic
              </div>
              <div className="text-[11px] font-medium text-brand-600 tracking-wide uppercase">
                
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition ${
                  link.highlight
                    ? 'bg-brand-50 text-brand-700 hover:bg-brand-100 font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Monitor Status Indicator & Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-charcoal-50 text-charcoal-700 border-charcoal-200">
              <span
                className={`w-2 h-2 rounded-full ${
                  liveConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
                }`}
              ></span>
              <span>{liveConfigured ? 'Live API Active' : 'Demonstration Mode'}</span>
            </div>
            <a
              href="#live-traffic"
              className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition shadow-sm"
            >
              Live Monitor
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-charcoal-200 px-4 pt-2 pb-5 space-y-1 sm:px-6">
          <div className="py-2 mb-2 border-b border-charcoal-100 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-charcoal-500">Navigation</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-700">
              {liveConfigured ? 'Live API Active' : 'Demo Mode'}
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                link.highlight
                  ? 'bg-brand-50 text-brand-700 font-semibold'
                  : 'text-charcoal-700 hover:bg-charcoal-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#live-traffic"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-brand-600 text-white hover:bg-brand-700 transition"
            >
              Jump to Live Traffic Monitor
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
