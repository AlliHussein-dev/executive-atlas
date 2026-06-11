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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="font-display tracking-widest font-bold text-navy">
          <span className="text-xl">ETIHAD</span>
          <span className="text-xl font-light opacity-60 italic ml-1.5">
            Consultancy
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.2em] font-medium text-navy">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/portal"
            className="px-5 py-2.5 border border-navy/30 hover:border-navy hover:bg-navy hover:text-sand transition-colors"
          >
            Private Portal
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
        <div className="lg:hidden bg-sand border-t border-navy/5 px-6 py-8 flex flex-col gap-5 text-[11px] uppercase tracking-[0.2em] font-medium">
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
            className="mt-2 inline-block px-5 py-3 border border-navy/30 text-navy w-fit"
          >
            Private Portal
          </Link>
        </div>
      )}
    </nav>
  );
}
