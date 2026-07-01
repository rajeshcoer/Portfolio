import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioProvider } from "@/components/providers/portfolio-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aaravshah.dev"),
  title: {
    default: "Aarav Shah | Modern Portfolio",
    template: "%s | Aarav Shah",
  },
  description:
    "A modern portfolio built with Next.js, TypeScript, and scalable app architecture for product-focused engineering.",
  keywords: ["portfolio", "nextjs", "frontend engineer", "full stack developer"],
  openGraph: {
    title: "Aarav Shah | Modern Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript, and scalable app architecture for product-focused engineering.",
    url: "https://aaravshah.dev",
    siteName: "Aarav Shah",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarav Shah | Modern Portfolio",
    description:
      "A modern portfolio built with Next.js, TypeScript, and scalable app architecture for product-focused engineering.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-950 text-slate-50">
        <PortfolioProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </PortfolioProvider>
      </body>
    </html>
  );
}
