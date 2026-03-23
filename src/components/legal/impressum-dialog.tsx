'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ImpressumDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImpressumDialog({ open, onOpenChange }: ImpressumDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Impressum
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] px-6 pb-6">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 pt-4">
            
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Unternehmensangaben</h3>
              <p>
                <strong>Wildwave</strong><br />
                Webdesign & Marketing Agentur<br />
                <br />
                Im Isengrind 35<br />
                8046 Zürich<br />
                Schweiz
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Kontaktdaten</h3>
              <div className="space-y-2">
                <p>
                  <strong>Telefon:</strong> +41 78 630 40 06
                </p>
                <p>
                  <strong>E-Mail:</strong>{' '}
                  <a href="mailto:info@wildwave.ch" className="text-primary hover:underline">
                    info@wildwave.ch
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong>{' '}
                  <a 
                    href="https://wa.me/41782630406" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    +41 78 630 40 06
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Rechtsform & Registereintrag</h3>
              <p>
                <strong>Rechtsform:</strong> Einzelunternehmen<br />
                <br />
                Die Geschäftstätigkeit erfolgt gemäss den Bestimmungen des Schweizer 
                Obligationenrechts (OR).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Verantwortliche Person</h3>
              <p>
                <strong>Verantwortlich für den Inhalt:</strong><br />
                Wildwave<br />
                Im Isengrind 35<br />
                8046 Zürich
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Umsatzsteuer-Identifikationsnummer</h3>
              <p>
                <strong>MwSt-Nummer:</strong> CHE-XXX.XXX.XXX MWST<br />
                <br />
                Alle Preise auf dieser Website verstehen sich, sofern nicht anders angegeben, 
                in Schweizer Franken (CHF) inklusive der gesetzlichen Mehrwertsteuer (MwSt).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Berufsbezeichnung & Berufliche Regelungen</h3>
              <p>
                <strong>Berufsbezeichnung:</strong> Webdesign & Marketing Agentur<br />
                <br />
                Die Tätigkeit als Webdesign- und Marketingagentur unterliegt keinen 
                spezifischen berufsrechtlichen Regelungen in der Schweiz.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Urheberrecht</h3>
              <p>
                Die Inhalte und Werke, die auf dieser Website erstellt wurden, unterliegen 
                dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung 
                und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung von Wildwave.
              </p>
              <p className="mt-3">
                Soweit die Inhalte auf dieser Website nicht vom Betreiber erstellt wurden, 
                werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte 
                Dritter als solche gekennzeichnet.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Haftungsausschluss</h3>
              <h4 className="text-base font-medium text-foreground mt-4 mb-2">Haftung für Inhalte</h4>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die 
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch 
                keine Gewähr übernehmen.
              </p>
              <p className="mt-3">
                Als Diensteanbieter sind wir gemäss Art. 7 Abs. 1 TMG für eigene Inhalte 
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach 
                Art. 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder 
                nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              
              <h4 className="text-base font-medium text-foreground mt-4 mb-2">Haftung für Links</h4>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren 
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden 
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Streitbeilegung</h3>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung 
                (OS) bereit:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-3">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Anwendbares Recht & Gerichtsstand</h3>
              <p>
                Es gilt Schweizer Recht. Ausschliesslicher Gerichtsstand ist Zürich, Schweiz, 
                soweit gesetzlich zulässig.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Hinweis gemäss Datenschutzgesetz (DSG)</h3>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Informationen 
                zur Erhebung und Verarbeitung Ihrer Daten finden Sie in unserer 
                Datenschutzerklärung.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Stand: {new Date().toLocaleDateString('de-CH')}
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
