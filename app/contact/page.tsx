'use client'

import { useState } from 'react'
import { Mail, Linkedin, Phone } from 'lucide-react'
import SectionReveal from "@/components/SectionReveal";

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
    <>
      {/* Hero heading */}
      <section className="pt-24 pb-24 relative" style={{ background: 'var(--forest)' }}>
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--forest-dark) 1px, transparent 1px),
              linear-gradient(90deg, var(--forest-dark) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.4,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <h1
              className="font-display mb-1"
              style={{ color: 'var(--cream-light)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
            >
              Contact
            </h1>
            <p className="text-sm mb-2" style={{ color: 'var(--cream-light)', opacity: 0.75 }}>
              Open to global opportunities in Computer Science education, UI/UX design, and instructional leadership.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-16 pb-24" style={{ background: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
    </>
  )
}
