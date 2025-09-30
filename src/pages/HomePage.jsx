import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, TrendingUp, Users, Clock, Star } from 'lucide-react'
import { ROICalculator } from '../components/ROICalculator'

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
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
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link to="/contact">
                    Kostenlose Beratung vereinbaren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Leistungen entdecken</Link>
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
                    <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
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

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
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
            <Card className="border-l-4 border-l-red-500">
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

            <Card className="border-l-4 border-l-red-500">
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

            <Card className="border-l-4 border-l-red-500">
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
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/services">
                Ich will das ändern - Lösung zeigen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
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
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategieberatung</h3>
              <p className="text-gray-600">
                Individuelle Digitalisierungsstrategie für Ihr Unternehmen
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kosteneffizient</h3>
              <p className="text-gray-600">
                Maximale Effizienz bei optimalen Kosten
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Messbare Ergebnisse</h3>
              <p className="text-gray-600">
                Klare KPIs und regelmäßige Erfolgsmessung
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/services">
                Mehr über unsere Methode erfahren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ihr persönliches Einsparpotenzial
            </h2>
            <p className="text-xl text-gray-600">
              Berechnen Sie Ihre mögliche Ersparnis in 30 Sekunden
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem kostenlosen Gespräch herausfinden, 
            wie wir Ihr Unternehmen digitalisieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Kostenlose Beratung vereinbaren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
              <Link to="/success-stories">Erfolgsgeschichten ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
