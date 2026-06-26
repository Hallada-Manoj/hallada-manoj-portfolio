import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import TechStack from "@/sections/TechStack";
import MLWorkflow from "@/sections/MLWorkflow";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Certifications from "@/sections/Certifications";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navigation />
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <MLWorkflow />
        <Projects />
        <Achievements />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
