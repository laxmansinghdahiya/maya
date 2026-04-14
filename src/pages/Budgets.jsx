import Navbar from '../components/Navbar'
import { budgets } from '../data/mockData'
import { useState } from 'react'
import { Plus, AlertTriangle } from 'lucide-react'

export default function Budgets() {
  const [showAdd, setShowAdd] = useState(false)

  const totalLimit = budgets.reduce((s, b) => s + b.limit, 0)
  const totalSpent = budgets.reduce((s, b) => s + b.spent, 0)
  const totalPct = Math.round((totalSpent / totalLimit) * 100)

  return (
    <div className="bg-dark-50 min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark-900">Budgets</h1>
            <p className="text-dark-500 text-sm mt-1">Set and track your spending limits by category.</p>
          </div>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={16} /> New Budget
          </button>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-dark-900">Overall Budget</h2>
            <span className="text-sm text-dark-500">{totalPct}% used</span>
          </div>
          <div className="h-4 bg-dark-100 rounded-full overflow-hidden mb-2">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all"
              style={{ width: `${Math.min(totalPct, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-dark-500">₹{totalSpent.toLocaleString('en-IN')} spent</span>
            <span className="text-dark-400">₹{totalLimit.toLocaleString('en-IN')} budget</span>
          </div>
        </div>

        {/* Budget Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {budgets.map((b) => {
            const pct = Math.round((b.spent / b.limit) * 100)
            const isOver = pct >= 90
            const remaining = b.limit - b.spent

            return (
              <div key={b.id} className={`bg-white rounded-2xl border p-5 transition-all ${isOver ? 'border-red-200' : 'border-dark-200'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: b.color }} />
                    <h3 className="font-semibold text-dark-900 text-sm">{b.category}</h3>
                  </div>
                  {isOver && <AlertTriangle size={16} className="text-red-500" />}
                </div>

                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-dark-900">₹{b.spent.toLocaleString('en-IN')}</span>
                    <span className="text-sm text-dark-400">/ ₹{b.limit.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="h-2 bg-dark-100 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: pct >= 90 ? '#ef4444' : b.color }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${isOver ? 'text-red-500' : 'text-dark-500'}`}>{pct}% used</span>
                  <span className={`text-xs ${remaining < 0 ? 'text-red-500 font-medium' : 'text-dark-400'}`}>
                    {remaining >= 0 ? `₹${remaining.toLocaleString('en-IN')} left` : `₹${Math.abs(remaining).toLocaleString('en-IN')} over`}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
