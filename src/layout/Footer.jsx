import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

const socialLinks = [
  {
    icon: FaSquareGithub,
    href: "https://github.com/harishmaru1",
    label: "FaSquareGithub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/harish-maru-331017248",
    label: "FaLinkedin",
  },
  {
    icon: FaInstagramSquare,
    href: "https://instagram.com/hri._.ish",
    label: "FaInstagramSquare",
  },
];

const footerLinks = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "#experience", label: "Experience" },
  { path: "#testimonials", label: "Testimonials" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { navigate } = useNavigation();

  return (
    <footer className="relative border-t border-border/50 py-10 md:py-14 overflow-hidden bg-background/80">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/4 top-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Logo & Bio */}
          <div className="text-center md:text-left max-w-sm">
            <button
              onClick={() => navigate("/")}
              className="flex items-center text-2xl font-extrabold tracking-tight cursor-pointer group inline-block"
            >
              <span className="text-foreground transition-colors group-hover:text-white">
                Harish
              </span>
              <span className="text-primary glow-text font-mono font-bold text-xl transition-all group-hover:translate-x-0.5">
                .tech
              </span>
            </button>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Full Stack Developer passionate about creating modern,
              scalable, and high-performance web experiences.
            </p>
          </div>

          {/* Navigation Links (Single Straight Line) */}
          <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary/15 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line with Copyright & Action Buttons */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {currentYear} Harish Maru. All rights reserved.
          </p>

          {/* Compact Symmetric Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* View Projects Button */}
            <button
              onClick={() => navigate("/projects")}
              className="px-3.5 py-1.5 rounded-full glass border border-border/70 hover:border-primary/40 hover:text-primary text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Projects</span>
            </button>

            {/* Let's Connect Button */}
            <button
              onClick={() => navigate("/contact")}
              className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground font-medium text-xs shadow-[0_0_15px_rgba(32,178,166,0.35)] hover:shadow-[0_0_25px_rgba(32,178,166,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};