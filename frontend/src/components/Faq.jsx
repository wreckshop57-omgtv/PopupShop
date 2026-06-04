import { FAQ } from "@/lib/products";
import { Ghost } from "@/components/Ghost";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="bg-white py-24 sm:py-32 px-6 sm:px-10 border-t border-[#D2D2D7]/60"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
          Frequently asked
        </div>
        <h2
          data-testid="faq-headline"
          className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
        >
          The pop-up, <span className="font-medium">explained.</span>
        </h2>

        <Accordion
          type="single"
          collapsible
          className="mt-12 w-full"
          data-testid="faq-accordion"
        >
          {FAQ.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              data-testid={`faq-item-${idx}`}
              className="border-b border-[#D2D2D7]/60 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-display text-lg sm:text-xl font-medium text-[#1D1D1F] hover:no-underline py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] text-[#86868B] leading-relaxed pb-7 pr-8">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
