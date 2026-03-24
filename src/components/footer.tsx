'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react'
import { AGBDialog } from '@/components/legal/agb-dialog'
import { ImpressumDialog } from '@/components/legal/impressum-dialog'
import { DatenschutzDialog } from '@/components/legal/datenschutz-dialog'

const footerLinks = {
  navigation: [
    { name: 'Start', href: '#start' },
    { name: 'Leistungen', href: '#leistungen' },
    { name: 'Pakete', href: '#pakete' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Über uns', href: '#ueber-uns' },
    { name: 'Kontakt', href: '#kontakt' },
  ],
  leistungen: [
    { name: 'Webdesign', href: '#leistungen' },
    { name: 'Webentwicklung', href: '#leistungen' },
    { name: 'SEO-Optimierung', href: '#leistungen' },
    { name: 'Social Media Marketing', href: '#leistungen' },
    { name: 'Content Creation', href: '#leistungen' },
    { name: 'Corporate Design', href: '#leistungen' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/wildwave' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/wildwave' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/wildwave' },
]

export function Footer() {
  const [agbOpen, setAgbOpen] = useState(false)
  const [impressumOpen, setImpressumOpen] = useState(false)
  const [datenschutzOpen, setDatenschutzOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="#start" className="flex items-center gap-3 mb-4 group">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors bg-card">
                  <img 
                    src="images/logo.png" 
                    alt="Wildwave Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-gradient">Wild</span>
                  <span className="text-foreground">wave</span>
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Digitale Wellen für Ihre Marke. Wir gestalten Ihre Online-Präsenz – kreativ, strategisch, erfolgreich.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>Im Isengrind 35<br />8046 Zürich, Schweiz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:+41782630406" className="hover:text-primary transition-colors">
                    +41 78 630 40 06
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@wildwave.ch" className="hover:text-primary transition-colors">
                    info@wildwave.ch
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leistungen */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Leistungen</h3>
              <ul className="space-y-2">
                {footerLinks.leistungen.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechtliches & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Rechtliches</h3>
              <ul className="space-y-2 mb-6">
                <li>
                  <button
                    onClick={() => setImpressumOpen(true)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setDatenschutzOpen(true)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setAgbOpen(true)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    AGB
                  </button>
                </li>
              </ul>

              <h3 className="font-semibold text-foreground mb-4">Folgen Sie uns</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Wildwave. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Mit 🌊 aus Zürich entwickelt
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Dialogs */}
      <AGBDialog open={agbOpen} onOpenChange={setAgbOpen} />
      <ImpressumDialog open={impressumOpen} onOpenChange={setImpressumOpen} />
      <DatenschutzDialog open={datenschutzOpen} onOpenChange={setDatenschutzOpen} />
    </>
  )
}
