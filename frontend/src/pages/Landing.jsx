import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Devices } from "@/components/Devices";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="bg-[#F5F5F7] text-[#1D1D1F] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Devices />
        <OrderCtaBanner />
        <Trust />
        <Faq />
        <Order />
      </main>
      <Footer />

      {/* Mobile floating Order Now */}
      <a
        href="#order"
        data-testid="floating-order-cta"
        className="md:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-1.5 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-[14px] font-medium px-5 py-3 shadow-[0_10px_30px_-8px_rgba(0,113,227,0.7)] transition-colors"
      >
        Order Now
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

const OrderCtaBanner = () => (
  <section
    data-testid="order-cta-banner"
    className="bg-[#1D1D1F] text-white px-6 sm:px-10 py-16 sm:py-20"
  >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E30000]">
          Limited inventory
        </div>
        <h3 className="font-display mt-3 text-3xl sm:text-4xl tracking-tighter font-light leading-tight">
          See something you want? <span className="font-medium">Lock it in.</span>
        </h3>
        <p className="mt-3 text-white/65 leading-relaxed">
          $50 deposit reserves your device. No holds, no waitlist, no restocks.
        </p>
      </div>
      <a
        href="#order"
        data-testid="banner-order-cta"
        className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-white/90 text-[#1D1D1F] text-[15px] font-medium px-6 py-3.5 transition-colors whitespace-nowrap"
      >
        Order Now
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  </section>
);
