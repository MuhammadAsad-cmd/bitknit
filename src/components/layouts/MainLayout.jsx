"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
      
      {/* Floating Scroll to Top Button - Left Side */}
      <ScrollToTop />
      
      {/* Floating WhatsApp Button - Right Side */}
      <FloatingWhatsApp
        phoneNumber="923070175479"
        accountName="BitKnit Limited"
        avatar="/images/logo 1.png"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! 👋 How can we help you today?"
        placeholder="Type a message..."
        allowClickAway={true}
        notification={true}
        notificationSound={true}
        className="z-40"
        // style={{
        //   position: "fixed",
        //   bottom: "24px",
        //   right: "24px",
        //   zIndex: 40,
        // }}
      />
    </div>
  );
}
