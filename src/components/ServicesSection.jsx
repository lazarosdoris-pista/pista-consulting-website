import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Settings, BarChart3 } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Strategieanalyse",
      description: "Wir analysieren Ihre aktuellen Prozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie.",
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

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 hover:bg-blue-100",
      green: "border-green-200 bg-green-50 hover:bg-green-100",
      purple: "border-purple-200 bg-purple-50 hover:bg-purple-100"
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100">
            Die PISTA-Methode
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Die PISTA-Methode in 3 Schritten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategieberatung und Digitalisierung aus einer Hand. 
            Maßgeschneiderte Lösungen für nachhaltigen Erfolg.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className={`relative ${getColorClasses(service.color)} border-2 transition-all duration-300 hover:shadow-lg hover:scale-105`}>
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
      </div>
    </section>
  )
}
