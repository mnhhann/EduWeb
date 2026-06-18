"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserAccountLink } from "./UserAccountLink";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/courses", label: "Môn học" },
  { href: "/about", label: "Giới thiệu" },
];

export function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data: { authenticated?: boolean }) => {
        setIsAuthenticated(!!data.authenticated);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          EduWeb
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => {
            const isActive =
              mounted &&
              (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${
                  isActive
                    ? "font-medium text-blue-600"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {!isAuthenticated && (
            <Link
              href="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              Đăng nhập
            </Link>
          )}
          <UserAccountLink />
        </nav>
      </div>
    </header>
  );
}
