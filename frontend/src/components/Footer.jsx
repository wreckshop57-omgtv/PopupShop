export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1D1D1F] text-white px-6 sm:px-10 py-20 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white grid place-items-center text-[#1D1D1F] text-[10px] font-bold tracking-tight">
                OMG
              </div>
              <span className="font-display text-base font-medium tracking-tight">
                OMGTech · Pop-Up
              </span>
            </div>
            <h3 className="mt-10 font-display text-3xl sm:text-5xl lg:text-6xl tracking-tighter font-light leading-[1.05] max-w-3xl">
              OMGTech Pop-Up Shop —
              <span className="text-white/50"> Available Until Inventory Is Gone.</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 text-[13px]">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                Explore
              </div>
              <ul className="mt-4 space-y-2">
                <li><a href="#devices" data-testid="footer-link-devices" className="text-white/80 hover:text-white transition-colors">Devices</a></li>
                <li><a href="#process" data-testid="footer-link-process" className="text-white/80 hover:text-white transition-colors">How it works</a></li>
                <li><a href="#trust" data-testid="footer-link-trust" className="text-white/80 hover:text-white transition-colors">Why us</a></li>
                <li><a href="#faq" data-testid="footer-link-faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold">
                Pop-Up Status
              </div>
              <ul className="mt-4 space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Currently open — limited stock
                </li>
                <li>Local pickup available</li>
                <li>No restocks guaranteed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} OMGTech. Pop-up event. No permanent storefront.</span>
          <span>First come, first served. Once they're gone, they're gone.</span>
        </div>
      </div>
    </footer>
  );
};
