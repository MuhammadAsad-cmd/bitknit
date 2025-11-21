import React from "react";
import PageHero from "@/components/PageHero";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mutahar Khan",
    role: "Founder & CEO",
    image: "/images/team/mutahar.jpg",
    linkedin: "https://www.linkedin.com/in/mutahar-khan/",
  },
  {
    name: "Muhammad Khakwani",
    role: "Full Stack App Developer",
    image: "/images/team/khan.jpg",
    linkedin: "https://www.linkedin.com/in/muhammad-khakwani/",
  },
  {
    name: "Haider Mehmood",
    role: "Senior Software Developer",
    image: "/images/team/haider.jpg",
    linkedin: "https://www.linkedin.com/in/haiderm372/",
  },
  {
    name: "Umair Abid",
    role: "Full Stack Mobile App Developer",
    image: "/images/team/umair_abid.jpg",
    linkedin: "https://www.linkedin.com/in/umair-abid-140954295/",
  },
  {
     name: "Wajahat Ali",
    role: "Senior Mobile App Developer",
    image: "/images/team/wajahat.jpg",
    linkedin: "",
  },  
  {
     name: "Muhammad Asad",
    role: "Mern Stack Developer",
    image: "/images/team/Asad.jpg",
    linkedin: "https://www.linkedin.com/in/masadali/",
  },  
  {
     name: "Muhammad Farqualit",
    role: "UI/UX Designer",
    image: "/images/team/farqualit2.png",
    linkedin: "",
  },  
];

function TeamCard({ member }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200">
        {member.image ? (
          <>
            <Image
              width={400}
              height={500}
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400 text-5xl md:text-6xl font-bold">
            {initials}
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="p-5 md:p-6">
        <h3 className="font-unbounded text-lg md:text-xl font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-zinc-600 text-sm md:text-base mb-4 min-h-[2.5rem]">{member.role}</p>
        
        <Link
          href={member.linkedin || "#"}
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500 text-blue-600 hover:text-white transition-all duration-200 text-sm font-medium"
        >
          <Linkedin className="w-4 h-4" />
          <span>Connect</span>
        </Link>
      </div>
    </div>
  );
}

export default function TeamClient() {
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
