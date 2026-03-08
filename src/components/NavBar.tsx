import { useState, useEffect, useCallback } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "../lib/utils";

const menuItems = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Download", href: "/download" },
  { label: "Releases", href: "/releases" },
  { label: "Contact", href: "/contact" },
  { label: "Docs", href: "/docs", external: false },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY <= 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-shadow duration-200 bg-background",
        { "border-b": !isTop }
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between gap-6 transition-[padding] duration-200",
            !isTop ? "py-4" : "py-6"
          )}
        >
          <div className="flex-1">
            <a href="/" className="flex items-center gap-2 font-semibold text-xl text-foreground hover:no-underline">
              <img src="/favicon-32x32.png" alt="" width={24} height={24} className="size-6" />
              MakerVault
            </a>
          </div>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 font-medium text-foreground/80 text-sm hover:text-foreground transition-colors"
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end">
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md bg-secondary p-2 text-secondary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 font-medium text-base text-foreground/80 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
