import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, CheckCircle, Users, TrendingUp, Shield, Clock, Calculator, AlertTriangle, Building2, Cog, ShoppingCart, Truck, Briefcase, Heart, Star, Phone, Mail, MapPin, ChevronDown, ChevronUp, X } from 'lucide-react'

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api'

// API Helper Functions
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error('API Call failed:', error)
    throw error
  }
}

// UI Components
const Button = ({ children, className = '', size = 'default', ...props }) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className = '', ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const Input = ({ className = '', error, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
      error 
        ? 'border-red-500 focus-visible:ring-red-500 bg-red-50' 
        : 'border-input bg-background focus-visible:ring-ring'
    } ${className}`}
    {...props}
  />
)

const Select = ({ children, className = '', error, ...props }) => (
  <select
    className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
      error 
        ? 'border-red-500 focus-visible:ring-red-500 bg-red-50' 
        : 'border-input bg-background focus-visible:ring-ring'
    } ${className}`}
    {...props}
  >
    {children}
  </select>
)

const ErrorMessage = ({ error }) => (
  error ? (
    <div className="flex items-center mt-1 text-sm text-red-600">
      <AlertTriangle className="w-4 h-4 mr-1" />
      {error}
    </div>
  ) : null
)

function App() {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  // ROI Calculator State
  const [employees, setEmployees] = useState(50)
  const [hourlyWage, setHourlyWage] = useState(35)

  // Lead Form State
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    budget: '',
    employees: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    challenges: []
  })
  
  // Form validation state
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null)

  // Countdown Timer Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // ROI State
  const [roiData, setRoiData] = useState({
    savedHours: Math.round(employees * 1.5),
    yearlySavings: Math.round(employees * 1.5 * 52 * hourlyWage),
    additionalRevenue: Math.round(employees * 1.5 * 52 * hourlyWage * 0.2),
    totalBenefit: Math.round(employees * 1.5 * 52 * hourlyWage * 1.2)
  })

  // ROI Calculation with Backend
  const calculateROI = async () => {
    try {
      const response = await apiCall('/roi/calculate', {
        method: 'POST',
        body: JSON.stringify({
          employees: employees,
          hourly_rate: hourlyWage
        })
      })
      
      if (response.success) {
        setRoiData({
          savedHours: response.roi_data.weekly_hours_saved,
          yearlySavings: response.roi_data.annual_savings,
          additionalRevenue: response.roi_data.additional_revenue,
          totalBenefit: response.roi_data.total_annual_benefit
        })
      }
    } catch (error) {
      console.error('ROI calculation failed:', error)
      // Fallback to local calculation
      const savedHours = Math.round(employees * 1.5)
      const yearlySavings = Math.round(savedHours * 52 * hourlyWage)
      const additionalRevenue = Math.round(yearlySavings * 0.2)
      const totalBenefit = yearlySavings + additionalRevenue
      
      setRoiData({ savedHours, yearlySavings, additionalRevenue, totalBenefit })
    }
  }

  // Update ROI when inputs change
  useEffect(() => {
    calculateROI()
  }, [employees, hourlyWage])

  // ROI Calculations - More realistic and conservative
  const { savedHours, yearlySavings, additionalRevenue, totalBenefit } = roiData

  // Success Stories Data
  const successStories = [
    {
      company: "Bavaria Heizungstechnik GmbH",
      industry: "SHK-Meisterbetrieb",
      employees: 15,
      result: "6-stelliger Gewinn erreicht",
      savings: "7-stelliger Umsatz generiert",
      challenge: "Manuelle Angebotserstellung, ineffiziente Terminplanung, fehlende Kundenübersicht bei 70+ Wärmepumpen-Installationen jährlich",
      solution: "Integrierte ERP-Lösung mit automatisierter Angebotserstellung, digitaler Terminplanung und CRM-System für Heizungs- und Sanitärprojekte",
      quote: "PISTA hat unseren SHK-Meisterbetrieb revolutioniert. Von manuellen Prozessen zu 6-stelligen Gewinnen - das hätten wir nie für möglich gehalten.",
      name: "Zoran Pozderovic",
      role: "Geschäftsführer",
      image: "👨‍💼"
    }
  ]

  // Pricing Data
  const pricingPackages = [
    {
      name: "PISTA Starter",
      price: "€12.999",
      period: "einmalig",
      description: "Für Unternehmen bis 25 Mitarbeiter",
      priceJustification: "Ersetzt 3-5 separate Software-Lizenzen",
      features: [
        "Umfassende Strategieberatung & Digitalisierungskonzept",
        "Vollständige ERP-Implementierung (6-8 Wochen)",
        "Datenintegration aus bestehenden Systemen",
        "Prozessautomatisierung (5 Kern-Workflows)",
        "Mitarbeiter-Schulungen (3 Tage intensiv)",
        "Go-Live-Begleitung mit Notfall-Support"
      ],
      guarantee: "Professionelle Betreuung",
      popular: false
    },
    {
      name: "PISTA Professional",
      price: "€24.999",
      period: "einmalig",
      description: "Für wachsende Unternehmen 25-100 Mitarbeiter",
      priceJustification: "Weniger als 2 Jahre typische ERP-Lizenzkosten",
      features: [
        "Alles aus Starter-Paket",
        "Erweiterte Strategieberatung & Roadmap-Entwicklung",
        "Multi-Standort-Setup & Berechtigungskonzept",
        "API-Integrationen (E-Commerce, Buchhaltung, etc.)",
        "Business Intelligence Dashboard",
        "Change Management Programm (8 Wochen)"
      ],
      guarantee: "Professionelle Betreuung",
      popular: true,
      savings: "Optimale Kosten-Nutzen-Relation"
    },
    {
      name: "PISTA Enterprise",
      price: "€49.999",
      period: "einmalig",
      description: "Für Unternehmen ab 100 Mitarbeitern",
      priceJustification: "Bruchteil der Kosten einer SAP-Implementierung",
      features: [
        "Alles aus Professional-Paket",
        "C-Level Strategieberatung & Transformation Management",
        "Vollständige Systemlandschaft-Integration",
        "Dedicated Project Manager",
        "Executive Reporting & KPI-Dashboards",
        "12-Monate Premium-Betreuung inklusive"
      ],
      guarantee: "Premium-Support inklusive",
      popular: false,
      savings: "Maximale Effizienz & ROI"
    }
  ]

  // FAQ Data
  const faqs = [
    {
      question: "Wie lange dauert die Implementierung?",
      answer: "Die meisten Projekte sind in 6-12 Wochen abgeschlossen. Wir arbeiten zielorientiert und fokussieren uns auf messbare Ergebnisse bereits in den ersten 90 Tagen."
    },
    {
      question: "Welche Software empfehlen Sie?",
      answer: "Wir arbeiten mit einer modernen All-in-One-Digitalisierungslösung ohne Vendor-Lock-in, die bereits über 7 Millionen Nutzer weltweit überzeugt hat. Die konkrete Empfehlung besprechen wir in Ihrem kostenlosen Beratungsgespräch."
    },
    {
      question: "Was kostet die monatliche Betreuung?",
      answer: "Unsere optionalen Betreuungspakete starten bei €499/Monat und sind deutlich günstiger als die Lizenzkosten herkömmlicher ERP-Systeme. Sie beinhalten kontinuierliche Optimierung und Support."
    },
    {
      question: "Funktioniert das auch in meiner Branche?",
      answer: "Ja! Wir haben bereits über 150 Unternehmen aus verschiedensten Branchen erfolgreich digitalisiert - von Handwerk über Fertigung bis hin zu Dienstleistungen."
    },
    {
      question: "Was passiert mit unseren bestehenden Daten?",
      answer: "Wir migrieren alle Ihre wichtigen Daten sicher und vollständig. Dabei gehen keine Informationen verloren und Sie können nahtlos weiterarbeiten."
    },
    {
      question: "Wie messen Sie den Erfolg?",
      answer: "Wir definieren gemeinsam mit Ihnen klare KPIs und Erfolgsmessungen. Typische Metriken sind Zeitersparnis, Kosteneinsparungen, Umsatzsteigerung und Prozesseffizienz. Regelmäßige Reports zeigen den Fortschritt auf."
    }
  ]

  // Form validation functions
  const validateStep1 = () => {
    const errors = {}
    if (!formData.budget) errors.budget = 'Bitte wählen Sie Ihr IT-Budget aus'
    if (!formData.employees) errors.employees = 'Bitte wählen Sie die Anzahl Ihrer Mitarbeiter aus'
    if (!formData.timeline) errors.timeline = 'Bitte wählen Sie Ihren gewünschten Startzeitpunkt aus'
    return errors
  }

  const validateStep2 = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Bitte geben Sie Ihren Namen ein'
    if (!formData.company.trim()) errors.company = 'Bitte geben Sie Ihr Unternehmen ein'
    if (!formData.email.trim()) {
      errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
    if (!formData.phone.trim()) errors.phone = 'Bitte geben Sie Ihre Telefonnummer ein'
    return errors
  }

  const validateStep3 = () => {
    const errors = {}
    if (formData.challenges.length === 0) {
      errors.challenges = 'Bitte wählen Sie mindestens eine Herausforderung aus'
    }
    return errors
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    let errors = {}
    
    // Validate current step
    if (currentStep === 1) {
      errors = validateStep1()
    } else if (currentStep === 2) {
      errors = validateStep2()
    } else if (currentStep === 3) {
      errors = validateStep3()
    }
    
    setFormErrors(errors)
    
    // If there are validation errors, don't proceed
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false)
      return
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      setIsSubmitting(false)
    } else {
      // Submit form to backend
      try {
        const response = await apiCall('/contact/quick-analysis', {
          method: 'POST',
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            budget: formData.budget,
            employees: formData.employees,
            timeline: formData.timeline,
            challenges: formData.challenges.join(', '),
            industry: 'Nicht angegeben'
          })
        })
        
        if (response.success) {
          alert(response.message)
          // Reset form
          setFormData({
            budget: '', employees: '', timeline: '', name: '', email: '', phone: '', company: '', challenges: []
          })
          setCurrentStep(1)
          setFormErrors({})
        }
      } catch (error) {
        console.error('Form submission failed:', error)
        alert('Vielen Dank! Wir melden uns binnen 24 Stunden bei Ihnen.')
        // Reset form even on error
        setFormData({
          budget: '', employees: '', timeline: '', name: '', email: '', phone: '', company: '', challenges: []
        })
        setCurrentStep(1)
        setFormErrors({})
      }
      setIsSubmitting(false)
    }
  }

  const toggleChallenge = (challenge) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-14 items-center px-4 sm:px-6">
          <div className="mr-4 flex">
            <img src="/pista-logo.png" alt="PISTA Logo" className="h-8 w-auto" />
            <div className="ml-3">
              <div className="font-bold text-lg text-slate-900">PISTA. Consulting</div>
              <div className="text-xs text-slate-600">Auf der richtigen PISTA zum Erfolg</div>
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium ml-auto">
            <a href="#problem" className="transition-colors hover:text-red-600">Problem</a>
            <a href="#solution" className="transition-colors hover:text-red-600">Lösung</a>
            <a href="#success" className="transition-colors hover:text-red-600">Erfolg</a>
            <a href="#pricing" className="transition-colors hover:text-red-600">Preise</a>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              Einsparpotenzial berechnen
            </Button>
          </nav>
        </div>
      </header>

      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm md:text-base font-medium">📞 Kostenlose Erstberatung - Begrenzte Kapazitäten</span>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <div className="flex space-x-4 text-sm md:text-base">
              <div className="text-center">
                <div className="font-bold text-xl">{timeLeft.days}</div>
                <div className="text-xs">Tage</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">{timeLeft.hours}</div>
                <div className="text-xs">Std</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">{timeLeft.minutes}</div>
                <div className="text-xs">Min</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl">{timeLeft.seconds}</div>
                <div className="text-xs">Sek</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Simplified */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
            Effizienz steigern mit der
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
              richtigen Digitalisierung
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Fokus auf messbare Ergebnisse und nachhaltigen Erfolg
          </p>

          <div className="mb-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all">
              Kostenloses Einsparpotenzial berechnen
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-slate-600">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              100% kostenlos
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Keine Verpflichtung
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              Messbare Ergebnisse
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="font-medium">4.9/5</span> Kundenbewertung
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-blue-600 mr-1" />
              <span className="font-medium">150+</span> erfolgreiche Projekte
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-1" />
              <span className="font-medium">Professionell</span> betreut
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Kennen Sie das auch?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Diese Probleme kosten deutsche KMUs täglich Tausende von Euro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-l-4 border-red-500 bg-red-50">
              <div className="text-red-600 mb-4">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Chaos in der IT-Landschaft
              </h3>
              <p className="text-slate-600 text-sm">
                5+ verschiedene Software-Lösungen, die nicht miteinander sprechen. 
                Doppelerfassung, Excel-Listen und manuelle Prozesse überall.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50">
              <div className="text-red-600 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Fehlende Digitalisierungsstrategie
              </h3>
              <p className="text-slate-600 text-sm">
                Ohne klare Strategie werden IT-Investitionen zur Kostenfalle. 
                Unkoordinierte Einzellösungen führen zu Ineffizienz und Mehrkosten.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500 bg-red-50">
              <div className="text-red-600 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Endlose IT-Projekte
              </h3>
              <p className="text-slate-600 text-sm">
                12-18 Monate Implementierung ohne klare Erfolgsmessung. 
                Berater verschwinden nach Go-Live und lassen Sie allein.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 mb-6">
              <strong>Das Ergebnis:</strong> Ihre Konkurrenz überholt Sie, während Sie noch mit veralteten Systemen kämpfen.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Ich will das ändern - Lösung zeigen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Teaser */}
      <section id="solution" className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
            Es gibt einen besseren Weg
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            <strong>Strategieberatung & Digitalisierung</strong> aus einer Hand. 
            <strong>Maßgeschneiderte Lösungen</strong> für Ihr Unternehmen. <strong>90 Tage</strong> bis zu messbaren Ergebnissen.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Strategieberatung</h3>
              <p className="text-slate-600 text-sm">Individuelle Digitalisierungsstrategie für Ihr Unternehmen</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Kosteneffizient</h3>
              <p className="text-slate-600 text-sm">Maximale Effizienz bei optimalen Kosten</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Messbare Ergebnisse</h3>
              <p className="text-slate-600 text-sm">Klare KPIs und regelmäßige Erfolgsmessung</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Die PISTA-Methode in 3 Schritten
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Strategieanalyse</h4>
                  <p className="text-slate-600 text-sm">Wir analysieren Ihre Prozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-slate-900">ERP-Integration</h4>
                  <p className="text-slate-600 text-sm">Implementierung einer integrierten Business-Software (basierend auf Odoo) für alle Geschäftsprozesse</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-slate-900">Kontinuierliche Optimierung</h4>
                  <p className="text-slate-600 text-sm">Laufende Betreuung und Anpassung für maximale Effizienz und ROI</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full">
              Kostenloses Einsparpotenzial berechnen
              <Calculator className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Ihr persönliches Einsparpotenzial
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Berechnen Sie Ihre mögliche Ersparnis in 30 Sekunden
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Ihre Eingaben</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Anzahl Mitarbeiter
                      </label>
                      <Input
                        type="number"
                        value={employees}
                        onChange={(e) => setEmployees(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Durchschnittlicher Stundenlohn (€)
                      </label>
                      <Input
                        type="number"
                        value={hourlyWage}
                        onChange={(e) => setHourlyWage(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Ihr Einsparpotenzial</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Gesparte Stunden/Woche:</span>
                      <span className="font-bold text-lg text-green-600">{savedHours}h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Jährliche Kosteneinsparung:</span>
                      <span className="font-bold text-lg text-green-600">€{yearlySavings.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Zusätzlicher Umsatz:</span>
                      <span className="font-bold text-lg text-blue-600">€{additionalRevenue.toLocaleString()}</span>
                    </div>
                    
                    <hr className="border-slate-200" />
                    
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900">Gesamtnutzen/Jahr:</span>
                      <span className="font-bold text-2xl text-red-600">€{totalBenefit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                  Kostenlose Detailanalyse anfordern
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-slate-500 mt-2">
                  Unverbindlich • Kostenlos • Binnen 24h Antwort
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section id="success" className="py-12 md:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Wie Bavaria Heizungstechnik 6-stellige Gewinne erzielte
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Eine wahre Geschichte über die Macht der richtigen Digitalisierung
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6 md:p-8 mb-8">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{story.image}</div>
                    <h4 className="font-bold text-lg text-slate-900">{story.name}</h4>
                    <p className="text-sm text-slate-600 mb-2">{story.role}</p>
                    <p className="text-sm text-slate-600">{story.company}</p>
                  </div>

                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <div className="text-xl font-bold text-red-600 mb-2">{story.result}</div>
                      <div className="text-lg font-semibold text-green-600 mb-2">{story.savings}</div>
                      <div className="text-sm text-slate-600 mb-4">Projektzeitraum: 8 Wochen | Branche: SHK-Handwerk</div>
                    </div>

                    <blockquote className="text-lg text-slate-700 italic mb-6 border-l-4 border-red-500 pl-4">
                      "{story.quote}"
                    </blockquote>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">Die Herausforderung:</h5>
                        <p className="text-slate-600 text-sm">{story.challenge}</p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-slate-900 mb-2">Die PISTA-Lösung:</h5>
                        <p className="text-slate-600 text-sm">{story.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        <Play className="w-4 h-4 mr-2" />
                        Vollständige Erfolgsgeschichte ansehen
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 mb-6">
              <strong>Das könnte auch Ihre Geschichte sein.</strong> Lassen Sie uns gemeinsam Ihr Unternehmen transformieren.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Ähnliche Erfolge für mein Unternehmen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Ineffiziente Prozesse kosten täglich wertvolle Zeit und Ressourcen
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Während Sie zögern, digitalisiert sich Ihre Konkurrenz. 
            Warten Sie nicht länger - starten Sie heute auf der richtigen PISTA.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">Nächster verfügbarer Projektstart:</h3>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold">Q1 2026</div>
                <div className="text-sm mt-1">Aufgrund hoher Nachfrage</div>
              </div>
              <p className="text-sm opacity-90">
                Sichern Sie sich jetzt Ihren Platz für eine kostenlose Strategieberatung
              </p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-6 rounded-xl shadow-xl">
              Kostenlose Strategieberatung sichern
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Simple Pricing */}
      <section id="pricing" className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Transparente Preise, maximaler Wert
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Einmalige Investition für lebenslange Vorteile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative p-6 ${pkg.popular ? 'border-2 border-red-500 shadow-xl' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      EMPFOHLEN
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-red-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-slate-600 mb-2">{pkg.period}</div>
                  <p className="text-sm text-slate-600">{pkg.description}</p>
                  {pkg.priceJustification && (
                    <div className="text-xs text-slate-500 mt-1 italic">{pkg.priceJustification}</div>
                  )}
                  {pkg.savings && (
                    <div className="text-sm font-medium text-green-600 mt-2">{pkg.savings}</div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 4 && (
                    <li className="text-sm text-slate-500">
                      + {pkg.features.length - 4} weitere Leistungen
                    </li>
                  )}
                </ul>

                <div className="text-center mb-4">
                  <div className="text-sm font-medium text-green-600">{pkg.guarantee}</div>
                </div>

                <Button 
                  className={`w-full ${pkg.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'border border-red-600 text-red-600 hover:bg-red-50'}`}
                >
                  {pkg.popular ? 'Jetzt starten' : 'Mehr erfahren'}
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 mb-6">
              <strong>Unsicher welches Paket?</strong> Lassen Sie uns das gemeinsam in einem kostenlosen Gespräch klären.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Kostenlose Beratung vereinbaren
              <Phone className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Monthly Care Packages */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Monatliche Betreuung für nachhaltigen Erfolg
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Laufende Betreuung für nachhaltigen Erfolg
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* PISTA Care Starter */}
            <Card className="relative p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">PISTA Care Starter</h3>
                <div className="text-4xl font-bold text-red-600 mb-1">€500</div>
                <div className="text-sm text-slate-600 mb-2">pro Monat</div>
                <p className="text-sm text-slate-600">Grundbetreuung für kleine Teams (1-25 Mitarbeiter)</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monatliche System-Updates & Wartung</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">E-Mail-Support (Antwort binnen 24h)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Automatische Datensicherung täglich</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monatliche Strategieberatung & System-Optimierung (1h)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Basis-Schulungen für Ihr Team</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monatlicher Performance-Report</span>
                </li>
              </ul>

              <Button className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3">
                Starter wählen
              </Button>
            </Card>

            {/* PISTA Care Professional */}
            <Card className="relative p-6 border-2 border-red-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  🏆 Beliebteste Wahl
                </span>
              </div>
              
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">PISTA Care Professional</h3>
                <div className="text-4xl font-bold text-red-600 mb-1">€1.500</div>
                <div className="text-sm text-slate-600 mb-2">pro Monat</div>
                <p className="text-sm text-slate-600">Vollbetreuung für wachsende Unternehmen (25-100 Mitarbeiter)</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Alles aus Starter-Paket</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Proaktives 24/7 System-Monitoring</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Telefon-Support (Antwort binnen 4h)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monatliche Strategieberatung (3h)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Erweiterte Schulungen & Workshops</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Prioritäts-Support bei Problemen</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Detaillierte ROI-Analysen</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Monatliche Prozessoptimierung & Automatisierung</span>
                </li>
              </ul>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 shadow-lg">
                Professional wählen
              </Button>
            </Card>

            {/* PISTA Care Enterprise */}
            <Card className="relative p-6 hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">PISTA Care Enterprise</h3>
                <div className="text-4xl font-bold text-red-600 mb-1">€2.500</div>
                <div className="text-sm text-slate-600 mb-2">pro Monat</div>
                <p className="text-sm text-slate-600">Vollbetreuung für komplexe Systeme (100+ Mitarbeiter)</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Alles aus Professional-Paket</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Dedicated Account Manager</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">24/7 Notfall-Support (1h Reaktionszeit)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Wöchentliche Strategieberatung (6h)</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Individuelle Entwicklungen & Anpassungen</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Compliance & Security Audits</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Exklusiver Zugang zu Beta-Features</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Quartalsweise C-Level Business Reviews</span>
                </li>
                <li className="flex items-start text-sm">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Digitale Transformation Roadmap Updates</span>
                </li>
              </ul>

              <Button className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3">
                Enterprise wählen
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto shadow-sm border">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Warum monatliche Betreuung?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">Kontinuierliche Sicherheit</h4>
                  <p className="text-slate-600">Updates, Backups und Monitoring für maximale Ausfallsicherheit</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">Stetige Optimierung</h4>
                  <p className="text-slate-600">Proaktive Verbesserungen für bessere Performance und ROI</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-medium text-slate-900 mb-1">Langfristige Partnerschaft</h4>
                  <p className="text-slate-600">Ihr digitaler Partner für nachhaltigen Geschäftserfolg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Starten Sie jetzt auf der richtigen PISTA
                </h2>
                <p className="text-lg text-slate-600">
                  Kostenlose Analyse in 3 einfachen Schritten
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Schritt {currentStep} von 3</span>
                  <span className="text-sm text-slate-500">{Math.round((currentStep / 3) * 100)}% abgeschlossen</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Qualifikation</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Wie hoch ist Ihr jährliches IT-Budget? *
                      </label>
                      <Select 
                        value={formData.budget}
                        onChange={(e) => {
                          setFormData({...formData, budget: e.target.value})
                          // Clear error when user makes selection
                          if (formErrors.budget) {
                            setFormErrors({...formErrors, budget: ''})
                          }
                        }}
                        error={formErrors.budget}
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="under-10k">Unter €10.000</option>
                        <option value="10k-25k">€10.000 - €25.000</option>
                        <option value="25k-50k">€25.000 - €50.000</option>
                        <option value="50k-100k">€50.000 - €100.000</option>
                        <option value="over-100k">Über €100.000</option>
                      </Select>
                      <ErrorMessage error={formErrors.budget} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Wie viele Mitarbeiter hat Ihr Unternehmen? *
                      </label>
                      <Select 
                        value={formData.employees}
                        onChange={(e) => {
                          setFormData({...formData, employees: e.target.value})
                          // Clear error when user makes selection
                          if (formErrors.employees) {
                            setFormErrors({...formErrors, employees: ''})
                          }
                        }}
                        error={formErrors.employees}
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="1-10">1-10 Mitarbeiter</option>
                        <option value="11-50">11-50 Mitarbeiter</option>
                        <option value="51-100">51-100 Mitarbeiter</option>
                        <option value="101-250">101-250 Mitarbeiter</option>
                        <option value="250+">Über 250 Mitarbeiter</option>
                      </Select>
                      <ErrorMessage error={formErrors.employees} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Wann möchten Sie mit der Digitalisierung starten? *
                      </label>
                      <Select 
                        value={formData.timeline}
                        onChange={(e) => {
                          setFormData({...formData, timeline: e.target.value})
                          // Clear error when user makes selection
                          if (formErrors.timeline) {
                            setFormErrors({...formErrors, timeline: ''})
                          }
                        }}
                        error={formErrors.timeline}
                      >
                        <option value="">Bitte wählen...</option>
                        <option value="asap">So schnell wie möglich</option>
                        <option value="1-3months">In 1-3 Monaten</option>
                        <option value="3-6months">In 3-6 Monaten</option>
                        <option value="6-12months">In 6-12 Monaten</option>
                        <option value="planning">Nur Informationen sammeln</option>
                      </Select>
                      <ErrorMessage error={formErrors.timeline} />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Kontaktdaten</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Vorname *
                        </label>
                        <Input 
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({...formData, name: e.target.value})
                            // Clear error when user types
                            if (formErrors.name) {
                              setFormErrors({...formErrors, name: ''})
                            }
                          }}
                          error={formErrors.name}
                          placeholder="Ihr Vorname"
                        />
                        <ErrorMessage error={formErrors.name} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Unternehmen *
                        </label>
                        <Input 
                          value={formData.company}
                          onChange={(e) => {
                            setFormData({...formData, company: e.target.value})
                            // Clear error when user types
                            if (formErrors.company) {
                              setFormErrors({...formErrors, company: ''})
                            }
                          }}
                          error={formErrors.company}
                          placeholder="Ihr Unternehmen"
                        />
                        <ErrorMessage error={formErrors.company} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-Mail-Adresse *
                      </label>
                      <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value})
                          // Clear error when user types
                          if (formErrors.email) {
                            setFormErrors({...formErrors, email: ''})
                          }
                        }}
                        error={formErrors.email}
                        placeholder="ihre.email@unternehmen.de"
                      />
                      <ErrorMessage error={formErrors.email} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefonnummer *
                      </label>
                      <Input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({...formData, phone: e.target.value})
                          // Clear error when user types
                          if (formErrors.phone) {
                            setFormErrors({...formErrors, phone: ''})
                          }
                        }}
                        error={formErrors.phone}
                        placeholder="+49 123 456 789"
                      />
                      <ErrorMessage error={formErrors.phone} />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Ihre größten Herausforderungen</h3>
                    <p className="text-sm text-slate-600 mb-4">Wählen Sie alle zutreffenden Punkte aus: *</p>
                    
                    <div className={`space-y-3 p-4 rounded-lg border ${formErrors.challenges ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}>
                      {[
                        'Zu viele verschiedene Software-Lösungen',
                        'Hohe IT-Kosten und Lizenzgebühren',
                        'Manuelle Prozesse und Doppelerfassung',
                        'Fehlende Transparenz und Reporting',
                        'Schwierige Integration bestehender Systeme',
                        'Mitarbeiter-Widerstand gegen neue Technologien',
                        'Unklare Digitalisierungsstrategie',
                        'Vendor-Lock-in bei aktuellen Anbietern'
                      ].map((challenge, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer hover:bg-white/50 p-2 rounded">
                          <input
                            type="checkbox"
                            checked={formData.challenges.includes(challenge)}
                            onChange={() => {
                              toggleChallenge(challenge)
                              // Clear error when user makes selection
                              if (formErrors.challenges) {
                                setFormErrors({...formErrors, challenges: ''})
                              }
                            }}
                            className="rounded border-slate-300 text-red-600 focus:ring-red-500"
                          />
                          <span className="text-sm text-slate-700">{challenge}</span>
                        </label>
                      ))}
                    </div>
                    <ErrorMessage error={formErrors.challenges} />
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button 
                      type="button"
                      onClick={() => {
                        setCurrentStep(currentStep - 1)
                        setFormErrors({}) // Clear errors when going back
                      }}
                      className="border border-slate-300 text-slate-700 hover:bg-slate-50"
                      disabled={isSubmitting}
                    >
                      Zurück
                    </Button>
                  )}
                  
                  <Button 
                    type="submit"
                    className={`bg-red-600 hover:bg-red-700 text-white ${currentStep === 1 ? 'ml-auto' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        {currentStep === 3 ? 'Wird gesendet...' : 'Wird verarbeitet...'}
                      </>
                    ) : (
                      <>
                        {currentStep === 3 ? 'Kostenlose Analyse anfordern' : 'Weiter'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              Alles was Sie über PISTA wissen müssen
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-4">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 mb-6">
              Haben Sie weitere Fragen? Wir beantworten sie gerne in einem persönlichen Gespräch.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Kostenlose Beratung vereinbaren
              <Phone className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/pista-logo.png" alt="PISTA Logo" className="h-8 w-auto mr-3" />
                <div>
                  <div className="font-bold text-lg">PISTA. Consulting</div>
                  <div className="text-sm text-slate-400">Auf der richtigen PISTA zur digitalen Zukunft</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Fundierte Expertise in der Digitalisierung und Strategieberatung für kleine und mittlere Unternehmen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Leistungen</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Digitalisierungsstrategie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prozessautomatisierung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategieberatung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Change Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pakete</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#pricing" className="hover:text-white transition-colors">PISTA Starter (€12.999)</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">PISTA Professional (€24.999)</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">PISTA Enterprise (€49.999)</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Monatliche Betreuung</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@pista-consulting.de
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +49 (0) 123 456 789
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  München, Deutschland
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="border-slate-700 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 PISTA. Consulting. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all z-50"
        aria-label="Nach oben scrollen"
      >
        <ArrowRight className="w-5 h-5 transform -rotate-90" />
      </button>
    </div>
  )
}

export default App
