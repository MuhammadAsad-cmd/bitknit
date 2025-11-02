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
  title: "Bitknit | Nit",
  description: "BitknitNit is a digital agency that specializes in paid advertising, automation, web design and development.",
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
