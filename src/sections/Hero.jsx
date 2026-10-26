import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brandNavy overflow-hidden">
      
      {/* Background Gradient Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brandBlue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <Cpu className="w-4 h-4 text-brandBlue animate-pulse" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            Empower Your Business With Next-Gen IT Solutions
          </span>
        </div>

        {/* Main Headline with Company Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto">
          <span className="text-brandBlue">Yakunex Technologies</span> <br />
          Innovative Tech Solutions for Digital Growth
        </h1>

        {/* Subtitle Description */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Yakunex Technologies (Pvt) Ltd delivers cutting-edge software engineering, web & mobile applications, and cloud architecture to elevate your corporate strategy.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#services"
            className="w-full sm:w-auto bg-brandBlue hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-center"
          >
            Contact Us
          </a>
        </div>

        {/* Value Proposition Highlights */}
        <div className="mt-16 pt-10 border-t border-slate-800/60 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-400 text-xs sm:text-sm">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-brandBlue" />
            <span>Enterprise Grade Security</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Cpu className="w-4 h-4 text-brandBlue" />
            <span>High Scalability</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock className="w-4 h-4 text-brandBlue" />
            <span>24/7 Expert Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;