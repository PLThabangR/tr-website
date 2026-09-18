import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <section className="section-padding">
        <div className="container-custom max-w-2xl text-center">
          <div className="w-16 h-16 bg-african-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-african-green" size={32} />
          </div>
          <h1 className="mb-4">Thank you.</h1>
          <p className="text-lg text-slate-gray mb-8">
            We have received your message. We will respond within one business
            day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Your name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
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
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="system"
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  What system needs attention? *
                </label>
                <select
                  id="system"
                  name="system"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="crm">CRM system</option>
                  <option value="hr">HR or payroll system</option>
                  <option value="custom">Custom application</option>
                  <option value="integration">
                    Integration between systems
                  </option>
                  <option value="reporting">Reporting or automation</option>
                  <option value="health-check">
                    I want a system health check
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-navy mb-2"
                >
                  Tell us more
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What systems do you use? What is not working? Who maintains them currently?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all resize-none"
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
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Sending..." : "Send message"}
                <Send size={18} />
              </button>

              <p className="text-sm text-slate-gray">
                We respond within one business day. Your information is kept
                confidential.
              </p>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 rounded-xl space-y-6">
              <div>
                <h4 className="mb-4">Contact details</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3 items-start">
                    <Mail
                      className="text-tech-blue flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <a
                      href="mailto:rakgoropothabang@gmail.com"
                      className="text-slate-gray hover:text-tech-blue"
                    >
                      rakgoropothabang@gmail.com
                    </a>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Phone
                      className="text-tech-blue flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <a
                      href="tel:+27696350962"
                      className="text-slate-gray hover:text-tech-blue"
                    >
                      (+27) 69 635 0962
                    </a>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MapPin
                      className="text-tech-blue flex-shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-slate-gray">Midrand, Gauteng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
