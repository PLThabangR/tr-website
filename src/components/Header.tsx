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
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0e1129] backdrop-blur-md border-b border-white/10">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/TRLogo.png"
            alt="TR Software Development Consulting"
            className="h-8 w-auto md:hidden"
          />

          <img
            src="/TRLogoHorBGBlue.png"
            alt="TR Software Development Consulting"
            className="h-16 w-auto hidden md:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-tech-blue bg-white/5"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* AppDev External Website */}
          <a
            href="https://tra-applicationdev.vercel.app/"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-colors"
          >
            AppDev
          </a>

          {/* CTA */}
          <Link to="/contact" className="btn-primary text-sm ml-4">
            Book a Health Check
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-navy border-t border-white/10 animate-in slide-in-from-top-2">
          <div className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-tech-blue bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile AppDev External Website */}
            <a
              href="https://trapplicationdev.co.za"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-semibold text-tech-blue hover:text-white hover:bg-tech-blue/10 transition-colors"
            >
              AppDev
            </a>

            {/* Mobile CTA */}
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
