import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Rajesh Kumar",
  role: "Full-stack developer crafting delightful digital products",
  location: "Bengaluru, India",
  bio:
    "I design and build fast, accessible experiences for startups and modern product teams. My focus is on clean architecture, performance, and thoughtful UI systems.",
  email: "rajesh.coer@gmail.com",
  githubUrl: "https://github.com/rajeshcoer",
  linkedinUrl: "https://www.linkedin.com/in/rajesh-k-27a73268/",
  skills: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "UI Systems"],
  highlights: [
    "8+ years of product engineering",
    "Design systems and scalable frontends",
    "Strong focus on performance and UX",
  ],
  featuredProjects: [
    {
      title: "Northstar Analytics",
      summary:
        "A data-rich operations workspace for growth teams with realtime dashboards and AI-assisted insights.",
      stack: ["Next.js", "TypeScript", "Postgres"],
      href: "/projects",
      status: "Live",
    },
    {
      title: "Studio North",
      summary:
        "A premium content platform for creators, including seamless publishing flows and secure media delivery.",
      stack: ["React", "Node.js", "Tailwind", "Supabase"],
      href: "/projects",
      status: "Case Study",
    },
    {
      title: "Orbit Commerce",
      summary:
        "A conversion-focused storefront rebuilt with modular architecture and a resilient checkout experience.",
      stack: ["Next.js", "Stripe", "Vercel", "Analytics"],
      href: "/projects",
      status: "In Progress",
    },
  ],
  experience: [
    {
      title: "Senior Frontend Engineer",
      company: "Northstar Labs",
      period: "2022 — Present",
      achievements: [
        "Led the migration of a legacy admin experience to a modular Next.js architecture.",
        "Improved LCP by 42% through code splitting and refined rendering strategies.",
      ],
    },
    {
      title: "Product Engineer",
      company: "Studio North",
      period: "2019 — 2022",
      achievements: [
        "Built design-system-driven UI components for rapid launch across multiple product surfaces.",
        "Introduced centralized API fetching patterns for consistent loading and error states.",
      ],
    },
  ],
};

export const siteNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
