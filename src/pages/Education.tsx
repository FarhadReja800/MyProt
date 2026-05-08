// import React from "react";
// import { motion } from "framer-motion";
// import { GraduationCap, Award, BookOpen } from "lucide-react";

// const educationData = [
//   {
//     id: "01",
//     degree: "B.Tech in Computer Science",
//     institution: "XYZ University",
//     period: "2019 - 2023",
//     score: "8.48 CGPA",
//     description: "Specialized in Software Engineering and Artificial Intelligence. Participated in various hackathons and technical workshops.",
//     details: ["Data Structures", "Algorithms", "Web Technologies", "Cloud Computing"]
//   },
//   {
//     id: "02",
//     degree: "Higher Secondary Education",
//     institution: "ABC College",
//     period: "2017 - 2019",
//     score: "92%",
//     description: "Focused on Science and Mathematics. Developed a strong foundation in analytical thinking and problem-solving.",
//     details: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
//   }
// ];

// const Education: React.FC = () => {
//   return (
//     <section id="education" className="relative min-h-screen py-40 bg-transparent overflow-hidden">
      
//       {/* Background Grid Lines */}
//       <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around">
//         {[1, 2, 3, 4, 5, 6].map((i) => (
//           <div key={i} className="w-[1px] h-full bg-white" />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="space-y-40">
//           {educationData.map((edu, index) => (
//             <div key={edu.id} className="relative grid grid-cols-12 gap-4 items-start">
              
//               {/* Left Column: Numbering */}
//               <div className="col-span-2 relative flex flex-col items-center">
//                 <motion.div 
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   className="absolute -left-4 top-0 -rotate-90 origin-left"
//                 >
//                   <span className="text-7xl md:text-9xl font-black text-gray-500/10 uppercase tracking-tighter">
//                     {edu.id}.
//                   </span>
//                 </motion.div>
//                 <div className="absolute left-1/2 top-4 w-[2px] h-full bg-white/5 -translate-x-1/2 hidden md:block" />
//                 <motion.div 
//                    initial={{ scale: 0 }}
//                    whileInView={{ scale: 1 }}
//                    className="w-3 h-3 rounded-full bg-[#C7A750] z-10 mt-10 shadow-[0_0_15px_rgba(199,167,80,0.5)]" 
//                 />
//               </div>

//               {/* Main Content Area */}
//               <div className="col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
//                 {/* Degree and Institution Card */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-sm relative group overflow-hidden"
//                 >
//                   <div className="absolute top-0 right-0 p-8 opacity-5">
//                     <GraduationCap size={120} />
//                   </div>
                  
//                   <div className="relative z-10 space-y-6">
//                     <div className="w-12 h-12 bg-[#C7A750] flex items-center justify-center rounded-sm shadow-xl">
//                       <GraduationCap size={24} className="text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white uppercase tracking-wider">{edu.degree}</h3>
//                       <p className="text-[#C7A750] text-sm font-bold mt-1 tracking-widest">{edu.period}</p>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Info Card */}
//                 <motion.div 
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 }}
//                   className="lg:col-span-8 bg-white/5 border border-white/10 p-8 rounded-sm relative"
//                 >
//                   <div className="grid md:grid-cols-2 gap-10">
//                     <div className="space-y-6">
//                       <h4 className="text-lg font-black text-white uppercase tracking-widest">{edu.institution}</h4>
//                       <p className="text-[#C7A750] font-bold text-sm tracking-widest uppercase">Score: {edu.score}</p>
//                       <p className="text-gray-400 font-serif italic text-sm leading-relaxed">
//                         {edu.description}
//                       </p>
//                     </div>
                    
//                     <div className="space-y-6">
//                       <h5 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Key Courses</h5>
//                       <div className="grid grid-cols-2 gap-4">
//                         {edu.details.map((detail, i) => (
//                           <div key={i} className="flex items-center gap-2 text-[10px] text-white font-bold uppercase tracking-widest">
//                             <BookOpen size={12} className="text-[#C7A750]" />
//                             {detail}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
