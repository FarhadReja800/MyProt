import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Loading from "../components/Loading";
import TypingAnimation from "../components/TypingAnimation";

// Lazy load sections for performance
const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const TechnicalExperience = lazy(() => import("./TechnicalExperience"));
const Contact = lazy(() => import("./Contact"));

const Home: React.FC = () => {
  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        
        {/* Large Decorative Text (Vertical) - Hidden on mobile */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center space-y-12 pointer-events-none opacity-[0.03]">
          <span className="text-8xl font-black rotate-90 text-white tracking-[0.5em] whitespace-nowrap uppercase">FRONTEND DEVELOPER</span>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full z-10"
        >
          <div className="space-y-2 mb-8">
            <div className="w-12 h-[2px] bg-[#00D1FF] mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Hey there!
            </h2>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              I'm <span className="text-white">Farhad Reja</span>
            </h1>
            <h1 className="text-4xl md:text-7xl font-black leading-tight">
              <span className="text-white">Independent</span>{" "}
              <span className="text-[#00D1FF]">
                <TypingAnimation
                  words={["Frontend Developer", "UI/UX Specialist", "MERN Stack Expert"]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  pauseDelay={3000}
                  loop
                  className="inline-block"
                />
              </span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-500 font-serif italic mb-12 max-w-xl">
            I create high-end web applications and professional user experiences with a focus on visual excellence.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#portfolio"
              className="px-12 py-5 bg-[#00D1FF] text-black font-black text-xs tracking-[0.3em] uppercase hover:bg-white transition-all shadow-2xl shadow-[#00D1FF]/20"
            >
              Let's Start
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Mouse/Scroll Down */}
        <div className="absolute bottom-10 left-12 flex items-center space-x-4 opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full" 
            />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Scroll Down</span>
        </div>
      </section>

      {/* Other Sections */}
      <Suspense fallback={<Loading />}>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="tech-stack">
          <TechnicalExperience />
        </div>
        <div id="portfolio">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
