import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleHelp,
  Database,
  FileSearch,
  Fingerprint,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";


const capabilities = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Business data assistant",
    description:
      "Ask operational questions in plain language and receive answers grounded in the business information you are authorised to access.",
    detail:
      "Natural-language questions · Source-aware answers · Contextual follow-ups",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Document intelligence",
    description:
      "Use retrieval-augmented generation (RAG) to search policies, procedures, contracts and internal knowledge without treating a language model as the source of truth.",
    detail: "Document ingestion · Semantic retrieval · Referenced responses",
  },
  {
    number: "03",
    icon: Workflow,
    title: "AI-assisted workflows",
    description:
      "Coordinate multi-step tasks across business applications. Agents prepare actions and hand sensitive decisions to an authorised person.",
    detail: "Task orchestration · Tool calling · Human approval",
  },
  {
    number: "04",
    icon: Database,
    title: "Connected business data",
    description:
      "Connect approved SQL Server and PostgreSQL data sources, APIs and operational systems through controlled integration services.",
    detail: "SQL Server · PostgreSQL · APIs · Governed access",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Operational analytics",
    description:
      "Bring key measures, trends and exceptions into a clear operational view so teams can move from scattered reports to informed decisions.",
    detail: "KPIs · Trends · Exceptions · Reporting",
  },
  {
    number: "06",
    icon: Network,
    title: "MCP and external tools",
    description:
      "Use the Model Context Protocol (MCP) as a controlled integration boundary for connecting assistants to approved tools and services.",
    detail: "MCP servers · Tool permissions · Integration controls",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the operation",
    description:
      "We map the business process, the decisions people make, the systems involved and the risks that must be controlled.",
  },
  {
    number: "02",
    title: "Connect the information",
    description:
      "We identify useful data and documents, establish secure access and validate the quality and meaning of the information.",
  },
  {
    number: "03",
    title: "Build a focused assistant",
    description:
      "We implement one valuable workflow first, with clear boundaries, measurable outcomes and a practical user experience.",
  },
  {
    number: "04",
    title: "Test, govern and improve",
    description:
      "We evaluate answer quality, permissions, failure paths and approval steps before expanding to additional workflows.",
  },
];

const faqs = [
  {
    question: "Is this a finished, off-the-shelf product?",
    answer:
      "No. TR Business Operations AI Assistant is a developing solution concept and implementation offering. The scope, integrations and deployment model are shaped around each organisation's systems, data and operational requirements.",
  },
  {
    question:
      "Can it connect to our existing SQL Server or PostgreSQL database?",
    answer:
      "That is a core design goal. Connections are implemented through controlled services and least-privilege credentials. Initial deployments should favour read-only access, approved views and narrowly scoped queries rather than unrestricted database access.",
  },
  {
    question: "Can the assistant take actions in our business applications?",
    answer:
      "Agents can be designed to prepare and execute approved actions through explicit tools and APIs. Sensitive operations should require human approval, with the request, decision and execution recorded for audit.",
  },
  {
    question: "How does RAG help with company documents?",
    answer:
      "RAG retrieves relevant passages from approved documents and supplies that context to the model when it answers. It helps keep responses grounded in company information, but it does not guarantee correctness; access controls, source references and evaluation are still essential.",
  },
  {
    question: "Where can the platform be deployed?",
    answer:
      "Deployment options depend on the client's security, infrastructure and data-residency requirements. Architecture and hosting are agreed during discovery rather than assumed in advance.",
  },
];

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const eyebrow =
  "inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DEAB5F]";
const sectionTitle =
  "mt-5 font-serif text-3xl leading-tight tracking-tight text-[#F7F4EF] sm:text-4xl lg:text-5xl";
const muted = "text-sm leading-7 text-[#B9B2AA]";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className={eyebrow}>
      <span className="h-px w-7 bg-[#DEAB5F]" />
      {children}
    </div>
  );
}

function ArrowLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-medium text-[#DEAB5F] transition-colors hover:text-[#F0C98F]"
    >
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export default function BusinessOperationsAIAssistant() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="overflow-hidden bg-[#100E0F] text-[#F7F4EF]">
      {/* Hero */}

      <section className="relative isolate overflow-hidden border-b border-[#383235]">
        {/* Decorative CSS background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          {/* Main gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_25%,rgba(222,171,95,0.14),transparent_45%)]" />

          {/* Secondary light */}
          <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#DEAB5F]/[0.06] blur-[110px]" />

          {/* Subtle lower-left glow */}
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#DEAB5F]/[0.04] blur-[100px]" />

          {/* Fine technical grid */}
          <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:48px_48px]" />

          {/* Diagonal highlight */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.025),transparent_55%)]" />
        </div>

        <div
          className={`${container} relative z-10 grid gap-14 py-20 sm:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16 lg:py-28`}
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#DEAB5F]">
              <span className="h-2 w-2 rounded-full bg-[#DEAB5F]" />
              TR AI ENGINEERING / BUSINESS AUTOMATION
            </div>
            <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-[#F7F4EF] sm:text-5xl lg:text-6xl">
              Give your business systems{" "}
              <em className="text-[#DEAB5F]">the ability to understand.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#B9B2AA]">
              Connect business data, company knowledge and everyday applications
              to build AI assistants that help people understand operations and
              move work forward.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact?service=ai-business-automation"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#DEAB5F] px-6 py-3 text-sm font-semibold text-[#100E0F] transition-colors hover:bg-[#C99549]"
              >
                Discuss an AI use case <ArrowUpRight size={17} />
              </Link>
              <a
                href="#capabilities"
                className="inline-flex min-h-12 items-center gap-2 px-2 text-sm font-medium text-[#F7F4EF] transition-colors hover:text-[#DEAB5F]"
              >
                Explore capabilities <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="mt-9 flex flex-col gap-3 border-t border-[#383235] pt-6 text-xs text-[#B9B2AA] sm:flex-row sm:gap-8">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#DEAB5F]" />
                Human oversight built into the design
              </span>
              <span className="inline-flex items-center gap-2">
                <Database size={15} className="text-[#DEAB5F]" />
                Works with existing business data
              </span>
            </div>
          </div>

          {/* Product concept preview */}
          <div
            aria-label="Illustrative assistant interface"
            className="overflow-hidden rounded-lg border border-[#51463A] bg-[#171415] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#383235] bg-[#1D1919] px-4 py-3 text-[9px] font-semibold tracking-[0.16em] text-[#B9B2AA] sm:px-5">
              <div className="flex items-center gap-2">
                <span className="flex gap-1">
                  <i className="h-1.5 w-1.5 rounded-full bg-[#DEAB5F]" />
                  <i className="h-1.5 w-1.5 rounded-full bg-[#766D65]" />
                  <i className="h-1.5 w-1.5 rounded-full bg-[#514A45]" />
                </span>
                <span>TR / OPERATIONS INTELLIGENCE</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[#DEAB5F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#DEAB5F]" />{" "}
                CONCEPT PREVIEW
              </span>
            </div>
            <div className="grid min-h-[420px] grid-cols-[52px_1fr] sm:grid-cols-[62px_1fr]">
              <aside className="flex flex-col items-center gap-5 border-r border-[#383235] bg-[#141112] py-5">
                <div className="mb-2 grid h-8 w-8 place-items-center rounded-md border border-[#6B5437] bg-[#DEAB5F]/10 text-[#DEAB5F]">
                  <BrainCircuit size={18} />
                </div>
                {[MessageSquareText, BarChart3, FileSearch, Workflow].map(
                  (Icon, index) => (
                    <span
                      key={index}
                      className={`grid h-8 w-8 place-items-center rounded-md ${index === 0 ? "bg-[#DEAB5F]/15 text-[#DEAB5F]" : "text-[#766D65]"}`}
                    >
                      <Icon size={17} />
                    </span>
                  ),
                )}
              </aside>
              <div className="min-w-0 p-4 sm:p-6">
                <div className="flex items-center justify-between border-b border-[#383235] pb-4">
                  <div>
                    <small className="block text-[9px] tracking-[0.16em] text-[#8F857C]">
                      WORKSPACE / OPERATIONS
                    </small>
                    <strong className="mt-1 block text-sm font-medium">
                      Business assistant
                    </strong>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[#51463A] text-[10px] text-[#DEAB5F]">
                    TR
                  </span>
                </div>
                <div className="mt-5 flex gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#DEAB5F]/10 text-[#DEAB5F]">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <strong className="text-sm">Good morning.</strong>
                    <p className="mt-1 text-xs leading-5 text-[#B9B2AA]">
                      Ask a question about your connected business information.
                    </p>
                  </div>
                </div>
                <div className="ml-auto mt-5 max-w-[90%] rounded-lg border border-[#51463A] bg-[#211C1C] px-4 py-3 text-xs leading-5 text-[#F7F4EF]">
                  Which orders need attention this week?
                </div>
                <div className="mt-4 rounded-lg border border-[#51463A] bg-[#1D1919] p-4">
                  <div className="flex flex-wrap items-center gap-2 text-[9px] font-semibold tracking-[0.12em] text-[#DEAB5F]">
                    <Bot size={15} /> ASSISTANT RESPONSE{" "}
                    <span className="ml-auto font-normal normal-case tracking-normal text-[#8F857C]">
                      Illustrative
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-[#B9B2AA]">
                    There are three areas worth reviewing:
                  </p>
                  {[
                    ["12", "Orders past their expected dispatch date"],
                    ["4", "Orders awaiting an internal approval"],
                    ["7", "Customers with unresolved delivery queries"],
                  ].map(([value, label]) => (
                    <div
                      key={value}
                      className="mt-3 flex items-center gap-3 border-b border-[#383235] pb-3 last:border-0 last:pb-0"
                    >
                      <b className="min-w-7 font-serif text-xl text-[#DEAB5F]">
                        {value}
                      </b>
                      <span className="text-xs leading-5 text-[#D0C8C0]">
                        {label}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 flex items-center gap-2 text-[10px] text-[#8F857C]">
                    <FileSearch size={13} /> Sources: Orders view · Service log
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-lg border border-[#6B5437] bg-[#DEAB5F]/[0.06] p-3">
                  <LockKeyhole size={15} className="shrink-0 text-[#DEAB5F]" />
                  <div className="min-w-0 flex-1">
                    <strong className="block text-xs">Approval required</strong>
                    <p className="mt-1 text-[10px] leading-4 text-[#B9B2AA]">
                      Sending customer follow-ups requires an authorised review.
                    </p>
                  </div>
                  <span className="text-[9px] font-semibold tracking-wider text-[#DEAB5F]">
                    REVIEW
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-md border border-[#383235] px-3 py-3 text-[10px] text-[#766D65]">
                  <span>Ask about your operations...</span>
                  <span className="grid h-7 w-7 place-items-center rounded bg-[#DEAB5F] text-[#100E0F]">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
            <div className="border-t border-[#383235] px-4 py-3 text-[9px] tracking-wide text-[#8F857C]">
              Illustrative interface · Example data only
            </div>
          </div>
        </div>
        <div
          className={`${container} flex flex-col gap-3 border-t border-[#383235] py-5 text-[9px] font-semibold tracking-[0.18em] text-[#8F857C] sm:flex-row sm:items-center sm:justify-between`}
        >
          <span>BUSINESS CONTEXT</span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span>DATA</span>
            <i className="h-1 w-1 rounded-full bg-[#DEAB5F]" />
            <span>DOCUMENTS</span>
            <i className="h-1 w-1 rounded-full bg-[#DEAB5F]" />
            <span>APPLICATIONS</span>
            <i className="h-1 w-1 rounded-full bg-[#DEAB5F]" />
            <span>PEOPLE</span>
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="border-b border-[#383235] py-16 sm:py-20 lg:py-24">
        <div className={`${container} grid gap-8 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <SectionEyebrow>THE OPPORTUNITY</SectionEyebrow>
            <h2 className={sectionTitle}>
              Not another chatbot.
              <br />
              <em className="text-[#DEAB5F]">
                A working layer across your operations.
              </em>
            </h2>
          </div>
          <div className={`${muted} space-y-5 lg:pt-8`}>
            <p>
              Most organisations already have valuable information spread across
              databases, spreadsheets, documents and business applications. The
              challenge is making that information useful at the moment a
              decision or action is needed.
            </p>
            <p>
              We design practical AI solutions around the systems you already
              use. The aim is not to replace your people or rip out your
              software. It is to help teams find answers, understand exceptions
              and complete controlled tasks with less friction.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-16 sm:py-20 lg:py-24">
        <div className={container}>
          <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end lg:mb-14">
            <div>
              <SectionEyebrow>PLATFORM CAPABILITIES</SectionEyebrow>
              <h2 className={sectionTitle}>
                One assistant.
                <br />
                <em className="text-[#DEAB5F]">Connected capabilities.</em>
              </h2>
            </div>
            <p className={`${muted} max-w-lg md:justify-self-end`}>
              Start with a focused operational problem. Add capabilities when
              the value, data readiness and controls are proven.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="group flex min-h-[270px] flex-col rounded-md border border-[#383235] bg-[#151213] p-6 transition-colors hover:border-[#80633F] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#8F857C]">
                      {item.number}
                    </span>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[#DEAB5F] transition-transform group-hover:-translate-y-0.5"
                    />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-[#F7F4EF]">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#B9B2AA]">
                    {item.description}
                  </p>
                  <div className="mt-6 border-t border-[#383235] pt-4 text-[10px] leading-5 tracking-wide text-[#9C9187]">
                    {item.detail}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example workflow */}
      <section className="border-y border-[#383235] bg-[#151213] py-16 sm:py-20 lg:py-24">
        <div
          className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20`}
        >
          <div>
            <SectionEyebrow>FROM QUESTION TO ACTION</SectionEyebrow>
            <h2 className={sectionTitle}>
              Make operational information{" "}
              <em className="text-[#DEAB5F]">usable.</em>
            </h2>
            <p className={`${muted} mt-5`}>
              Consider a logistics team that needs to identify late orders,
              understand why they are delayed and coordinate the next step.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                "Retrieve relevant order and delivery information.",
                "Summarise exceptions and show where the answer came from.",
                "Prepare a follow-up task for the responsible team.",
                "Request approval before sending or changing records.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-[#D0C8C0]"
                >
                  <Check size={16} className="mt-1 shrink-0 text-[#DEAB5F]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 border-l border-[#80633F] pl-4 text-xs leading-6 text-[#8F857C]">
              Illustrative workflow. Actual integrations and actions depend on
              the client's systems, permissions and agreed scope.
            </p>
          </div>
          <div className="rounded-md border border-[#51463A] bg-[#100E0F] p-5 sm:p-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[9px] font-semibold tracking-[0.16em]">
              <span className="text-[#8F857C]">EXAMPLE WORKFLOW</span>
              <span className="text-[#DEAB5F]">CONTROLLED EXECUTION</span>
            </div>
            <div className="space-y-0">
              {[
                {
                  icon: MessageSquareText,
                  label: "01 / REQUEST",
                  title: "“Show me overdue orders.”",
                },
                {
                  icon: Database,
                  label: "02 / RETRIEVE",
                  title: "Query approved business data",
                },
                {
                  icon: BrainCircuit,
                  label: "03 / ANALYSE",
                  title: "Summarise exceptions and context",
                },
                {
                  icon: Fingerprint,
                  label: "04 / HUMAN REVIEW",
                  title: "Authorise the proposed action",
                  approval: true,
                },
                {
                  icon: GitBranch,
                  label: "05 / EXECUTE",
                  title: "Run the approved workflow",
                },
              ].map((node, index, array) => {
                const Icon = node.icon;
                return (
                  <div key={node.label}>
                    <div className="flex items-center gap-4 rounded-md border border-[#383235] bg-[#171415] p-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[#51463A] text-[#DEAB5F]">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <small className="block text-[9px] tracking-[0.14em] text-[#8F857C]">
                          {node.label}
                        </small>
                        <strong className="mt-1 block text-xs font-medium leading-5 text-[#F7F4EF] sm:text-sm">
                          {node.title}
                        </strong>
                      </div>
                      {node.approval ? (
                        <span className="text-[8px] font-semibold tracking-wider text-[#DEAB5F]">
                          REQUIRED
                        </span>
                      ) : index === 0 ? (
                        <ArrowRight size={16} className="text-[#8F857C]" />
                      ) : (
                        <Check size={16} className="text-[#DEAB5F]" />
                      )}
                    </div>
                    {index < array.length - 1 && (
                      <div className="ml-9 h-4 w-px bg-[#80633F]" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-[#383235] pt-4 text-[10px] leading-5 text-[#9C9187]">
              <LockKeyhole size={13} className="shrink-0 text-[#DEAB5F]" />{" "}
              Permission checks and audit records at every controlled step
            </div>
          </div>
        </div>
      </section>

      {/* FDE */}
      <section className="border-b border-[#383235] py-16 sm:py-20 lg:py-24">
        <div
          className={`${container} grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20`}
        >
          <div className="flex min-h-52 flex-col justify-center border-y border-[#51463A] py-8">
            <div className="font-serif text-7xl leading-none text-[#DEAB5F]">
              AI<span className="ml-2 text-4xl italic text-[#F7F4EF]">FDE</span>
            </div>
            <div className="mt-5 text-[9px] font-semibold tracking-[0.2em] text-[#8F857C]">
              DISCOVER / INTEGRATE / DEPLOY
            </div>
          </div>
          <div>
            <SectionEyebrow>HOW WE WORK</SectionEyebrow>
            <h2 className={sectionTitle}>
              Forward-deployed engineering.
              <br />
              <em className="text-[#DEAB5F]">Close to the real work.</em>
            </h2>
            <div className={`${muted} mt-5 space-y-4`}>
              <p>
                AI Forward Deployed Engineering (AI FDE) is an implementation
                approach: work alongside the people who understand the
                operation, identify a valuable use case, integrate with the
                existing environment and iterate against real-world feedback.
              </p>
              <p>
                We focus on solving a defined business problem—not introducing
                AI for its own sake.
              </p>
            </div>
            <div className="mt-7">
              <ArrowLink to="/contact?service=ai-business-automation">
                Talk through an operational challenge
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className={container}>
          <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end lg:mb-14">
            <div>
              <SectionEyebrow>ENGINEERED TO INTEGRATE</SectionEyebrow>
              <h2 className={sectionTitle}>
                A practical, governed
                <br />
                <em className="text-[#DEAB5F]">technical foundation.</em>
              </h2>
            </div>
            <p className={`${muted} max-w-lg md:justify-self-end`}>
              Technology choices are confirmed during discovery. The
              architecture should fit the client's environment, risk profile and
              operating model.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-md border border-[#80633F] bg-[#1B1717] p-5 text-center sm:p-6">
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#DEAB5F]">
                EXPERIENCE
              </span>
              <strong className="mt-2 block text-base">
                React · TypeScript
              </strong>
              <small className="mt-1 block text-xs text-[#9C9187]">
                Assistant interface / Analytics / Administration
              </small>
            </div>
            <div className="flex justify-center py-3 text-[#DEAB5F]">
              <ArrowDownRight size={19} />
            </div>
            <div className="rounded-md border border-[#51463A] bg-[#171415] p-5 text-center sm:p-6">
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#DEAB5F]">
                APPLICATION SERVICES
              </span>
              <strong className="mt-2 block text-base">
                ASP.NET Core / .NET
              </strong>
              <small className="mt-1 block text-xs text-[#9C9187]">
                Identity / APIs / Business rules / Tenant boundaries
              </small>
            </div>
            <div className="flex justify-center py-3 text-[#DEAB5F]">
              <ArrowDownRight size={19} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  BrainCircuit,
                  "AI orchestration",
                  "Model integration · Tool calling",
                ],
                [
                  FileSearch,
                  "Knowledge retrieval",
                  "RAG · Embeddings · Vector search",
                ],
                [Workflow, "Agent workflows", "Task execution · MCP tools"],
                [ShieldCheck, "Governance", "Approvals · Audit · Permissions"],
              ].map(([Icon, title, detail]) => {
                const ItemIcon = Icon as typeof BrainCircuit;
                return (
                  <div
                    key={title as string}
                    className="rounded-md border border-[#383235] bg-[#151213] p-5"
                  >
                    <ItemIcon size={19} className="text-[#DEAB5F]" />
                    <strong className="mt-3 block text-sm">
                      {title as string}
                    </strong>
                    <small className="mt-1 block text-xs leading-5 text-[#9C9187]">
                      {detail as string}
                    </small>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center py-3 text-[#DEAB5F]">
              <ArrowDownRight size={19} />
            </div>
            <div className="rounded-md border border-[#51463A] bg-[#1B1717] p-5 sm:p-6">
              <span className="text-[9px] font-semibold tracking-[0.18em] text-[#DEAB5F]">
                CONNECTED SOURCES
              </span>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-medium sm:grid-cols-4">
                <span className="rounded border border-[#383235] px-3 py-3 text-center">
                  SQL Server
                </span>
                <span className="rounded border border-[#383235] px-3 py-3 text-center">
                  PostgreSQL
                </span>
                <span className="rounded border border-[#383235] px-3 py-3 text-center">
                  Company documents
                </span>
                <span className="rounded border border-[#383235] px-3 py-3 text-center">
                  External APIs
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-7 flex max-w-4xl gap-3 border border-[#51463A] bg-[#171415] p-4 text-xs leading-6 text-[#B9B2AA]">
            <CircleHelp size={17} className="mt-1 shrink-0 text-[#DEAB5F]" />
            <p>
              <strong className="text-[#F7F4EF]">Important:</strong> AI output
              is not a security boundary. Data access is enforced by application
              services, database permissions and integration controls—not by
              model instructions alone.
            </p>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="border-y border-[#383235] bg-[#151213] py-16 sm:py-20 lg:py-24">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <SectionEyebrow>TRUST BY DESIGN</SectionEyebrow>
            <h2 className={sectionTitle}>
              Useful AI needs{" "}
              <em className="text-[#DEAB5F]">clear boundaries.</em>
            </h2>
            <p className={`${muted} mt-5 max-w-lg`}>
              Automation should be accountable. We design for controlled access,
              visible decisions and a safe path when the system is uncertain.
            </p>
          </div>
          <div className="divide-y divide-[#383235] border-y border-[#383235]">
            {[
              [
                LockKeyhole,
                "Least-privilege access",
                "Only the data and tools required for the approved task.",
              ],
              [
                Fingerprint,
                "Human approval",
                "Review gates for sensitive or consequential operations.",
              ],
              [
                ShieldCheck,
                "Traceable activity",
                "Record requests, tool calls, approvals and outcomes.",
              ],
              [
                Database,
                "Data protection",
                "Defined retention, access and handling requirements.",
              ],
              [
                BadgeCheck,
                "Tested behaviour",
                "Evaluate quality, edge cases and failure handling before rollout.",
              ],
            ].map(([Icon, title, description]) => {
              const ItemIcon = Icon as typeof LockKeyhole;
              return (
                <div key={title as string} className="flex gap-4 py-5">
                  <ItemIcon
                    size={19}
                    className="mt-0.5 shrink-0 text-[#DEAB5F]"
                  />
                  <span>
                    <strong className="block text-sm font-medium">
                      {title as string}
                    </strong>
                    <small className="mt-1 block text-xs leading-5 text-[#9C9187]">
                      {description as string}
                    </small>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className={container}>
          <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end lg:mb-14">
            <div>
              <SectionEyebrow>DELIVERY APPROACH</SectionEyebrow>
              <h2 className={sectionTitle}>
                Start small.
                <br />
                <em className="text-[#DEAB5F]">
                  Prove value. Expand carefully.
                </em>
              </h2>
            </div>
            <p className={`${muted} max-w-lg md:justify-self-end`}>
              A staged engagement keeps the first implementation focused and
              gives the business evidence before it commits to broader
              automation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="border-t border-[#80633F] bg-[#151213] p-5 sm:p-6"
              >
                <span className="font-mono text-xs text-[#DEAB5F]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-base font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#B9B2AA]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#383235] bg-[#151213] py-16 sm:py-20 lg:py-24">
        <div
          className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
        >
          <div>
            <SectionEyebrow>COMMON QUESTIONS</SectionEyebrow>
            <h2 className={sectionTitle}>
              Before we <em className="text-[#DEAB5F]">get started.</em>
            </h2>
            <p className={`${muted} mt-5 max-w-sm`}>
              Every implementation begins with the business problem, the data
              available and the controls required.
            </p>
          </div>
          <div className="border-t border-[#51463A]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-[#51463A]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium text-[#F7F4EF] transition-colors hover:text-[#DEAB5F]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#DEAB5F] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#B9B2AA]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#51463A] py-16 sm:py-20 lg:py-24">
        <div
          className={`${container} flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between`}
        >
          <div className="max-w-3xl">
            <SectionEyebrow>LET'S FIND THE RIGHT FIRST USE CASE</SectionEyebrow>
            <h2 className={sectionTitle}>
              Where does your team lose time{" "}
              <em className="text-[#DEAB5F]">looking for answers?</em>
            </h2>
            <p className={`${muted} mt-5 max-w-2xl`}>
              Tell us about the process, the systems involved and what a better
              outcome would look like. We can assess whether an AI assistant or
              workflow is a practical fit.
            </p>
          </div>
          <Link
            to="/contact?service=ai-business-automation"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#DEAB5F] px-6 py-3 text-sm font-semibold text-[#100E0F] transition-colors hover:bg-[#C99549]"
          >
            Discuss your use case <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
