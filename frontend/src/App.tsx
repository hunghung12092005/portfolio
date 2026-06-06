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
    <div className="relative min-h-screen overflow-hidden text-[var(--text-primary)]" style={{ backgroundImage: "var(--app-bg-image)" }}>
      <Navbar />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="mesh-overlay absolute inset-0 opacity-90" />
        <div className="tech-grid absolute inset-0 opacity-60" />
        <div className="network-lines absolute inset-x-0 top-0 h-[78vh] opacity-60" />
        <div className="soft-wave absolute inset-x-[-10%] bottom-[12%] h-[32vh] opacity-60" />

        <div
          className="absolute left-[-16rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.42),rgba(125,211,252,0)_68%)] blur-3xl"
          style={{ animation: "floatBlob 22s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-12rem] top-[4rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.34),rgba(216,180,254,0)_70%)] blur-3xl"
          style={{ animation: "floatBlob 26s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute bottom-[-12rem] left-[22%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(153,246,228,0.3),rgba(153,246,228,0)_68%)] blur-3xl"
          style={{ animation: "floatBlob 24s ease-in-out infinite" }}
        />

        <div className="absolute left-[8%] top-[7.5rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.52),rgba(255,255,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[10%] top-[8rem] h-[24rem] w-[24rem] rounded-full border border-white/30 bg-white/10 blur-2xl" />

        <div className="orbit-ring absolute left-[12%] top-[10rem] h-[28rem] w-[28rem] rounded-full opacity-45" />
        <div className="orbit-ring absolute left-[16%] top-[13rem] h-[20rem] w-[20rem] rounded-full opacity-40" />
        <div className="absolute left-[18%] top-[17rem] h-px w-[16rem] bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 opacity-70" />
        <div className="absolute left-[26%] top-[14.5rem] h-[11rem] w-px bg-gradient-to-b from-sky-300/0 via-sky-300/60 to-sky-300/0 opacity-50" />

        <div className="data-node absolute left-[17%] top-[16rem] h-2.5 w-2.5 rounded-full bg-cyan-200/95" />
        <div className="data-node absolute left-[29%] top-[13rem] h-2 w-2 rounded-full bg-sky-200/95" />
        <div className="data-node absolute left-[31%] top-[20rem] h-2 w-2 rounded-full bg-violet-200/95" />
        <div className="data-node absolute right-[18%] top-[18rem] h-2 w-2 rounded-full bg-emerald-200/90" />

        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_58%)]" />
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
