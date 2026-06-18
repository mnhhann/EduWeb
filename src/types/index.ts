export type { Course, Lesson, SubjectMaterial, SubjectSlug } from "./course";
export type { User } from "./user";

export type ApiResponse<T> = {
  data: T;
  message?: string;
};
