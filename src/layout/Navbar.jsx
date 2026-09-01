import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigation } from "@/context/NavigationContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "#experience", label: "Experience" },
  { path: "#testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const { currentPath, navigate } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLinkClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const isActive = (path) => {
    if (path.startsWith("#")) return false;
    return currentPath === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick("/")}
          className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight cursor-pointer group"
        >
          <span className="text-foreground transition-colors group-hover:text-white">
            Harish
          </span>
          <span className="text-primary glow-text font-mono font-bold text-lg sm:text-xl transition-all group-hover:translate-x-0.5">
            .tech
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 border border-border/50">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface/60"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => handleLinkClick("/contact")}>
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong border-b border-border/40 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.path)}
                className={`text-left text-sm py-2 px-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                  isActive(link.path)
                    ? "bg-primary/15 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-border/30">
              <Button
                className="w-full"
                onClick={() => handleLinkClick("/contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
