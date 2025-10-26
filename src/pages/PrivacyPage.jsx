import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Datenschutzerklärung
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 space-y-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Allgemeine Hinweise
              </h3>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Wer ist verantwortlich für die Datenerfassung?
              </h3>
              <p className="text-gray-700 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum entnehmen.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="text-gray-700 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. IP-Adresse, Browser, Betriebssystem).
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Wofür nutzen wir Ihre Daten?
              </h3>
              <p className="text-gray-700 mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Welche Rechte haben Sie?
              </h3>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                2. Hosting
              </h2>
              <p className="text-gray-700 mb-4">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                3. Allgemeine Hinweise
              </h2>
              
              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Verantwortliche Stelle
              </h3>
              <p className="text-gray-700 mb-4">
                PISTA Consulting<br />
                Lazaros Doris<br />
                [Adresse]<br />
                <br />
                E-Mail: info@pista.consulting
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Widerruf Ihrer Einwilligung
              </h3>
              <p className="text-gray-700 mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Beschwerderecht
              </h3>
              <p className="text-gray-700 mb-4">
                Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Auskunft, Löschung und Berichtigung
              </h3>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
                4. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Cookies
              </h3>
              <p className="text-gray-700 mb-4">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Andere Cookies werden nur mit Ihrer Einwilligung gespeichert (Art. 6 Abs. 1 lit. a DSGVO).
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                Kontaktformular
              </h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>
                E-Mail, Telefon
              </h3>
              <p className="text-gray-700">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung bei uns gespeichert und verarbeitet.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">e-recht24.de</a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Stand: Oktober 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
