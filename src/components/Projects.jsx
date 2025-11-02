"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const projectsData = [
  {
    title: "Redesign a website for a gummies company",
    tags: ["Branding", "UX UI Design", "React Development", "CRO"],
  },
  {
    title: "Redesign a website for a h2O company",
    tags: [
      "Branding",
      "Webflow Development",
      "UX Research",
      "WordPress Development",
      "UX UI Design",
      "CRO",
    ],
  },
  {
    title: "Redesign a website for a chile company",
    tags: [
      "Branding",
      "Webflow Development",
      "UX Research",
      "Web Development",
      "WordPress Development",
      "UX UI Design",
      "CRO",
    ],
  },
  {
    title: "E‑commerce revamp for lifestyle brand",
    tags: ["Shopify", "Performance", "A/B Testing"],
  },
  {
    title: "SaaS marketing site refresh",
    tags: ["Next.js", "Design Systems", "Analytics"],
  },
  {
    title: "Mobile app landing redesign",
    tags: ["Landing Page", "Conversion", "SEO"],
  },
];

const Tag = ({ label }) => (
  <span className="px-3 py-1 text-xs rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700">
    {label}
  </span>
);

export default function Projects() {
  return (
    <section className="relative pb-12 md:pb-24 bg-white">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center justify-between text-zinc-700/70 font-unbounded font-medium">
            <div className="w-full overflow-hidden">
              <div className="whitespace-nowrap text-3xl md:text-5xl text-center">
                <span>✦ OUR PROJECTS </span>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          slidesPerView={1.1}
          spaceBetween={16}
          grabCursor={true}
          centeredSlides={false}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
        >
          {projectsData.map((project, idx) => (
            <SwiperSlide key={idx}>
              <article className="group h-full rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video w-full bg-linear-to-br from-zinc-200 to-zinc-100"></div>
                <div className="p-5 md:p-6">
                  <h3 className="text-zinc-900 text-lg md:text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
}
