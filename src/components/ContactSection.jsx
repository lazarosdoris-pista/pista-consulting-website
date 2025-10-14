import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactSection({ setShowDatenschutz }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/lazaros.doris@live.de", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Neue Kontaktanfrage von PISTA Consulting Website",
          _template: "table",
          _captcha: "false"
        })
      })

      if (response.ok) {
        alert("Vielen Dank für Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden bei Ihnen.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacy: false
        })
      } else {
        throw new Error("Fehler beim Senden")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "E-Mail",
      value: "info@pista.consulting",
      description: "Antwort binnen 24 Stunden"
    },
    {
      icon: Phone,
      title: "Telefon",
      value: "+49 (0) 123 456 789",
      description: "Mo-Fr 9:00-18:00 Uhr"
    },
    {
      icon: MapPin,
      title: "Standort",
      value: "Deutschland",
      description: "Bundesweit verfügbar"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100">
            Kontakt
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kostenlose Erstberatung
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktinformationen
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-lg text-gray-700">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-900">Warum PISTA?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Odoo-Experten mit langjähriger Erfahrung</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Transparente Preise ohne versteckte Kosten</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-gray-700">Persönliche Betreuung vom ersten Tag an</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Kontaktformular</CardTitle>
              <CardDescription>
                Füllen Sie das Formular aus und wir melden uns bei Ihnen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Ihr Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonnummer</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+49 123 456 789"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacy}
                    onCheckedChange={(checked) => handleInputChange('privacy', checked)}
                    required
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-gray-600 leading-tight cursor-pointer"
                  >
                    Ich stimme der{' '}
                    <button
                      type="button"
                      onClick={() => setShowDatenschutz(true)}
                      className="text-red-600 hover:underline"
                    >
                      Datenschutzerklärung
                    </button>{' '}
                    zu. *
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Anfrage senden
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Pflichtfelder
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

