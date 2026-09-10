import { lazy, Suspense } from "react";
import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

// Lazy-load sub-pages to reduce initial bundle size & defer unused JavaScript
const ProjectsPage = lazy(() =>
  import("@/pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage }))
);
const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((m) => ({ default: m.ContactPage }))
);

function AppContent() {
  const { currentPath } = useNavigation();

  const renderCurrentView = () => {
    switch (currentPath) {
      case "/about":
        return (
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <AboutPage />
          </Suspense>
        );
      case "/projects":
        return (
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <ProjectsPage />
          </Suspense>
        );
      case "/contact":
        return (
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <ContactPage />
          </Suspense>
        );
      case "/":
      default:
        return (
          <>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1">{renderCurrentView()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
