import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import UniversityLife from "@/components/UniversityLife";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <Experience />
      <UniversityLife />
      <Contact />
      <Footer />
    </main>
  );
}
