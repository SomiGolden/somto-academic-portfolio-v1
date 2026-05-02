'use client'

import { useState } from 'react'
import { Mail, Linkedin, Phone } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, integrate with a form service like Formspree / EmailJS
    setSubmitted(true)
  }

  const inputStyle = {
    background: 'white',
    border: '1px solid rgba(45,74,45,0.15)',
    color: 'var(--forest)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    width: '100%',
    padding: '0.75rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  return (
    <section className="pt-32 pb-24" style={{ background: 'var(--cream-light)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="font-display mb-3" style={{ color: 'var(--forest)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>Contact</h1>
        <p className="text-sm mb-10" style={{ color: 'var(--forest)', opacity: 0.75 }}>
          Open to global opportunities in Computer Science education, UI/UX design, and instructional leadership.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white p-7">
            <p className="section-label mb-2">ENQUIRIES</p>
            <h2 className="font-display text-4xl mb-4" style={{ color: 'var(--forest)' }}>Get in Touch</h2>
            <div className="space-y-4 text-sm" style={{ color: 'var(--forest)' }}>
              <p className="flex items-center gap-2"><Mail size={14} /> somtoikegbunam@gmail.com</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +234(0)8166371700</p>
              <p className="flex items-center gap-2"><Linkedin size={14} /> linkedin.com/in/solumtochukwu</p>
              <p>Location: Anambra, Nigeria (Open to Global Relocation)</p>
            </div>
          </div>

          <div className="bg-white p-7">
            {submitted ? (
              <p className="text-sm" style={{ color: 'var(--forest)' }}>Thanks for submitting!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="First Name" style={inputStyle} />
                  <input type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Last Name" style={inputStyle} />
                </div>
                <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email" style={inputStyle} className="mb-4" />
                <textarea name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Message" style={{ ...inputStyle, resize: 'vertical' }} className="mb-4" />
                <button type="submit" className="btn-primary">Send</button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
