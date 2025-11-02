"use client";

import React from "react";

export default function PageHero({ title, subtitle, badge }) {
  return (
    <section className="relative pt-34 pb-16 md:pb-24 overflow-hidden bg-very-dark-blue">
      {/* Gradient overlay for depth - matching home hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      
      {/* Animated background shapes - matching home hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern - matching home hero */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[60px_60px]" />
      
      {/* Secondary grid pattern for depth - matching home hero */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[120px_120px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* {badge && (
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-white/90 text-sm font-medium">{badge}</span>
            </div>
          )} */}
          <h1 className="font-unbounded text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

