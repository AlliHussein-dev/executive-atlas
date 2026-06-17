import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, FadeUp, GoldRule } from "@/components/site/primitives";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Etihad Consultancy & Business Services LLC — Abu Dhabi" },
      {
        name: "description",
        content:
          "Building global business success in Abu Dhabi. Corporate formation, strategic advisory, licensing, immigration support and regulatory guidance.",
      },
      { property: "og:title", content: "Etihad Consultancy — Abu Dhabi" },
      {
        property: "og:description",
        content:
          "Corporate formation, advisory, licensing, immigration and regulatory guidance for ambitious investors.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.abuDhabiDusk },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <TrustStrip />
      <LegacyTeaser />
      <SignatureServices />
      <IndustriesStrip />
      <CaseStudyFeature />
      <LeadershipPreview />
      <JourneyTimeline />
      <GalleryTeaser />
      <ContactCta />
    </SiteLayout>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[680px] flex items-center overflow-hidden pt-20">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={IMG.abuDhabiDusk}
          alt="Abu Dhabi skyline at sunrise"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/70 to-sand/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-sand/40 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="block text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-6 italic">
            Established · Abu Dhabi
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-navy leading-[1.02] mb-8">
            Building Global <br />
            Business Success <br />
            in <span className="italic">Abu Dhabi</span>.
          </h1>
          <p className="text-lg text-slate leading-relaxed mb-10 max-w-xl">
            Providing corporate formation, strategic advisory, licensing,
            immigration support and regulatory guidance for ambitious investors
            and organisations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <Link
              to="/contact"
              className="px-8 py-5 bg-navy text-sand text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors"
            >
              Schedule Executive Consultation
            </Link>
            <Link
              to="/portal"
              className="px-8 py-5 border border-navy/30 text-navy text-[11px] uppercase tracking-[0.2em] font-semibold hover:border-navy hover:bg-navy hover:text-sand transition-all"
            >
              Enter Client Portal
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-navy/60">
          <span>Scroll</span>
          <div className="w-px h-12 bg-navy/30 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="bg-ivory border-y border-navy/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <p className="text-center text-[11px] uppercase tracking-[0.3em] text-slate mb-8">
          Trusted by entrepreneurs, family businesses, international investors and growing enterprises
        </p>
        <div className="flex flex-wrap justify-between items-center gap-x-10 gap-y-4 opacity-50">
          {[
            "Ministry of Economy",
            "ADGM Global Market",
            "Federal Tax Authority",
            "Dept. of Economic Development",
            "Abu Dhabi Chamber",
          ].map((n) => (
            <span key={n} className="font-display text-sm tracking-wide text-navy">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LegacyTeaser() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeUp>
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMG.facadeArchitecture} alt="Etihad Consultancy headquarters" className="w-full h-full object-cover grayscale" />
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="space-y-8">
            <Eyebrow>The Etihad Legacy</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-[1.05]">
              A legacy of discretion <br /> and <span className="italic">precision</span>.
            </h2>
            <GoldRule />
            <p className="text-slate leading-relaxed">
              From our offices on Electra Street, Etihad Consultancy has served
              as the bridge between international capital and Emirati opportunity.
              We do not simply facilitate business — we engineer institutional
              permanence for those who intend to remain.
            </p>
            <p className="text-slate leading-relaxed">
              Our partners bring more than two decades of experience in
              government relations, corporate law and strategic structuring,
              ensuring every regional presence we shape is built upon
              foundations of absolute compliance and quiet confidence.
            </p>
            <Link
              to="/legacy"
              className="inline-block text-[11px] uppercase tracking-[0.2em] font-bold border-b-2 border-gold text-navy pb-2 hover:text-gold transition-colors"
            >
              Read Our Heritage
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01",
    title: "Corporate Establishment",
    body: "Mainland incorporation, free-zone licensing and ownership restructuring for multi-national enterprises.",
  },
  {
    n: "02",
    title: "Immigration & Residency",
    body: "Investor and executive visas, Golden Visa processing and family residency for principals and dependants.",
  },
  {
    n: "03",
    title: "Regulatory Relations",
    body: "Direct liaison with federal authorities, PRO services and high-level government advocacy for complex licensing.",
  },
  {
    n: "04",
    title: "Legal Documentation",
    body: "Arabic translation, chamber registrations, corporate agreements and notarised attestations.",
  },
];

function SignatureServices() {
  return (
    <section className="bg-navy text-sand py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeUp>
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold mb-5 block">
                Signature Advisory
              </span>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-[1.05]">
                Specialised practices for the <span className="italic">global executive</span>.
              </h2>
            </div>
            <div className="hidden md:block h-px flex-1 mx-12 bg-sand/10" />
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand/10 border border-sand/10">
          {services.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.08}>
              <div className="bg-navy p-10 h-full hover:bg-white/[0.03] transition-colors group flex flex-col">
                <div className="text-gold text-2xl mb-8 italic font-display">{s.n}</div>
                <h3 className="font-display text-2xl mb-4">{s.title}</h3>
                <p className="text-sand/60 text-sm leading-relaxed mb-10 flex-1">
                  {s.body}
                </p>
                <Link
                  to="/services"
                  className="text-[10px] uppercase tracking-[0.25em] font-semibold flex items-center gap-3 text-sand"
                >
                  Explore Practice
                  <span className="w-8 h-px bg-gold group-hover:w-16 transition-all duration-500" />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const industries = [
  { name: "Construction & Engineering", img: IMG.construction },
  { name: "Technology", img: IMG.technology },
  { name: "Healthcare", img: IMG.healthcare },
  { name: "Real Estate", img: IMG.realEstate },
  { name: "Manufacturing", img: IMG.manufacturing },
  { name: "Hospitality", img: IMG.hospitality },
];

function IndustriesStrip() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
      <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Eyebrow>Industries</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 leading-[1.05]">
              Industries we <span className="italic">steward</span>.
            </h2>
          </div>
          <Link to="/industries" className="text-[11px] uppercase tracking-[0.2em] font-bold text-navy border-b border-gold pb-1.5 self-start md:self-end">
            View All Sectors
          </Link>
        </div>
      </FadeUp>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10">
        {industries.map((s, i) => (
          <FadeUp key={s.name} delay={i * 0.05}>
            <div className="relative aspect-[4/3] overflow-hidden group bg-sand">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
                  Sector
                </p>
                <h3 className="font-display text-2xl text-sand">{s.name}</h3>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function CaseStudyFeature() {
  return (
    <section className="py-28 lg:py-36 bg-ivory px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <FadeUp className="lg:col-span-7">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={IMG.boardroom} alt="Boardroom meeting" className="w-full h-full object-cover" />
          </div>
        </FadeUp>
        <FadeUp delay={0.15} className="lg:col-span-5">
          <Eyebrow>Executive Case Study</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 mb-6 leading-[1.05]">
            International engineering group enters the UAE.
          </h2>
          <GoldRule className="mb-6" />
          <div className="space-y-5 text-slate leading-relaxed mb-10">
            <p>
              <span className="font-semibold text-navy">Challenge.</span> A
              European engineering conglomerate required entry into the Emirates
              with complex regulatory exposures and a 12-week mandate.
            </p>
            <p>
              <span className="font-semibold text-navy">Solution.</span> Etihad
              managed licensing strategy, government coordination, ministry
              documentation and concurrent executive residency.
            </p>
            <p>
              <span className="font-semibold text-navy">Outcome.</span>
              Successful establishment, operational launch and onboarding of
              twenty-three executives within the original mandate.
            </p>
          </div>
          <Link to="/case-studies" className="text-[11px] uppercase tracking-[0.2em] font-bold flex items-center gap-4 group text-navy">
            Read Case Insight
            <span className="w-10 h-px bg-navy group-hover:w-16 transition-all duration-500" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

const leaders = [
  {
    name: "Khalid Al Hashimi",
    title: "Senior Partner · Corporate Practice",
    img: IMG.portraitMale1,
  },
  {
    name: "Layla Al Mazrouei",
    title: "Partner · Regulatory & Government",
    img: IMG.portraitFemale2,
  },
  {
    name: "Omar Bin Saeed",
    title: "Director · Immigration Advisory",
    img: IMG.portraitMale2,
  },
];

function LeadershipPreview() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
      <FadeUp>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 leading-[1.05]">
            Expert advisors of <span className="italic">institutional standing</span>.
          </h2>
        </div>
      </FadeUp>
      <div className="grid md:grid-cols-3 gap-10">
        {leaders.map((l, i) => (
          <FadeUp key={l.name} delay={i * 0.08}>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img src={l.img} alt={l.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="border-t border-navy/10 pt-5">
                <h3 className="font-display text-2xl text-navy">{l.name}</h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold mt-2">
                  {l.title}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to="/leadership" className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-gold pb-1.5 text-navy">
          Meet the Practice
        </Link>
      </div>
    </section>
  );
}

const steps = [
  { n: "I", title: "Private Consultation", note: "Confidential discovery" },
  { n: "II", title: "Strategic Planning", note: "Bespoke structuring" },
  { n: "III", title: "Documentation", note: "Drafting & translation" },
  { n: "IV", title: "Government Coordination", note: "Direct liaison" },
  { n: "V", title: "Business Activation", note: "Licensing complete" },
  { n: "VI", title: "Continuous Support", note: "Long-term partnership" },
];

function JourneyTimeline() {
  return (
    <section className="py-28 lg:py-36 bg-ivory px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Eyebrow>The Client Journey</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 leading-[1.05]">
              The path to <span className="italic">sovereignty</span>.
            </h2>
          </div>
        </FadeUp>

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6">
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-navy/15" />
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.08}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full font-display text-xl mb-6 ring-8 ring-ivory ${
                    i === 0
                      ? "bg-navy text-gold"
                      : i === steps.length - 1
                      ? "bg-gold text-navy"
                      : "bg-sand border border-navy/15 text-navy"
                  }`}
                >
                  {s.n}
                </div>
                <h4 className="font-display text-lg text-navy mb-2">{s.title}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate">{s.note}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/journey" className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-gold pb-1.5 text-navy">
            Explore the Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}

const galleryImgs = [IMG.gallery1, IMG.gallery2, IMG.gallery3, IMG.gallery4];

function GalleryTeaser() {
  return (
    <section className="py-28 lg:py-36 px-6 lg:px-10 max-w-7xl mx-auto">
      <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <Eyebrow>Inside the Firm</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-5 leading-[1.05]">
              A documentary in <span className="italic">restraint</span>.
            </h2>
          </div>
          <Link to="/gallery" className="text-[11px] uppercase tracking-[0.2em] font-bold border-b border-gold pb-1.5 text-navy self-start md:self-end">
            View Full Gallery
          </Link>
        </div>
      </FadeUp>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {galleryImgs.map((src, i) => (
          <FadeUp key={src} delay={i * 0.05}>
            <div className={`overflow-hidden ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="bg-navy py-28 lg:py-36 text-sand px-6 lg:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <Eyebrow>Begin your business journey</Eyebrow>
        <h2 className="font-display text-5xl md:text-6xl mt-6 mb-12 italic">
          Inaugurate your presence.
        </h2>
        <p className="text-sand/70 leading-relaxed mb-12 max-w-xl mx-auto">
          Our partners are available for private consultations at our Abu Dhabi
          office or via secure digital channels.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link to="/contact" className="px-10 py-5 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-sand transition-colors">
            Schedule Executive Consultation
          </Link>
          <Link to="/portal" className="px-10 py-5 border border-sand/30 text-sand text-[11px] uppercase tracking-[0.2em] font-bold hover:border-sand hover:bg-sand hover:text-navy transition-all">
            Enter Client Portal
          </Link>
        </div>
      </div>
    </section>
  );
}
