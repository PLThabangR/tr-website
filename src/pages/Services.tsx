import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Briefcase,
  Plug,
  Wrench,
  Code2,
  BarChart3,
  Stethoscope,
  MonitorSmartphone,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "CRM Support",
      description:
        "Maintaining and supporting CRM platforms so your sales and customer data stays reliable.",
      features: [
        "Zoho, HubSpot, Dynamics, Salesforce, Pipedrive",
        "Configuration and workflow support",
        "CRM integrations and API support",
        "Reporting and dashboards",
        "User support and troubleshooting",
      ],
    },
    {
      icon: Users,
      title: "HR & Payroll Support",
      description:
        "Supporting HR and payroll systems so your people are paid correctly and on time.",
      features: [
        "Sage, SimplePay, and similar platforms",
        "Employee data workflows",
        "Leave and payroll integrations",
        "SARS compliance support",
        "User support and troubleshooting",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Application Support",
      description:
        "General application support for any business-critical system your organisation depends on.",
      features: [
        "Incident resolution and bug fixes",
        "Performance troubleshooting",
        "Configuration support",
        "Application monitoring",
        "Technical advice and guidance",
      ],
    },
    {
      icon: Plug,
      title: "Integrations & API Support",
      description:
        "Connecting your systems so data flows reliably between them.",
      features: [
        "REST API development and maintenance",
        "Webhook configuration",
        "Middleware setup",
        "Database-level integrations",
        "Failure diagnosis and recovery",
      ],
    },
    {
      icon: Wrench,
      title: "Application Maintenance",
      description: "Keeping your applications healthy, updated, and secure.",
      features: [
        "Application updates and patches",
        "Dependency upgrades",
        "Database maintenance",
        "Technical debt reduction",
        "Documentation",
      ],
    },
    {
      icon: MonitorSmartphone,
      title: "Front-End Application Maintenance",
      description:
        "Angular, React, and JavaScript applications need ongoing maintenance just like backends. Browser updates, library deprecations, and third-party API changes all break front-ends over time. We fix them, update them, and keep them working.",
      features: [
        "Bug fixes in Angular, React, and JavaScript/TypeScript",
        "Dependency and framework updates",
        "Browser compatibility fixes",
        "Performance optimisation",
        "Responsive and accessibility improvements",
        "Build pipeline maintenance",
      ],
    },
    {
      icon: Code2,
      title: "Custom Development",
      description:
        "Building features, modules, and extensions that your existing systems do not have.",
      features: [
        "Custom features and modules",
        "Application extensions",
        "New integrations",
        "API development",
        "UI improvements",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting & Automation",
      description:
        "Dashboards, reports, and workflow automation that reduce manual work.",
      features: [
        "Dashboard development",
        "Report generation and maintenance",
        "Workflow automation",
        "Scheduled jobs and notifications",
        "KPI tracking",
      ],
    },
    {
      icon: Stethoscope,
      title: "Application Health Checks",
      description:
        "Assessment of your existing systems — the entry point to everything else we do.",
      features: [
        "Code and architecture review",
        "Database and integration assessment",
        "Security posture review",
        "Written report with findings",
        "Recommended roadmap",
      ],
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      items: [
        "React",
        "Angular",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Java", "Spring Boot", ".NET", "C#"],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "GitHub Actions",
        "Azure DevOps",
        "Docker",
        "Terraform",
      ],
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge mb-6 bg-african-green/20 text-african-green">
            Our Services
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Everything you need to keep your systems running.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Nine service pillars covering CRM, HR, payroll, business
            applications, integrations, maintenance, front-end support, custom
            development, and reporting.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card group">
                <div className="card-icon">
                  <pillar.icon size={22} />
                </div>
                <h3 className="mb-3">{pillar.title}</h3>
                <p className="text-slate-gray mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-slate-gray"
                    >
                      <Check
                        size={16}
                        className="text-african-green shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-4">Technologies we support</h2>
          <p className="text-lg text-slate-gray mb-12 max-w-3xl leading-relaxed">
            We work with the stack your system is built on — not the stack we
            prefer. If your system uses a technology not listed here, we will
            assess whether we can support it during the discovery phase.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-gray text-sm font-mono"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Not sure which service you need?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start with a System Health Check. We will assess your system and
            recommend the right path forward.
          </p>
          <Link to="/health-check" className="btn-primary">
            Learn about Health Checks
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
