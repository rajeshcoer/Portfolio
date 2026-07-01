"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { getPortfolioData } from "@/services/portfolio";
import type { PortfolioData as PortfolioProfile } from "@/types/portfolio";

export function PortfolioView() {
  const [data, setData] = useState<PortfolioProfile>(portfolioData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadPortfolio() {
      try {
        setLoading(true);
        const response = await getPortfolioData();
        if (mounted) {
          setData(response);
          setError(null);
        }
      } catch {
        if (mounted) {
          setError("The latest portfolio data is temporarily unavailable.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    void loadPortfolio();

    return () => {
      mounted = false;
    };
  }, []);

  const featuredProjects = useMemo(() => data.featuredProjects.slice(0, 3), [data.featuredProjects]);

  return (
    <div className="space-y-24 py-16 lg:py-24">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-300">
            Available for select projects in 2026
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Portfolio / Developer</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {data.name} builds products that feel clear, fast, and memorable.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{data.bio}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              Explore projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            >
              Let&apos;s connect
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {data.highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-300 bg-slate-100 p-8 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-2xl font-semibold text-cyan-700 dark:bg-cyan-400/20 dark:text-cyan-300">
            {data.name
              .split(" ")
              .slice(0, 2)
              .map((value) => value[0])
              .join("")}
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Current focus</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{data.role}</h2>
            <p className="text-slate-600 dark:text-slate-300">Based in {data.location}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Selected work</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Featured projects</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-cyan-600 transition hover:text-cyan-700 dark:text-cyan-300 dark:hover:text-cyan-200">
            View all →
          </Link>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-300 bg-slate-100 p-6 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">Refreshing portfolio content...</div>
        ) : error ? (
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">{error}</div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-300 bg-slate-50 p-6 shadow-md shadow-slate-200/50 transition dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
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
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-slate-300 bg-slate-100 p-8 lg:grid-cols-[0.9fr_1.1fr] dark:border-white/10 dark:bg-white/5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Experience</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">A pragmatic approach to product engineering</h2>
        </div>
        <div className="space-y-4">
          {data.experience.map((item) => (
            <div key={`${item.title}-${item.company}`} className="rounded-2xl border border-slate-300 bg-white p-5 dark:border-white/10 dark:bg-slate-950/60">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
              <p className="mt-2 text-sm text-cyan-600 dark:text-cyan-300">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2">
                    <span className="text-cyan-600 dark:text-cyan-300">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
