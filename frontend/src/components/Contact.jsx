import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

const DEVICE_OPTIONS = [
  "Apple iPad",
  "Lenovo ThinkPad",
  "Lenovo All-in-One PC",
  "Not sure yet — recommend something",
];

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    device: "",
    quantity: "1",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setForm((f) => ({ ...f, device: e.detail }));
      // Scroll to contact and focus the form
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("prefill-device", handler);
    return () => window.removeEventListener("prefill-device", handler);
  }, []);

  const onChange = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.device) {
      toast.error("Please fill in your name, email, and the device you're interested in.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Request received. We'll confirm availability shortly.", {
      description: "Keep an eye on your inbox — devices move fast.",
    });
    setForm({ name: "", email: "", phone: "", device: "", quantity: "1", message: "" });
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#F5F5F7] py-24 sm:py-32 px-6 sm:px-10 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://static.prod-images.emergentagent.com/jobs/baaaec5f-9c2f-423e-9ec3-cb2363c3f9eb/images/1c1fe599f7138bde40713f16ed7adbba1860ddb632e8ff6d6bae2e2cb8901e51.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] via-[#F5F5F7]/85 to-[#F5F5F7]" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
            Check availability
          </div>
          <h2
            data-testid="contact-headline"
            className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
          >
            Tell us what <br />you're <span className="font-medium">after.</span>
          </h2>
          <p className="mt-5 text-[#86868B] leading-relaxed max-w-md">
            Send a quick request — we'll confirm what's actually in stock, lock the
            device for you, and walk you through pickup.
          </p>

          <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-5">
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E30000]">
              Limited inventory
            </div>
            <p className="mt-2 text-[14px] text-[#1D1D1F]/80 leading-relaxed">
              First come, first served. No reservations beyond a short
              confirmation window. Once they're gone, they're gone.
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-testid="contact-form"
          className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-[#D2D2D7]/40"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" htmlFor="name">
              <Input
                id="name"
                data-testid="form-input-name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Your full name"
                className="h-11 rounded-xl border-[#D2D2D7] focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input
                id="email"
                type="email"
                data-testid="form-input-email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="you@example.com"
                className="h-11 rounded-xl border-[#D2D2D7] focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              />
            </Field>
            <Field label="Phone" htmlFor="phone">
              <Input
                id="phone"
                type="tel"
                data-testid="form-input-phone"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="Optional"
                className="h-11 rounded-xl border-[#D2D2D7] focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              />
            </Field>
            <Field label="Quantity wanted" htmlFor="quantity">
              <Input
                id="quantity"
                type="number"
                min="1"
                data-testid="form-input-quantity"
                value={form.quantity}
                onChange={onChange("quantity")}
                className="h-11 rounded-xl border-[#D2D2D7] focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Device interested in" htmlFor="device">
                <Select value={form.device} onValueChange={(v) => onChange("device")(v)}>
                  <SelectTrigger
                    id="device"
                    data-testid="form-device-trigger"
                    className="h-11 rounded-xl border-[#D2D2D7] focus:ring-2 focus:ring-[#0071E3]"
                  >
                    <SelectValue placeholder="Select a device" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEVICE_OPTIONS.map((d) => (
                      <SelectItem
                        key={d}
                        value={d}
                        data-testid={`form-device-option-${d.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Message" htmlFor="message">
                <Textarea
                  id="message"
                  data-testid="form-input-message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Anything specific you need? Budget, specs, pickup area…"
                  rows={4}
                  className="rounded-xl border-[#D2D2D7] focus-visible:ring-2 focus-visible:ring-[#0071E3] resize-none"
                />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            data-testid="form-submit-button"
            className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] disabled:opacity-70 text-white text-[15px] font-medium px-6 py-3.5 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,113,227,0.6)]"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Check Availability
                <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="mt-4 text-xs text-[#86868B] text-center">
            By submitting you agree to be contacted about your request. No spam, no upsells.
          </p>
        </form>
      </div>
    </section>
  );
};

const Field = ({ label, htmlFor, children }) => (
  <div>
    <Label
      htmlFor={htmlFor}
      className="text-[12px] uppercase tracking-[0.15em] font-semibold text-[#1D1D1F]/70"
    >
      {label}
    </Label>
    <div className="mt-2">{children}</div>
  </div>
);
