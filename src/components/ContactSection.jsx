import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns binnen 24 Stunden bei Ihnen.')
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Unternehmen *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Ihr Unternehmen"
                        required
                      />
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employees">Anzahl Mitarbeiter *</Label>
                    <Select onValueChange={(value) => handleInputChange('employees', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie eine Option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 Mitarbeiter</SelectItem>
                        <SelectItem value="11-25">11-25 Mitarbeiter</SelectItem>
                        <SelectItem value="26-50">26-50 Mitarbeiter</SelectItem>
                        <SelectItem value="51-100">51-100 Mitarbeiter</SelectItem>
                        <SelectItem value="100+">Über 100 Mitarbeiter</SelectItem>
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

                  <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                    Kostenlose Beratung anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
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
