import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import KiteCursor from './components/KiteCursor';
import KiteLaunchButton from './components/KiteLaunchButton';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Interactive Glowing Kite Custom Cursor */}
      <KiteCursor />

      {/* Star field background */}
      <StarBackground />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        <main className="pb-4 sm:pb-6">
          <Hero />
          <TechMarquee />
          <About />
          <TechMarquee reverse />
          <Education />
          <TechMarquee />
          <Skills />
          <TechMarquee reverse />
          <Projects />
          <TechMarquee />
          <Milestones />
          <TechMarquee reverse />

          <Contact />

          {/* Centered Solid Triangle Launch Button at the very bottom */}
          <KiteLaunchButton />
        </main>
      </div>
    </div>
  );
}

export default App;
