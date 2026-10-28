import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-text-primary mb-6">
              We look after the software your business already depends on.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              TR Software Development Consulting exists to solve a specific
              problem: most businesses have critical systems, but no one is
              actively maintaining them.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content */}
      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Why we exist</h2>
              <div className="space-y-4 text-text-dark leading-relaxed">
                <p>
                  Most South African businesses depend on software that was
                  implemented years ago. The original developer has moved on.
                  The documentation is incomplete. Vendor support is expensive
                  and slow.
                </p>
                <p>
                  We built TR to be the answer to that problem. Not another
                  agency trying to sell you a new system. A partner who learns
                  what you have, documents it, and keeps it running.
                </p>
                <p>
                  We work across .NET, Java, TypeScript, React, Angular, and
                  cloud platforms. We maintain systems we did not build. We tell
                  you the truth about what we can and cannot support.
                </p>
              </div>

              <h2 className="mt-12 mb-6">Our approach</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Understand first",
                    desc: "We do not recommend changes until we understand the existing system.",
                  },
                  {
                    title: "Explain clearly",
                    desc: "We present findings and options in a way that non-technical decision-makers can understand.",
                  },
                  {
                    title: "Agree before acting",
                    desc: "No changes are made without written scope and approval.",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="border-l-2 border-gold pl-4"
                  >
                    <h4 className="mb-1 text-black">{value.title}</h4>
                    <p className="text-text-muted text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6">The team</h2>
              <div className="space-y-4">
                {[
                  {
                    role: "Founder & Principal Consultant",
                    focus:
                      "Sales, client relationships, architecture, delivery oversight",
                  },
                  {
                    role: "Senior Application Developer",
                    focus: ".NET/C# backend, API, database, integration",
                  },
                  {
                    role: "Senior Application Developer",
                    focus: "React/Angular frontend, integration, testing",
                  },
                  {
                    role: "Contract Designer",
                    focus: "UI/UX design, engaged per project",
                  },
                ].map((member, index) => (
                  <div
                    key={member.role}
                    className="bg-slate-50 p-5 border border-border-light rounded-md"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded bg-gold text-btn-text flex items-center justify-center font-sans text-xs font-bold">
                        {index + 1}
                      </div>
                      <h4 className="text-black">{member.role}</h4>
                    </div>
                    <p className="text-text-muted text-sm">{member.focus}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-50 p-6 rounded-md border border-border-light">
                <h4 className="mb-2 text-black">Part of the TR group</h4>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  TR Application Development is a separate division of the same
                  legal entity, focused on enterprise application development,
                  systems integration, and cloud deployment.
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  Clients benefit from a single relationship that spans the full
                  lifecycle: build, deploy, support, and enhance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-text-primary mb-4">
            Let's talk about your systems.
          </h2>
          <p className="text-text-secondary mb-8">
            The first step is a conversation. No pitch. Just understanding what
            you have and what you need.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
