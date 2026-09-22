import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { WatchEducationSection } from './components/WatchEducationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WatchDetailModal } from './components/WatchDetailModal';
import { Watch } from './types';

export default function App() {
  const [selectedWatchForModal, setSelectedWatchForModal] = useState<Watch | null>(null);
  const [prefilledWatchForContact, setPrefilledWatchForContact] = useState<Watch | null>(null);

  const handleInspectWatch = (watch: Watch) => {
    setSelectedWatchForModal(watch);
  };

  const handleInquireWatch = (watch: Watch) => {
    setPrefilledWatchForContact(watch);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavbarSearchClick = () => {
    const pricingElem = document.getElementById('pricing');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavbarInquireClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080d0b] text-neutral-100 flex flex-col font-sans-luxury selection:bg-amber-400 selection:text-emerald-950">
      {/* Top Navbar */}
      <Navbar onSearchClick={handleNavbarSearchClick} onInquireClick={handleNavbarInquireClick} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePricing={() => {
            const pricingElem = document.getElementById('pricing');
            if (pricingElem) pricingElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenConsultation={handleNavbarInquireClick}
        />

        {/* About Us Section */}
        <AboutSection />

        {/* Pricing & Timepieces Collection Section */}
        <PricingSection onSelectWatch={handleInspectWatch} onInquireWatch={handleInquireWatch} />

        {/* Watch Education Hub */}
        <WatchEducationSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Us Section */}
        <ContactSection
          initialWatch={prefilledWatchForContact}
          onClearInitialWatch={() => setPrefilledWatchForContact(null)}
        />
      </main>

      {/* Footer with Mandatory Class Disclaimer */}
      <Footer />

      {/* Watch Detail Modal */}
      <WatchDetailModal
        watch={selectedWatchForModal}
        onClose={() => setSelectedWatchForModal(null)}
        onInquire={(watch) => {
          setSelectedWatchForModal(null);
          handleInquireWatch(watch);
        }}
      />
    </div>
  );
}
