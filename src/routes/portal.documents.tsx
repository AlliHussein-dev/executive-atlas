import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortalShell, PortalHeading } from "@/components/portal/PortalShell";
import { documents } from "@/lib/portal-fixtures";

export const Route = createFileRoute("/portal/documents")({
  head: () => ({
    meta: [
      { title: "Document Lounge — Etihad Client Portal" },
      { name: "description", content: "Secure document lounge." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DocumentsPage,
});

const categories = ["All", "Licensing", "Identity", "Corporate", "Regulatory", "Legal", "Premises"];

function DocumentsPage() {
  const [active, setActive] = useState("All");
  const [hover, setHover] = useState(false);

  const filtered = active === "All" ? documents : documents.filter((d) => d.category === active);

  return (
    <PortalShell>
      <PortalHeading
        eyebrow="Secure Document Lounge"
        title="Your documents, encrypted."
        intro="Every file is stored within an encrypted vault. Drag, drop and review at your convenience — your advisor is notified upon every upload."
      />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setHover(true);
        }}
        onDragLeave={() => setHover(false)}
        onDrop={(e) => {
          e.preventDefault();
          setHover(false);
        }}
        className={`border-2 border-dashed p-12 text-center mb-10 transition-colors ${
          hover ? "border-gold bg-ivory" : "border-navy/20 bg-white"
        }`}
      >
        <div className="font-display text-2xl text-navy mb-3">Drop documents to upload</div>
        <p className="text-slate text-sm mb-6">
          Encrypted in transit and at rest · Maximum 25 MB per file
        </p>
        <button className="px-6 py-3 bg-navy text-sand text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors">
          Browse Files
        </button>
        <div className="flex items-center justify-center gap-2 mt-6 text-[10px] uppercase tracking-[0.25em] text-emerald-700 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          End-to-end encryption active
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold border transition-colors ${
              active === c
                ? "bg-navy text-sand border-navy"
                : "border-navy/20 text-navy hover:border-navy"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="bg-white border border-navy/10">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-navy/10 text-[10px] uppercase tracking-[0.2em] text-slate font-semibold">
          <div className="col-span-6">Document</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2 text-right">Date</div>
        </div>
        {filtered.map((d) => (
          <div
            key={d.id}
            className="grid grid-cols-12 px-6 py-5 border-b border-navy/5 last:border-0 items-center hover:bg-ivory transition-colors group"
          >
            <div className="col-span-6 flex items-center gap-4 min-w-0">
              <div className="w-10 h-12 bg-navy/5 border border-navy/10 flex items-center justify-center text-[9px] uppercase tracking-wider text-slate flex-shrink-0">
                PDF
              </div>
              <div className="min-w-0">
                <p className="font-display text-base text-navy truncate">{d.title}</p>
                <p className="text-xs text-slate mt-1">{d.size}</p>
              </div>
            </div>
            <div className="col-span-2 text-[11px] uppercase tracking-[0.2em] text-slate font-semibold">
              {d.category}
            </div>
            <div className="col-span-2">
              <span
                className={`inline-block px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-bold ${
                  d.status === "Active" || d.status === "Approved" || d.status === "Attested"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-navy/5 text-navy border border-navy/10"
                }`}
              >
                {d.status}
              </span>
            </div>
            <div className="col-span-2 text-right text-xs text-slate">{d.date}</div>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
