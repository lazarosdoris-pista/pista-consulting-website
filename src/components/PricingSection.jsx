import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Star, Users, Building, Building2 } from 'lucide-react'

export function PricingSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const packages = [
    {
      name: "PISTA Starter",
      price: "12.999",
      description: "Für Unternehmen bis 25 Mitarbeiter",
      subtitle: "Ersetzt 3-5 separate Software-Lizenzen",
      icon: Users,
      features: [
        "Umfassende Strategieberatung & Digitalisierungskonzept",
        "Vollständige ERP-Implementierung (6-8 Wochen)",
        "Datenintegration aus bestehenden Systemen",
        "Prozessautomatisierung (5 Kern-Workflows)",
        "Basis-Schulungen für Ihr Team",
        "3 Monate kostenloser Support"
      ],
      popular: false
    },
    {
      name: "PISTA Professional",
      price: "24.999",
      description: "Für wachsende Unternehmen 25-100 Mitarbeiter",
      subtitle: "Weniger als 2 Jahre typische ERP-Lizenzkosten",
      icon: Building,
      features: [
        "Alles aus Starter-Paket",
        "Erweiterte Strategieberatung & Roadmap-Entwicklung",
        "Multi-Standort-Setup & Berechtigungskonzept",
        "API-Integrationen (E-Commerce, Buchhaltung, etc.)",
        "Erweiterte Prozessautomatisierung (10+ Workflows)",
        "6 Monate kostenloser Support",
        "Dedicated Project Manager"
      ],
      popular: true
    },
    {
      name: "PISTA Enterprise",
      price: "49.999",
      description: "Für Unternehmen ab 100 Mitarbeitern",
      subtitle: "Bruchteil der Kosten einer SAP-Implementierung",
      icon: Building2,
      features: [
        "Alles aus Professional-Paket",
        "C-Level Strategieberatung & Transformation Management",
        "Vollständige Systemlandschaft-Integration",
        "Custom Development & Anpassungen",
        "Compliance & Security Audits",
        "12 Monate Premium-Support",
        "Quartalsweise Business Reviews"
      ],
      popular: false
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            Transparente Preise
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Investition in Ihre digitale Zukunft
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Einmalige Investition für lebenslange Vorteile. Transparente Preise ohne versteckte Kosten.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <Card key={index} className={`relative transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'border-red-500 bg-red-50 shadow-xl scale-105' : 'border-gray-200 hover:border-gray-300'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      EMPFOHLEN
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className={`h-8 w-8 ${pkg.popular ? 'text-red-600' : 'text-gray-600'}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 my-4">
                    {formatPrice(pkg.price)}
                    <span className="text-lg font-normal text-gray-600"> einmalig</span>
                  </div>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{pkg.subtitle}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => scrollToSection('#contact')}
                    className={`w-full ${pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    {pkg.popular ? 'Jetzt starten' : 'Mehr erfahren'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Häufige Fragen zu unseren Preisen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sind die Preise final?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unsere Preise sind transparent und final. Es gibt keine versteckten Kosten.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Individuelle Anpassung möglich?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ja, alle Pakete können individuell angepasst werden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
