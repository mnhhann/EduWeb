"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LogoutButton } from "@/components/auth";

type SidebarProps = {
  variant: "student" | "admin";
};

const studentLinks = [
  { href: "/dashboard", label: "Tổng quan" },
  { href: "/my-courses", label: "Khóa học của tôi" },
  { href: "/profile", label: "Hồ sơ" },
];

const adminLinks = [
  { href: "/admin", label: "Tổng quan" },
  { href: "/admin/courses", label: "Khóa học" },
  { href: "/admin/users", label: "Người dùng" },
];

export function Sidebar({ variant }: SidebarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const links = variant === "admin" ? adminLinks : studentLinks;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-zinc-200 bg-white p-4">
      <Link href="/" className="mb-6 block text-lg font-bold text-blue-600">
        EduWeb
      </Link>
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const isActive =
            mounted &&
            (link.href === "/admin" || link.href === "/dashboard"
              ? pathname === link.href
              : pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm ${
                isActive
                  ? "bg-blue-50 font-medium text-blue-600"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-zinc-200 pt-4">
        <LogoutButton />
      </div>
    </aside>
  );
}
