# EduWeb

Nền tảng web giáo dục — Next.js + React + TypeScript.

## Tech stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Cấu trúc thư mục

```txt
src/
├── app/
│   ├── (public)/          # Trang công khai (home, courses, about)
│   ├── (auth)/            # Đăng nhập, đăng ký
│   ├── (student)/         # Khu vực học viên
│   ├── (admin)/           # Khu vực quản trị
│   └── api/               # API routes
├── components/
│   ├── ui/                # UI primitives (shadcn/ui...)
│   ├── layout/            # Header, Footer, Sidebar
│   ├── course/
│   └── lesson/
├── features/              # Logic theo nghiệp vụ
├── hooks/
├── services/              # Gọi API
├── lib/                   # Utils, constants
├── types/
├── store/
└── middleware.ts
```

## Bắt đầu

```bash
cd C:\CV\edu-web
cp .env.local.example .env.local
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Routes chính

| Route | Mô tả |
|---|---|
| `/` | Trang chủ |
| `/courses` | Danh sách khóa học |
| `/courses/[slug]` | Chi tiết khóa học |
| `/login`, `/register` | Xác thực |
| `/dashboard` | Bảng điều khiển học viên |
| `/my-courses` | Khóa học đã đăng ký |
| `/admin` | Quản trị |
