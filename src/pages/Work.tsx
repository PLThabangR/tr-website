import { Link } from "react-router-dom";
import { ArrowRight, Car, Users, Workflow } from "lucide-react";

export default function Work() {
  const caseStudies = [
    {
      icon: Car,
      title: "Motor Insurance App",
      client: "Mid-sized short-term insurer",
      status: "Completed",
      summary:
        "A full-stack motor insurance management application built end-to-end on .NET, React, TypeScript, SQL Server, and Azure.",
      outcomes: [
        "Policy and quote management in a single system",
        "Digital claims workflow replacing email approvals",
        "Customer self-service portal",
        "Real-time reporting dashboard",
      ],
      stack: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "SQL Server",
        "Azure",
        "Docker",
        "Terraform",
      ],
    },
    {
      icon: Users,
      title: "Staff Portal & Workflow",
      client: "Professional services firm",
      status: "In Development",
      summary:
        "A staff portal with workflow digitisation, role-based access, and audit trails for a mid-market professional services firm.",
      outcomes: [
        "Digital leave requests and approvals",
        "Document repository with permissions",
        "Task dashboard",
        "Audit trail for all approvals",
      ],
      stack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
    },
    {
      icon: Workflow,
      title: "Approval Workflow System",
      client: "Confidential",
      status: "Planned",
      summary:
        "A workflow digitisation platform for replacing paper-based and email-based approvals with auditable digital processes.",
      outcomes: [
        "Configurable approval flows",
        "Digital forms with validation",
        "Automated notifications",
        "Compliance-ready audit trail",
      ],
      stack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge mb-6 bg-african-green/20 text-african-green">
            Our Work
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Systems we have maintained, fixed, and improved.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Every engagement begins with understanding what is already there.
            Here is what we have found and what we have done about it.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-white p-8 rounded-xl border border-slate-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center text-tech-blue">
                        <study.icon size={22} />
                      </div>
                      <div>
                        <h3 className="mb-1">{study.title}</h3>
                        <div className="text-xs text-slate-gray">
                          {study.client} •{" "}
                          <span className="font-semibold">{study.status}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-gray mb-6 leading-relaxed">
                      {study.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-slate-gray mb-3">
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {study.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-2 text-sm text-slate-gray"
                        >
                          <span className="text-african-green">✓</span>
                          <span>{outcome}</span>
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

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="mb-4">A note on case studies</h2>
            <p className="text-slate-gray leading-relaxed">
              Some clients prefer to remain anonymous. Where we cannot name the
              client, we describe the industry and the problem without
              identifying details. The technical work is real. The outcomes are
              real. We do not fabricate results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Want to see a detailed case study?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We can walk you through a completed project architecture, decisions,
            and outcomes. No sales pitch just the technical story.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a walkthrough
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
