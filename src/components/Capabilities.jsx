"use client";

import React from "react";

const items = [
  {
    key: "web",
    label: "Websites & Platforms",
    panelTitle: "Why Alphamarino is Your Best Choice for Web Development",
    panelBody:
      "Your website is often the first impression you make. From responsive designs to seamless user interfaces, we ensure your online presence not only captivates but converts.",
  },
  {
    key: "paid",
    label: "Paid Media",
    panelTitle: "Scale with High-ROI Paid Media",
    panelBody:
      "We design data-driven campaigns across platforms that maximize reach and optimize conversions without wasting budget.",
  },
  {
    key: "seo",
    label: "SEO",
    panelTitle: "Search That Actually Performs",
    panelBody:
      "From technical foundations to content strategy, we help your brand rank, get discovered, and stay competitive.",
  },
  {
    key: "identity",
    label: "Identity Bloom",
    panelTitle: "Brand Identity That Grows With You",
    panelBody:
      "We craft consistent, scalable identity systems that build trust and recognition across every touchpoint.",
  },
  {
    key: "ai",
    label: "AI Automation",
    panelTitle: "Automate What Matters With AI",
    panelBody:
      "From workflows to personalization, we integrate AI to reduce manual effort and unlock new growth.",
  },
];

export default function Capabilities() {
  const [active, setActive] = React.useState(items[0].key);
  const activeItem = React.useMemo(
    () => items.find((i) => i.key === active) || items[0],
    [active]
  );

  return (
    <section className="pb-16 md:pb-24">
      <div
        className="relative rounded-[28px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/BG-014.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-linear-to-b from-[#07122d] via-[#0a1a3c]/80 to-[#3168ff]/60" /> */}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.2] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:60px_60px] z-[1]" />
        
        {/* Secondary grid pattern for depth */}
        <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:120px_120px] z-[1]" />

        <div className="relative z-10 container py-14 md:py-20">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-unbounded text-white text-3xl md:text-5xl tracking-tight">
              Know Our Capabilities
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-white/80 font-sans">
              We are a team of experienced media professionals, graphic designers, and
              web developers, combining technical expertise with a strong sense of style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left column */}
            <div className="space-y-6">
              {items.map((item) => {
                const isActive = item.key === active;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(item.key)}
                    className={`w-full text-left group transition-colors duration-200 font-unbounded text-white ${
                      isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center cursor-pointer">
                      <span
                        className={`mr-4 h-6 w-1 rounded-full bg-blue-500 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                        }`}
                      />
                      <span className="text-2xl md:text-4xl font-semibold leading-[42px]">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right column */}
            <div className="rounded-2xl p-6 md:p-8 bg-[#FFFFFF17] h-[318px] backdrop-blur-sm ring-1 ring-white/10">
              <h3 className="text-white font-unbounded text-xl md:text-2xl">
                {activeItem.panelTitle}
              </h3>
              <p className="mt-4 text-white/85 font-sans leading-relaxed">
                {activeItem.panelBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


