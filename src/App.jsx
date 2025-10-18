import './App.css'
import { useState } from 'react'
import { ContactSection } from './components/ContactSection'
import CookieBanner from './components/CookieBanner';
import PistiChatbot from './components/PistiChatbot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog'; // Import the new Blog component
import BlogPost from './components/BlogPost'; // Import the new BlogPost component

function MainContent() {
  const [employees, setEmployees] = useState(50)
  const [hourlyWage, setHourlyWage] = useState(40)
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
  const [billingPeriod, setBillingPeriod] = useState('einmalig') // State for billing period

  // E-Mail Validierung
  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
  }

  // Telefonnummer Validierung (nur Zahlen und optional + am Anfang)
  const validatePhone = (phone) => {
    const phoneRegex = /^(\+)?[0-9\s\-\(\)]+$/
    return phoneRegex.test(phone)
  }

  // Telefonnummer Input Handler (filtert ungültige Zeichen)
  const handlePhoneInput = (value) => {
    const filteredValue = value.replace(/[^\+0-9\s\-\(\)]/g, '')
    return filteredValue
  }

  const handleFormDataChange = (field, value) => {
    if (field === 'phone') {
      value = handlePhoneInput(value)
    }
    
    setFormData({...formData, [field]: value})
    
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

  // Define packages directly in App.jsx
  const packages = [
    {
      name: "PISTA Starter",
      price: "15.000",
      monthlyPrice: "1.500", // 15.000 / 10
      description: "Für kleine Unternehmen bis 10 Mitarbeiter",
      features: [
        "Odoo Community Edition Setup",
        "Basis-Module: CRM, Vertrieb, Einkauf",
        "Datenimport & Schulung",
        "1 Monat Support"
      ],
    },
    {
      name: "PISTA Professional",
      price: "25.000",
      monthlyPrice: "2.500", // 25.000 / 10
      description: "Für wachsende Unternehmen 10-50 Mitarbeiter",
      features: [
        "Odoo Enterprise Edition",
        "Lager, Produktion, Buchhaltung",
        "API-Integration & Workflows",
        "3 Monate Premium-Support"
      ],
      popular: true
    },
    {
      name: "PISTA Enterprise",
      price: "50.000",
      monthlyPrice: "5.000", // 50.000 / 10
      description: "Für Unternehmen ab 50 Mitarbeitern",
      features: [
        "Odoo Enterprise + Custom Development",
        "Alle Module inkl. Studio & IoT",
        "Multi-Standort & Multi-Company",
        "6 Monate Premium-Support"
      ],
    }
  ]

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

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200"></div>
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-red-500" style={{ width: '100%' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>1</div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Streckenanalyse & Routenplanung
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Wie ein Rennfahrer die Strecke studiert, analysieren wir Ihre Prozesse und planen die optimale Route zur digitalen Transformation.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>2</div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Vollgas-Umsetzung
                </h3>
                <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Mit der Präzision eines Formel-1-Teams setzen wir Ihre Lösung um. Klare Meilensteine, perfektes Timing und keine Überraschungen.
                </p>
              </div>

              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>3</div>
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
        </div>
      </section>

      {/* Success Story Section */}
      <section id="success" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Erfolgsgeschichte: Bavaria Heizungstechnik
            </h2>
            <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie wir einem Familienunternehmen zu 40% mehr Effizienz verholfen haben
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                <span className="text-3xl mr-3">🏁</span> Die Herausforderung
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Bavaria Heizungstechnik, ein Familienunternehmen mit 45 Mitarbeitern, kämpfte mit veralteten Systemen. Angebote wurden noch in Excel erstellt, die Lagerverwaltung lief über Zettelwirtschaft und Kundendaten waren über verschiedene Systeme verstreut.
              </p>
              <div className="relative">
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="flex items-start mb-6">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold z-10" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>1</div>
                  <p className="ml-4 text-gray-800 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Analyse</p>
                </div>
                <div className="flex items-start mb-6">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold z-10" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>2</div>
                  <p className="ml-4 text-gray-800 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Konzept</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center font-bold z-10" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>3</div>
                  <p className="ml-4 text-gray-800 font-semibold" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Umsetzung</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              <span className="text-3xl mr-3">🏁</span> Das Ergebnis
            </h3>
            <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Durch die Implementierung von Odoo als zentrales ERP-System konnten alle Prozesse digitalisiert und automatisiert werden. Bavaria Heizungstechnik erzielte eine Effizienzsteigerung von 40%, reduzierte Fehlerquoten und verbesserte die Kundenzufriedenheit erheblich.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihre Pole Position: Schnell. Präzise. Erfolgreich.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Einmalige Investition für maximale Performance und nachhaltiges Wachstum
            </p>
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setBillingPeriod('einmalig')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'einmalig'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Einmalig
              </button>
              <button
                onClick={() => setBillingPeriod('monatlich')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingPeriod === 'monatlich'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Monatlich
              </button>
            </div>
            {billingPeriod === 'monatlich' && (
              <p className="text-sm text-gray-500 mt-4">
                * Monatliche Zahlung über 10 Monate
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-sm border-t-4 ${pkg.popular ? 'border-red-500' : 'border-gray-200'} hover:border-red-500 transition-colors duration-300 flex flex-col`}>
                {pkg.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>🏆 POLE POSITION</div>}
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>{pkg.name === 'PISTA Starter' ? '🏁' : pkg.name === 'PISTA Professional' ? '🏆' : '🏎️'} {pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-1">ab</p>
                <p className="text-5xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€{billingPeriod === 'einmalig' ? pkg.price : pkg.monthlyPrice}</p>
                <p className="text-gray-500 mb-6">{billingPeriod === 'einmalig' ? 'einmalig' : '/Monat'}</p>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>{pkg.description}</p>
                <ul className="space-y-4 text-gray-600 mb-8 flex-grow" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center"><svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{feature}</li>
                  ))}
                </ul>
                <button className={`w-full mt-auto px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 ${pkg.popular ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>{pkg.popular ? 'Jetzt starten' : 'Mehr erfahren'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Pricing Section - REMOVED */}

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Ihr Performance-Check: Wie schnell werden Sie?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Berechnen Sie in Sekunden, wie viel Geschwindigkeit und Effizienz Sie gewinnen können
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="employees" className="block text-lg font-semibold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Anzahl der Mitarbeiter:</label>
                <input 
                  type="range" 
                  id="employees" 
                  min="5" 
                  max="500" 
                  value={employees} 
                  onChange={(e) => setEmployees(e.target.value)} 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: '#E4002B' }}
                />
                <div className="text-center mt-2 text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>{employees}</div>
              </div>
              <div>
                <label htmlFor="hourlyWage" className="block text-lg font-semibold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Durchschnittlicher Stundenlohn:</label>
                <input 
                  type="range" 
                  id="hourlyWage" 
                  min="15" 
                  max="150" 
                  value={hourlyWage} 
                  onChange={(e) => setHourlyWage(e.target.value)} 
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: '#E4002B' }}
                />
                <div className="text-center mt-2 text-xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>€{hourlyWage}</div>
              </div>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Ihr geschätztes Einsparpotenzial:</h3>
              <p className="text-5xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(totalBenefit)}
              </p>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>(Jährliche Kosteneinsparungen und zusätzlicher Umsatz)</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection 
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        selectedBudget={selectedBudget}
        setSelectedBudget={setSelectedBudget}
        selectedEmployees={selectedEmployees}
        setSelectedEmployees={setSelectedEmployees}
        selectedTimeframe={selectedTimeframe}
        setSelectedTimeframe={setSelectedTimeframe}
        formData={formData}
        handleFormDataChange={handleFormDataChange}
        isFormCompleted={isFormCompleted}
        setIsFormCompleted={setIsFormCompleted}
        validationErrors={validationErrors}
      />

      {/* Footer */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
              <span style={{ color: '#1f1f1e' }}>PISTA</span>
              <span style={{ color: '#E4002B' }}>.</span>
              <span className="text-base font-normal ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
            </div>
            <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Auf der Überholspur zur digitalen Transformation.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Navigation</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('problem')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Problem</button></li>
              <li><button onClick={() => scrollToSection('solution')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Lösung</button></li>
              <li><button onClick={() => scrollToSection('success')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Erfolg</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Preise</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Rechtliches</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setShowImpressum(true)} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Impressum</button></li>
              <li><button onClick={() => setShowDatenschutz(true)} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Datenschutz</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Kontakt</h3>
            <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>info@pista.consulting</p>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full relative">
            <button onClick={() => setShowImpressum(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Impressum</h2>
            <div className="space-y-6 text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Angaben gemäß § 5 TMG</h3>
                <p>PISTA Consulting</p>
                <p>Musterstraße 1</p>
                <p>12345 Musterstadt</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Vertreten durch:</h3>
                <p>Lazaros Doris</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Kontakt</h3>
                <p>Telefon: +49 (0) 123 456789</p>
                <p>E-Mail: info@pista.consulting</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Umsatzsteuer-ID</h3>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {showDatenschutz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full relative">
            <button onClick={() => setShowDatenschutz(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Datenschutzerklärung</h2>
            <div className="space-y-6 text-gray-700 overflow-y-auto max-h-[70vh]" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <p>Hier steht Ihre Datenschutzerklärung...</p>
            </div>
          </div>
        </div>
      )}

      <CookieBanner />
      <PistiChatbot />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App

