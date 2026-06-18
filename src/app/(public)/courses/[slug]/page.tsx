import { allMaterials } from "@/lib/subjects";

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allMaterials.map((material) => ({ slug: material.slug }));
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = allMaterials.find((material) => material.slug === slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900">
        {course?.title ?? "Chi tiết khóa học"}
      </h1>
      <p className="mt-4 text-zinc-600">
        {course?.description ?? `Slug: ${slug}`}
      </p>
      <p className="mt-4 text-zinc-600">Liên hệ: maih73283@gmail.com</p>
    </div>
  );
}
