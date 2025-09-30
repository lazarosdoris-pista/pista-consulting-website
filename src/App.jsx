import './App.css'
import { useState } from 'react'

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
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
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-sm sm:text-base font-normal ml-1 sm:ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-gray-900 text-sm xl:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Problem</button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-gray-900 text-sm xl:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Lösung</button>
            <button onClick={() => scrollToSection('success')} className="text-gray-700 hover:text-gray-900 text-sm xl:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Erfolg</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900 text-sm xl:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Preise</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 text-sm xl:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kontakt</button>
            <button onClick={() => scrollToSection('calculator')} className="text-white px-3 xl:px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2 text-sm xl:text-base" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-4 xl:h-4">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="7" y="8" width="2" height="8" fill="currentColor"/>
                <rect x="11" y="12" width="2" height="4" fill="currentColor"/>
                <rect x="15" y="6" width="2" height="10" fill="currentColor"/>
              </svg>
              <span className="hidden xl:inline">ROI Rechner</span>
              <span className="xl:hidden">ROI</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => scrollToSection('contact')} 
            className="lg:hidden text-white px-3 py-2 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
          >
            Kontakt
          </button>
        </div>
      </header>

      {/* Red Banner */}
      <div className="py-2 sm:py-3 text-center text-white px-4" style={{ backgroundColor: '#E4002B' }}>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl">🏁</span>
            <span className="text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <span className="hidden sm:inline">Kostenlose Pole-Position-Beratung - Nur noch wenige Plätze frei!</span>
              <span className="sm:hidden">Kostenlose Beratung - Wenige Plätze frei!</span>
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>6</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Tage</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>14</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Std</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>32</div>
              <div className="text-xs" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Auf der Überholspur zur digitalen Transformation
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            Wie ein Rennwagen auf der idealen Rennstrecke bringen wir Ihr Unternehmen mit Präzision und Geschwindigkeit ans Ziel. Strategische Digitalisierung für nachhaltigen Erfolg.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg sm:max-w-none mx-auto px-4">
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity w-full sm:w-auto"
              style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              <span className="hidden sm:inline">Kostenlose Beratung sichern</span>
              <span className="sm:hidden">Kostenlose Beratung</span>
            </button>
            <button 
              onClick={() => scrollToSection('calculator')} 
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
              style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              <span className="hidden sm:inline">Einsparpotenzial berechnen</span>
              <span className="sm:hidden">ROI berechnen</span>
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Kennen Sie diese Herausforderungen?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Viele mittelständische Unternehmen stehen vor ähnlichen Problemen bei der Digitalisierung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-3xl sm:text-4xl mb-4">🚧</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Stau in der IT-Landschaft
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Verschiedene Systeme blockieren sich gegenseitig. Wie im Verkehrsstau kosten doppelte Dateneingaben und ineffiziente Prozesse wertvolle Zeit und Geld.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-l-4" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-3xl sm:text-4xl mb-4">🗺️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Fahren ohne Navigationssystem
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Ohne klare Digitalisierungs-Roadmap werden IT-Projekte zu kostspieligen Umwegen. Technologie wird implementiert, ohne das Ziel zu kennen.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-l-4 md:col-span-2 lg:col-span-1" style={{ borderLeftColor: '#E4002B' }}>
              <div className="text-3xl sm:text-4xl mb-4">🏁</div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Endlos-Rennen ohne Ziellinie
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                IT-Projekte ohne klares Finish: Budgets werden überschritten, Deadlines verpasst und am Ende funktioniert das System nicht wie gewünscht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Die PISTA-Rennstrecke: Präzise. Schnell. Zielführend.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie auf einer perfekt geplanten Rennstrecke führen wir Sie mit maximaler Geschwindigkeit und Präzision zum Ziel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Streckenanalyse & Routenplanung
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennfahrer die Strecke studiert, analysieren wir Ihre Prozesse und planen die optimale Route zur digitalen Transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Vollgas-Umsetzung
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Mit der Präzision eines Formel-1-Teams setzen wir Ihre Lösung um. Klare Meilensteine, perfektes Timing und keine Überraschungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Feintuning & Performance
              </h3>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennwagen nach dem Rennen optimiert wird, verfeinern wir kontinuierlich Ihre Systeme für maximale Performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section - Rennstrecken Timeline */}
      <section id="success" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Erfolgsgeschichte: Bavaria Heizungstechnik
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie wir einem Familienunternehmen zu 40% mehr Effizienz verholfen haben
            </p>
          </div>

          {/* Racing Track Timeline */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm overflow-hidden">
            <div className="relative">
              {/* Start: Die Herausforderung */}
              <div className="mb-8 sm:mb-12">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-2 sm:mb-0 sm:mr-4" style={{ backgroundColor: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                    🏁
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Die Herausforderung
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto text-center px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Bavaria Heizungstechnik, ein Familienunternehmen mit 45 Mitarbeitern, kämpfte mit veralteten Systemen. Angebote wurden noch in Excel erstellt, die Lagerverwaltung lief über Zettelwirtschaft und Kundendaten waren über verschiedene Systeme verstreut.
                </p>
              </div>

              {/* Racing Track with Milestones */}
              <div className="relative mb-8 sm:mb-12">
                {/* Track Background */}
                <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden" style={{ background: 'linear-gradient(90deg, #f3f4f6 0%, #E4002B 100%)' }}>
                  {/* Track Lines */}
                  <div className="absolute top-4 left-0 right-0 h-1 bg-white opacity-50"></div>
                  <div className="absolute bottom-4 left-0 right-0 h-1 bg-white opacity-50"></div>
                  
                  {/* Racing Car */}
                  <div className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 text-3xl sm:text-4xl" style={{ transform: 'translateY(-50%) scaleX(-1)' }}>
                    🏎️
                  </div>

                  {/* Milestone Flags */}
                  <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>ERP</div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>AUTOMATION</div>
                  </div>
                  <div className="absolute top-0 left-3/4 transform -translate-x-1/2">
                    <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>DIGITAL</div>
                  </div>
                  
                  {/* Finish Line */}
                  <div className="absolute top-0 right-4 sm:right-8">
                    <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🏆</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>FINISH</div>
                  </div>
                </div>
              </div>

              {/* Solution Points */}
              <div className="mb-8 sm:mb-12">
                <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Unsere Rennstrecke zum Erfolg
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl mr-2 sm:mr-3" style={{ color: '#E4002B' }}>🏁</div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>ERP-Integration</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Alle Systeme vereint</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl mr-2 sm:mr-3" style={{ color: '#E4002B' }}>⚡</div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Automatisierung</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Prozesse beschleunigt</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl sm:text-2xl mr-2 sm:mr-3" style={{ color: '#E4002B' }}>📱</div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Mobile Lösung</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Technik vor Ort</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Results - Speedometer Style */}
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
                <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Performance-Ergebnisse nach 6 Monaten
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E4002B"
                          strokeWidth="2"
                          strokeDasharray="40, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>40%</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Zeitersparnis bei Angeboten</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E4002B"
                          strokeWidth="2"
                          strokeDasharray="30, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>30%</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Weniger Fehler in der Lagerverwaltung</div>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E4002B"
                          strokeWidth="2"
                          strokeDasharray="20, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>20%</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Schnellere Kundenkommunikation</div>
                  </div>

                  <div className="text-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E4002B"
                          strokeWidth="2"
                          strokeDasharray="40, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-base sm:text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>40%</span>
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Gesamt-Effizienzsteigerung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihre Pole Position: Schnell. Präzise. Erfolgreich.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Einmalige Investition für maximale Performance - wie ein Rennwagen für die Überholspur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* PISTA Starter */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏁 PISTA Starter
              </h3>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €12.999
              </div>
              <p className="text-gray-500 mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-4 sm:mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-sm sm:text-base text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für Unternehmen bis 25 Mitarbeiter
                </p>
                <p className="text-sm sm:text-base text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Ersetzt 3-5 separate Software-Lizenzen
                </p>
                 <p className="text-white invisible">Placeholder</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Umfassende Strategieberatung & Digitalisierungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Vollständige ERP-Implementierung (6-8 Wochen)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Datenintegration aus bestehenden Systemen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Prozessautomatisierung (5 Kern-Workflows)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Professionelle Betreuung
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 sm:py-3 border-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Mehr erfahren
                </button>
              </div>
            </div>

            {/* PISTA Professional */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border-2 flex flex-col" style={{ borderColor: '#E4002B' }}>
              <div className="text-center mb-3 sm:mb-4">
                <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-white rounded-sm" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                  🏆 POLE POSITION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏆 PISTA Professional
              </h3>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €24.999
              </div>
              <p className="text-gray-500 mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-4 sm:mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-sm sm:text-base text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für wachsende Unternehmen 25-100 Mitarbeiter
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Weniger als 2 Jahre typische ERP-Lizenzkosten
                </p>
                <p className="text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  Optimale Kosten-Nutzen-Relation
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Alles aus Starter-Paket</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Erweiterte Strategieberatung & Roadmap-Entwicklung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Multi-Standort-Setup & Berechtigungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">API-Integrationen (E-Commerce, Buchhaltung, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Professionelle Betreuung
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 sm:py-3 text-white rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Jetzt starten
                </button>
              </div>
            </div>

            {/* PISTA Enterprise */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm flex flex-col md:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏎️ PISTA Enterprise
              </h3>
              <div className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €49.999
              </div>
              <p className="text-gray-500 mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-4 sm:mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-sm sm:text-base text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für Unternehmen ab 100 Mitarbeitern
                </p>
                <p className="text-sm sm:text-base text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Bruchteil der Kosten einer SAP-Implementierung
                </p>
                <p className="text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  Maximale Effizienz & ROI
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Alles aus Professional-Paket</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">C-Level Strategieberatung & Transformation Management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Vollständige Systemlandschaft-Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">Dedicated Project Manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-sm sm:text-base">+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Premium-Support inklusive
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 sm:py-3 border-2 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihr Performance-Check: Wie schnell werden Sie?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Berechnen Sie in Sekunden, wie viel Geschwindigkeit und Effizienz Sie gewinnen können
            </p>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <label htmlFor="employees" className="block text-gray-700 text-sm sm:text-base font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
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
                <label htmlFor="hourlyWage" className="block text-gray-700 text-sm sm:text-base font-bold mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
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

            <div className="mt-6 sm:mt-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Ihr geschätztes Einsparpotenzial:
              </h3>
              <div className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                €{totalBenefit.toLocaleString()}
              </div>
              <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                (Jährliche Kosteneinsparungen und zusätzlicher Umsatz)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              <div>
                {currentStep === 1 && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Schritt 1 von 4</h4>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>IT-Budget</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>25%</p>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>abgeschlossen</p>
                      </div>
                    </div>
                    <p className="mb-4 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wie hoch ist Ihr jährliches IT-Budget? *</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <button type="button" onClick={() => setSelectedBudget('< 50.000€')} className={`p-4 border rounded-lg text-left ${selectedBudget === '< 50.000€' ? 'bg-gray-800 text-white' : 'bg-white'}`}>&lt; 50.000€</button>
                      <button type="button" onClick={() => setSelectedBudget('50.000€ - 100.000€')} className={`p-4 border rounded-lg text-left ${selectedBudget === '50.000€ - 100.000€' ? 'bg-gray-800 text-white' : 'bg-white'}`}>50.000€ - 100.000€</button>
                      <button type="button" onClick={() => setSelectedBudget('100.000€ - 250.000€')} className={`p-4 border rounded-lg text-left ${selectedBudget === '100.000€ - 250.000€' ? 'bg-gray-800 text-white' : 'bg-white'}`}>100.000€ - 250.000€</button>
                      <button type="button" onClick={() => setSelectedBudget('> 250.000€')} className={`p-4 border rounded-lg text-left ${selectedBudget === '> 250.000€' ? 'bg-gray-800 text-white' : 'bg-white'}`}>&gt; 250.000€</button>
                    </div>
                    <div className="flex justify-end">
                      <button type="button" onClick={() => setCurrentStep(2)} disabled={!selectedBudget} className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Weiter →</button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Schritt 2 von 4</h4>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Unternehmensgröße</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>50%</p>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>abgeschlossen</p>
                      </div>
                    </div>
                    <p className="mb-4 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wie viele Mitarbeiter hat Ihr Unternehmen? *</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <button type="button" onClick={() => setSelectedEmployees('1-25')} className={`p-4 border rounded-lg text-left ${selectedEmployees === '1-25' ? 'bg-gray-800 text-white' : 'bg-white'}`}>1-25</button>
                      <button type="button" onClick={() => setSelectedEmployees('26-100')} className={`p-4 border rounded-lg text-left ${selectedEmployees === '26-100' ? 'bg-gray-800 text-white' : 'bg-white'}`}>26-100</button>
                      <button type="button" onClick={() => setSelectedEmployees('101-500')} className={`p-4 border rounded-lg text-left ${selectedEmployees === '101-500' ? 'bg-gray-800 text-white' : 'bg-white'}`}>101-500</button>
                      <button type="button" onClick={() => setSelectedEmployees('> 500')} className={`p-4 border rounded-lg text-left ${selectedEmployees === '> 500' ? 'bg-gray-800 text-white' : 'bg-white'}`}>&gt; 500</button>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(1)} className="px-6 py-3 border-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Zurück</button>
                      <button type="button" onClick={() => setCurrentStep(3)} disabled={!selectedEmployees} className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Weiter →</button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Schritt 3 von 4</h4>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Zeitrahmen</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>75%</p>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>abgeschlossen</p>
                      </div>
                    </div>
                    <p className="mb-4 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wann möchten Sie mit der Digitalisierung starten? *</p>
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      <button type="button" onClick={() => setSelectedTimeframe('Sofort')} className={`p-4 border rounded-lg text-left ${selectedTimeframe === 'Sofort' ? 'bg-gray-800 text-white' : 'bg-white'}`}>Sofort</button>
                      <button type="button" onClick={() => setSelectedTimeframe('In den nächsten 3 Monaten')} className={`p-4 border rounded-lg text-left ${selectedTimeframe === 'In den nächsten 3 Monaten' ? 'bg-gray-800 text-white' : 'bg-white'}`}>In den nächsten 3 Monaten</button>
                      <button type="button" onClick={() => setSelectedTimeframe('In den nächsten 6 Monaten')} className={`p-4 border rounded-lg text-left ${selectedTimeframe === 'In den nächsten 6 Monaten' ? 'bg-gray-800 text-white' : 'bg-white'}`}>In den nächsten 6 Monaten</button>
                      <button type="button" onClick={() => setSelectedTimeframe('Nächstes Jahr')} className={`p-4 border rounded-lg text-left ${selectedTimeframe === 'Nächstes Jahr' ? 'bg-gray-800 text-white' : 'bg-white'}`}>Nächstes Jahr</button>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(2)} className="px-6 py-3 border-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Zurück</button>
                      <button type="button" onClick={() => setCurrentStep(4)} disabled={!selectedTimeframe} className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Weiter →</button>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h4 className="text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Schritt 4 von 4</h4>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kontaktdaten</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold" style={{ color: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>100%</p>
                        <p className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>abgeschlossen</p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input type="text" id="name" required className="w-full p-3 border rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          className={`w-full p-3 border rounded-lg ${validationErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.email} 
                          onChange={(e) => handleFormDataChange('email', e.target.value)}
                          placeholder="ihre.email@unternehmen.de"
                        />
                        {validationErrors.email && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          required 
                          className={`w-full p-3 border rounded-lg ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                          value={formData.phone} 
                          onChange={(e) => handleFormDataChange('phone', e.target.value)}
                          placeholder="+49 123 456 789"
                        />
                        {validationErrors.phone && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start mb-6">
                      <input type="checkbox" id="privacy" required className="h-4 w-4 text-red-600 border-gray-300 rounded mt-1" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">Ich akzeptiere die <span className="text-red-500 cursor-pointer hover:underline" onClick={() => setShowPrivacyPolicy(true)}>Datenschutzerklärung</span> und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *</label>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(3)} className="px-6 py-3 border-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors" style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Zurück</button>
                      <button type="button" onClick={async () => {
                        try {
                          const response = await fetch('https://formsubmit.co/ajax/lazaros.doris@live.de', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                            },
                            body: JSON.stringify({
                              name: formData.name,
                              email: formData.email,
                              phone: formData.phone,
                              budget: selectedBudget,
                              employees: selectedEmployees,
                              timeline: selectedTimeframe,
                              _subject: 'Neue Anfrage von Pista Consulting Website',
                              _template: 'table',
                              _captcha: 'false'
                            })
                          });
                          
                          if (response.ok) {
                            setIsFormCompleted(true);
                          } else {
                            alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
                          }
                        } catch (error) {
                          alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
                        }
                      }} disabled={!formData.name || !formData.email || !formData.phone || !formData.privacy || validationErrors.email || validationErrors.phone || !validateEmail(formData.email) || !validatePhone(formData.phone)} className="px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>Anfrage senden</button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F8F8] text-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-sm sm:text-base font-normal ml-1 sm:ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
            <p className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Auf der Überholspur zur digitalen Transformation.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Navigation</h4>
            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              <ul className="space-y-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li><button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-gray-900">Problem</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-gray-900">Lösung</button></li>
                <li><button onClick={() => scrollToSection('success')} className="text-gray-700 hover:text-gray-900">Erfolg</button></li>
              </ul>
              <ul className="space-y-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li><button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900">Preise</button></li>
                <li><button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-gray-900">ROI Rechner</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900">Kontakt</button></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Rechtliches</h4>
            <ul className="space-y-2 text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li><button onClick={() => setShowImpressum(true)} className="text-gray-700 hover:text-gray-900">Impressum</button></li>
                  <li><button onClick={() => setShowDatenschutz(true)} className="text-gray-700 hover:text-gray-900">Datenschutz</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Kontakt</h4>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <li>Pista Consulting GmbH</li>
              <li>Herterichstraße 174</li>
              <li>81476 München</li>
              <li><a href="mailto:info@pista.consulting" className="text-gray-700 hover:text-gray-900">info@pista.consulting</a></li>

            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-xs sm:text-sm" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
          © {new Date().getFullYear()} PISTA consulting. Alle Rechte vorbehalten.
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button 
              onClick={() => setShowImpressum(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            
            <div className="pr-4 sm:pr-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Impressum
              </h1>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Angaben gemäß § 5 DDG:
                  </h2>
                  <p className="text-gray-700">
                    Pista Consulting GmbH<br/>
                    Herterichstraße 174<br/>
                    81476 München
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Vertreten durch:
                  </h2>
                  <p className="text-gray-700">
                    Fabian Leibinger
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Kontakt:
                  </h2>
                  <p className="text-gray-700">
                    E-Mail: <a href="mailto:info@pista.consulting" className="text-blue-600 hover:underline">info@pista.consulting</a><br/>

                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Handelsregister:
                  </h2>
                  <p className="text-gray-700">
                    HRB 289101 (Amtsgericht München)

                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Umsatzsteuer:
                  </h2>
                  <p className="text-gray-700">
                    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br/>
                    DE 367 614 650
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Streitschlichtung
                  </h2>
                  <p className="text-gray-700">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8">
          <div className="bg-white rounded-lg w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative">
            <button 
              onClick={() => setShowDatenschutz(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            
            <div className="pr-4 sm:pr-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Datenschutzerklärung
              </h1>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Kontaktformular
                  </h2>
                  <p className="text-gray-700">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    Datenweitergabe bei Vertragsschluss für Dienstleistungen und digitale Inhalte
                  </h2>
                  <p className="text-gray-700">
                    Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut. Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                  </p>
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
                  <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
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
    </div>
  )
}

export default App
