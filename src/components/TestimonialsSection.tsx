import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, ShieldCheck, Quote, CheckCircle2, TrendingDown } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#06100c] relative border-t border-[#142d21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4 border border-amber-400/20">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> Verified Collector Experiences
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-wide mb-4">
            Words from Discerning Collectors
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Our reputation is forged through transparent pricing, obsessive authentication, and personal concierge
            relationships that endure long after delivery.
          </p>

          {/* Rating Summary Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white font-mono">5.0 / 5.0</span>
            </div>
            <span className="text-neutral-600">•</span>
            <span className="text-emerald-400 font-medium">100% Verified Authenticity Record</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300">Over $2.8M in Timepieces Placed</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#091812] border border-[#173827] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-amber-400/40 transition-all duration-300"
            >
              <Quote className="w-16 h-16 text-emerald-800/20 absolute -top-2 -right-2 pointer-events-none" />

              <div>
                {/* Watch Purchased Tag & Savings */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#142e20]">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-neutral-400 block font-medium">
                      Acquired Timepiece
                    </span>
                    <span className="text-xs sm:text-sm font-serif-luxury font-bold text-amber-200">
                      {t.watchPurchased}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded border border-emerald-500/30">
                    <TrendingDown className="w-3 h-3 text-emerald-400" />
                    {t.estimatedMarketSavings}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-200 font-light leading-relaxed italic mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#142e20] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold font-serif-luxury text-white">{t.clientName}</h4>
                    <span className="inline-flex items-center text-[10px] text-emerald-400 gap-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Verified Client
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {t.title} &bull; {t.location}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-neutral-500">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
