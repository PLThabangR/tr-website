import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  AlertTriangle,
  Wrench,
  Plug,
  FileSearch,
} from "lucide-react";

export default function Home() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Unreliable applications",
      desc: "Software that crashes, loads slowly or behaves inconsistently, disrupting daily operations.",
    },
    {
      icon: Plug,
      title: "Failing integrations",
      desc: "APIs that drop connections or exchange incomplete data between your CRM, ERP, and accounting systems.",
    },
    {
      icon: Wrench,
      title: "Hard-to-maintain systems",
      desc: "Legacy applications built years ago by developers who have since moved on.",
    },
    {
      icon: Server,
      title: "Manual workflows",
      desc: "Business processes that still rely on spreadsheets, email approvals, and manual data re-entry.",
    },
  ];

  const services = [
    {
      title: "Application Managed Services",
      desc: "Ongoing maintenance, bug fixes, enhancements, and support for your existing systems.",
      link: "/services",
    },
    {
      title: "System Health Check",
      desc: "A structured technical assessment of your application's current state, risks, and roadmap.",
      link: "/health-check",
    },
    {
      title: "Integration & API Support",
      desc: "Connecting systems so data flows reliably, and fixing integrations that have stopped working.",
      link: "/services",
    },
    {
      title: "Application Improvements",
      desc: "Building the specific features, reports and dashboards your business actually needs.",
      link: "/services",
    },
  ];

  return (
    <>
      {/* Section 1: Hero */}
      <section className="bg-navy text-white border-b border-slate-800">
        <div className="container-custom py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-sm text-tech-blue mb-4 uppercase tracking-wider">
              TR Software Development 
            </div>
            <h1 className="text-white mb-6">
              We keep your business systems running.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-4xl">
              We help businesses troubleshoot, maintain and improve existing applications, integrations and business workflows  so technical
              problems don't keep getting in the way of daily operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Book a System Health Check
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost">
                View our services
              </Link>
            </div>
            <div className="mt-8 text-sm font-mono text-african-green">
              Application support · Integrations · Performance · Technical
              improvements
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems We Solve */}
      <section className="section-padding bg-slate-50 border-b border-slate-200">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">What we fix</h2>
            <p className="text-slate-600">
              We step in when an existing system is causing friction, losing
              data, or has simply become too difficult to maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 border border-slate-200 rounded-md"
              >
                <div className="text-slate-400 mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="mb-4">How we help</h2>
              <p className="text-slate-600">
                Practical, focused engagements designed to resolve issues and
                improve the systems you already depend on.
              </p>
            </div>
            <Link
              to="/services"
              className="text-tech-blue font-medium flex items-center gap-2 hover:underline"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-t border-slate-200 pt-6"
              >
                <div className="text-sm font-mono text-slate-400 mb-2">
                  0{index + 1}
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  to={service.link}
                  className="text-sm font-medium text-tech-blue hover:text-navy transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="text-white mb-4">How an engagement works</h2>
            <p className="text-slate-300">
              We don't guess. We investigate the current state, present our
              findings, and agree on the next steps before implementing changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Understand",
                desc: "A conversation to understand the system, the constraints, and the specific problems.",
              },
              {
                step: "2",
                title: "Assess",
                desc: "A structured review of the code, database, integrations, and infrastructure.",
              },
              {
                step: "3",
                title: "Present",
                desc: "A written report detailing the risks, quick wins, and recommended roadmap.",
              },
              {
                step: "4",
                title: "Implement",
                desc: "Agreed improvements, ongoing support, or both.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-3xl font-bold font-mono text-slate-700 mb-3">
                  {item.step}
                </div>
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-4 -right-4 text-slate-700">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Proof / Signature Service */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light-blue text-tech-blue text-sm font-semibold mb-6">
                <FileSearch size={16} />
                Signature Engagement
              </div>
              <h2 className="mb-4">Start with a System Health Check.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A structured assessment of an existing business system. We
                investigate reliability, performance, maintainability, and
                integration risks and give you a clear prioritised roadmap
                for what to do next.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Written assessment of the application's current condition",
                  "Prioritised risk register with business impact explained",
                  "Practical improvement roadmap",
                  "Clear next steps for maintenance or replacement",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2
                      className="text-african-green shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/health-check" className="btn-secondary">
                Learn about the Health Check
              </Link>
            </div>

            {/* A sample report mockup (CSS only, no images needed) */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
                <div className="font-mono text-sm font-semibold text-navy">
                  SYSTEM_HEALTH_REPORT.pdf
                </div>
                <div className="text-xs text-slate-400">Confidential</div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Overall Status
                  </div>
                  <div className="flex items-center text-sm font-medium text-gold">
                    <div className="w-2 h-2 rounded-full bg-gold mr-2" />
                    Action Required (3 Critical Risks)
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                    Key Findings
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Database Backups</span>
                      <span className="font-mono text-red-500">
                        Not Verified
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">API Uptime</span>
                      <span className="font-mono text-gold">94.2%</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1">
                      <span className="text-slate-600">Dependencies</span>
                      <span className="font-mono text-red-500">
                        12 Outdated
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Documentation</span>
                      <span className="font-mono text-african-green">Good</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="section-padding bg-slate-50 border-t border-slate-200">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="mb-4">Let's talk about your systems.</h2>
          <p className="text-slate-600 mb-8">
            No sales pitch. Just a conversation about what is broken, what is
            working, and how we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
