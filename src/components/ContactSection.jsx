import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

export function ContactSection({ setShowDatenschutz }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    employees: '',
    timeline: '',
    message: '',
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    if (field === 'privacyPolicy') {
      setFormData(prev => ({ ...prev, privacy: !prev.privacy }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form data before submission:", formData);
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
          budget: formData.budget,
          employees: formData.employees,
          timeline: formData.timeline,
          message: formData.message,
          _subject: "Neue Anfrage von Pista Consulting Website",
          _template: "table",
          _captcha: "false"
        })
      });
      
      console.log("Response from FormSubmit:", response);

      if (response.ok) {
        alert("Vielen Dank für Ihre Anfrage! Wir melden uns binnen 24 Stunden bei Ihnen.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          employees: "",
          timeline: "",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error("Form submission failed with status:", response.status, errorText);
        throw new Error("Fehler beim Senden: " + errorText);
      }
    } catch (error) {
      console.error("Caught an error during form submission:", error);
      alert("Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      value: "München, Deutschland",
      description: "Termine vor Ort möglich"
    }
  ]

  const benefits = [
    "100% kostenlose Erstberatung",
    "Keine Verpflichtung",
    "Binnen 24h Antwort",
    "Individuelle Lösungsvorschläge",
    "ROI-Berechnung inklusive"
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            ✓ Kostenlose Erstberatung
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vereinbaren Sie jetzt Ihre kostenlose Strategieberatung und erfahren Sie, 
            wie wir Ihr Unternehmen digitalisieren können.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Kostenlose Strategieberatung anfragen</CardTitle>
                <CardDescription>
                  Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden bei Ihnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ihre.email@unternehmen.de"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+49 123 456 789"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget *</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie Ihr Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10.000€ - 25.000€">10.000€ - 25.000€</SelectItem>
                          <SelectItem value="25.000€ - 50.000€">25.000€ - 50.000€</SelectItem>
                          <SelectItem value="50.000€ - 100.000€">50.000€ - 100.000€</SelectItem>
                          <SelectItem value="100.000€+">100.000€+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Anzahl Mitarbeiter *</Label>
                      <Select onValueChange={(value) => handleInputChange('employees', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Wählen Sie eine Option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10 Mitarbeiter">1-10 Mitarbeiter</SelectItem>
                          <SelectItem value="11-25 Mitarbeiter">11-25 Mitarbeiter</SelectItem>
                          <SelectItem value="26-100 Mitarbeiter">26-100 Mitarbeiter</SelectItem>
                          <SelectItem value="100+ Mitarbeiter">100+ Mitarbeiter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Zeitrahmen *</Label>
                    <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wann möchten Sie starten?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sofort">Sofort</SelectItem>
                        <SelectItem value="In den nächsten 3 Monaten">In den nächsten 3 Monaten</SelectItem>
                        <SelectItem value="In den nächsten 6 Monaten">In den nächsten 6 Monaten</SelectItem>
                        <SelectItem value="In den nächsten 12 Monaten">In den nächsten 12 Monaten</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Ihre Nachricht</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Beschreiben Sie kurz Ihre aktuellen Herausforderungen oder Ziele..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Was passiert als nächstes?</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Wir melden uns binnen 24 Stunden bei Ihnen</li>
                      <li>• Kostenlose 30-minütige Strategieberatung</li>
                      <li>• Individuelle Lösungsvorschläge für Ihr Unternehmen</li>
                      <li>• ROI-Berechnung und Umsetzungsplan</li>
                    </ul>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      checked={formData.privacy}
                      onChange={() => handleInputChange("privacyPolicy")}
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <Label htmlFor="privacyPolicy" className="text-sm text-gray-700">
                      Ich habe die <a href="#" onClick={() => setShowDatenschutz(true)} className="text-red-600 hover:underline">Datenschutzerklärung</a> gelesen und akzeptiert.
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                    {isSubmitting ? 'Wird gesendet...' : 'Kostenlose Beratung anfragen'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-700">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Ihre Vorteile</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <blockquote className="text-sm italic text-gray-700 mb-3">
                  "Die Beratung war von Anfang an professionell und zielführend. 
                  PISTA hat unsere Erwartungen übertroffen."
                </blockquote>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">ZP</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Zoran Pozderovic</div>
                    <div className="text-xs text-gray-600">Bavaria Heizungstechnik</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
