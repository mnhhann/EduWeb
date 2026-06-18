"use client";

import { AppLink } from "@/components/ui/AppLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuthSession } from "@/hooks/useAuthSession";
import { UserAccountLink } from "./UserAccountLink";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/courses", label: "Môn học" },
  { href: "/about", label: "Giới thiệu" },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated } = useAuthSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <AppLink href="/" className="text-xl font-bold text-blue-600">
          EduWeb
        </AppLink>
        <nav className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => {
            const isActive =
              mounted &&
              (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));

            return (
              <AppLink
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  isActive
                    ? "font-medium text-blue-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </AppLink>
            );
          })}
          {!isAuthenticated && (
            <AppLink
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              Đăng nhập
            </AppLink>
          )}
          <UserAccountLink />
        </nav>
      </div>
    </header>
  );
}
