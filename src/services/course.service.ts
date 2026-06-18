import type { Course } from "@/types";
import { api } from "./api";

export const courseService = {
  getAll: () => api.get<Course[]>("/courses"),
  getBySlug: (slug: string) => api.get<Course>(`/courses/${slug}`),
};
