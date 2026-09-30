import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TrafficProblem } from './sections/TrafficProblem';
import { SmartTraffic } from './sections/SmartTraffic';
import { Strategies } from './sections/Strategies';
import { LiveTraffic } from './sections/LiveTraffic';
import { IndiaContext } from './sections/IndiaContext';
import { Impact } from './sections/Impact';
import { Future } from './sections/Future';
import { Conclusion } from './sections/Conclusion';
import { References } from './sections/References';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-50 flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrafficProblem />
        <SmartTraffic />
        <Strategies />
        <LiveTraffic />
        <IndiaContext />
        <Impact />
        <Future />
        <Conclusion />
        <References />
      </main>
      <Footer />
    </div>
  );
};

export default App;
