import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Plus } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Course designer - San Diego",
    company: "Passage of Lorem Ipsum",
    period: "2011-2013",
    type: "education",
    description: "We started as a small, subdue, called hath give fourth. Them one over saying. So the god, greater. You. Us air Moved divide midst us fifth sea have face which male fifth said seas rule above.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "02",
    role: "Work in company \"Generators\"",
    company: "Making this the first",
    period: "2010-2013",
    type: "work",
    description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
    points: [
      "Door portals plan",
      "Furniture specifications",
      "Interior design"
    ]
  },
  {
    id: "03",
    role: "Work in company \"Available\"",
    company: "Complete the project \"domik\"",
    period: "2011-2013",
    type: "work",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative min-h-screen py-40 bg-transparent overflow-hidden">

      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="space-y-40">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative grid grid-cols-12 gap-4 items-start">

              {/* Left Column: Numbering and Connector */}
              <div className="col-span-2 relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute -left-4 top-0 -rotate-90 origin-left"
                >
                  <span className="text-7xl md:text-9xl font-black text-gray-500/10 uppercase tracking-tighter">
                    {exp.id}.
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
                    {exp.type === 'education' ? <GraduationCap size={120} /> : <Briefcase size={120} />}
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="w-12 h-12 bg-[#C7A750] flex items-center justify-center rounded-sm shadow-xl">
                      {exp.type === 'education' ? <GraduationCap size={24} className="text-white" /> : <Briefcase size={24} className="text-white" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider">{exp.role}</h3>
                      <p className="text-[#C7A750] text-sm font-bold mt-1 tracking-widest">{exp.period}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Description Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-sm relative flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <h4 className="text-lg font-black text-white uppercase tracking-widest">{exp.company}</h4>
                    <p className="text-gray-400 font-serif italic text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.points && (
                      <ul className="space-y-2 mt-4">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs text-gray-500 font-bold uppercase tracking-wider">
                            <span className="w-1 h-1 bg-[#C7A750] rounded-full" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-[#C7A750] text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm"
                    >
                      Details <Plus size={14} />
                    </motion.button>
                  </div>
                </motion.div>

                {/* Optional Image Column */}
                {exp.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-3 h-full min-h-[250px]"
                  >
                    <div className="w-full h-full rounded-sm overflow-hidden border border-white/10 relative group">
                      <img
                        src={exp.image}
                        alt={exp.role}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </motion.div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
