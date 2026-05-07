import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
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
    const observers: IntersectionObserver[] = [];
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on the upper-middle of the screen
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
    <motion.nav 
      style={{ top: topPosition }}
      className="fixed left-0 md:left-0 right-0 z-[100] h-16 md:h-20 bg-[#1a1b1e]/95 backdrop-blur-md border-t border-b border-white/5 flex items-center shadow-2xl"
    >
      {/* Left Yellow Box - Hidden on very small screens or resized */}
      <div className="h-full w-16 md:w-20 bg-[#00D1FF] flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-black fill-current">
          <path d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15L12,18.17M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
        </svg>
      </div>

      {/* Navigation Links - Scrollable on mobile */}
      <div className="flex-grow flex items-center justify-start md:justify-center px-4 overflow-x-auto no-scrollbar scroll-smooth">
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
                    backgroundColor: isActive ? "#00D1FF" : "rgba(255,255,255,0.2)",
                    width: isActive ? 12 : 8 
                  }}
                  className="h-[2px] rounded-full"
                />
                
                <motion.span 
                  animate={{ 
                    color: isActive ? "#00D1FF" : "rgba(255,255,255,0.4)",
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

      {/* Right Coordinates - Hidden on mobile */}
      <div className="h-full px-6 border-l border-white/5 hidden xl:flex items-center flex-shrink-0">
        <div className="text-[10px] font-black tracking-[0.5em] text-white/20 whitespace-nowrap">23.8103° N, 90.4125° E</div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
