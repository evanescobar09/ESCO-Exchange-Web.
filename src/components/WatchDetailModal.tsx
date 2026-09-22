import React, { useState } from 'react';
import { Watch } from '../types';
import {
  X,
  ShieldCheck,
  Check,
  Clock,
  Sparkles,
  Phone,
  Mail,
  ChevronRight,
  TrendingDown,
  Layers,
  Award,
} from 'lucide-react';

interface WatchDetailModalProps {
  watch: Watch | null;
  onClose: () => void;
  onInquire: (watch: Watch) => void;
}

export const WatchDetailModal: React.FC<WatchDetailModalProps> = ({ watch, onClose, onInquire }) => {
  if (!watch) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = watch.gallery && watch.gallery.length > 0 ? watch.gallery : [watch.image];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const savings = watch.marketAveragePrice - watch.price;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#091510] border border-[#1b3b2c] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#183226] bg-[#06110d]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif-luxury font-bold tracking-[0.2em] uppercase text-amber-400">
              {watch.brand}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs font-mono text-neutral-300">Ref. {watch.referenceNumber}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Gallery */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#040806] border border-[#173024]">
                <img
                  src={images[activeImageIndex] || watch.image}
                  alt={`${watch.brand} ${watch.name} Ref. ${watch.referenceNumber}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#061910]/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase">
                  {watch.availability}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-amber-400 scale-102'
                          : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${watch.brand} ${watch.name} view ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Authenticity Guarantee Card */}
              <div className="bg-[#0c2218] border border-[#204936] rounded-xl p-4 mt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-amber-400/20 text-amber-300 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-serif-luxury uppercase tracking-wider text-white">
                      ESCO 40-Point Horologist Inspection
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                      Every internal caliber, case serial, escapement beat-rate, and water resistance seal has been
                      physically verified under magnification. Guaranteed 100% authentic with legal provenance record.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Specs & Pricing */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-2">{watch.name}</h3>

                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">{watch.description}</p>

                {/* PRICING & MARKET TRANSPARENCY CARD */}
                <div className="bg-[#05120d] border border-amber-400/30 rounded-xl p-5 mb-6 shadow-inner">
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-neutral-400 block">
                        ESCO Exchange Price
                      </span>
                      <span className="text-3xl font-bold font-serif-luxury text-amber-300">
                        {formatCurrency(watch.price)}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-neutral-400 block line-through">
                        Market Avg: {formatCurrency(watch.marketAveragePrice)}
                      </span>
                      {savings > 0 && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400">
                          <TrendingDown className="w-3.5 h-3.5" />
                          You Save {formatCurrency(savings)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-300">
                    <span>Original Manufacturer MSRP:</span>
                    <span className="font-mono text-neutral-400">{formatCurrency(watch.msrp)}</span>
                  </div>
                </div>

                {/* Technical Specifications Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury mb-3">
                    Technical Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Case Dimension</span>
                      <span className="text-white font-medium">{watch.caseSize}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Case Material</span>
                      <span className="text-white font-medium">{watch.material}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Dial</span>
                      <span className="text-white font-medium">{watch.dialColor}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Movement</span>
                      <span className="text-white font-medium">{watch.movement}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Power Reserve</span>
                      <span className="text-white font-medium">{watch.powerReserve}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Year of Manufacture</span>
                      <span className="text-white font-medium">{watch.year}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded col-span-2">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Bracelet & Clasp</span>
                      <span className="text-white font-medium">{watch.bracelet}</span>
                    </div>
                    <div className="p-2.5 bg-[#07130e] border border-white/5 rounded col-span-2">
                      <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">Box & Papers Status</span>
                      <span className="text-emerald-300 font-medium">{watch.boxPapers}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-amber-400 font-serif-luxury mb-2">
                    Collector Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {watch.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-[#173024] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onInquire(watch);
                  }}
                  className="flex-1 py-3.5 px-6 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 text-emerald-950 font-bold text-xs tracking-widest uppercase rounded shadow-lg hover:brightness-105 transition-all cursor-pointer text-center"
                >
                  Inquire / Reserve This Timepiece
                </button>
                <a
                  href="tel:3053019339"
                  className="py-3.5 px-5 bg-[#0c2419] hover:bg-[#123624] text-neutral-200 font-medium text-xs tracking-wider uppercase border border-[#224d38] rounded transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call (305) 301-9339</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
