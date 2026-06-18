type LessonPageProps = {
  params: Promise<{ courseId: string; lessonId: string }>;
};

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
