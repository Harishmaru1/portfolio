import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Award,
} from "@/components/Icons";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/SocialIcons";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const typingRoles = [
  "Full Stack Developer",
  "React & Next.js Specialist",
  "MERN Stack Engineer",
  "SaaS & API Architect",
];

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "MySQL",
  "Express.js",
  "MongoDB",
  "Docker",
  "AWS",
  "Vercel",
  "Render",
  "Tailwind CSS",
  "Canva",
  "Figma",
  "Git",
  "Github Actions",
];

const floatingDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${((i * 17 + 3) % 94) + 2}%`,
  top: `${((i * 23 + 5) % 90) + 3}%`,
  size: i % 3 === 0 ? "w-2 h-2" : "w-1.5 h-1.5",
  duration: `${14 + (i % 5) * 2}s`,
  delay: `${(i % 6) * 1}s`,
  opacity: i % 2 === 0 ? "opacity-45" : "opacity-30",
}));

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(typingRoles[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState(typingRoles[0]);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Keep main thread completely idle during initial 2.5s page load to maximize FCP and minimize TBT
    if (!hasStarted) {
      const initTimer = setTimeout(() => {
        setHasStarted(true);
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(initTimer);
    }

    const currentFullRole = typingRoles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 <= 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, hasStarted]);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Floating Particles (Gentle Slow Motion - hidden on mobile for low-CPU performance) */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot) => (
          <div
            key={dot.id}
            className={`absolute ${dot.size} rounded-full bg-[#20B2A6] ${dot.opacity} blur-[0.5px]`}
            style={{
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration} ease-in-out infinite`,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-7">
            {/* Greeting & Main Big Name Headline */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-primary tracking-[0.2em] uppercase font-semibold">
                <span className="text-primary/60">//</span>
                <span>HELLO WORLD, I AM</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08]">
                <span className="text-foreground">Harish</span>{" "}
                <span className="bg-gradient-to-r from-primary via-[#45ecd9] to-primary bg-clip-text text-transparent glow-text font-extrabold">
                  Maru
                </span>
              </h1>

              {/* Dynamic Typewriter Terminal Role Badge */}
              <div className="pt-1">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl glass border border-primary/40 shadow-[0_0_20px_rgba(32,178,166,0.15)] backdrop-blur-md">
                  <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold">
                    <span className="text-primary font-bold">&gt;</span>
                    <span className="text-muted-foreground/80">const role =</span>
                    <span className="text-[#45ecd9] font-medium tracking-tight">
                      "{displayText}"
                    </span>
                    <span className="w-1.5 h-3.5 bg-primary animate-pulse inline-block align-middle ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bio Paragraph - Natural Semantic & Local Keyword Optimization */}
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed pt-1">
                Full Stack Developer &amp; Software Engineer based in Indore, Madhya Pradesh, India. Crafting scalable web applications, REST APIs, and SaaS platforms with modern engineering standards and performance-driven design.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                size="lg"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                aria-label="Contact Harish Maru for web development projects"
                className="cursor-pointer active:scale-95 transition-transform shadow-[0_0_20px_rgba(32,178,166,0.35)]"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <a
                href="/resume.pdf"
                download
                aria-label="Download Harish Maru Full Stack Developer Resume PDF"
                className="active:scale-95 transition-transform"
              >
                <AnimatedBorderButton>
                  <Download className="w-4 h-4 mr-1" />
                  <span>Download CV</span>
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs sm:text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: GithubIcon, href: "https://Github.com/harishmaru1", label: "Follow Harish Maru on GitHub" },
                {
                  icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/harish-maru-331017248?utm_source=share_via&utm_content=profile&utm_medium=member_android",
                  label: "Follow Harish Maru on LinkedIn",
                },
                { icon: InstagramIcon, href: "https://Instagram.com/hri._.ish", label: "Follow Harish Maru on Instagram" },
              ].map((social, idx) => (
                <a
                  key={idx}
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
          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center items-center">
            {/* Profile Image Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-md mx-auto flex items-center justify-center aspect-[448/520]">
              {/* Ambient Glow Aura behind Harish */}
              <div className="absolute w-[95%] h-[95%] rounded-full bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent blur-3xl pointer-events-none -z-0" />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl pointer-events-none -z-0" />

              {/* Cutout Image with seamless bottom fade into hero background */}
              <div className="relative z-10 w-full h-full flex justify-center">
                <img
                  src="/harish-main.webp"
                  alt="Harish Maru - Full Stack Developer and Software Engineer in Indore"
                  width="448"
                  height="520"
                  fetchPriority="high"
                  decoding="async"
                  style={{ aspectRatio: "448 / 520" }}
                  className="w-full h-full max-h-[520px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] drop-shadow-[0_0_35px_rgba(32,178,166,0.25)] hero-img-mask select-none pointer-events-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Right Side Badges - Clean, compact, and aligned at the bottom right of the image */}
              <div className="absolute -right-2 sm:-right-6 bottom-3 sm:bottom-6 z-20 flex flex-col items-end gap-2">
                {/* Available for Work Badge */}
                <div className="glass rounded-xl px-3 py-1.5 border border-primary/30 shadow-[0_8px_20px_rgba(0,0,0,0.5)] animate-float backdrop-blur-md flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-foreground tracking-wide whitespace-nowrap">
                    Available for work
                  </span>
                </div>

                {/* 1+ Years Experience Badge (Compact & Sleek) */}
                <div className="glass rounded-xl px-3 py-1.5 border border-primary/30 shadow-[0_8px_20px_rgba(0,0,0,0.5)] animate-float animation-delay-500 backdrop-blur-md flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_8px_rgba(32,178,166,0.3)]">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-primary to-[#45ecd9] bg-clip-text text-transparent font-display">
                      1+ Years
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">
                      Exp.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/80 hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
