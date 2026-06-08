import { useState, useRef } from "react";
import { PRODUCTS } from "@/lib/products";
import { CheckCircle2, RotateCw, ArrowRight } from "lucide-react";

const FACE_DELAY = 1100; // ms hover before advancing to face 3

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
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="max-w-sm text-[#86868B] leading-relaxed text-[14px]">
              Hover any card — first flip reveals retail price, second flip drops the pop-up price.
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
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product: p }) => {
  // face: 0 = image, 1 = retail price, 2 = pop-up price + specs
  const [face, setFace] = useState(0);
  const timerRef = useRef(null);

  const startSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setFace(1);
    timerRef.current = setTimeout(() => setFace(2), FACE_DELAY);
  };
  const resetSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setFace(0);
  };
  const cycle = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setFace((f) => (f + 1) % 3);
  };

  // Container rotation per face state
  const rotateDeg = face === 0 ? 0 : face === 1 ? 180 : 360;

  return (
    <article
      data-testid={`product-card-${p.id}`}
      data-face={face}
      onMouseEnter={startSequence}
      onMouseLeave={resetSequence}
      className="flip-card h-[460px] sm:h-[480px]"
    >
      <div
        className="flip-inner rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
        style={{ transform: `rotateY(${rotateDeg}deg)` }}
      >
        {/* FRONT face — swaps between image (face 0) and pop-up price (face 2) */}
        <div className="flip-face rounded-3xl overflow-hidden">
          {/* Image layer */}
          <div
            className={`absolute inset-0 bg-white flex flex-col transition-opacity duration-200 ${
              face === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="relative flex-1 bg-[#F5F5F7] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain p-4 bg-white"
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
                onClick={cycle}
                data-testid={`product-flip-${p.id}`}
                aria-label={`Reveal price for ${p.name}`}
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
                Hover to flip
              </div>
            </div>
          </div>

          {/* Pop-up price layer (face 2 — same Y orientation as image after 360° rotation) */}
          <div
            data-testid={`product-popup-${p.id}`}
            className={`absolute inset-0 bg-[#1D1D1F] text-white rounded-3xl p-7 sm:p-8 flex flex-col transition-opacity duration-200 ${
              face === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
                  Pop-up price
                </div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl tracking-tighter font-medium">
                  {p.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={cycle}
                data-testid={`product-flip-back-${p.id}`}
                aria-label="Cycle card"
                className="md:hidden w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition-all text-white"
              >
                <RotateCw size={15} strokeWidth={1.75} />
              </button>
            </div>

            <div className="mt-6">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white/40">
                Retail
              </div>
              <div className="mt-1 font-display text-lg font-light text-white/45 line-through">
                {p.retailPrice}
              </div>
              <div
                data-testid={`product-price-${p.id}`}
                className="mt-2 font-display text-4xl sm:text-5xl tracking-tighter font-light"
              >
                {p.startingPrice}
              </div>
            </div>

            <ul className="mt-5 space-y-2 flex-1">
              {p.specs.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-[13px] text-white/85 leading-relaxed">
                  <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#0071E3]" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#E30000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E30000] animate-pulse" />
                While supplies last
              </span>
              <a
                href="#order"
                data-testid={`product-order-${p.id}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-white/90 text-[#1D1D1F] text-[12px] font-semibold px-3.5 py-1.5 transition-colors"
              >
                Order
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* BACK face — retail price (face 1, visible when container is at 180°) */}
        <div
          data-testid={`product-retail-${p.id}`}
          className="flip-face flip-back bg-gradient-to-br from-[#F5F5F7] to-[#E8E8ED] rounded-3xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#86868B]">
              Retail price
            </div>
            <h3 className="mt-2 font-display text-xl tracking-tight font-medium text-[#1D1D1F]/70">
              {p.name}
            </h3>
          </div>

          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#86868B]">
              What it normally costs
            </div>
            <div
              data-testid={`product-retail-price-${p.id}`}
              className="mt-3 font-display text-6xl sm:text-7xl tracking-tighter font-light text-[#1D1D1F]"
            >
              {p.retailPrice}
            </div>
            <div className="mt-3 text-[13px] text-[#86868B]">brand-new retail</div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-3.5 py-1.5">
              Keep hovering for pop-up price
              <ArrowRight size={11} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
