import React, { useState } from 'react';
import { EDUCATION_ARTICLES } from '../data/education';
import { EducationArticle } from '../types';
import { BookOpen, Clock, ChevronRight, CheckCircle2, X, Compass, HelpCircle } from 'lucide-react';

export const WatchEducationSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EducationArticle | null>(null);

  const glossaryTerms = [
    { term: 'Box & Papers', def: 'The original presentation box and warranty card/certificate linking the timepiece to its original authorized retailer.' },
    { term: 'Cerachrom', def: 'Rolex’s proprietary high-hardness ceramic used in bezels, virtually impervious to scratches and UV fading.' },
    { term: 'Superlative Chronometer', def: 'Rolex testing specification guaranteeing accuracy within -2/+2 seconds per day after casing.' },
    { term: 'Grande Tapisserie', def: 'Audemars Piguet’s distinctive square relief dial motif created using a rare 19th-century pantograph machine.' },
    { term: 'Glidelock Extension', def: 'Patented tool-less diver extension system allowing micro-adjustments in 2mm increments up to 20mm.' },
    { term: 'Timegrapher Amplitude', def: 'The rotational degree of the balance wheel oscillation; healthy amplitudes range between 270° and 315°.' },
  ];

  return (
    <section id="education" className="py-24 bg-[#08120e] relative border-t border-[#132c20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d261b] text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-4 border border-[#1b4331]">
            <Compass className="w-3.5 h-3.5 text-amber-300" /> Horological Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-wide mb-4">
            The Collector’s Education Hub
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            We believe an informed buyer is a confident collector. Explore our horologist-written guides to reference
            numbers, condition grading, market mechanics, and mechanical maintenance.
          </p>
        </div>

        {/* Featured Educational Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {EDUCATION_ARTICLES.map((article) => (
            <div
              key={article.id}
              className="bg-[#0a1813] border border-[#183628] hover:border-amber-400/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="text-amber-300 font-semibold tracking-wider uppercase text-[10px]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-serif-luxury font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-5">
                  {article.summary}
                </p>

                <div className="space-y-1.5 mb-6">
                  {article.takeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="w-full py-2.5 px-4 bg-[#06120d] hover:bg-[#0f2e21] text-amber-200 text-xs font-semibold tracking-wider uppercase border border-[#1b3e2e] rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Read Full Collector Guide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Horological Lexicon / Collector Glossary Strip */}
        <div className="bg-[#06120e] border border-[#163326] rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h4 className="text-base sm:text-lg font-serif-luxury font-bold text-white">
              Collector’s Quick Glossary: Key Terms to Know
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {glossaryTerms.map((g, i) => (
              <div key={i} className="p-3.5 bg-[#091813] border border-white/5 rounded-lg">
                <span className="text-amber-300 font-serif-luxury font-semibold text-xs block mb-1">
                  {g.term}
                </span>
                <p className="text-xs text-neutral-300 leading-snug">{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#091712] border border-[#1e4634] rounded-2xl p-6 sm:p-8 shadow-2xl my-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase block mb-1">
              {selectedArticle.category} • {selectedArticle.readTime}
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold text-white mb-4">
              {selectedArticle.title}
            </h3>

            <div className="bg-[#05100c] border border-white/10 rounded-xl p-4 mb-6">
              <h5 className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-2">Key Takeaways</h5>
              <ul className="space-y-1.5">
                {selectedArticle.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-sm text-neutral-300 leading-relaxed font-light whitespace-pre-line mb-6">
              {selectedArticle.content}
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full py-3 bg-amber-400 text-emerald-950 font-bold text-xs tracking-widest uppercase rounded cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
