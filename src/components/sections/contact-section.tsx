'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Sparkles } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse',
    content: 'Im Isengrind 35, 8046 Zürich',
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: '+41 78 630 40 06',
    href: 'tel:+41782630406',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'info@wildwave.ch',
    href: 'mailto:info@wildwave.ch',
  },
  {
    icon: Clock,
    title: 'Öffnungszeiten',
    content: 'Mo-Fr: 9:00 - 18:00',
  },
]

export function ContactSection() {
  const whatsappUrl = "https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20habe%20Interesse%20an%20einer%20Zusammenarbeit."

  return (
    <section id="kontakt" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Kontakt
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lassen Sie uns{' '}
            <span className="text-gradient">sprechen</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespräch. Wir erstellen Ihnen gerne ein individuelles Angebot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <Card className="bg-card/80 backdrop-blur-sm border-border shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Decorative header */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Nachricht senden</h3>
                      <p className="text-sm text-primary-foreground/80">Wir antworten innerhalb von 24 Stunden</p>
                    </div>
                  </div>
                </div>
                
                {/* Elfsight Contact Form Widget */}
                <div className="p-6 min-h-[450px]">
                  <div 
                    className="elfsight-app-1b9ff00c-3d11-45dc-80a5-06d6a2a7c9c8" 
                    data-elfsight-app-lazy
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white border-0 shadow-xl overflow-hidden">
              <CardContent className="p-6 lg:p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Direkt per WhatsApp
                    </h3>
                    <p className="text-white/80 mb-4">
                      Der schnellste Weg zu uns – wir antworten in der Regel innerhalb von 2 Stunden!
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-white text-[#25D366] hover:bg-white/90 font-semibold"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chat starten
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/30 transition-colors group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                          {info.title}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-foreground">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="bg-card/80 backdrop-blur-sm border-border overflow-hidden">
              <div className="aspect-video relative bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.123456789!2d8.49!3d47.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI0JzAwLjAiTiA4wrAyOSczNi4wIkU!5e0!3m2!1sde!2sch!4v1234567890"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wildwave Standort"
                />
              </div>
              <CardContent className="p-4 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Im Isengrind 35, 8046 Zürich, Schweiz</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
