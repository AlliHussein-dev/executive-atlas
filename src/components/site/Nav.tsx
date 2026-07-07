import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/legacy", label: "Legacy" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/leadership", label: "Leadership" },
  { to: "/journey", label: "Journey" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand/90 backdrop-blur-md border-b border-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between gap-10">
        <Link to="/" className="font-display tracking-widest font-bold text-navy shrink-0">
          <span className="text-xl">ETIHAD</span>
          <span className="text-xl font-light opacity-60 italic ml-2">
            Consultancy
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-navy">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-1.5 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/portal"
            className="ml-4 px-6 py-3 border border-navy/30 hover:border-navy hover:bg-navy hover:text-sand transition-colors"
          >
            Client Portal
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M3 7h18M3 12h18M3 17h18"}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-sand border-t border-navy/5 px-6 sm:px-8 py-10 flex flex-col gap-6 text-[11px] uppercase tracking-[0.2em] font-medium">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-navy hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/portal"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block px-6 py-3.5 border border-navy/30 text-navy w-fit"
          >
            Client Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
