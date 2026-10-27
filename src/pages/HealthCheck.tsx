import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  FileText,
} from "lucide-react";

export default function HealthCheck() {
  return (
    <>
      <section className="bg-navy text-white border-b border-slate-800">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="font-mono text-sm text-tech-blue mb-4 uppercase tracking-wider">
              Signature Service
            </div>
            <h1 className="text-white mb-6">System Health Check</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl">
              A structured assessment of an existing business system. We
              investigate reliability, performance, maintainability and
              integration risks and give you a clear prioritised roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="mb-4">What we assess</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Application code and architecture",
                    "Database structure and health",
                    "Integrations with other systems",
                    "Security posture and access control",
                    "Performance and scalability risks",
                    "Documentation and maintainability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 items-start bg-slate-50 p-4 border border-slate-200 rounded-md"
                    >
                      <Check
                        className="text-african-green shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4">What you receive</h2>
                <p className="text-slate-600 mb-6">
                  A written technical report containing:
                </p>
                <ul className="space-y-4">
                  {[
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
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <FileText
                        className="text-tech-blue shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <div className="font-semibold text-navy">
                          {item.title}
                        </div>
                        <div className="text-slate-600 text-sm mt-1">
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6">How it works</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Initial conversation",
                      desc: "We discuss the system, the constraints, and the specific problems.",
                    },
                    {
                      step: "2",
                      title: "Access and assessment",
                      desc: "You grant us scoped access to the code, database, and infrastructure.",
                    },
                    {
                      step: "3",
                      title: "Report and findings",
                      desc: "We present the written report and walk you through what we found.",
                    },
                    {
                      step: "4",
                      title: "Recommended roadmap",
                      desc: "You decide whether to proceed with improvements or ongoing support.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-sm font-bold text-slate-600">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-6 border border-slate-200 rounded-lg sticky top-24">
                <h4 className="mb-2">Investment</h4>
                <div className="text-3xl font-bold text-navy mb-2">
                  R8,500 – R35,000
                </div>
                <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-200">
                  Depending on the scope and complexity of the system. Payment
                  is 100% upfront.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-navy mb-1">
                      <span>Mini Health Check</span>
                      <span className="font-mono">R8,500 – R12,000</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      1–2 days. Focused on immediate risks.
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-navy mb-1">
                      <span>Full Health Check</span>
                      <span className="font-mono">R25,000 – R35,000</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      5 days. Comprehensive review and roadmap.
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary w-full mb-4">
                  Book a Health Check
                  <ArrowRight size={18} />
                </Link>
                <p className="text-xs text-slate-500 text-center">
                  No commitment beyond the assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom max-w-3xl">
          <h2 className="mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What access do you need?",
                a: "Source code repository, database (read access), cloud console (scoped access), and any existing documentation.",
              },
              {
                q: "How long does it take?",
                a: "Mini: 1–2 days. Full: 5 business days. Both from the date access is granted.",
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
              <div key={faq.q} className="border-b border-slate-200 pb-6">
                <h4 className="mb-2 text-navy">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
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
