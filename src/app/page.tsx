'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { CookieConsent } from '@/components/legal/cookie-consent'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { QuizSection } from '@/components/sections/quiz-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Section */}
        <ServicesSection />

        {/* Quiz Section */}
        <QuizSection />

        {/* Pricing Section */}
        <PricingSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
      
      {/* Cookie Consent Banner (Swiss DSG compliant) */}
      <CookieConsent />
    </div>
  )
}
