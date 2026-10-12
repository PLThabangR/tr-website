import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  const team = [
    {
      role: "Founder & Principal Consultant",
      focus: "Sales, client relationships, architecture, delivery oversight",
    },
    {
      role: "Senior Application Developer",
      focus: ".NET/C# backend, API, database, integration",
    },
    {
      role: "Senior Application Developer",
      focus: "React/Angular frontend, integration, testing",
    },
    { role: "Contract Designer", focus: "UI/UX design, engaged per project" },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge mb-6 bg-african-green/20 text-african-green">
            About TRS
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            We look after the software your business already depends on.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            TR Software Development Consulting was founded in Midrand to fill a
            gap: most businesses have critical systems, but no one is
            maintaining them.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our story</h2>
              <div className="space-y-4 text-slate-gray leading-relaxed">
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
            </div>

            <div>
              <h2 className="mb-6">Our team</h2>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div
                    key={member.role}
                    className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-tech-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm">{member.role}</h4>
                      <p className="text-slate-gray text-sm">{member.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-12">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Reliability",
                desc: "We respond when we say we will. We fix what we promised to fix.",
              },
              {
                title: "Expertise",
                desc: "We understand systems built by others, on stacks we did not choose.",
              },
              {
                title: "Pragmatism",
                desc: "We recommend what is right, not what is trendy. If replacement is better than repair, we say so.",
              },
              {
                title: "Collaboration",
                desc: "We work alongside your team — DevOps, IT, business users — not above them.",
              },
              {
                title: "Transparency",
                desc: "You know what we are working on, what it costs, and why.",
              },
              {
                title: "Continuity",
                desc: "If something happens to one of us, another team member knows your system and can step in.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <div className="flex gap-3 mb-2">
                  <Check
                    className="text-african-green flex-shrink-0 mt-1"
                    size={18}
                  />
                  <h4>{value.title}</h4>
                </div>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="mb-4">Part of the TR group</h2>
            <p className="text-slate-gray leading-relaxed mb-6">
              TR Software Development Consulting operates alongside TR
              Application Development, a division of the same legal entity
              focused on enterprise application development, systems
              integration, and cloud deployment.
            </p>
            <div className="bg-light-blue p-6 rounded-xl border border-tech-blue/20">
              <p className="text-navy text-sm leading-relaxed">
                <strong>Group structure:</strong> TR Software Development
                Consulting (Pty) Ltd operates two complementary practices —
                Application Managed Services (this brand) and TR Application
                Development (a division for new builds, integrations, and cloud
                deployment). Clients benefit from a single relationship that
                spans the full lifecycle: build, deploy, support, and enhance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Let's talk about your systems.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
