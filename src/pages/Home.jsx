import Hero from "../components/sections/home/Hero";
import Stats from "../components/sections/home/Stats";
import Feature24x7 from "../components/sections/home/Feature24x7";
import Steps from "../components/sections/home/Steps";
import EmpresaTeaser from "../components/sections/home/EmpresaTeaser";
import Testimoniales from "../components/sections/home/Testimonials";
import JoinDoctors from "../components/sections/home/JoinDoctors";
import CTA from "../components/sections/home/CTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Feature24x7 />
      <Steps />
      <EmpresaTeaser />
      <Testimoniales />
      <JoinDoctors />
      <CTA />
    </main>
  );
}
