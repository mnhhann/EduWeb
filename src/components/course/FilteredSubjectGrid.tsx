"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { SubjectMaterial, SubjectSlug } from "@/types";
import {
  allMaterials,
  filterMaterials,
  getAvailableGrades,
} from "@/lib/subjects";
import { CourseCard } from "./CourseCard";
import { Pagination } from "./Pagination";
import { SubjectFilterNav } from "./SubjectFilterNav";

const ROWS_PER_PAGE = 4;

function useGridColumns() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setColumns(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}

type FilteredSubjectGridProps = {
  materials?: SubjectMaterial[];
  showEmptyMessage?: boolean;
};

export function FilteredSubjectGrid({
  materials = allMaterials,
  showEmptyMessage = true,
}: FilteredSubjectGridProps) {
  const [subject, setSubject] = useState<"all" | SubjectSlug>("all");
  const [grade, setGrade] = useState<"all" | number>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const columns = useGridColumns();

  const pageSize = columns * ROWS_PER_PAGE;

  const availableGrades = useMemo(
    () => getAvailableGrades(materials, subject),
    [materials, subject]
  );

  const filtered = useMemo(
    () => filterMaterials(materials, subject, grade, search),
    [materials, subject, grade, search]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [subject, grade, search, pageSize]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const handleSubjectChange = useCallback(
    (next: "all" | SubjectSlug) => {
      setSubject(next);
      setGrade((current) => {
        if (current === "all") return current;
        const grades = getAvailableGrades(materials, next);
        return grades.includes(current) ? current : "all";
      });
    },
    [materials]
  );

  const handleGradeChange = useCallback((next: "all" | number) => {
    setGrade(next);
  }, []);

  return (
    <div>
      <SubjectFilterNav
        subject={subject}
        grade={grade}
        search={search}
        availableGrades={availableGrades}
        onSubjectChange={handleSubjectChange}
        onGradeChange={handleGradeChange}
        onSearchChange={setSearch}
      />

      {filtered.length > 0 ? (
        <>
          <div className="premium-grid">
            {paginated.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      ) : (
        showEmptyMessage && (
          <p className="premium-empty">
            Không có tài liệu phù hợp với bộ lọc hoặc từ khóa tìm kiếm.
          </p>
        )
      )}
    </div>
  );
}
