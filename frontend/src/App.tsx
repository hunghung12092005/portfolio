import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const portfolioSections = [About, Experience, Education, Skills, Projects, Certificates, Contact];

function App() {
  return (
    <div className="min-h-screen text-[var(--text-primary)]" style={{ backgroundImage: "var(--app-bg-image)" }}>
      <Navbar />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-amber-300/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_30%)]" />
      </div>
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8 lg:px-8">
        <Hero />
        <div>
          {portfolioSections.map((Section, index) => (
            <Section key={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
