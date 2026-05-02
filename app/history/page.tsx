import SectionReveal from "@/components/SectionReveal";

export default function HistoryPage() {
  return (
    <>
           <section
  className="pt-24 pb-24 relative" 
  style={{ background: 'var(--forest)' }}
>
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
            style={{
              color: "var(--cream-light)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
            }}
          >
            Professional History
          </h1>  

          <p
            className="text-sm mb-2"
            style={{ color: "var(--cream-light)", opacity: 0.75 }}
          >
            A comprehensive record of my contributions to classroom instruction,
            educational administration, and public-sector technical design.
          </p>  
          </SectionReveal>     
        </div>
      </section>

      <section
        className="pt-32 pb-24"
        style={{ background: "var(--white)" }}
      >
                <SectionReveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-7">
            <article className="bg-white p-7">
              <h2
                className="font-display text-xl mb-1"
                style={{ color: "var(--forest)" }}
              >
                Secondary Computer Science Teacher | City Comprehensive
                Secondary School, Ogidi, Anambra State, Nigeria | Aug 2022 –
                Present
              </h2>
              <p className="section-label mb-3">PEDAGOGICAL IMPACT</p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Lead the Year 7–12 Computer Science curriculum, achieving a 95%
                pass rate by integrating industry-standard UI/UX and algorithmic
                logic.
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Systems Transformation: Successfully pioneered and implemented a
                Computer-Based Testing (CBT) platform for all class assessments,
                significantly improving grading accuracy and efficiency.
              </p>
              <p className="text-sm" style={{ color: "var(--forest)" }}>
                Digital Reporting: Led the school-wide digitisation of
                end-of-term academic results, enhancing data security and the
                accessibility of student progress reports for stakeholders.
              </p>
            </article>

            <article className="bg-white p-7">
              <h2
                className="font-display text-xl mb-1"
                style={{ color: "var(--forest)" }}
              >
                Product Designer (NYSC Gov-Tech Commission) | FourCore
                Integrated Services, Jabi, Abuja, Nigeria | Aug 2022 – Jul 2023
              </h2>
              <p className="section-label mb-3">TECHNICAL GOVERNANCE</p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Selected for a National Government-Mandated Service to design
                user-centric interfaces for public-sector digital
                infrastructure.
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Collaborated with engineering teams to develop accessible
                Gov-Tech solutions, ensuring compliance with data security and
                usability standards.
              </p>
              <p className="text-sm" style={{ color: "var(--forest)" }}>
                Translated complex governmental requirements into intuitive
                UI/UX prototypes, gaining technical insights now used to bridge
                the gap between industry and the classroom.
              </p>
            </article>

            <article className="bg-white p-7">
              <h2
                className="font-display text-xl mb-1"
                style={{ color: "var(--forest)" }}
              >
                Educational Data and Assessment Officer | Delight Secondary
                School, Ogidi, Anambra State, Nigeria | Sep 2021 – Jul 2021
              </h2>
              <p className="section-label mb-3">DATA & COMPLIANCE</p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Managed high-stakes WAEC examination registrations and candidate
                data with 100% regulatory compliance.
              </p>
              <p className="text-sm" style={{ color: "var(--forest)" }}>
                Digitised and analysed Continuous Assessment (CA) scores to
                identify learning gaps and inform school-wide instructional
                strategies.
              </p>
            </article>

            <article className="bg-white p-7">
              <h2
                className="font-display text-xl mb-1"
                style={{ color: "var(--forest)" }}
              >
                Teaching Practice (Supervised) | Nnamdi Azikiwe University High
                School, Awka, Anambra State, Nigeria. | Sep 2019 – Dec 2019
              </h2>
              <p className="section-label mb-3">SUPERVISED PRACTICE</p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Completed an intensive 12-week supervised teaching placement (6
                Credit Hours) delivering Computer Science instruction to
                secondary students aged 12–18 (Years 7–12).
              </p>
              <p className="text-sm mb-2" style={{ color: "var(--forest)" }}>
                Developed and implemented original digital learning aids that
                significantly improved student participation and technical
                comprehension across senior secondary levels.
              </p>
              <p className="text-sm" style={{ color: "var(--forest)" }}>
                Collaborated with mentor teachers to refine classroom management
                and evidence-based pedagogical strategies in a high-standard
                school environment.
              </p>
            </article>
          </div>
        </div>
        </SectionReveal>
      </section>
    </>
  );
}
