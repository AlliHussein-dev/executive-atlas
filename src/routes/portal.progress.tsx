import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, PortalHeading } from "@/components/portal/PortalShell";
import { progress, deadlines } from "@/lib/portal-fixtures";

export const Route = createFileRoute("/portal/progress")({
  head: () => ({
    meta: [
      { title: "Business Progress — Etihad Private Portal" },
      { name: "description", content: "Active applications, visa updates, renewals and deadlines." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  return (
    <PortalShell>
      <PortalHeading
        eyebrow="Business Progress"
        title="Active mandates."
        intro="A live overview of work in progress, residency status and forthcoming renewals."
      />

      <div className="space-y-6 mb-12">
        {progress.map((p) => (
          <div key={p.id} className="bg-white border border-navy/10 p-8">
            <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-xl text-navy">{p.title}</h3>
                <p className="text-slate text-sm mt-2">{p.note}</p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy bg-ivory border border-navy/10 px-3 py-1.5">
                {p.status}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-navy/10 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-gold"
                  style={{ width: `${p.pct}%`, height: "2px", top: "-1px" }}
                />
              </div>
              <span className="font-display text-lg text-navy w-12 text-right">{p.pct}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-navy text-sand p-8 lg:p-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-6">
          Forthcoming Deadlines
        </p>
        <ul className="divide-y divide-sand/10">
          {deadlines.map((d) => (
            <li key={d.label} className="flex items-center gap-6 py-4">
              <span className="font-display text-2xl text-gold w-20 flex-shrink-0">{d.date}</span>
              <span className="text-sand/80 text-sm">{d.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </PortalShell>
  );
}
