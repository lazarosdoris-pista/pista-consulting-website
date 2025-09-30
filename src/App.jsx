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
            <button onClick={() => scrollToSection('calculator')} className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              📊 ROI Rechner
            </button>
          </nav>
        </div>
      </header>

      {/* Red Banner */}
      <div className="py-3 text-center text-white" style={{ backgroundColor: '#E4002B' }}>
        <div className="flex items-center justify-center space-x-4">
          <span style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>📞 Kostenlose Erstberatung - Begrenzte Kapazitäten</span>
          <div className="flex space-x-4 text-sm">
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
            Effizienz steigern mit der richtigen Digitalisierung
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            Wir helfen mittelständischen Unternehmen dabei, ihre Prozesse zu optimieren und durch strategische Digitalisierung nachhaltiges Wachstum zu erzielen.
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
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Chaos in der IT-Landschaft
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Verschiedene Systeme, die nicht miteinander kommunizieren. Doppelte Dateneingaben und ineffiziente Prozesse kosten Zeit und Geld.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">❓</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Fehlende Digitalisierungsstrategie
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Ohne klaren Plan werden IT-Projekte zu Kostenfallen. Technologie wird implementiert, ohne den tatsächlichen Nutzen zu berücksichtigen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Endlose IT-Projekte
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Projekte dauern länger als geplant, Budgets werden überschritten und am Ende funktioniert das System nicht wie gewünscht.
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
              Die PISTA-Methode: Ihr Weg zum Erfolg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Unser bewährter 3-Schritte-Prozess bringt Sie sicher ans Ziel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Analyse & Strategie
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Wir analysieren Ihre aktuellen Prozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie, die zu Ihrem Unternehmen passt.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Implementierung
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Schritt für Schritt setzen wir die Lösung um. Mit klaren Meilensteinen, transparenter Kommunikation und ohne böse Überraschungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Optimierung
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                Nach dem Go-Live optimieren wir kontinuierlich. Ihre Mitarbeiter werden geschult und Sie erhalten langfristigen Support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section id="success" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Erfolgsgeschichte: Bavaria Heizungstechnik
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wie wir einem Familienunternehmen zu 40% mehr Effizienz verholfen haben
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Die Herausforderung
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Bavaria Heizungstechnik, ein Familienunternehmen mit 45 Mitarbeitern, kämpfte mit veralteten Systemen. Angebote wurden noch in Excel erstellt, die Lagerverwaltung lief über Zettelwirtschaft und Kundendaten waren über verschiedene Systeme verstreut.
                </p>
                <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Unsere Lösung
                </h4>
                <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <li>✅ Integrierte ERP-Lösung für alle Geschäftsprozesse</li>
                  <li>✅ Automatisierte Angebotserstellung</li>
                  <li>✅ Digitale Lagerverwaltung mit Barcode-Scanner</li>
                  <li>✅ Mobile App für Techniker vor Ort</li>
                  <li>✅ Kundendatenbank mit 360°-Sicht</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-6 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Messbare Ergebnisse nach 6 Monaten
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>40%</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Zeitersparnis bei Angeboten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>€180k</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Jährliche Kosteneinsparung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>25%</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Weniger Lagerkosten</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>95%</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Mitarbeiterzufriedenheit</div>
                  </div>
                </div>
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
              Berechnen Sie Ihr Einsparpotenzial
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Finden Sie heraus, wie viel Ihre Digitalisierung einsparen kann
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Anzahl Mitarbeiter: {employees}
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #E4002B 0%, #E4002B ${(employees-10)/490*100}%, #ddd ${(employees-10)/490*100}%, #ddd 100%)` }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                  Durchschnittlicher Stundenlohn: €{hourlyWage}
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #E4002B 0%, #E4002B ${(hourlyWage-20)/60*100}%, #ddd ${(hourlyWage-20)/60*100}%, #ddd 100%)` }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <span>€20</span>
                  <span>€80</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-2" style={{ borderColor: '#E4002B' }}>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Ihr Einsparpotenzial pro Jahr
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                    {savedHours.toLocaleString()}h
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Gesparte Arbeitszeit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                    €{yearlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Kosteneinsparung</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                    €{totalBenefit.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Gesamtnutzen</div>
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
              Transparente Preisgestaltung
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wählen Sie das Paket, das zu Ihrem Unternehmen passt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Starter</h3>
              <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                €12.999
              </div>
              <ul className="space-y-3 mb-8 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>✅ Prozessanalyse</li>
                <li>✅ Digitalisierungsstrategie</li>
                <li>✅ Software-Empfehlung</li>
                <li>✅ Basis-Implementation</li>
                <li>✅ 3 Monate Support</li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
              >
                Paket wählen
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2" style={{ borderColor: '#E4002B' }}>
              <div className="text-center mb-4">
                <span className="px-3 py-1 text-sm text-white rounded-full" style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                  BELIEBT
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Professional</h3>
              <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                €24.999
              </div>
              <ul className="space-y-3 mb-8 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>✅ Alles aus Starter</li>
                <li>✅ ERP-Integration</li>
                <li>✅ Workflow-Automatisierung</li>
                <li>✅ Mitarbeiterschulungen</li>
                <li>✅ 6 Monate Support</li>
                <li>✅ Performance-Monitoring</li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
              >
                Paket wählen
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Enterprise</h3>
              <div className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                €49.999
              </div>
              <ul className="space-y-3 mb-8 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>✅ Alles aus Professional</li>
                <li>✅ Custom Development</li>
                <li>✅ API-Integrationen</li>
                <li>✅ Change Management</li>
                <li>✅ 12 Monate Support</li>
                <li>✅ Dedicated Consultant</li>
              </ul>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#1f1f1e', color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}
              >
                Paket wählen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
              Kostenlose Erstberatung sichern
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Lassen Sie uns über Ihr Digitalisierungspotenzial sprechen
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Schritt {currentStep} von 4
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
                  {currentStep * 25}%
                </span>
                <span className="text-gray-500" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>abgeschlossen</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: '#E4002B',
                    width: `${currentStep * 25}%`
                  }}
                ></div>
              </div>
            </div>

            {!isFormCompleted ? (
              <>
                {/* Schritt 1: IT-Budget */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>IT-Budget</h3>
                    <p className="text-gray-700 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wie hoch ist Ihr jährliches IT-Budget? *</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {['< 50.000€', '50.000€ - 100.000€', '100.000€ - 250.000€', '> 250.000€'].map((budget) => (
                        <button
                          key={budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`p-4 border rounded-lg text-left hover:bg-gray-50 transition-colors ${
                            selectedBudget === budget ? 'bg-red-50' : ''
                          }`}
                          style={{ 
                            borderColor: selectedBudget === budget ? '#E4002B' : '#d1d5db',
                            fontFamily: 'Gomme Sans Regular, sans-serif'
                          }}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => setCurrentStep(2)}
                      disabled={!selectedBudget}
                      className="px-6 py-3 rounded-lg disabled:opacity-50 flex items-center text-white font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                    >
                      Weiter →
                    </button>
                  </div>
                )}

                {/* Schritt 2: Unternehmensgröße */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Unternehmensgröße</h3>
                    <p className="text-gray-700 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wie viele Mitarbeiter hat Ihr Unternehmen? *</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {['1-25', '26-100', '101-500', '> 500'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedEmployees(size)}
                          className={`p-4 border rounded-lg text-left hover:bg-gray-50 transition-colors ${
                            selectedEmployees === size ? 'bg-red-50' : ''
                          }`}
                          style={{ 
                            borderColor: selectedEmployees === size ? '#E4002B' : '#d1d5db',
                            fontFamily: 'Gomme Sans Regular, sans-serif'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button 
                        onClick={() => setCurrentStep(1)}
                        className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                        style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Zurück
                      </button>
                      <button 
                        onClick={() => setCurrentStep(3)}
                        disabled={!selectedEmployees}
                        className="px-6 py-3 rounded-lg disabled:opacity-50 flex items-center text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Weiter →
                      </button>
                    </div>
                  </div>
                )}

                {/* Schritt 3: Zeitrahmen */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Zeitrahmen</h3>
                    <p className="text-gray-700 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Wann möchten Sie mit der Digitalisierung starten? *</p>
                    
                    <div className="space-y-4 mb-8">
                      {['Sofort', 'In den nächsten 3 Monaten', 'In den nächsten 6 Monaten', 'Nächstes Jahr'].map((timeframe) => (
                        <button
                          key={timeframe}
                          onClick={() => setSelectedTimeframe(timeframe)}
                          className={`w-full p-4 border rounded-lg text-left hover:bg-gray-50 transition-colors ${
                            selectedTimeframe === timeframe ? 'bg-red-50' : ''
                          } ${timeframe === 'In den nächsten 3 Monaten' ? 'text-white' : ''}`}
                          style={{ 
                            borderColor: selectedTimeframe === timeframe ? '#E4002B' : '#d1d5db',
                            backgroundColor: timeframe === 'In den nächsten 3 Monaten' ? '#1f1f1e' : (selectedTimeframe === timeframe ? '#fef2f2' : ''),
                            fontFamily: 'Gomme Sans Regular, sans-serif'
                          }}
                        >
                          {timeframe}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button 
                        onClick={() => setCurrentStep(2)}
                        className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                        style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Zurück
                      </button>
                      <button 
                        onClick={() => setCurrentStep(4)}
                        disabled={!selectedTimeframe}
                        className="px-6 py-3 rounded-lg disabled:opacity-50 flex items-center text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Weiter →
                      </button>
                    </div>
                  </div>
                )}

                {/* Schritt 4: Kontaktdaten */}
                {currentStep === 4 && (
                  <div>
                    <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Kontaktdaten</h3>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          style={{ 
                            fontFamily: 'Gomme Sans Regular, sans-serif',
                            '--tw-ring-color': '#E4002B'
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>E-Mail *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          style={{ 
                            fontFamily: 'Gomme Sans Regular, sans-serif',
                            '--tw-ring-color': '#E4002B'
                          }}
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Telefon *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          style={{ 
                            fontFamily: 'Gomme Sans Regular, sans-serif',
                            '--tw-ring-color': '#E4002B'
                          }}
                        />
                      </div>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          checked={formData.privacy}
                          onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                          className="mt-1"
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                          Ich akzeptiere die{' '}
                          <a href="#" className="underline" style={{ color: '#E4002B' }}>Datenschutzerklärung</a>{' '}
                          und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button 
                        onClick={() => setCurrentStep(3)}
                        className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                        style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Zurück
                      </button>
                      <button 
                        onClick={() => setIsFormCompleted(true)}
                        disabled={!formData.name || !formData.email || !formData.phone || !formData.privacy}
                        className="px-6 py-3 rounded-lg disabled:opacity-50 flex items-center text-white font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#E4002B', fontFamily: 'Gomme Sans Bold, sans-serif' }}
                      >
                        Weiter →
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Dankesnachricht */
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>Vielen Dank!</h3>
                <p className="text-xl text-gray-600 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Ihre Anfrage wurde erfolgreich übermittelt.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-green-800 mb-4">
                    <span className="text-2xl">✓</span>
                    <span className="font-semibold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Was passiert als nächstes?</span>
                  </div>
                  <ul className="text-left text-green-700 space-y-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                    <li>• Unser Experte meldet sich binnen 24 Stunden bei Ihnen</li>
                    <li>• Kostenlose 30-minütige Strategieberatung per Telefon</li>
                    <li>• Individuelle Analyse Ihres Digitalisierungspotenzials</li>
                    <li>• Unverbindliches Angebot basierend auf Ihren Anforderungen</li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-8" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  Haben Sie noch Fragen? Rufen Sie uns gerne direkt an:<br/>
                  <strong style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Bold, sans-serif' }}>📞 +49 (0) 123 456 789</strong>
                </p>
                <button 
                  onClick={() => {
                    setIsFormCompleted(false)
                    setCurrentStep(1)
                    setSelectedBudget('')
                    setSelectedEmployees('')
                    setSelectedTimeframe('')
                    setFormData({name: '', email: '', phone: '', privacy: false})
                  }}
                  className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 font-semibold"
                  style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
                >
                  Neue Anfrage starten
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                <span style={{ color: '#1f1f1e' }}>PISTA</span>
                <span style={{ color: '#E4002B' }}>.</span>
                <span className="text-base font-normal ml-2" style={{ color: '#1f1f1e', fontFamily: 'Gomme Sans Regular, sans-serif', letterSpacing: '0.1em' }}>consulting</span>
              </div>
              <p className="text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>Auf der richtigen PISTA zum Erfolg</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Services</h4>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>Strategieberatung</li>
                <li>ERP-Integration</li>
                <li>Digitalisierung</li>
                <li>Prozessoptimierung</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Unternehmen</h4>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>Über uns</li>
                <li>Karriere</li>
                <li>Partner</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>Kontakt</h4>
              <ul className="space-y-2 text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                <li>📞 +49 (0) 123 456 789</li>
                <li>✉️ info@pista.consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>© 2025 PISTA Consulting. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 text-sm text-gray-600 mt-4 md:mt-0" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              <a href="#" className="hover:text-gray-900">Datenschutz</a>
              <a href="#" className="hover:text-gray-900">Impressum</a>
              <a href="#" className="hover:text-gray-900">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
