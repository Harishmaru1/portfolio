import { ArrowRight, Eye } from "@/components/Icons";
import { useNavigation } from "@/context/NavigationContext";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/harishmaru1",
    label: "Visit Harish Maru GitHub profile",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/harish-maru-331017248",
    label: "Visit Harish Maru LinkedIn profile",
  },
  {
    icon: InstagramIcon,
    href: "https://instagram.com/hri._.ish",
    label: "Visit Harish Maru Instagram profile",
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
    <footer className="relative border-t border-border/50 py-10 md:py-14 overflow-hidden bg-background/80" aria-label="Footer">
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
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              aria-label="Harish Maru - Full Stack Developer in Indore"
              className="flex items-center text-2xl font-extrabold tracking-tight cursor-pointer group inline-block"
            >
              <span className="text-foreground transition-colors group-hover:text-white">
                Harish
              </span>
              <span className="text-primary glow-text font-mono font-bold text-xl transition-all group-hover:translate-x-0.5">
                .tech
              </span>
            </a>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Full Stack Developer &amp; Software Engineer based in Indore, Madhya Pradesh. Crafting scalable web applications and SaaS platforms.
            </p>
          </div>

          {/* Navigation Links (Single Straight Line) */}
          <nav className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap" aria-label="Footer Links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.path);
                }}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
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
            © {currentYear} Harish Maru. Full Stack Developer &amp; Software Engineer, Indore. All rights reserved.
          </p>

          {/* Compact Symmetric Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* View Projects Button */}
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                navigate("/projects");
              }}
              aria-label="View Full Stack Projects"
              className="px-3.5 py-1.5 rounded-full glass border border-border/70 hover:border-primary/40 hover:text-primary text-xs font-medium transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Projects</span>
            </a>

            {/* Let's Connect Button */}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact");
              }}
              aria-label="Contact Harish Maru in Indore"
              className="px-3.5 py-1.5 rounded-full bg-primary text-primary-foreground font-medium text-xs shadow-[0_0_15px_rgba(32,178,166,0.35)] hover:shadow-[0_0_25px_rgba(32,178,166,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};