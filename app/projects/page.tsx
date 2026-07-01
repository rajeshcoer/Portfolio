import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:px-8 lg:py-24">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Projects</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          A selection of product work that balanced speed, clarity, and scale.
        </h1>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {portfolioData.featuredProjects.map((project) => (
          <article key={project.title} className="rounded-3xl border border-slate-300 bg-slate-50 p-6 shadow-md shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                {project.status}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
        <p>
          Every engagement is shaped around real product outcomes, measured through growth, usability, and reliability.
        </p>
        <Link href="/contact" className="mt-4 inline-flex text-sm font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200">
          Ask about a custom build →
        </Link>
      </div>
    </div>
  );
}
