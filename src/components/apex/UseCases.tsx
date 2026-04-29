import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

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
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Dynamically adjust height and animation center based on screen size
  const containerHeight = isMobile ? 250 : 400;
  const itemHeight = isMobile ? 50 : 70;
  const centerOffset = containerHeight / 2 - itemHeight / 2;

  return (
    <section
      id="use-cases"
      style={{
        padding: isMobile ? "4rem 0" : "8rem 0",
        backgroundColor: "var(--color-bg)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        scrollMarginTop: "100px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? "2rem" : "4rem",
          }}
        >
          {/* Text & Button Container */}
          <div style={{ flex: "1 1 300px", textAlign: isMobile ? "center" : "left" }}>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                lineHeight: 1.2,
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
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "var(--color-text)",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: "2px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-text)";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--color-text)";
              }}
            >
              Explore Services
            </button>
          </div>

          {/* Animation Container */}
          <div
            style={{
              flex: "1 1 300px",
              height: `${containerHeight}px`,
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {/* Fading gradients for disappearing effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "30%",
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
                height: "30%",
                background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
                zIndex: 10,
                pointerEvents: "none",
              }}
            />

            <motion.div
              animate={{ y: centerOffset - currentIndex * itemHeight }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                width: "100%",
                top: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
              }}
            >
              {useCases.map((useCase, index) => {
                const isActive = index === currentIndex;
                const distance = Math.abs(index - currentIndex);
                const opacity = isActive ? 1 : Math.max(0.05, 0.4 - distance * 0.15);
                const scale = isActive ? 1 : 0.95;
                const color = isActive ? "var(--color-text)" : "var(--color-text-muted)";

                return (
                  <motion.div
                    key={index}
                    animate={{ opacity, scale, color }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: `${itemHeight}px`,
                      display: "flex",
                      alignItems: "center",
                      fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                      fontFamily: "var(--font-serif)",
                      whiteSpace: "nowrap",
                      transformOrigin: isMobile ? "center center" : "left center",
                    }}
                  >
                    {useCase}
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
