import React, { useState, useMemo } from 'react';
import { Watch, FilterState } from '../types';
import { WATCHES } from '../data/watches';
import {
  Search,
  Filter,
  CheckCircle2,
  TrendingDown,
  ArrowUpDown,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Tag,
  Eye,
} from 'lucide-react';

interface PricingSectionProps {
  onSelectWatch: (watch: Watch) => void;
  onInquireWatch: (watch: Watch) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectWatch, onInquireWatch }) => {
  const [filters, setFilters] = useState<FilterState>({
    brand: 'All',
    category: 'All',
    minPrice: 0,
    maxPrice: 150000,
    sortBy: 'featured',
    searchQuery: '',
    condition: 'All',
  });

  const [showMarketComparison, setShowMarketComparison] = useState(true);

  const brands = ['All', 'Rolex', 'Audemars Piguet', 'Patek Philippe', 'Omega', 'Cartier'];
  const categories = ['All', 'Professional / Sport', 'Classic / Dress', 'Chronograph'];

  const filteredWatches = useMemo(() => {
    return WATCHES.filter((watch) => {
      // Brand filter
      if (filters.brand !== 'All' && watch.brand !== filters.brand) return false;
      // Category filter
      if (filters.category !== 'All' && watch.category !== filters.category) return false;
      // Search query (name, reference, brand, dial)
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase();
        const matches =
          watch.name.toLowerCase().includes(query) ||
          watch.brand.toLowerCase().includes(query) ||
          watch.referenceNumber.toLowerCase().includes(query) ||
          watch.dialColor.toLowerCase().includes(query) ||
          watch.material.toLowerCase().includes(query);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      if (filters.sortBy === 'year-desc') return b.year - a.year;
      // featured default
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [filters]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="pricing" className="py-24 bg-[#080d0b] relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <Tag className="w-3.5 h-3.5 text-amber-300" />
            Transparent Pricing & Live Inventory
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-wide mb-4">
            The Timepiece Collection
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Every watch listed below has been verified by our master horologist, documented with high-resolution macro
            photography, and priced transparently below secondary market averages.
          </p>

          {/* Transparent Pricing Toggle */}
          <div className="mt-6 inline-flex items-center gap-3 p-1.5 rounded-full bg-[#0e1d17] border border-[#1b3b2e]">
            <button
              onClick={() => setShowMarketComparison(!showMarketComparison)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all cursor-pointer ${
                showMarketComparison
                  ? 'bg-amber-400 text-emerald-950 font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5" />
              {showMarketComparison ? 'Market Savings View: Active' : 'Enable Market Savings Comparison'}
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#0b1612] border border-[#173025] rounded-xl p-5 mb-10 shadow-2xl">
          {/* Top row: Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-5 border-b border-[#183126]">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filters.searchQuery}
                onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                placeholder="Search reference # (e.g. 116500LN), model, dial..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#07100d] border border-[#1d3d30] rounded-lg text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-all"
              />
              {filters.searchQuery && (
                <button
                  onClick={() => setFilters({ ...filters, searchQuery: '' })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort & Results Count */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <span className="text-xs text-neutral-400 tracking-wider">
                Showing <strong className="text-amber-300 font-semibold">{filteredWatches.length}</strong> authenticated timepieces
              </span>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    setFilters({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })
                  }
                  className="bg-[#07100d] border border-[#1d3d30] text-xs text-neutral-200 rounded-lg px-3 py-2 focus:outline-none focus:border-amber-400"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="year-desc">Newest Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bottom row: Brand Pills & Category Selector */}
          <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Brand Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs text-neutral-400 font-medium mr-1 hidden sm:inline">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFilters({ ...filters, brand })}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    filters.brand === brand
                      ? 'bg-amber-300 text-emerald-950 font-bold shadow'
                      : 'bg-[#06110d] text-neutral-300 border border-[#1b3528] hover:border-amber-400/40 hover:text-white'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Category Select */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400 font-medium whitespace-nowrap">Style:</span>
              <div className="flex gap-1.5 overflow-x-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilters({ ...filters, category: cat })}
                    className={`px-3 py-1 rounded text-xs transition-colors whitespace-nowrap cursor-pointer ${
                      filters.category === cat
                        ? 'bg-[#183a2b] text-amber-200 border border-amber-400/40 font-medium'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Watch Grid */}
        {filteredWatches.length === 0 ? (
          <div className="text-center py-20 bg-[#0a1510] border border-[#183126] rounded-xl px-4">
            <Filter className="w-10 h-10 text-neutral-500 mx-auto mb-3" />
            <h3 className="text-xl font-serif-luxury text-white mb-2">No Matching Timepieces Found</h3>
            <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
              We frequently source custom references directly through our international collector network. Contact our
              concierge to source this specific reference for you.
            </p>
            <button
              onClick={() =>
                setFilters({
                  brand: 'All',
                  category: 'All',
                  minPrice: 0,
                  maxPrice: 150000,
                  sortBy: 'featured',
                  searchQuery: '',
                  condition: 'All',
                })
              }
              className="px-6 py-2.5 bg-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-widest rounded cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWatches.map((watch) => {
              const savings = watch.marketAveragePrice - watch.price;
              return (
                <div
                  key={watch.id}
                  className="group bg-[#091510] border border-[#183226] hover:border-amber-400/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/40 hover:-translate-y-1"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#040907] cursor-pointer" onClick={() => onSelectWatch(watch)}>
                    <img
                      src={watch.image}
                      alt={`${watch.brand} ${watch.name} Ref. ${watch.referenceNumber}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091510] via-transparent to-black/30" />

                    {/* Status Pill */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#061910]/90 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {watch.availability}
                      </span>
                      {watch.isFeatured && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-400/40">
                          <Sparkles className="w-2.5 h-2.5" /> Featured
                        </span>
                      )}
                    </div>

                    {/* Condition Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded text-[11px] font-medium tracking-wide bg-black/70 backdrop-blur-md text-neutral-200 border border-white/10">
                        {watch.condition.split(' ')[0]}
                      </span>
                    </div>

                    {/* Quick View Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-emerald-950/90 text-amber-200 text-xs font-semibold tracking-widest uppercase border border-amber-400/40 flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5" /> Inspect Timepiece
                      </span>
                    </div>
                  </div>

                  {/* Watch Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Brand & Reference */}
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 font-serif-luxury">
                          {watch.brand}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400 tracking-wider">
                          Ref. {watch.referenceNumber}
                        </span>
                      </div>

                      {/* Model Name */}
                      <h3
                        onClick={() => onSelectWatch(watch)}
                        className="text-xl font-serif-luxury font-bold text-white hover:text-amber-200 transition-colors cursor-pointer mb-2"
                      >
                        {watch.name}
                      </h3>

                      {/* Key Attributes Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="text-[11px] text-neutral-300 bg-[#07130e] border border-[#1b3427] px-2 py-0.5 rounded">
                          {watch.caseSize}
                        </span>
                        <span className="text-[11px] text-neutral-300 bg-[#07130e] border border-[#1b3427] px-2 py-0.5 rounded">
                          {watch.dialColor}
                        </span>
                        <span className="text-[11px] text-neutral-300 bg-[#07130e] border border-[#1b3427] px-2 py-0.5 rounded">
                          {watch.year}
                        </span>
                      </div>

                      {/* Brief description snippet */}
                      <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                        {watch.description}
                      </p>
                    </div>

                    {/* PRICING BLOCK (Prominent Display & Market Comparison) */}
                    <div className="pt-4 border-t border-[#173024] mt-auto">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <span className="text-[10px] tracking-widest uppercase text-neutral-400 block font-medium">
                            ESCO Exchange Price
                          </span>
                          <span className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white tracking-tight">
                            {formatCurrency(watch.price)}
                          </span>
                        </div>

                        {showMarketComparison && savings > 0 && (
                          <div className="text-right">
                            <span className="text-[10px] text-neutral-400 block line-through">
                              Market: {formatCurrency(watch.marketAveragePrice)}
                            </span>
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                              <TrendingDown className="w-3 h-3" />
                              Save {formatCurrency(savings)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Box & Papers Pill */}
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 mb-4 bg-[#07130e] p-2 rounded border border-white/5">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{watch.boxPapers}</span>
                      </div>

                      {/* Card Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onSelectWatch(watch)}
                          className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-[#0f281e] hover:bg-[#163a2c] border border-[#254b38] rounded transition-all cursor-pointer text-center"
                        >
                          Specs & History
                        </button>
                        <button
                          onClick={() => onInquireWatch(watch)}
                          className="w-full py-2.5 text-xs font-bold tracking-wider uppercase text-emerald-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded shadow-sm hover:shadow transition-all cursor-pointer text-center"
                        >
                          Inquire / Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Sourcing Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0c2419] via-[#091b12] to-[#0c2419] border border-amber-400/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-400/10 to-transparent pointer-events-none" />
          <div className="max-w-3xl relative z-10">
            <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase font-serif-luxury block mb-2">
              BESPOKE SOURCING SERVICE
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-3">
              Seeking a Specific Reference Not Listed?
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
              Our concierge team regularly sources rare, discontinued, and highly coveted references through our
              private collector network—always adhering strictly to our transparent pricing and 40-point authenticity
              standards.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs tracking-widest uppercase rounded shadow transition-all"
              >
                Submit Sourcing Request
              </a>
              <a
                href="tel:3053019339"
                className="text-xs text-neutral-300 hover:text-amber-300 font-mono tracking-wider flex items-center gap-2"
              >
                Direct Concierge Desk: <strong className="text-white">(305) 301-9339</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
