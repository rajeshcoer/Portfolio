import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8 lg:py-24">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">About</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Building thoughtful digital products with a calm, product-minded workflow.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {portfolioData.bio} I blend technical depth with design sensibility to create modern experiences that are easy to grow.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">What I focus on</h2>
          <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">
            <li>• Clean architecture for long-term maintainability</li>
            <li>• Performance-minded frontend development</li>
            <li>• Strong accessibility and polished interaction patterns</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-300 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900/70">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Core toolkit</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {portfolioData.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {skill}
              </span>
            ))}
          </div>
          <Link href="/contact" className="mt-6 inline-flex text-sm font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200">
            Start a conversation →
          </Link>
        </div>
      </section>
    </div>
  );
}
