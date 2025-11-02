"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "MVP Development", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "Mobile Development", href: "/services" },
    { name: "Custom Software", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
  ],
  technologies: [
    { name: "React & Next.js", href: "/services" },
    { name: "Flutter", href: "/services" },
    { name: "Node.js", href: "/services" },
    { name: "Python", href: "/services" },
    { name: "AI/ML", href: "/services" },
    { name: "Cloud Solutions", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-very-dark-blue overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
      
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[60px_60px]" />
      
      {/* Secondary grid pattern for depth */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[120px_120px]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Logo & Contact Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <div className="w-[180px] h-auto">
                  <Image
                    src="/images/logo 1.png"
                    alt="bitKnit Logo"
                    width={140}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
                Crafting digital experiences that convert. Your trusted partner in web development and digital innovation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <Link
                  href="mailto:info@bitknitlimited.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@bitknitlimited.com</span>
                </Link>
                
                <Link
                  href="tel:+923070175479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+92 307 0175479</span>
                </Link>
                
                <Link
                  href="https://maps.app.goo.gl/i3jgwbbdomLrXkpU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="max-w-xs">
                    6FJP+P9R, Nasheman Colony Main Rd, Multan, Pakistan
                  </span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-white/60 text-sm">Follow us:</span>
                <Link
                  title="LinkedIn"
                  href="https://www.linkedin.com/company/bitknit-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-unbounded text-white text-base md:text-lg font-semibold mb-4 md:mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-unbounded text-white text-base md:text-lg font-semibold mb-4 md:mb-6">
                Technologies
              </h3>
              <ul className="space-y-3">
                {footerLinks.technologies.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-blue-400 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 bg-[#000000]/30 relative">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[60px_60px]" />
          
          <div className="container py-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                Copyright © {new Date().getFullYear()} bitKnit. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-white/30">|</span>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

