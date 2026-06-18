import type { SubjectMaterial } from "@/types";
import { allMaterials } from "./subjects";

export type EnrolledCourse = SubjectMaterial & {
  enrollmentId: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  lastStudiedAt: string;
};

function findMaterial(id: string): SubjectMaterial {
  const material = allMaterials.find((m) => m.id === id);
  if (!material) throw new Error(`Material not found: ${id}`);
  return material;
}

function toEnrolled(
  id: string,
  progress: number,
  completedLessons: number,
  totalLessons: number,
  lastStudiedAt: string
): EnrolledCourse {
  return {
    ...findMaterial(id),
    enrollmentId: `enroll-${id}`,
    progress,
    completedLessons,
    totalLessons,
    lastStudiedAt,
  };
}

export const demoEnrollments: EnrolledCourse[] = [
  toEnrolled("toan-10", 72, 18, 25, "2026-06-17"),
  toEnrolled("tv-10", 45, 9, 20, "2026-06-16"),
  toEnrolled("ta-10", 60, 12, 20, "2026-06-15"),
  toEnrolled("khtn-9", 30, 6, 20, "2026-06-14"),
];

export function getDemoEnrollments(): EnrolledCourse[] {
  return demoEnrollments;
}
