import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SiteContent, ColorTheme } from '../types';

interface TestimonialsSectionProps {
  content: SiteContent;
  theme: ColorTheme;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ content }) => {
  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-800 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Témoignages & Avis vérifiés</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {content.testimonialsTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  « {testimonial.content} »
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {testimonial.role} — <span className="font-medium text-slate-700">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
