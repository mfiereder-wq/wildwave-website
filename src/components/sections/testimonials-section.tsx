'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star, Play } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Markus Schneider',
    company: 'TechVentures AG',
    content: 'Wildwave hat unsere komplette digitale Präsenz transformiert. Die Zusammenarbeit war professionell und die Ergebnisse haben unsere Erwartungen übertroffen.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Anna Meier',
    company: 'SwissBeauty',
    content: 'Dank der SEO-Optimierung sind wir jetzt auf der ersten Google-Seite. Der Umsatz hat sich innerhalb von 6 Monaten verdoppelt!',
    rating: 5,
    image: 'https://images.pexels.com/photos/3775529/pexels-photo-3775529.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Peter Liechti',
    company: 'Liechti Bau GmbH',
    content: 'Als Handwerksbetrieb hatten wir keine Zeit für Marketing. Wildwave hat uns eine professionelle Website erstellt, die nun neue Kunden anzieht.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
]

const clientLogos = [
  'TechVentures',
  'SwissBeauty',
  'AlpineAdventures',
  'GreenTech',
  'FitnessPlus',
  'ZürichCafés',
]

export function TestimonialsSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was unsere{' '}
            <span className="text-gradient">Kunden sagen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zufriedene Kunden sind unser grösster Erfolg. Hier stimmen die Ergebnisse.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 lg:p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-wave-gold text-wave-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Experience Video */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-6">
            Kundenerfahrungen
          </h3>
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-card">
            {!isVideoPlaying ? (
              <div className="relative aspect-video cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                <img 
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=2"
                  alt="Kundenerfahrungen Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <video
                autoPlay
                controls
                className="w-full aspect-video"
                poster="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=2"
              >
                <source src="/videos/customer-experience.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            )}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-8">
            Vertrauen Sie wie diese Unternehmen auf Wildwave
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
