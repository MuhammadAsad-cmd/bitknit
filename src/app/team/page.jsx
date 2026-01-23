import TeamClient from "./TeamClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: "Our Team | BitKnit Limited",
  description: "Meet the talented individuals behind BitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  keywords: [
    "Bitknit Team",
    "Development Team",
    "Design Team",
    "Software Engineers",
    "UI/UX Designers",
    "Digital Strategists",
    "Web Developers",
    "Mobile App Developers",
    "Team Members",
    "Bitknit Limited Team",
    "Expert Developers",
    "Creative Professionals",
  ],
  alternates: {
    canonical: `${siteUrl}/team`,
  },
  openGraph: {
    title: "Our Team | BitKnit Limited",
    description: "Meet the talented individuals behind BitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences.",
    url: `${siteUrl}/team`,
    siteName: "Bitknit",
    images: [
      {
        url: `${siteUrl}/images/metadata/team.png`,
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | BitKnit Limited",
    description: "Meet the talented individuals behind BitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences.",
    images: [`${siteUrl}/images/metadata/team.png`],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
