import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useCases = [
  "Contract Drafting",
  "Due Diligence",
  "Patient Scheduling",
  "Medical Scribing",
  "Billing Automation",
  "Document Review",
  "Intake Processing",
];

export default function UseCases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % useCases.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        scrollMarginTop: 80,
      }}
    >
      <div className="container">
        <div
          className="stack-mobile"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
          }}
        >
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                lineHeight: 1.3,
                fontWeight: 300,
                color: "var(--color-text)",
              }}
            >
              Professional firms
              <br />
              use Apex for
            </h2>
            <button
              style={{
                marginTop: "2rem",
                padding: "0.85rem 1.5rem",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "var(--color-text)",
                fontSize: "0.8rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: 2,
                minHeight: 48,
              }}
            >
              Explore Services
            </button>
          </div>

          <div
            style={{
              flex: "1 1 320px",
              minWidth: 0,
              height: 320,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 100,
                background: "linear-gradient(to bottom, var(--color-bg) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: 100,
                background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            <motion.div
              animate={{ y: 130 - currentIndex * 60 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "absolute", width: "100%", top: 0 }}
            >
              {useCases.map((u, i) => {
                const active = i === currentIndex;
                const distance = Math.abs(i - currentIndex);
                const opacity = active ? 1 : Math.max(0.05, 0.4 - distance * 0.15);
                const scale = active ? 1 : 0.95;
                const color = active ? "var(--color-text)" : "var(--color-text-muted)";
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity, scale, color }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: 60,
                      display: "flex",
                      alignItems: "center",
                      fontSize: "clamp(1.5rem, 6vw, 3.5rem)",
                      fontFamily: "var(--font-serif)",
                      whiteSpace: "nowrap",
                      transformOrigin: "left center",
                    }}
                  >
                    {u}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
