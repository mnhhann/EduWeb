import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has(AUTH_COOKIE);

  return NextResponse.json({ authenticated: isAuthenticated });
}
