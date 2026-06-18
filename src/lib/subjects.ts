import type { SubjectMaterial, SubjectSlug } from "@/types";

export const subjectFilters: { value: "all" | SubjectSlug; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "tieng-viet", label: "Tiếng Việt" },
  { value: "tieng-anh", label: "Tiếng Anh" },
  { value: "toan", label: "Toán" },
  { value: "khoa-hoc-tu-nhien", label: "Khoa học tự nhiên" },
  { value: "lich-su", label: "Lịch sử" },
  { value: "dia-ly", label: "Địa lý" },
];

function gradeMaterial(
  id: string,
  subject: SubjectSlug,
  grade: number,
  thumbnailUrl: string
): SubjectMaterial {
  const subjectLabel = subjectFilters.find((f) => f.value === subject)?.label ?? subject;
  return {
    id,
    slug: `${subject}-lop-${grade}`,
    subject,
    grade,
    title: `${subjectLabel} lớp ${grade}`,
    description: `Tài liệu ${subjectLabel.toLowerCase()} dành cho học sinh lớp ${grade}.`,
    price: 0,
    thumbnailUrl,
  };
}

export const allMaterials: SubjectMaterial[] = [
  gradeMaterial("toan-1", "toan", 1, "/images/toan/toan-lop-1.jpg"),
  gradeMaterial("toan-2", "toan", 2, "/images/toan/toan-lop-2.jpeg"),
  gradeMaterial("toan-3", "toan", 3, "/images/toan/toan-lop-3.jpeg"),
  gradeMaterial("toan-4", "toan", 4, "/images/toan/toan-lop-4.jpeg"),
  gradeMaterial("toan-5", "toan", 5, "/images/toan/toan-lop-5.jpeg"),
  gradeMaterial("toan-10", "toan", 10, "/images/toan/toan-lop-10.png"),
  gradeMaterial("toan-11", "toan", 11, "/images/toan/toan-lop-11.png"),
  gradeMaterial("toan-12", "toan", 12, "/images/toan/toan-lop-12.jpeg"),

  gradeMaterial("tv-1", "tieng-viet", 1, "/images/tieng_viet/tv-1.jpeg"),
  gradeMaterial("tv-2", "tieng-viet", 2, "/images/tieng_viet/tv-2.jpeg"),
  gradeMaterial("tv-3", "tieng-viet", 3, "/images/tieng_viet/tv-3.jpeg"),
  gradeMaterial("tv-4", "tieng-viet", 4, "/images/tieng_viet/tv-4.jpeg"),
  gradeMaterial("tv-5", "tieng-viet", 5, "/images/tieng_viet/tv-5.jpeg"),
  gradeMaterial("tv-10", "tieng-viet", 10, "/images/tieng_viet/nv-10.jpeg"),
  gradeMaterial("tv-11", "tieng-viet", 11, "/images/tieng_viet/nv-11.jpeg"),
  gradeMaterial("tv-12", "tieng-viet", 12, "/images/tieng_viet/nv-12.jpeg"),

  gradeMaterial("ta-1", "tieng-anh", 1, "/images/tieng_anh/ta-1.jpeg"),
  gradeMaterial("ta-2", "tieng-anh", 2, "/images/tieng_anh/ta-2.jpeg"),
  gradeMaterial("ta-10", "tieng-anh", 10, "/images/tieng_anh/ta-10.png"),
  gradeMaterial("ta-12", "tieng-anh", 12, "/images/tieng_anh/ta-12.jpeg"),

  gradeMaterial("khtn-6", "khoa-hoc-tu-nhien", 6, "/images/khtn/khtn-6.jpg"),
  gradeMaterial("khtn-7", "khoa-hoc-tu-nhien", 7, "/images/khtn/khtn-7.jpeg"),
  gradeMaterial("khtn-8", "khoa-hoc-tu-nhien", 8, "/images/khtn/khtn-8.jpeg"),
  gradeMaterial("khtn-9", "khoa-hoc-tu-nhien", 9, "/images/khtn/khtn-9.png"),

  gradeMaterial("ls-6", "lich-su", 6, "/images/lsdl/lsdl6.png"),
  gradeMaterial("ls-7", "lich-su", 7, "/images/lsdl/lsdl-7.jpeg"),
  gradeMaterial("ls-8", "lich-su", 8, "/images/lsdl/lsdl-8.jpeg"),
  gradeMaterial("ls-9", "lich-su", 9, "/images/lsdl/lsdl-9.jpeg"),

  gradeMaterial("dl-6", "dia-ly", 6, "/images/lsdl/lsdl6.png"),
  gradeMaterial("dl-7", "dia-ly", 7, "/images/lsdl/lsdl-7.jpeg"),
  gradeMaterial("dl-8", "dia-ly", 8, "/images/lsdl/lsdl-8.jpeg"),
  gradeMaterial("dl-9", "dia-ly", 9, "/images/lsdl/lsdl-9.jpeg"),
];

export const mockSubjects = allMaterials;

export function getAvailableGrades(
  materials: SubjectMaterial[],
  subject: "all" | SubjectSlug
): number[] {
  const grades = materials
    .filter((m) => subject === "all" || m.subject === subject)
    .map((m) => m.grade as number);

  return [...new Set(grades)].sort((a, b) => a - b);
}

export function filterMaterials(
  materials: SubjectMaterial[],
  subject: "all" | SubjectSlug,
  grade: "all" | number,
  search = ""
): SubjectMaterial[] {
  const query = search.trim().toLowerCase();

  return materials.filter((item) => {
    const matchSubject = subject === "all" || item.subject === subject;
    const matchGrade = grade === "all" || item.grade === grade;
    const matchSearch =
      query === "" ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);

    return matchSubject && matchGrade && matchSearch;
  });
}
