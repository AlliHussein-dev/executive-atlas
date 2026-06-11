import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { client } from "@/lib/portal-fixtures";

const navItems = [
  { to: "/portal", label: "Overview", end: true },
  { to: "/portal/documents", label: "Document Lounge" },
  { to: "/portal/progress", label: "Business Progress" },
  { to: "/portal/billing", label: "Financial & Billing" },
  { to: "/portal/messages", label: "Private Advisory" },
] as const;

export function PortalShell({ children }: { children?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-sand text-navy">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="lg:w-80 lg:min-h-screen bg-navy text-sand flex flex-col">
          <div className="p-8 lg:p-10 border-b border-sand/10">
            <Link to="/" className="block">
              <div className="font-display tracking-widest font-bold">
                <span className="text-xl">ETIHAD</span>
                <span className="text-xl font-light opacity-60 italic ml-1.5">
                  Consultancy
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold mt-3 font-semibold">
                Private Client Portal
              </p>
            </Link>
          </div>

          <div className="p-8 lg:p-10 border-b border-sand/10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-sand/40 font-semibold mb-3">
              Client
            </p>
            <p className="font-display text-xl">{client.name}</p>
            <p className="text-sand/60 text-sm mt-1">{client.company}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold mt-3 font-semibold">
              {client.membership}
            </p>
          </div>

          <nav className="flex-1 p-6 lg:p-8 space-y-1">
            {navItems.map((item) => {
              const active = item.end
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-4 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors border-l-2 ${
                    active
                      ? "border-gold text-gold bg-white/5"
                      : "border-transparent text-sand/70 hover:text-sand hover:border-sand/30"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 lg:p-8 border-t border-sand/10">
            <Link
              to="/"
              className="text-[10px] uppercase tracking-[0.25em] text-sand/40 hover:text-gold transition-colors"
            >
              ← Return to Public Site
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
          <header className="bg-ivory border-b border-navy/10 px-6 lg:px-12 py-6 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate font-semibold">
              Secure Session · Encrypted Connection
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </div>
          </header>
          <div className="p-6 lg:p-12">{children ?? <Outlet />}</div>
        </main>
      </div>
    </div>
  );
}

export function PortalHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-navy leading-[1.05] mb-4">
        {title}
      </h1>
      {intro && <p className="text-slate leading-relaxed max-w-2xl">{intro}</p>}
    </div>
  );
}
