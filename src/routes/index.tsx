import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Check, Mail } from "lucide-react";
import agentPipeline from "@/assets/agent-pipeline.jpg";
import checkoutSystem from "@/assets/checkout-system.jpg";
import heroSystems from "@/assets/hero-systems.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gian Carlo Cariño — AI Systems Engineer" },
      {
        name: "description",
        content:
          "AI systems engineer building production-grade agents, automation, payments, integrations, and secure infrastructure.",
      },
      { property: "og:title", content: "Gian Carlo Cariño — AI Systems Engineer" },
      {
        property: "og:description",
        content: "Production AI systems, revenue automation, and infrastructure built to last.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gian Carlo Cariño",
          jobTitle: "AI Systems Engineer",
          email: "mailto:giancarinoit.eng@gmail.com",
          url: "/",
          sameAs: [
            "https://www.linkedin.com/in/engr-gian/",
            "https://v2.onlinejobs.ph/jobseekers/info/2085235",
          ],
          knowsAbout: [
            "AI agent systems",
            "Revenue automation",
            "Systems integration",
            "Cloud infrastructure",
            "Application security",
          ],
        }),
      },
    ],
  }),
});

const capabilities = [
  ["AI agent systems", "Multi-agent pipelines with validation gates."],
  ["Revenue operations", "CRM, workflows, funnels, and payment automation."],
  ["Integrations", "Reliable connectors across business-critical tools."],
  ["QA & security", "Cold QA, secret scans, auth, and injection testing."],
];

function Index() {
  return (
    <div className="portfolio-canvas relative min-h-screen overflow-hidden text-brand antialiased">
      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold" aria-label="Gian Carlo Cariño, home">
          GC<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-soft md:flex" aria-label="Primary navigation">
          <a className="transition-colors hover:text-brand" href="#work">Work</a>
          <a className="transition-colors hover:text-brand" href="#capabilities">Capabilities</a>
          <a className="transition-colors hover:text-brand" href="#about">About</a>
        </nav>
        <a className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5" href="mailto:giancarinoit.eng@gmail.com">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <section className="pb-16 pt-7 md:pt-14" aria-labelledby="intro-heading">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="reveal md:col-span-7">
              <p className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase text-accent">
                <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
                Available for select projects
              </p>
              <h1 id="intro-heading" className="max-w-[12ch] font-display text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
                Systems built to survive production.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-soft">
                I build AI agents, revenue automation, and infrastructure—then deploy, secure, and support it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                  View selected work <ArrowDownRight aria-hidden="true" className="size-4" />
                </a>
                <a href="#capabilities" className="glass-panel inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-glass-strong">
                  Capabilities
                </a>
              </div>
            </div>
            <div className="reveal md:col-span-5 [animation-delay:120ms]">
              <div className="glass-panel mx-auto max-w-sm overflow-hidden rounded-3xl p-2">
                <img src={heroSystems} alt="Layered glass system architecture representing production infrastructure" className="aspect-[4/5] w-full rounded-2xl object-cover" width={1024} height={1280} fetchPriority="high" />
              </div>
            </div>
          </div>

          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              ["9 years", "Enterprise IT"],
              ["897", "Commits in seven months"],
              ["60", "Repositories shipped"],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel rounded-2xl p-6">
                <dt className="font-display text-3xl font-bold">{value}</dt>
                <dd className="mt-1 text-sm text-brand-soft">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="py-16" aria-labelledby="work-heading">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase text-accent">Selected work</p>
              <h2 id="work-heading" className="font-display text-3xl font-bold sm:text-4xl">Work that had to work.</h2>
            </div>
            <span className="hidden text-sm text-brand-soft sm:block">Production, 2026</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="glass-panel group overflow-hidden rounded-3xl transition-transform hover:-translate-y-1">
              <img loading="lazy" src={checkoutSystem} alt="Abstract interface flow for secure checkout and instalment payments" className="aspect-[16/10] w-full object-cover" width={1088} height={720} />
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase text-accent">Payments · Live</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Retreat store rebuild</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-soft">Rebuilt a failing checkout with instalments, coupons, fallback architecture, and a 24-case QA plan.</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-brand-soft" aria-label="Technologies">
                  {['Stripe', 'Cloudflare', 'n8n'].map((item) => <li className="rounded-full border border-glass-border bg-glass px-3 py-1.5" key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
            <article className="glass-panel group overflow-hidden rounded-3xl transition-transform hover:-translate-y-1">
              <img loading="lazy" src={agentPipeline} alt="Abstract staged AI agent pipeline with security validation gates" className="aspect-[16/10] w-full object-cover" width={1088} height={720} />
              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase text-accent">AI systems · Own build</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">Production agent stack</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-soft">A 14-agent staged pipeline spanning framing, build, QA, hardening, documentation, and release.</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-brand-soft" aria-label="Features">
                  {['14 agents', 'Validation gates', 'Secret scans'].map((item) => <li className="rounded-full border border-glass-border bg-glass px-3 py-1.5" key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="capabilities" className="py-16" aria-labelledby="capabilities-heading">
          <div className="glass-panel-strong rounded-3xl p-7 sm:p-10 md:p-12">
            <p className="mb-2 text-xs font-semibold uppercase text-accent">Capabilities</p>
            <h2 id="capabilities-heading" className="font-display text-3xl font-bold sm:text-4xl">From build to production.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map(([title, detail]) => (
                <article key={title} className="rounded-2xl border border-glass-border bg-glass p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4" aria-hidden="true" /></span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{title}</h3>
                      <p className="mt-1 text-sm text-brand-soft">{detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16" aria-labelledby="about-heading">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-2 text-xs font-semibold uppercase text-accent">About</p>
              <h2 id="about-heading" className="font-display text-4xl font-bold sm:text-5xl">Enterprise discipline. Builder speed.</h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-brand-soft">Nine years supporting enterprise systems shaped how I build now: narrow scope, cold QA, secure release, clear runbook.</p>
              <a href="mailto:giancarinoit.eng@gmail.com" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-accent">
                <Mail className="size-4" aria-hidden="true" /> giancarinoit.eng@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-6">
        <div className="flex flex-col gap-5 border-t border-glass-border pt-8 text-sm text-brand-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Gian Carlo Cariño</p>
          <div className="flex flex-wrap gap-6">
            <a className="transition-colors hover:text-brand" href="https://www.linkedin.com/in/engr-gian/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="transition-colors hover:text-brand" href="https://v2.onlinejobs.ph/jobseekers/info/2085235" target="_blank" rel="noreferrer">OnlineJobs.ph</a>
            <a className="transition-colors hover:text-brand" href="mailto:giancarinoit.eng@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
