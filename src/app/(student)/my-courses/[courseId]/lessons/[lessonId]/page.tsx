import { demoEnrollments } from "@/lib/enrollments";

type LessonPageProps = {
  params: Promise<{ courseId: string; lessonId: string }>;
};

export function generateStaticParams() {
  return demoEnrollments.map((course) => ({
    courseId: course.id,
    lessonId: "1",
  }));
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { courseId, lessonId } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900">Bài học</h1>
      <p className="mt-2 text-zinc-600">
        Khóa học: {courseId} — Bài: {lessonId}
      </p>
    </div>
  );
}
