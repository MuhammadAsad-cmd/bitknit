"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const teamMembers = [
  {
    name: "Mutahar Khan",
    role: "CEO",
    image: "/images/team/mutahar-khan.jpg",
    linkedin: "https://www.linkedin.com/in/mutahar-khan/",
  },
  {
    name: "Muhammad Khakwani",
    role: "Full Stack App Developer",
    image: "/images/team/muhammad-khakwani.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-khakwani/",
  },
  {
    name: "Haider Mehmood",
    role: "Software Developer",
    image: "/images/team/haider-mehmood.jpg",
    linkedin: "https://www.linkedin.com/in/haiderm372/",
  },
  {
    name: "Umair Abid",
    role: "Full Stack Mobile App Developer",
    image: "/images/team/umair-abid.jpg",
    linkedin: "https://www.linkedin.com/in/umair-abid-140954295/",
  },
  {
    name: "Faiza Ramzan",
    role: "Flutter App Developer",
    image: "/images/team/faiza-ramzan.jpg",
    linkedin: "https://www.linkedin.com/in/faiza-ramzan-b50350300/",
  },
  {
    name: "Hareem Ahmad",
    role: "UI/UX Designer",
    image: "/images/team/hareem-ahmad.jpg",
    linkedin: "https://www.linkedin.com/in/hareem-ahmad/",
  },
];

function TeamCard({ member }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="group bg-white rounded-2xl p-5 md:p-6 border border-zinc-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center">
      <div className="relative mb-4">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-linear-to-br from-zinc-200 to-zinc-100 ring-2 ring-zinc-100 group-hover:ring-blue-200 transition-all duration-300">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-2xl md:text-3xl font-bold">
              {initials}
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center grow flex flex-col">
        <h3 className="font-unbounded text-lg md:text-xl font-semibold text-zinc-900 mb-1">
          {member.name}
        </h3>
        <p className="text-zinc-600 text-sm md:text-base mb-4">{member.role}</p>
        
        <div className="mt-auto">
          <Link
            href={member.linkedin}
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-10 h-10 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white transition-all duration-200 group-hover:scale-110"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Our Team"
        subtitle="Meet the talented individuals behind bitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences."
        badge="Who We Are"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
