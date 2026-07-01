import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8 lg:py-24">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Let&apos;s shape a product experience that feels calm, modern, and conversion-ready.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Reach out for product design partnerships, full-stack delivery, or strategy reviews.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-300 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900/70">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Direct contact</h2>
          <div className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
            <p>Email: {portfolioData.email}</p>
            <p>Location: {portfolioData.location}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={portfolioData.githubUrl} className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
              GitHub
            </Link>
            <Link href={portfolioData.linkedinUrl} className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Availability</p>
          <p className="mt-4 leading-8">
            I’m currently open to a small number of engagements focused on product strategy, frontend architecture, and polished launch execution.
          </p>
        </div>
      </section>
    </div>
  );
}
