import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, TrendingUp, Star } from 'lucide-react'

export function SolutionSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Es gibt einen besseren Weg
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Strategieberatung & Digitalisierung</strong> aus einer Hand. 
            <strong>Maßgeschneiderte Lösungen</strong> für Ihr Unternehmen. 
            <strong>90 Tage</strong> bis zu messbaren Ergebnissen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategieberatung</h3>
            <p className="text-gray-600">
              Individuelle Digitalisierungsstrategie für Ihr Unternehmen
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Kosteneffizient</h3>
            <p className="text-gray-600">
              Maximale Effizienz bei optimalen Kosten
            </p>
          </div>
          <div className="text-center group hover:scale-105 transition-transform">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Star className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Messbare Ergebnisse</h3>
            <p className="text-gray-600">
              Klare KPIs und regelmäßige Erfolgsmessung
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => scrollToSection('#services')}
            size="lg" 
            className="bg-red-600 hover:bg-red-700"
          >
            Mehr über unsere Methode erfahren
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
