"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type LogoutButtonProps = {
  variant?: "sidebar" | "header";
};

export function LogoutButton({ variant = "sidebar" }: LogoutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    setIsLoading(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  const className =
    variant === "header"
      ? "rounded-lg border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-70"
      : "w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 disabled:opacity-70";

  return (
    <button type="button" onClick={handleLogout} disabled={isLoading} className={className}>
      {isLoading ? "Đang đăng xuất..." : "Đăng xuất"}
    </button>
  );
}
