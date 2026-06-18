import { UserAccountLink } from "@/components/layout/UserAccountLink";
import { Sidebar } from "@/components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar variant="admin" />
      <div className="flex min-h-screen flex-1 flex-col">
        <div className="flex justify-end border-b border-zinc-200 bg-white px-6 py-3">
          <UserAccountLink />
        </div>
        <main className="flex-1 bg-zinc-50 p-6">{children}</main>
      </div>
    </div>
  );
}
