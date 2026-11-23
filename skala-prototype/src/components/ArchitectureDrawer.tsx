"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Server,
  ShieldCheck,
  RefreshCw,
  Code2,
  Bot,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Locale } from "@/data/skalaData";

interface ArchitectureDrawerProps {
  open: boolean;
  initialTab?: "stack" | "api" | "aio" | "compliance";
  locale: Locale;
  onClose: () => void;
}

export function ArchitectureDrawer({
  open,
  initialTab = "stack",
  locale,
  onClose,
}: ArchitectureDrawerProps) {
  const [tab, setTab] = useState<"stack" | "api" | "aio" | "compliance">(initialTab);
  const [apiPreview, setApiPreview] = useState<string>("");
  const [llmsPreview, setLlmsPreview] = useState<string>("");
  const [syncLog, setSyncLog] = useState<string | null>(null);

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    if (!open) return;
    fetch("/api/v1/publications")
      .then((r) => r.json())
      .then((d) => setApiPreview(JSON.stringify(d, null, 2)))
      .catch(() => setApiPreview("Failed to load /api/v1/publications"));

    fetch("/llms.txt")
      .then((r) => r.text())
      .then((t) => setLlmsPreview(t))
      .catch(() => setLlmsPreview("Failed to load /llms.txt"));
  }, [open]);

  if (!open) return null;

  const runSyncSimulation = () => {
    const now = new Date().toISOString();
    setSyncLog(
      `[${now}] SKALA One Pull Sync OK • Master taxonomy unchanged • 8 canonical publications verified (zero duplicate IDs) • Meilisearch index refreshed in 14ms.`
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Proposal Technical Blueprint & Live API Inspector"
    >
      <div className="w-full max-w-2xl bg-white hc-surface h-full flex flex-col shadow-2xl border-l border-slate-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#083350] text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
              PT INOVASI DIGITAL TERDEPAN • SKALA-JK/032/RFT/2026
            </div>
            <h3 className="text-lg font-bold">
              {locale === "en"
                ? "Proposal Architecture & Live API Inspector"
                : "Inspektor Arsitektur Proposal & API Langsung"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inspector"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 gap-1 overflow-x-auto">
          {[
            { id: "stack", label: "Decoupled Stack", icon: Server },
            { id: "api", label: "KMC API & SKALA One", icon: Code2 },
            { id: "aio", label: "AIO & AI-Ready", icon: Bot },
            { id: "compliance", label: "Security, WCAG & UU PDP", icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id as typeof tab)}
                className={`min-h-[44px] px-3.5 py-2 text-xs font-bold inline-flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
                  active
                    ? "border-[#00797b] text-[#083350] bg-white"
                    : "border-transparent text-slate-600 hover:text-[#083350]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-sm">
          {tab === "stack" && (
            <div className="space-y-4">
              <p className="text-slate-600 hc-muted">
                Per Addendum No. 1 Section 26 (Bappenas & SKALA guidance against WordPress), this interactive mockup runs on the exact proposed frontend framework: <strong>Next.js (React / TypeScript)</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    layer: "Frontend (Active Here)",
                    stack: "Next.js 16 (React / TypeScript) Hybrid SSR & SSG",
                    note: "PageSpeed >= 85 • CWV Good • 4G <= 3s",
                  },
                  {
                    layer: "Headless CMS (Non-WordPress)",
                    stack: "Strapi CMS v5 / Directus (Node.js)",
                    note: "Draft -> Review -> Scheduled Publish • ID/EN status",
                  },
                  {
                    layer: "AI-Ready Database",
                    stack: "PostgreSQL 16 + pgvector",
                    note: "UU PDP AES-256 at rest • OpenAI embedding ready",
                  },
                  {
                    layer: "Full-Text & Faceted Search",
                    stack: "Meilisearch / OpenSearch",
                    note: "Sub-50ms typo-tolerant bilingual search",
                  },
                  {
                    layer: "Hosting & Edge",
                    stack: "Jakarta Cloud VPS + Cloudflare WAF/CDN",
                    note: "4+ vCPU, 8 GB RAM, 160 GB NVMe • 99.5% SLA",
                  },
                  {
                    layer: "Zero-Downtime Migration",
                    stack: "Parallel Staging + 1-to-1 HTTP 301 Map",
                    note: "Legacy WP stays 100% live Jan–Jun 2027",
                  },
                ].map((c) => (
                  <div
                    key={c.layer}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50 hc-surface"
                  >
                    <div className="text-[11px] font-bold uppercase text-[#00797b]">
                      {c.layer}
                    </div>
                    <div className="font-bold text-[#083350] hc-surface mt-0.5">
                      {c.stack}
                    </div>
                    <div className="text-xs text-slate-600 hc-muted mt-1">{c.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "api" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-teal-200 bg-[#e6f4f4] space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-bold text-[#005e60]">
                      SKALA One → Website (One-Way Pull Adapter)
                    </div>
                    <div className="text-xs text-slate-700">
                      Weekly taxonomy sync + Daily publication metadata sync (plus manual CMS trigger).
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={runSyncSimulation}
                    className="min-h-[40px] px-3 py-1.5 rounded-lg bg-[#083350] text-white text-xs font-bold inline-flex items-center gap-1.5 shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                    Simulate Sync
                  </button>
                </div>
                {syncLog && (
                  <div className="p-2.5 rounded-lg bg-slate-900 text-teal-300 font-mono text-[11px]">
                    {syncLog}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="/api/v1/publications"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-[#083350] hover:bg-slate-50"
                >
                  Open /api/v1/publications <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/api/v1/rss.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-[#083350] hover:bg-slate-50"
                >
                  Open /api/v1/rss.xml <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-1.5">
                  Live Response from <code>GET /api/v1/publications</code> (KMC Read-Only Feed):
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 text-emerald-300 text-[11px] overflow-x-auto max-h-72">
                  {apiPreview || "Loading live JSON..."}
                </pre>
              </div>
            </div>
          )}

          {tab === "aio" && (
            <div className="space-y-4">
              <p className="text-slate-600 hc-muted">
                Per Addendum No. 1 Sections 15 & 29, active LLM token costs are excluded from the launch ceiling, while the architecture is <strong>OpenAI-ready</strong> (<code>pgvector</code> + webhooks + structured JSON) and implements <strong>Artificial Intelligence Optimisation (AIO)</strong> via <code>/llms.txt</code> and Schema.org JSON-LD.
              </p>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold text-[#083350] hover:bg-slate-50"
              >
                Open Live /llms.txt <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <pre className="p-4 rounded-xl bg-slate-950 text-sky-300 text-[11px] overflow-x-auto max-h-72">
                {llmsPreview || "Loading /llms.txt..."}
              </pre>
            </div>
          )}

          {tab === "compliance" && (
            <div className="space-y-3">
              {[
                {
                  title: "Native WCAG 2.2 Level AA & DFAT Universal Design",
                  detail:
                    "Semantic HTML5 landmarks, skip-to-content, A-/A/A+ text scaling, High Contrast mode, 44px+ touch targets, full keyboard focus rings, screen-reader aria-live regions, and mandatory alt-text & media transcripts.",
                },
                {
                  title: "CIS Benchmark Level 1 & OWASP Top 10",
                  detail:
                    "TLS 1.3 in transit, AES-256 at rest, Argon2id salted password hashing, mandatory admin MFA, Cloudflare WAF/DDoS protection, and CREST/OSCP independent hybrid Grey-Box/Black-Box penetration testing before launch (D4) and annually (D7).",
                },
                {
                  title: "UU PDP No. 27/2022 & DFAT Privacy",
                  detail:
                    "Explicit verifiable consent capture on newsletter/contact forms, data minimisation, Jakarta primary hosting + encrypted off-site replication (RPO <= 12h, RTO <= 1h), and certified data deletion at Phase 7 (D8).",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 hc-surface flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00797b] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#083350] hc-surface">{row.title}</h4>
                    <p className="text-xs text-slate-600 hc-muted mt-1 leading-relaxed">
                      {row.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
