import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden bg-[#F5F5F7]"
    >
      {/* Decorative glass background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 mix-blend-luminosity"
        style={{
          backgroundImage:
            "url('https://static.prod-images.emergentagent.com/jobs/baaaec5f-9c2f-423e-9ec3-cb2363c3f9eb/images/6f5ca1baa902fdfae489c8bed7187a911d2b3309e6319528c3aa12ea94cb5bfe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-[#F5F5F7]"
      />
      {/* soft blue glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, #0071E3, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-20 sm:pt-28 pb-24 sm:pb-36">
        <div className="flex flex-col items-center text-center">
          <div
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-[#D2D2D7]/60 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0071E3]"
          >
            <Sparkles size={12} strokeWidth={2.25} />
            Limited-time pop-up
          </div>

          <h1
            data-testid="hero-headline"
            className="mt-8 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[0.95] tracking-tighter font-light text-[#1D1D1F]"
          >
            OMGTech
            <br />
            <span className="font-medium">Pop-Up Shop.</span>
          </h1>

          <p
            data-testid="hero-subheadline"
            className="mt-6 max-w-2xl text-lg sm:text-xl text-[#86868B] leading-relaxed font-light"
          >
            Limited-time deals on iPads, Lenovo laptops, and All-in-One PCs.
            <br className="hidden sm:block" />
            Available only while inventory lasts.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#devices"
              data-testid="hero-cta-view-devices"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-[15px] font-medium px-6 py-3.5 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,113,227,0.6)]"
            >
              View Available Devices
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#faq"
              data-testid="hero-cta-faq"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8E8ED] hover:bg-[#D2D2D7] text-[#1D1D1F] text-[15px] font-medium px-6 py-3.5 transition-colors"
            >
              How it works
            </a>
          </div>

          <p
            data-testid="hero-urgency"
            className="mt-8 text-sm font-semibold tracking-wide text-[#E30000]"
          >
            Once they're gone, they're gone.
          </p>
        </div>

        {/* marquee strip */}
        <div className="mt-16 sm:mt-24 overflow-hidden border-y border-[#D2D2D7]/60 py-5">
          <div className="marquee-track flex gap-12 whitespace-nowrap text-[12px] uppercase tracking-[0.25em] text-[#86868B] font-medium w-max">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12">
                <span>iPad · Lenovo ThinkPad · All-in-One PCs</span>
                <span aria-hidden>•</span>
                <span>First come · First served</span>
                <span aria-hidden>•</span>
                <span>No restocks guaranteed</span>
                <span aria-hidden>•</span>
                <span>Local pickup available</span>
                <span aria-hidden>•</span>
                <span>Tested · Cleaned · Reset</span>
                <span aria-hidden>•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
