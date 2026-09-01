import { NavigationProvider, useNavigation } from "@/context/NavigationContext";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";

function AppContent() {
  const { currentPath } = useNavigation();

  const renderCurrentView = () => {
    switch (currentPath) {
      case "/about":
        return <AboutPage />;
      case "/projects":
        return <ProjectsPage />;
      case "/contact":
        return <ContactPage />;
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
