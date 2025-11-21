import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | BitKnit Limited",
  description: "Get in touch with BitKnit Limited. Whether you have a project in mind or want to learn more about our services, we're here to help.",
  openGraph: {
    title: "Contact Us | BitKnit Limited",
    description: "Get in touch with BitKnit Limited. Whether you have a project in mind or want to learn more about our services, we're here to help.",
    images: [
      {
        url: "/images/metadata/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact BitKnit Limited",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
