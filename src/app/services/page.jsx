import ServicesClient from "./ServicesClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: "Our Services | BitKnit Limited",
  description: "From concept to deployment, we deliver end-to-end digital solutions including web development, mobile apps, UI/UX design, and cloud strategies.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  keywords: [
    "Web Development Services",
    "Mobile App Development",
    "UI/UX Design Services",
    "Custom Software Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "E-commerce Development",
    "Digital Marketing Services",
    "Business Automation",
    "Consulting & Strategy",
    "Bitknit Services",
    "Software Solutions",
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Our Services | BitKnit Limited",
    description: "From concept to deployment, we deliver end-to-end digital solutions including web development, mobile apps, UI/UX design, and cloud strategies.",
    url: `${siteUrl}/services`,
    siteName: "Bitknit",
    images: [
      {
        url: `${siteUrl}/images/metadata/services.png`,
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | BitKnit Limited",
    description: "From concept to deployment, we deliver end-to-end digital solutions including web development, mobile apps, UI/UX design, and cloud strategies.",
    images: [`${siteUrl}/images/metadata/services.png`],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
