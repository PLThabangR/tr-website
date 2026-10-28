import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";

export default function HealthCheck() {
  const assessmentItems = [
    "Application code and architecture",
    "Database structure and health",
    "Integrations with other systems",
    "Security posture and access control",
    "Performance and scalability risks",
    "Documentation and maintainability",
  ];

  const deliverables = [
    {
      title: "Current state assessment",
      desc: "A clear explanation of what is working and what is fragile.",
    },
    {
      title: "Prioritised risk register",
      desc: "Identified risks ranked by severity and business impact.",
    },
    {
      title: "Quick wins",
      desc: "Issues that can be resolved easily to provide immediate stability.",
    },
    {
      title: "Improvement roadmap",
      desc: "A recommended path forward — maintain, improve, or replace.",
    },
  ];

  const faqs = [
    {
      q: "What access do you need?",
      a: "Source code repository, database with read access, cloud console with appropriately scoped access, and any existing documentation.",
    },
    {
      q: "How long does it take?",
      a: "Mini: 1–2 days. Full: 5 business days. Both timelines start once the required access is granted.",
    },
    {
      q: "What if we do not have documentation?",
      a: "That is common. We document what we find as part of the assessment.",
    },
    {
      q: "What happens after the health check?",
      a: "You receive a report. If you want ongoing support, we can propose a retainer. If replacement makes more sense, we will tell you that too.",
    },
  ];

  return (
    <>
      {/* Dark header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Entry Product
            </div>

            <h1 className="text-text-primary mb-6">System Health Check</h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              A fixed-fee assessment of your existing system. Find out what you
              have, what is at risk, and what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Light content */}
      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What we assess */}
              <div>
                <h2 className="mb-6 text-black">What we assess</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {assessmentItems.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 items-start bg-slate-50 p-4 border border-border-light rounded-md"
                    >
                      <CheckCircle2
                        className="text-gold shrink-0 mt-0.5"
                        size={18}
                      />

                      <span className="text-text-dark text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you receive */}
              <div>
                <h2 className="mb-4 text-black">What you receive</h2>

                <p className="text-text-muted mb-6">
                  A written technical report containing:
                </p>

                <ul className="space-y-4">
                  {deliverables.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <FileText className="text-gold shrink-0 mt-1" size={20} />

                      <div>
                        <div className="font-semibold text-text-dark">
                          {item.title}
                        </div>

                        <div className="text-text-muted text-sm mt-1">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing card */}
            <aside className="lg:col-span-1">
              <div className="bg-slate-50 p-6 border border-border-light rounded-lg lg:sticky lg:top-24">
                <h4 className="mb-2 text-text-dark">Investment</h4>

                <div className="text-3xl font-serif font-bold text-black mb-2">
                  R8,500 – R35,000
                </div>

                <p className="text-text-muted text-sm mb-6 pb-6 border-b border-border-light">
                  Depending on the scope and complexity of the system. Payment
                  is 100% upfront.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-2 text-sm font-semibold text-text-dark mb-1">
                      <span>Mini Health Check</span>
                      <span className="font-sans">R8,500 – R12,000</span>
                    </div>

                    <div className="text-xs text-text-muted">
                      1–2 days. Focused on immediate risks.
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-2 text-sm font-semibold text-text-dark mb-1">
                      <span>Full Health Check</span>
                      <span className="font-sans">R25,000 – R35,000</span>
                    </div>

                    <div className="text-xs text-text-muted">
                      5 business days. Comprehensive review and roadmap.
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-primary w-full mb-4 ring-offset-white"
                >
                  Book a Health Check
                  <ArrowRight size={18} />
                </Link>

                <p className="text-xs text-text-muted text-center">
                  No commitment beyond the assessment.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Light FAQ */}
      <section className="section-padding light-section border-t border-border-light">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-8 text-black">Frequently asked questions</h2>

          <div className="space-y-6 mb-6 leading-relaxed">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border-light pb-6">
                <h4 className="mb-2 text-text-dark">{faq.q}</h4>

                <p className="text-text-muted text-sm leading-relaxed">
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
