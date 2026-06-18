export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function publicAsset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatPrice(price: number) {
  if (price === 0) return "Miễn phí";
  return `${price.toLocaleString("vi-VN")} đ`;
}
