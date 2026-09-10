import { useState } from "react";
import { ArrowUpRight, ExternalLink, ArrowLeft, Search, Sparkles } from "@/components/Icons";
import { TiltCard } from "@/components/TiltCard";
import { projects } from "@/data/projects";
import { useNavigation } from "@/context/NavigationContext";
import { SEO } from "@/components/SEO";

export const ProjectsPage = () => {
  const { navigate } = useNavigation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      <SEO
        title="Projects &amp; Portfolio | Harish Maru - Full Stack Web Applications"
        description="Browse full-stack web applications, SaaS platforms, and responsive client websites developed by Harish Maru in Indore, featuring React, PHP, MySQL, and REST APIs."
        canonical="https://harish-maru.netlify.app/projects"
      />
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Breadcrumb / Back button */}
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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold tracking-wider text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Complete Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            All Projects &amp; Creations
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Explore my full collection of production web applications, SaaS platforms, and client portfolios built with modern frameworks by Harish Maru in Indore.
          </p>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2">
            {["All", "Frontend", "Full Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(32,178,166,0.4)] scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface rounded-full border border-border text-xs sm:text-sm focus:border-primary focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <TiltCard
                key={project.id || idx}
                maxTilt={10}
                scale={1.02}
                className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Browser Mockup Image */}
                <div className="relative overflow-hidden bg-black/40 border-b border-border/40">
                  <div className="flex items-center justify-between px-3 py-2 bg-secondary/30 border-b border-border/30">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono truncate px-2.5 py-0.5 rounded-full bg-background/50 border border-border/20 max-w-[170px]">
                      {project.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </div>
                    <div className="w-6" />
                  </div>

                  <div className="relative aspect-[16/10] w-full bg-[#070a10] flex items-center justify-center p-2">
                    <img
                      src={project.image}
                      alt={project.alt || `${project.title} - Web application developed by Harish Maru`}
                      width="480"
                      height="300"
                      className="w-full h-full object-contain object-center rounded-sm transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                    
                    <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live website of ${project.title}`}
                        className="px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-medium text-xs"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-primary uppercase">
                      {project.category}
                    </span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group-hover:text-primary transition-colors cursor-pointer"
                    >
                      <h3 className="text-lg font-semibold line-clamp-1">
                        {project.title}
                      </h3>
                    </a>

                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-0.5 rounded-md bg-surface text-[11px] font-medium border border-border/50 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-primary/80 to-primary text-primary-foreground font-medium text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-primary/30 hover:opacity-95 transition-all cursor-pointer"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass rounded-3xl max-w-md mx-auto">
            <p className="text-muted-foreground text-sm">No projects found matching your search.</p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Contact Callout */}
        <div className="mt-20 glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto border border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
          <h3 className="text-2xl font-bold mb-3">Have a project in mind?</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
            Let's collaborate to build something remarkable. I'm available for freelance and full-time opportunities.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-[0_0_20px_rgba(32,178,166,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </div>
  );
};
