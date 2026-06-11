import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalShell, PortalHeading } from "@/components/portal/PortalShell";
import { client, advisor, upcomingMeetings, deadlines } from "@/lib/portal-fixtures";

export const Route = createFileRoute("/portal/")({
  head: () => ({
    meta: [
      { title: "Private Client Portal — Etihad Consultancy" },
      { name: "description", content: "Private executive workspace for Etihad clients." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PortalOverview,
});

function PortalOverview() {
  return (
    <PortalShell>
      <PortalHeading
        eyebrow={`Welcome back · ${new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })}`}
        title={`Good morning, ${client.shortName}.`}
        intro="Your dedicated advisor is ready to assist you. Below is a summary of your engagements and outstanding matters."
      />

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {/* Advisor card */}
        <div className="lg:col-span-2 bg-white border border-navy/10 p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Your Dedicated Advisor
          </p>
          <div className="flex items-start gap-6">
            <img
              src={advisor.image}
              alt={advisor.name}
              className="w-24 h-24 lg:w-32 lg:h-32 object-cover grayscale rounded-sm flex-shrink-0"
            />
            <div className="min-w-0">
              <h2 className="font-display text-2xl lg:text-3xl text-navy">{advisor.name}</h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate font-semibold mt-2">
                {advisor.title}
              </p>
              <div className="mt-5 space-y-1.5 text-sm text-slate">
                <p>{advisor.phone}</p>
                <p>{advisor.email}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/portal/messages"
                  className="px-5 py-2.5 bg-navy text-sand text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors"
                >
                  Send Message
                </Link>
                <button className="px-5 py-2.5 border border-navy/30 text-navy text-[10px] uppercase tracking-[0.2em] font-semibold hover:border-navy">
                  Request Meeting
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-navy text-sand p-8 lg:p-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Upcoming Meetings
          </p>
          <ul className="space-y-6">
            {upcomingMeetings.map((m) => (
              <li key={m.id} className="border-b border-sand/10 last:border-0 pb-5 last:pb-0">
                <p className="font-display text-lg leading-tight">{m.title}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold mt-2 font-semibold">
                  {m.date} · {m.time}
                </p>
                <p className="text-sand/60 text-xs mt-1.5">{m.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deadlines */}
      <div className="bg-white border border-navy/10 p-8 lg:p-10 mb-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
              Important Deadlines
            </p>
            <h2 className="font-display text-2xl text-navy">Coming up</h2>
          </div>
          <Link to="/portal/progress" className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-gold pb-1 text-navy">
            View Progress
          </Link>
        </div>
        <ul className="divide-y divide-navy/10">
          {deadlines.map((d) => (
            <li key={d.label} className="flex items-center gap-6 py-4">
              <span className="font-display text-2xl text-navy w-16 flex-shrink-0">{d.date}</span>
              <span className="text-slate text-sm">{d.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick links */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { to: "/portal/documents" as const, label: "Document Lounge", n: "01" },
          { to: "/portal/billing" as const, label: "Billing & Invoices", n: "02" },
          { to: "/portal/messages" as const, label: "Advisory Messages", n: "03" },
        ].map((q) => (
          <Link
            key={q.to}
            to={q.to}
            className="group bg-ivory border border-navy/10 p-8 hover:border-gold transition-colors"
          >
            <p className="text-gold font-display italic text-xl mb-4">{q.n}</p>
            <p className="font-display text-xl text-navy mb-4">{q.label}</p>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate flex items-center gap-3 font-semibold">
              Open
              <span className="w-6 h-px bg-navy group-hover:w-12 transition-all duration-500" />
            </span>
          </Link>
        ))}
      </div>
    </PortalShell>
  );
}
