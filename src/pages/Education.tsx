import React from "react";

const Education: React.FC = () => {
  return (
    <section className="page-container" style={{
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
      backdropFilter: "blur(8px)"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Education</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        B.Tech Computer Science – 8.48 CGPA. Graduated from XYZ University.
      </p>
    </section>
  );
};

export default Education;
