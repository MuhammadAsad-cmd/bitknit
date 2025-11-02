"use client";

import React from "react";
import Image from "next/image";

export default function Campaign() {
  return (
    <section>
      <div
        className="relative rounded-[28px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/image-12-3-scaled-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" /> */}

        <div className="relative z-10 container py-12 md:py-16">
          <div className="flex items-center md:gap-16">
            {/* Left column - 3D Image */}
            <div className="w-[40%]">
              <div className="w-full h-[360px] rounded-[34px]">
                <Image
                  src="/images/ed2.jpg"
                  alt="3D Campaign Visual"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-[34px]"
                  priority
                />
              </div>
            </div>

            {/* Right column - Content */}
            <div className="text-center md:text-left w-[60%]">
              <h2 className="font-unbounded text-2xl md:text-[34px] font-semibold text-zinc-900 leading-tight mb-6">
                Your{" "}
                <span className="text-blue-600">competitors</span>{" "}
                wish they had your next{" "}
                <span className="text-blue-600">campaign</span>
              </h2>

              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                We help brands{" "}
                <span className="font-semibold text-zinc-900">
                  dominate their markets
                </span>{" "}
                through ruthlessly effective web development, conversion-focused
                design, and marketing that actually moves the needle. No fluff, no
                empty promises that create tribes.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
                LET'S CONNECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

