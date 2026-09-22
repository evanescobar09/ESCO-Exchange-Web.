import React from 'react';
import { Phone, Mail, ShieldAlert, Award, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040a07] text-neutral-400 border-t border-[#12281e] relative">
      {/* MANDATORY CLASS DISCLAIMER BANNER AS SPECIFIED IN USER PROMPT */}
      <div className="bg-[#0f1f18] border-b border-amber-400/30 py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-200">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-semibold tracking-wide">
            This is not a real commercial website but a part of MIS 395 class requirements at Wichita State University.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-amber-400/40 bg-[#0c2419] flex items-center justify-center">
                <span className="font-serif-luxury text-amber-300 font-bold">E</span>
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-[0.2em] text-white">ESCO</span>
                <span className="font-serif-luxury text-xl font-light text-amber-300 ml-1">EXCHANGE</span>
              </div>
            </a>
            <p className="text-xs text-neutral-300 font-serif-luxury tracking-widest uppercase text-amber-300/80 mb-3">
              Luxury Watches. Better Prices. Personal Service.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
              ESCO Exchange is a luxury watch reselling business that helps customers buy authentic pre-owned luxury
              watches at competitive prices with transparent pricing and personal concierge advisory.
            </p>

            <div className="space-y-2 text-xs font-mono">
              <a
                href="tel:3053019339"
                className="flex items-center gap-2 text-neutral-300 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> (305) 301-9339
              </a>
              <a
                href="mailto:e553k957@wichita.edu"
                className="flex items-center gap-2 text-neutral-300 hover:text-amber-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" /> e553k957@wichita.edu
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-serif-luxury font-bold uppercase tracking-[0.2em] text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-300 transition-colors">
                  Pricing & Inventory
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-amber-300 transition-colors">
                  Watch Education
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-300 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Curated Brands */}
          <div>
            <h4 className="text-xs font-serif-luxury font-bold uppercase tracking-[0.2em] text-white mb-4">
              Curated Houses
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>Rolex Professional & Classic</li>
              <li>Audemars Piguet Royal Oak</li>
              <li>Patek Philippe Complications</li>
              <li>Omega Master Chronometer</li>
              <li>Cartier Iconic Shapes</li>
            </ul>
          </div>

          {/* Collector Assurance */}
          <div>
            <h4 className="text-xs font-serif-luxury font-bold uppercase tracking-[0.2em] text-white mb-4">
              Collector Assurance
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5 text-emerald-300">
                <Award className="w-3.5 h-3.5" /> 100% Certified Authentic
              </li>
              <li className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 40-Point Diagnostic
              </li>
              <li>Armored Overnight Logistics</li>
              <li>Transparent Pricing Guarantee</li>
              <li>Lifetime Trade-in Equity</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Trademark Notice */}
        <div className="pt-8 border-t border-white/5 text-[11px] text-neutral-500 leading-relaxed space-y-3">
          <p>
            ESCO Exchange is an independent pre-owned watch reselling entity and is not affiliated with, authorized, or
            endorsed by Rolex S.A., Montres Tudor SA, Patek Philippe SA, Audemars Piguet Holding SA, The Swatch Group,
            or Cartier International AG. All registered brand names and model trademarks are the property of their
            respective owners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-neutral-400">
            <p>&copy; {new Date().getFullYear()} ESCO Exchange. All rights reserved.</p>
            <p className="text-amber-300/80 font-medium">
              MIS 395 Academic Project &bull; Wichita State University
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
