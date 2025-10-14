import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Star, Users, Building, Building2 } from 'lucide-react'

export function PricingPage() {
  const implementationPackages = [
    {
      name: "PISTA Starter",
      price: "13.000",
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
      popular: false,
      color: "blue"
    },
    {
      name: "PISTA Professional",
      price: "25.000",
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
      popular: true,
      color: "red"
    },
    {
      name: "PISTA Enterprise",
      price: "50.000",
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
      popular: false,
      color: "purple"
    }
  ]

  const carePackages = [
    {
      name: "PISTA Care Starter",
      price: "1.100",
      description: "Grundbetreuung für kleine Teams (1-25 Mitarbeiter)",
      features: [
        "Monatliche System-Updates & Wartung",
        "E-Mail-Support (Antwort binnen 24h)",
        "Automatische Datensicherung täglich",
        "Monatliche Strategieberatung (1h)",
        "Basis-Schulungen für Ihr Team",
        "Monatlicher Performance-Report"
      ],
      popular: false
    },
    {
      name: "PISTA Care Professional",
      price: "2.100",
      description: "Vollbetreuung für wachsende Unternehmen (25-100 Mitarbeiter)",
      features: [
        "Alles aus Starter-Paket",
        "Proaktives 24/7 System-Monitoring",
        "Telefon-Support (Antwort binnen 4h)",
        "Monatliche Strategieberatung (3h)",
        "Erweiterte Schulungen & Workshops",
        "Prioritäts-Support bei Problemen",
        "Detaillierte ROI-Analysen",
        "Monatliche Prozessoptimierung"
      ],
      popular: true
    },
    {
      name: "PISTA Care Enterprise",
      price: "4.200",
      description: "Vollbetreuung für komplexe Systeme (100+ Mitarbeiter)",
      features: [
        "Alles aus Professional-Paket",
        "Dedicated Account Manager",
        "24/7 Notfall-Support (1h Reaktionszeit)",
        "Wöchentliche Strategieberatung (6h)",
        "Individuelle Entwicklungen & Anpassungen",
        "Compliance & Security Audits",
        "Exklusiver Zugang zu Beta-Features",
        "Quartalsweise C-Level Business Reviews"
      ],
      popular: false
    }
  ]

  const getColorClasses = (color, popular = false) => {
    if (popular) return "border-red-500 bg-red-50 shadow-xl scale-105"
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      red: "border-red-200 hover:border-red-300",
      purple: "border-purple-200 hover:border-purple-300"
    }
    return colors[color] || colors.blue
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            Transparente Preise
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Investition in Ihre digitale Zukunft
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Einmalige Investition für lebenslange Vorteile. Transparente Preise ohne versteckte Kosten.
          </p>
        </div>
      </section>

      {/* Implementation Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Implementierungspakete
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Einmalige Investition für die vollständige Digitalisierung Ihres Unternehmens
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {implementationPackages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <Card key={index} className={`relative transition-all duration-300 ${getColorClasses(pkg.color, pkg.popular)}`}>
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
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    <Link to="/contact">
                      {pkg.popular ? 'Jetzt starten' : 'Mehr erfahren'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Care Packages */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Monatliche Betreuung
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Laufende Betreuung für nachhaltigen Erfolg und kontinuierliche Optimierung
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {carePackages.map((pkg, index) => (
              <Card key={index} className={`transition-all duration-300 ${pkg.popular ? 'border-red-500 bg-red-50 shadow-xl scale-105' : 'border-gray-200 hover:border-gray-300'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">
                      🏆 Beliebteste Wahl
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 my-4">
                    {formatPrice(pkg.price)}
                    <span className="text-lg font-normal text-gray-600"> /Monat</span>
                  </div>
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
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
                    asChild 
                    className={`w-full ${pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    <Link to="/contact">
                      {pkg.popular ? 'Professional wählen' : `${pkg.name.split(' ')[2]} wählen`}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Monthly Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Warum monatliche Betreuung?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kontinuierliche Sicherheit</h3>
            <p className="text-gray-600">
              Updates, Backups und Monitoring für maximale Ausfallsicherheit
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Stetige Optimierung</h3>
            <p className="text-gray-600">
              Proaktive Verbesserungen für bessere Performance und ROI
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Langfristige Partnerschaft</h3>
            <p className="text-gray-600">
              Ihr digitaler Partner für nachhaltigen Geschäftserfolg
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Häufige Fragen zu unseren Preisen
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sind die Preise final oder kommen noch Kosten dazu?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unsere Preise sind transparent und final. Es gibt keine versteckten Kosten. 
                  Lediglich die monatliche Betreuung ist optional und wird separat berechnet.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kann ich das Paket an meine Bedürfnisse anpassen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ja, alle Pakete können individuell angepasst werden. In einem kostenlosen 
                  Beratungsgespräch ermitteln wir Ihre spezifischen Anforderungen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie lange dauert die Implementierung?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Je nach Paket zwischen 6-12 Wochen. Wir garantieren messbare Ergebnisse 
                  bereits nach 90 Tagen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Unsicher welches Paket das richtige ist?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns das gemeinsam in einem kostenlosen Gespräch klären. 
            Wir finden die optimale Lösung für Ihr Unternehmen.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Kostenlose Beratung vereinbaren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
