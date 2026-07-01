import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white">The page you&apos;re looking for doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
        It may have moved, or this route may not have been built yet.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-300">
        Back home
      </Link>
    </div>
  );
}
