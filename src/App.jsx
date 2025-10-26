import './App.css'
import { useState } from 'react'
import LeadConfigurator from './components/LeadConfigurator';
import CookieBanner from './components/CookieBanner';
import PistiChatbot from './components/PistiChatbot';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

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
  const [billingPeriod, setBillingPeriod] = useState('einmalig')

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+)?[0-9\s\-\(\)]+$/
    return phoneRegex.test(phone)
  }

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

  const packages = [
    {
      name: "PISTA Starter",
      price: "15.000",
      monthlyPrice: "1.500",
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
      monthlyPrice: "2.500",
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
      monthlyPrice: "5.000",
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
            <Link to="/blog" className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Blog</Link>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Preise</button>
            <button onClick={() => scrollToSection('configurator')} className="text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Konfigurator</button>
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
            <span className="text-xl inline-block animate-bounce">🏁</span>
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
              onClick={() => scrollToSection('configurator')} 
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
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-4 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#E4002B"/>
                  <path d="M12 11H16V13H11V7H13V9H12V11Z" fill="#E4002B"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Komplexe Prozesse</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Manuelle Abläufe und Insellösungen bremsen Ihr Wachstum und führen zu Fehlern.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-4 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#E4002B"/>
                  <path d="M12 11H16V13H11V7H13V9H12V11Z" fill="#E4002B"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Datenchaos</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Verteilte Informationen und fehlende Transparenz erschweren fundierte Entscheidungen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-red-100 rounded-full p-4 mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#E4002B"/>
                  <path d="M12 11H16V13H11V7H13V9H12V11Z" fill="#E4002B"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Ineffiziente IT</h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Veraltete Systeme und hohe Wartungskosten belasten Ihr Budget.
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
              Die PISTA-Rennstrecke: Ihr Weg zum Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie auf einer perfekt geplanten Rennstrecke fahren wir Sie mit maximaler Geschwindigkeit und Präzision zum Ziel
            </p>
          </div>
          <div className="relative flex justify-between items-start w-full max-w-4xl mx-auto mb-12">
            <div className="absolute left-0 right-0 h-0.5 bg-red-500" style={{ top: '24px' }}>
              <div className="absolute left-0 text-3xl animate-race-car" style={{ transform: 'translateY(-50%)', top: '50%' }}>
                <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🏎️</span>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center mx-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">1</div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Streckenanalyse & Routenplanung</h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennfahrer die Strecke studiert, analysieren wir Ihre Prozesse und planen die optimale Route zur digitalen Transformation.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center mx-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">2</div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Vollgas-Umsetzung</h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Mit der Präzision eines Formel-1-Teams setzen wir Ihre Lösung um. Klare Meilensteine, perfektes Timing und keine Überraschungen.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center mx-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3">3</div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Feintuning & Performance</h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein Rennwagen nach dem Rennen optimiert wird, verfeinern wir kontinuierlich Ihre Systeme für maximale Performance.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('configurator')} 
              className="px-8 py-4 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              Kostenlose Beratung sichern
            </button>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section id="success" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Erfolgsgeschichte aus der Praxis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie Bavaria Heizungstechnik mit PISTA Consulting durchstartete
            </p>
          </div>
          
          {/* Bavaria Heizungstechnik Reference Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Company Info */}
              <div className="md:w-1/3">
                <div className="text-5xl mb-4">🏁</div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Bavaria Heizungstechnik GmbH
                </h3>
                <p className="text-gray-600 mb-4" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  SHK-Handwerk | München
                </p>
                <div className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                  Start-up → Wachstums-Champion
                </div>
              </div>
              
              {/* Key Metrics with Industry Comparison */}
              <div className="md:w-2/3">
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-4 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                    🏆 Der Odoo-Vorteil im Vergleich zur Branche
                  </h4>
                  
                  {/* Comparison Cards */}
                  <div className="space-y-3">
                    {/* Profit Margin Comparison */}
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Umsatzrendite</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">+148% besser</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-500">Branche</span>
                            <span className="text-sm font-bold text-gray-400">~11%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-400" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        <div className="text-2xl text-gray-300">→</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-semibold text-green-700">Mit Odoo</span>
                            <span className="text-sm font-bold text-green-600">27,6%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Personnel Cost Comparison */}
                    <div className="bg-white p-4 rounded-xl shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Personalkosten</span>
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">-49% niedriger</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-500">Branche</span>
                            <span className="text-sm font-bold text-gray-400">32%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-400" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <div className="text-2xl text-gray-300">→</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-semibold text-blue-700">Mit Odoo</span>
                            <span className="text-sm font-bold text-blue-600">16,3%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: '51%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Growth Badge */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border-l-4 border-orange-500 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Umsatzwachstum in 18 Monaten</div>
                        <div className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>+48%</div>
                      </div>
                      <div className="text-4xl">🚀</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500">
                  <p className="text-gray-700 italic leading-relaxed" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                    "Früher hätte ich Stunden im Büro verbracht – Angebote schreiben, Rechnungen erstellen, Lagerbestände prüfen. Heute erledigt Odoo das automatisch. Ich kann mich endlich auf das konzentrieren, was ich am besten kann: Auf der Baustelle sein und für meine Kunden da sein. Die Verwaltung läuft im Hintergrund wie von selbst – kein Excel-Chaos, keine Zettelwirtschaft, keine verlorene Zeit. Das ist der wahre Unterschied."
                  </p>
                  <p className="text-sm text-gray-600 mt-3 font-semibold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                    — Zoran Pozderovic, Geschäftsführer Bavaria Heizungstechnik
                  </p>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Odoo ERP</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">CRM & Vertrieb</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">Lager & Einkauf</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">Finanzen</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'none' }} className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-8 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                <span className="text-red-600">🚀</span> Bavaria Heizungstechnik – Vom Start-up zum Wachstums-Champion
              </h3>
              <p className="text-gray-700 text-lg mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wie ein junges SHK-Unternehmen durch Odoo von Anfang an die richtigen Weichen stellte und in Rekordzeit auf <span className="font-bold text-red-600">15 Mitarbeiter in 1,5 Jahren</span> wuchs. Erfahren Sie, wie digitale Prozesse von Tag 1 an ein explosives Wachstum ermöglichten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/bavaria-heizungstechnik-case-study.md" target="_blank" className="px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 bg-yellow-400 text-gray-900 hover:bg-yellow-500" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                  Detailliertes Fallbeispiel lesen →
                </a>
                <a href="/blog/erfolgsgeschichte-bavaria-heizungstechnik" className="px-6 py-3 border-2 rounded-lg font-semibold text-lg transition-colors duration-300 border-gray-900 text-gray-900 hover:bg-gray-100" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                  Erfolgsgeschichte lesen →
                </a>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md group">
              <img src="https://via.placeholder.com/600x400" alt="Bavaria Heizungstechnik" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-70">
                <p className="text-white text-3xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>15 Mitarbeiter in 1,5 Jahren</p>
              </div>
            </div>
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
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setBillingPeriod('einmalig')}
                className={`px-6 py-2 rounded-lg text-lg font-semibold transition-colors ${billingPeriod === 'einmalig' ? 'bg-white shadow text-red-600' : 'text-gray-700 hover:text-gray-900'}`}
                style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
              >
                Einmalig
              </button>
              <button
                onClick={() => setBillingPeriod('monatlich')}
                className={`px-6 py-2 rounded-lg text-lg font-semibold transition-colors ${billingPeriod === 'monatlich' ? 'bg-white shadow text-red-600' : 'text-gray-700 hover:text-gray-900'}`}
                style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
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
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg flex flex-col ${pkg.popular ? 'border-4 border-red-600' : 'border-2 border-gray-200'}`}>
                {pkg.popular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>🏆 POLE POSITION</div>}
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>{pkg.name === 'PISTA Starter' ? '🏁' : pkg.name === 'PISTA Professional' ? '🏆' : '🏎️'} {pkg.name}</h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>{pkg.description}</p>
                <p className="text-5xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  €{billingPeriod === 'einmalig' ? pkg.price : pkg.monthlyPrice}<span className="text-xl">{billingPeriod === 'monatlich' && ' / Monat'}</span>
                </p>
                {billingPeriod === 'monatlich' && (
                  <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>* Monatliche Zahlung über 10 Monate</p>
                )}
                <ul className="space-y-3 mb-8 flex-grow">
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

      {/* Lead Configurator Section */}
      <section id="configurator" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <LeadConfigurator 
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
        </div>
      </section>

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
              <li><button onClick={() => scrollToSection('configurator')} className="text-gray-600 hover:text-gray-900" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Konfigurator</button></li>
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
            <ul className="space-y-2">
              <li><p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>E-Mail: info@pista.consulting</p></li>
              <li><p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Telefon: +49 (0) 123 456789</p></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      {showImpressum && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full relative">
            <button onClick={() => setShowImpressum(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">&times;</button>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Angaben gemäß § 5 TMG</h3>
            <p>PISTA Consulting</p>
            <p>Musterstraße 1</p>
            <p>12345 Musterstadt</p>
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

