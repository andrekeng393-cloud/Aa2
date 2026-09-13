import React, { useState } from 'react';
import { ExternalLink, Sparkles, X } from 'lucide-react';
import { SiteContent, ColorTheme, ProjectItem } from '../types';
import { themes } from '../utils/theme';

interface ProjectsSectionProps {
  content: SiteContent;
  theme: ColorTheme;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ content, theme }) => {
  const currentTheme = themes[theme];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['all', ...Array.from(new Set(content.projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'all'
      ? content.projects
      : content.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Galerie & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.projectsTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.projectsSubtitle}
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 2 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                  selectedCategory === cat
                    ? `${currentTheme.primaryBg} text-white shadow-xs`
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'all' ? 'Tous les projets' : cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              <div className="relative aspect-video sm:aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`text-xs font-bold ${currentTheme.primaryText} flex items-center gap-1`}>
                    Détails
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Preview */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative aspect-video">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400">Projet vérifié</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {activeModalProject.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalProject.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {activeModalProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Fermer
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalProject(null)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg ${currentTheme.primaryBtn}`}
                >
                  Commander un projet similaire
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
