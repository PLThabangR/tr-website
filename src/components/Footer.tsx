import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/TRLogoHor.png"
                alt="TR Software Development Consulting"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              Application managed services for South African businesses. We
              maintain, support, and improve the software you already depend on
              — regardless of who built it.
            </p>
            <p className="text-tech-blue font-semibold text-sm">
              We keep your systems running.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Application Managed Services
                </Link>
              </li>
              <li>
                <Link
                  to="/health-check"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  System Health Check
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Integration & APIs
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Reporting & Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-tech-blue flex-shrink-0" />
                Midrand, Gauteng
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-tech-blue flex-shrink-0" />
                <a
                  href="mailto:rakgoropothabang@gmail.com"
                  className="hover:text-tech-blue transition-colors"
                >
                  rakgoropothabang@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-tech-blue flex-shrink-0" />
                <a
                  href="tel:+27696350962"
                  className="hover:text-tech-blue transition-colors"
                >
                  (+27) 69 635 0962
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} TR Software Development Consulting. All
            rights reserved.
          </p>
          <p className="text-xs">African Business. Reliable Systems.</p>
        </div>
      </div>
    </footer>
  );
}
