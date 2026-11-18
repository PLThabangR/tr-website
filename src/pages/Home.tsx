import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  LifeBuoy,
  Network,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../data/company";
import { SectionHeading } from "../components/SectionHeading";

const services = [
  {
    number: "01",
    name: "AI Engineering & Business Automation",
    status: "Developing capability",
    description:
      "We explore and engineer intelligent business solutions that connect company information, assist teams and automate selected operational workflows.",
    capabilities: [
      "AI business assistants",
      "Agentic workflow automation",
      "Document intelligence and RAG",
      "Business system integration",
    ],
    href: "/business-operations-ai-assistant",
    icon: BrainCircuit,
    featured: true,
  },
  {
    number: "02",
    name: "Data & Analytics",
    status: "Developing capability",
    description:
      "Transform business information into structured, accessible and meaningful insights that support operational visibility and better decision-making.",
    capabilities: [
      "Database design and management",
      "Data analysis and reporting",
      "Business intelligence",
      "Data integration",
    ],
    href: "/data-analytics",
    icon: BarChart3,
    featured: false,
  },
  {
    number: "03",
    name: "Custom Application Development",
    status: "Available service",
    description:
      "Design and develop software around your business processes, from internal business systems and customer portals to APIs and application integrations.",
    capabilities: [
      "Business applications",
      "Workflow systems",
      "API development",
      "System integration",
    ],
    href: "/application-development",
    icon: Code2,
    featured: false,
  },
  {
    number: "04",
    name: "Managed Application Services",
    status: "Available service",
    description:
      "Keep your existing business applications reliable, supported and performing through ongoing maintenance, technical support and continuous improvement.",
    capabilities: [
      "Application support",
      "Maintenance and monitoring",
      "Database management",
      "Performance improvement",
    ],
    href: "/managed-services",
    icon: LifeBuoy,
    featured: false,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the business",
    description:
      "We begin with business processes, operational challenges and desired outcomes before recommending a technical solution.",
  },
  {
    number: "02",
    title: "Engineer intelligently",
    description:
      "We combine software engineering, data and AI technologies to create solutions grounded in real business requirements.",
  },
  {
    number: "03",
    title: "Connect systems and information",
    description:
      "We consider how applications, databases, documents, people and processes work together across your organisation.",
  },
  {
    number: "04",
    title: "Build for continuous improvement",
    description:
      "We favour maintainable systems and measurable improvements over unnecessary complexity and technology for its own sake.",
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "AI-powered business assistants",
    description:
      "Make business information easier to access through intelligent assistants grounded in company data and documents.",
  },
  {
    icon: Workflow,
    title: "Intelligent workflow automation",
    description:
      "Identify repeatable processes where automation can reduce manual work and improve consistency.",
  },
  {
    icon: Network,
    title: "Connected business systems",
    description:
      "Integrate applications, APIs and data sources to create more connected operational environments.",
  },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[690px] overflow-hidden border-b border-border-subtle">
        <div className="hero-grid absolute inset-0 -z-10" />

        <div className="container-custom relative grid min-h-[690px] items-center py-20 lg:grid-cols-[1.2fr_.8fr]">
          <div className="max-w-3xl">
            <p className="eyebrow mb-8 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-gold" />
              AI Engineering · Software · Business Systems
            </p>

            <h1 className="display-title max-w-4xl">
              Engineering intelligent systems for{" "}
              <em className="font-normal text-gold">better business.</em>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-8 text-text-secondary md:text-lg">
              We bring together AI engineering, software development and
              business automation to help organisations connect information,
              improve operations and build smarter ways of working
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/business-operations-ai-assistant"
                className="btn-primary"
              >
                Explore AI solutions
                <ArrowUpRight size={16} />
              </Link>

              <Link to="/contact" className="btn-ghost">
                Discuss a business challenge
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[.16em] text-text-secondary">
              <span className="h-px w-10 bg-gold" />
              {company.promise}
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative hidden h-full min-h-[480px] items-center justify-center lg:flex">
            <div className="absolute right-0 top-1/2 h-[390px] w-[390px] -translate-y-1/2 rounded-full border border-border-subtle" />

            <div className="absolute right-8 top-1/2 h-[310px] w-[310px] -translate-y-1/2 rounded-full border border-gold/30" />

            <div className="absolute right-[82px] top-1/2 h-[202px] w-[202px] -translate-y-1/2 rounded-full border border-border-subtle" />

            <span className="hero-mark absolute right-0 top-1/2 -translate-y-[47%]">
              TR
            </span>

            <div className="absolute bottom-20 right-0 border-l border-gold pl-5">
              <p className="eyebrow">Our focus</p>

              <p className="mt-2 font-serif text-2xl">
                Intelligence meets engineering.
              </p>

              <p className="mt-1 text-xs text-text-secondary">
                AI · Data · Software · Automation
              </p>
            </div>

            <span className="absolute left-2 top-1/3 font-mono text-[10px] tracking-[.2em] text-text-secondary [writing-mode:vertical-rl]">
              26°06' S — 28°03' E
            </span>
          </div>
        </div>

        <div className="container-custom absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center justify-between text-[10px] uppercase tracking-[.2em] text-text-secondary">
          <span>Johannesburg · Gauteng</span>

          <span className="flex items-center gap-2">
            Scroll to explore
            <ArrowDownRight size={13} />
          </span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            index="01"
            eyebrow="What we do"
            title="Business automation starts with understanding the business."
            copy="AI alone does not solve operational problems. Businesses need connected information, reliable applications, well-designed workflows and the right engineering. We bring these disciplines together to develop practical intelligent business solutions."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div key={title} className="border-t border-gold/60 pt-6">
                <Icon size={22} className="text-gold" />

                <h3 className="mt-6 font-serif text-2xl">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP AI OFFERING */}
      <section className="border-y border-border-subtle bg-[#171416] py-20 md:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">
              01 / AI Engineering & Business Automation
            </p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-5xl">
              Move beyond isolated tools. Build{" "}
              <span className="text-gold">intelligent business systems.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-text-secondary md:text-base">
              We are developing the capability to help businesses make better
              use of AI through business assistants, document intelligence,
              connected applications and workflow automation.
            </p>

            <Link
              to="/business-operations-ai-assistant"
              className="btn-primary mt-8"
            >
              Explore our AI approach
              <ArrowUpRight size={16} />
            </Link>

            <p className="mt-5 text-xs leading-6 text-text-secondary">
              AI engineering and business automation are developing
              capabilities. Solutions are scoped according to business
              requirements, technical readiness and data availability.
            </p>
          </div>

          {/* AI ARCHITECTURE VISUAL */}
          <div className="border border-border-subtle p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-border-subtle pb-5">
              <div>
                <p className="text-[10px] uppercase tracking-[.2em] text-text-secondary">
                  Conceptual solution architecture
                </p>
                <h3 className="mt-2 font-serif text-2xl">
                  Business intelligence layer
                </h3>
              </div>

              <BrainCircuit size={25} className="text-gold" />
            </div>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: Database,
                  title: "Business information",
                  detail: "Databases · Documents · Applications",
                },
                {
                  icon: BrainCircuit,
                  title: "AI intelligence",
                  detail: "LLMs · RAG · Context · Reasoning",
                },
                {
                  icon: Workflow,
                  title: "Business automation",
                  detail: "Agents · Workflows · Human approval",
                },
              ].map(({ icon: Icon, title, detail }, index) => (
                <div key={title}>
                  <div className="flex items-center gap-4 border border-border-subtle p-4">
                    <div className="grid size-10 shrink-0 place-items-center border border-gold/40 text-gold">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h4 className="text-sm font-medium">{title}</h4>
                      <p className="mt-1 text-xs text-text-secondary">
                        {detail}
                      </p>
                    </div>
                  </div>

                  {index !== 2 && (
                    <div className="flex justify-center py-2">
                      <ArrowDownRight size={17} className="text-gold" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 text-[10px] leading-5 text-text-secondary">
              Illustrative architecture. Actual components depend on the
              requirements and design of each solution.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            index="02"
            eyebrow="Our capabilities"
            title="The engineering behind intelligent business."
            copy="AI is one part of a wider technology ecosystem. We bring together data, applications, integration and ongoing technical support to help businesses build and maintain their digital operations."
          />

          <div className="mt-12">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  to={item.href}
                  key={item.number}
                  className={`service-row group grid gap-5 py-8 md:grid-cols-[70px_1fr_1.1fr_40px] md:items-start ${
                    item.featured ? "border-l-2 border-l-gold pl-5 md:pl-7" : ""
                  }`}
                >
                  <span className="section-index">{item.number}</span>

                  <div>
                    <div className="flex items-center gap-3">
                      <Icon size={19} className="shrink-0 text-gold" />
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-normal md:text-3xl">
                      {item.name}
                    </h3>

                    <span className="mt-3 inline-block text-[10px] uppercase tracking-widest text-gold">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <p className="max-w-lg text-sm leading-7 text-text-secondary">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {item.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="text-[10px] text-text-secondary"
                        >
                          · {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ArrowUpRight className="service-arrow text-text-secondary" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="border-y border-border-subtle bg-[#171416] py-16 md:py-24">
        <div className="container-custom grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div>
            <p className="eyebrow mb-5">A practical engineering partner</p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-5xl">
              No unnecessary complexity. No technology for technology's sake.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item.number}
                className="border-t border-border-subtle pt-4"
              >
                <span className="section-index">{item.number}</span>

                <h4 className="mt-3">{item.title}</h4>

                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY FOUNDATION */}
      <section className="section-padding">
        <div className="container-custom grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <p className="eyebrow mb-5">Our engineering foundation</p>

            <h2 className="font-serif text-4xl font-normal leading-tight md:text-5xl">
              Built on software, data and intelligent technologies.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary">
              We use modern engineering tools and platforms to design
              maintainable applications, connect business information and
              explore practical AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              ["AI Engineering", "LLMs · RAG · Agents"],
              ["Backend", "C# · .NET · ASP.NET Core"],
              ["Frontend", "React · TypeScript"],
              ["Data", "SQL Server · PostgreSQL"],
              ["Cloud", "Microsoft Azure"],
              ["Integration", "REST APIs · MCP"],
            ].map(([title, detail]) => (
              <div key={title} className="border border-border-subtle p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {title}
                </p>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-subtle bg-[#171416] py-20 md:py-28">
        <div className="container-custom grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Start with a conversation</p>

            <h2 className="font-serif text-5xl font-normal leading-tight">
              What could work better in your business?
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-7 text-text-secondary">
              Tell us about the business process, information challenges or
              systems you want to improve. We will help you explore a sensible
              technical approach and identify a practical next step.
            </p>

            <Link to="/contact" className="btn-primary mt-7">
              Let's discuss it
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
