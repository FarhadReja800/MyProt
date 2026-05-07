import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Github, Linkedin, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-[#111111] border-r border-white/5 hidden md:flex flex-col items-center justify-between py-10 z-[60]">
      {/* Logo */}
      <Link to="/" className="group">
        <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center font-black text-white text-xl border border-white/10 group-hover:bg-[#00D1FF] group-hover:text-black transition-all">
          N
        </div>
      </Link>

      {/* Menu Trigger (Optional) */}
      <button className="flex flex-col items-center space-y-1 group">
        <div className="w-6 h-[2px] bg-white group-hover:bg-[#00D1FF] transition-colors" />
        <div className="w-4 h-[2px] bg-white group-hover:bg-[#00D1FF] transition-colors" />
        <span className="text-[8px] font-bold tracking-[0.2em] text-white/50 group-hover:text-white uppercase mt-2">Menu</span>
      </button>

      {/* Socials */}
      <div className="flex flex-col space-y-6 text-white/30">
        <a href="#" className="hover:text-[#00D1FF] transition-colors"><Facebook size={18} /></a>
        <a href="#" className="hover:text-[#00D1FF] transition-colors"><Twitter size={18} /></a>
        <a href="#" className="hover:text-[#00D1FF] transition-colors"><Github size={18} /></a>
        <a href="#" className="hover:text-[#00D1FF] transition-colors"><Linkedin size={18} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
