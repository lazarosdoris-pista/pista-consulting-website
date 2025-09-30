import { ROICalculator } from './ROICalculator'

export function ROICalculatorSection() {
  return (
    <section id="roi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ihr persönliches Einsparpotenzial
          </h2>
          <p className="text-xl text-gray-600">
            Berechnen Sie Ihre mögliche Ersparnis in 30 Sekunden
          </p>
        </div>
        <ROICalculator />
      </div>
    </section>
  )
}
