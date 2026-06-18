export type User = {
  id: string;
  email: string;
  fullName: string;
  role: "student" | "teacher" | "admin";
  avatarUrl?: string;
};
