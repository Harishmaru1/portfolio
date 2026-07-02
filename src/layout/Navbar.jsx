import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {Contact} from "@/sections/Contact";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          HM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
             <button
  key={index}
  onClick={() => handleScroll(link.href)}
  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all duration-300 cursor-pointer"
>
  {link.label}
</button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
      <div className="hidden md:block">
  <a href="#contact">
    <Button size="sm">Contact Me</Button>
  </a>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <button
  key={index}
  onClick={() => handleScroll(link.href)}
  className="text-left text-lg text-muted-foreground hover:text-foreground py-2 transition-all duration-300"
>
  {link.label}
</button>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
