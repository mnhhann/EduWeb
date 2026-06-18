import { AppLink } from "@/components/ui/AppLink";
import { FilteredSubjectGrid } from "@/components/course";
import { AuthRequiredLink } from "@/components/auth";
export default function HomePage() {
  return (
    <div className="premium-container">
      <section className="premium-hero">
        <h1 className="hero-title">
          Nền tảng học trực tuyến <br />
          <span className="hero-title-highlight">Chất lượng cao</span>
        </h1>
        <p className="hero-subtitle">
          Học các môn phổ thông từ cơ bản đến nâng cao mọi lúc, mọi nơi. Giao diện trực quan, trải nghiệm mượt mà, giúp việc học trở nên dễ dàng và thú vị hơn.
        </p>
        <AuthRequiredLink href="/courses" className="premium-button">
          Bắt đầu học ngay
        </AuthRequiredLink>
      </section>

      <section>
        <div className="section-header">
          <div>
            <h2 className="section-title">Khám phá khóa học</h2>
            <p className="section-subtitle">
              Danh sách môn học phổ biến trên nền tảng.
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
