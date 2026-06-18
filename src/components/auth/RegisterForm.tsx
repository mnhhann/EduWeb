"use client";

import Link from "next/link";
import { useState } from "react";
import { FloatingInput, PasswordField } from "./AuthFields";
import { AuthLogo } from "./AuthLogo";

export function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }

    setSuccess("Đăng ký thành công. Bạn có thể đăng nhập.");
  }

  return (
    <div className="w-full">
      <AuthLogo />

      <h1 className="mt-6 text-center text-lg font-bold tracking-wide text-blue-900">
        ĐĂNG KÝ
      </h1>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <FloatingInput
          id="fullName"
          label="Họ tên (*)"
          autoComplete="name"
          value={fullName}
          onChange={setFullName}
        />
        <FloatingInput
          id="email"
          label="Email (*)"
          type="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          label="Mật khẩu (*)"
          autoComplete="new-password"
          value={password}
          onChange={setPassword}
        />
        <PasswordField
          id="confirmPassword"
          label="Xác nhận mật khẩu (*)"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="text-sm text-green-600" role="status">
            {success}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-blue-800 py-2.5 text-sm font-medium text-white transition hover:bg-blue-900"
        >
          Đăng ký
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600">
        Đã có tài khoản?{" "}
        <Link href="/login" className="font-medium text-blue-700 hover:underline">
          Đăng nhập
        </Link>
      </p>
    </div>
  );
}
