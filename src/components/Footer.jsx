import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg leading-none">PISTA</span>
                <span className="text-xs text-gray-300 leading-none">Consulting</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professionelle Digitalisierung für deutsche KMUs. Wir helfen Ihnen dabei, 
              Ihre Geschäftsprozesse zu optimieren und messbare Ergebnisse zu erzielen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@pista.consulting</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>München, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Erfolgsgeschichten
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Preise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Strategieberatung</li>
              <li className="text-gray-300">ERP-Integration</li>
              <li className="text-gray-300">Prozessoptimierung</li>
              <li className="text-gray-300">Digitale Transformation</li>
              <li className="text-gray-300">Laufende Betreuung</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 PISTA Consulting. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Datenschutz
            </Link>
            <Link to="/imprint" className="text-gray-400 hover:text-white text-sm transition-colors">
              Impressum
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
