import Navbar from '../components/Navbar'
import { accountSummary, transactions, budgets } from '../data/mockData'
import { TrendingUp, TrendingDown, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const recentTransactions = transactions.slice(0, 5)
  const topBudgets = budgets.slice(0, 4)

  return (
    <div className="bg-dark-50 min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-dark-900">Dashboard</h1>
          <p className="text-dark-500 text-sm mt-1">Welcome back! Here&apos;s your financial overview.</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <SummaryCard
            title="Total Balance"
            value={`₹${accountSummary.totalBalance.toLocaleString('en-IN')}`}
            change="+12.5%"
            positive
            icon={<Wallet className="w-5 h-5" />}
            color="primary"
          />
          <SummaryCard
            title="Monthly Income"
            value={`₹${accountSummary.monthlyIncome.toLocaleString('en-IN')}`}
            change="+8.2%"
            positive
            icon={<TrendingUp className="w-5 h-5" />}
            color="accent"
          />
          <SummaryCard
            title="Monthly Expenses"
            value={`₹${accountSummary.monthlyExpenses.toLocaleString('en-IN')}`}
            change="-15.3%"
            positive
            icon={<TrendingDown className="w-5 h-5" />}
            color="orange"
          />
          <SummaryCard
            title="Savings"
            value={`₹${accountSummary.savings.toLocaleString('en-IN')}`}
            change={`${accountSummary.savingsRate}%`}
            positive
            icon={<PiggyBank className="w-5 h-5" />}
            color="violet"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Transactions */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-dark-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-dark-900">Recent Transactions</h2>
              <Link to="/transactions" className="text-primary-600 text-sm font-medium hover:text-primary-700">View all</Link>
            </div>
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between py-3 border-b border-dark-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{tx.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-dark-900">{tx.name}</p>
                      <p className="text-xs text-dark-500">{tx.category} &middot; {new Date(tx.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${tx.amount > 0 ? 'text-accent-600' : 'text-red-500'}`}>
                    {tx.amount > 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    ₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Overview */}
          <div className="bg-white rounded-2xl border border-dark-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-dark-900">Budget Overview</h2>
              <Link to="/budgets" className="text-primary-600 text-sm font-medium hover:text-primary-700">View all</Link>
            </div>
            <div className="space-y-4">
              {topBudgets.map((b) => {
                const pct = Math.round((b.spent / b.limit) * 100)
                return (
                  <div key={b.id}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-dark-700">{b.category}</span>
                      <span className="text-xs text-dark-500">{pct}%</span>
                    </div>
                    <div className="h-2 bg-dark-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${Math.min(pct, 100)}%`, backgroundColor: b.color }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-dark-500">₹{b.spent.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-dark-400">of ₹{b.limit.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function SummaryCard({ title, value, change, positive, icon, color }) {
  const colorMap = {
    primary: 'bg-primary-50 text-primary-600',
    accent: 'bg-emerald-50 text-emerald-600',
    orange: 'bg-orange-50 text-orange-600',
    violet: 'bg-violet-50 text-violet-600',
  }

  return (
    <div className="bg-white rounded-2xl border border-dark-200 p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-dark-500">{title}</span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-dark-900">{value}</p>
      <p className={`text-xs mt-1 font-medium ${positive ? 'text-accent-600' : 'text-red-500'}`}>{change} from last month</p>
    </div>
  )
}
