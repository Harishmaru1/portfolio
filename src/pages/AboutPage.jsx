import { Code2, Lightbulb, Rocket, Users, ArrowLeft, CheckCircle2, Award, Briefcase, GraduationCap } from "@/components/Icons";
import { TiltCard } from "@/components/TiltCard";
import { useNavigation } from "@/context/NavigationContext";
import { SEO } from "@/components/SEO";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and modular code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing assets, rendering pipelines, and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with cross-functional teams, clients, and designers to bring vision to reality.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Staying on the cutting-edge with modern frameworks, AI tools, and best architectural practices.",
  },
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Redux Toolkit"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Render", "Postman", "Figma"],
  },
];

export const AboutPage = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <SEO
        title="About Harish Maru | Full Stack Developer & Software Engineer in Indore"
        description="Learn more about Harish Maru, Full Stack Developer and Software Engineer based in Indore, Madhya Pradesh, specializing in React, Node.js, PHP, MySQL, and modern web architectures."
        canonical="https://harish-maru.netlify.app/about"
      />
      {/* Glows */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            aria-label="Back to Harish Maru Portfolio Home"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
              About Harish Maru
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Passionate about creating{" "}
              <span className="text-primary font-serif italic">impactful</span> digital experiences.
            </h1>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <span className="text-foreground font-semibold">Harish Maru</span>, a dedicated Full Stack Developer and Software Engineer based in Indore, Madhya Pradesh, India, with deep expertise in designing, building, and deploying modern web applications and SaaS products.
              </p>
              <p>
                I help startups, businesses, and leaders elevate their digital presence through responsive frontends, secure backend APIs, and scalable database architectures using React, Node.js, PHP, and MySQL.
              </p>
              <p>
                Whether it's an automated restaurant QR ordering system (PrimeDine), a full-scale rental management application (Alaukik Tours), or custom web applications, I bring high engineering standards, clean aesthetics, and performance focus to every build.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/projects");
                }}
                aria-label="View Full Stack Projects by Harish Maru"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-xs sm:text-sm shadow-lg hover:scale-105 transition-all cursor-pointer inline-block"
              >
                View My Projects
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
                aria-label="Contact Harish Maru in Indore"
                className="px-6 py-2.5 rounded-full glass border border-border/70 hover:border-primary/40 hover:text-primary text-xs sm:text-sm font-medium transition-all cursor-pointer inline-block"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Vision Card (3D Tilt) */}
          <div className="lg:col-span-5">
            <TiltCard
              maxTilt={12}
              scale={1.02}
              className="glass p-8 rounded-3xl border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">My Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    "To engineer digital products that combine bulletproof performance, intuitive usability, and elegant design — empowering businesses to succeed in a fast-moving modern world."
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 space-y-3">
                  <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Focus on clean, maintainable architecture</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Pixel-perfect responsive design across all devices</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Continuous learning and modern best practices</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Core Values</span>
            <h2 className="text-3xl font-bold mt-2">How I Approach My Work</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={15}
                scale={1.03}
                className="group glass p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase">Skills &amp; Tech Stack</span>
            <h2 className="text-3xl font-bold mt-2">Tools &amp; Technologies</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((cat, idx) => (
              <TiltCard
                key={idx}
                maxTilt={10}
                className="glass p-6 rounded-2xl border border-border/50 hover:border-primary/40 space-y-4"
              >
                <h3 className="text-lg font-semibold text-primary">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-surface text-xs font-medium rounded-full border border-border text-foreground hover:border-primary/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
