export const PRODUCTS = [
  {
    id: "ipad-air-5",
    name: "Apple iPad Air (5th Gen)",
    tagline: "M1 power in a paper-thin tablet.",
    image:
      "https://images.unsplash.com/photo-1513348313239-6ccc6c25c11b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxhcHBsZSUyMGlwYWQlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzgwMjA4MzgzfDA&ixlib=rb-4.1.0&q=85",
    startingPrice: "Your Price! $200",
    retailPrice: "$399",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: [
      "Apple M1 chip · 8-core CPU",
      '10.9" Liquid Retina display',
      "8GB RAM · 256GB / 512GB storage",
      "Wi-Fi · Touch ID · USB-C",
      "Charger included",
    ],
  },
  {
    id: "thinkpad-t490",
    name: "Lenovo ThinkPad T490",
    tagline: "Business-class workhorse, pop-up pricing.",
    image:
      "https://customer-assets.emergentagent.com/job_popup-devices/artifacts/vq54xd4z_ChatGPT%20Image%20May%2031%2C%202026%2C%2001_01_51%20AM.png",
    startingPrice: "Your Price! $150",
    retailPrice: "$379",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: [
      "Intel Core i5 / i7 (8th Gen)",
      '14" FHD anti-glare display',
      "8GB / 16GB RAM · 256GB / 512GB SSD",
      "Backlit keyboard · Windows 11 ready",
      "Charger included",
    ],
  },
  {
    id: "aio-desktops",
    name: "All-in-One Desktops",
    tagline: "Dell · Lenovo · HP — one clean unit, ready to plug in.",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVza3RvcCUyMHBjJTIwbW9uaXRvcnxlbnwwfHx8fDE3ODAyMDgzODN8MA&ixlib=rb-4.1.0&q=85",
    startingPrice: "Prices range from 250-350",
    retailPrice: "$599",
    condition: "Tested & Reset",
    quantity: "Limited Stock",
    specs: [
      "Intel processors · 16GB RAM",
      "512GB SSD storage",
      "Windows 11",
      "Webcam · Keyboard & mouse included",
    ],
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
