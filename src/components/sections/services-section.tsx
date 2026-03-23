'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Globe, 
  Code2, 
  Search, 
  Share2, 
  PenTool, 
  Palette,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Webdesign',
    description: 'Moderne, responsive Websites die Ihre Besucher überzeugen und zu Kunden machen.',
    features: ['Responsive Design', 'UX/UI Optimierung', 'Performance'],
  },
  {
    icon: Code2,
    title: 'Webentwicklung',
    description: 'Massgeschneiderte Web-Lösungen mit modernsten Technologien und sauberem Code.',
    features: ['React & Next.js', 'E-Commerce', 'CMS Integration'],
  },
  {
    icon: Search,
    title: 'SEO-Optimierung',
    description: 'Verbessern Sie Ihr Google Ranking und ziehen Sie mehr organische Besucher an.',
    features: ['Keyword-Recherche', 'On-Page SEO', 'Analytics'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Stärken Sie Ihre Markenpräsenz auf allen relevanten Social Media Plattformen.',
    features: ['Content Strategie', 'Community Management', 'Ads Kampagnen'],
  },
  {
    icon: PenTool,
    title: 'Content Creation',
    description: 'Hochwertige Inhalte die Ihre Zielgruppe ansprechen und Engagement erzeugen.',
    features: ['Blog Artikel', 'Social Content', 'Video Production'],
  },
  {
    icon: Palette,
    title: 'Corporate Design',
    description: 'Ein einheitliches Erscheinungsbild für eine starke und wiedererkennbare Marke.',
    features: ['Logo Design', 'Brand Guidelines', 'Visuelle Identität'],
  },
]

export function ServicesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="leistungen" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Alles aus einer Hand für Ihren{' '}
            <span className="text-gradient">digitalen Erfolg</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie auf Ihrem gesamten digitalen Weg.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <img 
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Team bei der Arbeit"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button 
                  onClick={() => scrollToSection('#kontakt')}
                  className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => scrollToSection('#pakete')}
          >
            Passendes Paket finden
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
