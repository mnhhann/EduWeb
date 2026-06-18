import { AUTH_COOKIE } from "./auth";

export const AUTH_STORAGE_KEY = "edu-auth";
export const AUTH_CHANGE_EVENT = "edu-auth-change";

function setAuthCookie(active: boolean) {
  if (typeof document === "undefined") return;
  if (active) {
    document.cookie = `${AUTH_COOKIE}=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
  } else {
    document.cookie = `${AUTH_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
  }
}

export function loginClient(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_STORAGE_KEY, "1");
  setAuthCookie(true);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function logoutClient(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_STORAGE_KEY);
  setAuthCookie(false);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function isLoggedInClient(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(AUTH_STORAGE_KEY) === "1";
}
