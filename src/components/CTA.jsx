"use client";

import React from "react";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn type="fade-up" delay={0.1}>
            <h2 className="font-unbounded text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              Ready to scale your business?
            </h2>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={0.2}>
            <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's collaborate to build digital experiences that drive growth, engagement, and real results.
            </p>
          </AnimateIn>
          <AnimateIn type="scale-up" delay={0.3}>
            <Link
              href="https://wa.me/923070175479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start a Project
              <span className="ml-2">→</span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
