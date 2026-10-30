import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Clock, Sparkles } from 'lucide-react';
import TechBackground from '../components/TechBackground';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0F17] overflow-hidden">
      
      {/* Background Glowing Ambient Orbs (Gold Theme) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-slate-900/90 border border-amber-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-lg shadow-black/20"
        >
          <Cpu className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-amber-200 font-medium">
            Empower Your Business With Next-Gen IT Solutions
          </span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-400 opacity-80" />
        </motion.div>

        {/* Main Headline with Gold Gradient Accent */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto"
        >
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            YAKUNEX TECHNOLOGIES
          </span> <br />
          Innovative Tech Solutions for Digital Growth
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          Yakunex Technologies (Pvt) Ltd delivers cutting-edge software engineering, web & mobile applications, and cloud architecture to elevate your corporate strategy.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group relative w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-amber-500/10 text-slate-300 hover:text-amber-300 border border-amber-500/30 hover:border-amber-400/80 font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-center backdrop-blur-md"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Value Proposition Highlights / Interactive Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 pt-10 border-t border-amber-500/20 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">Enterprise Grade Security</span>
          </div>

          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
            <Cpu className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">High Scalability</span>
          </div>

          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-slate-900/40 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/50 transition-colors">
            <Clock className="w-5 h-5 text-amber-400 shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium">24/7 Expert Support</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;