import Herosection from "@/components/Herosection";
import Projects from "../components/Projects";
import Capabilities from "../components/Capabilities";
import Campaign from "../components/Campaign";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Clients from "../components/Clients";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Herosection />
      <Campaign />
      <Capabilities />
      <Projects/>
      <Testimonials />
      <Clients />
      <Services />
      <FAQ />
    </>
  );
}
