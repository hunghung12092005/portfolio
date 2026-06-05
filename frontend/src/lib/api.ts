function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function buildApiUrl(path: string) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (apiBaseUrl) {
    return `${trimTrailingSlash(apiBaseUrl)}${normalizedPath}`;
  }

  if (import.meta.env.DEV) {
    throw new Error("Thieu VITE_API_BASE_URL. Hay tao frontend/.env.local va tro toi backend, vi du http://localhost:8080");
  }

  return `/api${normalizedPath}`;
}

export async function parseJsonResponse<T>(response: Response): Promise<T | null> {
  const rawText = await response.text();

  if (!rawText) {
    return null;
  }

  return JSON.parse(rawText) as T;
}
