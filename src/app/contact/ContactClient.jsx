import React from "react";
import PageHero from "@/components/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import FAQ from "@/components/FAQ";

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can help bring your vision to life. We're here to answer your questions and explore opportunities."
        badge="Contact Us"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <AnimateIn type="fade-right" delay={0.1}>
              <div>
                <h2 className="font-unbounded text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  Whether you have a question about our services, pricing, or just
                  want to say hello, we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Email</h3>
                      <a
                        href="mailto:info@bitknitlimited.com"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
                      >
                        info@bitknitlimited.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">Phone</h3>
                      <a
                        href="tel:+923070175479"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
                      >
                        +92 307 0175479
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-semibold text-zinc-900 mb-1">
                        Location
                      </h3>
                      <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
                        {/* Company Name Box - Top Left Overlay */}
                        <div className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-lg px-4 py-3 border border-zinc-200/50">
                          <h3 className="font-semibold text-zinc-900 mb-1">
                            BitKnit Limited
                          </h3>
                          <a
                            href="https://maps.app.goo.gl/i3jgwbbdomLrXkpU8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
                          >
                            View larger map
                          </a>
                        </div>

                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.685243293583!2d71.477528!3d30.157000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA5JzI1LjIiTiA3McKwMjgnMzkuMSJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                          width="100%"
                          height="350"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full"
                          title="BitKnit Limited Location - 6FJP+P9R, Nasheman Colony Main Rd, Multan, Pakistan"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Contact Form */}
            <AnimateIn type="fade-left" delay={0.2}>
              <div className="bg-zinc-50 rounded-3xl p-8 md:p-10">
                <h3 className="font-unbounded text-2xl md:text-3xl font-bold text-zinc-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  );
}
