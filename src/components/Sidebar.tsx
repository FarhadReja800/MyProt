import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Github, Linkedin, Menu } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-[#111111] border-r border-white/5 flex flex-col items-center justify-between py-6 md:py-10 z-[120]">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-white/5 rounded-lg flex items-center justify-center font-black text-[#C7A750] text-base md:text-xl border border-white/10 group-hover:bg-[#C7A750] group-hover:text-black transition-all">
           FR
          </div>
        </Link>

        {/* Menu Trigger - Only visible on mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center space-y-1.5 group active:scale-95 transition-transform"
        >
          <motion.div 
            animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white group-hover:bg-[#C7A750] transition-colors" 
          />
          <motion.div 
            animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-5 h-[2px] bg-white group-hover:bg-[#C7A750] transition-colors" 
          />
          <span className="text-[7px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white uppercase mt-2">
            {isMenuOpen ? "CLOSE" : "MENU"}
          </span>
        </button>

        {/* Socials - Hidden on small mobile heights or just keep them small */}
        <div className="flex flex-col space-y-6 text-white/30">
          <a href="#" className="hover:text-[#C7A750] transition-colors"><Facebook size={16} /></a>
          <a href="#" className="hover:text-[#C7A750] transition-colors"><Twitter size={16} /></a>
          <a href="#" className="hover:text-[#C7A750] transition-colors"><Github size={16} /></a>
          <a href="#" className="hover:text-[#C7A750] transition-colors"><Linkedin size={16} /></a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
