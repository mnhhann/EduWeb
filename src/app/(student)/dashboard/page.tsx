import { AppLink } from "@/components/ui/AppLink";
import { FilteredSubjectGrid } from "@/components/course";
import { DashboardCarousel } from "@/components/dashboard";

export default function StudentDashboardPage() {
  return (
    <div className="premium-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Bảng điều khiển</h1>
        <p className="dashboard-subtitle">Chào mừng bạn quay lại, tiếp tục hành trình học tập của mình!</p>
      </header>

      <section>
        <DashboardCarousel />
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Các môn học</h2>
            <p className="section-subtitle">
              Khám phá và đăng ký môn học mới.
            </p>
          </div>
          <AppLink href="/courses" className="premium-link">
            Xem tất cả <span>→</span>
          </AppLink>
        </div>
        <div>
          <FilteredSubjectGrid />
        </div>
      </section>
    </div>
  );
}
