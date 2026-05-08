import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 py-12 md:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C7A750] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[10px] font-black tracking-[0.5em] text-[#C7A750] uppercase">Handcrafted by me</span>
            <p className="text-gray-500 text-sm font-medium">
              © {new Date().getFullYear()} <span className="text-white font-black">FARHAD REJA</span>. All rights reserved.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md"
          >
            <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Built with
            </span>
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              role="img" 
              aria-label="heart"
              className="text-sm"
            >
              ❤️
            </motion.span>
            <span className="text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              using <span className="text-white">React</span> • <span className="text-white">TypeScript</span> • <span className="text-white">Vite</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
