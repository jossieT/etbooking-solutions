'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { BookingSandboxSection } from '@/components/sections/BookingSandboxSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { CalculatorSection } from '@/components/sections/CalculatorSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { LiveChat } from '@/components/shared/LiveChat';

export default function Home() {
  const [proposalDetails, setProposalDetails] = useState<string>('');

  const handleProposalRequest = (text: string) => {
    setProposalDetails(text);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Area */}
        <HeroSection />

        {/* Standalone Interactive Booking Sandbox */}
        <BookingSandboxSection />

        {/* Industry Focus */}
        <IndustriesSection />

        {/* Feature Solutions */}
        <SolutionsSection />

        {/* Pricing Estimator */}
        <CalculatorSection onProposalRequest={handleProposalRequest} />

        {/* Capabilities Dashboard */}
        <CapabilitiesSection />

        {/* Platform Advantages */}
        <WhyChooseSection />

        {/* Development Roadmap */}
        <TimelineSection />

        {/* Portfolio & Case Studies */}
        <PortfolioSection />

        {/* Partners logostrip */}
        <TechStackSection />

        {/* Customer Testimonials */}
        <TestimonialsSection />

        {/* Accordion FAQ */}
        <FaqSection />

        {/* Focus CTA */}
        <CtaSection />

        {/* Consultation Form */}
        <ContactSection requirementsText={proposalDetails} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Help Live Chat overlay */}
      <LiveChat />
    </div>
  );
}
