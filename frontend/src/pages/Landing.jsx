import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Devices } from "@/components/Devices";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-[#F5F5F7] text-[#1D1D1F] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Devices />
        <Trust />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
