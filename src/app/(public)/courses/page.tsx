import { FilteredSubjectGrid } from "@/components/course";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900">Danh sách môn học</h1>
      <p className="mt-2 text-zinc-600">
        Lọc theo môn học và lớp để tìm tài liệu phù hợp.
      </p>
      <div className="mt-8">
        <FilteredSubjectGrid />
      </div>
    </div>
  );
}
