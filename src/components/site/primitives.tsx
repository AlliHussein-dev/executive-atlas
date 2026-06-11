import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-semibold">
      {children}
    </span>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-20 bg-gold ${className}`} />;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-navy leading-[1.05] mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-slate leading-relaxed text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative pt-32 pb-20 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <div className="mb-6">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-navy leading-[1.05] mb-8">
            {title}
          </h1>
          <GoldRule className="mb-8" />
          <p className="text-slate text-lg leading-relaxed max-w-xl">{intro}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
