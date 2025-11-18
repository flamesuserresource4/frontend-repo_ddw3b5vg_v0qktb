import Hero from './components/Hero'
import ValueGrid from './components/ValueGrid'
import SupportShowcase from './components/SupportShowcase'
import LeadCapture from './components/LeadCapture'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="NCUK" className="w-8 h-8" />
            <span className="font-semibold">NCUK Partner Programme</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200">
            <a href="#value" className="hover:text-white">Value</a>
            <a href="#lead" className="hover:text-white">Partner with us</a>
            <a href="/test" className="hover:text-white">System test</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ValueGrid />
        <SupportShowcase />
        <LeadCapture />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-300">
          <p>© {new Date().getFullYear()} NCUK. All rights reserved.</p>
          <div className="text-sm">University-owned pathways • Local account management • 35+ years of success</div>
        </div>
      </footer>
    </div>
  )
}

export default App
