import React, { useState } from 'react';
import { Menu, X, Globe, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { SiteContent, ColorTheme, SiteCategory } from '../types';
import { themes } from '../utils/theme';

interface NavbarProps {
  content: SiteContent;
  theme: ColorTheme;
  activeCategory: SiteCategory;
  onSelectCategory: (cat: SiteCategory) => void;
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  content,
  theme,
  activeCategory,
  onSelectCategory,
  onOpenCustomizer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentTheme = themes[theme];

  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#projects' },
    { label: 'Avis', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Demo & Presets Switcher Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Modèles de site prêts à l’emploi :</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {[
                { id: 'agency', label: '🏢 Entreprise / Agence' },
                { id: 'freelance', label: '💻 Freelance / Portfolio' },
                { id: 'restaurant', label: '🍽️ Restaurant / Traiteur' },
                { id: 'shop', label: '🌿 Boutique / Artisan' },
              ].map((p) => (
                <button
                  key={p.id}
                  id={`preset-btn-${p.id}`}
                  onClick={() => onSelectCategory(p.id as SiteCategory)}
                  className={`px-2.5 py-1 rounded transition text-xs font-medium cursor-pointer ${
                    activeCategory === p.id
                      ? 'bg-white text-slate-900 font-semibold shadow-xs'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <button
            id="open-customizer-top-btn"
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold px-2 py-0.5 rounded border border-amber-400/40 bg-amber-500/10 hover:bg-amber-500/20 cursor-pointer ml-auto transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personnaliser ce site</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105 ${currentTheme.primaryBg}`}
            >
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                {content.siteName}
              </span>
              <span className="text-xs text-slate-500 hidden sm:block font-medium">
                {content.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${content.contactPhone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition"
              title="Nous appeler"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>{content.contactPhone}</span>
            </a>
            <a
              id="nav-cta-btn"
              href="#contact"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition ${currentTheme.primaryBtn}`}
            >
              <span>Me contacter</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full text-center py-3 rounded-lg text-sm font-semibold ${currentTheme.primaryBtn}`}
            >
              Prendre contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
