import React from 'react';
import { ShieldCheck, Scale, Users, BookOpen, Clock, Award, CheckCircle2, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      title: 'Transparent Pricing',
      subtitle: 'Zero Hidden Markups',
      description:
        'Traditional grey market dealers carry exorbitant retail rent on prime avenues and mark up inventory by 25–40%. ESCO Exchange operates with lean, direct-to-collector margins—passing genuine market savings directly to our buyers.',
    },
    {
      icon: Users,
      title: 'Personal Customer Service',
      subtitle: 'Direct 1-on-1 Concierge',
      description:
        'You are never handed off to an automated bot or impersonal call center. Every client works directly with an experienced watch advisor available via phone, email, or video call to discuss timegrapher readings, bracelet sizing, and provenance.',
    },
    {
      icon: BookOpen,
      title: 'Watch Education',
      subtitle: 'Empowering the Collector',
      description:
        'We believe the best purchase is an informed purchase. We walk our clients through reference histories, dial variants, box & papers significance, caliber mechanics, and market liquidity so you invest with complete confidence.',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Relationships',
      subtitle: 'Beyond the Transaction',
      description:
        'Our goal is not a single sale, but building your horological journey over decades. We offer guaranteed trade-in equity, custom sourcing for rare grails, and continuous advisory for multi-watch collections.',
    },
  ];

  const inspectionSteps = [
    { title: 'Optical Serial Verification', desc: 'Case, rehaut, and movement serial numbers verified against manufacturer databases.' },
    { title: 'Microscopic Calibre Audit', desc: 'Full internal inspection verifying 100% factory original bridges, balance wheels, and screws.' },
    { title: 'Witschi Timing Diagnostic', desc: 'Timegrapher analysis across 5 positions measuring beat error, amplitude, and daily rate.' },
    { title: 'Pressure & Water Resistance', desc: 'Dual dry and wet vacuum testing ensuring crystal gaskets and screw-down crowns seal to spec.' },
  ];

  return (
    <section id="about" className="py-24 bg-[#06100c] relative border-t border-[#142d21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-amber-400 text-xs font-bold tracking-[0.25em] uppercase font-serif-luxury block mb-3">
            ABOUT ESCO EXCHANGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-wide mb-6">
            A Better Way to Acquire Pre-Owned Luxury
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Founded on the conviction that buying an iconic timepiece should be an intimate, trustworthy, and
            transparent experience. We combine master horological expertise with fair market pricing and bespoke
            client care.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#091712] border border-[#173225] hover:border-amber-400/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-700/40 text-amber-300 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-serif-luxury font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The 40-Point Inspection Banner */}
        <div className="bg-[#0b1c15] border border-[#1b4331] rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4 border border-amber-400/20">
                <Award className="w-4 h-4" /> 100% Certified Authenticity
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-4 leading-tight">
                The ESCO 40-Point Diagnostic Protocol
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-light">
                Counterfeits and aftermarket franken-watches have become increasingly sophisticated. Every timepiece
                offered by ESCO Exchange undergoes complete disassembly and physical certification by our master
                horologist before it ever reaches our gallery.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Lifetime Authenticity Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Registered Serial Archives
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inspectionSteps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#06130e] border border-white/5">
                  <div className="text-amber-400 font-mono text-xs font-bold mb-1">STAGE 0{idx + 1}</div>
                  <h4 className="text-sm font-serif-luxury font-bold text-white mb-1.5">{step.title}</h4>
                  <p className="text-xs text-neutral-400 leading-snug">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
