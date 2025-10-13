import './App.css'
import { useState } from 'react'
import { ContactSection } from './components/ContactSection'
import CookieBanner from './components/CookieBanner';

function App() {
  const [employees, setEmployees] = useState(50)
  const [hourlyWage, setHourlyWage] = useState(35)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBudget, setSelectedBudget] = useState('')
  const [selectedEmployees, setSelectedEmployees] = useState('')
  const [selectedTimeframe, setSelectedTimeframe] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    privacy: false
  })
  const [isFormCompleted, setIsFormCompleted] = useState(false)
  const [validationErrors, setValidationErrors] = useState({
    email: '',
    phone: ''
  })
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)


  // E-Mail Validierung
  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
  }

  // Telefonnummer Validierung (nur Zahlen und optional + am Anfang)
  const validatePhone = (phone) => {
    const phoneRegex = /^(\+)?[0-9\s\-\(\)]+$/
    return phoneRegex.test(phone)
  }

  // Telefonnummer Input Handler (filtert ungültige Zeichen)
  const handlePhoneInput = (value) => {
    // Erlaube nur Zahlen, +, Leerzeichen, Bindestriche und Klammern
    const filteredValue = value.replace(/[^+0-9\s\-\(\)]/g, '')
    return filteredValue
  }

  const handleFormDataChange = (field, value) => {
    if (field === 'phone') {
      value = handlePhoneInput(value)
    }
    
    setFormData({...formData, [field]: value})
    
    // Validierung in Echtzeit
    if (field === 'email') {
      setValidationErrors(prev => ({
        ...prev,
        email: value && !validateEmail(value) ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' : ''
      }))
    }
    
    if (field === 'phone') {
      setValidationErrors(prev => ({
        ...prev,
        phone: value && !validatePhone(value) ? 'Bitte geben Sie eine gültige Telefonnummer ein' : ''
      }))
    }
  }

  const savedHours = Math.round(employees * 1.5)
  const yearlySavings = Math.round(savedHours * hourlyWage * 52)
  const additionalRevenue = Math.round(yearlySavings * 0.2)
  const totalBenefit = yearlySavings + additionalRevenue

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Gomme Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-base font-normal ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Problem</button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Lösung</button>
            <button onClick={() => scrollToSection('success')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Erfolg</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Preise</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kontakt</button>
            <button onClick={() => scrollToSection('calculator')} className="text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="7" y="8" width="2" height="8" fill="currentColor"/>
                <rect x="11" y="12" width="2" height="4" fill="currentColor"/>
                <rect x="15" y="6" width="2" height="10" fill="currentColor"/>
              </svg>
              <span>ROI Rechner</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Red Banner */}
      <div className="py-3 text-center text-white" style={{ backgroundColor: '#E4002B' }}>
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🏁</span>
            <span style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kostenlose Pole-Position-Beratung - Nur noch wenige Plätze frei!</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="text-center">
              <div className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>6</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Tage</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>14</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Stunden</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>32</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Minuten</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Auf der Überholspur zur digitalen Transformation
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            Wie ein Rennwagen auf der idealen Rennstrecke bringen wir Ihr Unternehmen mit Präzision und Geschwindigkeit ans Ziel. Strategische Digitalisierung für nachhaltigen Erfolg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              Kostenlose Beratung sichern
            </button>
            <button 
              onClick={() => scrollToSection('calculator')} 
              className="px-8 py-4 border-2 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              Einsparpotenzial berechnen
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Kennen Sie diese Herausforderungen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Viele mittelständische Unternehmen stehen vor ähnlichen Problemen bei der Digitalisierung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-4xl mb-4">🚧</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Stau in der IT-Landschaft
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Verschiedene Systeme blockieren sich gegenseitig. Wie im Verkehrsstau kosten doppelte Dateneingaben und ineffiziente Prozesse wertvolle Zeit und Geld.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Fahren ohne Navigationssystem
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Ohne klare Digitalisierungs-Roadmap werden IT-Projekte zu kostspieligen Umwegen. Technologie wird implementiert, ohne das Ziel zu kennen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Endlos-Rennen ohne Ziellinie
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                IT-Projekte ohne klares Finish: Budgets werden überschritten, Deadlines verpasst und am Ende funktioniert das System nicht wie gewünscht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Die PISTA-Rennstrecke: Präzise. Schnell. Zielführend.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie auf einer perfekt geplanten Rennstrecke führen wir Sie mit maximaler Geschwindigkeit und Präzision zum Ziel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Streckenanalyse & Routenplanung
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennfahrer die Strecke studiert, analysieren wir Ihre Prozesse und planen die optimale Route zur digitalen Transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Vollgas-Umsetzung
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Mit der Präzision eines Formel-1-Teams setzen wir Ihre Lösung um. Klare Meilensteine, perfektes Timing und keine Überraschungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Feintuning & Performance
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennwagen nach dem Rennen optimiert wird, verfeinern wir kontinuierlich Ihre Systeme für maximale Performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section - Rennstrecken Timeline */}
      <section id="success" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Erfolgsgeschichte: Bavaria Heizungstechnik
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie wir einem Familienunternehmen zu 40% mehr Effizienz verholfen haben
            </p>
          </div>

          {/* Racing Track Timeline */}
          <div className="bg-white rounded-lg p-8 shadow-sm overflow-hidden">
            <div className="relative">
              {/* Start: Die Herausforderung */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                    🏁
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Die Herausforderung
                  </h3>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-center" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Bavaria Heizungstechnik, ein Familienunternehmen mit 45 Mitarbeitern, kämpfte mit veralteten Systemen. Angebote wurden noch in Excel erstellt, die Lagerverwaltung lief über Zettelwirtschaft und Kundendaten waren über verschiedene Systeme verstreut.
                </p>
              </div>

              {/* Racing Track with Milestones */}
              <div className="relative mb-12">
                {/* Track Background */}
                <div className="relative h-32 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(90deg, #f3f4f6 0%, #E4002B 100%)' }}>
                  {/* Track Lines */}
                  <div className="absolute top-4 left-0 right-0 h-1 bg-white opacity-50"></div>
                  <div className="absolute bottom-4 left-0 right-0 h-1 bg-white opacity-50"></div>
                  
                  {/* Racing Car */}
                  <div className="absolute top-1/2 left-8 -translate-y-1/2 w-16 h-16 bg-contain bg-no-repeat" style={{ backgroundImage: 'url("https://www.pista.consulting/wp-content/uploads/2023/07/Pista-Icon-Red.svg")' }}></div>

                  {/* Milestones */}
                  <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                      1
                    </div>
                    <p className="text-sm text-white" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Analyse</p>
                  </div>
                  <div className="absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                      2
                    </div>
                    <p className="text-sm text-white" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Konzept</p>
                  </div>
                  <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-2" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                      3
                    </div>
                    <p className="text-sm text-white" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Umsetzung</p>
                  </div>
                </div>
              </div>

              {/* Finish: Das Ergebnis */}
              <div className="mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                    🏁
                  </div>
                  <h3 className="text-2xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Das Ergebnis
                  </h3>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto text-center" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Durch die Implementierung von Odoo als zentrales ERP-System konnten alle Prozesse digitalisiert und automatisiert werden. Bavaria Heizungstechnik erzielte eine Effizienzsteigerung von 40%, reduzierte Fehlerquoten und verbesserte die Kundenzufriedenheit erheblich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - One-time */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihre Pole Position: Schnell. Präzise. Erfolgreich.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Einmalige Investition für maximale Performance und nachhaltiges Wachstum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PISTA Starter */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-200 hover:border-red-500 transition-colors duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏁 PISTA Starter</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€12.999</p>
              <p className="text-gray-500 mb-6">einmalig</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für Unternehmen bis 25 Mitarbeiter</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Umfassende Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Vollständige ERP-Implementierung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Datenintegration</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Prozessautomatisierung</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Mehr erfahren</button>
            </div>

            {/* PISTA Professional */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>🏆 POLE POSITION</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏆 PISTA Professional</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€24.999</p>
              <p className="text-gray-500 mb-6">einmalig</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für wachsende Unternehmen 25-100 Mitarbeiter</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Alles aus Starter-Paket</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Erweiterte Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Multi-Standort-Setup</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>API-Integrationen</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-red-500 text-white hover:bg-red-600" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Jetzt starten</button>
            </div>

            {/* PISTA Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-200 hover:border-red-500 transition-colors duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏎️ PISTA Enterprise</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€49.999</p>
              <p className="text-gray-500 mb-6">einmalig</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für Unternehmen ab 100 Mitarbeitern</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Alles aus Professional-Paket</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>C-Level Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Vollständige Systemlandschaft-Integration</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Dedicated Project Manager</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Mehr erfahren</button>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Pricing Section */}
      <section id="monthly-pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Monatliche Betreuung: Kontinuierlich auf der Überholspur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Flexible monatliche Pakete für nachhaltige digitale Transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PISTA Start */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-200 hover:border-red-500 transition-colors duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏁 PISTA Start</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€1.000</p>
              <p className="text-gray-500 mb-6">pro Monat</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für Unternehmen bis 25 Mitarbeiter</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Umfassende Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Vollständige ERP-Implementierung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Datenintegration</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Prozessautomatisierung</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Mehr erfahren</button>
            </div>

            {/* PISTA Professional */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-500 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>🏆 POLE POSITION</div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏆 PISTA Professional</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€2.500</p>
              <p className="text-gray-500 mb-6">pro Monat</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für wachsende Unternehmen 25-100 Mitarbeiter</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Alles aus Starter-Paket</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Erweiterte Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Multi-Standort-Setup</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>API-Integrationen</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-red-500 text-white hover:bg-red-600" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Jetzt starten</button>
            </div>

            {/* PISTA Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-gray-200 hover:border-red-500 transition-colors duration-300 flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>🏎️ PISTA Enterprise</h3>
              <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€5.000</p>
              <p className="text-gray-500 mb-6">pro Monat</p>
              <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Für Unternehmen ab 100 Mitarbeitern</p>
              <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Alles aus Professional-Paket</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>C-Level Strategieberatung</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Vollständige Systemlandschaft-Integration</li>
                <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Dedicated Project Manager</li>
              </ul>
              <button className="w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-gray-100 text-gray-800 hover:bg-gray-200" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Mehr erfahren</button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihr Performance-Check: Wie schnell werden Sie?
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Berechnen Sie in Sekunden, wie viel Geschwindigkeit und Effizienz Sie gewinnen können
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="employees" className="block text-gray-700 text-sm font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Anzahl der Mitarbeiter: {employees}
                </label>
                <input
                  type="range"
                  id="employees"
                  min="1" max="500"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <label htmlFor="hourlyWage" className="block text-gray-700 text-sm font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Durchschnittlicher Stundenlohn: €{hourlyWage}
                </label>
                <input
                  type="range"
                  id="hourlyWage"
                  min="10" max="100"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Ihr geschätztes Einsparpotenzial:
              </h3>
              <div className="text-5xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                €{totalBenefit.toLocaleString()}
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                (Jährliche Kosteneinsparungen und zusätzlicher Umsatz)
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection setShowDatenschutz={setShowDatenschutz} />

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Startschuss für Ihre Überholspur
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Kostenlose Erstberatung in 4 einfachen Schritten. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            {isFormCompleted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.
                </p>
                <div className="border-t border-gray-200 pt-8">
                  <button 
                    onClick={() => { setIsFormCompleted(false); setCurrentStep(1); }}
                    className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                  >
                    Neue Anfrage starten
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                      1. Ihr Budget
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button 
                        onClick={() => { setSelectedBudget('10.000 - 25.000 €'); setCurrentStep(2) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedBudget === '10.000 - 25.000 €' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        10.000 - 25.000 €
                      </button>
                      <button 
                        onClick={() => { setSelectedBudget('25.000 - 50.000 €'); setCurrentStep(2) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedBudget === '25.000 - 50.000 €' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        25.000 - 50.000 €
                      </button>
                      <button 
                        onClick={() => { setSelectedBudget('50.000 € +'); setCurrentStep(2) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedBudget === '50.000 € +' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        50.000 € +
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                      2. Anzahl der Mitarbeiter
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button 
                        onClick={() => { setSelectedEmployees('1-25'); setCurrentStep(3) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedEmployees === '1-25' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        1-25
                      </button>
                      <button 
                        onClick={() => { setSelectedEmployees('25-100'); setCurrentStep(3) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedEmployees === '25-100' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        25-100
                      </button>
                      <button 
                        onClick={() => { setSelectedEmployees('100+'); setCurrentStep(3) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedEmployees === '100+' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        100+
                      </button>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(1)}
                      className="mt-4 text-gray-500 hover:text-gray-700"
                      style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                    >
                      Zurück
                    </button>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                      3. Zeitrahmen
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button 
                        onClick={() => { setSelectedTimeframe('1-3 Monate'); setCurrentStep(4) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedTimeframe === '1-3 Monate' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        1-3 Monate
                      </button>
                      <button 
                        onClick={() => { setSelectedTimeframe('3-6 Monate'); setCurrentStep(4) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedTimeframe === '3-6 Monate' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        3-6 Monate
                      </button>
                      <button 
                        onClick={() => { setSelectedTimeframe('6+ Monate'); setCurrentStep(4) }}
                        className={`px-6 py-3 border-2 rounded-lg font-semibold ${selectedTimeframe === '6+ Monate' ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-gray-700 hover:bg-gray-100'} transition-colors duration-300`}
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        6+ Monate
                      </button>
                    </div>
                    <button 
                      onClick={() => setCurrentStep(2)}
                      className="mt-4 text-gray-500 hover:text-gray-700"
                      style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                    >
                      Zurück
                    </button>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                      4. Ihre Kontaktdaten
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          value={formData.name}
                          onChange={(e) => handleFormDataChange('name', e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${validationErrors.email ? 'border-red-500' : ''}`}
                          value={formData.email}
                          onChange={(e) => handleFormDataChange('email', e.target.value)}
                        />
                        {validationErrors.email && <p className="text-red-500 text-xs italic mt-1">{validationErrors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                          Telefonnummer
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${validationErrors.phone ? 'border-red-500' : ''}`}
                          value={formData.phone}
                          onChange={(e) => handleFormDataChange('phone', e.target.value)}
                        />
                        {validationErrors.phone && <p className="text-red-500 text-xs italic mt-1">{validationErrors.phone}</p>}
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="privacy"
                          className="mr-2 leading-tight"
                          checked={formData.privacy}
                          onChange={(e) => handleFormDataChange('privacy', e.target.checked)}
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                          Ich stimme der <button onClick={() => setShowDatenschutz(true)} className="text-blue-600 hover:underline">Datenschutzerklärung</button> zu.
                        </label>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <button 
                        onClick={() => setCurrentStep(3)}
                        className="text-gray-500 hover:text-gray-700"
                        style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
                      >
                        Zurück
                      </button>
                      <button 
                        onClick={() => setIsFormCompleted(true)}
                        className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                        disabled={!formData.name || !formData.email || !formData.phone || !formData.privacy || validationErrors.email || validationErrors.phone}
                      >
                        Anfrage senden
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <a href="#" onClick={() => setShowImpressum(true)} className="text-gray-300 hover:text-white mx-3" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Impressum</a>
            <a href="#" onClick={() => setShowDatenschutz(true)} className="text-gray-300 hover:text-white mx-3" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Datenschutz</a>
          </div>
          <p className="text-gray-400" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            © {new Date().getFullYear()} PISTA Consulting. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

      {showImpressum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setShowImpressum(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            
            <div className="pr-8">
              <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Impressum
              </h1>
              
              <div className="space-y-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Angaben gemäß § 5 TMG:
                  </h2>
                  <p className="text-gray-700">
                    PISTA Consulting GmbH<br/>
                    Herterichstraße 174<br/>
                    81476 München
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Vertreten durch:
                  </h2>
                  <p className="text-gray-700">
                    Lazaros Doris
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Kontakt:
                  </h2>
                  <p className="text-gray-700">
                    E-Mail: <a href="mailto:info@pista.consulting" className="text-blue-600 hover:underline">info@pista.consulting</a><br/>

                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Handelsregister:
                  </h2>
                  <p className="text-gray-700">
                    HRB 289101 (Amtsgericht München)

                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Umsatzsteuer:
                  </h2>
                  <p className="text-gray-700">
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
                    DE 367 614 650
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Streitschlichtung
                  </h2>
                  <p className="text-gray-700">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Haftung für Inhalte
                  </h2>
                  <p className="text-gray-700">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Haftung für Links
                  </h2>
                  <p className="text-gray-700">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Urheberrecht
                  </h2>
                  <p className="text-gray-700">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDatenschutz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setShowDatenschutz(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            
            <div className="pr-8">
              <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Datenschutzerklärung
              </h1>
              
              <div className="space-y-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Datenschutzerklärung
                  </h2>
                  <p className="text-gray-700">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Cookies
                  </h2>
                  <p className="text-gray-700">
                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Server-Log-Dateien
                  </h2>
                  <p className="text-gray-700">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Kontaktformular
                  </h2>
                  <p className="text-gray-700">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Datenweitergabe bei Vertragsschluss für Dienstleistungen und digitale Inhalte
                  </h2>
                  <p className="text-gray-700">
                    Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    SSL-Verschlüsselung
                  </h2>
                  <p className="text-gray-700">
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Wenn die SSL Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Recht auf Auskunft, Löschung, Sperrung
                  </h2>
                  <p className="text-gray-700">
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <CookieBanner />
    </div>
  )
}

export default App

