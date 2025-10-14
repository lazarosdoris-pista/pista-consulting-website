import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export function HeroSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100">
              ✓ Kostenlose Erstberatung verfügbar
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Effizienz steigern mit der{' '}
              <span className="text-red-600">richtigen Digitalisierung</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professionelle Strategieberatung und ERP-Integration für deutsche KMUs. 
              Messbare Ergebnisse in 90 Tagen – ohne endlose Projekte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('#contact')}
                size="lg" 
                className="bg-red-600 hover:bg-red-700"
              >
                Kostenlose Beratung vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => scrollToSection('#services')}
                variant="outline" 
                size="lg"
              >
                Leistungen entdecken
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>100% kostenlos</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Keine Verpflichtung</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Messbare Ergebnisse</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5.0/5</div>
                  <div className="text-sm text-gray-600">Kundenbewertung</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Erfolgreiche Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">90</div>
                  <div className="text-sm text-gray-600">Tage bis Ergebnis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Support verfügbar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
