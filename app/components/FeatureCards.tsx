"use client";

const pipeline = [
  {
    label: "Scraping",
    grad: "card-grad-1",
    icon: "🔍",
    title: "Lead Discovery",
    desc: "Automated web scraping to find and collect target companies, contacts, and decision-makers from multiple sources.",
  },
  {
    label: "Enrichment",
    grad: "card-grad-2",
    icon: "🧠",
    title: "AI Enrichment",
    desc: "Claude AI analyzes company websites, extracts key contacts, understands business context, and builds rich prospect profiles.",
  },
  {
    label: "Scoring",
    grad: "card-grad-3",
    icon: "📊",
    title: "Lead Scoring",
    desc: "Multi-factor scoring algorithm ranks leads by fit, intent signals, and conversion probability. Focus on what matters.",
  },
  {
    label: "Outreach",
    grad: "card-grad-4",
    icon: "✉️",
    title: "Smart Outreach",
    desc: "AI-generated personalized emails sent via Resend. Each message references the prospect's actual context and pain points.",
  },
  {
    label: "Follow-up",
    grad: "card-grad-5",
    icon: "🔄",
    title: "Auto Follow-up",
    desc: "Inngest-powered sequences with intelligent timing. Multi-touch cadence that adapts based on engagement signals.",
  },
  {
    label: "Replies",
    grad: "card-grad-6",
    icon: "💬",
    title: "Reply Handling",
    desc: "AI classifies responses (interested, not now, unsubscribe) and routes hot leads to the sales team automatically.",
  },
  {
    label: "Handoff",
    grad: "card-grad-7",
    icon: "🤝",
    title: "Sales Handoff",
    desc: "Hot leads trigger Telegram notifications with AI-generated summaries. Sales team gets context-rich briefs instantly.",
  },
];

export default function FeatureCards() {
  return (
    <div className="feature-cards">
      {pipeline.map((step) => (
        <div key={step.label} className="feature-card">
          <div className={`feature-card-bg ${step.grad}`} />
          <span className="feature-card-label">{step.label}</span>
          <div className="feature-card-icon">
            <span className="text-sm">{step.icon}</span>
          </div>
          <div className="feature-card-content">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#4ade80]/80 mb-1">
              {step.label}
            </p>
            <h4 className="text-[15px] font-semibold text-white mb-2">
              {step.title}
            </h4>
            <p className="text-[12px] leading-relaxed text-white/50">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
