"use client";

import type { SubjectSlug } from "@/types";
import { subjectFilters } from "@/lib/subjects";

type SubjectFilterNavProps = {
  subject: "all" | SubjectSlug;
  grade: "all" | number;
  search: string;
  availableGrades: number[];
  onSubjectChange: (subject: "all" | SubjectSlug) => void;
  onGradeChange: (grade: "all" | number) => void;
  onSearchChange: (search: string) => void;
};

const fieldClassName =
  "rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectClassName =
  "min-w-[120px] appearance-none rounded-lg border border-zinc-300 bg-white py-1.5 pl-3 pr-8 text-sm text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

function SelectChevron() {
  return (
    <svg
      className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SubjectFilterNav({
  subject,
  grade,
  search,
  availableGrades,
  onSubjectChange,
  onGradeChange,
  onSearchChange,
}: SubjectFilterNavProps) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-zinc-700">Môn học</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <nav className="flex flex-1 flex-wrap gap-2" aria-label="Lọc theo môn học">
          {subjectFilters.map((filter) => {
            const isActive = subject === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => onSubjectChange(filter.value)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label htmlFor="search-filter" className="text-sm font-medium text-zinc-700">
              Tìm kiếm
            </label>
            <input
              id="search-filter"
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tên môn, lớp..."
              className={`w-36 ${fieldClassName} placeholder:text-zinc-400`}
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="grade-filter" className="text-sm font-medium text-zinc-700">
              Lớp
            </label>
            <div className="relative">
              <select
                id="grade-filter"
                value={grade === "all" ? "all" : String(grade)}
                onChange={(e) => {
                  const value = e.target.value;
                  onGradeChange(value === "all" ? "all" : Number(value));
                }}
                className={selectClassName}
              >
                <option value="all">Tất cả</option>
                {availableGrades.map((g) => (
                  <option key={g} value={g}>
                    Lớp {g}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
