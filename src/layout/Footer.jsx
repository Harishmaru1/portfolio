import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";
import { Heart } from "lucide-react";


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
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 py-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              HM<span className="text-primary">.</span>
            </a>

            <p className="text-sm text-muted-foreground mt-3 max-w-sm">
              Full Stack Developer passionate about creating modern,
              scalable and user-friendly web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Harish Maru. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            Harish Maru
          </p>
        </div>
      </div>
    </footer>
  );
};