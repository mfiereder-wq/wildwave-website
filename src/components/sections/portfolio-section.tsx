'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, ArrowRight } from 'lucide-react'

const categories = ['Alle', 'Webdesign', 'E-Commerce']

const projects = [
  {
    id: 1,
    title: 'Jeshua Coiffeur',
    category: 'Webdesign',
    description: 'Moderne Website für einen traditionellen Coiffeur-Salon in Zürich mit Online-Terminbuchung',
    image: 'https://images.pexels.com/photos/3993416/pexels-photo-3993416.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+200% Online-Buchungen',
    tags: ['Webdesign', 'Booking', 'SEO'],
    url: 'https://jeshua-coiffeur.ch',
  },
  {
    id: 2,
    title: 'SinoQi',
    category: 'E-Commerce',
    description: 'Vollständiger Online-Shop für Premium-Qi Produkte mit Payment-Integration und automatischer Bestellabwicklung',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    results: '+150% Umsatz',
    tags: ['Shopify', 'E-Commerce', 'Payment'],
    url: 'https://sinoqi.ch',
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filteredProjects = activeCategory === 'Alle'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ausgewählte{' '}
            <span className="text-gradient">Projekte</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein Einblick in unsere Arbeit und die Ergebnisse, die wir für unsere Kunden erzielen.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category 
                ? 'bg-primary text-primary-foreground' 
                : 'border-border text-muted-foreground hover:text-foreground'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="gap-2" asChild>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Website besuchen
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                {/* Results Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {project.results}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category */}
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20würde%20gerne%20mehr%20über%20Ihre%20Projekte%20erfahren."
              target="_blank"
              rel="noopener noreferrer"
            >
              Ihr Projekt besprechen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
