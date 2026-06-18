import { AppLink } from "@/components/ui/AppLink";
import type { Lesson } from "@/types";

type LessonItemProps = {
  courseId: string;
  lesson: Lesson;
};

export function LessonItem({ courseId, lesson }: LessonItemProps) {
  return (
    <AppLink
      href={`/my-courses/${courseId}/lessons/${lesson.id}`}
      className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-4 py-3 hover:bg-zinc-50"
    >
      <span className="text-sm font-medium text-zinc-900">{lesson.title}</span>
      <span className="text-xs text-zinc-500">{lesson.duration} phút</span>
    </AppLink>
  );
}
