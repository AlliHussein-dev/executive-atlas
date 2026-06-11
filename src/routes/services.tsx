import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Etihad Consultancy" },
      {
        name: "description",
        content:
          "Corporate establishment, immigration & residency advisory, regulatory & government relations, legal & corporate documentation.",
      },
      { property: "og:title", content: "Services — Etihad Consultancy" },
      { property: "og:description", content: "Four signature advisory practices." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: IMG.boardroom },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const practices = [
  {
    n: "01",
    title: "Corporate Establishment",
    sub: "Formation, structuring, restructuring",
    body: "Strategic incorporation aligned to long-term governance, tax exposure and regional ambitions.",
    items: [
      "Mainland company setup",
      "Free zone incorporation",
      "Offshore vehicles & holding structures",
      "Ownership restructuring",
      "Shareholder agreements",
    ],
    img: IMG.executiveTalk,
  },
  {
    n: "02",
    title: "Immigration & Residency Advisory",
    sub: "Investor, executive and family visas",
    body: "Bespoke residency for principals, leadership teams and accompanying families — including Golden Visa pathways.",
    items: [
      "Investor visas",
      "Executive visas",
      "Golden Visa pathways",
      "Family residency solutions",
      "Dependant sponsorships",
    ],
    img: IMG.privateConsult,
  },
  {
    n: "03",
    title: "Regulatory & Government Relations",
    sub: "PRO services, licensing, advocacy",
    body: "Direct liaison with federal authorities and senior advocacy for complex licensing and approvals.",
    items: [
      "PRO services",
      "Official documentation",
      "Licensing procedures",
      "Ministry coordination",
      "Renewals & compliance",
    ],
    img: IMG.documents,
  },
  {
    n: "04",
    title: "Legal & Corporate Documentation",
    sub: "Drafting, translation, attestation",
    body: "Drafting, certified translation and notarised attestation of every corporate instrument required to operate.",
    items: [
      "Arabic translation",
      "Chamber registrations",
      "Memoranda of Association",
      "Corporate agreements",
      "Power of attorney",
    ],
    img: IMG.contracts,
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Signature Advisory"
        title={<>Four practices, one <span className="italic">standard</span>.</>}
        intro="Each engagement is led by a senior partner, supported by specialist counsel and coordinated through a single point of contact. We do not unbundle our practices — we orchestrate them."
        image={IMG.boardroom}
      />

      <div>
        {practices.map((p, i) => (
          <section
            key={p.n}
            className={`py-24 px-6 lg:px-10 ${i % 2 === 0 ? "bg-sand" : "bg-ivory"}`}
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
              <FadeUp className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                </div>
              </FadeUp>
              <FadeUp delay={0.1} className="lg:col-span-6">
                <div className="text-gold font-display italic text-2xl mb-6">{p.n}</div>
                <Eyebrow>{p.sub}</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 mb-6 leading-[1.05]">
                  {p.title}
                </h2>
                <GoldRule className="mb-6" />
                <p className="text-slate leading-relaxed text-lg mb-8">{p.body}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-navy text-sm">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold border-b border-gold pb-1.5 text-navy hover:text-gold"
                >
                  Request a Private Briefing
                </Link>
              </FadeUp>
            </div>
          </section>
        ))}
      </div>
    </SiteLayout>
  );
}
