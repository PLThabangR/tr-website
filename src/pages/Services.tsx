import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Application Managed Services",
      desc: "Ongoing maintenance, support and incremental improvement for the software your business already depends on.",
      points: [
        "Incident support and bug fixes",
        "Security patching and dependency updates",
        "Performance troubleshooting",
        "User support and application monitoring",
        "Monthly reporting",
      ],
    },
    {
      title: "System Health Check",
      desc: "A structured, fixed-fee assessment of an existing application's current state, risks and roadmap.",
      points: [
        "Code and architecture review",
        "Database and integration assessment",
        "Security posture review",
        "Prioritised risk register",
        "Written improvement roadmap",
      ],
    },
    {
      title: "Integration & API Support",
      desc: "Connecting systems so data flows reliably between them and fixing integrations that have stopped working.",
      points: [
        "REST API development and maintenance",
        "Webhook configuration",
        "Middleware setup",
        "Database-level integrations",
        "Failure diagnosis and recovery",
      ],
    },
    {
      title: "Front-End Application Maintenance",
      desc: "Angular, React, and JavaScript applications need ongoing maintenance just like backends.",
      points: [
        "Bug fixes in Angular, React, and TypeScript",
        "Dependency and framework updates",
        "Browser compatibility fixes",
        "Performance optimisation",
        "Build pipeline maintenance",
      ],
    },
    {
      title: "Application Improvements",
      desc: "Building the specific features, reports, and dashboards your business actually needs.",
      points: [
        "Custom features and modules",
        "Dashboard development",
        "Workflow automation",
        "Scheduled jobs and notifications",
        "KPI tracking",
      ],
    },
  ];

  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Services
            </div>
            <h1 className="text-text-primary mb-6">What we do</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-4xl">
              We focus on the practical, ongoing work required to keep business
              systems stable, secure and useful.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content */}
      <section className="section-padding light-section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-t border-border-light pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="text-sm font-sans text-gold mb-2">
                      0{index + 1}
                    </div>
                    <h2 className="text-2xl mb-2">{service.title}</h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-text-muted mb-6 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start text-sm text-text-dark"
                        >
                          <span className="text-gold mr-2 mt-0.5 font-bold">
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="mb-4">Need help with something specific?</h2>
          <p className="text-text-secondary mb-8">
            If your system is causing problems and you're not sure which service
            you need, start with a conversation.
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
