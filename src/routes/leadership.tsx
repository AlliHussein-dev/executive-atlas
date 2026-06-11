import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Etihad Consultancy" },
      { name: "description", content: "Senior partners and expert advisors at Etihad Consultancy." },
      { property: "og:title", content: "Leadership — Etihad Consultancy" },
      { property: "og:description", content: "Senior partners and expert advisors." },
      { property: "og:url", content: "/leadership" },
      { property: "og:image", content: IMG.portraitMale1 },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

const partners = [
  {
    name: "Khalid Al Hashimi",
    title: "Senior Partner · Corporate Practice",
    img: IMG.portraitMale1,
    spec: "Mainland & free-zone structuring · Government advocacy",
    exp: "22 years",
    philosophy: "The finest structures are those a client need never reconsider.",
  },
  {
    name: "Layla Al Mazrouei",
    title: "Partner · Regulatory & Government",
    img: IMG.portraitFemale2,
    spec: "Federal licensing · Ministry coordination",
    exp: "18 years",
    philosophy: "Regulation, properly understood, is the architecture of trust.",
  },
  {
    name: "Omar Bin Saeed",
    title: "Director · Immigration Advisory",
    img: IMG.portraitMale2,
    spec: "Golden Visa · Investor & executive residency",
    exp: "16 years",
    philosophy: "A residency is a promise to a family. We treat it as such.",
  },
  {
    name: "Dr. Mariam Al Suwaidi",
    title: "Partner · Legal Documentation",
    img: IMG.portraitFemale1,
    spec: "Corporate agreements · Arabic legal translation",
    exp: "20 years",
    philosophy: "Every document we sign is one we would defend, decades later.",
  },
  {
    name: "Hassan Al Nuaimi",
    title: "Director · Industry Advisory",
    img: IMG.portraitMale3,
    spec: "Healthcare · Real estate · Hospitality sectors",
    exp: "14 years",
    philosophy: "Sectoral nuance is not a luxury — it is a prerequisite.",
  },
];

function LeadershipPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Practice"
        title={<>Senior partners of <span className="italic">institutional standing</span>.</>}
        intro="Every engagement is led by a senior partner whose practice spans decades of UAE corporate life. Our partners do not delegate the work for which they are retained."
        image={IMG.portraitMale1}
      />

      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto space-y-24">
        {partners.map((p, i) => (
          <FadeUp key={p.name}>
            <article className="grid lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden max-w-md mx-auto">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
              <div className="lg:col-span-7">
                <Eyebrow>{p.title}</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl text-navy mt-4 mb-6 leading-[1.05]">
                  {p.name}
                </h2>
                <GoldRule className="mb-6" />
                <div className="grid sm:grid-cols-2 gap-6 mb-8 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mb-2">
                      Specialisation
                    </p>
                    <p className="text-navy">{p.spec}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold mb-2">
                      Experience
                    </p>
                    <p className="text-navy">{p.exp}</p>
                  </div>
                </div>
                <blockquote className="border-l-2 border-gold pl-6 italic text-xl text-navy font-display leading-relaxed">
                  "{p.philosophy}"
                </blockquote>
              </div>
            </article>
          </FadeUp>
        ))}
      </section>
    </SiteLayout>
  );
}
