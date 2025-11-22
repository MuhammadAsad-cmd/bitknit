"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AnimateIn from "./AnimateIn";
import GridPattern from "./GridPattern";
import { testimonialsData } from "@/data/testimonialsData";

function Card({ text, name, image }) {
  return (
    <div className="rounded-2xl bg-white/8 ring-1 ring-white/10 text-white p-5 md:p-6 mx-3 shrink-0 w-[320px] md:w-[380px] h-[260px] md:h-[280px] flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-1 text-yellow-300 text-sm mb-3">
        <span>★★★★★</span>
      </div>
      <p className="text-white/90 font-sans leading-relaxed text-sm md:text-[15px] mb-4 grow">{text}</p>
      <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <p className="text-sm md:text-base text-white font-medium">{name}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...testimonialsData, ...testimonialsData];

  return (
    <section id="reviews">
      <div className="relative overflow-hidden bg-very-dark-blue py-16 md:py-24">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Grid pattern */}
        <GridPattern className="z-1" />

        {/* Header section with container */}
        <div className="relative z-10 container mb-12 md:mb-16">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <AnimateIn type="fade-up" delay={0.1}>
              <h2 className="font-unbounded text-white text-3xl md:text-5xl">What our clients say</h2>
            </AnimateIn>
            <AnimateIn type="fade-up" delay={0.2}>
              <p className="mt-3 text-white/70 font-sans text-sm md:text-base">
                Discover the experiences that shape our story—insights, challenges, and triumphs that guide our path forward.
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Marquee section - full width, no container */}
        <div className="relative z-10 space-y-6 md:space-y-8">
          {/* First row - moving left to right */}
          <AnimateIn type="fade-up" delay={0.3}>
            <div className="relative">
              <Marquee
                speed={50}
                gradient={true}
                gradientColor={[1, 7, 26]}
                gradientWidth={100}
                pauseOnHover={true}
              >
                {duplicatedReviews.map((review, index) => (
                  <Card key={`row1-${index}`} text={review.text} name={review.name} image={review.image} />
                ))}
              </Marquee>
            </div>
          </AnimateIn>

          {/* Second row - moving right to left */}
          <AnimateIn type="fade-up" delay={0.4}>
            <div className="relative">
              <Marquee
                speed={50}
                direction="right"
                gradient={true}
                gradientColor={[1, 7, 26]}
                gradientWidth={100}
                pauseOnHover={true}
              >
                {duplicatedReviews.map((review, index) => (
                  <Card key={`row2-${index}`} text={review.text} name={review.name} image={review.image} />
                ))}
              </Marquee>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}


