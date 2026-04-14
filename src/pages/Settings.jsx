import Navbar from '../components/Navbar'
import { useState } from 'react'
import { User, Bell, Shield, CreditCard, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Settings() {
  const [name, setName] = useState('Laxman Singh')
  const [email, setEmail] = useState('laxman@unmoney.app')
  const [currency, setCurrency] = useState('INR')
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    budgetAlerts: true,
    weeklyReport: false,
  })

  return (
    <div className="bg-dark-50 min-h-screen">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-dark-900">Settings</h1>
          <p className="text-dark-500 text-sm mt-1">Manage your account preferences.</p>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <User size={20} className="text-primary-600" />
            <h2 className="text-lg font-semibold text-dark-900">Profile</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-600 mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-dark-200 rounded-xl px-4 py-2.5 text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-600 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-dark-200 rounded-xl px-4 py-2.5 text-sm text-dark-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-600 mb-1.5">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border border-dark-200 rounded-xl px-4 py-2.5 text-sm text-dark-900 focus:outline-none focus:border-primary-500 appearance-none bg-white"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (&euro;)</option>
                <option value="GBP">GBP (&pound;)</option>
              </select>
            </div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell size={20} className="text-primary-600" />
            <h2 className="text-lg font-semibold text-dark-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, enabled]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-dark-900 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-xs text-dark-500">Receive {key.replace(/([A-Z])/g, ' $1').toLowerCase().trim()} notifications</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}
                  className={`relative w-11 h-6 rounded-full transition-colors ${enabled ? 'bg-primary-600' : 'bg-dark-200'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${enabled ? 'translate-x-5' : ''}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={20} className="text-primary-600" />
            <h2 className="text-lg font-semibold text-dark-900">Security</h2>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left border border-dark-200 rounded-xl px-4 py-3 text-sm text-dark-700 hover:bg-dark-50 transition-colors">
              Change Password
            </button>
            <button className="w-full text-left border border-dark-200 rounded-xl px-4 py-3 text-sm text-dark-700 hover:bg-dark-50 transition-colors">
              Enable Two-Factor Authentication
            </button>
            <button className="w-full text-left border border-dark-200 rounded-xl px-4 py-3 text-sm text-dark-700 hover:bg-dark-50 transition-colors">
              Download Your Data
            </button>
          </div>
        </div>

        {/* Connected Accounts */}
        <div className="bg-white rounded-2xl border border-dark-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard size={20} className="text-primary-600" />
            <h2 className="text-lg font-semibold text-dark-900">Connected Accounts</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between border border-dark-200 rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-dark-900">HDFC Bank ****4521</p>
                <p className="text-xs text-dark-500">Savings Account</p>
              </div>
              <span className="text-xs bg-accent-50 text-accent-600 px-2 py-1 rounded-full font-medium">Connected</span>
            </div>
            <div className="flex items-center justify-between border border-dark-200 rounded-xl px-4 py-3">
              <div>
                <p className="text-sm font-medium text-dark-900">SBI Card ****8832</p>
                <p className="text-xs text-dark-500">Credit Card</p>
              </div>
              <span className="text-xs bg-accent-50 text-accent-600 px-2 py-1 rounded-full font-medium">Connected</span>
            </div>
            <button className="w-full border-2 border-dashed border-dark-200 rounded-xl px-4 py-3 text-sm text-dark-500 hover:border-primary-300 hover:text-primary-600 transition-colors">
              + Connect New Account
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl border border-red-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <LogOut size={20} className="text-red-500" />
            <h2 className="text-lg font-semibold text-dark-900">Account</h2>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="border border-dark-200 text-dark-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-dark-50 transition-colors">
              Sign Out
            </Link>
            <button className="border border-red-200 text-red-500 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-red-50 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
