import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "@/components/TiltCard";

const testimonials = [
  {
    quote:
      "Harish is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Bhumika Barethiya",
    role: "Project Manager, Alaukik ITech Solution.",
  },
  {
    quote:
      "Working with Harish was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Anil Sharma",
    role: "Product Manager, Digital Solutions",
  },
  {
    quote:
      "Harish's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Priya Desai",
    role: "Engineering Lead, Sd Bansal",
  },
  {
    quote:
      "Not only is Harish technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "Riddesh Kale",
    role: "CEO, Dailymatch.in",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-4 sm:px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <TiltCard
              maxTilt={8}
              scale={1.01}
              className="group glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 border border-primary/30"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                {/* Modern User Icon Avatar */}
                <div className="w-13 h-13 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-surface border border-primary/40 flex items-center justify-center shadow-lg ring-2 ring-primary/20 flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-base sm:text-lg">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
