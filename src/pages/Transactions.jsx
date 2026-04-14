import Navbar from '../components/Navbar'
import { transactions } from '../data/mockData'
import { useState } from 'react'
import { Search, Filter, ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react'

export default function Transactions() {
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

  const categories = ['All', ...new Set(transactions.map(t => t.category))]

  const filtered = transactions.filter(tx => {
    const matchSearch = tx.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = categoryFilter === 'All' || tx.category === categoryFilter
    return matchSearch && matchCategory
  })

  const totalIncome = filtered.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = filtered.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0)

  return (
    <div className="bg-dark-50 min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-dark-900">Transactions</h1>
            <p className="text-dark-500 text-sm mt-1">Track and manage all your transactions.</p>
          </div>
          <button
            onClick={() => setShowAddModal(!showAddModal)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={16} /> Add Transaction
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-dark-200 p-4">
            <p className="text-dark-500 text-xs mb-1">Total Income</p>
            <p className="text-xl font-bold text-accent-600">₹{totalIncome.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white rounded-xl border border-dark-200 p-4">
            <p className="text-dark-500 text-xs mb-1">Total Expenses</p>
            <p className="text-xl font-bold text-red-500">₹{totalExpenses.toLocaleString('en-IN')}</p>
          </div>
          <div className="bg-white rounded-xl border border-dark-200 p-4">
            <p className="text-dark-500 text-xs mb-1">Net</p>
            <p className={`text-xl font-bold ${totalIncome - totalExpenses >= 0 ? 'text-accent-600' : 'text-red-500'}`}>
              ₹{(totalIncome - totalExpenses).toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transactions..."
                className="w-full pl-9 pr-4 py-2.5 border border-dark-200 rounded-xl text-sm text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div className="relative">
              <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-9 pr-8 py-2.5 border border-dark-200 rounded-xl text-sm text-dark-700 focus:outline-none focus:border-primary-500 appearance-none bg-white"
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-dark-100">
                  <th className="text-left text-xs font-medium text-dark-500 pb-3">Transaction</th>
                  <th className="text-left text-xs font-medium text-dark-500 pb-3 hidden sm:table-cell">Category</th>
                  <th className="text-left text-xs font-medium text-dark-500 pb-3 hidden md:table-cell">Date</th>
                  <th className="text-right text-xs font-medium text-dark-500 pb-3">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tx) => (
                  <tr key={tx.id} className="border-b border-dark-50 hover:bg-dark-50/50 transition-colors">
                    <td className="py-3.5">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{tx.icon}</span>
                        <span className="text-sm font-medium text-dark-900">{tx.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5 hidden sm:table-cell">
                      <span className="text-xs bg-dark-100 text-dark-600 px-2.5 py-1 rounded-full">{tx.category}</span>
                    </td>
                    <td className="py-3.5 text-sm text-dark-500 hidden md:table-cell">
                      {new Date(tx.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="py-3.5 text-right">
                      <span className={`flex items-center justify-end gap-1 text-sm font-semibold ${tx.amount > 0 ? 'text-accent-600' : 'text-red-500'}`}>
                        {tx.amount > 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        ₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-dark-400">
              <p className="text-sm">No transactions found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
