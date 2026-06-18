import type { User } from "@/types";
import { DEMO_USERNAME } from "./auth";

export type UserProfile = User & {
  username: string;
  phone?: string;
  grade?: string;
  school?: string;
  joinedAt: string;
};

export const demoProfile: UserProfile = {
  id: "1",
  username: DEMO_USERNAME,
  fullName: "Mai Ngọc Hân",
  email: "mnh@eduweb.vn",
  role: "student",
  phone: "0901 234 567",
  grade: "Lớp 10",
  school: "Trường THPT EduWeb",
  joinedAt: "2025-09-01",
};

export function getDemoProfile(): UserProfile {
  return demoProfile;
}
