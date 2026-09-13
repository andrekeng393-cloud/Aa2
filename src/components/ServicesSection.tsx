import React from 'react';
import {
  Layout,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Code,
  UtensilsCrossed,
  Coffee,
  Check,
  ArrowRight,
} from 'lucide-react';
import { SiteContent, ColorTheme, ServiceItem } from '../types';
import { themes } from '../utils/theme';

interface ServicesSectionProps {
  content: SiteContent;
  theme: ColorTheme;
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  content,
  theme,
  onSelectService,
}) => {
  const currentTheme = themes[theme];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6" />;
      case 'Layout':
      default:
        return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-800 shadow-xs">
            <span>Prestations & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.servicesTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.servicesSubtitle}
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${currentTheme.iconBg}`}
                  >
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                    Formule Pro
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="pt-2 border-t border-slate-200/60 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Inclus dans l’offre :
                  </span>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60">
                <a
                  href="#contact"
                  onClick={() => onSelectService(service.title)}
                  className={`inline-flex items-center gap-2 text-xs font-bold ${currentTheme.primaryText} hover:underline cursor-pointer`}
                >
                  <span>Demander un devis pour ce service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
