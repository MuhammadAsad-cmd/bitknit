"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";

const projectsData = [
  {
    title: "Redesign a website for a h2O company",
    tags: [
      "Branding",
      "Webflow Development",
      "UX Research",
      "WordPress Development",
      "UX UI Design",
      "CRO",
    ],
  },
  {
    title: "Redesign a website for a chile company",
    tags: [
      "Branding",
      "Webflow Development",
      "UX Research",
      "Web Development",
      "WordPress Development",
      "UX UI Design",
      "CRO",
    ],
  },
  {
    title: "E‑commerce revamp for lifestyle brand",
    tags: ["Shopify", "Performance", "A/B Testing"],
  },
  {
    title: "SaaS marketing site refresh",
    tags: ["Next.js", "Design Systems", "Analytics"],
  },
  {
    title: "Mobile app landing redesign",
    tags: ["Landing Page", "Conversion", "SEO"],
  },
  {
    title: "FinTech dashboard redesign",
    tags: ["UI Design", "React", "Data Visualization"],
  },
  {
    title: "Healthcare platform development",
    tags: ["Next.js", "HIPAA Compliance", "Telemedicine"],
  },
  {
    title: "Food delivery app UI/UX",
    tags: ["Mobile Design", "Flutter", "User Research"],
  },
];

const Tag = ({ label }) => (
  <span className="px-3 py-1 text-xs rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700">
    {label}
  </span>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Portfolio"
        subtitle="Explore our collection of successful projects that showcase our expertise in design, development, and innovation."
        badge="Our Work"
      />

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, idx) => (
              <article
                key={idx}
                className="group h-full rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video w-full bg-linear-to-br from-zinc-200 to-zinc-100"></div>
                <div className="p-5 md:p-6">
                  <h3 className="text-zinc-900 text-lg md:text-xl font-semibold leading-snug mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Clients />
      <Testimonials />
      <CTA />
    </main>
  );
}
