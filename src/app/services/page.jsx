import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Our Services | BitKnit Limited",
  description: "From concept to deployment, we deliver end-to-end digital solutions including web development, mobile apps, UI/UX design, and cloud strategies.",
  openGraph: {
    title: "Our Services | BitKnit Limited",
    description: "From concept to deployment, we deliver end-to-end digital solutions including web development, mobile apps, UI/UX design, and cloud strategies.",
    images: [
      {
        url: "/images/metadata/services.png",
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
