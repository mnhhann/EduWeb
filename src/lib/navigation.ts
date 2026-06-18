import { appHref } from "./utils";

export function isStaticDeploy(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_BASE_PATH);
}

export function navigateApp(path: string): void {
  if (typeof window === "undefined") return;
  window.location.assign(appHref(path));
}
