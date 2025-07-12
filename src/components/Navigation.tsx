// ✅ FINAL CLEAN VERSION — Navigation.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scissors, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const offset = -100;
    const sectionClass = {
      testimonials: ".animate-marquee",
      cta: ".button-gradient",
    }[sectionId];

    const section = sectionClass ? document.querySelector(sectionClass) : document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Contact Us", to: "/contact" },
    { name: "View Our Projects", href: "#projects", onClick: () => scrollToSection("testimonials") },
    { name: "Prices", href: "#pricing", onClick: () => scrollToSection("pricing") },
    { name: "Features", href: "#features", onClick: () => scrollToSection("features") },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 px-0"
          >
            <Link to="/">
              <Scissors className="w-5 h-5 text-primary" />
              <span className="font-bold text-base">SnipStory</span>
            </Link>
          </Button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    item.onClick?.();
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  {item.name}
                </a>
              )
            )}
            <Button asChild size="sm" className="button-gradient">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) =>
                    item.to ? (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMobileMenuOpen(false);
                          item.onClick?.();
                        }}
                        className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                  <Button asChild className="button-gradient mt-4">
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
