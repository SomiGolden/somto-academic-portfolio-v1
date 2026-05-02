import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Somto Ikegbunam | Academic Portfolio',
  description: 'Computer Science Educator & Product Designer specialized in UI/UX integration and data-driven STEM instruction.',
  keywords: ['computer science education', 'ui ux', 'stem instruction', 'educator', 'product design'],
  authors: [{ name: 'Solumtochukwu S. Ikegbunam' }],
  openGraph: {
    title: 'Somto Ikegbunam | Academic Portfolio',
    description: 'Computer Science Educator & Product Designer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
