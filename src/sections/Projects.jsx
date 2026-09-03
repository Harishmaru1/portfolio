import { useState } from "react";
import { ArrowUpRight, ExternalLink, ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/TiltCard";
import { projects } from "@/data/projects";
import { useNavigation } from "@/context/NavigationContext";

export const Projects = () => {
  const { navigate } = useNavigation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  // Limit to 3 on home page as requested
  const displayProjects = filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="pt-8 pb-20 md:pt-12 md:pb-28 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
            Showcase of My Work
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            A curated selection of recent full-stack applications and high-impact web platforms.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {["All", "Frontend", "Full Stack"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(32,178,166,0.4)] scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Projects Grid (Side by side on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {displayProjects.map((project, idx) => (
            <TiltCard
              key={project.id || idx}
              maxTilt={10}
              scale={1.02}
              className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Preview with Browser Mockup Frame */}
              <div className="relative overflow-hidden bg-black/40 border-b border-border/40">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-secondary/30 border-b border-border/30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-[10px] text-muted-foreground/70 font-mono truncate px-2.5 py-0.5 rounded-full bg-background/50 border border-border/20 max-w-[170px]">
                    {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </div>
                  <div className="w-6" />
                </div>

                {/* Screenshot Display */}
                <div className="relative aspect-[16/10] w-full bg-[#070a10] flex items-center justify-center p-1.5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain object-center rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-medium text-xs"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category Pill */}
                  <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
                    {project.category}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:text-primary transition-colors cursor-pointer"
                  >
                    <h3 className="text-base sm:text-lg font-semibold line-clamp-1">
                      {project.title}
                    </h3>
                  </a>

                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-md bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Full Width Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-primary/80 to-primary text-primary-foreground font-medium text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-primary/30 hover:opacity-95 transition-all cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Show More Button -> Redirects to /projects page */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_25px_rgba(32,178,166,0.4)] border border-primary/30 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer group active:scale-95"
          >
            <span>Show More Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
