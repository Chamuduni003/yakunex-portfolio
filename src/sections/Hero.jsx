import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Cpu, Code2, Globe, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#0b1329] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Dynamic Background Glowing Lights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Empower Your Business With Next-Gen IT Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                YAKUNEX TECHNOLOGIES
              </span>
              <br />
              <span className="text-slate-100 text-3xl sm:text-4xl lg:text-5xl font-bold block mt-2">
                Innovative Tech Solutions for Digital Growth
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Yakunex Technologies (Pvt) Ltd delivers cutting-edge software engineering, web & mobile applications, and cloud architecture to elevate your corporate strategy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 text-slate-200 border border-slate-800 hover:border-amber-500/50 hover:text-amber-400 font-semibold text-sm transition-all duration-300 text-center backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Custom Software Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Enterprise Grade Security</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Corporate Entity Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Floating Location Pill */}
            <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-1.5 bg-[#0b1329] border border-amber-500/40 px-3 py-1.5 rounded-full shadow-lg text-[11px] font-semibold text-amber-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Kandy, Sri Lanka</span>
            </div>

            <div className="relative w-full max-w-md bg-[#0d1730]/90 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-amber-400/60 transition-all duration-500">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-semibold tracking-widest uppercase bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  OFFICIAL ENTITY
                </span>
              </div>

              {/* Polished Logo Container */}
              <div className="flex flex-col items-center text-center py-2 space-y-4">
                <div className="relative flex items-center justify-center p-3 rounded-2xl bg-slate-950/60 border border-amber-500/20 shadow-inner group">
                  <div className="absolute inset-0 bg-amber-500/15 rounded-2xl blur-xl group-hover:bg-amber-500/25 transition-all" />
                  <img
                    src="/logo.png"
                    alt="Yakunex Technologies Logo"
                    className="w-36 h-36 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Yakunex Technologies
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                    (Pvt) Ltd • Kandy, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-800/80 text-center my-3">
                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <Code2 className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[10px] text-slate-300 font-semibold">Software</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <Globe className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[10px] text-slate-300 font-semibold">Web & Cloud</span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-colors">
                  <Cpu className="w-4 h-4 text-amber-400 mb-1" />
                  <span className="text-[10px] text-slate-300 font-semibold">IoT Systems</span>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-[#080e21] border border-slate-800/90 rounded-2xl p-3 text-center">
                  <p className="text-lg font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">100%</p>
                  <p className="text-[10px] text-slate-400 font-medium">Client Satisfaction</p>
                </div>
                <div className="bg-[#080e21] border border-slate-800/90 rounded-2xl p-3 text-center">
                  <p className="text-lg font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">24/7</p>
                  <p className="text-[10px] text-slate-400 font-medium">Dedicated Support</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}