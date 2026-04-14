import { Link } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, PieChart, Zap, CreditCard, BarChart3, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  { icon: <TrendingUp className="w-6 h-6" />, title: 'Smart Tracking', desc: 'Automatically categorize and track every transaction in real-time.' },
  { icon: <PieChart className="w-6 h-6" />, title: 'Budget Planning', desc: 'Set budgets by category and get alerts before you overspend.' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Deep Analytics', desc: 'Visualize spending patterns with beautiful charts and reports.' },
  { icon: <Shield className="w-6 h-6" />, title: 'Bank-Grade Security', desc: '256-bit encryption keeps your financial data safe and private.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Instant Insights', desc: 'AI-powered insights help you make smarter financial decisions.' },
  { icon: <CreditCard className="w-6 h-6" />, title: 'Multi-Account', desc: 'Connect all your bank accounts and cards in one place.' },
]

const pricing = [
  { name: 'Free', price: '₹0', period: '/forever', features: ['Up to 2 accounts', 'Basic analytics', '50 transactions/month', 'Email support'], cta: 'Start Free', popular: false },
  { name: 'Pro', price: '₹299', period: '/month', features: ['Unlimited accounts', 'Advanced analytics', 'Unlimited transactions', 'Priority support', 'Budget alerts', 'Export reports'], cta: 'Start Pro Trial', popular: true },
  { name: 'Business', price: '₹799', period: '/month', features: ['Everything in Pro', 'Team collaboration', 'API access', 'Custom categories', 'Dedicated manager', 'White-label reports'], cta: 'Contact Sales', popular: false },
]

const testimonials = [
  { name: 'Priya Sharma', role: 'Freelancer', text: 'unmoney helped me track my freelance income and expenses effortlessly. My tax filing is so much easier now!', rating: 5 },
  { name: 'Rahul Verma', role: 'Startup Founder', text: 'The analytics dashboard gives me a clear picture of where every rupee goes. Best finance app I\'ve used.', rating: 5 },
  { name: 'Anita Desai', role: 'Teacher', text: 'Simple, beautiful, and powerful. I finally have control over my monthly budget thanks to unmoney.', rating: 5 },
]

export default function Landing() {
  return (
    <div className="bg-dark-950 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
              Your money, simplified
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
            Take Control of<br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Your Finances
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-dark-400 max-w-2xl mx-auto animate-fade-in-delay">
            Track expenses, set budgets, and get AI-powered insights to grow your wealth. 
            The smartest way to manage your money.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link to="/signup" className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2">
              Get Started Free <ArrowRight size={18} />
            </Link>
            <Link to="/dashboard" className="w-full sm:w-auto border border-white/10 hover:border-white/20 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all">
              View Demo
            </Link>
          </div>
          <p className="mt-4 text-dark-600 text-sm">No credit card required. Free forever plan available.</p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-5xl mx-auto mt-16 relative z-10 animate-fade-in-delay-2">
          <div className="bg-dark-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-dark-800/50 rounded-xl p-4 border border-white/5">
                <p className="text-dark-500 text-xs mb-1">Total Balance</p>
                <p className="text-2xl font-bold text-white">₹2,45,000</p>
                <p className="text-accent-400 text-xs mt-1">+12.5% from last month</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-4 border border-white/5">
                <p className="text-dark-500 text-xs mb-1">Monthly Income</p>
                <p className="text-2xl font-bold text-white">₹1,05,000</p>
                <p className="text-accent-400 text-xs mt-1">+8.2% from last month</p>
              </div>
              <div className="bg-dark-800/50 rounded-xl p-4 border border-white/5">
                <p className="text-dark-500 text-xs mb-1">Monthly Savings</p>
                <p className="text-2xl font-bold text-white">₹88,022</p>
                <p className="text-accent-400 text-xs mt-1">83.8% savings rate</p>
              </div>
            </div>
            <div className="h-32 bg-dark-800/30 rounded-xl border border-white/5 flex items-center justify-center">
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95].map((h, i) => (
                  <div key={i} className="w-6 sm:w-8 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to<br />manage your money</h2>
            <p className="mt-4 text-dark-400 text-lg max-w-2xl mx-auto">Powerful tools designed to give you complete control over your finances.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-dark-900/50 border border-white/5 rounded-2xl p-6 hover:border-primary-500/30 transition-all group">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-400 mb-4 group-hover:bg-primary-500/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
            <p className="mt-4 text-dark-400 text-lg">Start free. Upgrade when you need more.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${plan.popular ? 'bg-primary-600 border-primary-500 shadow-xl shadow-primary-500/20' : 'bg-dark-900/50 border-white/5'}`}>
                {plan.popular && <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-4">Most Popular</span>}
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.popular ? 'text-primary-200' : 'text-dark-500'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-primary-100' : 'text-dark-400'}`}>
                      <svg className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-accent-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${plan.popular ? 'bg-white text-primary-600 hover:bg-primary-50' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by thousands</h2>
            <p className="mt-4 text-dark-400 text-lg">See what our users have to say about unmoney.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-dark-900/50 border border-white/5 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-dark-300 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-dark-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to take control?</h2>
            <p className="text-primary-200 mb-8 text-lg">Join 50,000+ users who are already managing their money smarter with unmoney.</p>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
              Get Started for Free <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
