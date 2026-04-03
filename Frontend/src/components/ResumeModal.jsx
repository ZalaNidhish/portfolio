import React from "react";

const ResumePage = () => {
  return (
    <div
      style={{
        padding: "100px 16px 40px", // 👈 space for navbar (adjust if needed)
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "900px" }}>

        {/* Glass Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            padding: "12px 18px",
            borderRadius: "12px",

            background: "rgba(255, 255, 255, 0.06)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",

            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)",

            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <h2 style={{ margin: 0, color: "#fff", fontSize: "1.4rem" }}>
            My Resume
          </h2>

          <a href="/resume.pdf" download>
            <button
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                cursor: "pointer",

                background: "rgba(0, 212, 255, 0.15)",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                color: "#00d4ff",
                fontWeight: "600",

                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",

                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.background = "rgba(0, 212, 255, 0.3)";
              }}
              onMouseOut={(e) => {
                e.target.style.background = "rgba(0, 212, 255, 0.15)";
              }}
            >
              Download Resume
            </button>
          </a>
        </div>

        {/* Resume Image */}
        <div
          style={{
            width: "100%",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src="/resume.jpg"
            alt="Resume"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default ResumePage;