type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-zinc-900">Chi tiết khóa học</h1>
      <p className="mt-4 text-zinc-600">Liên hệ: maih73283@gmail.com</p>
    </div>
  );
}
