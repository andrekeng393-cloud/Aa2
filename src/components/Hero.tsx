import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Star } from 'lucide-react';
import { SiteContent, ColorTheme } from '../types';
import { themes } from '../utils/theme';

interface HeroProps {
  content: SiteContent;
  theme: ColorTheme;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({ content, theme, onOpenCustomizer }) => {
  const currentTheme = themes[theme];

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-white border-b border-slate-200">
      {/* Subtle geometric background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{content.heroBadge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              {content.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              {content.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                id="hero-primary-cta"
                href="#contact"
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold shadow-sm hover:shadow transition-all ${currentTheme.primaryBtn}`}
              >
                <span>Démarrer un projet</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                Découvrir nos services
              </a>

              <button
                id="hero-customize-btn"
                type="button"
                onClick={onOpenCustomizer}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-4 cursor-pointer ml-1"
              >
                Modifier les textes en direct ✏️
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Responsive & Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Normes SEO & Sécurité</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chargement ultra-rapide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-800">
              {/* Browser bar preview */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-4 py-0.5 rounded-md">
                  https://{content.siteName.toLowerCase().replace(/\s+/g, '')}.fr
                </div>
                <div className="w-4" />
              </div>

              {/* Card visual content */}
              <div className="p-6 bg-slate-950 rounded-b-xl text-white space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                    {content.categoryName}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>5.0 / 5.0 (Avis vérifiés)</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {content.siteName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {content.tagline}
                  </p>
                </div>

                {/* Mini Stat Preview */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                    <div className="text-2xl font-black text-white">
                      {content.stats[0]?.value || '100%'}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {content.stats[0]?.label || 'Performance'}
                    </div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                    <div className="text-2xl font-black text-emerald-400">
                      {content.stats[1]?.value || 'A+'}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {content.stats[1]?.label || 'Qualité & Finition'}
                    </div>
                  </div>
                </div>

                {/* Quick actions box */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Prêt pour votre activité</span>
                  <a
                    href="#contact"
                    className={`font-semibold px-3 py-1.5 rounded-lg ${currentTheme.primaryBtn}`}
                  >
                    Nous écrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
