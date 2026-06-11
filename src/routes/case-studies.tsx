import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, Eyebrow, GoldRule, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Executive Case Studies — Etihad Consultancy" },
      {
        name: "description",
        content: "Corporate success stories: challenge, solution, outcome.",
      },
      { property: "og:title", content: "Executive Case Studies" },
      { property: "og:description", content: "Case studies from Etihad Consultancy mandates." },
      { property: "og:url", content: "/case-studies" },
      { property: "og:image", content: IMG.meetingTable },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const cases = [
  {
    sector: "Engineering",
    title: "International Engineering Group · UAE Market Entry",
    img: IMG.meetingTable,
    challenge: "A European engineering conglomerate required market entry with complex regulatory exposures, a 12-week mandate and concurrent residency for twenty-three executives.",
    solution: "Etihad managed licensing strategy, government coordination, ministry documentation and concurrent executive residency through a single dedicated partner.",
    outcome: "Operational launch on schedule. Twenty-three executive residencies issued. Subsequent regional expansion mandate retained on long-term retainer.",
  },
  {
    sector: "Technology",
    title: "Silicon Valley Software Firm · Regional Headquarters",
    img: IMG.executiveTalk,
    challenge: "A publicly listed software firm sought a regional headquarters with dual-licensing for software and hardware, plus IP-protection arrangements.",
    solution: "We structured a free-zone primary entity with mainland trading branch, secured dual licenses and negotiated a specialised regulatory framework.",
    outcome: "Headquarters established in under 90 days. Forty roles localised in the first year. Federal IP filings completed in parallel.",
  },
  {
    sector: "Healthcare",
    title: "European Specialty Clinic · Multi-Site Licensing",
    img: IMG.boardroom,
    challenge: "A renowned European specialty clinic required DOH facility licensing across three emirates and Golden Visa sponsorship for fourteen practitioners.",
    solution: "Etihad coordinated facility inspection, practitioner accreditation and concurrent residency through our healthcare regulatory practice.",
    outcome: "All three facilities operational within the planned phase. Fourteen Golden Visa approvals obtained without remediation.",
  },
  {
    sector: "Family Office",
    title: "GCC Family Office · Succession Architecture",
    img: IMG.privateConsult,
    challenge: "A regional family office sought to consolidate twenty-two operating entities under a succession-ready holding structure across multiple jurisdictions.",
    solution: "Our partners architected an ADGM holding structure with succession protocols, prepared shareholder instruments and obtained regulatory blessings.",
    outcome: "All twenty-two entities migrated within nine months. Succession protocols ratified by all family stakeholders.",
  },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Corporate Success Stories"
        title={<>Executive case <span className="italic">studies</span>.</>}
        intro="Names withheld out of obligation, work documented out of pride. A selection of recent mandates."
        image={IMG.meetingTable}
      />

      <div className="py-24 px-6 lg:px-10 max-w-7xl mx-auto space-y-32">
        {cases.map((c, i) => (
          <FadeUp key={c.title}>
            <article className="grid lg:grid-cols-12 gap-12 items-start">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">
                  {c.sector} · Mandate {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-navy mt-4 mb-6 leading-[1.1]">
                  {c.title}
                </h2>
                <GoldRule className="mb-6" />
                <div className="space-y-5 text-slate leading-relaxed">
                  <div>
                    <Eyebrow>Challenge</Eyebrow>
                    <p className="mt-2">{c.challenge}</p>
                  </div>
                  <div>
                    <Eyebrow>Solution</Eyebrow>
                    <p className="mt-2">{c.solution}</p>
                  </div>
                  <div>
                    <Eyebrow>Outcome</Eyebrow>
                    <p className="mt-2">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </SiteLayout>
  );
}
