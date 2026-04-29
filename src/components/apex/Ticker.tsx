import { motion } from "framer-motion";

const clients = [
  "HARLOW & PARTNERS",
  "APEX LEGAL",
  "QUANTUM CLINICS",
  "STERLING & CO.",
  "NEXUS GROUP",
  "ORION HEALTH",
  "VANGUARD LAW",
  "MERIDIAN",
];

export default function Ticker() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
        backgroundColor: "rgba(5, 5, 5, 0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 20,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "1rem 0" }}>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
            maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
          }}
        >
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
            style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                style={{
                  margin: "0 2rem",
                  color: "var(--color-text-muted)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.95rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  opacity: 0.6,
                  display: "flex",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <span>{client}</span>
                <div
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "50%",
                    opacity: 0.5,
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="ticker-btn-wrap" style={{ flexShrink: 0, paddingLeft: "1rem", paddingRight: "1.5rem" }}>
          <button
            style={{
              padding: "0.6rem 1.1rem",
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "var(--color-text)",
              fontSize: "0.75rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              borderRadius: 2,
              whiteSpace: "nowrap",
              cursor: "pointer",
              minHeight: 36,
            }}
          >
            Our Customers
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .ticker-btn-wrap { display: none; }
        }
      `}</style>
    </div>
  );
}
