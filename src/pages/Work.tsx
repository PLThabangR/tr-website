import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const caseStudies = [
    {
      title: "Motor Insurance Application",
      client: "Mid-sized short-term insurer",
      status: "Completed",
      problem:
        "The client was managing policies, quotes, and claims across disconnected spreadsheets and email threads. There was no single view of risk, and customer queries required phoning the office.",
      solution:
        "We built a full-stack application to centralise policy administration, claims processing and customer data.",
      outcome:
        "The client now has a single source of truth for all policies and a self-service portal for customers to view their status.",
      tech: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Postgress",
        "Redis",
        "MediatR",
        "CQRS",
        "Azure",
        "Docker",
      ],
    },
    {
      title: "Staff Portal & Workflow",
      client: "Professional services firm",
      status: "In Development",
      problem:
        "Leave requests, document approvals, and timesheets were being managed through a mix of paper forms and email.",
      solution:
        "We are building a role-based staff portal to digitise approvals and centralise internal documents.",
      outcome:
        "The system will provide an audit trail for all approvals and eliminate manual data re-entry.",
      tech: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
    },
    {
      title: "ABC Properties Management System",
      client: "Property management",
      status: "Completed",
      problem:
        "Managing property listings and agent relationships requires structured data, reliable API endpoints, and a maintainable backend architecture.",
      solution:
        "We are building a property management REST API using ASP.NET Core 8, with dedicated application, domain, and infrastructure layers to manage property agents, property listings, and their relationships.",
      outcome:
        "The system aims to provide consistent API responses, validated requests, persistent data storage, and Redis caching through a modular backend designed for maintainability and future expansion.",
      tech: [
        "C#",
        "ASP.NET Core 8",
        "Entity Framework Core",
        "SQL Server",
        "Redis",
        "MediatR",
        "CQRS",
        "Docker",
      ],
    },
  ];

  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Work
            </div>
            <h1 className="text-text-primary mb-6">
              Systems we have fixed and built
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Every engagement starts with understanding what is already there.
              We do not fabricate results.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content */}
      <section className="section-padding light-section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="border border-border-light rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-border-light flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl mb-1">{study.title}</h3>
                    <div className="text-sm text-text-muted">
                      {study.client}
                    </div>
                  </div>
                  <div className="font-sans text-xs px-3 py-1 bg-white border border-border-light rounded-full text-text-dark">
                    Status: {study.status}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        The Problem
                      </div>
                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Our Solution
                      </div>
                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        The Outcome
                      </div>
                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-light flex flex-wrap gap-2">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-xs text-text-muted bg-slate-100 px-2 py-1 rounded border border-border-light"
                      >
                        {t}
                      </span>
                    ))}
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
          <h2 className="text-text-primary mb-4">
            Want to see a detailed technical walkthrough?
          </h2>
          <p className="text-text-secondary mb-8">
            We can walk you through the architecture and decisions of a
            completed project. No sales pitch just the technical story.
          </p>
          <Link to="/contact" className="btn-ghost">
            Request a Walkthrough
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
