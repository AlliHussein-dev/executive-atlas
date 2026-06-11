import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Etihad Consultancy, Abu Dhabi" },
      {
        name: "description",
        content:
          "Schedule a private consultation at our Electra Street office in Abu Dhabi or via secure digital channels.",
      },
      { property: "og:title", content: "Contact — Etihad Consultancy" },
      { property: "og:description", content: "Schedule a private consultation in Abu Dhabi." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: IMG.receptionLobby },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 pb-16 bg-sand px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <Eyebrow>Begin Your Business Journey</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl text-navy mt-6 mb-8 leading-[1.05]">
            Inaugurate your <span className="italic">presence</span>.
          </h1>
          <p className="text-slate text-lg leading-relaxed">
            Our partners are available for private consultations at our Abu Dhabi
            office, by direct telephone or via secure video conference.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <FadeUp>
          <div className="bg-navy text-sand p-10 lg:p-14">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="text-gold font-display italic text-5xl mb-6">Thank you.</div>
                <p className="text-sand/70 leading-relaxed max-w-md mx-auto">
                  Your request has been received. A senior partner will respond
                  within one business day to arrange your consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-8"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                    Consultation Request
                  </p>
                  <h2 className="font-display text-3xl">Request a private briefing.</h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField label="Full Name" name="name" required />
                  <FormField label="Organisation" name="org" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField label="Email Address" name="email" type="email" required />
                  <FormField label="Telephone" name="phone" />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-sand/60 font-semibold">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry"
                    className="w-full bg-transparent border-b border-sand/30 pb-3 pt-1 text-sand text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                    required
                  >
                    <option className="text-navy">Corporate Establishment</option>
                    <option className="text-navy">Immigration & Residency</option>
                    <option className="text-navy">Regulatory & Government</option>
                    <option className="text-navy">Legal Documentation</option>
                    <option className="text-navy">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-sand/60 font-semibold">
                    Brief Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full bg-transparent border-b border-sand/30 pb-3 pt-1 text-sand text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-gold text-navy text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-sand transition-colors"
                >
                  Submit Consultation Request
                </button>
              </form>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="space-y-10">
            <div>
              <Eyebrow>The Office</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl text-navy mt-4 mb-4 leading-tight">
                Electra Street, Abu Dhabi.
              </h2>
              <GoldRule className="mb-6" />
              <div className="space-y-2 text-slate">
                <p>Etihad Consultancy & Business Services LLC</p>
                <p>Electra Street (Zayed 2nd Street)</p>
                <p>Abu Dhabi, United Arab Emirates</p>
              </div>
            </div>

            <div className="aspect-[16/10] overflow-hidden border border-navy/10">
              <iframe
                title="Abu Dhabi office map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=54.366%2C24.485%2C54.386%2C24.495&layer=mapnik&marker=24.490%2C54.376"
                className="w-full h-full grayscale"
                loading="lazy"
              />
            </div>

            <div className="aspect-[16/9] overflow-hidden">
              <img src={IMG.receptionLobby} alt="Office reception" className="w-full h-full object-cover" />
            </div>

            <div className="grid sm:grid-cols-2 gap-8 border-t border-navy/10 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                  Direct Line
                </p>
                <p className="text-navy text-lg">+971 2 000 0000</p>
                <p className="text-slate text-sm mt-1">advisory@etihadconsultancy.ae</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                  Business Hours
                </p>
                <p className="text-navy text-sm">Sun–Thu · 08:30–17:30 GST</p>
                <p className="text-slate text-sm mt-1">By private appointment only</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>
    </SiteLayout>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] uppercase tracking-[0.25em] text-sand/60 font-semibold">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full bg-transparent border-b border-sand/30 pb-3 pt-1 text-sand text-sm focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
