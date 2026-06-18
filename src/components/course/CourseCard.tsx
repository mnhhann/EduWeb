"use client";

import Link from "next/link";
import { useAuthSession } from "@/hooks/useAuthSession";
import { PublicImage } from "@/components/ui/PublicImage";
import type { Course } from "@/types";

type CourseCardProps = {
  course: Course;
  priority?: boolean;
};

export function CourseCard({ course, priority = false }: CourseCardProps) {
  const { isAuthenticated } = useAuthSession();
  const href = isAuthenticated ? `/courses/${course.slug}` : "/login";

  return (
    <Link href={href} className="course-card">
      {course.thumbnailUrl && (
        <div className="course-thumbnail">
          <PublicImage
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            className="object-cover"
            priority={priority}
          />
        </div>
      )}
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-desc">{course.description}</p>
        <div className="course-footer">
          <span className="course-price">
            {course.price === 0 ? "Miễn phí" : `${course.price.toLocaleString("vi-VN")} đ`}
          </span>
          {course.price === 0 && <span className="course-badge">Free</span>}
        </div>
      </div>
    </Link>
  );
}
