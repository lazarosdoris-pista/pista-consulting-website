import './App.css'
import { useState } from 'react'

function App() {
  const [employees, setEmployees] = useState(50)
  const [hourlyWage, setHourlyWage] = useState(35)
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedBudget, setSelectedBudget] = useState('')

  const savedHours = Math.round(employees * 1.5)
  const yearlySavings = Math.round(savedHours * hourlyWage * 52)
  const additionalRevenue = Math.round(yearlySavings * 0.2)
  const totalBenefit = yearlySavings + additionalRevenue

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-black">PISTA</span>
              <span className="text-gray-500 font-normal ml-2">consulting</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('problem')} className="text-gray-700 hover:text-gray-900">Problem</button>
            <button onClick={() => scrollToSection('solution')} className="text-gray-700 hover:text-gray-900">Lösung</button>
            <button onClick={() => scrollToSection('success')} className="text-gray-700 hover:text-gray-900">Erfolg</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-gray-900">Preise</button>
            <button onClick={() => scrollToSection('calculator')} className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
              📊 ROI Rechner
            </button>
          </nav>
        </div>
      </header>

      {/* Red Banner */}
      <div className="bg-red-600 text-white py-3 text-center">
        <div className="flex items-center justify-center space-x-4">
          <span>📞 Kostenlose Erstberatung - Begrenzte Kapazitäten</span>
          <div className="flex space-x-4 text-sm">
            <div className="text-center">
              <div className="text-xl font-bold">6</div>
              <div className="text-xs">Tage</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">23</div>
              <div className="text-xs">Std</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">58</div>
              <div className="text-xs">Min</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">34</div>
              <div className="text-xs">Sek</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Effizienz steigern mit der <span className="text-red-600">richtigen Digitalisierung</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Fokus auf messbare Ergebnisse und nachhaltigen Erfolg für deutsche KMUs
          </p>
          <button 
            onClick={() => scrollToSection('calculator')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium mb-12"
          >
            Kostenloses Einsparpotenzial berechnen
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span className="text-gray-700">100% kostenlos</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span className="text-gray-700">Keine Verpflichtung</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✓</span>
              <span className="text-gray-700">Messbare Ergebnisse</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-700">4.9/5 Kundenbewertung</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">👥 150+ erfolgreiche Projekte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kennen Sie das auch?</h2>
            <p className="text-xl text-gray-600">Diese Probleme kosten deutsche KMUs täglich Tausende von Euro</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chaos in der IT-Landschaft</h3>
              <p className="text-gray-600">
                5+ verschiedene Software-Lösungen, die nicht miteinander sprechen. Doppelerfassung, Excel-Listen und manuelle Prozesse überall.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fehlende Digitalisierungsstrategie</h3>
              <p className="text-gray-600">
                Ohne klare Strategie werden IT-Investitionen zur Kostenfalle. Unkoordinierte Einzellösungen führen zu Ineffizienz und Mehrkosten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Endlose IT-Projekte</h3>
              <p className="text-gray-600">
                12-18 Monate Implementierung ohne klare Erfolgsmessung. Berater verschwinden nach Go-Live und lassen Sie allein.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900 mb-6">
              <strong>Das Ergebnis:</strong> Ihre Konkurrenz überholt Sie, während Sie noch mit veralteten Systemen kämpfen.
            </p>
            <button 
              onClick={() => scrollToSection('solution')}
              className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Ich will das ändern - Lösung zeigen →
            </button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Es gibt einen besseren Weg</h2>
            <p className="text-xl text-gray-600">
              <strong>Strategieberatung & Digitalisierung</strong> aus einer Hand. <strong>Maßgeschneiderte Lösungen</strong> für Ihr Unternehmen. <strong>90 Tage</strong> bis zu messbaren Ergebnissen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategieberatung</h3>
              <p className="text-gray-600">
                Individuelle Digitalisierungsstrategie für Ihr Unternehmen
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kosteneffizient</h3>
              <p className="text-gray-600">
                Maximale Effizienz bei optimalen Kosten
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="text-red-600 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Messbare Ergebnisse</h3>
              <p className="text-gray-600">
                Klare KPIs und regelmäßige Erfolgsmessung
              </p>
            </div>
          </div>

          {/* PISTA Method */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Die PISTA-Methode in 3 Schritten</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategieanalyse</h3>
                <p className="text-gray-600">
                  Wir analysieren Ihre Prozesse und entwickeln eine maßgeschneiderte Digitalisierungsstrategie
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ERP-Integration</h3>
                <p className="text-gray-600">
                  Implementierung einer integrierten Business-Software (basierend auf Odoo) für alle Geschäftsprozesse
                </p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-gray-300 mb-4">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kontinuierliche Optimierung</h3>
                <p className="text-gray-600">
                  Laufende Betreuung und Anpassung für maximale Effizienz und ROI
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('calculator')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium"
            >
              Kostenloses Einsparpotenzial berechnen
            </button>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ihr persönliches Einsparpotenzial</h2>
            <p className="text-xl text-gray-600">Berechnen Sie Ihre mögliche Ersparnis in 30 Sekunden</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Input Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ihre Eingaben</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Anzahl Mitarbeiter</label>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    value={employees}
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-gray-900">{employees}</div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Durchschnittlicher Stundenlohn (€)</label>
                  <input
                    type="range"
                    min="20"
                    max="80"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="text-center mt-2 text-2xl font-bold text-gray-900">{hourlyWage}</div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ihr Einsparpotenzial</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Gesparte Stunden/Woche:</span>
                    <span className="text-2xl font-bold text-red-600">{savedHours}h</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Jährliche Kosteneinsparung:</span>
                    <span className="text-2xl font-bold text-red-600">€{yearlySavings.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Zusätzlicher Umsatz:</span>
                    <span className="text-2xl font-bold text-blue-600">€{additionalRevenue.toLocaleString()}</span>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">Gesamtnutzen/Jahr:</span>
                    <span className="text-3xl font-bold text-red-600">€{totalBenefit.toLocaleString()}</span>
                  </div>
                </div>

                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg mt-6 font-medium">
                  Kostenlose Detailanalyse anfordern
                </button>
                
                <p className="text-sm text-gray-500 text-center mt-3">
                  Unverbindlich • Kostenlos • Binnen 24h Antwort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section id="success" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wie Bavaria Heizungstechnik 6-stellige Gewinne erzielte
            </h2>
            <p className="text-xl text-gray-600">Eine wahre Geschichte über die Macht der richtigen Digitalisierung</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Zoran Pozderovic</h3>
                  <p className="text-gray-600">Geschäftsführer</p>
                  <p className="text-gray-600">Bavaria Heizungstechnik GmbH</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">📈</span>
                    <span className="text-gray-700">6-stelliger Gewinn erreicht</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600">📊</span>
                    <span className="text-gray-700">7-stelliger Umsatz generiert</span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  Projektzeitraum: 8 Wochen | Branche: SHK-Handwerk
                </p>

                <blockquote className="text-lg text-gray-700 italic border-l-4 border-red-600 pl-4">
                  "PISTA hat unseren SHK-Meisterbetrieb revolutioniert. Von manuellen Prozessen zu 6-stelligen Gewinnen - das hätten wir nie für möglich gehalten."
                </blockquote>
              </div>

              <div>
                <div className="mb-6">
                  <h4 className="font-bold text-red-600 mb-2">Die Herausforderung:</h4>
                  <p className="text-gray-700">
                    Manuelle Angebotserstellung, ineffiziente Terminplanung, fehlende Kundenübersicht bei 70+ Wärmepumpen-Installationen jährlich
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-green-600 mb-2">Die PISTA-Lösung:</h4>
                  <p className="text-gray-700">
                    Integrierte ERP-Lösung mit automatisierter Angebotserstellung, digitaler Terminplanung und CRM-System für Heizungs- und Sanitärprojekte
                  </p>
                </div>

                <button className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 mb-6">
                  Vollständige Erfolgsgeschichte ansehen →
                </button>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">
                    <strong>Das könnte auch Ihre Geschichte sein.</strong> Lassen Sie uns gemeinsam Ihr Unternehmen transformieren.
                  </p>
                  <button className="text-gray-600 hover:text-gray-800">
                    Ähnliche Erfolge für mein Unternehmen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ineffiziente Prozesse kosten täglich wertvolle Zeit und Ressourcen
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Während Sie zögern, digitalisiert sich Ihre Konkurrenz. Warten Sie nicht länger - starten Sie heute auf der richtigen PISTA.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nächster verfügbarer Projektstart:</h3>
            <div className="text-5xl font-bold text-gray-400 mb-2">Q1 2026</div>
            <p className="text-gray-600">Aufgrund hoher Nachfrage</p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium">
            Kostenlose Strategieberatung sichern 📅
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparente Preise, maximaler Wert</h2>
            <p className="text-xl text-gray-600">Einmalige Investition für lebenslange Vorteile</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PISTA Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">€12.999</div>
              <p className="text-gray-600 mb-4">einmalig</p>
              <p className="text-sm text-gray-600 mb-6">
                Für Unternehmen bis 25 Mitarbeiter<br/>
                Ersetzt 3-5 separate Software-Lizenzen
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Umfassende Strategieberatung & Digitalisierungskonzept</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Vollständige ERP-Implementierung (6-8 Wochen)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Datenintegration aus bestehenden Systemen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Prozessautomatisierung (5 Kern-Workflows)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>+ 2 weitere Leistungen</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">Professionelle Betreuung</p>
              
              <button className="w-full border border-gray-400 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
                Mehr erfahren
              </button>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-red-600 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">EMPFOHLEN</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PISTA Professional</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">€24.999</div>
              <p className="text-gray-600 mb-4">einmalig</p>
              <p className="text-sm text-gray-600 mb-2">
                Für wachsende Unternehmen 25-100 Mitarbeiter<br/>
                Weniger als 2 Jahre typische ERP-Lizenzkosten
              </p>
              <p className="text-sm text-red-600 font-semibold mb-6">Optimale Kosten-Nutzen-Relation</p>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Alles aus Starter-Paket</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Erweiterte Strategieberatung & Roadmap-Entwicklung</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Multi-Standort-Setup & Berechtigungskonzept</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>API-Integrationen (E-Commerce, Buchhaltung, etc.)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>+ 2 weitere Leistungen</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">Professionelle Betreuung</p>
              
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg">
                Jetzt starten
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PISTA Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">€49.999</div>
              <p className="text-gray-600 mb-4">einmalig</p>
              <p className="text-sm text-gray-600 mb-2">
                Für Unternehmen ab 100 Mitarbeitern<br/>
                Bruchteil der Kosten einer SAP-Implementierung
              </p>
              <p className="text-sm text-blue-600 font-semibold mb-6">Maximale Effizienz & ROI</p>

              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Alles aus Professional-Paket</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>C-Level Strategieberatung & Transformation Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Vollständige Systemlandschaft-Integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Dedicated Project Manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>+ 2 weitere Leistungen</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-4">Premium-Support inklusive</p>
              
              <button className="w-full border border-gray-400 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
                Mehr erfahren
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              <strong>Unsicher welches Paket?</strong> Lassen Sie uns das gemeinsam in einem kostenlosen Gespräch klären.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-medium">
              Kostenlose Beratung vereinbaren 📞
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Starten Sie jetzt auf der richtigen PISTA
            </h2>
            <p className="text-xl text-gray-600">Kostenlose Analyse in 4 einfachen Schritten</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Schritt {currentStep} von 4</h3>
                <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}% abgeschlossen</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">IT-Budget</h3>
                <p className="text-gray-700 mb-6">Wie hoch ist Ihr jährliches IT-Budget? *</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['< 50.000€', '50.000€ - 100.000€', '100.000€ - 250.000€', '> 250.000€'].map((budget) => (
                    <button
                      key={budget}
                      onClick={() => setSelectedBudget(budget)}
                      className={`p-4 border rounded-lg text-left hover:bg-gray-50 ${
                        selectedBudget === budget ? 'border-red-600 bg-red-50' : 'border-gray-300'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentStep(2)}
                  disabled={!selectedBudget}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg disabled:opacity-50"
                >
                  Weiter
                </button>
              </div>
            )}

            {currentStep > 1 && (
              <div className="text-center">
                <p className="text-gray-600 mb-4">Vielen Dank für Ihr Interesse!</p>
                <p className="text-gray-600">
                  Unsere Experten werden sich binnen 24 Stunden bei Ihnen melden, um die weiteren Schritte zu besprechen.
                </p>
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
              <div className="text-2xl font-bold mb-4">
                <span className="text-black">PISTA</span>
                <span className="text-gray-500 font-normal ml-2">consulting</span>
              </div>
              <p className="text-gray-600">Auf der richtigen PISTA zum Erfolg</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Strategieberatung</li>
                <li>ERP-Integration</li>
                <li>Digitalisierung</li>
                <li>Prozessoptimierung</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Über uns</li>
                <li>Karriere</li>
                <li>Partner</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-600">
                <li>📞 +49 (0) 123 456 789</li>
                <li>✉️ info@pista.consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 PISTA Consulting. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 text-sm text-gray-600 mt-4 md:mt-0">
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
