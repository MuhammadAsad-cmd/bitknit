import React from "react";
import PageHero from "@/components/PageHero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { projectsData } from "@/data/projectsData";
import Image from "next/image";



const Tag = ({ label }) => (
  <span className="px-3 py-1 text-xs rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700">
    {label}
  </span>
);

export default function ProjectsClient() {
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
                <div className="aspect-video w-full relative overflow-hidden bg-zinc-100 shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 33vw, 400px"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-zinc-900 text-lg md:text-xl font-semibold leading-snug mb-4">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
