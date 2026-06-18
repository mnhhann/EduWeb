"use client";

import { useEffect, useState } from "react";
import { AUTH_CHANGE_EVENT, isLoggedInClient } from "@/lib/auth-session";

export function useAuthSession() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sync = () => {
      setIsAuthenticated(isLoggedInClient());
      setIsLoading(false);
    };

    sync();
    window.addEventListener(AUTH_CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { isAuthenticated, isLoading };
}
