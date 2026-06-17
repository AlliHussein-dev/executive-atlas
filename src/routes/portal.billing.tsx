import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, PortalHeading } from "@/components/portal/PortalShell";
import { invoices } from "@/lib/portal-fixtures";

export const Route = createFileRoute("/portal/billing")({
  head: () => ({
    meta: [
      { title: "Financial & Billing — Etihad Client Portal" },
      { name: "description", content: "Service invoices, government fees and payment records." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BillingPage,
});

function BillingPage() {
  const outstanding = invoices
    .filter((i) => i.status === "Outstanding")
    .reduce((sum, i) => sum + parseFloat(i.amount.replace(/[^\d.]/g, "")), 0);

  return (
    <PortalShell>
      <PortalHeading
        eyebrow="Financial & Billing Centre"
        title="Account summary."
        intro="Service invoices, government fee disbursements and payment records — all in one secure ledger."
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-ivory border border-navy/10 p-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate font-semibold mb-2">
            Outstanding
          </p>
          <p className="font-display text-4xl text-navy">AED {outstanding.toLocaleString()}</p>
          <p className="text-slate text-xs mt-2">1 invoice pending</p>
        </div>
        <div className="bg-ivory border border-navy/10 p-8">
          <p className="text-[10px] uppercase tracking-[0.25em] text-slate font-semibold mb-2">
            Year to Date
          </p>
          <p className="font-display text-4xl text-navy">AED 80,150</p>
          <p className="text-slate text-xs mt-2">Across 4 invoices</p>
        </div>
        <div className="bg-navy text-sand p-8 flex flex-col justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-4">
            Settle Balance
          </p>
          <p className="text-sand/70 text-sm mb-4">
            Complete your outstanding payment via secure encrypted channel.
          </p>
          <button className="w-full py-3 bg-gold text-navy text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-sand transition-colors">
            Complete Secure Payment
          </button>
        </div>
      </div>

      <div className="bg-white border border-navy/10">
        <div className="grid grid-cols-12 px-6 py-4 border-b border-navy/10 text-[10px] uppercase tracking-[0.2em] text-slate font-semibold">
          <div className="col-span-3">Invoice</div>
          <div className="col-span-5">Description</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-right">Amount</div>
        </div>
        {invoices.map((inv) => (
          <div
            key={inv.id}
            className="grid grid-cols-12 px-6 py-5 border-b border-navy/5 last:border-0 items-center hover:bg-ivory transition-colors"
          >
            <div className="col-span-3 font-display text-base text-navy">{inv.id}</div>
            <div className="col-span-5 text-slate text-sm">{inv.description}</div>
            <div className="col-span-2 text-xs text-slate">{inv.date}</div>
            <div className="col-span-1">
              <span
                className={`inline-block px-2 py-1 text-[9px] uppercase tracking-[0.2em] font-bold ${
                  inv.status === "Paid"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-800 border border-amber-200"
                }`}
              >
                {inv.status}
              </span>
            </div>
            <div className="col-span-1 text-right font-display text-base text-navy">
              {inv.amount.replace("AED ", "")}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] uppercase tracking-[0.25em] text-slate font-semibold mt-6 text-center">
        Downloadable receipts available for all paid invoices
      </p>
    </PortalShell>
  );
}
