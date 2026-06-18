export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number) {
  if (price === 0) return "Miễn phí";
  return `${price.toLocaleString("vi-VN")} đ`;
}
