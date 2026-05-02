'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'About' },
  { href: '/history', label: 'History' },
  { href: '/projects', label: 'Projects' },
  { href: '/leadership', label: 'Leadership' },
  { href: '/recognition', label: 'Recognition' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!scrolled ? 'text-white' : ''}`}
      style={{
        background: scrolled
          ? 'rgba(245, 236, 215, 0.95)'
          : 'transparent ',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(45,74,45,0.1)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 flex items-center justify-center text-xs font-mono font-medium"
            style={{ background: 'var(--forest-dark)', color: 'var(--cream-light)' }}
          >
            SSI
          </div>
          <span
            className="font-display text-sm tracking-widest uppercase hidden sm:block"
          >
            Solumto Ikegbunam
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs font-mono tracking-[0.10em] underline-animate transition-colors duration-200 ${
                  pathname === href ? 'nav-link-active' : ''
                }`}
                // style={{
                //   color: pathname === href ? 'var(--amber)' : 'var(--forest)',
                // }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          style={{ color: 'var(--forest)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'var(--white)',
            borderColor: 'rgba(45,74,45,0.1)',
          }}
        >
          <ul className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-mono tracking-[0.1em] block py-2"
                  style={{
                    color: pathname === href ? 'var(--amber)' : 'var(--forest)',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
