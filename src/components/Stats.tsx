import React, { useRef, useEffect } from "react";
import { motion, useTransform, useSpring, useInView } from "framer-motion";

const StatCounter: React.FC<{ value: string; label: string; subLabel: string; suffix?: string }> = ({ value, label, subLabel, suffix = "+" }) => {
  const targetValue = parseInt(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Use Framer Motion's useSpring for ultra-smooth counting
  const count = useSpring(0, {
    stiffness: 20,
    damping: 30,
  });

  const displayCount = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      count.set(targetValue);
    }
  }, [isInView, count, targetValue]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
    >
      <div className="flex items-center">
        <motion.span className="text-6xl md:text-8xl font-black text-white">
          {displayCount}
        </motion.span>
        <span className="text-4xl md:text-6xl font-black text-[#C7A750] ml-2">{suffix}</span>
      </div>
      <div>
        <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-white mb-1">{label}</h4>
        <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest">{subLabel}</p>
      </div>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-40 pt-40 border-t border-white/5 pb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
        <StatCounter 
          value="42" 
          label="Tasks Delivered" 
          subLabel="for real products" 
        />
        <StatCounter 
          value="5" 
          label="Years Coding" 
          subLabel="as a developer" 
        />
        <StatCounter 
          value="95" 
          label="Team Feedback" 
          subLabel="positive collaboration" 
          suffix="%"
        />
        <StatCounter 
          value="12" 
          label="Product Value" 
          subLabel="supported through features" 
        />
      </div>
    </div>
  );
};

export default Stats;
