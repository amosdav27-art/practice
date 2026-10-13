/**
 * Lessane Installations & Repairs
 * Central Florida's trusted pool screen repair, rescreening, cage painting & pressure washing.
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { MaterialGuide } from './components/MaterialGuide';
import { ServiceAreaChecker } from './components/ServiceAreaChecker';
import { ReviewsSection } from './components/ReviewsSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/servicesData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [estimateDetails, setEstimateDetails] = useState<string | undefined>(undefined);

  const handleOpenEstimate = (serviceTitle?: string, details?: string) => {
    setSelectedService(serviceTitle);
    setEstimateDetails(details);
    setModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setModalOpen(false);
    setSelectedService(undefined);
    setEstimateDetails(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col antialiased">
      {/* Top Header */}
      <Header onOpenEstimate={handleOpenEstimate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenEstimate={handleOpenEstimate} />
        <ServicesSection onOpenEstimate={handleOpenEstimate} />
        <CostEstimator onOpenEstimate={handleOpenEstimate} />
        <BeforeAfterGallery onOpenEstimate={handleOpenEstimate} />
        <MaterialGuide onOpenEstimate={handleOpenEstimate} />
        <ServiceAreaChecker onOpenEstimate={handleOpenEstimate} />
        <ReviewsSection />
        <AboutSection onOpenEstimate={handleOpenEstimate} />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Estimate / Booking Modal */}
      <EstimateModal
        isOpen={modalOpen}
        onClose={handleCloseEstimate}
        defaultService={selectedService}
        defaultDetails={estimateDetails}
      />

      {/* Floating Bottom Quick Action Bar for Mobile Viewports */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 shadow-md shadow-emerald-950 transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span>Call: (910) 261-0196</span>
        </a>
        <button
          onClick={() => handleOpenEstimate()}
          className="flex-1 py-3 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 shadow-md shadow-cyan-950 transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Estimate</span>
        </button>
      </div>
    </div>
  );
}
