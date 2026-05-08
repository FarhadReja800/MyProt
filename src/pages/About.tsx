import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Monitor, Smartphone, Zap, ShoppingBag } from "lucide-react";

const services = [
  {
    title: "Web Design",
    description: "Creating modern, responsive websites with a focus on performance and usability.",
    icon: <Monitor size={24} />,
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and experiences that delight users.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "Branding",
    description: "Developing unique brand identities that resonate with your target audience.",
    icon: <Zap size={24} />,
  },
  {
    title: "Ecommerce",
    description: "Building powerful online stores that drive sales and business growth.",
    icon: <ShoppingBag size={24} />,
  }
];

const About: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yellowY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-40 bg-transparent overflow-hidden"
    >
      
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-around">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>
      
      {/* Ghost Text - Hidden on mobile */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="absolute left-0 -translate-y-1/3 -rotate-90 pointer-events-none opacity-40 hidden md:block"
      >
        <span className="text-[15vw]  font-black text-gray-600 uppercase ">ABOUT ME</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Left Side: Image Section */}
          <div className="w-full lg:w-[45%] relative">
            {/* Accent box - Hidden on mobile or made smaller */}
            <motion.div 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yellowY : 0 }}
              className="absolute -left-4 md:-left-6 top-8 md:top-12 bottom-8 md:bottom-12 w-24 md:w-32 bg-[#00D1FF] z-0" 
            />
            
            <motion.div 
              style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? imageY : 0 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                <motion.img 
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src="/About.png" 
                  alt="Farhad Reja"
                  className="w-full h-full object-center opacity-black/20 "
                />
                
                <div className="absolute top-4 md:top-8 left-4 md:left-8 bg-[#111] px-4 md:px-6 py-2 border border-white/10">
                  <span className="text-[9px] md:text-[10px] font-black tracking-[0.4em] text-white uppercase">REJA.</span>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -left-8 md:-left-12 top-0 text-[#00D1FF] text-7xl md:text-9xl font-black opacity-20 select-none"
              >
                //
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Animated Content */}
          <div className="w-full lg:w-[55%] space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-500 text-[10px] font-black tracking-[0.6em] uppercase block"
              >
                Creative Force
              </motion.span>

              <motion.h2 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-black text-white leading-tight uppercase"
              >
                Innovative solutions <br />
                to boost <span className="text-[#00D1FF]">your creative</span> projects
              </motion.h2>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-[#00D1FF]" 
              />

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-gray-500 font-serif italic text-xl leading-relaxed max-w-xl"
              >
                I'm a Fullstack Developer with 3+ years of experience and 1+ year working in industrial projects, focused on building fast, reliable, and high-performance websites. I enjoy working with React and Next.js on the frontend, using TailwindCSS to create clean and responsive UIs that feel smooth and modern. On the backend, I work with Node.js, Express, and NestJS to build well-structured APIs and services. I'm comfortable with PostgreSQL, SQL, MongoDB, and Supabase, so I can design solid databases and handle both relational and document-based data. I also use GitHub for version control and follow good practices to keep the code clean, maintainable, and easy to scale. My goal is to turn client ideas into working, high-quality web applications that perform well and are easy to update over time.
              </motion.p>
            </div>

            {/* Services Grid with Staggered Reveal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#00D1FF] opacity-10 group-hover:opacity-100 transition-opacity rounded-sm" />
                    <span className="relative text-[#00D1FF] group-hover:text-black transition-colors">{service.icon}</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-white uppercase tracking-widest">{service.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-serif italic opacity-60 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Button Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href="#portfolio"
                className="px-8 py-3 bg-[#C7A750] text-white font-black text-xs rounded-md tracking-[0.3em] uppercase hover:bg-[#f1d37f] transition-all shadow-2xl shadow-[#C7A750]/20"
              >
                My Portfolio
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
