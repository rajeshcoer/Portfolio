const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const url = new URL(path, DEFAULT_BASE_URL);
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
