import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Wrench,
  Plug,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: ShieldCheck,
      title: "Application Managed Services",
      description:
        "Ongoing maintenance, bug fixes, enhancements, and support for your existing systems.",
    },
    {
      icon: Wrench,
      title: "Application Maintenance",
      description:
        "Updates, security patches, dependency management, and technical debt reduction.",
    },
    {
      icon: Plug,
      title: "Integrations & API Support",
      description:
        "Connecting your systems so data flows reliably between them.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Automation",
      description:
        "Dashboards, reports, and workflow automation that reduce manual work.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Conversation",
      desc: "We learn about your system and what is not working.",
    },
    {
      num: "02",
      title: "Health Check",
      desc: "We assess the system and give you a written report.",
    },
    {
      num: "03",
      title: "Proposal",
      desc: "We recommend a retainer scope and response times.",
    },
    {
      num: "04",
      title: "Ongoing Support",
      desc: "We maintain, fix, and improve your system month by month.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-tech-blue rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-african-green rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom section-padding">
          <div className="max-w-3xl">
            <div className="badge mb-6 bg-african-green/20 text-african-green">
              <CheckCircle2 size={14} />
              Application Managed Services
            </div>
            <h1 className="text-white mb-6">
              We keep your business systems running.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We maintain, support, and improve the software you already depend
              on — regardless of who built it. CRM, HR, payroll, custom
              applications, and the integrations between them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Book a System Health Check
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost">
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-gray">
            <span className="font-semibold text-navy">
              Technologies we support:
            </span>
            {[
              ".NET",
              "Java",
              "TypeScript",
              "React",
              "Angular",
              "SQL Server",
              "Azure",
              "AWS",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-1 bg-slate-50 rounded border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">
              Your systems are running. But who is maintaining them?
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Most South African businesses depend on software implemented years
              ago. The original developer has moved on. Your IT team is focused
              on infrastructure. Vendor support is expensive and slow. When
              something breaks, there is no one to call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Bugs go unfixed",
                desc: "Small issues become big problems because no one is responsible for resolving them.",
              },
              {
                icon: Users,
                title: "No one understands the code",
                desc: "The original team is gone. Documentation is missing. Changes feel risky.",
              },
              {
                icon: BarChart3,
                title: "Vendor support is costly",
                desc: "19–25% of license cost annually — and you still wait in a ticket queue.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-4">
                  <item.icon size={20} />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">
              A named person who knows your system — and responds when something
              breaks.
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              TR Software Development Consulting provides ongoing maintenance,
              support, and improvement for the applications your business
              depends on. We work across .NET, Java, TypeScript, React, Angular,
              and cloud platforms. We maintain systems we did not build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="card-icon">
                  <service.icon size={22} />
                </div>
                <h4 className="mb-2">{service.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why TR */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-12">Why businesses choose TR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "Multi-stack coverage",
                desc: "We support systems regardless of who built them — .NET, Java, TypeScript, React, Angular.",
              },
              {
                title: "We maintain systems we did not build",
                desc: "We learn your system, document it, and become the person you can call.",
              },
              {
                title: "SME-appropriate pricing",
                desc: "Lower than vendor support. More reliable than a freelancer.",
              },
              {
                title: "Named contact, not a ticket queue",
                desc: "You know who is working on your issue.",
              },
              {
                title: "Clear boundaries",
                desc: "We tell you what we do and what we do not. If replacement is better than repair, we say so.",
              },
              {
                title: "Enhancements included",
                desc: "Small changes to existing functionality are covered by your retainer, up to an agreed threshold.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2
                  className="text-african-green flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="mb-1">{item.title}</h4>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-12">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.num} className="relative">
                <div className="text-5xl font-bold text-tech-blue/20 mb-2 font-mono">
                  {item.num}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-deep-navy to-navy" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-tech-blue rounded-full blur-3xl opacity-10 -translate-x-1/2" />

        <div className="relative container-custom text-center">
          <h2 className="text-white mb-4">Start with a System Health Check</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            A fixed-fee assessment of your system's current state, risks, and
            quick wins. No commitment beyond the assessment.
          </p>
          <Link to="/contact" className="btn-primary">
            Book your health check
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
