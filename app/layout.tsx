import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioProvider } from "@/components/providers/portfolio-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rajesh Kumar | Full-Stack Developer",
    template: "%s | Rajesh Kumar",
  },
  description:
    "Full-stack developer building fast, accessible, product-focused web experiences with modern frontend architecture and scalable engineering practices.",
  keywords: ["portfolio", "nextjs", "frontend engineer", "full stack developer", "rajesh kumar"],
  openGraph: {
    title: "Rajesh Kumar | Full-Stack Developer",
    description:
      "Full-stack developer building fast, accessible, product-focused web experiences with modern frontend architecture and scalable engineering practices.",
    url: siteUrl,
    siteName: "Rajesh Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Kumar | Full-Stack Developer",
    description:
      "Full-stack developer building fast, accessible, product-focused web experiences with modern frontend architecture and scalable engineering practices.",
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
