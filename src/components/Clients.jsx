"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AnimateIn from "./AnimateIn";

const logos = [
  { name: "Bourter", src: "/images/compnay/Bourter.png" },
  { name: "Canrover", src: "/images/compnay/Canrover-logo.svg" },
  { name: "Frame 1686554916", src: "/images/compnay/Frame 1686554916.png" },
  { name: "Frame 1686555093", src: "/images/compnay/Frame 1686555093 (1).png" },
  { name: "Frame 1686555131", src: "/images/compnay/Frame 1686555131.png" },
  { name: "Frame 2087327066", src: "/images/compnay/Frame 2087327066.png" },
  // { name: "Frame 2087327068", src: "/images/compnay/Frame 2087327068.png" },
  { name: "Frame 48689", src: "/images/compnay/Frame 48689.png" },
  { name: "Group 2", src: "/images/compnay/Group 2 (1).png" },
  { name: "Group 409", src: "/images/compnay/Group 409 (1).png" },
  { name: "Logo 2", src: "/images/compnay/logo2.png" },
  { name: "Splash screen", src: "/images/compnay/Splash screen.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <AnimateIn type="fade-up" delay={0.1}>
            <h2 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 leading-tight mb-4">
              Our Valued Clients
            </h2>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={0.2}>
            <p className="text-zinc-600 text-base md:text-lg max-w-3xl mx-auto">
              We’re proud to collaborate with ambitious startups and global enterprises who trust us to deliver quality and innovation.
            </p>
          </AnimateIn>
        </div>

        <AnimateIn type="fade-up" delay={0.3}>
          <Marquee speed={40} gradient={false} pauseOnHover={true}>
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="relative flex items-center justify-center mx-10 w-40 h-20 md:w-48 md:h-24 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="object-contain w-auto h-full"
                />
              </div>
            ))}
          </Marquee>
        </AnimateIn>
      </div>
    </section>
  );
}
