import SectionReveal from "@/components/SectionReveal";

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-24" style={{ background: 'var(--cream-light)' }}>
              {/* Grid pattern overlay */}
              <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
          linear-gradient(var(--forest-dark) 1px, transparent 1px),
      linear-gradient(90deg, var(--forest-dark) 1px, transparent 1px)
        `,
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="font-display mb-3" style={{ color: 'var(--forest)', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}>Projects</h1>
        <p className="text-sm mb-10" style={{ color: 'var(--forest)', opacity: 0.75 }}>Bridging academic research and Gov-Tech industry standards.</p>

        <div className="space-y-8">
          <article className="bg-white p-7 rounded-lg space-y-4">
            <p className="section-label mb-2">ACADEMIC PROJECT</p>
            <h2 className="font-display text-xl mb-3" style={{ color: 'var(--forest)' }}>Undergraduate Research (EDU 433)</h2>
            <img src="/cbt-school.jpg" alt="CBT & Digital Reporting" className="w-full h-[400px] object-cover rounded-lg" />
            <p className="text-sm mb-2" style={{ color: 'var(--forest)' }}>Effects of the Use of Digital Instructional Materials on the Academic Performance of Secondary School Students.</p>
            <p className="text-sm" style={{ color: 'var(--forest)', opacity: 0.75 }}>Investigated the correlation between interactive digital tools and student cognitive retention, providing evidence-based insights for modern ICT curricula.</p>
          </article>

          <article className="bg-white p-7 rounded-lg">
            <p className="section-label  mb-2">NYSC INDUSTRY EVIDENCE</p>
            <h2 className="font-display text-xl mb-3" style={{ color: 'var(--forest)' }}>Public Sector Infrastructure</h2>
            <div className="h-44 mb-4" style={{ background: 'var(--cream)' }} />
            <p className=" mb-2" style={{ color: 'var(--forest)' }}>Accessible and secure interface design for large-scale national systems (Vehicle Registration & Health Data Management).</p>
            <p className="text-sm" style={{ color: 'var(--forest)', opacity: 0.75 }}>Visuals are representative; actual project screens are protected by Non-Disclosure Agreements (NDA) due to national security protocols.</p>
          </article>

          <article className="bg-white p-7 space-y-4 rounded-lg">
            <p className="section-label mb-1">LEADERSHIP IN PRACTICE</p>
            <h2 className="font-display text-4xl mb-3 italic" style={{ color: 'var(--forest)' }}>CBT & Digital Reporting</h2>
            <img src="/cbt-school.jpg" alt="CBT & Digital Reporting" className="w-full h-[400px] object-cover rounded-lg" />
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                  <p className="p-1 mt-2 bg-amber-portfolio"></p>
                  <p>Pioneered the implementation of Computer-Based Testing (CBT) and the digitisation of end-of-term results at City Comprehensive Secondary School, Ogidi, Anambra State, Nigeria.</p>
              </li> 
              <li className="flex items-start gap-2">
                  <p className="p-1 mt-2 bg-amber-portfolio"></p>
            <p>Streamlined academic reporting for staff and increased data accessibility for over 200+ parents and stakeholders.</p>
              </li> 
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
