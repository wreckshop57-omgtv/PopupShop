export const PRODUCTS = [
  {
    id: "ipad",
    name: "Apple iPad",
    tagline: "Versatile. Lightweight. Ready to go.",
    image:
      "https://images.unsplash.com/photo-1513348313239-6ccc6c25c11b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxhcHBsZSUyMGlwYWQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzgwMjA4MzgzfDA&ixlib=rb-4.1.0&q=85",
    startingPrice: "Starting at $XXX",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: ["Wi-Fi enabled", "Cleaned & reset", "Battery tested"],
  },
  {
    id: "lenovo-laptop",
    name: "Lenovo ThinkPad",
    tagline: "Business-class power, pop-up pricing.",
    image:
      "https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    startingPrice: "Starting at $XXX",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: ["Intel processor", "SSD storage", "Windows ready"],
  },
  {
    id: "aio-pc",
    name: "Lenovo All-in-One PC",
    tagline: "Clean desk. Clean setup. One unit.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVza3RvcCUyMHBjJTIwbW9uaXRvcnxlbnwwfHx8fDE3ODAyMDgzODN8MA&ixlib=rb-4.1.0&q=85",
    startingPrice: "Starting at $XXX",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: ["Integrated display", "Keyboard & mouse", "Plug-and-play"],
  },
];

export const FAQ = [
  {
    q: "Is this a permanent store?",
    a: "No. OMGTech Pop-Up Shop is a limited-time inventory event. Once devices are gone, the pop-up closes — there's no permanent storefront and no restocks guaranteed.",
  },
  {
    q: "How long will inventory be available?",
    a: "Only until current inventory is gone. First come, first served. We don't hold reservations and we don't guarantee restocks, so we recommend acting quickly on any device you're interested in.",
  },
  {
    q: "Are devices tested?",
    a: "Yes. Every device is powered on, performance-checked, cleaned, and fully factory-reset before being listed. We don't sell anything we haven't personally verified.",
  },
  {
    q: "Do devices come with chargers?",
    a: "Most devices ship with a compatible charger. If a specific device is missing accessories, we'll note it clearly when we confirm availability with you.",
  },
  {
    q: "Can I reserve a device?",
    a: "We don't hold reservations beyond a short confirmation window. Once we confirm availability and pickup details, we'll lock the device for you while you arrange payment.",
  },
  {
    q: "Can I buy multiple devices?",
    a: "Absolutely. Bulk deals are available — schools, small businesses, and resellers welcome. Mention the quantity in your request and we'll put together a bundle quote.",
  },
];

export const TRUST_POINTS = [
  { icon: "ShieldCheck", title: "Tested Devices", desc: "Every unit powered on and performance-checked before listing." },
  { icon: "Sparkles", title: "Cleaned & Reset", desc: "Factory-reset, wiped, and physically cleaned for the next owner." },
  { icon: "Tag", title: "Budget-Friendly Pricing", desc: "Pop-up pricing — significantly below new retail." },
  { icon: "MapPin", title: "Local Pickup Available", desc: "Pick up your device locally. No shipping headaches." },
  { icon: "Layers", title: "Bulk Deals Available", desc: "Buying for a team, school or business? Ask for a bundle quote." },
  { icon: "Zap", title: "Fast Response", desc: "We confirm availability quickly so you don't miss out." },
];

export const STEPS = [
  { n: "01", title: "Browse available devices", desc: "Scan our pop-up lineup of iPads, Lenovo laptops and All-in-Ones." },
  { n: "02", title: "Submit a request", desc: "Tell us what you want, how many, and how to reach you." },
  { n: "03", title: "Confirm availability", desc: "We'll reply with stock status, final price and pickup details." },
  { n: "04", title: "Arrange payment & pickup", desc: "Lock it in, pay, and grab your device locally. Done." },
];
