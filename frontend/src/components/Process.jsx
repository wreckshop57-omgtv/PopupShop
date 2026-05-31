import { STEPS } from "@/lib/products";
import { Search, FileText, CheckCircle2, Handshake } from "lucide-react";

const ICONS = [Search, FileText, CheckCircle2, Handshake];

export const Process = () => {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="bg-white py-24 sm:py-32 px-6 sm:px-10 border-y border-[#D2D2D7]/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
            How it works
          </div>
          <h2
            data-testid="process-headline"
            className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
          >
            Four steps. No <span className="font-medium">friction.</span>
          </h2>
          <p className="mt-4 text-[#86868B] leading-relaxed">
            We keep it simple — built for a fast-moving pop-up.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={s.n}
                data-testid={`process-step-${i + 1}`}
                className="relative bg-[#F5F5F7] rounded-3xl p-7 hover:bg-[#EDEDF0] transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-white grid place-items-center shadow-sm">
                    <Icon size={18} strokeWidth={1.75} className="text-[#0071E3]" />
                  </div>
                  <span className="font-display text-3xl font-light text-[#1D1D1F]/15">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-lg font-medium text-[#1D1D1F] tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] text-[#86868B] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
