import SectionReveal from "@/components/SectionReveal";

export default function LeadershipPage() {
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
              Leadership & Community Impact
            </h1>
            <p className="text-sm mb-2" style={{ color: 'var(--cream-light)', opacity: 0.75 }}>
              Proven experience in stakeholder management, organizational governance, and STEM advocacy within the educational sector.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pt-16 pb-24" style={{ background: 'var(--white)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            <article className="bg-white p-7">
              <p className="section-label mb-2">STUDENT ADVOCACY</p>
              <h2 className="font-display text-xl mb-3" style={{ color: 'var(--forest)' }}>Strategic Governance</h2>
              <div className="h-44 mb-4" style={{ background: 'var(--cream)' }} />
              <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Role 1: President | Education Students Association of Nigeria (ESAN), UNIZIK</p>
              <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Directed an executive council of 8 and represented the academic and welfare interests of over 5,000 students to the University Faculty.</p>
              <p className="text-sm" style={{ color: 'var(--forest)', opacity: 0.75 }}>Pioneered the "UNIZIK Digital Literacy Initiative," organizing workshops and academic quizzes to prepare pre-service teachers for the digital classroom.</p>
            </article>

            <article className="bg-white p-7">
              <p className="section-label mb-2">MENTORSHIP</p>
              <h2 className="font-display text-xl mb-3" style={{ color: 'var(--forest)' }}>Community Impact</h2>
              <div className="h-44 mb-4" style={{ background: 'var(--cream)' }} />
              <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Role 2: Volunteer Mentor | 3i-STEM Initiative & Chevening Alumni Nigeria</p>
              <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Served as a Brand Designer and Content Contributor for the Chevening Science Competition, developing the visual identity and STEM curriculum content.</p>
              <p className="text-sm" style={{ color: 'var(--forest)', opacity: 0.75 }}>Provided technical mentorship to junior secondary students in web development and cybersecurity, fostering a community of young digital enthusiasts</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
