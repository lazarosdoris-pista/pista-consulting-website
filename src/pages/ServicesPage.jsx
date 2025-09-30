import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Search, Settings, BarChart3, Users, Zap, Shield } from 'lucide-react'

export function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Strategieanalyse",
      description: "Wir analysieren Ihre aktuellen Prozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie für Ihr Unternehmen.",
      features: [
        "Ist-Analyse Ihrer Geschäftsprozesse",
        "Identifikation von Optimierungspotenzialen",
        "Entwicklung einer Digitalisierungsroadmap",
        "ROI-Berechnung für geplante Maßnahmen"
      ],
      duration: "2-3 Wochen",
      color: "blue"
    },
    {
      icon: Settings,
      title: "ERP-Integration",
      description: "Implementierung einer integrierten Business-Software (basierend auf Odoo) für alle Ihre Geschäftsprozesse.",
      features: [
        "Vollständige ERP-Implementierung",
        "Datenintegration aus bestehenden Systemen",
        "Anpassung an Ihre Geschäftsprozesse",
        "Schulung Ihrer Mitarbeiter"
      ],
      duration: "6-8 Wochen",
      color: "green"
    },
    {
      icon: BarChart3,
      title: "Kontinuierliche Optimierung",
      description: "Laufende Betreuung und Anpassung für maximale Effizienz und ROI Ihrer digitalen Systeme.",
      features: [
        "Regelmäßige Performance-Analysen",
        "Proaktive Systemoptimierung",
        "Neue Feature-Implementierung",
        "24/7 Support und Monitoring"
      ],
      duration: "Laufend",
      color: "purple"
    }
  ]

  const additionalServices = [
    {
      icon: Users,
      title: "Change Management",
      description: "Begleitung Ihrer Mitarbeiter durch den Digitalisierungsprozess"
    },
    {
      icon: Zap,
      title: "Prozessautomatisierung",
      description: "Automatisierung wiederkehrender Aufgaben und Workflows"
    },
    {
      icon: Shield,
      title: "IT-Sicherheit",
      description: "Implementierung von Sicherheitsstandards und Compliance"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50",
      purple: "border-purple-200 bg-purple-50"
    }
    return colors[color] || colors.blue
  }

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100">
            Die PISTA-Methode
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Leistungen im Detail
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Strategieberatung und Digitalisierung aus einer Hand. 
            Maßgeschneiderte Lösungen für nachhaltigen Erfolg.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Die PISTA-Methode in 3 Schritten
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className={`relative ${getColorClasses(service.color)} border-2`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon className={`h-6 w-6 ${getIconColor(service.color)}`} />
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        Schritt {index + 1}
                      </Badge>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Leistungsumfang:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Dauer:</span>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Zusätzliche Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Warum PISTA Consulting?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Branchenexpertise</h3>
                  <p className="text-gray-600">Spezialisiert auf deutsche KMUs mit über 150 erfolgreichen Projekten</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Messbare Ergebnisse</h3>
                  <p className="text-gray-600">Klare KPIs und regelmäßige Erfolgsmessung für transparente ROI-Nachweise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Langfristige Partnerschaft</h3>
                  <p className="text-gray-600">Kontinuierliche Betreuung auch nach der Implementierung</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Schnelle Umsetzung</h3>
                  <p className="text-gray-600">Messbare Ergebnisse bereits nach 90 Tagen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bereit für den nächsten Schritt?
            </h3>
            <p className="text-gray-600 mb-6">
              Lassen Sie uns in einem kostenlosen Gespräch herausfinden, 
              wie wir Ihr Unternehmen digitalisieren können.
            </p>
            <div className="space-y-3">
              <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                <Link to="/contact">
                  Kostenlose Beratung vereinbaren
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/pricing">Preise ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
