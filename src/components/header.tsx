'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Start', href: '#start' },
  { name: 'Leistungen', href: '#leistungen' },
  { name: 'Pakete', href: '#pakete' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Über uns', href: '#ueber-uns' },
  { name: 'Kontakt', href: '#kontakt' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="#start"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#start')
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors bg-card">
              <img 
                src="images/logo.png" 
                alt="Wildwave Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold">
              <span className="text-gradient">Wild</span>
              <span className="text-foreground">wave</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20habe%20Interesse%20an%20einer%20Zusammenarbeit."
                target="_blank"
                rel="noopener noreferrer"
              >
                Kontakt aufnehmen
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 bg-card">
                    <img 
                      src="images/logo.png" 
                      alt="Wildwave Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold">
                    <span className="text-gradient">Wild</span>
                    <span>wave</span>
                  </span>
                </div>

                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://wa.me/41782630406?text=Hallo%20Wildwave,%20ich%20habe%20Interesse%20an%20einer%20Zusammenarbeit."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jetzt Kontakt aufnehmen
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
