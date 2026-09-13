import { useState } from 'react';
import { presets } from './data/presets';
import { SiteContent, ColorTheme, SiteCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { QuickCustomizer } from './components/QuickCustomizer';
import { Footer } from './components/Footer';
import { Sliders } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<SiteCategory>('agency');
  const [content, setContent] = useState<SiteContent>(presets.agency);
  const [theme, setTheme] = useState<ColorTheme>('indigo');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleSelectCategory = (cat: SiteCategory) => {
    setActiveCategory(cat);
    if (presets[cat]) {
      setContent(presets[cat]);
      // Set matching default color theme
      if (cat === 'freelance') setTheme('sky');
      else if (cat === 'restaurant') setTheme('amber');
      else if (cat === 'shop') setTheme('emerald');
      else setTheme('indigo');
    }
  };

  const handleUpdateContent = (updated: Partial<SiteContent>) => {
    setContent((prev) => ({ ...prev, ...updated }));
  };

  const handleResetToDefaults = () => {
    setContent(presets[activeCategory]);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar
        content={content}
        theme={theme}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          content={content}
          theme={theme}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <AboutSection content={content} theme={theme} />

        <ServicesSection
          content={content}
          theme={theme}
          onSelectService={handleSelectService}
        />

        <ProjectsSection content={content} theme={theme} />

        <TestimonialsSection content={content} theme={theme} />

        <ContactSection
          content={content}
          theme={theme}
          preselectedService={preselectedService}
        />
      </main>

      {/* Footer */}
      <Footer content={content} theme={theme} />

      {/* Floating Quick Customizer Button */}
      <button
        id="floating-customizer-btn"
        type="button"
        onClick={() => setIsCustomizerOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-slate-700 cursor-pointer"
        title="Ouvrir la boîte à outils de personnalisation"
      >
        <Sliders className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline">Personnaliser le site</span>
      </button>

      {/* Slide-over Customizer Panel */}
      <QuickCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        content={content}
        onUpdateContent={handleUpdateContent}
        theme={theme}
        onChangeTheme={setTheme}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
}

