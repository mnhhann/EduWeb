"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { appHref } from "@/lib/utils";
import { isStaticDeploy } from "@/lib/navigation";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function AppLink({ href, children, className, ...rest }: AppLinkProps) {
  if (isStaticDeploy()) {
    return (
      <a href={appHref(href)} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
