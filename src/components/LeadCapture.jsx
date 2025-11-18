import React, { useState } from 'react'

function LeadCapture() {
  const [status, setStatus] = useState({ state: 'idle' })

  const submitLead = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    // Transform booleans
    payload.marketing_consent = payload.marketing_consent === 'on'

    setStatus({ state: 'loading' })
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus({ state: 'success', id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="lead" className="py-20 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Start the conversation</h2>
            <p className="text-blue-200 mt-3">
              Tell us about your institution and goals. Our regional team will reach out with a tailored partnership plan.
            </p>
            <ul className="mt-6 space-y-3 text-blue-100">
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-400/70" />No obligation, advisory first approach</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-400/70" />Local language, time zone and market expertise</li>
              <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-400/70" />We only proceed when the fit is right</li>
            </ul>
          </div>
          <form onSubmit={submitLead} className="rounded-2xl bg-white p-6 shadow-xl space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Institution name</label>
                <input name="centre_name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Website</label>
                <input name="website" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact name</label>
                <input name="contact_name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input name="country" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input name="city" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Interest level</label>
                <select name="interest_level" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select...</option>
                  <option value="exploring">Exploring</option>
                  <option value="meeting_requested">Meeting requested</option>
                  <option value="ready_to_apply">Ready to apply</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <textarea name="notes" rows="3" className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-2">
                <input id="consent" name="marketing_consent" type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="consent" className="text-sm text-gray-700">I agree to receive updates and information.</label>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
              {status.state === 'loading' ? 'Submitting...' : 'Request partnership info'}
            </button>

            {status.state === 'success' && (
              <p className="text-green-700 bg-green-50 border border-green-200 p-3 rounded-md text-sm">Thank you. Your enquiry has been received. Ref: {status.id}</p>
            )}
            {status.state === 'error' && (
              <p className="text-red-700 bg-red-50 border border-red-200 p-3 rounded-md text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default LeadCapture
