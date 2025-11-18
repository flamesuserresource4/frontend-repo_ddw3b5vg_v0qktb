import React from 'react'

function ValueGrid() {
  const blocks = [
    {
      heading: 'Customer jobs we support',
      items: [
        'Generate sustainable revenue and improve profitability',
        'Enhance brand and be seen as a premium provider',
        'Recruit more local and international students and retain them',
        'Expand portfolio with in-demand qualifications',
        'Deliver high-quality teaching and operations',
        'Build and maintain university progression relationships',
      ],
    },
    {
      heading: 'Key pains we remove',
      items: [
        'High cost and complexity of university progression agreements',
        'Difficulty getting programmes recognised by top-tier universities',
        'Risk, time and cost of creating quality curriculum from scratch',
        'Operational burden of global standards and assessments',
        'Slow time-to-market for new accredited programmes',
        "Switching hassle when an existing solution is in place",
        'Differentiation against local competition and agent models',
      ],
    },
    {
      heading: 'Turnkey support package',
      items: [
        'Academic: Full curriculum, assessment framework and VLE',
        'Onboarding: 6-step accreditation and launch process',
        'Training: Formal teacher training and accreditation',
        'Marketing: Materials, brand guidelines and lead-gen support',
        'Management: Ongoing regional and BD team support',
        'Brand licence: Use of a 35-year university-owned mark of quality',
        'University network: Access to 60+ partners (subject to conditions)'
      ],
    },
    {
      heading: 'Pain relievers',
      items: [
        'De-risked investment with validated curriculum',
        'Instant credibility with 60+ trusted universities',
        'Straightforward onboarding to launch (no false speed claims)',
        'Operational burden removed through central QA and assessment',
      ],
    },
    {
      heading: 'Gain creators',
      items: [
        'Brand halo effect from our network and heritage',
        'Reliability backed by 35+ years and global delivery',
        'Unlock new high-margin revenue streams',
        'Business-in-a-box: VLE, training, marketing ready to go',
        'Defensible competitive moat via a powerful USP',
      ],
    },
  ]

  return (
    <section id="value" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">The value, clearly laid out</h2>
        <p className="text-blue-200 text-center mt-3 max-w-3xl mx-auto">
          Designed for study centres that want premium outcomes with less risk and faster, reliable delivery.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold text-xl">{block.heading}</h3>
              <ul className="mt-4 space-y-2 text-blue-100">
                {block.items.map((it, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400/70" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueGrid
