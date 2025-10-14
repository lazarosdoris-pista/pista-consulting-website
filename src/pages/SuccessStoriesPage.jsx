import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Quote, TrendingUp, Users, Clock, Star } from 'lucide-react'

export function SuccessStoriesPage() {
  const mainStory = {
    company: "Bavaria Heizungstechnik GmbH",
    industry: "SHK-Handwerk",
    ceo: "Zoran Pozderovic",
    duration: "8 Wochen",
    employees: "25",
    results: {
      profit: "6-stelliger Gewinn erreicht",
      revenue: "7-stelliger Umsatz generiert",
      efficiency: "70+ Wärmepumpen-Installationen optimiert"
    },
    challenge: "Manuelle Angebotserstellung, ineffiziente Terminplanung, fehlende Kundenübersicht bei 70+ Wärmepumpen-Installationen jährlich",
    solution: "Integrierte ERP-Lösung mit automatisierter Angebotserstellung, digitaler Terminplanung und CRM-System für Heizungs- und Sanitärprojekte",
    quote: "PISTA hat unseren SHK-Meisterbetrieb revolutioniert. Von manuellen Prozessen zu 6-stelligen Gewinnen - das hätten wir nie für möglich gehalten.",
    metrics: [
      { label: "Zeitersparnis", value: "40%", description: "bei der Angebotserstellung" },
      { label: "Umsatzsteigerung", value: "150%", description: "im ersten Jahr" },
      { label: "Kundenzufriedenheit", value: "95%", description: "positive Bewertungen" },
      { label: "Projektlaufzeit", value: "8 Wochen", description: "bis zur Vollimplementierung" }
    ]
  }

  const additionalStories = [
    {
      company: "TechnoPlast GmbH",
      industry: "Kunststoffverarbeitung",
      employees: "45",
      challenge: "Komplexe Lagerverwaltung und Produktionsplanung",
      result: "30% Effizienzsteigerung in der Produktion",
      duration: "6 Wochen"
    },
    {
      company: "Müller Maschinenbau",
      industry: "Maschinenbau",
      employees: "80",
      challenge: "Fehlende Integration zwischen Vertrieb und Produktion",
      result: "25% Reduktion der Durchlaufzeiten",
      duration: "10 Wochen"
    },
    {
      company: "GreenEnergy Solutions",
      industry: "Erneuerbare Energien",
      employees: "35",
      challenge: "Ineffiziente Projektabwicklung und Dokumentation",
      result: "50% schnellere Projektabwicklung",
      duration: "7 Wochen"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            Erfolgsgeschichten
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unsere Kunden sprechen für sich
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Entdecken Sie, wie deutsche KMUs durch unsere Digitalisierungslösungen 
            messbare Erfolge erzielen konnten.
          </p>
        </div>
      </section>

      {/* Main Success Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <Users className="h-10 w-10 text-red-600" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {mainStory.company}
            </CardTitle>
            <CardDescription className="text-lg">
              {mainStory.industry} • {mainStory.employees} Mitarbeiter • Projektzeitraum: {mainStory.duration}
            </CardDescription>
            <div className="flex justify-center space-x-4 mt-4">
              <Badge className="bg-green-100 text-green-800">
                {mainStory.results.profit}
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                {mainStory.results.revenue}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Quote */}
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <Quote className="h-8 w-8 text-red-600 mb-4" />
              <blockquote className="text-lg italic text-gray-700 mb-4">
                "{mainStory.quote}"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {mainStory.ceo.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{mainStory.ceo}</div>
                  <div className="text-sm text-gray-600">Geschäftsführer</div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {mainStory.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">{metric.value}</div>
                  <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  Die Herausforderung
                </h3>
                <p className="text-gray-600 leading-relaxed">{mainStory.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  Die PISTA-Lösung
                </h3>
                <p className="text-gray-600 leading-relaxed">{mainStory.solution}</p>
              </div>
            </div>

            <div className="text-center pt-6">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/contact">
                  Ähnliche Erfolge für mein Unternehmen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Additional Success Stories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Weitere Erfolgsgeschichten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{story.company}</CardTitle>
                  <CardDescription>
                    {story.industry} • {story.employees} Mitarbeiter
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Herausforderung:</h4>
                    <p className="text-sm text-gray-600">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ergebnis:</h4>
                    <p className="text-sm font-medium text-green-600">{story.result}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{story.duration}</span>
                    </Badge>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unsere Erfolgsbilanz
          </h2>
          <p className="text-xl text-gray-600">
            Zahlen, die für sich sprechen
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-gray-600">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">5.0/5</div>
            <div className="text-gray-600">Kundenbewertung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">90</div>
            <div className="text-gray-600">Tage bis Ergebnis</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-600">Kundenzufriedenheit</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Das könnte auch Ihre Geschichte sein
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Unternehmen transformieren und 
            messbare Erfolge erzielen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Kostenlose Beratung vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link to="/services">Unsere Methode kennenlernen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
