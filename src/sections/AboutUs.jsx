import React from 'react';
import { Eye, Target, Award, CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  const coreValues = [
    { title: 'Innovation', desc: 'embrace new technologies and creative ideas.' },
    { title: 'Quality', desc: 'Delivering robust, high-performance, and bug-free IT solutions.' },
    { title: 'Integrity', desc: 'Building transparent and trustworthy long-term business relations.' },
    { title: 'Client-Centricity', desc: 'Customizing engineering solutions tailored to business goals.' },
    { title: 'Collaboration', desc: 'Fostering teamwork and partnerships for shared success.' },
    { title: 'Continuous Learning', desc: 'Staying ahead with the latest technologies and best practices.' },
    { title: 'Security', desc: 'Prioritizing data protection and cybersecurity in all solutions.' },
    { title: 'Sustainability', desc: 'Promoting eco-friendly practices in technology development.' },   
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 border-t border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-brandBlue">Yakunex Technologies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            We are a premier IT solutions provider dedicated to transforming ambitious ideas into powerful digital realities.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-brandNavy border border-slate-800 p-8 rounded-2xl hover:border-brandBlue/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To become a trusted and innovative technology company recognized for delivering high-quality IT solutions that
empower businesses, connect communities, and create a smarter digital future.
            </p>
          </div>

          <div className="bg-brandNavy border border-slate-800 p-8 rounded-2xl hover:border-brandBlue/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brandBlue/10 text-brandBlue rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              To deliver reliable, secure, and innovative technology solutions tailored to client needs. The company aims to
support digital transformation through software development, web and mobile applications, cloud computing,
cybersecurity, artificial intelligence, and other IT services, while fostering creativity, continuous learning, and
professional growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-8 md:p-10">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-6 h-6 text-brandBlue" />
            <h3 className="text-2xl font-bold text-white">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-2 text-brandBlue font-semibold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-white">{value.title}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm pl-7">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;