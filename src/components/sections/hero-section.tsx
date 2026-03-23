'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Users, Clock, Shield } from 'lucide-react'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source 
            src="https://videos.pexels.com/video-files/6558425/6558425-hd_1920x1080_30fps.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 z-10 opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            className="text-white/30 animate-wave-float"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,144C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="h-4 w-4 text-wave-gold" />
            <span className="text-sm text-white/90">Für Kleinunternehmen, Handwerker & lokale Geschäfte</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Websites & Marketing für{' '}
            <span className="relative inline-block">
              Schweizer KMU
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path
                  d="M2 10C50 2 100 2 150 6C180 8 198 6 198 6"
                  stroke="oklch(0.7 0.18 35)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-wave-float"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-6 max-w-2xl leading-relaxed">
            Sie haben kein Marketing-Team? <span className="text-white font-semibold">Wir sind Ihr digitales Team!</span>
          </p>
          <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl">
            Professionelle Websites, die Kunden bringen – ohne technisches Wissen, ohne versteckte Kosten, ohne Stress.
          </p>

          {/* Pain Points */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: <Clock className="h-4 w-4" />, text: 'Keine Zeit? Wir machen alles!' },
              { icon: <Shield className="h-4 w-4" />, text: 'Fixpreise ab 150 CHF/Monat' },
              { icon: <Users className="h-4 w-4" />, text: 'Ihr externes Marketing-Team' },
            ].map((point, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <span className="text-wave-gold">{point.icon}</span>
                <span className="text-sm text-white/90">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('#pakete')}
            >
              Pakete entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
              onClick={() => scrollToSection('#kontakt')}
            >
              Kostenlose Beratung
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            {[
              { value: '100+', label: 'KMU-Projekte' },
              { value: '50+', label: 'Zufriedene Kunden' },
              { value: '5+', label: 'Jahre Erfahrung' },
              { value: '100%', label: 'Schweiz' },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection('#leistungen')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          aria-label="Nach unten scrollen"
        >
          <span className="text-sm">Mehr erfahren</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
