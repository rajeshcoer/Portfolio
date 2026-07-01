import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 transition-colors dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8 dark:text-slate-400">
        <p>© 2026 Rajesh Kumar. Built with Next.js and TypeScript.</p>
        <div className="flex gap-4">
          <Link href="/about" className="transition hover:text-slate-900 dark:hover:text-white">
            About
          </Link>
          <Link href="/projects" className="transition hover:text-slate-900 dark:hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900 dark:hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
