import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "Our Portfolio | BitKnit Limited",
  description: "Explore our collection of successful projects. From e-commerce platforms to enterprise software, see how we help businesses innovate and grow.",
  openGraph: {
    title: "Our Portfolio | BitKnit Limited",
    description: "Explore our collection of successful projects. From e-commerce platforms to enterprise software, see how we help businesses innovate and grow.",
    images: [
      {
        url: "/images/metadata/projects.png",
        width: 1200,
        height: 630,
        alt: "BitKnit Limited Portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
