import Herosection from "@/components/Herosection";
import Projects from "../components/Projects";
import Campaign from "../components/Campaign";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Services from "../components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

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
