import ProjectsClient from "./ProjectsClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: "Our Portfolio | BitKnit Limited",
  description: "Explore our collection of successful projects. From e-commerce platforms to enterprise software, see how we help businesses innovate and grow.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  keywords: [
    "Portfolio",
    "Projects",
    "Case Studies",
    "Web Development Projects",
    "Mobile App Projects",
    "E-commerce Solutions",
    "Enterprise Software",
    "Digital Solutions",
    "Bitknit Portfolio",
    "Bitknit Projects",
    "Web Design Portfolio",
    "Software Development",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Our Portfolio | BitKnit Limited",
    description: "Explore our collection of successful projects. From e-commerce platforms to enterprise software, see how we help businesses innovate and grow.",
    url: `${siteUrl}/projects`,
    siteName: "Bitknit",
    images: [
      {
        url: `${siteUrl}/images/metadata/projects.png`,
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | BitKnit Limited",
    description: "Explore our collection of successful projects. From e-commerce platforms to enterprise software, see how we help businesses innovate and grow.",
    images: [`${siteUrl}/images/metadata/projects.png`],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
