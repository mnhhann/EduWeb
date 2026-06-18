"use client";

import Link from "next/link";
import { useAuthSession } from "@/hooks/useAuthSession";

type AuthRequiredLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function AuthRequiredLink({ href, className, children }: AuthRequiredLinkProps) {
  const { isAuthenticated } = useAuthSession();
  const targetHref = isAuthenticated ? href : "/login";

  return (
    <Link href={targetHref} className={className}>
      {children}
    </Link>
  );
}
