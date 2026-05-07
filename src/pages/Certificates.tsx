import React from "react";

const Certificates: React.FC = () => (
  <section
    className="page-container"
    style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1b1b30, #2a2a4b)",
      color: "#fff",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      backdropFilter: "blur(9px)",
    }}
  >
    <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Certificates</h1>
    <p style={{ fontSize: "1.2rem", maxWidth: "800px", textAlign: "center" }}>
      Show your professional certifications here (AWS, Google Cloud, Coursera, etc.).
      Add a responsive grid of certificate cards for a polished look.
    </p>
  </section>
);

export default Certificates;
