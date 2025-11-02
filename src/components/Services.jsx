"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Palette,
  Settings,
  Lightbulb,
  Cloud,
  Brain,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. From responsive landing pages to complex enterprise platforms.",
    icon: Globe,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences that drive engagement.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "UI/UX Designing",
    description:
      "User-centered design that converts. Beautiful interfaces backed by research, testing, and data-driven decisions.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Custom Software Development",
    description:
      "Tailored software solutions that solve your unique business challenges. Scalable, secure, and built to last.",
    icon: Settings,
  },
  {
    id: 5,
    title: "Consulting & Strategy",
    description:
      "Strategic guidance from discovery to deployment. Technology roadmaps, architecture planning, and digital transformation.",
    icon: Lightbulb,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, migration, and optimization. AWS, Azure, and GCP expertise for scalable, reliable systems.",
    icon: Cloud,
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and predictive analytics. From chatbots to recommendation engines and computer vision.",
    icon: Brain,
  },
  {
    id: 8,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management, and conversion optimization.",
    icon: ShoppingCart,
  },
];

function ServiceCard({ service }) {
  const IconComponent = service.icon;
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg rounded-2xl md:p-6 p-4 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] hover:-translate-y-1">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
        <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
      </div>
      <h3 className="font-unbounded text-xl md:text-[22px] font-semibold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-white/70 leading-relaxed text-sm md:text-base">
        {service.description}
      </p>
      <div className="mt-6 inline-flex items-center text-blue-400 font-medium text-sm group-hover:gap-2 transition-all duration-300">
        Learn more
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative py-16 md:py-24 bg-very-dark-blue overflow-hidden mb-12 md:mb-24">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Secondary grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:120px_120px]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-medium">
              What We Offer
            </span>
          </div>
          <h2 className="font-unbounded text-4xl md:text-[54px] font-medium md:leading-[60px] text-white leading-tight mb-6">
            Our Services
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            From concept to deployment, we deliver end-to-end digital solutions
            that drive growth and innovation. Our expertise spans the full
            technology stack.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            View All Services
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

