"use client";

import { AppLink } from "@/components/ui/AppLink";
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
    <AppLink href={targetHref} className={className}>
      {children}
    </AppLink>
  );
}
