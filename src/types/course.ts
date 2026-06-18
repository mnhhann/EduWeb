export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  thumbnailUrl?: string;
};

export type SubjectSlug =
  | "tieng-viet"
  | "tieng-anh"
  | "toan"
  | "khoa-hoc-tu-nhien"
  | "lich-su"
  | "dia-ly";

export type SubjectMaterial = Course & {
  subject: SubjectSlug;
  grade?: number;
};

export type Lesson = {
  id: string;
  courseId: string;
  title: string;
  duration: number;
  order: number;
};
