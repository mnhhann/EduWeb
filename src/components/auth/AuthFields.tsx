"use client";

import { useState } from "react";

type FloatingInputProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
};

export function FloatingInput({
  id,
  label,
  type = "text",
  autoComplete,
  value,
  onChange,
}: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full rounded-md border border-zinc-300 bg-white px-3 pb-2.5 pt-5 text-sm text-zinc-900 outline-none transition focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-4 origin-left text-sm text-zinc-500 transition-all peer-focus:top-1.5 peer-focus:scale-[0.85] peer-focus:text-blue-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:scale-[0.85]"
      >
        {label}
      </label>
    </div>
  );
}

type PasswordFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
};

export function PasswordField({
  id,
  label,
  value,
  onChange,
  autoComplete = "current-password",
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full rounded-md border border-zinc-300 bg-white px-3 pb-2.5 pt-5 pr-10 text-sm text-zinc-900 outline-none transition focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-4 origin-left text-sm text-zinc-500 transition-all peer-focus:top-1.5 peer-focus:scale-[0.85] peer-focus:text-blue-700 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:scale-[0.85]"
      >
        {label}
      </label>
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
        aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
      >
        {visible ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3l18 18" />
            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
            <path d="M9.9 5.1A10.7 10.7 0 0 1 12 5c5 0 9.3 5 10 7-.4 1-1.1 2.1-2 3.1M6.1 6.1C4.2 7.5 2.8 9.4 2 12c.7 2 5 7 10 7 1.1 0 2.1-.2 3.1-.6" />
          </svg>
        ) : (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}
