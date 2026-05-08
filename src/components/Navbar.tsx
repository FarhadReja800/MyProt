import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState("home");
  
  // Transform logic for bottom-to-top movement
  const yValue = useTransform(
    scrollY, 
    [0, 100, 600], 
    [location.pathname === "/" ? 90 : 0, location.pathname === "/" ? 90 : 0, 0]
  );

  const springY = useSpring(yValue, { stiffness: 100, damping: 30 });
  const topPosition = useTransform(springY, (v) => `${v}%`);

  const navLinks = [
    { id: "home", name: "HERO", path: "/#home" },
    { id: "about", name: "ABOUT", path: "/#about" },
    { id: "skills", name: "RESUME", path: "/#skills" },
    { id: "tech-stack", name: "SKILLS", path: "/#tech-stack" },
    { id: "portfolio", name: "PROJECTS", path: "/#portfolio" },
    { id: "contact", name: "CONTACT", path: "/#contact" },
  ];

  // Intersection Observer to detect active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = path.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay - Independent of Navbar container */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-[#1a1b1e] p-10 flex flex-col justify-center space-y-8"
          >
            <div className="absolute top-10 right-10">
               <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white/50 hover:text-[#C7A750] uppercase text-[10px] font-black tracking-widest"
               >
                 Close [x]
               </button>
            </div>
            
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={(e) => {
                    handleScroll(e, link.path);
                    setIsMenuOpen(false);
                  }}
                  className={`text-[14px] font-bold uppercase tracking-[0.4em] hover:text-[#C7A750] transition-colors ${activeSection === link.id ? "text-[#C7A750]" : "text-white"}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Desktop Navbar - Hidden on Mobile */}
      <motion.nav 
        style={{ top: topPosition }}
        className="fixed left-0 md:left-20 right-0 z-[100] h-16 md:h-20 bg-[#1a1b1e]/95 backdrop-blur-md border-t border-b border-white/5 hidden md:flex items-center shadow-2xl"
      >
        {/* Navigation Links */}
        <div className="flex-grow flex items-center justify-center px-4 overflow-x-auto no-scrollbar scroll-smooth">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <div key={link.name} className="flex items-center h-full flex-shrink-0">
                <Link
                  to={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="px-4 md:px-6 py-2 group flex items-center space-x-2 md:space-x-3 relative"
                >
                  <motion.div 
                    animate={{ 
                      backgroundColor: isActive ? "#C7A750" : "rgba(255,255,255,0.2)",
                      width: isActive ? 12 : 8 
                    }}
                    className="h-[2px] rounded-full"
                  />
                  
                  <motion.span 
                    animate={{ 
                      color: isActive ? "#C7A750" : "rgba(255,255,255,0.4)",
                    }}
                    className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap"
                  >
                    {link.name}
                  </motion.span>
                </Link>
                {index < navLinks.length - 1 && (
                  <div className="h-4 w-[1px] bg-white/5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Coordinates */}
        <div className="h-full px-6 border-l border-white/5 hidden xl:flex items-center flex-shrink-0">
          <div className="text-[10px] font-black tracking-[0.5em] text-[#C7A750] whitespace-nowrap">23.8103° N, 90.4125° E</div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
