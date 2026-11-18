import { ArrowUpRight, Check } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { company } from "../data/company";

export function ServicePage() {
  const location = useLocation();

  const item = company.divisions.find(
    (division) => division.href === location.pathname,
  );

  if (!item) {
    return (
      <div className="container-custom section-padding">
        <h1>Page not found</h1>
        <Link to="/" className="text-gold">
          Return home
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="page-intro section-padding">
        <div className="container-custom">
          <p className="eyebrow mb-8">TR Group / Services / {item.name}</p>

          <span className="section-index">
            {item.number} — {item.status}
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl">{item.name}</h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
            {item.description}
          </p>

          <Link to="/contact" className="btn-primary mt-9">
            Discuss your requirements
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-5">How we can help</p>
            <h2 className="font-serif text-4xl font-normal">
              Focused capability. Clear outcomes.
            </h2>
          </div>

          <div>
            {item.items.map((service, index) => (
              <div
                key={service}
                className="flex gap-5 border-t border-border-subtle py-5"
              >
                <span className="section-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg">{service}</p>

                <Check className="ml-auto text-gold" size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border-subtle bg-[#171416] py-16">
        <div className="container-custom flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow mb-4">A sensible next step</p>
            <h2 className="font-serif text-4xl font-normal">
              Let’s understand the problem first.
            </h2>
          </div>

          <Link to="/contact" className="btn-primary self-start">
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {item.status !== "Available service" && (
        <div className="container-custom py-5 text-xs leading-6 text-text-secondary">
          This capability is in development or future expansion. Scope,
          availability and delivery will be confirmed during an initial
          discussion.
        </div>
      )}
    </>
  );
}
