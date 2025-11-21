import { Outfit, Unbounded } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";

// add outfit font
//  add   font-family: "Unbounded", sans-serif; for the heading
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

export const metadata = {
  metadataBase: new URL("https://bitknitlimited.vercel.app"),
  title: {
    default: "Bitknit | Digital Agency for Paid Advertising & Web Development",
    template: "%s | Bitknit",
  },
  description:
    "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development. We help businesses grow through data-driven strategies.",
  openGraph: {
    title: "Bitknit | Digital Agency for Paid Advertising & Web Development",
    description:
      "Bitknit is a premier digital agency specializing in paid advertising, business automation, and custom web design and development.",
    url: "https://bitknitlimited.vercel.app",
    siteName: "Bitknit",
    images: [
      {
        url: "/images/metadata/homepage.png",
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
    images: ["/images/metadata/homepage.png"],
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
