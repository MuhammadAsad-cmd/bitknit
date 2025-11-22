"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import GridPattern from "./GridPattern";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past hero section (approximately 100vh)
      setIsScrolled(currentScrollY > 300);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled
          ? "bg-very-dark-blue/90 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-very-dark-blue"
        } py-1.5`}
    >
      {/* Grid pattern - show on both states but with different opacity */}
      <GridPattern
        primaryOpacity={isScrolled ? 0.1 : 0.25}
        secondaryOpacity={isScrolled ? 0.05 : 0.15}
      />

      <div className="container relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-[120px] md:w-[150px] h-auto">
              <Image
                src="/images/logo 1.png"
                alt="Logo"
                width={150}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white border border-white/20 cursor-pointer transition-all duration-200 hover:bg-blue-600 hover:text-white rounded-md ease-in-out"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 hover:animate-spin" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t relative ${isScrolled
          ? "bg-very-dark-blue/70 backdrop-blur-lg border-white/10"
          : "bg-very-dark-blue border-white/10"
          }`}>
          {/* Grid pattern - show on both states */}
          <GridPattern
            primaryOpacity={isScrolled ? 0.1 : 0.25}
            secondaryOpacity={isScrolled ? 0.05 : 0.15}
          />

          <nav className="container py-4 flex flex-col gap-4 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-blue-400 font-medium transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
