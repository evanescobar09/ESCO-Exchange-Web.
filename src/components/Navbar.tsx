import React, { useState, useEffect } from 'react';
import { Phone, Mail, ShieldCheck, Menu, X, Clock, Search } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onInquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick, onInquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Education', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Ticker / Contact Strip */}
      <div className="bg-[#05110c] border-b border-[#1b3427] text-xs text-neutral-300 px-4 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-200/90 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              100% Certified Authentic Pre-Owned
            </span>
            <span className="text-neutral-400 hidden lg:inline">|</span>
            <span className="text-neutral-300 hidden lg:inline flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-400" /> Insured Overnight FedEx Delivery
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:3053019339"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="tracking-widest font-mono">(305) 301-9339</span>
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href="mailto:e553k957@wichita.edu"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-emerald-400" />
              <span className="font-mono">e553k957@wichita.edu</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06120e]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#1b3427]'
            : 'bg-gradient-to-b from-[#05120d]/95 via-[#05120d]/80 to-transparent py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Crest */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-gradient-to-br from-[#0c2419] to-[#040e0a] flex items-center justify-center shadow-lg group-hover:border-amber-300 transition-all">
              <span className="font-serif-luxury text-amber-300 text-lg font-bold tracking-tighter">E</span>
            </div>
            <div>
              <div className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-white flex items-center gap-2">
                <span>ESCO</span>
                <span className="text-amber-300/90 font-light">EXCHANGE</span>
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-emerald-300/80 font-medium">
                Haute Horlogerie &bull; Pre-Owned
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-neutral-300 hover:text-amber-300 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onSearchClick}
              aria-label="Search watches"
              className="p-2 text-neutral-300 hover:text-amber-300 hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-emerald-800"
              title="Search collection"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={onInquireClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-amber-200 bg-gradient-to-r from-[#0d3422] to-[#144730] hover:from-[#134930] hover:to-[#1b5c3e] border border-amber-400/40 rounded-sm shadow-md hover:shadow-amber-900/20 transition-all cursor-pointer"
            >
              Concierge Inquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onSearchClick}
              aria-label="Search watches"
              className="p-2 text-neutral-300 hover:text-amber-300"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-neutral-300 hover:text-amber-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#06120e] border-b border-[#1b3427] px-4 pt-3 pb-6 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif-luxury tracking-widest uppercase text-neutral-200 hover:text-amber-300 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:3053019339"
                className="flex items-center justify-center gap-2 py-2.5 text-sm text-amber-300 bg-[#0c2219] border border-amber-500/30 rounded"
              >
                <Phone className="w-4 h-4" /> (305) 301-9339
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onInquireClick();
                }}
                className="w-full py-3 text-xs tracking-widest uppercase font-semibold text-emerald-950 bg-gradient-to-r from-amber-300 to-amber-400 rounded"
              >
                Book Private Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
