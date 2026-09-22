import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, Award, Scale, Users, ChevronDown } from 'lucide-react';
import heroWatchImg from '../assets/images/luxury_watch_hero_1790041612048.jpg';

interface HeroProps {
  onExplorePricing: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePricing, onOpenConsultation }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Graphic & Luxury Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle Luxury Timepiece Vignette */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('${heroWatchImg}')`,
          }}
        />
        {/* Rolex Deep Emerald & Obsidian Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040c08] via-[#05140e]/95 to-[#040e0a]/90" />
        <div className="absolute inset-0 bg-radial at-top-right from-emerald-600/15 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080d0b] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow / Provenance Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-400/30 bg-[#092217]/70 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-amber-200">
              ESCO EXCHANGE &bull; AUTHENTIC PRE-OWNED LUXURY
            </span>
          </div>

          {/* MAIN PROMINENT STATEMENT AS MANDATED */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08] mb-6">
            <span className="block text-neutral-100">Luxury Watches.</span>
            <span className="block bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
              Better Prices.
            </span>
            <span className="block text-emerald-300/95 font-light">Personal Service.</span>
          </h1>

          {/* Business Core Purpose Statement */}
          <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed mb-8 max-w-3xl">
            <strong className="font-semibold text-white">ESCO Exchange</strong> is a luxury watch reselling business
            that helps customers buy authentic pre-owned luxury watches at competitive prices. The business focuses on{' '}
            <span className="text-amber-200/90 font-medium underline decoration-amber-400/40 underline-offset-4">
              transparent pricing
            </span>
            ,{' '}
            <span className="text-amber-200/90 font-medium underline decoration-amber-400/40 underline-offset-4">
              personal customer service
            </span>
            ,{' '}
            <span className="text-amber-200/90 font-medium underline decoration-amber-400/40 underline-offset-4">
              watch education
            </span>
            , and building{' '}
            <span className="text-amber-200/90 font-medium underline decoration-amber-400/40 underline-offset-4">
              long-term relationships
            </span>{' '}
            with buyers.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              onClick={onExplorePricing}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 text-emerald-950 font-bold text-sm tracking-[0.16em] uppercase rounded-sm shadow-xl shadow-amber-950/20 hover:scale-[1.01] transition-all cursor-pointer"
            >
              <span>View Inventory & Pricing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0a2318]/80 hover:bg-[#0f3424] text-neutral-200 hover:text-white font-medium text-sm tracking-[0.16em] uppercase border border-[#254d39] hover:border-amber-400/50 rounded-sm transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>Book Private Consultation</span>
            </button>
          </div>
        </div>

        {/* 4 Pillars Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/10">
          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-serif-luxury">
                100% Guaranteed
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                40-point master horologist inspection & verified papers
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-serif-luxury">
                Transparent Pricing
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                Capped honest margins beating traditional grey dealers
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded bg-amber-400/10 border border-amber-400/20 text-amber-300">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-serif-luxury">
                Personal Service
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                Direct phone & video concierge. Call (305) 301-9339
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
            <div className="p-2 rounded bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-wider uppercase text-white font-serif-luxury">
                Insured Handover
              </h3>
              <p className="text-xs text-neutral-400 mt-0.5 leading-snug">
                Complimentary armored overnight courier or private handover
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-10">
        <a
          href="#pricing"
          aria-label="Scroll down to Pricing"
          className="text-neutral-500 hover:text-amber-300 transition-colors flex flex-col items-center gap-1 text-[11px] tracking-widest uppercase font-medium"
        >
          <span>Explore Inventory</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
