import React from "react";
import { motion } from "framer-motion";
import { PencilRuler, Mail, Phone, MapPin, Clock, Github, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C7A750] rounded-lg mb-6 transform rotate-45">
            <div className="-rotate-45 text-white">
              <PencilRuler size={24} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-widest mb-4 uppercase text-white">
            GET IN <span className="text-gray-500">TOUCH</span>
          </h1>
          <p className="text-lg font-serif italic text-gray-400">
            I'm always open to discussing new projects or creative opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Information Box */}
            <div className="bg-[#1a1b1e] border border-white/5 rounded-2xl p-8 space-y-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#FF5722] transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                  <p className="text-white font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#FF5722] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Phone</p>
                  <p className="text-white font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#FF5722] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Location</p>
                  <p className="text-white font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#FF5722] transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Time Zone</p>
                  <p className="text-white font-medium">{CONTACT_INFO.timezone}</p>
                </div>
              </div>
            </div>

            {/* Connect with Me Box */}
            <div className="bg-[#1a1b1e] border border-white/5 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Connect with Me</h2>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-sm text-gray-300">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-sm text-gray-300">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors text-sm text-gray-300">
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Office Hours Box */}
            {/* <div className="bg-[#1a1b1e] border border-white/5 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Office Hours</h2>
              <div className="space-y-3 text-sm text-gray-400 font-light">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM (IST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">10:00 AM - 2:00 PM (IST)</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1b1e] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF5722] opacity-[0.03] blur-[100px] pointer-events-none" />
            
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#FF5722]/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#FF5722]/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Please leave a message" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-sm focus:outline-none focus:border-[#FF5722]/50 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-4 bg-[#C7A750] text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#C7A750]/80 transition-all shadow-xl shadow-orange-500/20 rounded-xl"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
