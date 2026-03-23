'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Waves, Target, Heart, Zap, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Präzision',
    description: 'Schweizer Qualität in jedem Pixel. Wir liefern Ergebnisse, auf die Sie sich verlassen können.',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    description: 'Wir lieben was wir tun und das sieht man. Jedes Projekt ist eine neue Herausforderung.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Immer am Puls der Zeit. Neue Technologien und Trends fliessen in unsere Arbeit ein.',
  },
]

const team = [
  {
    name: 'Sarah Müller',
    role: 'Creative Director',
    bio: 'Mit über 8 Jahren Erfahrung in Webdesign und Branding.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Thomas Weber',
    role: 'Lead Developer',
    bio: 'Full-Stack Entwickler mit Fokus auf moderne Web-Technologien.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Lisa Schmidt',
    role: 'Marketing Strategist',
    bio: 'Expertin für digitale Marketingstrategien und SEO.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Über uns
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Schweizer Präzision trifft{' '}
              <span className="text-gradient">kreative Wildheit</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wildwave wurde mit der Mission gegründet, Unternehmen jeder Größe eine starke digitale Identität zu verleihen. 
                Mit Sitz in Zürich verbinden wir Schweizer Präzision mit kreativer Wildheit.
              </p>
              <p>
                Unser Team aus Designern, Entwicklern und Marketing-Experten arbeitet Hand in Hand, 
                um Ihre Vision Wirklichkeit werden zu lassen. Wir glauben daran, dass jede Marke 
                eine Geschichte verdient, die erzählt werden will.
              </p>
              <p>
                Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie auf Ihrem gesamten 
                digitalen Weg. Mit transparenten Prozessen, fairen Preisen und Ergebnissen, die überzeugen.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20würde%20gerne%20mehr%20über%20Ihr%20Team%20erfahren."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kennenlernen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wildwave Team bei der Arbeit"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-muted/50 border-border text-center">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-4">
            Das Team hinter Wildwave
          </h3>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Ein Mix aus Kreativität, Technik und Strategie – so entstehen bei uns digitale Lösungen, die begeistern.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3">
            <span className="text-2xl">🇨🇭</span>
            <span className="text-foreground font-medium">
              Zuhause in Zürich – für die ganze Schweiz
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
