import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative">
        <h1 className="text-[10rem] md:text-[15rem] font-bold text-white/5 select-none">404</h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Lost in Space?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-8">
            The page you're looking for has drifted into deep space. Let's get you back home.
          </p>
          <Link 
            to="/" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/30"
          >
            Back to Base
          </Link>
        </div>
      </div>
      
      {/* Decorative stars/particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-emerald-500/50 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default NotFound;
