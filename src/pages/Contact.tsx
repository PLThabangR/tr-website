import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <section className="section-padding light-section">
        <div className="container-custom max-w-2xl text-center">
          <CheckCircle2 className="text-gold mx-auto mb-6" size={48} />
          <h1 className="mb-4">Thank you.</h1>
          <p className="text-text-muted">
            We have received your message and will respond within one business
            day.
          </p>
        </div>
      </section>
    );
  }

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
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
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
                    What system is causing problems? *
                  </label>
                  <select
                    id="system"
                    name="system"
                    required
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="crm">CRM system</option>
                    <option value="hr">HR or payroll system</option>
                    <option value="custom">Custom application</option>
                    <option value="integration">
                      Integration between systems
                    </option>
                    <option value="frontend">Front-end / User Interface</option>
                    <option value="health-check">
                      I want a system health check
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Describe the problem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What systems do you use? What is not working? Who maintains them currently?"
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                  <Send size={18} />
                </button>
                <p className="text-xs text-text-muted">
                  We respond within one business day. Your information is kept
                  confidential.
                </p>
              </form>
            </div>

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
