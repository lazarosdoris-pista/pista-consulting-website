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
      price: "5.000",
      description: "Für kleine Unternehmen bis 10 Mitarbeiter",
      subtitle: "Odoo Community Edition - Ideal für den Einstieg",
      icon: Users,
      features: [
        "Odoo Community Edition Setup & Konfiguration",
        "Basis-Module: CRM, Vertrieb, Einkauf",
        "Grundlegende Prozessautomatisierung",
        "Datenimport aus bestehenden Systemen",
        "Online-Schulung für bis zu 5 Nutzer",
        "1 Monat Support nach Go-Live"
      ],
      popular: false
    },
    {
      name: "PISTA Professional",
      price: "15.000",
      description: "Für wachsende Unternehmen 10-50 Mitarbeiter",
      subtitle: "Odoo Enterprise - Vollständige Integration",
      icon: Building,
      features: [
        "Odoo Enterprise Edition mit allen Modulen",
        "Erweiterte Module: Lager, Produktion, Buchhaltung",
        "Individuelle Anpassungen & Workflows",
        "API-Integration (E-Commerce, Banking, etc.)",
        "Multi-User-Berechtigungskonzept",
        "Vor-Ort-Schulung für bis zu 15 Nutzer",
        "3 Monate Premium-Support"
      ],
      popular: true
    },
    {
      name: "PISTA Enterprise",
      price: "50.000",
      description: "Für Unternehmen ab 50 Mitarbeitern",
      subtitle: "Odoo Enterprise - Maßgeschneiderte Lösung",
      icon: Building2,
      features: [
        "Odoo Enterprise mit Custom Development",
        "Alle Module inkl. Studio & IoT",
        "Vollständige ERP-Systemlandschaft-Integration",
        "Maßgeschneiderte Workflows & Automatisierung",
        "Multi-Standort & Multi-Company Setup",
        "Dedizierter Projektmanager & Berater",
        "6 Monate Premium-Support & Schulungen"
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
                  <div className="my-4">
                    <div className="text-sm text-gray-600 mb-1">ab</div>
                    <div className="text-4xl font-bold text-gray-900">
                      {formatPrice(pkg.price)}
                      <span className="text-lg font-normal text-gray-600"> einmalig</span>
                    </div>
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

        {/* Monthly Support Packages */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Monatliche Betreuung
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support & Wartung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kontinuierliche Betreuung für einen reibungslosen Betrieb Ihres Odoo-Systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Support Basic</CardTitle>
                <div className="text-4xl font-bold text-gray-900 my-4">
                  {formatPrice(500)}
                  <span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
                <CardDescription className="text-base">
                  Für kleine Teams bis 10 Mitarbeiter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">System-Updates & Sicherheitspatches</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">E-Mail-Support (Reaktion binnen 48h)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Monatliches Backup & Monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Bis zu 2 Stunden Support/Monat</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gray-900 hover:bg-gray-800"
                  size="lg"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-500 bg-red-50 shadow-xl scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600 text-white px-4 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  BELIEBT
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Support Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900 my-4">
                  {formatPrice(1500)}
                  <span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
                <CardDescription className="text-base">
                  Für wachsende Teams 10-50 Mitarbeiter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Alles aus Basic-Paket</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Prioritäts-Support (Reaktion binnen 8h)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Proaktives System-Monitoring 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Bis zu 8 Stunden Support/Monat</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Monatliche Prozessoptimierung</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-red-600 hover:bg-red-700"
                  size="lg"
                >
                  Jetzt starten
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Support Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900 my-4">
                  {formatPrice(3500)}
                  <span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
                <CardDescription className="text-base">
                  Für große Teams ab 50 Mitarbeitern
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Alles aus Professional-Paket</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">24/7 Premium-Support (Reaktion binnen 2h)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Dedizierter Account Manager</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Bis zu 20 Stunden Support/Monat</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Quartalsweise Business Reviews</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gray-900 hover:bg-gray-800"
                  size="lg"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
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
