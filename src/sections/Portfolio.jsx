import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-brandBlue">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Explore our showcase of successful software implementations and enterprise solutions.
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex justify-center items-center space-x-3 mb-12 flex-wrap gap-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brandBlue text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-brandNavy border border-slate-800 rounded-2xl overflow-hidden hover:border-brandBlue/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 hover:text-brandBlue cursor-pointer" />
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800 text-brandBlue text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;