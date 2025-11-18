import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.1),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/20">University Pathway Partner Programme</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
              Grow your study centre with a proven, premium pathway partner
            </h1>
            <p className="mt-4 text-lg text-blue-100">
              Launch or expand internationally recognised qualifications with the backing of a university-owned brand, trusted by 60+ global universities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#lead" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 transition-colors">
                Talk to us
              </a>
              <a href="#value" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 transition-colors">
                See the value
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-blue-200/80">
              <div>
                <p className="text-2xl font-bold text-white">35+</p>
                <p className="text-sm">Years of delivery</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">60+</p>
                <p className="text-sm">University partners</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Global</p>
                <p className="text-sm">Local account support</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'New revenue streams', desc: 'Premium, in-demand programmes drive enrolments and margins.' },
                  { title: 'Prestige by association', desc: 'Leverage the halo effect of our world-class university network.' },
                  { title: 'De-risked investment', desc: 'University-validated curriculum with quality assured.' },
                  { title: 'Faster time-to-market', desc: 'Structured 6-step onboarding and launch process.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-sm text-blue-200 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
