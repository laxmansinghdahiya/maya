import Navbar from '../components/Navbar'
import { monthlyData, categoryBreakdown, accountSummary } from '../data/mockData'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend)

export default function Analytics() {
  const barData = {
    labels: monthlyData.labels,
    datasets: [
      {
        label: 'Income',
        data: monthlyData.income,
        backgroundColor: '#10b981',
        borderRadius: 6,
        barPercentage: 0.6,
      },
      {
        label: 'Expenses',
        data: monthlyData.expenses,
        backgroundColor: '#6366f1',
        borderRadius: 6,
        barPercentage: 0.6,
      },
    ],
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { usePointStyle: true, pointStyle: 'circle', padding: 20, font: { size: 12 } },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: '#f1f5f9' },
        ticks: {
          callback: (value) => `₹${(value / 1000).toFixed(0)}k`,
          font: { size: 11 },
          color: '#94a3b8',
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, color: '#94a3b8' },
      },
    },
  }

  const doughnutData = {
    labels: categoryBreakdown.map(c => c.category),
    datasets: [
      {
        data: categoryBreakdown.map(c => c.amount),
        backgroundColor: categoryBreakdown.map(c => c.color),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
    },
  }

  return (
    <div className="bg-dark-50 min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-dark-900">Analytics</h1>
          <p className="text-dark-500 text-sm mt-1">Deep insights into your financial health.</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard label="Savings Rate" value={`${accountSummary.savingsRate}%`} subtitle="This month" color="text-accent-600" />
          <MetricCard label="Avg. Daily Spend" value={`₹${Math.round(accountSummary.monthlyExpenses / 30).toLocaleString('en-IN')}`} subtitle="This month" color="text-primary-600" />
          <MetricCard label="Largest Expense" value="₹4,500" subtitle="Insurance" color="text-red-500" />
          <MetricCard label="Income Sources" value="3" subtitle="Salary, Freelance, Investment" color="text-violet-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Income vs Expenses Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-dark-200 p-6">
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Income vs Expenses</h2>
            <div className="h-72">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white rounded-2xl border border-dark-200 p-6">
            <h2 className="text-lg font-semibold text-dark-900 mb-4">Spending by Category</h2>
            <div className="h-48 mb-6">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <div className="space-y-2">
              {categoryBreakdown.map((c, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span className="text-xs text-dark-600">{c.category}</span>
                  </div>
                  <span className="text-xs font-medium text-dark-900">{c.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Savings Trend */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mt-6">
          <h2 className="text-lg font-semibold text-dark-900 mb-4">Monthly Savings Trend</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">
            {monthlyData.labels.map((month, i) => {
              const savings = monthlyData.income[i] - monthlyData.expenses[i]
              const maxSavings = Math.max(...monthlyData.income.map((inc, j) => inc - monthlyData.expenses[j]))
              const heightPct = Math.max((savings / maxSavings) * 100, 10)
              return (
                <div key={i} className="text-center">
                  <div className="h-24 flex items-end justify-center mb-2">
                    <div
                      className="w-full max-w-8 bg-gradient-to-t from-accent-600 to-accent-400 rounded-t-md transition-all"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <p className="text-xs text-dark-500">{month}</p>
                  <p className="text-xs font-medium text-dark-700">₹{(savings / 1000).toFixed(0)}k</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

function MetricCard({ label, value, subtitle, color }) {
  return (
    <div className="bg-white rounded-2xl border border-dark-200 p-5">
      <p className="text-xs text-dark-500 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-xs text-dark-400 mt-1">{subtitle}</p>
    </div>
  )
}
