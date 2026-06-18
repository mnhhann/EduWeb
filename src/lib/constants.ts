export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001/api";

export const APP_NAME = "EduWeb";

export const ROUTES = {
  home: "/",
  courses: "/courses",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  myCourses: "/my-courses",
  profile: "/profile",
  admin: "/admin",
} as const;
