"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AnimateIn from "./AnimateIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";

const Tag = ({ label }) => (
  <span className="px-3 py-1 text-xs rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700">
    {label}
  </span>
);

export default function Projects() {
  const swiperRef = useRef(null);

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-white">
      <div className="container">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between text-zinc-700/70 font-unbounded font-medium">
            <div className="w-full">
              <AnimateIn type="fade-down" delay={0.1}>
                <div className="whitespace-nowrap text-3xl md:text-5xl text-center">
                  <span>✦ OUR PROJECTS </span>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-zinc-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl -translate-x-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-zinc-700" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-zinc-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl translate-x-1/2"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-700" />
          </button>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation, Autoplay]}
            slidesPerView={1.1}
            spaceBetween={16}
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="!pb-12"
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
          >
            {projectsData.map((project, idx) => (
              <SwiperSlide key={project.id} className="!h-auto">
                <AnimateIn type="fade-up" delay={0.2 + (idx % 3) * 0.1} className="h-full">
                  <article className="group h-full flex flex-col rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video w-full relative overflow-hidden bg-zinc-100 shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 33vw, 400px"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col grow">
                      <div className="mb-auto">
                        <h3 className="text-zinc-900 text-lg md:text-xl font-semibold leading-snug mb-2">
                          {project.title}
                        </h3>
                        <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((t) => (
                          <Tag key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  </article>
                </AnimateIn>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
