import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Client Journey — Etihad Consultancy" },
      { name: "description", content: "A six-step engagement framework from private consultation through continuous corporate support." },
      { property: "og:title", content: "The Client Journey" },
      { property: "og:description", content: "Six-step engagement framework." },
      { property: "og:url", content: "/journey" },
      { property: "og:image", content: IMG.signing },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: JourneyPage,
});

const steps = [
  {
    n: "I",
    title: "Private Consultation",
    body: "A confidential discovery session with a senior partner. We listen, we ask, and we determine whether we are the right firm for your mandate.",
  },
  {
    n: "II",
    title: "Strategic Planning",
    body: "A bespoke structuring memorandum mapping jurisdiction, ownership, tax exposure and operational considerations.",
  },
  {
    n: "III",
    title: "Documentation Preparation",
    body: "Drafting, translation and notarisation of every corporate instrument required for submission.",
  },
  {
    n: "IV",
    title: "Government Coordination",
    body: "Direct liaison with federal authorities, ministries and licensing departments. Our partners attend; clients are spared the queues.",
  },
  {
    n: "V",
    title: "Business Activation",
    body: "License issuance, bank account openings, premises arrangements and executive residencies — sequenced and synchronised.",
  },
  {
    n: "VI",
    title: "Continuous Corporate Support",
    body: "Renewals, regulatory updates and quarterly partner reviews. Most clients remain with us for decades.",
  },
];

function JourneyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Engagement Framework"
        title={<>The path to <span className="italic">sovereignty</span>.</>}
        intro="A deliberate, six-phase framework refined over more than a decade of advisory practice. Each phase is the responsibility of a named partner."
        image={IMG.signing}
      />

      <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
        <div className="space-y-16">
          {steps.map((s, i) => (
            <FadeUp key={s.n}>
              <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start border-t border-navy/15 pt-10">
                <div className="col-span-3 lg:col-span-2">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-navy text-gold flex items-center justify-center font-display text-xl">
                    {s.n}
                  </div>
                </div>
                <div className="col-span-9 lg:col-span-10">
                  <Eyebrow>{`Step ${String(i + 1).padStart(2, "0")}`}</Eyebrow>
                  <h2 className="font-display text-3xl md:text-4xl text-navy mt-3 mb-5 leading-tight">
                    {s.title}
                  </h2>
                  <GoldRule className="mb-5" />
                  <p className="text-slate leading-relaxed text-lg max-w-2xl">
                    {s.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
