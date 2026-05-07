import React from "react";

const Experience: React.FC = () => (
  <section
    className="page-container"
    style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1b2838, #274060)",
      color: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(8px)",
    }}
  >
    <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Experience</h1>
    <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
      Here you can showcase your professional experience, internships, and notable projects.
      Add detailed bullet points or timeline entries as needed.
    </p>
  </section>
);

export default Experience;
