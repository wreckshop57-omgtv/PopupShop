import { ShoppingBag, ShieldCheck, AlertCircle } from "lucide-react";

const PICK_ONE = [
  { id: "pick-lenovo", value: "Lenovo Laptop ($150)", label: "Lenovo Laptop", price: "$150" },
  { id: "pick-ipad", value: "iPad Air 5th Gen ($200)", label: "iPad Air 5th Gen", price: "$200" },
  { id: "pick-aio", value: "All-in-One Desktop ($250)", label: "All-in-One Desktop", price: "$250" },
];

const ADDONS = [
  { id: "addon-office", value: "Microsoft Office Suite +40", label: "Microsoft Office Suite", price: "+$40" },
  { id: "addon-storage", value: "512gb upgrade to 1tb +50", label: "512GB → 1TB Storage Upgrade", price: "+$50" },
  { id: "addon-case", value: "Kid-Friendly iPad Case +10", label: "Kid-Friendly iPad Case", price: "+$10" },
  { id: "addon-none", value: "None", label: "None", price: "" },
];

const DELIVERY = [
  { id: "del-pickup", value: "Pickup", label: "Pickup", price: "Free" },
  { id: "del-drop", value: "Drop-Off/Meetup up to 20 miles +20", label: "Drop-Off / Meetup (up to 20 mi)", price: "+$20" },
  { id: "del-ship", value: "Standard Shipping +30", label: "Standard Shipping", price: "+$30" },
];

const PAYMENT = [
  { id: "pay-zelle", value: "Zelle (713-447-2796)", label: "Zelle", detail: "713-447-2796" },
  { id: "pay-venmo", value: "Venmo (Adrian-Brown-109)", label: "Venmo", detail: "@Adrian-Brown-109" },
  { id: "pay-paypal", value: 'Paypal Invoice "Accepts Credit Cards"', label: "PayPal Invoice", detail: "Accepts credit cards" },
];

const fieldLabel =
  "text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1D1D1F]/70";

export const Order = () => {
  return (
    <section
      id="order"
      data-testid="order-section"
      className="relative bg-[#F5F5F7] py-24 sm:py-32 px-6 sm:px-10 overflow-hidden border-t border-[#D2D2D7]/60"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://static.prod-images.emergentagent.com/jobs/baaaec5f-9c2f-423e-9ec3-cb2363c3f9eb/images/1c1fe599f7138bde40713f16ed7adbba1860ddb632e8ff6d6bae2e2cb8901e51.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] via-[#F5F5F7]/85 to-[#F5F5F7]" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[#0071E3]">
            <ShoppingBag size={13} strokeWidth={2.25} />
            Place an order
          </div>
          <h2
            data-testid="order-headline"
            className="font-display mt-3 text-4xl sm:text-5xl tracking-tighter font-light text-[#1D1D1F]"
          >
            Lock in <span className="font-medium">your device.</span>
          </h2>
          <p className="mt-5 text-[#86868B] leading-relaxed max-w-md">
            Pick your device, choose any add-ons, select delivery, and send a
            $50 deposit to confirm. We'll invoice you the balance after we lock
            stock.
          </p>

          <div className="mt-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-5 space-y-4">
            <div className="flex items-start gap-3">
              <ShieldCheck size={18} className="mt-0.5 text-[#0071E3] shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-[13px] font-semibold text-[#1D1D1F]">$50 deposit required</div>
                <p className="text-[13px] text-[#86868B] leading-relaxed mt-0.5">
                  Invoice for the balance is sent right after your deposit clears.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="mt-0.5 text-[#E30000] shrink-0" strokeWidth={1.75} />
              <div>
                <div className="text-[13px] font-semibold text-[#1D1D1F]">No holds · All sales final</div>
                <p className="text-[13px] text-[#86868B] leading-relaxed mt-0.5">
                  iPads: minimum 2 in stock at a time. 30-day warranty included.
                  No cash or CashApp.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Form (preserves Response-O-Matic field names/values exactly) */}
        <form
          action="https://www.response-o-matic.com/mail.php"
          method="post"
          encType="multipart/form-data"
          acceptCharset="UTF-8"
          data-testid="order-form"
          className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-[#D2D2D7]/40"
        >
          <input type="hidden" name="acctid" id="acctid" value="y2bd5koy5x3ae8v5" />
          <input type="hidden" name="formid" id="formid" value="2006485" />
          <input
            type="hidden"
            name="required_vars"
            id="required_vars"
            value="name,email,field-2ba7cfea0ac1e34,field-660a387eab2dc41,field-deb22cf2c13d510,field-7d0b115689b716f"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={fieldLabel}>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                data-testid="order-input-name"
                placeholder="Your full name"
                className="mt-2 w-full h-11 rounded-xl border border-[#D2D2D7] bg-white px-3.5 text-[14px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className={fieldLabel}>Phone number</label>
              <input
                type="text"
                name="email"
                id="email"
                required
                data-testid="order-input-phone"
                placeholder="(###) ###-####"
                className="mt-2 w-full h-11 rounded-xl border border-[#D2D2D7] bg-white px-3.5 text-[14px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-shadow"
              />
            </div>
          </div>

          <FieldGroup title="Select one or all" testId="order-group-pick">
            {PICK_ONE.map((o, i) => (
              <OptionRow
                key={o.id}
                inputType="checkbox"
                name="field-2ba7cfea0ac1e34[]"
                id={`field-2ba7cfea0ac1e34_${i}`}
                value={o.value}
                label={o.label}
                price={o.price}
                testId={`order-pick-${o.id}`}
              />
            ))}
          </FieldGroup>

          <FieldGroup title="Add-ons" testId="order-group-addons">
            {ADDONS.map((o, i) => (
              <OptionRow
                key={o.id}
                inputType="checkbox"
                name="field-660a387eab2dc41[]"
                id={`field-660a387eab2dc41_${i}`}
                value={o.value}
                label={o.label}
                price={o.price}
                testId={`order-addon-${o.id}`}
              />
            ))}
          </FieldGroup>

          <FieldGroup title="Delivery options" testId="order-group-delivery">
            {DELIVERY.map((o, i) => (
              <OptionRow
                key={o.id}
                inputType="radio"
                name="field-deb22cf2c13d510"
                id={`field-deb22cf2c13d510_${i}`}
                value={o.value}
                label={o.label}
                price={o.price}
                testId={`order-delivery-${o.id}`}
              />
            ))}
          </FieldGroup>

          <FieldGroup
            title="Payment options"
            subtitle="No cash or CashApp."
            testId="order-group-payment"
          >
            {PAYMENT.map((o, i) => (
              <OptionRow
                key={o.id}
                inputType="radio"
                name="field-7d0b115689b716f"
                id={`field-7d0b115689b716f_${i}`}
                value={o.value}
                label={o.label}
                price={o.detail}
                priceClass="text-[#86868B] font-medium"
                testId={`order-payment-${o.id}`}
              />
            ))}
          </FieldGroup>

          <div className="mt-7">
            <label htmlFor="field-b7aa7ee51d3971b" className={fieldLabel}>Requests</label>
            <input
              type="text"
              name="field-b7aa7ee51d3971b"
              id="field-b7aa7ee51d3971b"
              data-testid="order-input-requests"
              placeholder="Anything specific? Notes for us…"
              className="mt-2 w-full h-11 rounded-xl border border-[#D2D2D7] bg-white px-3.5 text-[14px] text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#0071E3] focus:border-transparent transition-shadow"
            />
          </div>

          <div className="mt-8 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7]/50 p-5 text-[13px] leading-relaxed text-[#1D1D1F]/80 space-y-1">
            <p><strong className="text-[#1D1D1F]">$50 deposit required</strong> to process your order.</p>
            <p>Invoice will be sent to buyer after deposit.</p>
            <p>No holds. Limited quantity on iPads (min. 2).</p>
            <p>30-day warranty. <strong className="text-[#E30000]">**** All sales are final ****</strong></p>
          </div>

          <button
            type="submit"
            data-testid="order-submit-button"
            className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-[15px] font-medium px-6 py-3.5 transition-all duration-300 shadow-[0_8px_24px_-8px_rgba(0,113,227,0.6)]"
          >
            Submit Order
          </button>
          <p className="mt-3 text-xs text-[#86868B] text-center">
            By submitting you'll be directed to confirm your deposit.
          </p>
        </form>
      </div>
    </section>
  );
};

const FieldGroup = ({ title, subtitle, children, testId }) => (
  <fieldset className="mt-7" data-testid={testId}>
    <legend className={fieldLabel}>{title}</legend>
    {subtitle && <p className="mt-1 text-[12px] text-[#E30000] font-medium">{subtitle}</p>}
    <div className="mt-3 grid gap-2">{children}</div>
  </fieldset>
);

const OptionRow = ({
  inputType,
  name,
  id,
  value,
  label,
  price,
  priceClass = "text-[#0071E3] font-semibold",
  testId,
}) => (
  <label
    htmlFor={id}
    data-testid={testId}
    className="group flex items-center gap-3 rounded-xl border border-[#D2D2D7]/60 bg-white px-4 py-3 cursor-pointer hover:border-[#0071E3]/60 hover:bg-[#0071E3]/5 has-[:checked]:border-[#0071E3] has-[:checked]:bg-[#0071E3]/8 transition-colors"
  >
    <input
      type={inputType}
      name={name}
      id={id}
      value={value}
      className="h-4 w-4 accent-[#0071E3] cursor-pointer"
    />
    <span className="flex-1 text-[14px] text-[#1D1D1F]">{label}</span>
    {price && <span className={`text-[13px] ${priceClass}`}>{price}</span>}
  </label>
);
