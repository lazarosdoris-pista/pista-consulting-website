import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Users, TrendingUp, Clock } from 'lucide-react'

export function ProblemSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kennen Sie diese Herausforderungen?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diese Probleme kosten deutsche KMUs täglich wertvolle Zeit und Ressourcen
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-red-600" />
                </div>
                <span>Chaos in der IT-Landschaft</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                5+ verschiedene Software-Lösungen, die nicht miteinander sprechen. 
                Doppelerfassung, Excel-Listen und manuelle Prozesse überall.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-red-600" />
                </div>
                <span>Fehlende Digitalisierungsstrategie</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ohne klare Strategie werden IT-Investitionen zur Kostenfalle. 
                Unkoordinierte Einzellösungen führen zu Ineffizienz und Mehrkosten.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-red-600" />
                </div>
                <span>Endlose IT-Projekte</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                12-18 Monate Implementierung ohne klare Erfolgsmessung. 
                Berater verschwinden nach Go-Live und lassen Sie allein.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-gray-900 mb-6">
            <strong>Das Ergebnis:</strong> Ihre Konkurrenz überholt Sie, während Sie noch mit veralteten Systemen kämpfen.
          </p>
          <Button 
            onClick={() => scrollToSection('#solution')}
            size="lg" 
            className="bg-red-600 hover:bg-red-700"
          >
            Ich will das ändern - Lösung zeigen
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
