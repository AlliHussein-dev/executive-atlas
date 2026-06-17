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

      <div className="bg-white border border-navy/10 flex flex-col h-[70vh] min-h-[480px] max-h-[640px]">
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-navy/10 flex items-center gap-3 sm:gap-4">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full grayscale flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="font-display text-base sm:text-lg text-navy truncate">{advisor.name}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate font-semibold truncate">
              {advisor.title}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-emerald-700 font-semibold flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Online
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-5 sm:space-y-6">
          {thread.map((m) => (
            <div key={m.id} className={`flex ${m.self ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] sm:max-w-xl ${m.self ? "items-end" : "items-start"} flex flex-col gap-2`}
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate font-semibold">
                  <span>{m.from}</span>
                  <span className="text-slate/50">{m.time}</span>
                </div>
                <div
                  className={`px-5 sm:px-6 py-3 sm:py-4 leading-relaxed text-sm ${
                    m.self ? "bg-navy text-sand" : "bg-ivory text-navy border border-navy/10"
                  }`}
                >
                  {m.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-navy/10 p-4 sm:p-6 flex gap-3 sm:gap-4">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            maxLength={1000}
            placeholder="Compose a message…"
            className="flex-1 min-w-0 bg-ivory border border-navy/10 px-4 sm:px-5 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button
            onClick={send}
            className="px-5 sm:px-8 py-3 bg-navy text-sand text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-gold transition-colors flex-shrink-0"
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
