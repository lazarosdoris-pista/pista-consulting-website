import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'

export function ROICalculator() {
  const [employees, setEmployees] = useState([50])
  const [hourlyWage, setHourlyWage] = useState([35])

  // Berechnungslogik basierend auf der ursprünglichen Website
  const savedHoursPerWeek = Math.round(employees[0] * 1.5) // 1.5 Stunden pro Mitarbeiter pro Woche
  const yearlySavings = savedHoursPerWeek * 52 * hourlyWage[0]
  const additionalRevenue = Math.round(yearlySavings * 0.2) // 20% zusätzlicher Umsatz
  const totalBenefit = yearlySavings + additionalRevenue

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
            <Calculator className="h-6 w-6 text-red-600" />
            <span>ROI-Rechner</span>
          </CardTitle>
          <CardDescription>
            Ermitteln Sie Ihr individuelles Einsparpotenzial durch Digitalisierung
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ihre Eingaben</h3>
              
              <div className="space-y-2">
                <Label htmlFor="employees">Anzahl Mitarbeiter: {employees[0]}</Label>
                <Slider
                  id="employees"
                  min={1}
                  max={500}
                  step={1}
                  value={employees}
                  onValueChange={setEmployees}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>1</span>
                  <span>500</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyWage">Durchschnittlicher Stundenlohn: {hourlyWage[0]}€</Label>
                <Slider
                  id="hourlyWage"
                  min={15}
                  max={100}
                  step={1}
                  value={hourlyWage}
                  onValueChange={setHourlyWage}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>15€</span>
                  <span>100€</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Annahme:</strong> Durch Digitalisierung können durchschnittlich 
                  1,5 Stunden pro Mitarbeiter pro Woche eingespart werden.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ihr Einsparpotenzial</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">
                          Gesparte Stunden/Woche
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">
                        {savedHoursPerWeek}h
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-900">
                          Jährliche Kosteneinsparung
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">
                        {formatCurrency(yearlySavings)}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">
                          Zusätzlicher Umsatz
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">
                        {formatCurrency(additionalRevenue)}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calculator className="h-5 w-5 text-red-600" />
                        <span className="text-sm font-medium text-red-900">
                          Gesamtnutzen/Jahr
                        </span>
                      </div>
                      <span className="text-3xl font-bold text-red-600">
                        {formatCurrency(totalBenefit)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                Kostenlose Detailanalyse anfordern
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Unverbindlich • Kostenlos • Binnen 24h Antwort
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
