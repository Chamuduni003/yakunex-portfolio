import React, { useState } from 'react';
import projectsData from '../data/projects.json';
import { ExternalLink, Code, X, Play, FolderCode, GraduationCap, Globe, Monitor, Cpu, Smartphone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper function to pick icon based on tag
  const getTagIcon = (tag) => {
    switch (tag) {
      case 'Academic Project':
        return <GraduationCap className="w-4 h-4 text-amber-400" />;
      case 'Web Application':
      case 'Corporate Website':
        return <Globe className="w-4 h-4 text-amber-400" />;
      case 'Desktop Application':
        return <Monitor className="w-4 h-4 text-amber-400" />;
      case 'IoT Hardware':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'Mobile App Specification':
        return <Smartphone className="w-4 h-4 text-amber-400" />;
      default:
        return <FolderCode className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50 border-t border-b border-amber-500/20 relative overflow-hidden text-white min-h-screen">
      
      {/* Subtle Background Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <img src={logo} alt="Yakunex Watermark" className="w-[600px] h-auto object-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-4 shadow-lg shadow-amber-500/10">
            <FolderCode className="w-6 h-6 text-amber-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Showcasing our latest digital solutions and high-performance applications.
          </p>
        </div>

        {/* Project Cards Grid (Exact matching Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={`project-${project.id}-${index}`}
              onClick={() => setSelectedProject(project)}
              className="bg-brandNavy border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brandNavy via-transparent to-black/40" />

                  {/* Left Icon Badge (Match image UI) */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-400/40 flex items-center justify-center shadow-md">
                    {getTagIcon(project.tag)}
                  </div>

                  {/* Right Tag Pill */}
                  <span className="absolute top-3 right-3 bg-amber-500/90 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    {project.tag || "Academic Project"}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="px-6 pb-6 pt-3 border-t border-amber-500/10 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-slate-900 text-slate-300 border border-amber-500/20 px-2.5 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* POP-UP MODAL */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-brandNavy rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative border border-amber-500/30 shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-amber-500/20 transition"
              >
                <X size={20} />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden mb-6 border border-amber-500/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  {selectedProject.tag || "Academic Project"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>

              {/* Full Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProject.fullDescription || selectedProject.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack?.map((tech, idx) => (
                    <span key={idx} className="bg-slate-900 text-xs sm:text-sm text-slate-200 border border-amber-500/20 px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-5 border-t border-amber-500/20">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition shadow-lg shadow-amber-500/20"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-amber-500/20 text-slate-200 px-4 py-2 rounded-xl font-medium text-sm transition"
                  >
                    <Code size={16} /> GitHub Repo
                  </a>
                )}

                {selectedProject.videoUrl && (
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-red-600 hover:bg-red-500 text-white transition shadow-md shadow-red-600/20"
                  >
                    <Play size={16} /> Watch Video Demo
                  </a>
                )}

                {selectedProject.pcbLink && (
  <a
    href={selectedProject.pcbLink}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-sm transition shadow-md shadow-amber-500/20"
  >
    <ExternalLink size={16} /> View PCB Layout Design
  </a>
)}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}