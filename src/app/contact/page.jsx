import ContactClient from "./ContactClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: "Contact Us | BitKnit Limited",
  description: "Get in touch with BitKnit Limited. Whether you have a project in mind or want to learn more about our services, we're here to help.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  keywords: [
    "Contact Bitknit",
    "Get in Touch",
    "Digital Agency Contact",
    "Web Development Inquiry",
    "Project Consultation",
    "Business Inquiry",
    "Bitknit Contact",
    "Contact Form",
    "Free Consultation",
    "Digital Solutions",
    "Software Development Contact",
    "Hire Developers",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Us | BitKnit Limited",
    description: "Get in touch with BitKnit Limited. Whether you have a project in mind or want to learn more about our services, we're here to help.",
    url: `${siteUrl}/contact`,
    siteName: "Bitknit",
    images: [
      {
        url: `${siteUrl}/images/metadata/contact.png`,
        width: 1200,
        height: 630,
        alt: "Contact BitKnit Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | BitKnit Limited",
    description: "Get in touch with BitKnit Limited. Whether you have a project in mind or want to learn more about our services, we're here to help.",
    images: [`${siteUrl}/images/metadata/contact.png`],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
