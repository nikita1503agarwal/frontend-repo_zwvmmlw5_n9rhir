import React, { useState } from 'react'

const roles = ['coach', 'scout', 'agent', 'club']

function ContactForm({ player }) {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({
    player_slug: player.slug,
    name: '',
    role: 'coach',
    club_name: '',
    email: '',
    whatsapp: '',
    country: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/players/${player.slug}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Sent! The player will get your message by email.')
      setForm({ ...form, name: '', club_name: '', email: '', whatsapp: '', country: '', message: '' })
    } catch (err) {
      setStatus('Could not send. Please try again later.')
    }
  }

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact & Trial Requests</h2>
        <p className="mt-2 text-gray-600">Coaches, scouts, and clubs can reach out directly using the form below.</p>
        <form onSubmit={submit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="border rounded-md p-3 w-full" required />
          <select name="role" value={form.role} onChange={handleChange} className="border rounded-md p-3 w-full">
            {roles.map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
          </select>
          <input name="club_name" value={form.club_name} onChange={handleChange} placeholder="Club / Organization" className="border rounded-md p-3 w-full" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="border rounded-md p-3 w-full" />
          <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" className="border rounded-md p-3 w-full" />
          <input name="country" value={form.country} onChange={handleChange} placeholder="Country" className="border rounded-md p-3 w-full" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="border rounded-md p-3 w-full sm:col-span-2" rows={5} />
          <button type="submit" className="sm:col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md transition">Send Request</button>
        </form>
        {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
      </div>
    </section>
  )
}

export default ContactForm
