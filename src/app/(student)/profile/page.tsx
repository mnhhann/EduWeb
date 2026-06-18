import { getDemoProfile } from "@/lib/profile";

function ProfileAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(-2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xl font-semibold text-white shadow-md">
      {initials}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-zinc-100 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-zinc-500">{label}</span>
      <span className="text-sm font-medium text-zinc-900">{value}</span>
    </div>
  );
}

export default function ProfilePage() {
  const user = getDemoProfile();

  const stats = [
    { label: "Khóa học đang học", value: "4" },
    { label: "Bài học hoàn thành", value: "28" },
    { label: "Điểm trung bình", value: "8.2" },
  ];

  return (
    <div>
      <div className="flex items-center gap-4">
        <ProfileAvatar name={user.fullName} />
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">{user.fullName}</h1>
          <p className="mt-1 text-zinc-600">
            @{user.username} · <span className="text-blue-700">Học viên</span>
          </p>
        </div>
      </div>
      <p className="mt-4 text-zinc-600">Quản lý thông tin tài khoản và tiến độ học tập.</p>

      <div className="mt-8 space-y-6">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Thông tin cá nhân</h2>
          <div className="mt-2">
            <InfoRow label="Họ và tên" value={user.fullName} />
            <InfoRow label="Tên đăng nhập" value={user.username} />
            <InfoRow label="Email" value={user.email} />
            <InfoRow label="Số điện thoại" value={user.phone ?? "—"} />
            <InfoRow label="Lớp" value={user.grade ?? "—"} />
            <InfoRow label="Trường" value={user.school ?? "—"} />
            <InfoRow
              label="Ngày tham gia"
              value={new Date(user.joinedAt).toLocaleDateString("vi-VN")}
            />
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Tiến độ học tập</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-lg bg-zinc-50 px-4 py-5 text-center">
                <p className="text-2xl font-bold text-blue-700">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Môn học đang theo học</h2>
          <ul className="mt-4 space-y-3">
            {["Toán lớp 10", "Tiếng Việt lớp 10", "Tiếng Anh lớp 10", "Khoa học tự nhiên lớp 10"].map(
              (course) => (
                <li
                  key={course}
                  className="flex items-center justify-between rounded-lg border border-zinc-100 px-4 py-3"
                >
                  <span className="text-sm font-medium text-zinc-800">{course}</span>
                  <span className="text-xs text-green-600">Đang học</span>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
