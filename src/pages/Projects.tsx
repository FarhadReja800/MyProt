import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Stats from "../components/Stats";

const projects = [
  {
    id: "01",
    title: "Service-Based Web Platform",
    category: "FULL STACK DEVELOPMENT",
    description: "Jag Star is a modern service-based web platform built to provide users with a smooth and efficient way to explore, request, and manage digital services.",
    image: "Home.jpg",
    link: "https://jagster17.vercel.app/",
    github: "#"
  },
  {
    id: "02",
    title: "Education Support & Donation System",
    category: "FULL STACK DEVELOPMENT",
    description: "Guen is a modern scholarship and donation-based platform designed to provide educational support and financial assistance to students. Through this system, users can easily contribute donations, while deserving students can apply for scholarships. It is a transparent, fast, and user-friendly digital solution that aims to create a positive impact in the education sector.",
    image: "QuenBy.png",
    link: "https://quenbyford.vercel.app/",
    github: "#"
  },
  {
    id: "03",
    title: "Creative Video Showcase Platform",
    category: "FULL STACK DEVELOPMENT",
    description: "KinanaFilms is a modern video post and portfolio-based platform designed for creators to showcase their work in a clean and professional way. Users can upload, share, and explore creative video content easily. The platform focuses on smooth performance, engaging UI, and a seamless user experience, making it ideal for filmmakers, editors, and content creators.",
    image: "aaa.webp",
    link: "https://kinanafilms.vercel.app/",
    github: "#"
  },
  {
    id: "04",
    title: "Preserve & Share Loved Ones Memories",
    category: "FULL STACK DEVELOPMENT",
    description: "Memorialis is a thoughtful digital platform designed to preserve and share memories of family members and loved ones. It allows users to create detailed profiles, share life stories, and showcase meaningful moments in a respectful and organized way. The platform focuses on emotional connection, simplicity, and a clean user experience, helping people keep their memories alive in a digital space.",
    image: "Grav.jpg",
    link: "https://gravetas.vercel.app/",
    github: "#"
  },
  {
    id: "05",
    title: "Awareness, Donation & Crisis Support Platform",
    category: "FULL STACK DEVELOPMENT",
    description: "Basilica of Saint Francis of Assisi is a renowned Catholic church located in Assisi, Italy. It was built in the 13th century and is dedicated to Saint Francis of Assisi, who is also buried there. The basilica is famous for its stunning medieval frescoes, beautiful architecture, and spiritual significance. It is recognized as a UNESCO World Heritage Site and attracts millions of pilgrims and tourists every year. Overall, it is an important landmark that combines religion, history, and art in one place.",
    image: "Basilaca.jpg",
    link: "https://ticteacher.netlify.app/",
    github: "#"
  },
  {
    id: "06",
    title: "Daily, Weekly & Monthly Calculation Tracker",
    category: "FULL STACK DEVELOPMENT",
    description: "Super Deals is a smart calculation-based web application designed to help users manage and calculate values across different time ranges such as daily, weekly, bi-weekly, and monthly. It provides an easy and efficient way to track earnings, expenses, or any numerical data over time.",
    image: "Super.png",
    link: "https://superdeals-nine.vercel.app/",
    github: "#"
  },
  {
    id: "07",
    title: "Professional Security Service Solution",
    category: "FULL STACK DEVELOPMENT",
    description: "Fair Security is a modern security service management platform that provides professional protection solutions for banks, offices, events, and residential areas. It connects clients with trained security personnel for different needs such as bank security, bodyguard services, corporate guarding, and event security management.",
    image: "Security.jpg",
    link: "https://fairsecuritybd.com/",
    github: "#"
  },
  {
    id: "08",
    title: "Intelligent Profile Matching App",
    category: "FULL STACK DEVELOPMENT",
    description: "Find Your Life Partner is a modern matchmaking platform designed to help users find compatible life partners based on detailed profile matching. The system analyzes user preferences, interests, lifestyle, and personal information to suggest the most suitable matches.",
    image: "SN.png",
    link: "https://sm2442118.vercel.app/",
    github: "#"
  },
  {
    id: "09",
    title: "Smart Hosting & Room Reservation System",
    category: "FULL STACK DEVELOPMENT",
    description: "Warm Welcome is a modern hosting and room booking platform where users can easily search and reserve rooms for their stay. It provides a seamless booking experience with real-time availability, easy reservation management, and user-friendly navigation. At the same time, host partners can register and post their rooms or services to offer accommodation to guests. The platform connects guests and hosts in one place, making the booking process simple, efficient, and reliable for both parties.",
    image: "Room.jpg",
    link: "https://warm-welcome-three.vercel.app/",
    github: "#"
  },

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

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale and opacity effects based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <motion.div
      ref={containerRef}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-32 `}
    >
      {/* Project Image Container */}
      <motion.div
        style={{ scale, opacity }}
        className="w-full lg:w-[55%]  relative group overflow-hidden bg-[#111] rounded-sm border border-white/10 shadow-2xl"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover md:object-top opacity-80 group-hover:opacity-100 transition-all duration-700 ease-in-out filter brightness-90 group-hover:brightness-110"
        />

        {/* Left-to-Right Shimmer Shadow Effect on Hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 skew-x-[-20deg]"
          />
        </div>

        {/* Premium Scanning Effect on Hover */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ top: "-100%" }}
            whileHover={{ top: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-[#C7A750]/30 to-transparent z-10"
          />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C7A750]/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C7A750]/50" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#C7A750]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-10 group-hover:translate-y-0">
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-[#C7A750] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(199,167,80,0.5)] z-20"
          >
            <ArrowUpRight size={28} />
          </motion.a>
        </div>
      </motion.div>

      {/* Project Info */}
      <div className="w-full lg:w-[45%] space-y-6 md:space-y-10">
        <MagicReveal delay={0.2}>
          <div className="flex items-center space-x-6">
            <span className="text-5xl md:text-8xl font-black text-white/5">{project.id}</span>
            <div className="h-[1px] md:h-[2px] flex-grow bg-[#C7A750]/20" />
          </div>
        </MagicReveal>

        <div className="space-y-4 md:space-y-6">
          <MagicReveal delay={0.3}>
            <span className="text-[#C7A750] text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase">{project.category}</span>
            <h3 className="text-2xl md:text-4xl font-bold text-[#C7A750] capitalize tracking-tight leading-tight mt-2">
              {project.title}
            </h3>
          </MagicReveal>

          <MagicReveal delay={0.4}>
            <p className="text-gray-200 font-serif italic text-lg md:text-xl leading-relaxed">
              {project.description}
            </p>
          </MagicReveal>

          <MagicReveal delay={0.5}>
            <div className="flex flex-wrap items-center gap-12 md:gap-16 pt-8">
              <a
                href={project.link}
                className="group/btn relative flex items-center gap-4 text-white transition-all"
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-[#C7A750] group-hover/btn:bg-[#C7A750] transition-all duration-500">
                    <ExternalLink size={16} className="group-hover/btn:text-white transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#C7A750] opacity-0 group-hover/btn:animate-ping pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-500 group-hover/btn:text-[#C7A750] transition-colors">View Project</span>
                  <span className="text-xs font-black tracking-[0.2em] uppercase">Live Demo</span>
                </div>
              </a>

              <a
                href={project.github}
                className="group/btn relative flex items-center gap-4 text-white transition-all"
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-[#C7A750] group-hover/btn:bg-[#C7A750] transition-all duration-500">
                    <Github size={16} className="group-hover/btn:text-white transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#C7A750] opacity-0 group-hover/btn:animate-ping pointer-events-none" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-500 group-hover/btn:text-[#C7A750] transition-colors">Clean Code</span>
                  <span className="text-xs font-black tracking-[0.2em] uppercase">Source Code</span>
                </div>
              </a>
            </div>
          </MagicReveal>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="relative min-h-screen py-32 bg-transparent overflow-hidden">

      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7A750] opacity-[0.03] blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-40">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#C7A750] text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase block mb-4"
          >
            Selected Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Featured <br /> <span className="text-gray-500">Projects</span>
          </motion.h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <Stats />
    </section>
  );
};

export default Projects;
