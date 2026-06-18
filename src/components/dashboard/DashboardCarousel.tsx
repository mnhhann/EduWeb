"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CarouselSlide = {
  id: string;
  image: string;
  title: string;
  description: string;
};

const defaultSlides: CarouselSlide[] = [
  {
    id: "toan",
    image: "/images/toan/toan-lop-1.jpg",
    title: "Toán học",
    description: "Phát triển tư duy logic qua các bài học thú vị.",
  },
  {
    id: "tieng-viet",
    image: "/images/tieng_viet/tv-1.jpeg",
    title: "Tiếng Việt",
    description: "Rèn luyện đọc hiểu và kỹ năng viết văn.",
  },
  {
    id: "tieng-anh",
    image: "/images/tieng_anh/ta-1.jpeg",
    title: "Tiếng Anh",
    description: "Học từ vựng và giao tiếp mỗi ngày.",
  },
  {
    id: "khtn",
    image: "/images/khtn/khtn-6.jpg",
    title: "Khoa học tự nhiên",
    description: "Khám phá thế giới tự nhiên quanh ta.",
  },
];

type DashboardCarouselProps = {
  slides?: CarouselSlide[];
};

export function DashboardCarousel({ slides = defaultSlides }: DashboardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <div className="premium-carousel">
      <div className="carousel-inner">
        {slides.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`carousel-slide ${isActive ? "active" : "inactive"}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority={index === 0}
              />
              <div className="carousel-overlay" />
              {isActive && (
                <div className="carousel-content">
                  <h2 className="carousel-title">{item.title}</h2>
                  <p className="carousel-desc">{item.description}</p>
                </div>
              )}
            </div>
          );
        })}

        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          className="carousel-btn prev"
          aria-label="Slide trước"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          className="carousel-btn next"
          aria-label="Slide sau"
        >
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Xem slide ${index + 1}`}
            className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
