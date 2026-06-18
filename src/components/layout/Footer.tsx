export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} EduWeb. Nền tảng giáo dục trực tuyến.
      </div>
    </footer>
  );
}
