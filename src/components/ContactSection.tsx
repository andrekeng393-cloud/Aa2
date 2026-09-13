import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Check,
} from 'lucide-react';
import { SiteContent, ColorTheme } from '../types';
import { themes } from '../utils/theme';

interface ContactSectionProps {
  content: SiteContent;
  theme: ColorTheme;
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  theme,
  preselectedService = '',
}) => {
  const currentTheme = themes[theme];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Demande générale',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-slate-600" />
            <span>Échangeons ensemble</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Parlez-nous de vos besoins. Nous vous répondrons avec une proposition claire et détaillée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Nos Coordonnées
              </h3>
              <p className="text-sm text-slate-600">
                Vous avez une question, une idée ou un projet urgent ? N’hésitez pas à nous contacter directement.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${currentTheme.iconBg}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-medium text-slate-500 block">Email direct</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${content.contactEmail}`}
                        className="text-sm font-semibold text-slate-900 hover:underline"
                      >
                        {content.contactEmail}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="text-slate-400 hover:text-slate-700 p-1"
                        title="Copier l'adresse"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${currentTheme.iconBg}`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">Téléphone</span>
                    <a
                      href={`tel:${content.contactPhone}`}
                      className="text-sm font-semibold text-slate-900 hover:underline mt-0.5 block"
                    >
                      {content.contactPhone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${currentTheme.iconBg}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">Localisation</span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {content.contactAddress}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${currentTheme.iconBg}`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 block">Disponibilités</span>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      {content.contactHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Merci pour votre message, {formData.name} !
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Votre demande concernant « <span className="font-semibold text-slate-800">{formData.service}</span> » a bien été reçue. Nous vous recontacterons à <span className="font-semibold text-slate-800">{formData.email}</span> dans les plus brefs délais.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Demande générale',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    Envoyez-nous un message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Votre nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Votre adresse email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: jean.dupont@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ex: 06 12 34 56 78"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Sujet / Service concerné
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 bg-white"
                      >
                        <option value="Demande générale">Demande générale / Information</option>
                        {content.services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Autre projet sur mesure">Autre projet sur mesure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Votre message ou description de votre projet *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre besoin, vos délais et vos attentes..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="submit-contact-form-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold transition ${currentTheme.primaryBtn} disabled:opacity-70 cursor-pointer`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <span>Envoyer ma demande</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <span className="block sm:inline-block sm:ml-4 text-xs text-slate-400 mt-2 sm:mt-0">
                      🔒 Vos données restent strictement confidentielles.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
