'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Waves } from 'lucide-react'

export function CTASection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 border border-white/20">
            <Waves className="h-8 w-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit für Ihre digitale Welle?
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Online-Präsenz auf das nächste Level bringen. 
            Unverbindliches Erstgespräch – wir freuen uns auf Sie!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-lg"
              onClick={() => scrollToSection('#pakete')}
            >
              Pakete ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <a
                href="https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20habe%20Interesse%20an%20einer%20Zusammenarbeit."
                target="_blank"
                rel="noopener noreferrer"
              >
                Jetzt chatten
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
