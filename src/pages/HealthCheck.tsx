import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  FileText,
  Search,
  Lightbulb,
  Map,
} from "lucide-react";

export default function HealthCheck() {
  const assessments = [
    "Application code and architecture",
    "Database structure and health",
    "Integrations with other systems",
    "Security posture",
    "Performance and scalability risks",
    "Documentation and maintainability",
  ];

  const deliverables = [
    "Current state assessment",
    "Identified risks and vulnerabilities",
    "Quick wins (issues that can be resolved easily)",
    "Recommended roadmap (maintain, improve, or replace)",
  ];

  const steps = [
    {
      icon: Search,
      title: "Initial conversation",
      desc: "We learn about your system and what is not working.",
    },
    {
      icon: FileText,
      title: "Access and assessment",
      desc: "You grant us access. We assess the system and document findings.",
    },
    {
      icon: Lightbulb,
      title: "Report and findings",
      desc: "We present the report and discuss what we found.",
    },
    {
      icon: Map,
      title: "Recommended roadmap",
      desc: "We recommend maintenance, improvement, or replacement — whichever is right.",
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge mb-6 bg-african-green/20 text-african-green">
            Entry Product
          </div>
          <h1 className="text-white mb-4 max-w-3xl">System Health Check</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            A fixed-fee assessment of your existing system. Find out what you
            have, what is at risk, and what to do next.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="mb-6">What we assess</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {assessments.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check
                        className="text-african-green flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-slate-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6">What you receive</h2>
                <p className="text-slate-gray mb-4">
                  A written report containing:
                </p>
                <ul className="space-y-3">
                  {deliverables.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <Check
                        className="text-african-green flex-shrink-0 mt-1"
                        size={18}
                      />
                      <span className="text-slate-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-8">How it works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="bg-slate-50 p-6 rounded-xl border border-slate-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-tech-blue/10 flex items-center justify-center text-tech-blue">
                          <step.icon size={20} />
                        </div>
                        <span className="text-sm font-mono text-slate-gray">
                          Step {index + 1}
                        </span>
                      </div>
                      <h4 className="mb-2">{step.title}</h4>
                      <p className="text-slate-gray text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-light-blue p-8 rounded-xl lg:sticky lg:top-24">
                <h4 className="mb-4">Investment</h4>
                <p className="text-4xl font-bold text-navy mb-2">
                  R8,500 – R15,000
                </p>
                <p className="text-slate-gray mb-6 text-sm">
                  Depending on system complexity. Payment 100% upfront.
                </p>
                <Link to="/contact" className="btn-primary w-full">
                  Book your health check
                  <ArrowRight size={18} />
                </Link>
                <p className="text-sm text-slate-gray mt-4">
                  No commitment beyond the assessment.
                </p>

                <div className="mt-8 pt-8 border-t border-tech-blue/20">
                  <h4 className="mb-3 text-sm">Pricing tiers</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-gray">Simple</span>
                      <span className="font-mono font-semibold">R8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-gray">Moderate</span>
                      <span className="font-mono font-semibold">R12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-gray">Complex</span>
                      <span className="font-mono font-semibold">R15,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-8">Frequently asked questions</h2>
          <div className="space-y-4 max-w-3xl">
            {[
              {
                q: "What access do you need?",
                a: "Source code repository, database (read access), cloud console (scoped access), and any existing documentation.",
              },
              {
                q: "How long does it take?",
                a: "7–10 business days from access being granted.",
              },
              {
                q: "What if we do not have documentation?",
                a: "That is common. We document what we find as part of the assessment.",
              },
              {
                q: "What happens after the health check?",
                a: "You receive a report. If you want ongoing support, we propose a retainer. If replacement makes more sense, we tell you that too.",
              },
              {
                q: "What if the system is too broken to assess?",
                a: "We will tell you during the initial conversation. If we cannot provide value, we will say so and not take the engagement.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-2">{faq.q}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
