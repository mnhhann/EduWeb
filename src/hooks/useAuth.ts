"use client";

import { useState } from "react";
import type { AuthUser } from "@/features/auth";

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (_email: string, _password: string) => {
    setIsLoading(true);
    try {
      // TODO: integrate with auth API
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => setUser(null);

  return { user, isLoading, login, logout, isAuthenticated: !!user };
}
