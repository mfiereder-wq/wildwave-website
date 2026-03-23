'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface DatenschutzDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DatenschutzDialog({ open, onOpenChange }: DatenschutzDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground">
            Datenschutzerklärung
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[70vh] px-6 pb-6">
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 pt-4">
            
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Einleitung</h3>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. 
                In dieser Datenschutzerklärung informieren wir Sie über die Verarbeitung 
                Ihrer personenbezogenen Daten im Rahmen der Nutzung unserer Website und 
                unserer Dienstleistungen.
              </p>
              <p className="mt-3">
                Diese Datenschutzerklärung entspricht den Anforderungen des Schweizer 
                Datenschutzgesetzes (DSG) sowie der Europäischen Datenschutz-Grundverordnung 
                (DSGVO), soweit anwendbar.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Verantwortliche Stelle</h3>
              <p>
                <strong>Verantwortlich für die Datenverarbeitung:</strong><br />
                <br />
                Wildwave<br />
                Im Isengrind 35<br />
                8046 Zürich<br />
                Schweiz<br />
                <br />
                E-Mail: info@wildwave.ch<br />
                Telefon: +41 78 630 40 06
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Welche Daten wir erheben</h3>
              <p>Wir erheben und verarbeiten folgende Kategorien von personenbezogenen Daten:</p>
              
              <h4 className="text-base font-medium text-foreground mt-4 mb-2">3.1 Kontaktdaten</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name und Vorname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (falls angegeben)</li>
                <li>Unternehmensname (falls angegeben)</li>
              </ul>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">3.2 Technische Daten</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP-Adresse</li>
                <li>Browser-Typ und Version</li>
                <li>Betriebssystem</li>
                <li>Besuchszeiten und -dauer</li>
                <li>Aufgerufene Seiten</li>
                <li>Referrer-URL</li>
              </ul>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">3.3 Kommunikationsdaten</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Inhalt von Kontaktanfragen</li>
                <li>Korrespondenz per E-Mail oder WhatsApp</li>
                <li>Projektbezogene Informationen</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Zwecke der Datenverarbeitung</h3>
              <p>Wir verarbeiten Ihre Daten für folgende Zwecke:</p>
              
              <h4 className="text-base font-medium text-foreground mt-4 mb-2">4.1 Vertragserfüllung</h4>
              <p>
                Zur Durchführung unserer Dienstleistungen (Webdesign, Marketing, etc.) 
                benötigen wir Ihre Kontaktdaten und projektbezogenen Informationen. 
                Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 31 DSG.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">4.2 Beantwortung von Anfragen</h4>
              <p>
                Zur Beantwortung Ihrer Kontaktanfragen via Kontaktformular, E-Mail oder 
                WhatsApp. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes 
                Interesse) bzw. Art. 31 DSG.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">4.3 Website-Bereitstellung</h4>
              <p>
                Zur technischen Bereitstellung und Verbesserung unserer Website. 
                Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) 
                bzw. Art. 31 DSG.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">4.4 Marketing</h4>
              <p>
                Mit Ihrer Einwilligung nutzen wir Ihre Daten für Marketingzwecke, 
                insbesondere für Newsletter. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO 
                bzw. Art. 31 DSG (Einwilligung).
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">5. Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf 
                Ihrem Endgerät gespeichert werden und die Nutzung unserer Website analysieren.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">5.1 Technisch notwendige Cookies</h4>
              <p>
                Diese Cookies sind für den Betrieb der Website zwingend erforderlich und 
                können nicht deaktiviert werden. Sie speichern keine personenbezogenen Daten.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">5.2 Analyse-Cookies</h4>
              <p>
                Mit Ihrer Einwilligung verwenden wir Analyse-Cookies (z.B. Google Analytics) 
                zur Verbesserung unserer Website. Diese Cookies erfassen anonymisierte Daten 
                über Ihre Nutzung der Website.
              </p>

              <h4 className="text-base font-medium text-foreground mt-4 mb-2">5.3 Marketing-Cookies</h4>
              <p>
                Mit Ihrer Einwilligung verwenden wir Marketing-Cookies für personalisierte 
                Werbung auf Plattformen wie Google Ads oder Social Media.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">6. Datenweitergabe an Dritte</h3>
              <p>
                Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Sie ausdrücklich eingewilligt haben</li>
                <li>Die Weitergabe zur Vertragserfüllung erforderlich ist (z.B. Hosting-Provider)</li>
                <li>Wir gesetzlich dazu verpflichtet sind</li>
                <li>Ein berechtigtes Interesse besteht (z.B. IT-Sicherheit)</li>
              </ul>
              <p className="mt-3">
                Unsere Dienstleister (Hosting, E-Mail-Provider, etc.) werden sorgfältig 
                ausgewählt und vertraglich zur Einhaltung der Datenschutzbestimmungen verpflichtet.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">7. Datenübermittlung ins Ausland</h3>
              <p>
                Bei der Nutzung von Dienstleistungen ausserhalb der Schweiz/EU können 
                personenbezogene Daten in Länder übermittelt werden, die kein dem 
                Schweizer/EU-Datenschutz gleichwertiges Schutzniveau bieten.
              </p>
              <p className="mt-3">
                In solchen Fällen stellen wir durch geeignete Garantien (z.B. Standardvertragsklauseln 
                der EU-Kommission) sicher, dass Ihre Daten angemessen geschützt sind.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">8. Speicherdauer</h3>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die 
                Erfüllung der jeweiligen Zwecke erforderlich ist oder wie es das Gesetz vorsieht.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Kontaktdaten:</strong> Bis zum Ablauf der gesetzlichen Aufbewahrungspflichten (10 Jahre)</li>
                <li><strong>Kommunikationsdaten:</strong> Bis zur Erledigung der Anfrage, danach 2 Jahre</li>
                <li><strong>Log-Daten:</strong> Maximal 12 Monate</li>
                <li><strong>Cookies:</strong> Je nach Cookie-Typ maximal 24 Monate</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">9. Ihre Rechte</h3>
              <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Auskunft:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
                <li><strong>Berichtigung:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
                <li><strong>Löschung:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                <li><strong>Einschränkung:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                <li><strong>Datenübertragbarkeit:</strong> Sie können die Herausgabe Ihrer Daten in maschinenlesbarer Form verlangen</li>
                <li><strong>Widerspruch:</strong> Sie können der Verarbeitung widersprechen</li>
                <li><strong>Widerruf der Einwilligung:</strong> Sie können eine erteilte Einwilligung jederzeit widerrufen</li>
              </ul>
              <p className="mt-3">
                Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter{' '}
                <a href="mailto:info@wildwave.ch" className="text-primary hover:underline">
                  info@wildwave.ch
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">10. Beschwerderecht</h3>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren:
              </p>
              <p className="mt-3">
                <strong>Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)</strong><br />
                Hallwylstrasse 15<br />
                3003 Bern<br />
                Schweiz<br />
                <br />
                Website:{' '}
                <a 
                  href="https://www.edoeb.admin.ch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.edoeb.admin.ch
                </a>
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">11. Sicherheit</h3>
              <p>
                Wir treffen angemessene technische und organisatorische Massnahmen zum 
                Schutz Ihrer personenbezogenen Daten vor unbefugtem Zugriff, Verlust oder 
                Missbrauch. Dazu gehören unter anderem:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Verschlüsselung der Datenübertragung (SSL/TLS)</li>
                <li>Regelmässige Sicherheitsupdates</li>
                <li>Zugriffskontrollen</li>
                <li>Schulung der Mitarbeiter</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">12. WhatsApp-Kommunikation</h3>
              <p>
                Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachricht und Ihre 
                Telefonnummer über die WhatsApp-Plattform übermittelt. Für die Datenverarbeitung 
                durch WhatsApp gilt die Datenschutzerklärung von Meta.
              </p>
              <p className="mt-3">
                Wir speichern Ihre WhatsApp-Nachrichten für die Bearbeitung Ihrer Anfrage 
                und löschen diese nach Abschluss der Kommunikation, sofern keine gesetzlichen 
                Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">13. Änderungen</h3>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung zu ändern. Die aktuelle 
                Version ist stets auf unserer Website verfügbar. Bei wesentlichen Änderungen 
                werden wir Sie auf unserer Website informieren.
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
