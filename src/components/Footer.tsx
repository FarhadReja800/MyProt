import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gradient-to-r from-[#0f0c29] to-[#302b63] bg-opacity-80 text-white py-6 text-center"
      style={{
        // Glass‑morphism effect
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Farhad Reja. All rights reserved.
      </p>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
        Built with <span role="img" aria-label="heart">❤️</span> using React, TypeScript, Vite.
      </div>
    </footer>
  );
};

export default Footer;
