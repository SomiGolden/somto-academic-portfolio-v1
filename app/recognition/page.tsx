import SectionReveal from "@/components/SectionReveal";

export default function RecognitionPage() {
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
              Recognition
            </h1>
            <p className="text-sm mb-2" style={{ color: 'var(--cream-light)', opacity: 0.75 }}>
              Professional validations of pedagogical competency, technical expertise, and leadership excellence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-16 pb-24" style={{ background: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <article className="bg-white p-7 mb-8">
            <p className="section-label mb-2">LICENSES & SPECIALISATIONS</p>
            <h2 className="font-display text-xl mb-3" style={{ color: 'var(--forest)' }}>Professional Standing</h2>
            <div className="grid md:grid-cols-4 gap-3 mb-4">
              <div className="h-28" style={{ background: 'var(--cream)' }} />
              <div className="h-28" style={{ background: 'var(--cream)' }} />
              <div className="h-28" style={{ background: 'var(--cream)' }} />
              <div className="h-28" style={{ background: 'var(--cream)' }} />
            </div>
            <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>TRCN (Professional License): National validation of pedagogical competency and professional ethics.</p>
            <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Google Professional Certificates: UX Design & Cybersecurity; applied to developing accessible digital learning interfaces.</p>
            <p className="text-sm" style={{ color: 'var(--forest)' }}>NITDA Cybersecurity Professional: Advanced technical validation in cybersecurity operations and safe digital environments.</p>
          </article>

          <article className="bg-white p-7">
            <p className="section-label mb-2">PIONEERING LEADERSHIP</p>
            <h2 className="font-display text-xl mb-4" style={{ color: 'var(--forest)' }}>Awards of Excellence</h2>
            <div className="space-y-4 text-sm" style={{ color: 'var(--forest)' }}>
              <p><strong>Award of Service (ASES):</strong> "Recognised as the First Faculty President from the Dept. of Science Education (2018/19). Commemorates pioneering leadership in foundational governance and association growth."</p>
              <p><strong>Alumni Achievement Award (2025):</strong> "Recognised by the Science Education Dept, UNIZIK for outstanding professional contributions to Computer Science education."</p>
              <p><strong>Award of Service (ESAN):</strong> "Commendation for pioneering digital literacy initiatives and student advocacy during tenure as President."</p>
              <p><strong>Award of Merit (SUG):</strong> "Recognition of impactful leadership and dedication to student welfare within the university community."</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
