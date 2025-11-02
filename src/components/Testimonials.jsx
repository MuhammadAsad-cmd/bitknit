"use client";

import React from "react";

const reviewsA = [
  {
    text:
      "Professionalism, creativity, and speed. They understood our needs and captured our company's essence in a modern way.",
    author: "Daniel de Lira, Director at CIA Constructora",
  },
  {
    text:
      "Highly recommended! The team is attentive and friendly. They helped us significantly increase sales and visibility.",
    author: "Sandra Villalpando, CEO at Apples Army",
  },
  {
    text:
      "Their collaboration was smooth and efficient. Clear milestones, fast delivery, and solid results.",
    author: "Jose Armando, Lead Designer at Studio Milcari",
  },
];

const reviewsB = [
  {
    text:
      "Delivered a custom internal dashboard that changed how we manage operations. Technically sharp and easy to work with.",
    author: "Clara Estefanía, Architect at Urbana Group",
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
    <div className="rounded-2xl bg-white/8 ring-1 ring-white/10 text-white p-4 md:p-5 w-[300px] md:w-[340px] shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-1 text-yellow-300 text-sm mb-3">
        <span>★★★★★</span>
      </div>
      <p className="text-white/90 font-sans leading-relaxed text-sm md:text-[15px]">{text}</p>
      <p className="mt-4 text-[12px] md:text-[13px] text-white/70 font-sans">{author}</p>
    </div>
  );
}

function Column({ items, direction = "up", speed = 40 }) {
  const doubled = [...items, ...items];
  return (
    <div className="w-[300px] md:w-[340px] h-[440px] md:h-[500px] overflow-hidden">
      <div
        className={`marquee flex flex-col gap-4 ${direction === "down" ? "down" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((r, i) => (
          <Card key={i} text={r.text} author={r.author} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="pb-16 md:pb-24">
      <div
        className="relative rounded-[28px] overflow-hidden group"
        style={{
          backgroundImage: "url('/images/BG-011.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-[#080d1f]/80" /> */}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />
        
        {/* Secondary grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:120px_120px] z-[1]" />

        <div className="relative z-10 container py-14 md:py-20">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 ring-1 ring-white/10 mb-4" />
            <h2 className="font-unbounded text-white text-3xl md:text-5xl">What our clients say</h2>
            <p className="mt-3 text-white/70 font-sans text-sm md:text-base">
              Discover the experiences that shape our story—insights, challenges, and triumphs that guide our path forward.
            </p>
          </div>

          <div className="relative">
            {/* Fade masks */}
            {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-16 md:h-20 bg-linear-to-b from-[#080d1f]/90 via-[#080d1f]/50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-20 bg-linear-to-t from-[#080d1f]/90 via-[#080d1f]/50 to-transparent z-10" /> */}

            <div className="relative flex justify-center gap-4 md:gap-8">
              <Column items={reviewsA} direction="up" speed={52} />
              <Column items={reviewsB} direction="down" speed={38} />
              <Column items={[...reviewsA].reverse()} direction="up" speed={56} />
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          .group:hover .marquee { animation-play-state: paused; }
          .marquee { animation: scroll-up linear infinite; }
          .marquee.down { animation-name: scroll-down; }
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scroll-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}


