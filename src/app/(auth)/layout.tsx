export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#e8f0f6] px-4">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9daf0] via-[#dce8f4] to-[#c8e6df]" />
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#5b8fd4]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#4fa89a]/18 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7eb0e3]/15 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-xl border border-white/70 bg-white px-10 py-12 shadow-[0_20px_50px_-12px_rgba(30,64,115,0.18)]">
        {children}
      </div>
    </div>
  );
}
