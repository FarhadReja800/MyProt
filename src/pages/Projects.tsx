import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "FULL STACK DEVELOPMENT",
    description: "A premium MERN stack shopping experience with advanced filtering and secure payments.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: "02",
    title: "AI Dashboard UI",
    category: "UI/UX DESIGN",
    description: "Modern analytics dashboard for AI-driven insights with glassmorphic design elements.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: "03",
    title: "Travel Booking App",
    category: "MOBILE DEVELOPMENT",
    description: "Seamless travel planning experience with interactive maps and real-time booking.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: "04",
    title: "Portfolio Design",
    category: "FRONTEND SPECIALIST",
    description: "Highly interactive and cinematic personal portfolio with smooth scroll animations.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop",
    link: "#",
    github: "#"
  }
];

const MagicReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 1, 
      delay, 
      ease: [0.21, 0.47, 0.32, 0.98] // Magic UI signature ease
    }}
  >
    {children}
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D1FF] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-32">
        <MagicReveal>
          <span className="text-[#00D1FF] text-[10px] font-black tracking-[0.6em] uppercase mb-6 block">Curated Work</span>
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none mb-12">
            FEATURED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">PROJECTS</span>
          </h2>
        </MagicReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-40 md:space-y-80">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32`}
          >
            {/* Project Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative group w-full md:w-[65%] aspect-[16/10] rounded-[3rem] overflow-hidden bg-[#111] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              />
              
              {/* Overlay with Floating Button */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-8 right-8 overflow-hidden">
                 <motion.a 
                    href={project.link}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-[#00D1FF] rounded-full flex items-center justify-center text-black shadow-2xl opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-500"
                 >
                    <ArrowUpRight size={24} />
                 </motion.a>
              </div>
            </motion.div>

            {/* Project Info */}
            <div className="w-full md:w-[35%] space-y-10">
              <MagicReveal delay={0.2}>
                <div className="flex items-center space-x-6">
                  <span className="text-6xl md:text-8xl font-black text-white/5">{project.id}</span>
                  <div className="h-[2px] flex-grow bg-white/10" />
                </div>
              </MagicReveal>
              
              <div className="space-y-6">
                <MagicReveal delay={0.3}>
                  <span className="text-[#00D1FF] text-[11px] font-black tracking-[0.4em] uppercase">{project.category}</span>
                  <h3 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9] mt-2">
                    {project.title}
                  </h3>
                </MagicReveal>
                
                <MagicReveal delay={0.4}>
                  <p className="text-gray-500 font-serif italic text-xl leading-relaxed">
                    {project.description}
                  </p>
                </MagicReveal>
              </div>

              <MagicReveal delay={0.5}>
                <div className="flex items-center space-x-8 pt-4">
                  <a href={project.github} className="group flex items-center space-x-3 text-white/60 hover:text-white transition-colors">
                    <Github size={20} />
                    <span className="text-[10px] font-black tracking-widest uppercase">Code</span>
                  </a>
                  <a href={project.link} className="group flex items-center space-x-3 text-white/60 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                    <span className="text-[10px] font-black tracking-widest uppercase">Live Demo</span>
                  </a>
                </div>
              </MagicReveal>
            </div>
          </div>
        ))}
      </div>

      {/* Background Decorative Text */}
      <div className="absolute right-0 bottom-10 pointer-events-none opacity-[0.01] select-none">
        <span className="text-[30vw] font-black text-white uppercase leading-none">WORKS</span>
      </div>
    </section>
  );
};

export default Projects;
