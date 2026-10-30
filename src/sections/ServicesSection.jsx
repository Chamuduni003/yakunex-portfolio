import React, { useState } from 'react';
import servicesData from '../data/services.json';
import * as Icons from 'lucide-react';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

const DynamicIcon = ({ name, className }) => {
  const IconComponent = Icons[name] || Icons.Code2;
  return <IconComponent className={className} />;
};

const categories = [
  { id: 'all', label: 'All Services' },
  { id: 'dev', label: 'Development & Design', ids: ['01', '02', '03', '04', '10'] },
  { id: 'data', label: 'AI, Data & Cloud', ids: ['05', '06', '09', '13'] },
  { id: 'sec', label: 'Security & Infra', ids: ['07', '08', '14', '15'] },
  { id: 'consulting', label: 'Consulting & Education', ids: ['11', '12', '16'] },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesTab =
      activeTab === 'all' ||
      categories.find((c) => c.id === activeTab)?.ids.includes(service.id);

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section id="services" className="bg-[#0b1329] text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
      
      {/* Background Glowing Lights */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities At A Glance</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Premium <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">IT Services</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Empowering modern businesses with high-impact software, scalable infrastructure, and intelligent automated solutions.
          </p>
        </div>

        {/* Filter Tabs & Search Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-amber-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/60 transition-colors"
            />
          </div>

        </div>

        {/* Services Grid with Cards */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#0d162d]/90 border border-slate-800/90 hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col justify-between overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* ID & Dynamic Icon */}
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-xs font-bold text-amber-400 font-mono tracking-widest">
                      #{service.id}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <DynamicIcon name={service.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tech Badges & Direct Consultation Link */}
                <div className="space-y-4">
                  {service.techStack && service.techStack.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-amber-500/30 px-2.5 py-1 rounded-lg transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors pt-2"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500 text-sm">
            No services matched your search criteria.
          </div>
        )}

      </div>
    </section>
  );
}