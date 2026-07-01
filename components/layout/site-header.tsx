"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavigation } from "@/data/portfolio";
import { usePortfolio } from "@/components/providers/portfolio-provider";

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme, mobileMenuOpen, setMobileMenuOpen } = usePortfolio();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-[0.24em] text-slate-900 uppercase transition-colors dark:text-white">
          Rajesh Kumar
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex dark:text-slate-300">
          {siteNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "transition hover:text-slate-900 dark:hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700 lg:hidden transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden dark:border-white/10 dark:bg-slate-950/95">
          <nav className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
            {siteNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isActive
                      ? "text-slate-900 dark:text-white"
                      : "transition hover:text-slate-900 dark:hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
