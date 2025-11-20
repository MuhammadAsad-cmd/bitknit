"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function Campaign() {
  return (
    <section className="py-16 md:py-24">
      <div
        className="relative rounded-2xl md:rounded-[28px] overflow-hidden mx-4 sm:mx-6 lg:mx-8"
        style={{
          backgroundImage: "url('/images/image-12-3-scaled-1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" /> */}

        <div className="relative z-10 container py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left column - 3D Image */}
            <div className="w-full lg:w-[40%] order-2 lg:order-1">
              <AnimateIn type="fade-right" delay={0.1}>
                <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[360px] rounded-2xl md:rounded-[34px] overflow-hidden">
                  <Image
                    src="/images/ed2.jpg"
                    alt="3D Campaign Visual"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </AnimateIn>
            </div>

            {/* Right column - Content */}
            <div className="text-center lg:text-left w-full lg:w-[60%] order-1 lg:order-2">
              <AnimateIn type="fade-left" delay={0.2}>
                <h2 className="font-unbounded text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-zinc-900 leading-tight mb-4 md:mb-6 px-2 sm:px-0">
                  Ready to build something{" "}
                  <span className="text-blue-600">extraordinary</span>?
                </h2>
              </AnimateIn>

              <AnimateIn type="fade-left" delay={0.3}>
                <p className="text-zinc-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
                  From concept to launch, we deliver{" "}
                  <span className="font-semibold text-zinc-900">
                    premium digital solutions
                  </span>{" "}
                  that set you apart. Whether it's a cutting-edge web platform, a mobile app, or a complete digital transformation—we make it happen.
                </p>
              </AnimateIn>

              <AnimateIn type="fade-left" delay={0.4}>
                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="https://wa.me/923070175479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base inline-flex items-center gap-2"
                  >
                    LET'S CONNECT
                    <span>→</span>
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

