type GraduationCapIconProps = {
  className?: string;
};

export function GraduationCapIcon({ className }: GraduationCapIconProps) {
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
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

export function AuthLogo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-sm">
        <GraduationCapIcon className="h-6 w-6" />
      </div>
      <span className="text-3xl font-bold tracking-tight">
        <span className="text-blue-600">Edu</span>
        <span className="text-blue-900">Web</span>
      </span>
    </div>
  );
}
