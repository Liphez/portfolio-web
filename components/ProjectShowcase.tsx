import React from 'react'; 
import DeviceMockup from './DeviceMockup'; 
import { PROJECTS, SKILLS } from '../constants';

const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Novo Mockup Simplificado */}
              <DeviceMockup 
                imageSrc={project.image} 
                altText={`${project.title} preview`} 
              />
              
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {/* ... Restante do código do card (descrição, tags, link) mantém igual ... */}
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

        {/* Skills Section (Mantém igual) */}
        {/* ... */}
      </div>
    </section>
  );
};

export default ProjectShowcase;