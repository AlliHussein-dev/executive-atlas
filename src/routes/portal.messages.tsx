import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortalShell, PortalHeading } from "@/components/portal/PortalShell";
import { messages as seedMessages, advisor } from "@/lib/portal-fixtures";

export const Route = createFileRoute("/portal/messages")({
  head: () => ({
    meta: [
      { title: "Private Advisory — Etihad Client Portal" },
      { name: "description", content: "Direct private communication with your dedicated advisor." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MessagesPage,
});

function MessagesPage() {
  const [thread, setThread] = useState(seedMessages);
  const [draft, setDraft] = useState("");

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setThread((t) => [
      ...t,
      {
        id: `m${Date.now()}`,
        from: "You",
        role: "Client",
        time: "Just now",
        body: text,
        self: true,
      },
    ]);
    setDraft("");
  };

  return (
    <PortalShell>
      <PortalHeading
        eyebrow="Private Advisory Channel"
        title={`Direct correspondence with ${advisor.name.split(" ")[0]}.`}
        intro="All messages are encrypted end-to-end. Replies typically arrive within the same business day."
      />

      <div className="bg-white border border-navy/10 flex flex-col h-[600px]">
        <div className="px-8 py-5 border-b border-navy/10 flex items-center gap-4">
          <img src={advisor.image} alt={advisor.name} className="w-12 h-12 object-cover rounded-full grayscale" />
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg text-navy">{advisor.name}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold">
              {advisor.title}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-emerald-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Online
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {thread.map((m) => (
            <div key={m.id} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xl ${m.self ? "items-end" : "items-start"} flex flex-col gap-2`}>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate font-semibold">
                  <span>{m.from}</span>
                  <span className="text-slate/50">{m.time}</span>
                </div>
                <div
                  className={`px-6 py-4 leading-relaxed text-sm ${
                    m.self
                      ? "bg-navy text-sand"
                      : "bg-ivory text-navy border border-navy/10"
                  }`}
                >
                  {m.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-navy/10 p-6 flex gap-4">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            maxLength={1000}
            placeholder="Compose a private message…"
            className="flex-1 bg-ivory border border-navy/10 px-5 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            onClick={send}
            className="px-8 py-3 bg-navy text-sand text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors"
          >
            Send
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <button className="bg-ivory border border-navy/10 p-6 text-left hover:border-gold transition-colors">
          <p className="text-gold font-display italic text-lg mb-2">+</p>
          <p className="font-display text-base text-navy">Request Meeting</p>
          <p className="text-slate text-xs mt-1">Schedule a private session</p>
        </button>
        <button className="bg-ivory border border-navy/10 p-6 text-left hover:border-gold transition-colors">
          <p className="text-gold font-display italic text-lg mb-2">+</p>
          <p className="font-display text-base text-navy">Add Service</p>
          <p className="text-slate text-xs mt-1">Engage additional advisory</p>
        </button>
        <button className="bg-ivory border border-navy/10 p-6 text-left hover:border-gold transition-colors">
          <p className="text-gold font-display italic text-lg mb-2">+</p>
          <p className="font-display text-base text-navy">Share Document</p>
          <p className="text-slate text-xs mt-1">Upload securely to advisor</p>
        </button>
      </div>
    </PortalShell>
  );
}
