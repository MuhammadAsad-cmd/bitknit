"use client";

import React from "react";
import { Search, Map, Palette, Code, Rocket } from "lucide-react";
import AnimateIn from "./AnimateIn";
import GridPattern from "./GridPattern";

const steps = [
  {
    id: 1,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and competitive landscape to build a solid foundation.",
    icon: Search,
  },
  {
    id: 2,
    title: "Strategy",
    description: "We craft a tailored roadmap that aligns with your objectives, ensuring every step is calculated for success.",
    icon: Map,
  },
  {
    id: 3,
    title: "Design",
    description: "Our designers create stunning, user-centric interfaces that captivate your audience and elevate your brand.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Development",
    description: "We bring designs to life with clean, scalable code, ensuring your digital product performs flawlessly.",
    icon: Code,
  },
  {
    id: 5,
    title: "Launch & Scale",
    description: "We handle the deployment and provide ongoing support to help your business grow and evolve.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="relative py-16 md:py-24 bg-very-dark-blue overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <GridPattern primaryOpacity={0.15} secondaryOpacity={0.08} primarySize="40px" secondarySize="80px" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn type="fade-down" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium">
                How We Work
              </span>
            </div>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={0.2}>
            <h2 className="font-unbounded text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Our Process
            </h2>
          </AnimateIn>
          <AnimateIn type="fade-up" delay={0.3}>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              A proven methodology to transform your ideas into digital reality.
            </p>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
           {/* Connecting line for desktop (optional visual cue) */}
           {/* <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" /> */}

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <AnimateIn key={step.id} type="fade-up" delay={0.2 + idx * 0.1} className="h-full">
                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-unbounded text-xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="absolute top-6 right-6 text-white/10 font-unbounded text-4xl font-bold">
                    0{step.id}
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
