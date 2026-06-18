"use client";

import { AppLink } from "@/components/ui/AppLink";
import { useEffect, useState } from "react";
import { useAuthSession } from "@/hooks/useAuthSession";

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export function UserAccountLink() {
  const { isAuthenticated, isLoading } = useAuthSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return (
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50" />
    );
  }

  const href = isAuthenticated ? "/profile" : "/login";

  return (
    <AppLink
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
      aria-label="Tài khoản"
      title="Tài khoản"
    >
      <UserIcon className="h-5 w-5" />
    </AppLink>
  );
}
