import React from 'react';
import { Award, Clock, HeartHandshake, Sparkles } from 'lucide-react';
import { SiteContent, ColorTheme } from '../types';
import { themes } from '../utils/theme';

interface AboutSectionProps {
  content: SiteContent;
  theme: ColorTheme;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content, theme }) => {
  const currentTheme = themes[theme];

  const coreValues = [
    {
      icon: Award,
      title: 'Excellence & Finition',
      desc: 'Aucun compromis sur la qualité graphique et la fluidité technique de votre site.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparence Totale',
      desc: 'Devis clair, planning respecté et vous restez propriétaire à 100% de vos contenus et outils.',
    },
    {
      icon: Clock,
      title: 'Réactivité & Accompagnement',
      desc: 'Une écoute active et un support attentif à chaque étape de votre développement.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>À propos de nous</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.aboutTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.aboutText}
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            {content.aboutSubtext}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs hover:shadow-md transition-shadow text-center"
            >
              <div className={`text-3xl sm:text-4xl font-black mb-1 ${currentTheme.primaryText}`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 p-6 rounded-2xl shadow-xs space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${currentTheme.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
