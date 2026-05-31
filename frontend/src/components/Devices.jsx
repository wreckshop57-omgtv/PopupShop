import { PRODUCTS } from "@/lib/products";
import { CheckCircle2 } from "lucide-react";

export const Devices = () => {
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
          <p className="max-w-md text-[#86868B] leading-relaxed">
            Three pop-up categories. Real units. Real pricing.
            When the count hits zero, the pop-up moves on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              data-testid={`product-card-${p.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[#F5F5F7] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  data-testid={`product-quantity-${p.id}`}
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-[#E30000] bg-white/95 backdrop-blur px-2.5 py-1 rounded-full border border-[#E30000]/15"
                >
                  {p.quantity}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl tracking-tight font-medium text-[#1D1D1F]">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-[#86868B] text-[14px] leading-relaxed">
                  {p.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-2">
                  <span
                    data-testid={`product-price-${p.id}`}
                    className="font-display text-xl font-medium text-[#1D1D1F]"
                  >
                    {p.startingPrice}
                  </span>
                </div>

                <ul className="mt-5 space-y-2">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-[13px] text-[#1D1D1F]/80">
                      <CheckCircle2 size={14} strokeWidth={2} className="text-[#0071E3]" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between pt-5 border-t border-[#D2D2D7]/60">
                  <span
                    data-testid={`product-condition-${p.id}`}
                    className="text-[12px] uppercase tracking-wider text-[#86868B] font-medium"
                  >
                    {p.condition}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[#E30000]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E30000]" />
                    While supplies last
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
