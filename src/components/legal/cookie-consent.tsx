'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Cookie, Settings } from 'lucide-react'
import { DatenschutzDialog } from './datenschutz-dialog'

const COOKIE_CONSENT_KEY = 'wildwave-cookie-consent'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: new Date().toISOString(),
}

// Helper function to get stored consent
function getStoredConsent(): { hasConsent: boolean; preferences: CookiePreferences | null } {
  if (typeof window === 'undefined') {
    return { hasConsent: false, preferences: null }
  }
  
  const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
  if (!storedConsent) {
    return { hasConsent: false, preferences: null }
  }
  
  try {
    const parsed = JSON.parse(storedConsent) as CookiePreferences
    return { hasConsent: true, preferences: parsed }
  } catch {
    return { hasConsent: false, preferences: null }
  }
}

export function CookieConsent() {
  // Initialize state based on stored consent
  const [showBanner, setShowBanner] = useState(() => {
    const { hasConsent } = getStoredConsent()
    return !hasConsent
  })
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const { preferences: stored } = getStoredConsent()
    return stored || defaultPreferences
  })
  const [datenschutzOpen, setDatenschutzOpen] = useState(false)

  const applyPreferences = useCallback((prefs: CookiePreferences) => {
    // Here you would integrate with your analytics/marketing tools
    // For example:
    // if (prefs.analytics) {
    //   window.gtag('consent', 'update', { analytics_storage: 'granted' })
    // }
    // if (prefs.marketing) {
    //   window.gtag('consent', 'update', { ad_storage: 'granted' })
    // }
    console.log('Cookie preferences applied:', prefs)
  }, [])

  // Apply preferences on mount if already stored
  useEffect(() => {
    const { preferences: stored } = getStoredConsent()
    if (stored) {
      applyPreferences(stored)
    }
  }, [applyPreferences])

  // Delay banner show for better UX
  useEffect(() => {
    const { hasConsent } = getStoredConsent()
    if (!hasConsent) {
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    const finalPrefs = { ...prefs, timestamp: new Date().toISOString() }
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(finalPrefs))
    setPreferences(finalPrefs)
    applyPreferences(finalPrefs)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    })
  }

  const acceptNecessary = () => {
    savePreferences(defaultPreferences)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
        <Card className="max-w-4xl mx-auto bg-card border-border shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
              {/* Icon & Text */}
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Cookie-Einstellungen 🍪
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. 
                    Einige Cookies sind technisch notwendig, während andere uns helfen, 
                    unsere Website zu analysieren und Marketingmassnahmen zu optimieren. 
                    Sie können Ihre Einstellungen jederzeit anpassen.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Weitere Informationen finden Sie in unserer{' '}
                    <button
                      onClick={() => setDatenschutzOpen(true)}
                      className="text-primary hover:underline"
                    >
                      Datenschutzerklärung
                    </button>
                    .
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 lg:flex-col xl:flex-row lg:items-end">
                <Dialog open={showSettings} onOpenChange={setShowSettings}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                      Einstellungen
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-foreground">
                        Cookie-Einstellungen
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                      {/* Necessary Cookies */}
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="necessary"
                          checked={true}
                          disabled
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="necessary" className="font-medium text-foreground">
                            Technisch notwendige Cookies
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Diese Cookies sind für den Betrieb der Website zwingend erforderlich 
                            und können nicht deaktiviert werden.
                          </p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="analytics"
                          checked={preferences.analytics}
                          onCheckedChange={(checked) => 
                            setPreferences({ ...preferences, analytics: checked as boolean })
                          }
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="analytics" className="font-medium text-foreground">
                            Analyse-Cookies
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer 
                            Website interagieren, anonymisiert.
                          </p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="marketing"
                          checked={preferences.marketing}
                          onCheckedChange={(checked) => 
                            setPreferences({ ...preferences, marketing: checked as boolean })
                          }
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="marketing" className="font-medium text-foreground">
                            Marketing-Cookies
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
                        <Button
                          onClick={handleSavePreferences}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          Auswahl speichern
                        </Button>
                        <Button
                          onClick={acceptAll}
                          variant="outline"
                          className="flex-1"
                        >
                          Alle akzeptieren
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    onClick={acceptNecessary}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Nur notwendige
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Datenschutz Dialog */}
      <DatenschutzDialog open={datenschutzOpen} onOpenChange={setDatenschutzOpen} />
    </>
  )
}
