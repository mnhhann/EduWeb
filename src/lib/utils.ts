export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function resolveBasePath(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (fromEnv) return fromEnv;

  if (typeof window !== "undefined" && window.location.hostname.endsWith("github.io")) {
    const [repo] = window.location.pathname.split("/").filter(Boolean);
    if (repo) return `/${repo}`;
  }

  return "";
}

export function publicAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = resolveBasePath();

  if (base && (normalized === base || normalized.startsWith(`${base}/`))) {
    return normalized;
  }

  return `${base}${normalized}`;
}

export function formatPrice(price: number) {
  if (price === 0) return "Miễn phí";
  return `${price.toLocaleString("vi-VN")} đ`;
}
