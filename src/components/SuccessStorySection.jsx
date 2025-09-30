import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Quote, Users } from 'lucide-react'

export function SuccessStorySection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const mainStory = {
    company: "Bavaria Heizungstechnik GmbH",
    industry: "SHK-Handwerk",
    ceo: "Zoran Pozderovic",
    duration: "8 Wochen",
    employees: "25",
    quote: "PISTA hat unseren SHK-Meisterbetrieb revolutioniert. Von manuellen Prozessen zu 6-stelligen Gewinnen - das hätten wir nie für möglich gehalten.",
    metrics: [
      { label: "Zeitersparnis", value: "40%", description: "bei der Angebotserstellung" },
      { label: "Umsatzsteigerung", value: "150%", description: "im ersten Jahr" },
      { label: "Kundenzufriedenheit", value: "95%", description: "positive Bewertungen" },
      { label: "Projektlaufzeit", value: "8 Wochen", description: "bis zur Vollimplementierung" }
    ]
  }

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
            Erfolgsgeschichte
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Unsere Kunden sprechen für sich
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie, wie deutsche KMUs durch unsere Digitalisierungslösungen 
            messbare Erfolge erzielen konnten.
          </p>
        </div>

        {/* Main Success Story */}
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 mb-16">
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
                6-stelliger Gewinn erreicht
              </Badge>
              <Badge className="bg-blue-100 text-blue-800">
                7-stelliger Umsatz generiert
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

            <div className="text-center pt-6">
              <Button 
                onClick={() => scrollToSection('#contact')}
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
              >
                Ähnliche Erfolge für mein Unternehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Unsere Erfolgsbilanz
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Zahlen, die für sich sprechen
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-gray-600">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">4.9/5</div>
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
      </div>
    </section>
  )
}
