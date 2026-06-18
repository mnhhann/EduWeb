"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FloatingInput, PasswordField } from "./AuthFields";
import { AuthLogo } from "./AuthLogo";

export function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setError(data.message ?? "Tên tài khoản hoặc mật khẩu không đúng.");
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Không thể đăng nhập. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <AuthLogo />

      <h1 className="mt-6 text-center text-lg font-bold tracking-wide text-blue-900">
        ĐĂNG NHẬP
      </h1>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <FloatingInput
          id="username"
          label="Tên tài khoản (*)"
          autoComplete="username"
          value={username}
          onChange={setUsername}
        />
        <PasswordField
          id="password"
          label="Mật khẩu (*)"
          value={password}
          onChange={setPassword}
        />

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 text-blue-700 focus:ring-blue-700"
            />
            Ghi nhớ tài khoản
          </label>
          <Link href="#" className="text-blue-700 hover:underline">
            Quên mật khẩu?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-blue-800 py-2.5 text-sm font-medium text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600">
        Chưa có tài khoản?{" "}
        <Link href="/register" className="font-medium text-blue-700 hover:underline">
          Đăng ký
        </Link>
      </p>
    </div>
  );
}
