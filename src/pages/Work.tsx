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
        "We built a full-stack application to centralise policy administration, claims processing, and customer data.",
      outcome:
        "The client now has a single source of truth for all policies and a self-service portal for customers to view their status.",
      tech: ["ASP.NET Core", "React", "TypeScript", "SQL Server", "Azure"],
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
  ];

  return (
    <>
      <section className="bg-navy text-white border-b border-slate-800">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-mono text-sm text-tech-blue mb-4 uppercase tracking-wider">
              Work
            </div>
            <h1 className="text-white mb-6">Systems we have fixed and built</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Every engagement starts with understanding what is already there.
              We do not fabricate results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl mb-1">{study.title}</h3>
                    <div className="text-sm text-slate-500">{study.client}</div>
                  </div>
                  <div className="font-mono text-xs px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600">
                    Status: {study.status}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        The Problem
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Our Solution
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        The Outcome
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded"
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

      <section className="section-padding bg-navy text-white border-t border-slate-800">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-white mb-4">
            Want to see a detailed technical walkthrough?
          </h2>
          <p className="text-slate-400 mb-8">
            We can walk you through the architecture and decisions of a
            completed project. No sales pitch — just the technical story.
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
