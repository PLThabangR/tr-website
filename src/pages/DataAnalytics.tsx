import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Database,
  LineChart,
  PieChart,
  Workflow,
  Layers3,
  Search,
  Gauge,
  FileSpreadsheet,
  ChartNoAxesCombined,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";

const container = "container-custom";

const capabilities = [
  {
    number: "01",
    icon: Database,
    title: "Data Engineering",
    description:
      "Build reliable foundations for business data through data integration, transformation, structuring and management.",
    items: [
      "Data integration and consolidation",
      "Database design and management",
      "ETL and data transformation",
      "Data quality and preparation",
    ],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Turn operational and business data into accessible information that supports informed decision-making.",
    items: [
      "Interactive dashboards",
      "Management reporting",
      "KPI tracking and monitoring",
      "Operational performance analysis",
    ],
  },
  {
    number: "03",
    icon: ChartNoAxesCombined,
    title: "Data Analytics",
    description:
      "Explore business data to identify patterns, understand performance and uncover opportunities for improvement.",
    items: [
      "Exploratory data analysis",
      "Trend and variance analysis",
      "Customer and operational insights",
      "Performance measurement",
    ],
  },
  {
    number: "04",
    icon: Workflow,
    title: "AI-Ready Data Foundations",
    description:
      "Prepare structured business information for future AI applications, intelligent automation and advanced analytics.",
    items: [
      "Data preparation for AI",
      "Knowledge and information structuring",
      "Data integration for AI workflows",
      "Foundations for retrieval-augmented generation",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business, its information sources, reporting requirements and decision-making challenges.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Identify relevant data sources and establish how information can be collected, integrated and organised.",
  },
  {
    number: "03",
    title: "Transform",
    description:
      "Clean, structure and prepare data so that it becomes consistent, useful and trustworthy.",
  },
  {
    number: "04",
    title: "Visualise",
    description:
      "Develop dashboards, reports and analytical views that make important business information easier to understand.",
  },
  {
    number: "05",
    title: "Improve",
    description:
      "Use insights to identify opportunities, refine reporting and support continuous business improvement.",
  },
];

const technologies = [
  {
    category: "Data platforms",
    tools: ["SQL Server", "PostgreSQL", "Azure SQL"],
  },
  {
    category: "Analytics and visualisation",
    tools: ["Power BI", "Excel", "Interactive dashboards"],
  },
  {
    category: "Data engineering",
    tools: ["SQL", "Python", "Data integration"],
  },
  {
    category: "Cloud and infrastructure",
    tools: ["Microsoft Azure", "Azure services", "Docker"],
  },
];

const useCases = [
  {
    icon: Gauge,
    title: "Operational visibility",
    description:
      "Understand what is happening across business operations through centralised reporting and performance indicators.",
  },
  {
    icon: FileSpreadsheet,
    title: "Management reporting",
    description:
      "Reduce fragmented reporting by bringing important business information into structured reports and dashboards.",
  },
  {
    icon: LineChart,
    title: "Performance analysis",
    description:
      "Track trends, compare results and identify areas where business performance can improve.",
  },
  {
    icon: PieChart,
    title: "Business intelligence",
    description:
      "Give decision-makers a clearer view of customers, processes, costs and organisational performance.",
  },
];

function AnalyticsHeroVisual() {
  const bars = [34, 53, 43, 72, 58, 88, 66, 96, 76, 100];

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-10 rounded-full bg-[#DEAB5F]/[0.06] blur-[90px]" />

      <div className="relative overflow-hidden rounded-sm border border-[#383235] bg-[#171415]">
        <div className="flex items-center justify-between border-b border-[#383235] px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#B9B2AA]">
              Analytics workspace
            </p>
            <p className="mt-1 text-sm font-medium text-[#F7F4EF]">
              Business performance
            </p>
          </div>
          <span className="rounded-full border border-[#DEAB5F]/30 px-3 py-1 text-[10px] text-[#DEAB5F]">
            CONCEPT
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-5">
          <div className="rounded-sm border border-[#383235] bg-[#100E0F] p-4">
            <p className="text-[10px] text-[#B9B2AA]">Revenue overview</p>
            <p className="mt-3 font-serif text-2xl text-[#F7F4EF]">R 248,500</p>
            <p className="mt-2 text-[10px] text-[#B9B2AA]">
              Illustrative metric
            </p>
          </div>

          <div className="rounded-sm border border-[#383235] bg-[#100E0F] p-4">
            <p className="text-[10px] text-[#B9B2AA]">Operational activity</p>
            <p className="mt-3 font-serif text-2xl text-[#F7F4EF]">1,284</p>
            <p className="mt-2 text-[10px] text-[#B9B2AA]">
              Illustrative metric
            </p>
          </div>
        </div>

        <div className="mx-5 mb-5 rounded-sm border border-[#383235] bg-[#100E0F] p-5">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-[#F7F4EF]">
                Performance trends
              </p>
              <p className="mt-1 text-[10px] text-[#B9B2AA]">
                Illustrative data visualisation
              </p>
            </div>
            <LineChart size={17} className="text-[#DEAB5F]" />
          </div>

          <div className="flex h-36 items-end gap-2">
            {bars.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-[2px] bg-[#DEAB5F]/[0.65]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          <div className="mt-3 flex justify-between border-t border-[#383235] pt-3 text-[9px] text-[#B9B2AA]">
            <span>PERIOD 01</span>
            <span>PERIOD 10</span>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[#383235]">
          {[
            ["DATA", "Integration"],
            ["INSIGHTS", "Analysis"],
            ["ACTION", "Decisions"],
          ].map(([label, description]) => (
            <div key={label} className="px-3 py-4 text-center">
              <p className="text-[9px] tracking-[0.16em] text-[#DEAB5F]">
                {label}
              </p>
              <p className="mt-1 text-[10px] text-[#B9B2AA]">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 text-center text-[10px] text-[#B9B2AA]">
        Conceptual dashboard preview not a live client system
      </p>
    </div>
  );
}

export default function DataAnalytics() {
  return (
    <main className="overflow-hidden bg-background text-text-primary">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-[#383235]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(222,171,95,0.10),transparent_45%)]" />
          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full border border-[#DEAB5F]/[0.07]" />
          <div className="absolute -right-32 -top-32 h-[360px] w-[360px] rounded-full border border-[#DEAB5F]/[0.06]" />
        </div>

        <div
          className={`${container} relative z-10 grid gap-16 py-20 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:py-28`}
        >
          <div>
            <div className="eyebrow mb-7 flex items-center gap-3">
              DATA & ANALYTICS
            </div>

            <h1 className="display-title max-w-3xl">
              Turn business data into{" "}
              <span className="font-serif italic text-gold">
                meaningful intelligence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
              Your business generates information every day. We help bring that
              information together, make it understandable and create the
              foundations for better business decisions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact?service=data-analytics"
                className="btn-primary inline-flex items-center gap-3"
              >
                Discuss your data needs
                <ArrowRight size={17} />
              </Link>

              <a href="#capabilities" className="btn-secondary">
                Explore capabilities
              </a>
            </div>

            <div className="mt-14 grid max-w-lg grid-cols-3 border-t border-[#383235] pt-6">
              {[
                ["01", "Collect"],
                ["02", "Understand"],
                ["03", "Improve"],
              ].map(([number, label]) => (
                <div key={number}>
                  <p className="text-xs text-gold">{number}</p>
                  <p className="mt-2 text-sm text-text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <AnalyticsHeroVisual />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:gap-24`}>
          <div>
            <SectionHeading
              index="01"
              eyebrow="THE BUSINESS CHALLENGE"
              title="Having data is not the same as understanding it."
              copy="Our developing data and analytics capability brings together data engineering, business intelligence and analytical thinking."
            />
          </div>

          <div className="space-y-6 text-sm leading-8 text-text-secondary sm:text-base">
            <p>
              Many businesses collect information across spreadsheets,
              databases, applications and disconnected systems. The challenge is
              bringing that information together and turning it into something
              decision-makers can actually use.
            </p>
            <p>
              Without reliable data foundations and clear reporting,
              organisations can struggle to understand operational performance,
              identify inefficiencies and make informed decisions.
            </p>
            <p className="text-text-primary">
              We approach data as a business asset one that should be organised,
              accessible, meaningful and ready to support the organisation's
              next stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="section-padding border-y border-[#383235] bg-[#151213]"
      >
        <div className={container}>
          <SectionHeading
            index="02"
            eyebrow="OUR CAPABILITIES"
            title="Building the foundations for data-driven businesses."
            copy="Our developing data and analytics capability brings together data engineering, business intelligence and analytical thinking."
          />

          <div className="mt-16 grid gap-px border border-[#383235] bg-[#383235] md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <article
                  key={capability.number}
                  className="bg-[#151213] p-7 transition-colors duration-300 hover:bg-[#1B1718] sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gold">
                      {capability.number}
                    </span>
                    <Icon size={23} className="text-gold" />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl text-[#F7F4EF]">
                    {capability.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {capability.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-xs text-text-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section-padding">
        <div className={container}>
          <SectionHeading
            eyebrow="BUSINESS APPLICATIONS"
            title="Make information work harder for your business."
            copy="Data initiatives should address real business challenges, not simply produce more reports."
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-t border-[#383235] pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gold">0{index + 1}</span>
                    <Icon size={21} className="text-gold" />
                  </div>

                  <h3 className="mt-7 text-lg font-medium text-[#F7F4EF]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-secondary">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding border-y border-[#383235] bg-[#151213]">
        <div className={container}>
          <SectionHeading
            eyebrow="OUR APPROACH"
            title="From disconnected information to actionable insight."
            copy="A structured approach that starts with the business problem and works towards useful, maintainable data solutions."
          />

          <div className="mt-16 grid gap-0 lg:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step.number}
                className="relative border-t border-[#383235] py-7 lg:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="text-xs tracking-widest text-gold">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-medium text-[#F7F4EF]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  {step.description}
                </p>

                {index !== process.length - 1 && (
                  <ArrowUpRight
                    size={17}
                    className="mt-6 hidden text-gold lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section-padding">
        <div
          className={`${container} grid gap-14 lg:grid-cols-[0.85fr_1.15fr]`}
        >
          <div>
            <SectionHeading
              eyebrow="TECHNOLOGY FOUNDATION"
              title="Built on practical data technologies."
            />

            <p className="mt-6 text-sm leading-8 text-text-secondary">
              We work with established data platforms and engineering tools to
              create solutions that can fit into existing business environments
              and evolve over time.
            </p>
          </div>

          <div className="divide-y divide-[#383235] border-y border-[#383235]">
            {technologies.map((technology) => (
              <div
                key={technology.category}
                className="grid gap-4 py-6 sm:grid-cols-[0.8fr_1.2fr]"
              >
                <h3 className="text-sm font-medium text-[#F7F4EF]">
                  {technology.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technology.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-[#383235] px-3 py-2 text-xs text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTION TO AI */}
      <section className="section-padding border-y border-[#383235] bg-[#151213]">
        <div
          className={`${container} grid gap-12 lg:grid-cols-2 lg:items-center`}
        >
          <div>
            <div className="eyebrow mb-6">DATA + AI ENGINEERING</div>

            <h2 className="display-title">
              Better AI starts with{" "}
              <span className="font-serif italic text-gold">better data.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-8 text-text-secondary sm:text-base">
              Intelligent business applications depend on information that is
              accessible, structured and relevant. Data engineering and
              analytics create an important foundation for AI-powered workflows,
              business assistants and intelligent automation.
            </p>

            <Link
              to="/business-operations-ai-assistant"
              className="mt-8 inline-flex items-center gap-3 text-sm text-gold transition-colors hover:text-[#F7F4EF]"
            >
              Explore AI Engineering & Business Automation
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px border border-[#383235] bg-[#383235]">
            {[
              {
                icon: Database,
                title: "Data foundations",
                description: "Structured and accessible information",
              },
              {
                icon: Search,
                title: "Knowledge",
                description: "Relevant business context",
              },
              {
                icon: Layers3,
                title: "Intelligence",
                description: "Insights and analytical capabilities",
              },
              {
                icon: Workflow,
                title: "Automation",
                description: "Connected intelligent workflows",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-[#100E0F] p-6 sm:p-8">
                  <Icon size={22} className="text-gold" />
                  <h3 className="mt-7 text-sm font-medium text-[#F7F4EF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-text-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERY STATUS */}
      <section className="section-padding">
        <div className={`${container} border border-[#383235] p-7 sm:p-10`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="eyebrow mb-5">CAPABILITY DEVELOPMENT</div>
              <h2 className="font-serif text-3xl text-[#F7F4EF]">
                Developing our data and analytics practice.
              </h2>
              <p className="mt-5 text-sm leading-8 text-text-secondary">
                We are actively developing this capability through engineering,
                analytics projects and practical business applications.
                Engagements are assessed according to their requirements, scope
                and delivery readiness.
              </p>
            </div>

            <span className="shrink-0 border border-[#DEAB5F]/40 px-4 py-2 text-xs text-gold">
              DEVELOPING CAPABILITY
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-[#383235] bg-[#151213]">
        <div className={`${container} text-center`}>
          <div className="eyebrow justify-center">
            LET'S MAKE YOUR DATA USEFUL
          </div>

          <h2 className="mx-auto mt-7 max-w-3xl font-serif text-4xl leading-tight text-[#F7F4EF] sm:text-5xl">
            Better information.
            <span className="block italic text-gold">
              Better business decisions.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-text-secondary">
            Let's explore how your organisation can improve its data
            foundations, reporting and business intelligence capabilities.
          </p>

          <Link
            to="/contact?service=data-analytics"
            className="btn-primary mt-9 inline-flex items-center gap-3"
          >
            Start a conversation
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
