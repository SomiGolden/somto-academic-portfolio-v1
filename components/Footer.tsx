import Link from 'next/link'
import { Mail, Linkedin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t"
      style={{
        background: 'var(--forest-dark)',
        borderColor: 'rgba(200,132,42,0.2)',
        color: 'var(--cream)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-4xl italic mb-3" style={{ color: 'var(--cream-light)' }}>
              I'd love to hear from you.
            </h3>
            <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-body)' }}>
              I am committed to the safety and wellbeing of all students. I hold a professional teaching license (TRCN) and am prepared to undergo all national and international background vetting and child protection protocols.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="section-label mb-5">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'About' },
                { href: '/history', label: 'History' },
                { href: '/projects', label: 'Projects' },
                { href: '/leadership', label: 'Leadership' },
                { href: '/recognition', label: 'Recognition' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity underline-animate"
                    style={{ color: 'var(--cream)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:somtoikegbunam@gmail.com"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--cream)' }}
              >
                <Mail size={14} />
                somtoikegbunam@gmail.com
              </a>
              <a
                href="http://linkedin.com/in/solumtochukwu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--cream)' }}
              >
                <Linkedin size={14} />
                LinkedIn Profile
              </a>
              <a
                href="tel:+23408166371700"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--cream)' }}
              >
                <Phone size={14} />
                +234(0)-8166371700
              </a>
              <a href="#" className="btn-primary w-fit mt-3">
              <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t text-xs opacity-40"
          style={{ borderColor: 'rgba(232,213,176,0.1)', fontFamily: 'var(--font-mono)' }}
        >
          <span>© 2026 By Solumtochukwu S. Ikegbunam</span>
          </div>
      </div>
    </footer>
  )
}
