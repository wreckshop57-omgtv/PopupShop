import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Devices } from "@/components/Devices";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-[#F5F5F7] text-[#1D1D1F] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Devices />
        <Process />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
