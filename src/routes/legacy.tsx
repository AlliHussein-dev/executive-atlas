import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, GoldRule, PageHero, Eyebrow } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/legacy")({
  head: () => ({
    meta: [
      { title: "The Etihad Legacy — A Heritage of Discretion" },
      {
        name: "description",
        content:
          "Founder vision, corporate philosophy and the institutional permanence behind Etihad Consultancy & Business Services LLC.",
      },
      { property: "og:title", content: "The Etihad Legacy" },
      { property: "og:description", content: "Founder vision, philosophy and the heritage of Etihad Consultancy." },
      { property: "og:url", content: "/legacy" },
      { property: "og:image", content: IMG.facadeArchitecture },
    ],
    links: [{ rel: "canonical", href: "/legacy" }],
  }),
  component: LegacyPage,
});

function LegacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Etihad Legacy"
        title={<>A practice built upon <span className="italic">patience</span>.</>}
        intro="Founded to serve as the discreet bridge between international capital and Emirati opportunity, Etihad Consultancy has earned the trust of families, founders and institutions establishing presence in the United Arab Emirates."
        image={IMG.facadeArchitecture}
      />

      <section className="py-24 px-6 lg:px-10 max-w-5xl mx-auto">
        <FadeUp>
          <Eyebrow>Founder's Vision</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 mb-8 leading-[1.05]">
            "A great firm is not measured by speed, but by the permanence of what it builds."
          </h2>
          <GoldRule className="mb-8" />
          <div className="space-y-6 text-slate leading-relaxed text-lg">
            <p>
              From a single office on Electra Street, our founding partners
              shaped a practice rooted in the conviction that strategic
              relationships and unhurried counsel outlast every market cycle. We
              have grown by the discretion of our clients, not the volume of our
              voice.
            </p>
            <p>
              Today, we serve as trusted advisors to family offices, sovereign
              partners, multi-national entities and ambitious founders who
              demand a steward — not a supplier.
            </p>
          </div>
        </FadeUp>
      </section>

      <section className="py-24 bg-ivory px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 text-center">
          {[
            { n: "2008", l: "Year established" },
            { n: "1,200+", l: "Mandates completed" },
            { n: "37", l: "Nationalities served" },
          ].map((s) => (
            <FadeUp key={s.n}>
              <div className="border-t border-navy/15 pt-10">
                <div className="font-display text-6xl text-navy">{s.n}</div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-slate font-semibold">
                  {s.l}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={IMG.officeInterior} alt="Office interior" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Eyebrow>Corporate Philosophy</Eyebrow>
            <h2 className="font-display text-4xl text-navy mt-5 mb-6 leading-[1.1]">
              Counsel before commerce.
            </h2>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                We measure success not by the licenses we obtain, but by the
                ventures that endure. Every engagement begins with a private
                conversation about ambition, exposure, and the long horizon.
              </p>
              <p>
                Our recommendations are designed to remain correct for decades
                — not quarters. Compliance is not a hurdle; it is the
                infrastructure of permanence.
              </p>
              <p>
                Confidentiality is absolute. Names are spoken only in
                consultation, and every client receives the deliberate attention
                of a senior partner.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-24 bg-navy text-sand px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow>Commitments</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl mt-5 mb-12 italic">
            Four principles, immovable.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-sand/10 border border-sand/10 text-left">
            {[
              ["Discretion", "Client identities and instructions remain within the partnership."],
              ["Precision", "Every document and submission is verified by senior counsel."],
              ["Patience", "We advance only when conditions are correct."],
              ["Partnership", "Our retainers extend across generations of leadership."],
            ].map(([t, b]) => (
              <div key={t} className="bg-navy p-10">
                <h3 className="font-display text-2xl mb-4">{t}</h3>
                <p className="text-sand/60 leading-relaxed text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
