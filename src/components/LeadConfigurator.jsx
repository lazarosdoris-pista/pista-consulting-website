
import React, { useState } from 'react';

const LeadConfigurator = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [contactData, setContactData] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Was ist Ihr jährliches IT-Budget?',
      options: [
        { label: '< 50.000€', value: '<50k' },
        { label: '50.000€ - 100.000€', value: '50-100k' },
        { label: '100.000€ - 250.000€', value: '100-250k' },
        { label: '> 250.000€', value: '>250k' },
      ],
    },
    {
      id: 2,
      question: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
      options: [
        { label: '< 10', value: '<10' },
        { label: '10 - 50', value: '10-50' },
        { label: '50 - 200', value: '50-200' },
        { label: '> 200', value: '>200' },
      ],
    },
    {
      id: 3,
      question: 'Welches Thema ist für Sie am relevantesten?',
      options: [
        { label: 'Odoo ERP Implementierung', value: 'odoo_erp' },
        { label: 'Digitalisierungsstrategie', value: 'digital_strategy' },
        { label: 'Prozessoptimierung', value: 'process_optimization' },
        { label: 'KI & Automatisierung', value: 'ai_automation' },
      ],
    },
    {
      id: 4,
      question: 'Wann möchten Sie Ihr Projekt starten?',
      options: [
        { label: 'Innerhalb 1 Monats', value: '1_month' },
        { label: '1-3 Monate', value: '1-3_months' },
        { label: '3-6 Monate', value: '3-6_months' },
        { label: 'Später', value: 'later' },
      ],
    },
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
    setStep(step + 1);
  };

  const handleContactChange = (field, value) => {
    setContactData({ ...contactData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!contactData.email || !contactData.name || !contactData.phone) {
      alert('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the lead data
      const leadData = {
        ...answers,
        email: contactData.email,
        name: contactData.name,
        company: contactData.company || 'Nicht angegeben',
        phone: contactData.phone,
        timestamp: new Date().toISOString(),
      };

      // Send to backend API
      const response = await fetch('http://localhost:3001/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        setShowThankYou(true);
        // Reset after 5 seconds
        setTimeout(() => {
          setStep(1);
          setAnswers({});
          setContactData({});
          setShowThankYou(false);
        }, 5000);
      } else {
        alert('Es gab einen Fehler beim Versenden. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Es gab einen Fehler beim Versenden. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const currentQuestion = questions.find((q) => q.id === step);

    // Show contact form after all questions
    if (step === questions.length + 1) {
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Ihre Kontaktdaten
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1f1f1e' }}>
                E-Mail *
              </label>
              <input
                type="email"
                required
                value={contactData.email || ''}
                onChange={(e) => handleContactChange('email', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                placeholder="ihre.email@beispiel.de"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1f1f1e' }}>
                Name *
              </label>
              <input
                type="text"
                required
                value={contactData.name || ''}
                onChange={(e) => handleContactChange('name', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1f1f1e' }}>
                Firmenname (Optional)
              </label>
              <input
                type="text"
                value={contactData.company || ''}
                onChange={(e) => handleContactChange('company', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                placeholder="Ihre Firma"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1f1f1e' }}>
                Telefonnummer *
              </label>
              <input
                type="tel"
                required
                value={contactData.phone || ''}
                onChange={(e) => handleContactChange('phone', e.target.value)}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none"
                placeholder="+49 123 456789"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400"
              style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
            >
              {isSubmitting ? 'Wird versendet...' : 'Anfrage senden'}
            </button>
          </form>
        </div>
      );
    }

    if (!currentQuestion) {
      return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Vielen Dank für Ihre Angaben!
          </h2>
          <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
            Wir haben Ihre Präferenzen erfasst und melden uns in Kürze mit einem passenden Angebot bei Ihnen.
          </p>
          <div className="text-left mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>Ihre Auswahl:</h3>
            {Object.keys(answers).map((qId) => {
              const q = questions.find(qItem => qItem.id === parseInt(qId));
              const answerLabel = q.options.find(opt => opt.value === answers[qId])?.label;
              return (
                <p key={qId} className="text-gray-800 mb-2" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
                  <span className="font-semibold" style={{ color: '#1f1f1e' }}>{q.question}:</span> {answerLabel}
                </p>
              );
            })}
          </div>
          <button
            onClick={() => setStep(questions.length + 1)}
            className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}
          >
            Kontaktdaten eingeben
          </button>
        </div>
      );
    }

    const progress = (step / (questions.length + 1)) * 100;

    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
            Schritt {step} von {questions.length}
          </h2>
          <span className="text-red-600 font-semibold" style={{ fontFamily: 'Gomme Sans Bold, sans-serif' }}>{Math.round(progress)}% abgeschlossen</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Gomme Sans Regular, sans-serif', color: '#1f1f1e' }}>
          {currentQuestion.question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${answers[currentQuestion.id] === option.value ? 'border-red-600 bg-red-50 text-red-800' : 'border-gray-300 hover:border-gray-400 bg-white text-gray-800'}`}
              style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  if (showThankYou) {
    return (
      <section id="configurator" className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#E4002B' }}>
              Vielen Dank!
            </h2>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
              Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="configurator" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Gomme Sans Bold, sans-serif', color: '#1f1f1e' }}>
          Startschuss für Ihre Überholspur
        </h2>
        <p className="text-xl text-gray-600" style={{ fontFamily: 'Gomme Sans Regular, sans-serif' }}>
          Kostenlose Erstberatung in 4 einfachen Schritten. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
      </div>
      {renderStep()}
    </section>
  );
};

export default LeadConfigurator;

