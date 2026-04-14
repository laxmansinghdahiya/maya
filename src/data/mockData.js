export const transactions = [
  { id: 1, name: 'Grocery Store', category: 'Food & Dining', amount: -2450, date: '2026-04-13', icon: '🛒' },
  { id: 2, name: 'Salary Deposit', category: 'Income', amount: 85000, date: '2026-04-01', icon: '💰' },
  { id: 3, name: 'Netflix Subscription', category: 'Entertainment', amount: -649, date: '2026-04-10', icon: '🎬' },
  { id: 4, name: 'Electricity Bill', category: 'Utilities', amount: -1800, date: '2026-04-08', icon: '⚡' },
  { id: 5, name: 'Freelance Payment', category: 'Income', amount: 15000, date: '2026-04-05', icon: '💻' },
  { id: 6, name: 'Uber Ride', category: 'Transport', amount: -350, date: '2026-04-12', icon: '🚗' },
  { id: 7, name: 'Amazon Purchase', category: 'Shopping', amount: -3200, date: '2026-04-11', icon: '📦' },
  { id: 8, name: 'Gym Membership', category: 'Health', amount: -1500, date: '2026-04-01', icon: '🏋️' },
  { id: 9, name: 'Restaurant Dinner', category: 'Food & Dining', amount: -1200, date: '2026-04-09', icon: '🍽️' },
  { id: 10, name: 'Mobile Recharge', category: 'Utilities', amount: -599, date: '2026-04-07', icon: '📱' },
  { id: 11, name: 'Investment Return', category: 'Income', amount: 5000, date: '2026-04-03', icon: '📈' },
  { id: 12, name: 'Coffee Shop', category: 'Food & Dining', amount: -180, date: '2026-04-13', icon: '☕' },
  { id: 13, name: 'Insurance Premium', category: 'Insurance', amount: -4500, date: '2026-04-02', icon: '🛡️' },
  { id: 14, name: 'Book Purchase', category: 'Education', amount: -450, date: '2026-04-06', icon: '📚' },
  { id: 15, name: 'Parking Fee', category: 'Transport', amount: -100, date: '2026-04-12', icon: '🅿️' },
]

export const budgets = [
  { id: 1, category: 'Food & Dining', limit: 8000, spent: 3830, color: '#f59e0b' },
  { id: 2, category: 'Transport', limit: 3000, spent: 450, color: '#3b82f6' },
  { id: 3, category: 'Entertainment', limit: 2000, spent: 649, color: '#8b5cf6' },
  { id: 4, category: 'Shopping', limit: 5000, spent: 3200, color: '#ec4899' },
  { id: 5, category: 'Utilities', limit: 4000, spent: 2399, color: '#10b981' },
  { id: 6, category: 'Health', limit: 3000, spent: 1500, color: '#ef4444' },
  { id: 7, category: 'Insurance', limit: 5000, spent: 4500, color: '#6366f1' },
  { id: 8, category: 'Education', limit: 2000, spent: 450, color: '#14b8a6' },
]

export const monthlyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  income: [82000, 85000, 83000, 105000, 88000, 90000, 87000, 92000, 95000, 89000, 91000, 100000],
  expenses: [45000, 52000, 48000, 16978, 50000, 47000, 55000, 49000, 53000, 46000, 51000, 48000],
}

export const categoryBreakdown = [
  { category: 'Food & Dining', amount: 3830, percentage: 22.5, color: '#f59e0b' },
  { category: 'Shopping', amount: 3200, percentage: 18.8, color: '#ec4899' },
  { category: 'Insurance', amount: 4500, percentage: 26.5, color: '#6366f1' },
  { category: 'Utilities', amount: 2399, percentage: 14.1, color: '#10b981' },
  { category: 'Health', amount: 1500, percentage: 8.8, color: '#ef4444' },
  { category: 'Transport', amount: 450, percentage: 2.7, color: '#3b82f6' },
  { category: 'Entertainment', amount: 649, percentage: 3.8, color: '#8b5cf6' },
  { category: 'Education', amount: 450, percentage: 2.7, color: '#14b8a6' },
]

export const accountSummary = {
  totalBalance: 245000,
  monthlyIncome: 105000,
  monthlyExpenses: 16978,
  savings: 88022,
  savingsRate: 83.8,
}
