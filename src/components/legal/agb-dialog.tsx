'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface AGBDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AGBDialog({ open, onOpenChange }: AGBDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Allgemeine Geschäftsbedingungen (AGB)
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] px-6 pb-6">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 pt-4">
            <p className="text-xs text-muted-foreground">
              Stand: {new Date().toLocaleDateString('de-CH')}
            </p>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 1 Geltungsbereich</h3>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen 
                zwischen Wildwave (nachfolgend &quot;Agentur&quot; genannt) und ihren Kunden 
                (nachfolgend &quot;Kunde&quot; genannt) im Zusammenhang mit der Erbringung von 
                Dienstleistungen im Bereich Webdesign, Webentwicklung, Online-Marketing und 
                verwandten Dienstleistungen.
              </p>
              <p className="mt-3">
                Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, 
                die Agentur stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 2 Vertragsschluss</h3>
              <p>
                Die Angebote der Agentur sind freibleibend und unverbindlich. Ein Vertrag 
                kommt zustande durch eine schriftliche Auftragsbestätigung der Agentur oder 
                durch tatsächlichen Leistungsbeginn.
              </p>
              <p className="mt-3">
                Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 3 Leistungen und Preise</h3>
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen 
                Auftragsbestätigung oder dem Angebot. Die Preise verstehen sich in Schweizer 
                Franken (CHF) zuzüglich der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.
              </p>
              <h4 className="text-base font-medium text-foreground mt-4 mb-2">3.1 Monatliche Pakete</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Basis-Website:</strong> 150 CHF/Monat – Responsive Website, bis zu 5 Seiten, Hosting & Wartung inklusive</li>
                <li><strong>Mit SEO-Optimierung:</strong> 199 CHF/Monat – Alle Basis-Leistungen plus SEO-Optimierung und Analytics</li>
                <li><strong>Premium mit Shop:</strong> 279 CHF/Monat – Alle SEO-Leistungen plus Online-Shop und Priority Support</li>
              </ul>
              <p className="mt-3">
                Alle Preise sind monatliche Abonnementpreise. Die Mindestvertragslaufzeit beträgt 
                3 Monate. Nach Ablauf der Mindestvertragslaufzeit ist das Abonnement monatlich 
                kündbar.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 4 Zahlungsbedingungen</h3>
              <p>
                Die Rechnungsstellung erfolgt monatlich im Voraus. Die Zahlung ist innerhalb 
                von 30 Tagen nach Rechnungsdatum ohne Abzug fällig.
              </p>
              <p className="mt-3">
                Bei Zahlungsverzug ist die Agentur berechtigt, Verzugszinsen in Höhe von 5% 
                über dem jeweiligen Basiszinssatz der Schweizerischen Nationalbank zu berechnen.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 5 Mitwirkungspflichten des Kunden</h3>
              <p>Der Kunde verpflichtet sich:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Der Agentur rechtzeitig alle für die Durchführung des Auftrags erforderlichen Informationen und Unterlagen zur Verfügung zu stellen</li>
                <li>Die Agentur bei der Erfüllung ihrer Aufgaben zu unterstützen</li>
                <li>Der Agentur Zugriff auf bestehende Systeme, Accounts und Daten zu gewähren, soweit dies für die Durchführung des Auftrags erforderlich ist</li>
                <li>Freigaben und Entscheidungen innerhalb angemessener Frist zu erteilen</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 6 Urheber- und Nutzungsrechte</h3>
              <p>
                Die von der Agentur erstellten Werke (Websites, Designs, Grafiken, Texte etc.) 
                bleiben bis zur vollständigen Bezahlung Eigentum der Agentur.
              </p>
              <p className="mt-3">
                Nach vollständiger Bezahlung erhält der Kunde ein einfaches, zeitlich 
                unbeschränktes Nutzungsrecht an den für ihn erstellten Werken. Die 
                Übertragung ausschließlicher Nutzungsrechte bedarf einer gesonderten 
                schriftlichen Vereinbarung.
              </p>
              <p className="mt-3">
                Die Agentur behält sich das Recht vor, die erstellten Werke als Referenz 
                in ihrem Portfolio und zu Marketingzwecken zu verwenden.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 7 Haftung</h3>
              <p>
                Die Agentur haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. 
                Für leichte Fahrlässigkeit haftet die Agentur nur bei Verletzung einer 
                wesentlichen Vertragspflicht.
              </p>
              <p className="mt-3">
                Die Haftung ist auf den typischerweise vorhersehbaren Schaden begrenzt. 
                Eine Haftung für indirekte Schäden, Folgeschäden oder entgangenen Gewinn 
                ist ausgeschlossen.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 8 Gewährleistung</h3>
              <p>
                Die Agentur gewährleistet, dass die erbrachten Leistungen den vereinbarten 
                Spezifikationen entsprechen. Mängel sind der Agentur unverzüglich schriftlich 
                zu melden.
              </p>
              <p className="mt-3">
                Die Agentur hat das Recht, innerhalb einer angemessenen Frist Nachbesserungen 
                vorzunehmen. Schlägt die Nachbesserung fehl, kann der Kunde Minderung oder 
                Rücktritt vom Vertrag verlangen.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 9 Datenschutz</h3>
              <p>
                Die Agentur verarbeitet personenbezogene Daten gemäss den Bestimmungen des 
                Schweizer Datenschutzgesetzes (DSG) und der Europäischen 
                Datenschutz-Grundverordnung (DSGVO), soweit anwendbar.
              </p>
              <p className="mt-3">
                Die Datenschutzerklärung ist auf der Website einsehbar und wird dem Kunden 
                auf Anfrage auch in Textform zur Verfügung gestellt.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 10 Laufzeit und Kündigung</h3>
              <p>
                Monatliche Abonnements haben eine Mindestvertragslaufzeit von 3 Monaten. 
                Nach Ablauf der Mindestvertragslaufzeit ist eine Kündigung mit einer Frist 
                von 30 Tagen zum Ende eines Monats möglich.
              </p>
              <p className="mt-3">
                Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt. 
                Ein wichtiger Grund liegt insbesondere vor, wenn der Kunde mit der Zahlung 
                von zwei aufeinanderfolgenden Monatsbeträgen in Verzug gerät.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">§ 11 Schlussbestimmungen</h3>
              <p>
                Es gilt Schweizer Recht unter Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p className="mt-3">
                Ausschliesslicher Gerichtsstand ist Zürich, Schweiz, sofern der Kunde 
                seinen Sitz in der Schweiz hat oder nach Vertragsschluss seinen Wohnsitz 
                oder gewöhnlichen Aufenthalt in die Schweiz verlegt.
              </p>
              <p className="mt-3">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Kontakt</h3>
              <p>
                <strong>Wildwave</strong><br />
                Im Isengrind 35<br />
                8046 Zürich<br />
                Schweiz<br />
                <br />
                E-Mail: info@wildwave.ch<br />
                Telefon: +41 78 630 40 06
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
