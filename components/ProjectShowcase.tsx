
import React from 'react';
import { PROJECTS, SKILLS } from '../constants';
import DeviceMockup from './DeviceMockup';

const ProjectShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="flex justify-center mb-16">
          <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest text-xs shadow-sm active:scale-95">
            Download Resume
          </button>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-4 tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-slate-500 text-center text-lg max-w-2xl mx-auto">
            Uma seleção de aplicações web e mobile focadas em resolver problemas reais com tecnologias de ponta.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Individual Mockup Inside Card */}
              <DeviceMockup 
                desktopImage={project.imageUrl} 
                mobileImage={project.mobileImageUrl} 
              />
              
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-2.5 py-1 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-blue-600 font-bold text-sm hover:gap-2 transition-all group/link"
                  >
                    View Project 
                    <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="pt-24 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 uppercase tracking-widest">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all font-semibold text-slate-600 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
