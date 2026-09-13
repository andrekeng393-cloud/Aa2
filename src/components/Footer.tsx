import React, { useState } from 'react';
import { Globe, ArrowUp, Send, Check } from 'lucide-react';
import { SiteContent, ColorTheme } from '../types';
import { themes } from '../utils/theme';

interface FooterProps {
  content: SiteContent;
  theme: ColorTheme;
}

export const Footer: React.FC<FooterProps> = ({ content, theme }) => {
  const currentTheme = themes[theme];
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group inline-block">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm ${currentTheme.primaryBg}`}
              >
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {content.siteName}
              </span>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {content.tagline}. Création de sites internet élégants, performants et pensés pour valoriser votre image de marque.
            </p>

            <div className="pt-2 text-xs space-y-1 text-slate-400">
              <p>📍 {content.contactAddress}</p>
              <p>📞 {content.contactPhone}</p>
              <p>✉️ {content.contactEmail}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services & Offres
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Portfolio & Travaux
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Nos Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              {content.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Restez informé
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Recevez nos conseils web, tendances design et offres spéciales.
            </p>
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 p-2.5 rounded-lg">
                <Check className="w-4 h-4" />
                <span>Merci pour votre inscription !</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Votre email..."
                    className="w-full px-3 py-2 text-xs rounded-l-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700"
                  />
                  <button
                    type="submit"
                    className={`px-3.5 py-2 text-xs rounded-r-lg ${currentTheme.primaryBg} text-white hover:opacity-90 transition`}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 block">
                  Pas de spam. Désinscription en 1 clic.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {content.siteName}. Tous droits réservés.</p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition">
              Mentions Légales
            </a>
            <a href="#contact" className="hover:text-white transition">
              Politique de Confidentialité
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition p-1 cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
