import React from "react";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import GridPattern from "./GridPattern";

const Herosection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-very-dark-blue">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern */}
      <GridPattern />

      <div className="relative z-10 flex items-center justify-start min-h-screen pt-32 pb-20">
        <div className="container">
          <AnimateIn type="fade-down" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-300">👋</span>
              <span className="text-white text-sm font-medium">
                Pioneers of Digital Expertise
              </span>
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" delay={0.2}>
            <h1 className="font-unbounded text-4xl md:text-[54px] max-w-5xl font-medium md:leading-[60px] text-white mb-6">
              Transforming complex ideas into{" "}
              <span className="text-blue-200">digital reality</span>
            </h1>
          </AnimateIn>

          <AnimateIn type="fade-up" delay={0.3}>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-12 leading-relaxed">
              Your strategic partner for digital innovation. We combine elite engineering with premium design to create experiences that captivate and convert.
            </p>
          </AnimateIn>

          <AnimateIn type="fade-up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
              <Link
                href="/services"
                className="bg-white hover:bg-blue-50 text-blue-600 font-semibold px-8 py-4 cursor-pointer rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                EXPLORE SERVICES
                <span>→</span>
              </Link>
              <Link
                href="#projects"
                className="border-2 border-white text-white font-semibold px-8 py-4 cursor-pointer rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                VIEW CASE STUDIES
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
