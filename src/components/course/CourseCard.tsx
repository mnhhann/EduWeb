"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuthSession } from "@/hooks/useAuthSession";
import type { Course } from "@/types";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const { isAuthenticated } = useAuthSession();
  const href = isAuthenticated ? `/courses/${course.slug}` : "/login";

  return (
    <Link href={href} className="course-card">
      {course.thumbnailUrl && (
        <div className="course-thumbnail">
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
