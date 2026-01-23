import Herosection from "@/components/Herosection";
import Projects from "../components/Projects";
import Campaign from "../components/Campaign";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: "Bitknit | Digital Agency for Paid Advertising & Web Development",
  description:
    "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development. We help businesses grow through data-driven strategies.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  keywords: [
    "Digital Agency",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Paid Advertising",
    "Business Automation",
    "Custom Software Development",
    "Next.js",
    "React.js",
    "Flutter",
    "Node.js",
    "E-commerce Solutions",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Bitknit",
    "Bitknit Limited",
    "Digital Marketing",
    "Web Design",
    "Software Development",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Bitknit | Digital Agency for Paid Advertising & Web Development",
    description:
      "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development. We help businesses grow through data-driven strategies.",
    url: siteUrl,
    siteName: "Bitknit",
    images: [
      {
        url: `${siteUrl}/images/metadata/homepage.png`,
        width: 1200,
        height: 630,
        alt: "Bitknit Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitknit | Digital Agency for Paid Advertising & Web Development",
    description:
      "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development.",
    images: [`${siteUrl}/images/metadata/homepage.png`],
  },
};

export default function Home() {
  return (
    <>
      <Herosection />
      <Campaign />
      <Process />
      <Projects/>
      <Services />
      <Clients />
      <Testimonials />
      <CTA />
    </>
  );
}
