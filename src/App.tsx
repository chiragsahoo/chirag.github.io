import { Navbar } from './components/Navbar';
import { AnimatedBackground } from './components/fx/AnimatedBackground';
import { ScrollProgress } from './components/fx/ScrollProgress';
import { Hero } from './sections/Hero';
import { Snapshot } from './sections/Snapshot';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Architecture } from './sections/Architecture';
import { Career } from './sections/Career';
import { Projects } from './sections/Projects';
import { Leadership } from './sections/Leadership';
import { FinTech } from './sections/FinTech';
import { ResumeCTA } from './sections/ResumeCTA';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <AnimatedBackground variant="global" />
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <Snapshot />
          <About />
          <TechStack />
          <Architecture />
          <Career />
          <Projects />
          <Leadership />
          <FinTech />
          <ResumeCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
