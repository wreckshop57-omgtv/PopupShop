import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#devices", label: "Devices" },
  { href: "#process", label: "How it works" },
  { href: "#trust", label: "Why us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "bg-white/75 border-b border-[#D2D2D7]/40" : "bg-white/40 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-[#1D1D1F] grid place-items-center text-white text-[10px] font-bold tracking-tight">
            OMG
          </div>
          <span className="font-display text-[15px] font-medium tracking-tight text-[#1D1D1F]">
            OMGTech<span className="text-[#86868B] font-light"> · Pop-Up</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[13px] text-[#1D1D1F]/70 hover:text-[#1D1D1F] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-cta-request"
            className="hidden sm:inline-flex items-center rounded-full bg-[#1D1D1F] hover:bg-black text-white text-[13px] font-medium px-4 py-2 transition-colors"
          >
            Request a device
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-[#1D1D1F]"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#D2D2D7]/40 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] text-[#1D1D1F] py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
