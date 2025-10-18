import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PistiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hallo! Ich bin Pisti, Ihr digitaler Berater von PISTA Consulting. 🏁\n\nIch helfe Ihnen gerne bei Fragen zu:\n• Odoo ERP-Implementierung\n• Digitalisierung Ihrer Geschäftsprozesse\n• Unseren Paketen und Preisen\n• Projektablauf und Zeitplanung\n\nWie kann ich Ihnen heute helfen?'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Knowledge base for Pisti
  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase()

    // Preise
    if (message.includes('preis') || message.includes('kosten') || message.includes('euro') || message.includes('€')) {
      return `Unsere Pakete sind transparent gestaltet:\n\n🏁 **PISTA Starter** - ab 15.000€ (einmalig) oder 1.500€/Monat\nFür kleine Unternehmen bis 10 Mitarbeiter\n\n🏆 **PISTA Professional** - ab 25.000€ (einmalig) oder 2.500€/Monat\nFür wachsende Unternehmen 10-50 Mitarbeiter (EMPFOHLEN)\n\n🏎️ **PISTA Enterprise** - ab 50.000€ (einmalig) oder 5.000€/Monat\nFür Unternehmen ab 50 Mitarbeitern\n\nAlle Preise sind transparent und ohne versteckte Kosten. Bei monatlicher Zahlung verteilen wir die Investition über 12 Monate.\n\nMöchten Sie mehr über ein bestimmtes Paket erfahren?`
    }

    // Odoo
    if (message.includes('odoo') || message.includes('erp') || message.includes('system')) {
      return `Odoo ist ein umfassendes ERP-System, das wir bei PISTA Consulting implementieren:\n\n✅ **Modular & Flexibel**: Von CRM über Lager bis Buchhaltung\n✅ **Open Source**: Community & Enterprise Editionen verfügbar\n✅ **Integriert**: Alle Geschäftsprozesse in einem System\n✅ **Skalierbar**: Wächst mit Ihrem Unternehmen\n\nWir haben bereits über 50 erfolgreiche Odoo-Implementierungen durchgeführt, wie z.B. bei Bavaria Heizungstechnik (40% Effizienzsteigerung).\n\nInteressiert an einer kostenlosen Erstberatung?`
    }

    // Projektablauf
    if (message.includes('ablauf') || message.includes('prozess') || message.includes('dauer') || message.includes('wie lange')) {
      return `Unser bewährter PISTA-Prozess in 3 Phasen:\n\n**1. Streckenanalyse & Routenplanung** (1-2 Wochen)\n• Analyse Ihrer aktuellen Prozesse\n• Identifikation von Optimierungspotenzialen\n• Erstellung einer maßgeschneiderten Roadmap\n\n**2. Vollgas-Umsetzung** (4-12 Wochen je nach Paket)\n• Odoo-Installation & Konfiguration\n• Datenimport & Migration\n• Individuelle Anpassungen\n• Schulung Ihrer Mitarbeiter\n\n**3. Feintuning & Performance** (laufend)\n• Go-Live Support\n• Kontinuierliche Optimierung\n• Premium-Support\n\nDie genaue Dauer hängt vom gewählten Paket ab. Möchten Sie ein konkretes Angebot?`
    }

    // Support
    if (message.includes('support') || message.includes('wartung') || message.includes('betreuung')) {
      return `Wir bieten drei Support-Pakete:\n\n**Support Basic** - 500€/Monat\n• System-Updates & Patches\n• E-Mail-Support (48h)\n• Bis zu 2h Support/Monat\n\n**Support Professional** - 1.500€/Monat (BELIEBT)\n• Alles aus Basic\n• Prioritäts-Support (8h)\n• 24/7 Monitoring\n• Bis zu 8h Support/Monat\n\n**Support Enterprise** - 3.500€/Monat\n• Alles aus Professional\n• Premium-Support (2h)\n• Dedizierter Account Manager\n• Bis zu 20h Support/Monat\n\nWelches Paket passt zu Ihrem Bedarf?`
    }

    // Ratenzahlung
    if (message.includes('raten') || message.includes('monatlich') || message.includes('zahlung')) {
      return `Ja, wir bieten flexible Zahlungsoptionen! 💳\n\nSie können zwischen **Einmalzahlung** und **monatlicher Ratenzahlung** wählen:\n\n• **PISTA Starter**: 15.000€ einmalig ODER 1.500€/Monat (12 Monate)\n• **PISTA Professional**: 25.000€ einmalig ODER 2.500€/Monat (12 Monate)\n• **PISTA Enterprise**: 50.000€ einmalig ODER 5.000€/Monat (12 Monate)\n\nDie monatliche Zahlung verteilt die Investition gleichmäßig über ein Jahr, ohne Aufschlag!\n\nMöchten Sie ein individuelles Angebot?`
    }

    // Kontakt
    if (message.includes('kontakt') || message.includes('termin') || message.includes('beratung') || message.includes('anruf')) {
      return `Gerne! Kontaktieren Sie uns für eine kostenlose Erstberatung:\n\n📧 **E-Mail**: info@pista.consulting\n📞 **Telefon**: +49 (0) 123 456 789 (Mo-Fr 9-18 Uhr)\n\nOder scrollen Sie einfach nach unten zum Kontaktformular - wir melden uns innerhalb von 24 Stunden bei Ihnen!\n\nIch kann auch gerne weitere Fragen beantworten, bevor Sie Kontakt aufnehmen. Was möchten Sie noch wissen?`
    }

    // Erfolgsgeschichte
    if (message.includes('erfolg') || message.includes('referenz') || message.includes('beispiel') || message.includes('bavaria')) {
      return `Gerne! Ein Beispiel ist **Bavaria Heizungstechnik**:\n\n🏁 **Die Herausforderung**:\n• 45 Mitarbeiter, veraltete Systeme\n• Excel-Angebote, Zettelwirtschaft\n• Daten über verschiedene Systeme verstreut\n\n✅ **Unsere Lösung**:\n• Odoo als zentrales ERP-System\n• Vollständige Prozessdigitalisierung\n• Automatisierung der Workflows\n\n🎯 **Das Ergebnis**:\n• 40% Effizienzsteigerung\n• Reduzierte Fehlerquoten\n• Verbesserte Kundenzufriedenheit\n\nWir haben über 50 ähnliche Projekte erfolgreich umgesetzt. Möchten Sie auch zu unseren Erfolgsgeschichten gehören?`
    }

    // Unterschiede zwischen Paketen
    if (message.includes('unterschied') || message.includes('vergleich') || message.includes('welches paket')) {
      return `Hier die Hauptunterschiede unserer Pakete:\n\n**PISTA Starter** (15.000€)\n• Odoo Community Edition\n• Basis-Module (CRM, Vertrieb, Einkauf)\n• Für bis zu 10 Mitarbeiter\n• 1 Monat Support\n\n**PISTA Professional** (25.000€) ⭐ EMPFOHLEN\n• Odoo Enterprise Edition\n• Erweiterte Module + API-Integration\n• Für 10-50 Mitarbeiter\n• 3 Monate Premium-Support\n\n**PISTA Enterprise** (50.000€)\n• Custom Development\n• Alle Module + Multi-Standort\n• Für 50+ Mitarbeiter\n• 6 Monate Premium-Support\n\nDie Wahl hängt von Ihrer Unternehmensgröße und Ihren Anforderungen ab. Welche Größe hat Ihr Unternehmen?`
    }

    // Grüße
    if (message.includes('hallo') || message.includes('hi') || message.includes('guten tag') || message.includes('servus')) {
      return `Hallo! 👋 Schön, dass Sie da sind!\n\nIch bin Pisti, Ihr digitaler Berater von PISTA Consulting. Wie kann ich Ihnen bei Ihrer digitalen Transformation helfen?`
    }

    // Danke
    if (message.includes('danke') || message.includes('dankeschön')) {
      return `Sehr gerne! 😊\n\nFalls Sie weitere Fragen haben, bin ich jederzeit für Sie da. Für eine persönliche Beratung können Sie auch gerne unser Kontaktformular nutzen oder uns direkt anrufen.\n\nViel Erfolg bei Ihrer digitalen Transformation! 🏁`
    }

    // Default response
    return `Das ist eine interessante Frage! Ich kann Ihnen am besten bei folgenden Themen helfen:\n\n• **Preise & Pakete** - Welches Paket passt zu Ihnen?\n• **Odoo & ERP** - Was kann das System?\n• **Projektablauf** - Wie läuft die Implementierung ab?\n• **Support** - Welche Betreuung gibt es?\n• **Erfolgsgeschichten** - Referenzen & Beispiele\n\nFür spezifische Fragen zu Ihrem individuellen Fall empfehle ich eine kostenlose Erstberatung mit unserem Team. Möchten Sie einen Termin vereinbaren?`
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      role: 'user',
      content: inputMessage
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(inputMessage)
      const assistantMessage = {
        role: 'assistant',
        content: response
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
          aria-label="Chat mit Pisti öffnen"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-semibold">
            Frag Pisti!
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className={`fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-lg flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🏁</span>
              </div>
              <div>
                <CardTitle className="text-lg font-bold">Pisti</CardTitle>
                <p className="text-xs opacity-90">Ihr digitaler PISTA Berater</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-red-800 p-1 rounded transition-colors"
                aria-label="Minimieren"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-red-800 p-1 rounded transition-colors"
                aria-label="Schließen"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ihre Frage an Pisti..."
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-red-600 hover:bg-red-700 text-white px-4"
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Pisti ist ein KI-Assistent. Für verbindliche Auskünfte kontaktieren Sie uns bitte direkt.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  )
}

export default PistiChatbot

