import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { client } from "@/lib/portal-fixtures";

const navItems: Array<{
  to: "/portal" | "/portal/documents" | "/portal/progress" | "/portal/billing" | "/portal/messages";
  label: string;
  end?: boolean;
}> = [
  { to: "/portal", label: "Overview", end: true },
  { to: "/portal/documents", label: "Documents" },
  { to: "/portal/progress", label: "Progress" },
  { to: "/portal/billing", label: "Billing" },
  { to: "/portal/messages", label: "Advisory" },
];

export function PortalShell({ children }: { children?: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-sand text-navy">
      {/* Mobile / tablet top bar (< lg) */}
      <div className="lg:hidden bg-navy text-sand">
        <div className="px-5 sm:px-8 py-5 flex items-center justify-between border-b border-sand/10">
          <Link to="/" className="block">
            <div className="font-display tracking-widest font-bold leading-none">
              <span className="text-base">ETIHAD</span>
              <span className="text-base font-light opacity-60 italic ml-1.5">Consultancy</span>
            </div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-gold mt-2 font-semibold">
              Client Portal
            </p>
          </Link>
          <div className="text-right">
            <p className="font-display text-sm leading-tight">{client.shortName}</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-gold mt-1 font-semibold">
              {client.membership}
            </p>
          </div>
        </div>
        <nav className="flex overflow-x-auto no-scrollbar border-b border-sand/10">
          {navItems.map((item) => {
            const active = item.end ? pathname === item.to : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex-shrink-0 px-5 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold border-b-2 transition-colors ${
                  active
                    ? "border-gold text-gold"
                    : "border-transparent text-sand/70 hover:text-sand"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row lg:min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:w-72 xl:w-80 lg:min-h-screen bg-navy text-sand flex-col">
          <div className="px-10 xl:px-12 py-10 border-b border-sand/10">
            <Link to="/" className="block">
              <div className="font-display tracking-widest font-bold">
                <span className="text-xl">ETIHAD</span>
                <span className="text-xl font-light opacity-60 italic ml-2">Consultancy</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold mt-4 font-semibold">
                Client Portal
              </p>
            </Link>
          </div>

          <div className="px-10 xl:px-12 py-10 border-b border-sand/10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-sand/40 font-semibold mb-4">
              Client
            </p>
            <p className="font-display text-xl leading-tight">{client.name}</p>
            <p className="text-sand/60 text-sm mt-2">{client.company}</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold mt-4 font-semibold">
              {client.membership}
            </p>
          </div>

          <nav className="flex-1 px-6 xl:px-8 py-8 space-y-2">
            {navItems.map((item) => {
              const active = item.end ? pathname === item.to : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-5 py-3.5 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors border-l-2 ${
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

          <div className="px-10 xl:px-12 py-8 border-t border-sand/10">
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
          <header className="bg-ivory border-b border-navy/10 px-6 sm:px-10 lg:px-16 py-5 lg:py-6 flex items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate font-semibold truncate">
              Secure Session · Encrypted
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </div>
          </header>
          <div className="px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">
            {children ?? <Outlet />}
          </div>
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
    <div className="mb-12 sm:mb-14 lg:mb-16">
      <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
        {eyebrow}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy leading-[1.05] mb-4">
        {title}
      </h1>
      {intro && (
        <p className="text-slate leading-relaxed max-w-2xl text-sm sm:text-base">{intro}</p>
      )}
    </div>
  );
}
