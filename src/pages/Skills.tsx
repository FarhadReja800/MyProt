import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PencilRuler } from "lucide-react";

const experiences = [
  {
    company: "Gloucestershire College",
    period: "2009 — 2011, Student",
    description: "I studied a National Diploma in Graphic Design, and earning my triple distinction certificate. Shortly after I studied and successfully passed a HND course in Multimedia & Graphic Design."
  },
  {
    company: "Alpha Response",
    period: "2012 — 2014, Graduate Developer",
    description: "During my studies, I got my first job as a developer located in Gloucester. My duties included web development of a project called Joe's Frontshop for the company."
  },
  {
    company: "Corin Design",
    period: "2015 — 2018, Designer & Frontend Developer",
    description: "Joining a small team in Cirencester, I was responsible for the creation of branding, marketing, sitemaps, wireframes, mockups, web designs and front-end web development."
  },
  {
    company: "ECOMSILVER",
    period: "2017 — 2018, Designer & Frontend Developer",
    description: "During my time at Corin Design, I also worked for an Ecommerce software company. My duties included the design of branding, marketing and front-end web development."
  }
];

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JS", level: 85 },
  { name: "Responsive Design", level: 98 },
  { name: "Webflow", level: 75 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#1a1b1e] text-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF5722] rounded-lg mb-6 transform rotate-45">
            <div className="-rotate-45 text-white">
              <PencilRuler size={24} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-widest mb-4 uppercase">
            SKILLS & <span className="text-gray-500">EXPERIENCE</span>
          </h1>
        </motion.div>

        {/* Experience Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-20"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#1a1b1e] p-8 md:p-12 hover:bg-[#25262b] transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-1 uppercase tracking-wider">{exp.company}</h3>
              <p className="text-[10px] uppercase tracking-widest text-[#FF5722] mb-6 font-bold">{exp.period}</p>
              <p className="text-gray-400 text-sm leading-relaxed font-light text-center md:text-left">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="max-w-2xl mx-auto space-y-8 mb-20">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">{skill.name}</span>
                <span className="text-[10px] text-[#FF5722] font-bold">{skill.level}%</span>
              </div>
              <div className="h-[1px] w-full bg-white/10 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-[#FF5722]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-[#FF5722] text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#F4511E] transition-all shadow-xl shadow-orange-500/20 inline-block"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
