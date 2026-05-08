import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Plus, BookOpen } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Frontend Developer",
    company: "betapia group",
    period: "07-02-2025 - Present",
    type: "work",
    description: "I specialize in building modern, fast, and responsive user interfaces. Using technologies like React, Next.js, and other modern web tools, I develop web applications that are user-friendly, visually appealing, and highly performant.",
    points: ["Designing and developing modern, responsive UI", "Building interactive web applications using React / Next.js", "API integration and dynamic feature implementation", "Performance optimization and clean code architecture", "Ensuring cross-browser compatibility and mobile responsiveness"]
  },
  {
    id: "02",
    role: "Full Stack Web Development",
    company: "Programming Hero",
    period: "2023 - 2024",
    type: "work",
    description: "I have completed advanced learning in web development, including Next Level courses and Web Development courses from Programming Hero, which helped me strengthen my practical skills and real-world project experience.",
    points: ["Designing and developing modern, responsive UI", "Building interactive web applications using React / Next.js", "API integration and dynamic feature implementation", "Performance optimization and clean code architecture"]
  }
];

const education = [
  {
    id: "03",
    degree: "B.sc in Computer Science",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    period: "2020 - 2024",
    type: "education",
    description: "A solid foundation built on strong theoretical knowledge and hands-on practical innovation. I completed my Bachelor of Science (BSc) in Computer Science and Engineering from Bangladesh University of Engineering and Technology (BUET), where I developed a deep understanding of core programming concepts, algorithms, and software design. This academic background shaped my perspective on how technology should be designed to serve people, solve real-world problems, and create meaningful user experiences.",
    score: "3.00 GPA"
  }
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "Node.js / Express", level: 90 },
  { name: "Redux", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "MongoDB / PostgreSQL", level: 88 },
  { name: "Tailwind CSS", level: 98 },
  { name: "CSS3 / HTML5", level: 90 }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative min-h-screen py-10 bg-transparent overflow-hidden">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-32">
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[#C7A750] text-[10px] font-black tracking-[0.5em] uppercase block mb-4"
          >
            My Professional Path
          </motion.span>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
            RESUME & <span className="text-gray-500">EXPERTISE</span>
          </h2>
        </div>

        <div className="space-y-10">
          {/* COMBINED TIMELINE (Education first, then Work) */}
          {[...education, ...experiences].map((item, index) => {
            const displayId = (index + 1).toString().padStart(2, '0');
            return (
              <div key={item.id} className="relative grid grid-cols-10 gap-4 items-start">
                
                {/* Left Column: Numbering */}
                <div className="col-span-2 relative flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="absolute -left-4 top-0 -rotate-90 origin-left"
                  >
                    <span className="text-4xl md:text-6xl font-black text-gray-500/10 uppercase tracking-tighter">
                      {displayId}.
                    </span>
                  </motion.div>
                <div className="absolute left-1/2 top-4 w-[2px] h-full bg-white/5 -translate-x-1/2 hidden md:block" />
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   className="w-3 h-3 rounded-full bg-[#C7A750] z-10 mt-10 shadow-[0_0_15px_rgba(199,167,80,0.5)]" 
                />
              </div>

              {/* Main Content Area */}
              <div className="col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Title and Icon Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-sm relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    {item.type === 'education' ? <GraduationCap size={60} /> : <Briefcase size={60} />}
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-[#C7A750] flex items-center justify-center rounded-sm shadow-xl">
                      {item.type === 'education' ? <GraduationCap size={24} className="text-white" /> : <Briefcase size={24} className="text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#C7A750] mb-5 uppercase tracking-wider">
                        {"role" in item ? item.role : item.degree}
                      </h3>
                   

                      <h4 className="text-lg font-medium text-white capitalize tracking-widest">
                      {"company" in item ? item.company : item.institution}
                    </h4>
                       <p className="text-[#C7A750] text-sm font-bold  tracking-widest mt-5">{item.period}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Description Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-8 bg-white/5 border border-white/10 p-8 rounded-sm relative flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    
                    {/* {"score" in item && <p className="text-[#C7A750] font-bold text-sm tracking-widest uppercase">Score: {item.score}</p>} */}
                    <p className="text-white/2 font-serif italic text-xl leading-relaxed">
                      {item.description}
                    </p>
                    {"points" in item && (
                      <ul className="space-y-2 mt-4">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-[13px] text-gray-100 font-normal capitalize tracking-wider">
                            <span className="w-1 h-1 bg-[#C7A750] rounded-full" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  {/* <div className="mt-8 flex justify-end">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-[#C7A750] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm"
                    >
                      Details <Plus size={14} />
                    </motion.button>
                  </div> */}
                </motion.div>

              </div>
            </div>
          );
        })}

          {/* TECHNICAL SKILLS SECTION */}
          <div className="pt-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-500 text-[10px] font-black tracking-[0.6em] uppercase block mb-4"
                >
                  Technical Mastery
                </motion.span>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-12">
                  My Core <br /> <span className="text-[#C7A750]">Stack</span>
                </h3>
                <p className="text-gray-500 font-serif italic text-lg leading-relaxed max-w-md">
                  I continuously evolve my skill set to stay ahead of modern web standards and deliver high-performance digital solutions.
                </p>
              </div>

              <div className="space-y-10">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white font-black">{skill.name}</span>
                      <span className="text-[10px] text-[#C7A750] font-black">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute top-0 left-0 h-full bg-[#C7A750] shadow-[0_0_10px_rgba(199,167,80,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
