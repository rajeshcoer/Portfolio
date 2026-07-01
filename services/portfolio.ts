import { fetchJson } from "@/lib/api";
import type { PortfolioData } from "@/types/portfolio";

export async function getPortfolioData(): Promise<PortfolioData> {
  return fetchJson<PortfolioData>("/api/portfolio", {
    cache: "no-store",
  });
}
