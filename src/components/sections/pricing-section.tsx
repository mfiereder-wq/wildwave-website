'use client'

import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Basis-Website',
    price: '150',
    description: 'Perfekt für den professionellen Auftritt',
    features: [
      'Moderne, responsive Website',
      'Bis zu 5 Seiten',
      'Mobile optimiert',
      'Kontaktformular',
      'Hosting & Wartung inklusive',
    ],
    popular: false,
    cta: 'Jetzt buchen',
    stripeUrl: 'https://buy.stripe.com/aFa7sK1znal46Yf4zOgMw0k',
  },
  {
    name: 'Mit SEO-Optimierung',
    price: '199',
    description: 'Unser beliebtestes Paket',
    features: [
      'Alles aus Basis-Paket',
      'Vollständige SEO-Optimierung',
      'Google Ranking Boost',
      'Keyword-Recherche',
      'Monatliche Analytics-Reports',
      'Content-Optimierung',
    ],
    popular: true,
    cta: 'Jetzt buchen',
    stripeUrl: 'https://buy.stripe.com/14AeVc0vjctc1DVgiwgMw0l',
  },
  {
    name: 'Premium mit Shop',
    price: '279',
    description: 'Für maximale Online-Präsenz',
    features: [
      'Alles aus SEO-Paket',
      'Vollständiger Online-Shop',
      'Unbegrenzte Produkte',
      'Payment-Integration',
      'Erweiterte Shop-Analytics',
      'Priority Support 24/7',
    ],
    popular: false,
    cta: 'Jetzt buchen',
    stripeUrl: 'https://buy.stripe.com/3cI28qfqdbp8ciz5DSgMw0m',
  },
]

export function PricingSection() {
  return (
    <section id="pakete" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
            Transparente Preise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wählen Sie Ihr{' '}
            <span className="text-gradient">passendes Paket</span> 🌊
          </h2>
          <p className="text-lg text-muted-foreground">
            Alle Pakete sind monatlich kündbar und ohne versteckte Kosten.
            Persönliche Beratung inklusive!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative bg-card border-border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-primary shadow-lg popular-glow scale-100 lg:scale-105 z-10' 
                  : 'hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Beliebt
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              )}

              <CardHeader className={`text-center ${pkg.popular ? 'pt-14' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pkg.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-2">CHF / Monat</span>
                </div>
              </CardHeader>

              <CardContent className="px-6 lg:px-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6 lg:p-8 pt-0">
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                  size="lg"
                >
                  <a
                    href={pkg.stripeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pkg.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3">
            <Badge variant="outline" className="border-primary text-primary">
              Flexible
            </Badge>
            <span className="text-sm text-muted-foreground">
              Monatlich kündbar • Keine versteckten Kosten • Persönliche Beratung inkl.
            </span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            Paketvergleich auf einen Blick
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-medium text-muted-foreground">Leistung</th>
                  <th className="text-center py-4 px-4 font-medium text-muted-foreground">Basis</th>
                  <th className="text-center py-4 px-4 font-medium text-primary">SEO</th>
                  <th className="text-center py-4 px-4 font-medium text-muted-foreground">Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Responsive Website', basis: true, seo: true, premium: true },
                  { name: 'Seitenanzahl', basis: '5', seo: '5', premium: 'Unbegrenzt' },
                  { name: 'Hosting & Wartung', basis: true, seo: true, premium: true },
                  { name: 'SEO-Optimierung', basis: false, seo: true, premium: true },
                  { name: 'Analytics Reports', basis: false, seo: 'Monatlich', premium: 'Wöchentlich' },
                  { name: 'Online-Shop', basis: false, seo: false, premium: true },
                  { name: 'Priority Support', basis: false, seo: false, premium: '24/7' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4 text-sm text-foreground">{row.name}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.basis === 'boolean' ? (
                        row.basis ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.basis}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {typeof row.seo === 'boolean' ? (
                        row.seo ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm text-foreground font-medium">{row.seo}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )
                      ) : (
                        <span className="text-sm text-muted-foreground">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
