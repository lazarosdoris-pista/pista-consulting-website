import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function ImprintPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Impressum
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-gray-700">
                PISTA Consulting<br />
                Lazaros Doris<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Kontakt
              </h2>
              <p className="text-gray-700">
                Telefon: [Telefonnummer]<br />
                E-Mail: info@pista.consulting
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-gray-700">
                Lazaros Doris<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                EU-Streitschlichtung
              </h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Verbraucherstreitbeilegung
              </h2>
              <p className="text-gray-700">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Haftung für Inhalte
              </h2>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Haftung für Links
              </h2>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                Urheberrecht
              </h2>
              <p className="text-gray-700 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">e-recht24.de</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
