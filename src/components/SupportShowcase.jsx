import React from 'react'

function SupportShowcase() {
  const pillars = [
    {
      title: 'Academic',
      points: [
        'University-validated curriculum',
        'Assessment framework',
        'Access to the VLE'
      ]
    },
    {
      title: 'Onboarding',
      points: [
        'Formal accreditation',
        '6-step launch plan',
        'Go-to-market support'
      ]
    },
    {
      title: 'Training',
      points: [
        'Teacher training',
        'Staff accreditation',
        'Best-practice pedagogy'
      ]
    },
    {
      title: 'Marketing',
      points: [
        'Brand guidelines',
        'Ready-to-use materials',
        'Lead-gen support'
      ]
    },
    {
      title: 'Management',
      points: [
        'Dedicated regional team',
        'Local account management',
        'Ongoing success reviews'
      ]
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">A complete partner package</h2>
            <p className="text-blue-200 mt-3">
              Everything required to operate successfully from day one, with confidence and credibility.
            </p>
            <div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
              <p className="text-white font-semibold">35 years of success</p>
              <p className="text-blue-200 text-sm mt-1">University-owned, globally delivered, locally supported.</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div key={idx} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="text-white font-semibold text-xl">{p.title}</h3>
                <ul className="mt-4 space-y-2 text-blue-100">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/70" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportShowcase
