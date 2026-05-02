import SectionReveal from "@/components/SectionReveal";
import { Mail, Linkedin, Phone, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        className="pt-28 pb-20 relative overflow-visible"
        style={{ background: "var(--forest-dark)" }}
      >
        {/* Layer 1: background image */}
        <img
          src="hero-bg.png"
          alt="blackboard"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Layer 2: dark forest overlay — adjust opacity to taste (0.6–0.8) */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "var(--forest-dark)", opacity: 0.9 }}
        />

        {/* Layer 3: content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="section-label mb-2 text-sm">HELLO, I'M</p>
                <h1
                  className="font-display"
                  style={{
                    color: "var(--cream-light)",
                    fontSize: "clamp(2rem, 4.5vw, 4rem)",
                    lineHeight: "1.15",
                  }}
                >
                  Solumtochukwu S. <br /> (<span className="italic">Somto</span>
                  ) Ikegbunam
                </h1>
              </div>
              <div
                className="relative max-w-md"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  padding: "24px 24px",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-48px",
                    right: "4px",
                    fontSize: "160px",
                    lineHeight: "1",
                    color: "var(--amber-light)",
                    opacity: 0.20,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  &#8220;
                </span>
                <p
                  className="font-display text-xl leading-relaxed italic"
                  style={{ color: "var(--cream-light)" }}
                >
                  The success of a teacher is measured by the independence of
                  the student.
                </p>
              </div>

              <p
                className="text-base md:text-lg max-w-md leading-relaxed"
                style={{ color: "var(--cream)", opacity: 0.8 }}
              >
                Computer Science Educator & Product Designer | Specialized in
                UI/UX Integration and Data-Driven STEM Instruction.
              </p>

              <div className="grid lg:grid-cols-2 items-center gap-2 max-w-md">
                <Link
                  href="/contact"
                  className="btn-primary text-sm justify-center"
                >
                  <span className="flex items-center gap-3">
                    contact me <ArrowRight size={16} />
                  </span>
                </Link>
                <button className="btn-secondary text-sm justify-center">
                  <span className="flex items-center gap-3">
                    DOWNLOAD CV <Download size={16} />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <img
                src="solumto-portrait.jpg"
                alt="Ikegbunam Solumtochukwu"
                className="w-full h-[400px] object-cover"
              />
              <h2
                className="font-display text-xl mb-2"
                style={{ color: "var(--white)" }}
              >
                Solumto S. (Somto) Ikegbunam
              </h2>
              <p
                className="text-sm mb-1"
                style={{ color: "var(--cream)", opacity: 0.85 }}
              >
                B.Sc.(Ed) in Computer Science Education (Hons)
              </p>
              <p
                className="text-sm mb-3"
                style={{ color: "var(--cream)", opacity: 0.85 }}
              >
                Licensed Professional Teacher (TRCN)
              </p>
              <a
                href="mail:somtoikegbunam@gmail.com"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--cream)" }}
              >
                <Mail size={14} />
                somtoikegbunam@gmail.com
              </a>
              <a
                href="tel:+23408166371700"
                className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--cream)" }}
              >
                <Phone size={14} />
                +234(0)-8166371700
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 relative"
        style={{ background: "var(--cream-light)" }}
      >
        {/* Grid pattern — behind everything */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--cream) 1px, transparent 1px),
              linear-gradient(90deg, var(--cream) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />

        {/* Content — above grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="section-label mb-1">MY BACKGROUND</p>
            <h2
              className="font-display mb-8"
              style={{
                color: "var(--forest)",
                fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
              }}
            >
              About
            </h2>
            <div
              className="space-y-5 text-l leading-relaxed"
              style={{ color: "var(--forest)", opacity: 0.95 }}
            >
              <p>
                Solumto S. (Somto) Ikegbunam is a Computer Science educator and
                industry-aligned Product Designer with a Bachelor of Science
                (Education) in Computer Science Education (Hons) from Nnamdi
                Azikiwe University (UNIZIK). His work explores the intersection
                of pedagogy and technology, specifically integrating UI/UX
                design and cybersecurity ethics into secondary curricula.
                Following a National Youth Service Corps (NYSC) placement in the
                Gov-Tech sector, Somto focuses on preparing students for the
                global digital economy through practical, user-centric
                application.
              </p>
              <p>
                He has demonstrated exceptional leadership as President of the
                Education Students Association of Nigeria (ESAN) and as a Brand
                Designer for the Chevening Science Competition. Somto values
                collaborative problem-solving and is eager to contribute to
                educational institutions that utilize cutting-edge technologies
                to foster global digital literacy.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section
        className="py-20 relative"
        style={{ background: "var(--white)" }}
      >
        <SectionReveal>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="section-label mb-1">WHAT I'VE LEARNED</p>

            <h2
              className="font-display mb-8"
              style={{
                color: "var(--forest)",
                fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
              }}
            >
              Education
            </h2>
            <div className="grid md:grid-cols-3 gap-x-16 gap-y-16">
              <div className="bg-white">
                <p className="section-label mb-2">ACADEMIC BACKGROUND</p>
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Education
                </h3>
                <p
                  className="text-sm font-bold"
                  style={{ color: "var(--forest)" }}
                >
                  B.Sc.(Ed) in Computer Science Education (Hons)
                </p>
                <p className="text-sm" style={{ color: "var(--forest)" }}>
                  Nnamdi Azikiwe University (UNIZIK), Anambra, Nigeria.
                </p>
                <p
                  className="text-sm inline-block mt-1 px-2 py-0.5"
                  style={{
                    color: "var(--white)",
                    background: "var(--amber-light)",
                  }}
                >
                  Oct. 2016 – May 2021
                </p>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--forest)", opacity: 0.75 }}
                >
                  Research Project: Effects of the Use of Digital Instructional
                  Materials on the Academic Performance of Secondary School
                  Students.
                </p>
              </div>

              <div className="bg-white">
                <p className="section-label mb-2">CLASSROOM EXCELLENCE</p>
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Teaching and Pedagogy
                </h3>
                <ul className="space-y-2">
                  {[
                    "Differentiated Instruction",
                    "Data-Informed Assessment",
                    "Inquiry-Based Learning",
                    "Positive Classroom Management",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--forest)" }}
                    >
                      <span
                        className="w-2 h-2 shrink-0 rounded-sm"
                        style={{ background: "var(--amber-light)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white">
                <p className="section-label mb-2">INNOVATION & STEM</p>
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Digital Technologies
                </h3>
                <ul className="space-y-2">
                  {[
                    "UI/UX Design (Figma)",
                    "Computational Thinking (Python)",
                    "Cybersecurity & Digital Safety",
                    "ICT Integration",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--forest)" }}
                    >
                      <span
                        className="w-2 h-2 shrink-0 rounded-sm"
                        style={{ background: "var(--amber-light)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white">
                <p className="section-label mb-2">INTERACTION</p>
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Language
                </h3>
                <p className="text-sm" style={{ color: "var(--forest)" }}>
                  English: Native Speaker & Primary Language of Instruction.
                  Igbo: Native Proficiency.
                </p>
              </div>

              <div className="bg-white">
                <p className="section-label mb-2">OUT OF CLASSROOM</p>
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--forest)" }}
                >
                  Hobbies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Research",
                    "Graphic Design",
                    "Creative Writing",
                    "Photography",
                    "Community Mentoring",
                    "Reading",
                  ].map((hobby) => (
                    <span
                      key={hobby}
                      className="text-sm py-1.5 px-3 border tracking-widest"
                      style={{
                        borderColor: "var(--amber-light)",
                        color: "var(--forest-light)",
                        backgroundColor:
                          "color-mix(in srgb, var(--amber-light), transparent 90%)",
                        borderStyle: "solid",
                        borderRadius: "2px",
                      }}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section
        className="py-20 relative"
        style={{ background: "var(--forest-dark)" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
        linear-gradient(var(--forest) 1px, transparent 1px),
        linear-gradient(90deg, var(--forest) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <SectionReveal>
            <p className="section-label mb-1">WHAT I'VE LEARNED</p>
            <h2
              className="font-display mb-12"
              style={{
                color: "var(--cream-light)",
                fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
              }}
            >
              Education
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="section-label mb-2">ACADEMIC BACKGROUND</p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "var(--cream-light)" }}
              >
                Education
              </h3>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--cream-light)" }}
              >
                B.Sc.(Ed) in Computer Science Education (Hons)
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--cream)", opacity: 0.8 }}
              >
                Nnamdi Azikiwe University (UNIZIK), Anambra, Nigeria.
              </p>
              <p
                className="text-sm inline-block mt-2 px-2 py-0.5"
                style={{
                  color: "var(--forest-dark)",
                  background: "var(--amber-light)",
                }}
              >
                Oct. 2016 – May 2021
              </p>
              <p
                className="text-sm mt-3"
                style={{ color: "var(--cream)", opacity: 0.65 }}
              >
                Research Project: Effects of the Use of Digital Instructional
                Materials on the Academic Performance of Secondary School
                Students.
              </p>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="section-label mb-2">CLASSROOM EXCELLENCE</p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "var(--cream-light)" }}
              >
                Teaching and Pedagogy
              </h3>
              <ul className="space-y-3">
                {[
                  "Differentiated Instruction",
                  "Data-Informed Assessment",
                  "Inquiry-Based Learning",
                  "Positive Classroom Management",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--cream)", opacity: 0.85 }}
                  >
                    <span
                      className="w-2 h-2 shrink-0 rounded-sm"
                      style={{ background: "var(--amber-light)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="section-label mb-2">INNOVATION & STEM</p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "var(--cream-light)" }}
              >
                Digital Technologies
              </h3>
              <ul className="space-y-3">
                {[
                  "UI/UX Design (Figma)",
                  "Computational Thinking (Python)",
                  "Cybersecurity & Digital Safety",
                  "ICT Integration",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--cream)", opacity: 0.85 }}
                  >
                    <span
                      className="w-2 h-2 shrink-0 rounded-sm"
                      style={{ background: "var(--amber-light)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-6 rounded-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="section-label mb-2">INTERACTION</p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "var(--cream-light)" }}
              >
                Language
              </h3>
              <ul className="space-y-3">
                {[
                  "English — Native Speaker & Primary Language of Instruction",
                  "Igbo — Native Proficiency",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--cream)", opacity: 0.85 }}
                  >
                    <span
                      className="w-2 h-2 shrink-0 rounded-sm"
                      style={{ background: "var(--amber-light)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-6 rounded-lg md:col-span-2"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="section-label mb-2">OUT OF CLASSROOM</p>
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: "var(--cream-light)" }}
              >
                Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Research",
                  "Graphic Design",
                  "Creative Writing",
                  "Photography",
                  "Community Mentoring",
                  "Reading",
                ].map((hobby) => (
                  <span
                    key={hobby}
                    className="text-sm py-1.5 px-3 tracking-widest"
                    style={{
                      borderColor: "rgba(201,168,76,0.4)",
                      color: "var(--cream-light)",
                      backgroundColor: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      borderRadius: "2px",
                    }}
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
