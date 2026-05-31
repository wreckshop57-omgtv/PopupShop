import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { CheckCircle2, RotateCw } from "lucide-react";

export const Devices = () => {
  const [flipped, setFlipped] = useState({});

  const toggle = (id) => setFlipped((f) => ({ ...f, [id]: !f[id] }));

  return (
    <section
      id="devices"
      data-testid="devices-section"
      className="bg-[#F5F5F7] py-24 sm:py-32 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
              Featured Devices
            </div>
            <h2
              data-testid="devices-headline"
              className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
            >
              This week's <span className="font-medium">inventory.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="max-w-sm text-[#86868B] leading-relaxed text-[14px]">
              Hover any device to flip and reveal price + specs.
            </p>
            <a
              href="#order"
              data-testid="devices-order-cta"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] hover:bg-black text-white text-[13px] font-medium px-4 py-2.5 transition-colors whitespace-nowrap"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              data-testid={`product-card-${p.id}`}
              className={`flip-card ${flipped[p.id] ? "is-flipped" : ""} h-[460px] sm:h-[480px]`}
            >
              <div className="flip-inner rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                {/* FRONT — image */}
                <div className="flip-face bg-white rounded-3xl overflow-hidden flex flex-col">
                  <div className="relative flex-1 bg-[#F5F5F7] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      data-testid={`product-quantity-${p.id}`}
                      className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-[#E30000] bg-white/95 backdrop-blur px-2.5 py-1 rounded-full border border-[#E30000]/15"
                    >
                      {p.quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggle(p.id)}
                      data-testid={`product-flip-${p.id}`}
                      aria-label={`Show specs for ${p.name}`}
                      className="md:hidden absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-white/95 backdrop-blur border border-[#D2D2D7]/60 text-[#1D1D1F] active:scale-95 transition-transform"
                    >
                      <RotateCw size={15} strokeWidth={1.75} />
                    </button>
                  </div>
                  <div className="p-6 sm:p-7 border-t border-[#D2D2D7]/40">
                    <h3 className="font-display text-xl sm:text-2xl tracking-tight font-medium text-[#1D1D1F]">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-[#86868B] text-[14px] leading-relaxed">
                      {p.tagline}
                    </p>
                    <div className="mt-4 hidden md:flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#0071E3]">
                      <RotateCw size={11} strokeWidth={2.25} />
                      Hover to see price & specs
                    </div>
                  </div>
                </div>

                {/* BACK — price + specs */}
                <div
                  data-testid={`product-back-${p.id}`}
                  className="flip-face flip-back bg-[#1D1D1F] text-white rounded-3xl p-7 sm:p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/50">
                        {p.condition}
                      </div>
                      <h3 className="mt-3 font-display text-2xl sm:text-3xl tracking-tighter font-medium">
                        {p.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggle(p.id)}
                      data-testid={`product-flip-back-${p.id}`}
                      aria-label={`Hide specs for ${p.name}`}
                      className="md:hidden w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition-all text-white"
                    >
                      <RotateCw size={15} strokeWidth={1.75} />
                    </button>
                  </div>

                  <div className="mt-7">
                    <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/40">
                      Pop-up price
                    </div>
                    <div
                      data-testid={`product-price-${p.id}`}
                      className="mt-2 font-display text-4xl sm:text-5xl tracking-tighter font-light"
                    >
                      {p.startingPrice}
                    </div>
                  </div>

                  <ul className="mt-7 space-y-2.5 flex-1">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[14px] text-white/85 leading-relaxed">
                        <CheckCircle2 size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-[#0071E3]" />
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#E30000]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E30000] animate-pulse" />
                      While supplies last
                    </span>
                    <a
                      href="#order"
                      data-testid={`product-order-${p.id}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-white/90 text-[#1D1D1F] text-[12px] font-semibold px-3.5 py-1.5 transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
