import React from "react";
import Link from "next/link";

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
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Secondary grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="relative z-10 flex items-center justify-start min-h-screen pt-32 pb-20">
        <div className="container">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="text-yellow-300">👋</span>
            <span className="text-white text-sm font-medium">
              Pioneers of Digital Expertise
            </span>
          </div>

          <h1 className="font-unbounded text-4xl md:text-[54px] max-w-5xl font-medium md:leading-[60px] text-white mb-6">
            Crafting digital experiences that{" "}
            <span className="text-blue-200">[convert]</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-12 leading-relaxed">
            We are a development agency and strategic partner that specializes
            in paid advertising, automation, web design and development.
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default Herosection;
