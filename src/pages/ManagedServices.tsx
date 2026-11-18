import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Database,
  LifeBuoy,
  RefreshCw,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: LifeBuoy,
    title: "Application Support",
    description:
      "Investigate application issues, resolve defects and help your team get back to work when systems do not behave as expected.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Improvements",
    description:
      "Keep applications maintainable through updates, dependency reviews, code improvements and planned technical maintenance.",
  },
  {
    icon: Activity,
    title: "Monitoring & Performance",
    description:
      "Identify recurring errors, performance bottlenecks and operational warning signs before they become larger disruptions.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Review database performance, queries, backups and data integrity as part of a wider application support plan.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Security Reviews",
    description:
      "Review access, configuration, application dependencies and operational practices to help reduce avoidable risk.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Prioritise practical enhancements that make existing applications easier to use, support and maintain.",
  },
];

const stages = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the application, its users, business processes, known issues and operating environment.",
  },
  {
    number: "02",
    title: "Stabilise",
    description:
      "Prioritise critical defects, reliability concerns and issues affecting day-to-day operations.",
  },
  {
    number: "03",
    title: "Maintain",
    description:
      "Carry out agreed support, maintenance, monitoring and technical improvement activities.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Review recurring issues and recommend improvements based on operational evidence and business priorities.",
  },
];

const scenarioIssues = [
  "Orders occasionally fail to save.",
  "The application becomes slow during busy periods.",
  "Reports do not always match the operational database.",
  "Technical problems keep returning because their root causes are not addressed.",
];

const scenarioActions = [
  "Review application logs, error handling and the order submission workflow.",
  "Investigate database queries and application performance.",
  "Trace how operational data is captured, stored and presented in reports.",
  "Create a prioritised remediation plan and agree on ongoing support activities.",
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.2em] text-gold">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-3xl leading-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ManagedServices() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="container-custom grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-32">
          <div>
            <Eyebrow>Managed Application Services</Eyebrow>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-.035em] sm:text-6xl lg:text-7xl">
              Keep your business applications{" "}
              <span className="text-gold">working.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Your business depends on the applications behind its daily
              operations. We help you support, maintain and improve those
              systems so your people can focus on the work that matters.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact?service=managed-application-services"
                className="btn-primary"
              >
                Discuss application support
                <ArrowUpRight size={16} />
              </Link>

              <a href="#our-approach" className="btn-secondary">
                Explore our approach
                <ArrowRight size={15} />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-text-secondary">
              Practical support for business-critical applications, internal
              systems and connected databases.
            </p>
          </div>

          {/* CONCEPTUAL DASHBOARD */}
          <div className="border border-border-subtle bg-surface p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-text-secondary">
                  Illustrative operations view
                </p>
                <p className="mt-1 font-serif text-xl">Application health</p>
              </div>

              <span className="border border-gold/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold">
                Concept
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["System availability", "Monitored"],
                ["Open issues", "Prioritised"],
                ["Maintenance", "Planned"],
                ["Improvements", "Tracked"],
              ].map(([label, value]) => (
                <div key={label} className="border border-border-subtle p-4">
                  <p className="text-xs text-text-secondary">{label}</p>

                  <p className="mt-3 flex items-center gap-2 text-sm font-medium">
                    <span className="size-1.5 rounded-full bg-gold" />
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-border-subtle p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-text-secondary">Support workflow</p>
                <ClipboardCheck size={16} className="text-gold" />
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {["Identify", "Assess", "Resolve", "Review"].map(
                  (item, index) => (
                    <div key={item} className="text-center">
                      <div
                        className={`mx-auto grid size-8 place-items-center border text-xs ${
                          index === 0
                            ? "border-gold bg-gold text-black"
                            : "border-border-subtle text-text-secondary"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <p className="mt-2 text-[10px] text-text-secondary">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <p className="mt-4 text-[10px] leading-5 text-text-secondary">
              Conceptual illustration only. This does not represent live
              monitoring data or a deployed client environment.
            </p>
          </div>
        </div>
      </section>

      {/* WHY MANAGED SERVICES */}
      <section className="container-custom grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
        <SectionTitle
          eyebrow="Why managed services"
          title="Software needs attention long after launch."
          description="Applications change as your business changes. New users, growing data, updated devices and evolving processes all place demands on the systems you rely on."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Unplanned disruption",
              body: "When applications fail, staff lose time and business processes slow down.",
            },
            {
              title: "Growing technical debt",
              body: "Quick fixes and outdated dependencies can make systems harder to maintain.",
            },
            {
              title: "Limited visibility",
              body: "Without a clear support process, recurring issues can remain hidden until they escalate.",
            },
            {
              title: "Changing requirements",
              body: "Applications need regular adjustments as teams, customers and operations evolve.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-border-subtle p-6">
              <AlertTriangle size={18} className="text-gold" />
              <h3 className="mt-5 font-serif text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border-subtle bg-surface">
        <div className="container-custom py-20 lg:py-28">
          <SectionTitle
            eyebrow="What we do"
            title="Support that covers the application lifecycle."
            description="We help with the technical work required to keep existing business applications useful, dependable and easier to operate."
          />

          <div className="mt-12 grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-background p-7 sm:p-8">
                <Icon size={21} className="text-gold" />

                <h3 className="mt-6 font-serif text-xl">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLE SCENARIO */}
      <section className="container-custom grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
        <div>
          <Eyebrow>Business scenario</Eyebrow>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            A distribution business with an unreliable order application.
          </h2>

          <p className="mt-5 text-sm leading-7 text-text-secondary">
            Consider a company that relies on an internal order management
            application. The system is central to daily work, but recurring
            issues are affecting staff and customers.
          </p>

          <div className="mt-7 border border-gold/40 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-gold">
              Illustrative scenario
            </p>

            <p className="mt-3 text-sm leading-7 text-text-secondary">
              This is an example of the type of operational challenge we can
              help address. It is not a completed client engagement or a claim
              of measured results.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="border border-border-subtle p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-semibold">
              <AlertTriangle size={17} className="text-gold" />
              The situation
            </h3>

            <ul className="mt-5 grid gap-3">
              {scenarioIssues.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-text-secondary"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border-subtle p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-semibold">
              <CheckCircle2 size={17} className="text-gold" />
              How we would approach it
            </h3>

            <ul className="mt-5 grid gap-3">
              {scenarioActions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-text-secondary"
                >
                  <CheckCircle2 size={15} className="mt-1 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section
        id="our-approach"
        className="border-y border-border-subtle bg-surface"
      >
        <div className="container-custom py-20 lg:py-28">
          <SectionTitle
            eyebrow="Our approach"
            title="A clear process. Practical priorities."
            description="The support arrangement is shaped around your application, its business importance and the level of assistance your team needs."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => (
              <div key={stage.number} className="border-t border-gold/60 pt-5">
                <p className="font-serif text-3xl text-gold">{stage.number}</p>

                <h3 className="mt-5 font-serif text-2xl">{stage.title}</h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-custom grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <SectionTitle
          eyebrow="Technology"
          title="Support grounded in your technology environment."
          description="We work with modern application and data technologies, and begin by understanding what your business already uses."
        />

        <div className="grid grid-cols-2 gap-3">
          {[
            "C# and .NET",
            "ASP.NET Core APIs",
            "SQL Server and Azure SQL",
            "PostgreSQL",
            "Microsoft Azure",
            "Docker and deployment",
            "Application integrations",
            "Logging and diagnostics",
          ].map((item) => (
            <div
              key={item}
              className="flex min-h-20 items-center gap-3 border border-border-subtle p-4 text-sm text-text-secondary"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-gold" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT OPTIONS */}
      <section className="border-y border-border-subtle bg-surface">
        <div className="container-custom grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Eyebrow>Engagement options</Eyebrow>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              The right level of support for your operation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-secondary">
              We first assess the application and agree on scope, priorities,
              responsibilities and a practical support arrangement. Specific
              response times, service hours and service levels are agreed
              contractually rather than assumed.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              {
                title: "Ongoing application support",
                body: "An agreed arrangement for recurring support and maintenance.",
              },
              {
                title: "Defined improvement project",
                body: "A focused engagement to resolve a known issue or improve an existing system.",
              },
              {
                title: "Application health assessment",
                body: "A structured review of application condition, risks and recommended next steps.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border-subtle p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-custom py-20 lg:py-28">
        <div className="border border-gold/40 p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <Eyebrow>Let's keep your systems working</Eyebrow>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Your applications should support the business, not slow it down.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Tell us about the applications your business depends on, the
              challenges you are experiencing and the kind of support you need.
            </p>

            <Link
              to="/contact?service=managed-application-services"
              className="btn-primary mt-8"
            >
              Talk to our team
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
