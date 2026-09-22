import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Watch } from '../types';

interface ContactSectionProps {
  initialWatch?: Watch | null;
  onClearInitialWatch?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialWatch, onClearInitialWatch }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestType: initialWatch ? 'purchase' : 'purchase',
    selectedWatch: initialWatch ? `${initialWatch.brand} ${initialWatch.name} (Ref. ${initialWatch.referenceNumber})` : '',
    budget: '',
    message: initialWatch
      ? `Hello ESCO Concierge, I would like to inquire about reserving the ${initialWatch.brand} ${initialWatch.name} (Ref. ${initialWatch.referenceNumber}) priced at $${initialWatch.price.toLocaleString()}. Please contact me with availability and wire transfer instructions.`
      : '',
    preferredContact: 'phone',
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');

  // Update when initialWatch changes
  React.useEffect(() => {
    if (initialWatch) {
      setFormData((prev) => ({
        ...prev,
        interestType: 'purchase',
        selectedWatch: `${initialWatch.brand} ${initialWatch.name} (Ref. ${initialWatch.referenceNumber})`,
        message: `Hello ESCO Concierge, I would like to inquire about reserving the ${initialWatch.brand} ${initialWatch.name} (Ref. ${initialWatch.referenceNumber}) priced at $${initialWatch.price.toLocaleString()}. Please contact me with availability and payment options.`,
      }));
    }
  }, [initialWatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockRef = `ESCO-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryRef(mockRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    if (onClearInitialWatch) onClearInitialWatch();
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interestType: 'purchase',
      selectedWatch: '',
      budget: '',
      message: '',
      preferredContact: 'phone',
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#08130f] relative border-t border-[#163326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-4 border border-[#1b4331]">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Private Client Concierge Desk
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white tracking-wide mb-4">
            Connect With Our Horologists
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Whether inquiring about an active listing, consigning a private collection, or sourcing an elusive
            reference, our personal concierge provides prompt, confidential advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Required Contact Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#0b1c15] border border-[#1b4130] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-serif-luxury font-bold text-white mb-6">Direct Concierge Lines</h3>

              {/* Direct Phone Number Display (Mandated) */}
              <div className="mb-6 pb-6 border-b border-[#173827]">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-1">
                  Telephone & WhatsApp Concierge
                </span>
                <a
                  href="tel:3053019339"
                  className="text-2xl sm:text-3xl font-mono font-bold text-white hover:text-amber-300 transition-colors flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#133827] flex items-center justify-center text-amber-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(305) 301-9339</span>
                </a>
                <p className="text-xs text-neutral-400 mt-2">
                  Immediate specialist consultation, high-res video inspections & wire confirmation.
                </p>
              </div>

              {/* Direct Email Display (Mandated) */}
              <div className="mb-6 pb-6 border-b border-[#173827]">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-1">
                  Official Email Inquiries
                </span>
                <a
                  href="mailto:e553k957@wichita.edu"
                  className="text-lg sm:text-xl font-mono font-semibold text-white hover:text-amber-300 transition-colors flex items-center gap-3 break-all"
                >
                  <div className="w-10 h-10 rounded-full bg-[#133827] flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>e553k957@wichita.edu</span>
                </a>
                <p className="text-xs text-neutral-400 mt-2">
                  Direct inbox for purchase reservations, trade appraisals, and collector portfolio evaluations.
                </p>
              </div>

              {/* Concierge Operating Hours */}
              <div className="flex items-start gap-3 text-xs text-neutral-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Concierge Operating Hours:</strong>
                  <span>Monday – Saturday: 9:00 AM – 8:00 PM EST</span>
                  <span className="block text-neutral-400 mt-0.5">Sunday: Private Appointments by Reservation</span>
                </div>
              </div>
            </div>

            {/* Security and Handover Assurance Card */}
            <div className="bg-[#06120e] border border-white/5 rounded-2xl p-6 text-xs text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold font-serif-luxury uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Secure Transaction Protocol
              </div>
              <p className="leading-relaxed">
                All transactions are settled via verified domestic wire transfer or accredited third-party horological
                escrow. Timepieces are dispatched with full parcel insurance and adult signature required.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Concierge Form */}
          <div className="lg:col-span-7 bg-[#0b1c15] border border-[#1b4130] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-300 font-serif-luxury block mb-2">
                  INQUIRY CONFIRMED
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mb-3">
                  Thank You, {formData.fullName || 'Collector'}
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mb-4 font-light leading-relaxed">
                  Your request has been routed to our senior watch concierge. We review inquiries promptly and will
                  contact you at <strong className="text-white">{formData.phone || formData.email}</strong>.
                </p>
                <div className="inline-block p-3 rounded-lg bg-[#06120e] border border-[#1d3d2f] text-xs font-mono text-amber-300 mb-8">
                  Inquiry Reference Number: <strong>{inquiryRef}</strong>
                </div>
                <div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-amber-400 text-emerald-950 font-bold text-xs uppercase tracking-widest rounded cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#183a2a] pb-4 mb-2">
                  <h3 className="text-xl font-serif-luxury font-bold text-white">Private Client Reservation Form</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill out the details below to inquire about buying, trading, or personal sourcing.
                  </p>
                </div>

                {/* Preselected Watch Banner if applicable */}
                {formData.selectedWatch && (
                  <div className="p-3 bg-[#06140e] border border-amber-400/40 rounded-lg flex items-center justify-between text-xs text-amber-200">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Selected Timepiece</span>
                      <strong>{formData.selectedWatch}</strong>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedWatch: '' })}
                      className="text-[11px] text-neutral-400 hover:text-white underline ml-3"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Jonathan Sterling"
                      className="w-full px-4 py-2.5 bg-[#06130e] border border-[#1b3b2c] rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(305) 000-0000"
                      className="w-full px-4 py-2.5 bg-[#06130e] border border-[#1b3b2c] rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* Email & Interest Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="collector@example.com"
                      className="w-full px-4 py-2.5 bg-[#06130e] border border-[#1b3b2c] rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Nature of Inquiry
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#06130e] border border-[#1b3b2c] rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="purchase">Buy / Reserve a Timepiece</option>
                      <option value="sell">Sell Pre-Owned Watch</option>
                      <option value="trade">Trade-In Existing Watch</option>
                      <option value="source">Custom Watch Sourcing</option>
                      <option value="consultation">General Horological Advisory</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 uppercase tracking-wider">
                    Message / Specific Model Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify model preferences, reference numbers, condition expectations, or timeline..."
                    className="w-full px-4 py-2.5 bg-[#06130e] border border-[#1b3b2c] rounded-lg text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div className="flex items-center gap-6 text-xs text-neutral-300">
                  <span className="text-neutral-400">Preferred Response:</span>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={formData.preferredContact === 'phone'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                      className="text-amber-400 focus:ring-0"
                    />
                    <span>Phone Call / Text</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      checked={formData.preferredContact === 'email'}
                      onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                      className="text-amber-400 focus:ring-0"
                    />
                    <span>Email Advisory</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 text-emerald-950 font-bold text-xs tracking-[0.2em] uppercase rounded shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Private Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
