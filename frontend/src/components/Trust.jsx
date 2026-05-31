import { TRUST_POINTS } from "@/lib/products";
import { ShieldCheck, Sparkles, Tag, MapPin, Layers, Zap } from "lucide-react";

const ICONS = { ShieldCheck, Sparkles, Tag, MapPin, Layers, Zap };

export const Trust = () => {
  return (
    <section
      id="trust"
      data-testid="trust-section"
      className="bg-[#F5F5F7] py-24 sm:py-32 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
              Why buy from OMGTech
            </div>
            <h2
              data-testid="trust-headline"
              className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
            >
              Pop-up pricing. <span className="font-medium">Real standards.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[#86868B] leading-relaxed">
            We don't list anything we wouldn't sell to a friend. Every unit is checked, wiped and priced fairly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRUST_POINTS.map((t) => {
            const Icon = ICONS[t.icon] || ShieldCheck;
            return (
              <div
                key={t.title}
                data-testid={`trust-point-${t.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-white rounded-3xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#0071E3]/10 grid place-items-center">
                  <Icon size={20} strokeWidth={1.75} className="text-[#0071E3]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-medium text-[#1D1D1F]">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-[#86868B] leading-relaxed">
                  {t.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
