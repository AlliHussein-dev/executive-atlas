import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FadeUp, PageHero } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Corporate Gallery — Etihad Consultancy" },
      { name: "description", content: "An immersive visual documentary of the Etihad practice in Abu Dhabi." },
      { property: "og:title", content: "Corporate Gallery" },
      { property: "og:description", content: "Visual documentary of the Etihad practice." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: IMG.receptionLobby },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const tiles = [
  { src: IMG.receptionLobby, label: "Reception · Electra Street", span: "lg:col-span-2 lg:row-span-2", aspect: "aspect-square lg:aspect-auto" },
  { src: IMG.gallery1, label: "Private Meeting Suite", span: "", aspect: "aspect-[4/5]" },
  { src: IMG.boardroom, label: "Boardroom A", span: "", aspect: "aspect-[4/5]" },
  { src: IMG.facadeArchitecture, label: "Headquarters Exterior", span: "lg:col-span-2", aspect: "aspect-[16/9]" },
  { src: IMG.officeInterior, label: "Working Floor", span: "", aspect: "aspect-square" },
  { src: IMG.meetingTable, label: "Strategy Table", span: "", aspect: "aspect-square" },
  { src: IMG.privateConsult, label: "Advisory Consultation", span: "", aspect: "aspect-[4/5]" },
  { src: IMG.executiveTalk, label: "Executive Discussion", span: "", aspect: "aspect-[4/5]" },
  { src: IMG.gallery2, label: "Reception Lounge", span: "lg:col-span-2", aspect: "aspect-[16/9]" },
  { src: IMG.gallery3, label: "Corporate Event", span: "", aspect: "aspect-square" },
  { src: IMG.gallery4, label: "Team Collaboration", span: "", aspect: "aspect-square" },
  { src: IMG.gallery5, label: "Quarterly Briefing", span: "", aspect: "aspect-[4/5]" },
  { src: IMG.gallery6, label: "Partners' Dinner", span: "", aspect: "aspect-[4/5]" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Inside the Firm"
        title={<>A documentary in <span className="italic">restraint</span>.</>}
        intro="Architecture, atmosphere and people. A visual record of where the practice happens."
        image={IMG.receptionLobby}
      />

      <section className="py-20 px-4 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-2 lg:gap-3">
          {tiles.map((t, i) => (
            <FadeUp key={t.src + i} delay={(i % 4) * 0.05} className={t.span}>
              <figure className={`relative overflow-hidden group h-full ${t.aspect}`}>
                <img
                  src={t.src}
                  alt={t.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent text-sand text-[10px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.label}
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
