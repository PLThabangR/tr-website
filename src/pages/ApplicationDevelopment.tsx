import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Network,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    icon: MonitorSmartphone,
    title: "Business Applications & Portals",
    description:
      "Purpose-built web applications for employees, customers, suppliers and operational teams.",
  },
  {
    icon: Workflow,
    title: "Workflow & Process Systems",
    description:
      "Digitise approvals, requests, handovers and repeatable processes with clear roles and traceable steps.",
  },
  {
    icon: Network,
    title: "APIs & System Integration",
    description:
      "Connect applications and services so information can move between systems in a controlled, consistent way.",
  },
  {
    icon: Database,
    title: "Data-driven Applications",
    description:
      "Build applications around reliable data models, reporting needs and the information people use to make decisions.",
  },
  {
    icon: Layers3,
    title: "Application Modernisation",
    description:
      "Improve or replace ageing applications in manageable stages, with attention to business continuity.",
  },
  {
    icon: Boxes,
    title: "Internal Business Systems",
    description:
      "Create operational tools for orders, customers, inventory, service requests and administration.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business problem, users, existing processes, constraints and desired outcomes.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Translate the findings into requirements, workflows, solution scope and a delivery plan.",
  },
  {
    number: "03",
    title: "Design & Architect",
    description:
      "Plan the user experience, application structure, data model, integrations and security.",
  },
  {
    number: "04",
    title: "Build & Test",
    description:
      "Develop in focused increments, validate functionality and test important business scenarios.",
  },
  {
    number: "05",
    title: "Deploy & Improve",
    description:
      "Prepare the release, support deployment and identify the next improvements from real usage.",
  },
];

const capabilities = [
  "User authentication and role-based access",
  "Structured data capture and validation",
  "Dashboards and operational reporting",
  "Approval and notification workflows",
  "Document and record management",
  "API integrations with existing systems",
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

export default function ApplicationDevelopment() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div className="container-custom grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-32">
          <div>
            <Eyebrow>Custom Application Development</Eyebrow>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.04] tracking-[-.035em] sm:text-6xl lg:text-7xl">
              Software built around{" "}
              <span className="text-gold">your business.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              When off-the-shelf tools do not fit the way your business works,
              custom software can bring your processes, people and information
              together. We design and develop business applications that address
              defined operational needs.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact?service=application-development"
                className="btn-primary"
              >
                Discuss an application
                <ArrowUpRight size={16} />
              </Link>

              <a href="#our-process" className="btn-secondary">
                See how we work
                <ArrowRight size={15} />
              </a>
            </div>

            <p className="mt-6 text-xs leading-6 text-text-secondary">
              From internal business tools and customer portals to APIs,
              integrations and workflow systems.
            </p>
          </div>

          {/* CONCEPTUAL APPLICATION PREVIEW */}
          <div className="border border-border-subtle bg-surface p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-text-secondary">
                  Illustrative application concept
                </p>

                <p className="mt-1 font-serif text-xl">Order management</p>
              </div>

              <span className="border border-gold/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-gold">
                Concept
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                ["Orders", "128"],
                ["In progress", "34"],
                ["Awaiting approval", "12"],
              ].map(([label, value]) => (
                <div key={label} className="border border-border-subtle p-3">
                  <p className="text-[10px] leading-4 text-text-secondary">
                    {label}
                  </p>

                  <p className="mt-2 font-serif text-2xl">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 border border-border-subtle">
              <div className="grid grid-cols-[1.2fr_.8fr_.8fr] gap-2 border-b border-border-subtle px-3 py-3 text-[9px] font-semibold uppercase tracking-wider text-text-secondary">
                <span>Order</span>
                <span>Customer</span>
                <span>Status</span>
              </div>

              {[
                ["ORD-1048", "Northside", "Processing"],
                ["ORD-1047", "Metro Trade", "Review"],
                ["ORD-1046", "Central Supply", "Approved"],
              ].map(([order, customer, status]) => (
                <div
                  key={order}
                  className="grid grid-cols-[1.2fr_.8fr_.8fr] gap-2 border-b border-border-subtle px-3 py-3 text-[10px] last:border-0"
                >
                  <span className="text-text-primary">{order}</span>
                  <span className="truncate text-text-secondary">
                    {customer}
                  </span>
                  <span className="text-gold">{status}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-[10px] leading-5 text-text-secondary">
              <Code2 size={14} className="shrink-0 text-gold" />
              Example interface only — illustrative data, not a live product or
              client deployment.
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS PROBLEM */}
      <section className="container-custom grid gap-10 py-20 lg:grid-cols-[.8fr_1.2fr] lg:py-28">
        <SectionTitle
          eyebrow="The business problem"
          title="Your processes should not be limited by disconnected tools."
          description="Spreadsheets, email threads and separate applications can make it difficult to maintain a consistent view of business activity."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Manual Administration",
              body: "Teams repeatedly enter, check and move the same information between tools.",
            },
            {
              title: "Disconnected Systems",
              body: "Important information is spread across applications that do not communicate.",
            },
            {
              title: "Limited Process Visibility",
              body: "Managers struggle to see what is waiting, who is responsible and what needs attention.",
            },
            {
              title: "Software That Does Not Fit",
              body: "Generic tools may not support the rules, approvals or workflows unique to your operation.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-border-subtle p-6">
              <GitBranch size={18} className="text-gold" />

              <h3 className="mt-5 font-serif text-xl">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="border-y border-border-subtle bg-surface">
        <div className="container-custom py-20 lg:py-28">
          <SectionTitle
            eyebrow="What we build"
            title="Software designed for real business operations."
            description="We focus on applications that help people complete work, manage information and coordinate business processes."
          />

          <div className="mt-12 grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ icon: Icon, title, description }) => (
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

      {/* SOLUTION EXAMPLE */}
      <section className="container-custom grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
        <div>
          <Eyebrow>Solution example</Eyebrow>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            From spreadsheets to a connected order management system.
          </h2>

          <p className="mt-5 text-sm leading-7 text-text-secondary">
            Imagine a growing business processing customer orders through
            spreadsheets, emails and phone calls. Information is duplicated,
            order status is difficult to track and approvals depend on staff
            following up manually.
          </p>

          <div className="mt-7 border border-gold/40 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-gold">
              Illustrative solution concept
            </p>

            <p className="mt-3 text-sm leading-7 text-text-secondary">
              The following describes a possible solution design. It is not a
              completed client case study or a claim that these outcomes have
              already been delivered.
            </p>
          </div>
        </div>

        <div className="border border-border-subtle p-6 sm:p-8">
          <h3 className="font-serif text-2xl">
            A central place to manage orders
          </h3>

          <p className="mt-3 text-sm leading-7 text-text-secondary">
            A web-based application could bring the main steps of the order
            process into one system.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex gap-3 border border-border-subtle p-4"
              >
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" />

                <span className="text-sm leading-6 text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-border-subtle pt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-text-secondary">
              Example workflow
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                "Capture order",
                "Validate details",
                "Approve order",
                "Track fulfilment",
              ].map((item, index) => (
                <div key={item} className="border border-border-subtle p-3">
                  <p className="text-xs text-gold">0{index + 1}</p>

                  <p className="mt-2 text-xs leading-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section
        id="our-process"
        className="border-y border-border-subtle bg-surface"
      >
        <div className="container-custom py-20 lg:py-28">
          <SectionTitle
            eyebrow="How we deliver"
            title="A disciplined path from business need to working software."
            description="We involve stakeholders early, validate assumptions and deliver in manageable stages. The exact scope and timeline depend on the complexity of the solution."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {process.map((stage) => (
              <div key={stage.number} className="border-t border-gold/60 pt-5">
                <p className="font-serif text-3xl text-gold">{stage.number}</p>

                <h3 className="mt-5 font-serif text-xl">{stage.title}</h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="container-custom grid gap-12 py-20 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
        <SectionTitle
          eyebrow="Technology & architecture"
          title="Built with maintainability in mind."
          description="We select technologies based on the requirements, integration needs, team context and expected operating environment — not simply because a technology is fashionable."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Frontend",
              body: "React, TypeScript and responsive user interfaces",
            },
            {
              title: "Backend",
              body: "C#, .NET and ASP.NET Core APIs",
            },
            {
              title: "Data",
              body: "SQL Server, Azure SQL and PostgreSQL",
            },
            {
              title: "Cloud & Delivery",
              body: "Microsoft Azure, Docker and CI/CD practices",
            },
            {
              title: "Architecture",
              body: "Modular design, clear boundaries and maintainable services",
            },
            {
              title: "Integration",
              body: "REST APIs, authentication and system-to-system communication",
            },
          ].map((item) => (
            <div key={item.title} className="border border-border-subtle p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {item.title}
              </p>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT OPTIONS */}
      <section className="border-y border-border-subtle bg-surface">
        <div className="container-custom grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <Eyebrow>Built around your requirements</Eyebrow>

            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Start with the problem. Choose the right-sized solution.
            </h2>

            <p className="mt-5 text-sm leading-7 text-text-secondary">
              Not every challenge needs a large platform. Sometimes the right
              answer is a focused workflow, a small internal application, an
              integration or an improvement to a system you already use. We help
              define a sensible scope before development begins.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              {
                title: "New Application",
                body: "For a business process that needs a purpose-built system.",
              },
              {
                title: "Existing System Enhancement",
                body: "For an application that needs new features or improved workflows.",
              },
              {
                title: "Integration Project",
                body: "For systems that need to exchange information reliably.",
              },
              {
                title: "Technical Discovery",
                body: "For teams that need help understanding requirements and solution options.",
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
            <Eyebrow>Have an application in mind?</Eyebrow>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Let's turn an operational challenge into a software solution.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              Share the process you want to improve, the people who will use the
              application and the systems you need it to work with. We can help
              you define a practical starting point.
            </p>

            <Link
              to="/contact?service=application-development"
              className="btn-primary mt-8"
            >
              Discuss your project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
