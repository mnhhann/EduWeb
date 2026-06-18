import Image from "next/image";
import Link from "next/link";
import type { EnrolledCourse } from "@/lib/enrollments";

type EnrolledCourseCardProps = {
  course: EnrolledCourse;
};

export function EnrolledCourseCard({ course }: EnrolledCourseCardProps) {
  const continueHref = `/my-courses/${course.id}/lessons/1`;

  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      {course.thumbnailUrl && (
        <div className="relative aspect-[4/3] w-full bg-zinc-100">
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900">{course.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{course.description}</p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Tiến độ học tập</span>
            <span className="font-medium text-blue-700">{course.progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            {course.completedLessons}/{course.totalLessons} bài học · Cập nhật{" "}
            {new Date(course.lastStudiedAt).toLocaleDateString("vi-VN")}
          </p>
        </div>

        <Link
          href={continueHref}
          className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-blue-800 py-2 text-sm font-medium text-white transition hover:bg-blue-900"
        >
          Tiếp tục học
        </Link>
      </div>
    </article>
  );
}
