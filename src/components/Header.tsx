import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/health-check", label: "Health Check" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-bg-main border-b border-border-subtle">
      <div className="container-custom flex items-center justify-between py-4">
        <Link
          to="/"
          aria-label="TR Software Development Consulting home"
          className="flex items-center gap-3 group"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/TRBannerBgClear.png"
            alt="TR Software Development Consulting"
            className="h-10 w-auto md:hidden"
          />

          <img
            src="/TRBannerBgClear.png"
            alt="TR Software Development Consulting"
            className="h-20 w-auto hidden md:block"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`text-sm font-semibold transition-colors ${
                isActive(link.to)
                  ? "text-gold"
                  : "text-text-secondary hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://tra-applicationdev.vercel.app/"
            className="text-sm font-semibold text-text-secondary hover:text-gold transition-colors"
          >
            AppDev
          </a>

          <Link to="/contact" className="btn-primary py-2 px-4 text-sm ml-2">
            Book a Health Check
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-text-primary p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden bg-bg-main border-t border-border-subtle"
        >
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link.to) ? "page" : undefined}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "text-gold bg-gold/5"
                    : "text-text-secondary hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://tra-applicationdev.vercel.app/"
              className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-gold transition-colors"
            >
              AppDev
            </a>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm mt-2"
            >
              Book a Health Check
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
