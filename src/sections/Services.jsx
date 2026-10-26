import React from 'react';
import servicesData from '../data/services.json';
import { Code2, Globe, Smartphone, Brain, Cloud, ShieldCheck } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Globe: Globe,
  Smartphone: Smartphone,
  Brain: Brain,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-brandNavy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Core <span className="text-brandBlue">Services</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Delivering end-to-end digital excellence across key modern technology domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl hover:border-brandBlue/60 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center mb-6 group-hover:bg-brandBlue group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;