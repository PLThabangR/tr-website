import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/company";

export function Contact() {
 const [sent,setSent] = useState(false);
 const submit = (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault();
   const data = new FormData(event.currentTarget);
   const subject = encodeURIComponent(`Website enquiry — ${data.get("name")}`);
   const body = encodeURIComponent(`Name: ${data.get("name")}\\nEmail: ${data.get("email")}\\nOrganisation: ${data.get("organisation")}\\nArea of interest: ${data.get("service")}\\n\\n${data.get("message")}`);
   window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
   setSent(true);
 };
 return <section className="section-padding"><div className="container-custom grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
  <div><p className="eyebrow mb-7">Contact TR Group</p><h1 className="text-5xl md:text-6xl">Let’s talk about what needs to work <em className="font-normal text-gold">better.</em></h1><p className="mt-8 max-w-md leading-7 text-text-secondary">Share a little about your business, your systems or the challenge you are trying to solve. We’ll take it from there.</p>
   <div className="mt-12 grid gap-6 text-sm"><a className="flex items-center gap-4 text-text-secondary hover:text-gold" href={`mailto:${company.email}`}><Mail className="text-gold" size={18}/>{company.email}</a><a className="flex items-center gap-4 text-text-secondary hover:text-gold" href="tel:+27707620683"><Phone className="text-gold" size={18}/>{company.phone}</a><span className="flex items-center gap-4 text-text-secondary"><MapPin className="text-gold" size={18}/>{company.location}</span></div>
  </div>
  <form onSubmit={submit} className="border border-border-subtle p-6 md:p-9">
   <p className="mb-8 text-xs uppercase tracking-[.18em] text-gold">Project enquiry</p>
   <div className="grid gap-5 sm:grid-cols-2">
    <label className="grid gap-2 text-xs text-text-secondary">Your name<input required name="name" className="form-field" placeholder="Name and surname"/></label>
    <label className="grid gap-2 text-xs text-text-secondary">Email address<input required type="email" name="email" className="form-field" placeholder="you@company.co.za"/></label>
    <label className="grid gap-2 text-xs text-text-secondary sm:col-span-2">Organisation<input name="organisation" className="form-field" placeholder="Company name (optional)"/></label>
    <label className="grid gap-2 text-xs text-text-secondary sm:col-span-2">What can we help with?<select name="service" className="form-field"><option>Managed application services</option><option>Application development</option><option>Data & analytics</option><option>Business automation</option><option>Software products</option><option>Not sure yet</option></select></label>
    <label className="grid gap-2 text-xs text-text-secondary sm:col-span-2">Tell us about your requirements<textarea required name="message" rows={5} className="form-field resize-y" placeholder="A short description of the challenge or opportunity..."/></label>
   </div>
   <button className="btn-primary mt-7 w-full sm:w-auto" type="submit">Prepare email <ArrowUpRight size={16}/></button>
   {sent && <p role="status" className="mt-4 text-xs leading-5 text-text-secondary">Your email application should open with the enquiry details. If it doesn’t, email us directly at {company.email}.</p>}
   <p className="mt-5 text-[11px] leading-5 text-text-secondary">This form prepares an email on your device. It does not submit information to a server.</p>
  </form>
 </div></section>;
}