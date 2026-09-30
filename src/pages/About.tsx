import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge mb-6 bg-african-green/20 text-african-green">
            About TR
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            We look after the software your business already depends on.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            TR Software Development Consulting was founded in Midrand, South
            Africa, to fill a gap: most businesses have critical systems, but no
            one is maintaining them.
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
              <h2 className="mb-6">Our values</h2>
              <div className="space-y-4">
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
                ].map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <Check
                      className="text-african-green shrink-0 mt-1"
                      size={18}
                    />
                    <div>
                      <h4 className="mb-1">{value.title}</h4>
                      <p className="text-slate-gray text-sm leading-relaxed">
                        {value.desc}
                      </p>
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
          <h2 className="mb-12">What we are building</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "Now",
                title: "Application Support",
                desc: "Keeping existing systems running for South African SMEs.",
              },
              {
                step: "Next",
                title: "Application Management",
                desc: "Full managed services across multiple systems and platforms.",
              },
              {
                step: "Later",
                title: "Application Integration",
                desc: "Connecting systems so data flows reliably across the business.",
              },
              {
                step: "Eventually",
                title: "Business Application Services",
                desc: "A complete application partner for growing businesses.",
              },
            ].map((phase, index) => (
              <div key={phase.step} className="relative">
                <div className="text-sm font-mono text-tech-blue mb-3">
                  {phase.step}
                </div>
                <h4 className="mb-2">{phase.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {phase.desc}
                </p>
                {index < 3 && (
                  <ArrowRight
                    className="hidden md:block absolute top-1 -right-3 text-slate-300"
                    size={20}
                  />
                )}
              </div>
            ))}
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
