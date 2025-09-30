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
                  <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-4xl" style={{ transform: 'translateY(-50%) scaleX(-1)' }}>
                    🏎️
                  </div>

                  {/* Milestone Flags */}
                  <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                    <div className="text-2xl mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>ERP</div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                    <div className="text-2xl mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>AUTOMATION</div>
                  </div>
                  <div className="absolute top-0 left-3/4 transform -translate-x-1/2">
                    <div className="text-2xl mb-2">🏁</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>DIGITAL</div>
                  </div>
                  
                  {/* Finish Line */}
                  <div className="absolute top-0 right-8">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-xs text-white font-bold text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>FINISH</div>
                  </div>
                </div>
              </div>

              {/* Solution Points */}
              <div className="mb-12">
                <h4 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Unsere Rennstrecke zum Erfolg
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-3" style={{ color: '#E4002B' }}>🏁</div>
                    <div>
                      <div className="font-bold text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>ERP-Integration</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Alle Systeme vereint</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-3" style={{ color: '#E4002B' }}>⚡</div>
                    <div>
                      <div className="font-bold text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Automatisierung</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Prozesse beschleunigt</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl mr-3" style={{ color: '#E4002B' }}>📱</div>
                    <div>
                      <div className="font-bold text-sm" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Mobile Lösung</div>
                      <div className="text-xs text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Technik vor Ort</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Results - Speedometer Style */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold mb-8 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Performance-Ergebnisse nach 6 Monaten
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                        <span className="text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>40%</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Zeitersparnis bei Angeboten</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                          strokeDasharray="100, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>€180k</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Jährliche Kosteneinsparung</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                          strokeDasharray="25, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>25%</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Weniger Lagerkosten</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
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
                          strokeDasharray="95, 100"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>95%</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Mitarbeiterzufriedenheit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihre Pole Position: Schnell. Präzise. Erfolgreich.
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Einmalige Investition für maximale Performance - wie ein Rennwagen für die Überholspur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* PISTA Starter */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏁 PISTA Starter
              </h3>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €12.999
              </div>
              <p className="text-gray-500 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für Unternehmen bis 25 Mitarbeiter
                </p>
                <p className="text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Ersetzt 3-5 separate Software-Lizenzen
                </p>
                 <p className="text-white invisible">Placeholder</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Umfassende Strategieberatung & Digitalisierungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Vollständige ERP-Implementierung (6-8 Wochen)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Datenintegration aus bestehenden Systemen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Prozessautomatisierung (5 Kern-Workflows)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Professionelle Betreuung
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Mehr erfahren
                </button>
              </div>
            </div>

            {/* PISTA Professional */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 flex flex-col" style={{ borderColor: '#E4002B' }}>
              <div className="text-center mb-4">
                <span className="px-3 py-1 text-sm text-white rounded-sm" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                  🏆 POLE POSITION
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏆 PISTA Professional
              </h3>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €24.999
              </div>
              <p className="text-gray-500 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für wachsende Unternehmen 25-100 Mitarbeiter
                </p>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Weniger als 2 Jahre typische ERP-Lizenzkosten
                </p>
                <p style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  Optimale Kosten-Nutzen-Relation
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Alles aus Starter-Paket</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Erweiterte Strategieberatung & Roadmap-Entwicklung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Multi-Standort-Setup & Berechtigungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>API-Integrationen (E-Commerce, Buchhaltung, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Professionelle Betreuung
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Jetzt starten
                </button>
              </div>
            </div>

            {/* PISTA Enterprise */}
            <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                🏎️ PISTA Enterprise
              </h3>
              <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                €49.999
              </div>
              <p className="text-gray-500 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>einmalig</p>
              
              <div className="mb-6 flex-grow" style={{ minHeight: '110px' }}>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Für Unternehmen ab 100 Mitarbeitern
                </p>
                <p className="text-gray-700 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Bruchteil der Kosten einer SAP-Implementierung
                </p>
                <p style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  Maximale Effizienz & ROI
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3 mb-8 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Alles aus Professional-Paket</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>C-Level Strategieberatung & Transformation Management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Vollständige Systemlandschaft-Integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Dedicated Project Manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>+ 2 weitere Leistungen</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto">
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Premium-Support inklusive
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">Ich akzeptiere die <a href="#" className="underline" style={{ color: '#E4002B' }}>Datenschutzerklärung</a> und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *</label>
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
      <footer className="bg-gray-800 text-white py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: 'white' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-base font-normal ml-2" style={{ color: 'white', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
            <p className="text-gray-400" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Auf der Überholspur zur digitalen Transformation.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Navigation</h4>
            <ul className="space-y-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <li><button onClick={() => scrollToSection('problem')} className="hover:text-gray-300">Problem</button></li>
              <li><button onClick={() => scrollToSection('solution')} className="hover:text-gray-300">Lösung</button></li>
              <li><button onClick={() => scrollToSection('success')} className="hover:text-gray-300">Erfolg</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-gray-300">Preise</button></li>
              <li><button onClick={() => scrollToSection('calculator')} className="hover:text-gray-300">ROI Rechner</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Rechtliches</h4>
            <ul className="space-y-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <li><a href="#" className="hover:text-gray-300">Impressum</a></li>
              <li><a href="#" className="hover:text-gray-300">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Kontakt</h4>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <li>PISTA consulting GmbH</li>
              <li>Musterstraße 1, 12345 Musterstadt</li>
              <li><a href="mailto:kontakt@pista.consulting" className="hover:text-gray-300">kontakt@pista.consulting</a></li>
              <li><a href="tel:+49123456789" className="hover:text-gray-300">+49 123 456 789</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
          © {new Date().getFullYear()} PISTA consulting. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  )
}

export default App
