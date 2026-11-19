import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company } from "../data/company";

const links = [
  { label: "About", to: "/about" },
  { label: "AI Assistant", to: "/business-operations-ai-assistant" },
  { label: "Managed services", to: "/managed-services" },
  { label: "Development", to: "/application-development" },
  { label: "Data & analytics", to: "/data-analytics" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="relative z-30 border-b border-border-subtle">
        <div className="container-custom flex h-\[82px]\ items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-10 place-items-center border border-gold/70 font-serif text-xl text-gold">
              TR
            </span>

            <span className="leading-tight">
              <span className="block text-[11px] font-semibold tracking-[.16em]">
                TR SOFTWARE
              </span>
              <span className="block text-[10px] tracking-[.19em] text-text-secondary">
                SYSTEMS GROUP
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-xs">
              Start a conversation
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          <button
            className="grid size-10 place-items-center border border-border-subtle lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {open && (
          <nav
            className="menu-panel absolute left-0 right-0 top-full grid gap-0 p-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            {[
              ...links,
             
              // { label: "Software products", to: "/software-products" },
              { label: "Contact", to: "/contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-border-subtle px-3 py-4 text-sm ${
                    isActive ? "text-gold" : "text-text-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border-subtle">
        <div className="container-custom grid gap-12 py-14 md:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <p className="eyebrow mb-5">TR SOFTWARE SYSTEMS GROUP</p>

            <p className="max-w-sm font-serif text-3xl leading-tight">
              Technology that works as hard as your business.
            </p>

            <p className="mt-5 text-xs tracking-wide text-text-secondary">
              {company.promise}
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest">
              Explore
            </p>

            <div className="grid gap-3 text-sm text-text-secondary">
              <Link to="/about">About the company</Link>
              <Link to="/business-operations-ai-assistant">
                Business Operations AI Assistant
              </Link>
              <Link to="/managed-services">Managed services</Link>
              <Link to="/application-development">Application development</Link>
              <Link to="/data-analytics">Data & analytics</Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest">
              Get in touch
            </p>

            <div className="grid gap-3 text-sm text-text-secondary">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href="tel:+27707620683">{company.phone}</a>
              <span>{company.location}</span>

              <Link
                className="mt-2 inline-flex items-center gap-2 text-gold"
                to="/contact"
              >
                Discuss a project
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="container-custom flex flex-col gap-2 border-t border-border-subtle py-5 text-[11px] text-text-secondary md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </span>

          <span>
            Registered in the Republic of South Africa · {company.registration}
          </span>
        </div>
      </footer>
    </div>
  );
}
