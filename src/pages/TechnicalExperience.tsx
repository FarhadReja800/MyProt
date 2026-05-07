import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "FRONTEND", icon: "react" },
  { name: "Next.js", category: "FRONTEND", icon: "nextjs" },
  { name: "TypeScript", category: "LANGUAGE", icon: "typescript" },
  { name: "JavaScript", category: "LANGUAGE", icon: "javascript" },
  { name: "Node.js", category: "BACKEND", icon: "nodejs" },
  { name: "NestJS", category: "BACKEND", icon: "nestjs" },
  { name: "Express", category: "BACKEND", icon: "express" },
  { name: "Tailwind", category: "FRONTEND", icon: "tailwind" },
  { name: "CSS3", category: "FRONTEND", icon: "css" },
  { name: "HTML5", category: "FRONTEND", icon: "html" },
  { name: "Redux", category: "FRONTEND", icon: "redux" },
  { name: "Prisma", category: "BACKEND", icon: "prisma" },
  { name: "PostgreSQL", category: "DATABASE", icon: "postgresql" },
  { name: "MySQL", category: "DATABASE", icon: "mysql" },
  { name: "MongoDB", category: "DATABASE", icon: "mongodb" },
  { name: "Redis", category: "DATABASE", icon: "redis" },
  { name: "Docker", category: "DEVOPS", icon: "docker" },
  { name: "Vercel", category: "DEVOPS", icon: "vercel" },
  { name: "Linux", category: "DEVOPS", icon: "linux" },
  { name: "Git", category: "DEVOPS", icon: "git" },
  { name: "GitHub", category: "DEVOPS", icon: "github" },
  { name: "Figma", category: "DESIGN", icon: "figma" },
  { name: "Postman", category: "TOOL", icon: "postman" },
  { name: "VS Code", category: "TOOL", icon: "vscode" },
];

const TechnicalExperience: React.FC = () => {
  return (
    <section id="tech-stack" className="relative min-h-screen py-32 bg-[#050505] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#00D1FF] opacity-[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-600 opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-[#00D1FF] text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Powering my creations with</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-6 leading-none">
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">ARSENAL</span>
            </h2>
            <div className="h-1 w-24 bg-[#00D1FF] mx-auto rounded-full" />
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative z-10 flex flex-col items-center p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#111111]/40 border border-white/5 backdrop-blur-sm hover:border-[#00D1FF]/30 transition-all duration-500 overflow-hidden shadow-2xl">
                
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00D1FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Original Logo with "Football" Style Container */}
                <div className="relative w-12 h-12 md:w-20 md:h-20 mb-3 md:mb-6 flex items-center justify-center">
                  {/* Orbiting Ring */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#00D1FF]/50 group-hover:scale-110 transition-all duration-700" />
                  
                  {/* Inner Logo Circle */}
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/5 p-2 md:p-3 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 shadow-xl overflow-hidden">
                    <img 
                      src={`https://skillicons.dev/icons?i=${tech.icon}`} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="text-center relative z-10">
                  <h3 className="text-[9px] md:text-[11px] font-black tracking-widest text-white uppercase mb-1">{tech.name}</h3>
                  <p className="text-[7px] md:text-[8px] font-bold tracking-[0.2em] text-gray-500 group-hover:text-[#00D1FF] transition-colors">
                    {tech.category}
                  </p>
                </div>
              </div>
              
              {/* Card Shadow/Depth */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or Label */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24 opacity-20"
        >
          <p className="text-[10px] tracking-[1em] uppercase text-white">Continuous Learning...</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExperience;
