"use client";

import React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is the typical turnaround time for website development projects?",
    answer: "Our typical turnaround time ranges from 1-2 week, depending on the project's complexity.",
  },
  {
    id: 2,
    question: "Do you provide ongoing support and maintenance for websites after launch?",
    answer:
      "Yes, we offer comprehensive ongoing support and maintenance packages to ensure your website remains secure, up-to-date, and performing optimally after launch.",
  },
  {
    id: 3,
    question: "Can you assist with search engine optimization to improve our website's visibility?",
    answer:
      "Absolutely. We provide SEO services including technical optimization, content strategy, keyword research, and ongoing performance monitoring to improve your search rankings.",
  },
  {
    id: 4,
    question: "Do you develop e-commerce websites?",
    answer:
      "Yes, we specialize in building custom e-commerce solutions with secure payment gateways, inventory management, and conversion-optimized checkout flows.",
  },
  {
    id: 5,
    question: "What digital marketing services do you offer?",
    answer:
      "We offer a full suite of digital marketing services including paid media campaigns, SEO, content marketing, social media management, email marketing, and analytics.",
  },
];

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left py-5 md:py-6 flex items-start justify-between gap-4 group cursor-pointer"
      >
        <span className="font-semibold text-zinc-900 text-base md:text-lg leading-snug pr-4">
          {faq.question}
        </span>
        <span
          className={`shrink-0 text-2xl font-light transition-transform ease-in-out duration-300 ${
            isOpen ? "text-blue-600" : "text-zinc-400"
          }`}
        >
          {/* use lucide plus and minus icon */}
          {isOpen ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-5 md:pb-6 pr-12 text-zinc-600 leading-relaxed text-sm md:text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = React.useState(faqs[0].id);

  return (
    <section className="pb-16 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Sticky */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-unbounded text-4xl md:text-[48px] leading-[50px] font-bold text-zinc-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Unlock a world of design potential with We grow. Our membership comes with the promise of endless
              creativity and dedicated support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 border-2 border-transparent hover:bg-transparent hover:border-blue-600 hover:text-blue-600 text-white cursor-pointer font-medium px-8 py-3 rounded-full transition-colors duration-200">
                EXPLORE SERVICES
              </button>
              <button className="text-blue-600 cursor-pointer font-medium px-8 py-3 rounded-full transition-colors duration-200 inline-flex items-center justify-center gap-2">
                EXPLORE MORE
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-6 md:p-8">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

