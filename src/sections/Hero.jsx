import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-brandNavy via-slate-900 to-brandNavy relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brandBlue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center space-x-2 bg-brandBlue/10 border border-brandBlue/30 text-brandBlue px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Empower Your Business With Next-Gen IT Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Innovative Tech Solutions for <span className="text-brandBlue">Digital Growth</span>
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            Yakunex Technologies (Pvt) Ltd delivers cutting-edge software engineering, web & mobile applications, and cloud architecture to elevate your corporate strategy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brandBlue hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 bg-slate-900/50"
            >
              <span>Contact Us</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 text-slate-400 text-xs sm:text-sm font-medium">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brandBlue" />
              <span>Enterprise Grade Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brandBlue" />
              <span>High Scalability</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brandBlue" />
              <span>24/7 Expert Support</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;