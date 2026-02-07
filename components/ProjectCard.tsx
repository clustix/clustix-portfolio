
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard Component
 * 
 * Displays project information with a high-contrast anime aesthetic.
 * Utilizes CSS transforms and opacity for smooth, hardware-accelerated hover effects.
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-neutral-900 border border-white/5 hover:border-red-600/50 transition-all duration-700 overflow-hidden flex flex-col shadow-xl">
      
      {/* 
        Image Container
        - Grayscale by default, color on hover.
        - Subtle zoom effect using 'scale-110' for depth.
      */}
      <div className="aspect-video overflow-hidden bg-black">
        <img 
          src={project.image} 
          alt={`${project.title} Screenshot`}
          loading="lazy"
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110 will-change-transform"
        />
        {/* Overlay for better text readability and styling */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/90 group-hover:to-red-950/20 transition-all duration-700" />
      </div>
      
      {/* 
        Content Section
      */}
      <div className="p-8 flex flex-col flex-grow relative z-10 bg-neutral-900/80 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-red-500 transition-colors duration-300 italic">
            {project.title}
          </h3>
          <div className="flex gap-4">
            <a 
              href={project.githubUrl} 
              aria-label="View Source on GitHub"
              className="text-neutral-500 hover:text-white transform hover:scale-125 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a 
              href={project.demoUrl} 
              aria-label="View Live Demo"
              className="text-neutral-500 hover:text-white transform hover:scale-125 transition-all duration-300"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-neutral-400 text-sm mb-8 font-light leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tag List - Monospace and capitalized for tactical feel */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-[9px] mono font-bold bg-white/5 text-neutral-400 px-3 py-1 uppercase border border-white/5 group-hover:border-red-600/30 group-hover:text-white transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* 
        Visual Corner Accents
        - Reveal on hover to frame the card, inspired by mecha/anime UI.
        - Use hardware-accelerated opacity.
      */}
      <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none border-t border-r border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
      <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none border-b border-l border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
      
      {/* Scanline Effect Overlay on Hover */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.02),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
    </div>
  );
};

export default ProjectCard;
