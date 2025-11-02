"use client";

import React from "react";
import PageHero from "@/components/PageHero";
import { Linkedin, Mail, Github } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years in tech. Passionate about building products that matter.",
    image: "/images/team/1.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    email: "john@bitknitlimited.com",
    github: "https://github.com/johndoe",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable systems and cutting-edge technologies.",
    image: "/images/team/2.jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    email: "jane@bitknitlimited.com",
    github: "https://github.com/janesmith",
  },
  {
    name: "Mike Johnson",
    role: "Lead Designer",
    bio: "Creative designer focused on user experience and beautiful, functional interfaces.",
    image: "/images/team/3.jpg",
    linkedin: "https://linkedin.com/in/mikejohnson",
    email: "mike@bitknitlimited.com",
    github: "https://github.com/mikejohnson",
  },
  {
    name: "Sarah Williams",
    role: "Senior Developer",
    bio: "React and Next.js expert. Building performant web applications with modern tools.",
    image: "/images/team/4.jpg",
    linkedin: "https://linkedin.com/in/sarahwilliams",
    email: "sarah@bitknitlimited.com",
    github: "https://github.com/sarahwilliams",
  },
  {
    name: "David Brown",
    role: "Mobile Developer",
    bio: "Flutter and React Native specialist creating seamless cross-platform experiences.",
    image: "/images/team/5.jpg",
    linkedin: "https://linkedin.com/in/davidbrown",
    email: "david@bitknitlimited.com",
    github: "https://github.com/davidbrown",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    bio: "User-centered designer transforming ideas into intuitive and engaging experiences.",
    image: "/images/team/6.jpg",
    linkedin: "https://linkedin.com/in/emilydavis",
    email: "emily@bitknitlimited.com",
    github: "https://github.com/emilydavis",
  },
];

function TeamCard({ member }) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-zinc-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square w-full max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden bg-linear-to-br from-zinc-200 to-zinc-100">
        {/* Placeholder for team member image */}
        <div className="w-full h-full flex items-center justify-center text-zinc-400 text-4xl font-bold">
          {member.name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-unbounded text-xl font-semibold text-zinc-900 mb-1">
          {member.name}
        </h3>
        <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
          {member.bio}
        </p>
        
        <div className="flex items-center justify-center gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-9 h-9 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
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

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

