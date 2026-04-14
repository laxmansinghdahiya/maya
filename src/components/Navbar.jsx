import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isLanding = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isLanding ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/5' : 'bg-white shadow-sm border-b border-dark-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <span className={`text-xl font-bold ${isLanding ? 'text-white' : 'text-dark-900'}`}>
              unmoney
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {isLanding ? (
              <>
                <a href="#features" className="text-dark-300 hover:text-white transition-colors text-sm">Features</a>
                <a href="#pricing" className="text-dark-300 hover:text-white transition-colors text-sm">Pricing</a>
                <a href="#testimonials" className="text-dark-300 hover:text-white transition-colors text-sm">Testimonials</a>
                <Link to="/login" className="text-dark-300 hover:text-white transition-colors text-sm">Log in</Link>
                <Link to="/signup" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get Started Free
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className={`text-sm font-medium transition-colors ${location.pathname === '/dashboard' ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'}`}>Dashboard</Link>
                <Link to="/transactions" className={`text-sm font-medium transition-colors ${location.pathname === '/transactions' ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'}`}>Transactions</Link>
                <Link to="/budgets" className={`text-sm font-medium transition-colors ${location.pathname === '/budgets' ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'}`}>Budgets</Link>
                <Link to="/analytics" className={`text-sm font-medium transition-colors ${location.pathname === '/analytics' ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'}`}>Analytics</Link>
                <Link to="/settings" className={`text-sm font-medium transition-colors ${location.pathname === '/settings' ? 'text-primary-600' : 'text-dark-500 hover:text-dark-900'}`}>Settings</Link>
              </>
            )}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
            {mobileOpen
              ? <X className={isLanding ? 'text-white' : 'text-dark-900'} size={24} />
              : <Menu className={isLanding ? 'text-white' : 'text-dark-900'} size={24} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden ${isLanding ? 'bg-dark-950 border-t border-white/5' : 'bg-white border-t border-dark-200'}`}>
          <div className="px-4 py-4 space-y-3">
            {isLanding ? (
              <>
                <a href="#features" className="block text-dark-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Features</a>
                <a href="#pricing" className="block text-dark-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Pricing</a>
                <a href="#testimonials" className="block text-dark-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Testimonials</a>
                <Link to="/login" className="block text-dark-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Log in</Link>
                <Link to="/signup" className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center" onClick={() => setMobileOpen(false)}>
                  Get Started Free
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="block text-dark-500 hover:text-dark-900 text-sm" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                <Link to="/transactions" className="block text-dark-500 hover:text-dark-900 text-sm" onClick={() => setMobileOpen(false)}>Transactions</Link>
                <Link to="/budgets" className="block text-dark-500 hover:text-dark-900 text-sm" onClick={() => setMobileOpen(false)}>Budgets</Link>
                <Link to="/analytics" className="block text-dark-500 hover:text-dark-900 text-sm" onClick={() => setMobileOpen(false)}>Analytics</Link>
                <Link to="/settings" className="block text-dark-500 hover:text-dark-900 text-sm" onClick={() => setMobileOpen(false)}>Settings</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
