import React from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import {
  Globe,
  Smartphone,
  Palette,
  Settings,
  Lightbulb,
  Cloud,
  Brain,
  ShoppingCart,
  Code,
  Database,
  Shield,
  Zap,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue. From responsive landing pages to complex enterprise platforms with seamless user experiences.",
    icon: Globe,
    features: [
      "Responsive Design",
      "Progressive Web Apps",
      "E-commerce Platforms",
      "CMS Integration",
    ],
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift. Seamless user experiences that drive engagement and retention.",
    icon: Smartphone,
    features: [
      "iOS & Android Apps",
      "Cross-platform Solutions",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designing",
    description:
      "User-centered design that converts visitors into customers. Beautiful interfaces backed by research, usability testing, and data-driven decisions.",
    icon: Palette,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
  {
    id: 4,
    title: "Custom Software Development",
    description:
      "Tailored software solutions that solve your unique business challenges. Enterprise applications, internal tools, and automation systems built to scale.",
    icon: Settings,
    features: [
      "Enterprise Solutions",
      "API Development",
      "System Integration",
      "Legacy Modernization",
    ],
  },
  {
    id: 5,
    title: "Consulting & Strategy",
    description:
      "Strategic guidance from discovery to deployment. Technology roadmaps, architecture planning, digital transformation, and technical due diligence.",
    icon: Lightbulb,
    features: [
      "Technology Roadmaps",
      "Architecture Planning",
      "Digital Transformation",
      "Technical Audits",
    ],
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Cloud infrastructure, migration, and optimization services. AWS, Azure, and GCP expertise for building scalable, reliable, and cost-effective systems.",
    icon: Cloud,
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps & CI/CD",
      "Cost Optimization",
    ],
  },
  {
    id: 7,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and predictive analytics powered by AI. From chatbots and recommendation engines to computer vision and natural language processing.",
    icon: Brain,
    features: [
      "Chatbots & Virtual Assistants",
      "Predictive Analytics",
      "Computer Vision",
      "NLP & Text Analysis",
    ],
  },
  {
    id: 8,
    title: "E-commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management, and conversion optimization. Shopify, WooCommerce, and custom platforms.",
    icon: ShoppingCart,
    features: [
      "Payment Gateway Integration",
      "Inventory Management",
      "Order Processing",
      "Analytics & Reporting",
    ],
  },
  {
    id: 9,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs that power modern applications. Secure, scalable, and well-documented endpoints for seamless integrations.",
    icon: Code,
    features: [
      "REST & GraphQL APIs",
      "API Documentation",
      "Third-party Integrations",
      "Microservices Architecture",
    ],
  },
  {
    id: 10,
    title: "Database Design",
    description:
      "Robust database architecture and optimization. SQL and NoSQL solutions designed for performance, scalability, and data integrity.",
    icon: Database,
    features: [
      "Database Architecture",
      "Performance Optimization",
      "Data Migration",
      "Backup & Recovery",
    ],
  },
  {
    id: 11,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. Penetration testing, security audits, and compliance consulting.",
    icon: Shield,
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance (GDPR, HIPAA)",
      "Incident Response",
    ],
  },
  {
    id: 12,
    title: "Performance Optimization",
    description:
      "Speed up your applications and improve user experience. Frontend optimization, backend tuning, and infrastructure improvements.",
    icon: Zap,
    features: [
      "Page Speed Optimization",
      "Code Refactoring",
      "Caching Strategies",
      "Load Testing",
    ],
  },
];

function ServiceCard({ service }) {
  const IconComponent = service.icon;
  return (
    <div className="group relative bg-white rounded-2xl p-6 md:p-8 border border-zinc-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        <h3 className="font-unbounded text-xl md:text-2xl font-semibold text-zinc-900 leading-tight">
          {service.title}
        </h3>
      </div>
      <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-6">
        {service.description}
      </p>
      <ul className="space-y-2 mb-6">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="https://wa.me/923070175479"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
      >
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Our Services"
        subtitle="From concept to deployment, we deliver end-to-end digital solutions that drive growth and innovation. Our expertise spans the full technology stack."
        badge="What We Offer"
      />

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <Clients />
      <Testimonials />
      <CTA />
    </main>
  );
}
