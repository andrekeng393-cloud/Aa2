import React, { useState } from 'react';
import { X, Sparkles, Sliders, Palette, Check, RefreshCw } from 'lucide-react';
import { SiteContent, ColorTheme, SiteCategory } from '../types';
import { presets } from '../data/presets';

interface QuickCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent;
  onUpdateContent: (updated: Partial<SiteContent>) => void;
  theme: ColorTheme;
  onChangeTheme: (theme: ColorTheme) => void;
  activeCategory: SiteCategory;
  onSelectCategory: (cat: SiteCategory) => void;
  onResetToDefaults: () => void;
}

export const QuickCustomizer: React.FC<QuickCustomizerProps> = ({
  isOpen,
  onClose,
  content,
  onUpdateContent,
  theme,
  onChangeTheme,
  activeCategory,
  onSelectCategory,
  onResetToDefaults,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'preset' | 'text' | 'theme'>('preset');

  const colorThemes: { id: ColorTheme; label: string; colorClass: string }[] = [
    { id: 'indigo', label: 'Bleu Indigo', colorClass: 'bg-indigo-600' },
    { id: 'emerald', label: 'Vert Émeraude', colorClass: 'bg-emerald-600' },
    { id: 'amber', label: 'Ambre Chaud', colorClass: 'bg-amber-600' },
    { id: 'rose', label: 'Rose Framboise', colorClass: 'bg-rose-600' },
    { id: 'sky', label: 'Bleu Ciel', colorClass: 'bg-sky-600' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-slate-900/50 backdrop-blur-xs transition-opacity">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Personnalisation du site
              </h3>
              <p className="text-xs text-slate-500">
                Ajustez votre site en temps réel
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-white">
          <button
            type="button"
            onClick={() => setActiveTab('preset')}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'preset'
                ? 'border-slate-900 text-slate-900 bg-slate-50/60'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            1. Modèle d’activité
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'text'
                ? 'border-slate-900 text-slate-900 bg-slate-50/60'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            2. Textes & Infos
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('theme')}
            className={`flex-1 py-3 text-xs font-semibold border-b-2 transition ${
              activeTab === 'theme'
                ? 'border-slate-900 text-slate-900 bg-slate-50/60'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            3. Couleurs
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {activeTab === 'preset' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Choisissez un type de site prêt à l’emploi pour voir comment la structure s’adapte instantanément à votre activité :
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'agency',
                    title: '🏢 Entreprise & Agence',
                    desc: 'Idéal pour PME, cabinets, consultants et sociétés de services.',
                  },
                  {
                    id: 'freelance',
                    title: '💻 Freelance & Portfolio',
                    desc: 'Parfait pour développeurs, designers, photographes et indépendants.',
                  },
                  {
                    id: 'restaurant',
                    title: '🍽️ Restaurant & Gastronomie',
                    desc: 'Spécialement adapté pour bars, bistros, traiteurs et tables gourmandes.',
                  },
                  {
                    id: 'shop',
                    title: '🌿 Boutique & Artisanat',
                    desc: 'Conçu pour créateurs, artisans, herboristeries et commerces locaux.',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectCategory(item.id as SiteCategory)}
                    className={`w-full text-left p-4 rounded-xl border transition cursor-pointer ${
                      activeCategory === item.id
                        ? 'border-slate-900 bg-slate-50 ring-2 ring-slate-900/10'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">
                        {item.title}
                      </span>
                      {activeCategory === item.id && (
                        <Check className="w-4 h-4 text-emerald-600" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>

              {/* Chat guidance card */}
              <div className="bg-indigo-50 border border-indigo-200/80 rounded-xl p-4 text-xs text-indigo-900 space-y-2 mt-6">
                <div className="flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>Besoin d’un thème précis ?</span>
                </div>
                <p className="text-indigo-800 leading-relaxed">
                  Dites-moi simplement dans la conversation : <em>« Fais un site pour un salon de coiffure »</em> ou <em>« Crée un site pour une agence immobilière »</em>, et je l’adapterai sur mesure !
                </p>
              </div>
            </div>
          )}

          {activeTab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nom du site / Entreprise
                </label>
                <input
                  type="text"
                  value={content.siteName}
                  onChange={(e) => onUpdateContent({ siteName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Slogan court
                </label>
                <input
                  type="text"
                  value={content.tagline}
                  onChange={(e) => onUpdateContent({ tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Titre d’accroche (Hero)
                </label>
                <textarea
                  rows={2}
                  value={content.heroTitle}
                  onChange={(e) => onUpdateContent({ heroTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Sous-titre descriptif
                </label>
                <textarea
                  rows={3}
                  value={content.heroSubtitle}
                  onChange={(e) => onUpdateContent({ heroSubtitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-900 block mb-3">
                  Coordonnées directes
                </span>
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Email de contact
                    </label>
                    <input
                      type="email"
                      value={content.contactEmail}
                      onChange={(e) => onUpdateContent({ contactEmail: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      value={content.contactPhone}
                      onChange={(e) => onUpdateContent({ contactPhone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-600 mb-1">
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={content.contactAddress}
                      onChange={(e) => onUpdateContent({ contactAddress: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs text-slate-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-semibold text-slate-800">
                  Couleur d’accentuation principale :
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {colorThemes.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => onChangeTheme(c.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium cursor-pointer transition ${
                      theme === c.id
                        ? 'border-slate-900 bg-slate-50 font-bold'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full ${c.colorClass}`} />
                      <span>{c.label}</span>
                    </div>
                    {theme === c.id && <Check className="w-4 h-4 text-slate-900" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={onResetToDefaults}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-200 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Réinitialiser</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs"
          >
            Appliquer et fermer
          </button>
        </div>
      </div>
    </div>
  );
};
