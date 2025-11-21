import TeamClient from "./TeamClient";

export const metadata = {
  title: "Our Team | BitKnit Limited",
  description: "Meet the talented individuals behind BitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences.",
  openGraph: {
    title: "Our Team | BitKnit Limited",
    description: "Meet the talented individuals behind BitKnit. We're a diverse team of designers, developers, and strategists passionate about creating exceptional digital experiences.",
    images: [
      {
        url: "/images/metadata/team.png",
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Team",
      },
    ],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
