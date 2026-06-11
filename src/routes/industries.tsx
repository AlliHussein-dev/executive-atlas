import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Etihad Consultancy" },
      {
        name: "description",
        content:
          "Sectoral expertise across construction, technology, healthcare, real estate, manufacturing and hospitality.",
      },
      { property: "og:title", content: "Industries — Etihad Consultancy" },
      { property: "og:description", content: "Sectors stewarded by Etihad Consultancy." },
      { property: "og:url", content: "/industries" },
      { property: "og:image", content: IMG.construction },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const sectors = [
  {
    name: "Construction & Engineering",
    img: IMG.construction,
    challenge: "Multi-jurisdictional contracting licenses and labour quotas.",
    work: "Coordinated mainland and free-zone structures for vertically integrated operations.",
  },
  {
    name: "Technology",
    img: IMG.technology,
    challenge: "Data residency, IP protection and regional headquartering.",
    work: "Established regional HQs with dual-licensing for software and hardware concerns.",
  },
  {
    name: "Healthcare",
    img: IMG.healthcare,
    challenge: "DOH and MOH professional licensing for clinical operations.",
    work: "Practitioner accreditation, facility licensing and Golden Visa for specialists.",
  },
  {
    name: "Real Estate",
    img: IMG.realEstate,
    challenge: "Developer registration, escrow compliance and brokerage permits.",
    work: "Brokerage formation, RERA registration and investor visa programmes.",
  },
  {
    name: "Manufacturing",
    img: IMG.manufacturing,
    challenge: "Industrial licensing, customs exemptions and import quotas.",
    work: "Free-zone establishment with bonded warehousing and customs facilitation.",
  },
  {
    name: "Hospitality",
    img: IMG.hospitality,
    challenge: "Trade licensing, alcohol permits and operating concessions.",
    work: "Operator agreements, license consolidation and government coordination.",
  },
];

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title={<>Sectors we <span className="italic">steward</span>.</>}
        intro="Our advisory adapts to the regulatory contours of each industry. Below is a survey of the sectors in which Etihad maintains active mandates."
        image={IMG.construction}
      />

      <div>
        {sectors.map((s, i) => (
          <section
            key={s.name}
            className={`${i % 2 === 0 ? "bg-sand" : "bg-ivory"} border-b border-navy/5`}
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 items-stretch">
              <FadeUp className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[16/10] lg:h-full overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
              </FadeUp>
              <FadeUp delay={0.1} className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
                <span className="text-gold font-display italic text-xl mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Eyebrow>Sector</Eyebrow>
                <h2 className="font-display text-3xl md:text-4xl text-navy mt-4 mb-6 leading-[1.1]">
                  {s.name}
                </h2>
                <GoldRule className="mb-6" />
                <div className="space-y-4 text-slate leading-relaxed">
                  <p>
                    <span className="font-semibold text-navy">Typical Challenge.</span>{" "}
                    {s.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-navy">Recent Work.</span>{" "}
                    {s.work}
                  </p>
                </div>
              </FadeUp>
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
