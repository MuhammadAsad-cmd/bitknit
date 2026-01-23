import { Outfit, Unbounded } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400","500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bitknitlimited.com";

export const metadata = {
  title: {
    default: "Bitknit | Digital Agency for Paid Advertising & Web Development",
    template: "%s | Bitknit",
  },
  description:
    "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development. We help businesses grow through data-driven strategies.",
  authors: [{ name: "Bitknit Limited" }],
  creator: "Bitknit Limited",
  publisher: "Bitknit Limited",
  applicationName: "Bitknit | Digital Agency",
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
  metadataBase: new URL(siteUrl),
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
  other: {
    "linkedin:company": "https://www.linkedin.com/company/bitknit-limited/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${unbounded.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
