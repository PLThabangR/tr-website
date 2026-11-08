import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const caseStudies = [
    {
      title: "Motor Insurance Management System",
      category: "Enterprise Application Development",
      client: "Independent Software Engineering Project",
      status: "Stalled",
      problem:
        "Insurance platforms require reliable management of customers, policy administration, quotations, claims and financial information. Poorly structured systems can lead to inconsistent data, difficult maintenance, and inefficient business processes.",
      solution:
        "Developing a full-stack motor insurance application using ASP.NET Core Web API and React. The solution follows Clean Architecture principles and uses CQRS and MediatR to separate business operations from queries. It includes authentication, policy management, claims processing and structured API endpoints.",
      outcome:
        "The project is designed to demonstrate production-oriented application architecture, secure API development, relational data management, caching, automated testing and containerised deployment.",
      tech: [
        "C#",
        ".NET 8",
        "ASP.NET Core Web API",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Entity Framework Core",
        "Redis",
        "MediatR",
        "CQRS",
        "Mapster",
        "Docker",
        "Azure",
        "xUnit",
      ],
    },
    {
      title: "Staff Management & Workflow System",
      category: "Business Process Automation",
      client: "Independent Software Engineering Project",
      status: "In Development",
      problem:
        "Organisations often rely on emails, spreadsheets, and manual processes to manage employee information, leave applications, document approvals, and internal administrative workflows. These processes make tracking requests and maintaining accountability difficult.",
      solution:
        "Designing a centralised staff management portal using ASP.NET Core and Angular. The system focuses on role-based access, employee management, leave request processing, document management, and approval workflows.",
      outcome:
        "The proposed system aims to streamline internal business operations, improve visibility into employee requests, establish approval tracking, and reduce administrative work through digitised processes.",
      tech: [
        "C#",
        "ASP.NET Core",
        "Angular",
        "TypeScript",
        "SQL Server",
        "Entity Framework Core",
        "REST APIs",
        "Authentication",
        "Role-Based Authorization",
        "Azure",
      ],
    },
    {
      title: "ABC Properties Management System",
      category: "Property Management & API Development",
      client: "Independent Software Engineering Project",
      status: "Completed",
      problem:
        "Property management operations require structured relationships between properties, agents, and listings. Without a well-designed backend, managing records, maintaining data consistency, and expanding application functionality can become difficult.",
      solution:
        "Building a property management REST API using ASP.NET Core 8, with dedicated application, domain, and infrastructure layers. The application manages property agents, property listings, and their relationships using Entity Framework Core, MediatR, and CQRS.",
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
        "Clean Architecture",
        "Docker",
      ],
    },
    {
      title: "Advanced Microservices with .NET",
      category: "Distributed Systems & Cloud Engineering",
      client: "Udemy Course Implementation",
      status: "In Development",
      problem:
        "Building enterprise applications with a monolithic architecture can introduce challenges around independent deployment, service scalability, communication, and maintaining reusable components across distributed systems.",
      solution:
        "Implementing distributed application concepts using C# and ASP.NET Core Microservices. The project explores service-to-service communication, authentication and authorization, API gateways, messaging systems, reusable NuGet packages, and asynchronous processing.",
      outcome:
        "Demonstrates practical understanding of distributed system design, independently managed services, messaging patterns, reusable libraries, automated deployment pipelines, and Microsoft Azure cloud integration.",
      tech: [
        "C#",
        "ASP.NET Core",
        "Microservices",
        "Entity Framework Core",
        "ASP.NET Core Identity",
        "JWT",
        "RabbitMQ",
        "Azure Service Bus",
        "MassTransit",
        "Ocelot API Gateway",
        "NuGet",
        "Azure DevOps",
        "Microsoft Azure",
      ],
    },
    {
      title: "LogiTrack – Inventory & Order Management API",
      category: "Logistics & Enterprise Backend Development",
      client: "Capstone Software Engineering Project",
      status: "Completed",
      problem:
        "Logistics businesses managing inventory across multiple fulfilment centres need accurate stock visibility, reliable order processing, and centralised data management. Disconnected inventory records can make it difficult to coordinate fulfilment operations.",
      solution:
        "Developing an ASP.NET Core Web API application that streamlines inventory management and order processing across multiple fulfilment centres. The backend uses Entity Framework Core for relational data management and ASP.NET Core Identity for authentication and user management.",
      outcome:
        "The project focuses on delivering secure RESTful APIs, structured inventory and order management, multi-location data handling, and a maintainable backend architecture that supports logistics operations.",
      tech: [
        "C#",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "ASP.NET Core Identity",
        "REST APIs",
        "SQL",
        "Authentication",
        "Authorization",
        "Relational Database Design",
      ],
    },
    {
      title: "Advanced .NET FullStack – Multi-Tenant Applications",
      category: "SaaS & Multi-Tenant Application Development",
      client: "Advanced .NET Course Implementation",
      status: "Learning & Implementation",
      problem:
        "Software-as-a-Service platforms need to support multiple organisations within a shared application while maintaining tenant isolation, secure access, subscription management, and flexible data storage strategies.",
      solution:
        "Developing a full-stack multi-tenant application using ASP.NET Core 8 Web APIs and Blazor WebAssembly. The implementation explores Finbuckle multi-tenancy, shared-database and multi-database strategies, tenant activation, subscription management, ASP.NET Core Identity, JWT authentication and permission-based authorization.",
      outcome:
        "Demonstrates the architectural foundations of multi-tenant SaaS platforms, including tenant isolation, subscription lifecycle management, fine-grained authorization, CQRS, validation and standardised API responses.",
      tech: [
        "C#",
        ".NET 8",
        "ASP.NET Core Web API",
        "Blazor WebAssembly",
        "Finbuckle.MultiTenant",
        "Entity Framework Core",
        "ASP.NET Core Identity",
        "JWT",
        "MediatR",
        "CQRS",
        "FluentValidation",
        "Swagger / OpenAPI",
        "Multi-Tenant Architecture",
      ],
    },
    {
      title: "TR Business Manager",
      category: "SaaS & Small Business Management",
      client: "TR Software Systems Group – Planned Product",
      status: "Not Yet Started",
      problem:
        "Small service-based businesses often manage customers, quotations, invoices, payments, and jobs using disconnected spreadsheets and manual processes. This makes it difficult to track outstanding payments, monitor business activities, and maintain accurate financial records.",
      solution:
        "A planned cloud-based business management platform designed to centralise customer records, quotation generation, invoicing, payment tracking, job management, and automated customer reminders within one application.",
      outcome:
        "The product aims to give small service businesses an affordable, centralised platform for managing their daily operations while introducing a subscription-based SaaS revenue model.",
      tech: [
        "C#",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Entity Framework Core",
        "SQL Server",
        "PostgreSQL",
        "REST APIs",
        "Azure",
        "Multi-Tenant Architecture",
      ],
      businessModel: "Subscription: R299 – R799/month",
    },
    {
      title: "TR ServiceDesk",
      category: "SaaS & Service Management",
      client: "TR Software Systems Group – Planned Product",
      status: "Not Yet Started",
      problem:
        "Maintenance and service companies need an organised way to receive customer requests, allocate jobs, schedule technicians, track maintenance history, and monitor service performance. Manual coordination can result in missed requests and inefficient resource allocation.",
      solution:
        "A planned service management platform that centralises customer service requests, job allocation, technician scheduling, maintenance records, and monthly operational reporting.",
      outcome:
        "The product aims to improve service delivery, provide visibility into job progress, maintain customer service histories, and help businesses coordinate their field operations.",
      tech: [
        "C#",
        "ASP.NET Core Web API",
        "React",
        "TypeScript",
        "SQL Server",
        "Entity Framework Core",
        "REST APIs",
        "Azure",
        "Role-Based Authorization",
      ],
      businessModel: "Subscription: R499 – R1,499/month",
    },
    {
      title: "TR LeadFlow",
      category: "SaaS & Customer Relationship Management",
      client: "TR Software Systems Group – Planned Product",
      status: "Not Yet Started",
      problem:
        "Businesses frequently lose potential customers because enquiries, sales opportunities, and follow-ups are spread across emails, WhatsApp conversations, and spreadsheets. Without a centralised sales pipeline, tracking prospective customers and measuring sales performance becomes difficult.",
      solution:
        "A planned customer relationship and sales management platform designed to capture enquiries, manage leads through a sales pipeline, integrate WhatsApp communication, schedule follow-ups, and generate sales performance reports.",
      outcome:
        "The product aims to help businesses organise their sales activities, improve lead visibility, maintain consistent customer follow-ups, and convert more enquiries into paying customers.",
      tech: [
        "C#",
        "ASP.NET Core",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Entity Framework Core",
        "REST APIs",
        "WhatsApp Business Platform",
        "Azure",
        "CRM Architecture",
      ],
      businessModel: "Subscription-Based SaaS",
    },
  ];

  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Projects & Engineering
            </div>

            <h1 className="text-text-primary mb-6">
              Engineering solutions through software.
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Explore our software engineering projects, technical
              implementations and architectural approaches across enterprise
              application development, distributed systems, business automation
              and cloud technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="section-padding light-section">
        <div className="container-custom max-w-4xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-text-dark mb-4">
              Selected Engineering Projects
            </h2>

            <p className="text-text-muted leading-relaxed">
              Each project demonstrates practical software engineering concepts,
              technical decisions and the application of modern development
              technologies. Project status is indicated transparently.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="border border-border-light rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <div className="bg-slate-50 px-6 py-5 border-b border-border-light flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                      {study.category}
                    </div>

                    <h3 className="text-xl mb-1">{study.title}</h3>

                    <div className="text-sm text-text-muted">
                      {study.client}
                    </div>
                  </div>

                  <span className="font-sans text-xs px-3 py-1 bg-white border border-border-light rounded-full text-text-dark">
                    {study.status}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        The Challenge
                      </div>

                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Engineering Approach
                      </div>

                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                        Project Objectives
                      </div>

                      <p className="text-sm text-text-dark leading-relaxed">
                        {study.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-light">
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                      Technology Stack
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.tech.map((technology) => (
                        <span
                          key={technology}
                          className="font-sans text-xs text-text-muted bg-slate-100 px-2 py-1 rounded border border-border-light"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {study.businessModel && (
                    <div className="mt-6 pt-5 border-t border-border-light">
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        Business Model
                      </div>
                      <p className="text-sm text-text-dark font-medium">
                        {study.businessModel}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="text-text-primary mb-4">
            Have a software engineering challenge?
          </h2>

          <p className="text-text-secondary mb-8">
            We work on enterprise applications, backend systems, API
            development, system integration and cloud-based solutions. Let's
            discuss how technology can support your business.
          </p>

          <Link to="/contact" className="btn-ghost">
            Discuss a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
