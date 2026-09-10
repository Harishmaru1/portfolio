import { Code2, Lightbulb, Rocket, Users } from "@/components/Icons";
import { TiltCard } from "@/components/TiltCard";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm <span className="text-foreground font-semibold">Harish Maru</span>, a passionate Full Stack Developer and Software Engineer based in Indore, Madhya Pradesh, India. I specialize in building modern, scalable web applications and SaaS platforms that solve real business problems.
              </p>
              <p>
                My core expertise spans frontend and backend engineering with React, JavaScript, Node.js, Express, PHP, MySQL, and MongoDB. From architecting QR menu SaaS solutions to developing full-stack booking portals and responsive enterprise portfolios, I emphasize clean code, robust REST APIs, and high Core Web Vitals performance.
              </p>
              <p>
                Whether collaborating as a freelance developer in Indore or working with cross-functional engineering teams, I focus on delivering reliable software solutions with delightful user experiences.
              </p>
            </div>

            <TiltCard
              maxTilt={8}
              className="group glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 border border-primary/30"
            >
              <p className="text-lg font-medium italic text-foreground relative z-10">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </TiltCard>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <TiltCard
                key={idx}
                maxTilt={18}
                scale={1.04}
                className="group glass p-6 rounded-2xl animate-fade-in border border-border/50 hover:border-primary/50 cursor-pointer"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <item.icon className="w-6 h-6 text-primary transition-transform duration-300" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {item.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
