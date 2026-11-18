import type { FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() ?? "";
    const company = formData.get("company")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const system = formData.get("system")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Website enquiry from ${name}`);

    const body = encodeURIComponent(
      `Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
System / Service: ${system}

Message:
${message}`,
    );

    window.location.href = `mailto:rakgoropothabang@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-16">
          <div className="max-w-3xl">
            <h1 className="text-text-primary mb-4">Contact</h1>

            <p className="text-lg text-text-secondary">
              Tell us about the system that is causing problems. We will respond
              within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Light Content */}
      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl mb-6">Send a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Your name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="system"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    What system or service do you need help with? *
                  </label>

                  <select
                    id="system"
                    name="system"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="Managed Application Services">
                      Managed Application Services
                    </option>
                    <option value="Application Development">
                      Application Development
                    </option>
                    <option value="Business Automation">
                      Business Automation
                    </option>
                    <option value="Software Products">Software Products</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Describe your requirements *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your business, the systems you use and the problem you want to solve."
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Prepare email
                  <Send size={18} />
                </button>

                <p className="text-xs text-text-muted">
                  Your email application will open with your enquiry prepared.
                  You can review it before sending.
                </p>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-lg border border-border-light sticky top-24">
                <h3 className="text-xl mb-6 text-black">Direct contact</h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Mail className="text-gold shrink-0 mt-1" size={20} />

                    <div>
                      <div className="font-medium text-black">Email</div>

                      <a
                        href="mailto:rakgoropothabang@gmail.com"
                        className="text-text-muted hover:text-gold transition-colors text-sm"
                      >
                        rakgoropothabang@gmail.com
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Phone className="text-gold shrink-0 mt-1" size={20} />

                    <div>
                      <div className="font-medium text-black">Phone</div>

                      <a
                        href="tel:+27696350962"
                        className="text-text-muted hover:text-gold transition-colors text-sm"
                      >
                        (+27) 69 635 0962
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="text-gold shrink-0 mt-1" size={20} />

                    <div>
                      <div className="font-medium text-black">Location</div>

                      <div className="text-text-muted text-sm">
                        Midrand, Gauteng
                        <br />
                        South Africa
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
