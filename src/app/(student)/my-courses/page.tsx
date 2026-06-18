import { AppLink } from "@/components/ui/AppLink";
import { EnrolledCourseCard } from "@/components/course";
import { getDemoEnrollments } from "@/lib/enrollments";

export default function MyCoursesPage() {
  const enrollments = getDemoEnrollments();
  const averageProgress = Math.round(
    enrollments.reduce((sum, course) => sum + course.progress, 0) / enrollments.length
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900">Khóa học của tôi</h1>
      <p className="mt-2 text-zinc-600">Danh sách môn học bạn đã đăng ký và tiến độ học tập.</p>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Tổng khóa học</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">{enrollments.length}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Tiến độ trung bình</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">{averageProgress}%</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-zinc-500">Bài học hoàn thành</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">
            {enrollments.reduce((sum, course) => sum + course.completedLessons, 0)}
          </p>
        </div>
      </section>

      {enrollments.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-zinc-900">Đang học</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {enrollments.map((course) => (
              <EnrolledCourseCard key={course.enrollmentId} course={course} />
            ))}
          </div>
        </section>
      ) : (
        <section className="mt-8 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-zinc-600">Bạn chưa đăng ký khóa học nào.</p>
          <AppLink
            href="/courses"
            className="mt-4 inline-block rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900"
          >
            Khám phá môn học
          </AppLink>
        </section>
      )}
    </div>
  );
}
