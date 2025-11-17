"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const allReviews = [
  {
    text:
      "Professionalism, creativity, and speed. They understood our needs and captured our company's essence in a modern way.",
    author: "Daniel de Lira, Director at CIA Constructora",
  },
  {
    text:
      "Delivered a custom internal dashboard that changed how we manage operations. Technically sharp and easy to work with.",
    author: "Clara Estefanía, Architect at Urbana Group",
  },
  {
    text:
      "Their collaboration was smooth and efficient. Clear milestones, fast delivery, and solid results.",
    author: "Jose Armando, Lead Designer at Studio Milcari",
  },
  {
    text:
      "Highly recommended! The team is attentive and friendly. They helped us significantly increase sales and visibility.",
    author: "Sandra Villalpando, CEO at Apples Army",
  },
  {
    text:
      "From responsive designs to seamless UI, they ensured our presence captivates and converts.",
    author: "Hermanos Peltier, Founders at Peltier Irons",
  },
  {
    text:
      "Fast follow‑up, creative thinking, and an e‑commerce platform that exceeded expectations.",
    author: "Diego Hernandez, Project Manager at H2O Power",
  },
];

function Card({ text, author }) {
  return (
    <div className="rounded-2xl bg-white/8 ring-1 ring-white/10 text-white p-5 md:p-6 mx-3 shrink-0 w-[320px] md:w-[380px] h-[220px] md:h-[240px] flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-1 text-yellow-300 text-sm mb-3">
        <span>★★★★★</span>
      </div>
      <p className="text-white/90 font-sans leading-relaxed text-sm md:text-[15px] mb-4 grow">{text}</p>
      <p className="text-[12px] md:text-[13px] text-white/70 font-sans mt-auto">{author}</p>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...allReviews, ...allReviews];

  return (
    <section id="reviews" className="pb-16 md:pb-24">
      <div className="relative overflow-hidden bg-very-dark-blue">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[60px_60px] z-1" />
        
        {/* Secondary grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[120px_120px] z-1" />

        {/* Header section with container */}
        <div className="relative z-10 container py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="font-unbounded text-white text-3xl md:text-5xl">What our clients say</h2>
            <p className="mt-3 text-white/70 font-sans text-sm md:text-base">
              Discover the experiences that shape our story—insights, challenges, and triumphs that guide our path forward.
            </p>
          </div>
        </div>

        {/* Marquee section - full width, no container */}
        <div className="relative z-10 space-y-6 md:space-y-8 pb-14 md:pb-20">
          {/* First row - moving left to right */}
          <div className="relative">
            <Marquee
              speed={50}
              gradient={true}
              gradientColor={[1, 7, 26]}
              gradientWidth={100}
              pauseOnHover={true}
            >
              {duplicatedReviews.map((review, index) => (
                <Card key={`row1-${index}`} text={review.text} author={review.author} />
              ))}
            </Marquee>
          </div>

          {/* Second row - moving right to left */}
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
                <Card key={`row2-${index}`} text={review.text} author={review.author} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}


