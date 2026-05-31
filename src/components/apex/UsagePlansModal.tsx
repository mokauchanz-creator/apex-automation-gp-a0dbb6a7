import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    color: "#1f8a70",
    contracts: "100 contracts/mo",
    firm: "Small firms 1–5 attorneys",
    words: "5k–20k words per contract",
  },
  {
    name: "PROFESSIONAL",
    color: "#2c6fbb",
    contracts: "600 contracts/mo",
    firm: "Medium firms 6–20 attorneys",
    words: "20k–80k words per contract",
  },
  {
    name: "ENTERPRISE",
    color: "#a07b1f",
    contracts: "1,200 contracts/mo",
    firm: "Large firms 20+ attorneys",
    words: "80k–150k words per contract",
  },
  {
    name: "CUSTOM",
    color: "#6b3fa0",
    contracts: "Unlimited",
    firm: "Any size · Any volume",
    words: "Any word count",
  },
];

export default function UsagePlansModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            backgroundColor: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25rem",
            overflowY: "auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              maxWidth: 1100,
              width: "100%",
              padding: "2rem",
              position: "relative",
              maxHeight: "90vh",
              overflowY: "auto",
            }}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "none",
                border: "none",
                color: "var(--color-text)",
                cursor: "pointer",
                padding: 8,
                minHeight: 44,
                minWidth: 44,
              }}
            >
              <X size={24} />
            </button>

            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <span
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Pricing
              </span>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
                Usage <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>Plans</span>
              </h2>
            </div>

            <div
              className="plans-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
              }}
            >
              {plans.map((p) => (
                <div
                  key={p.name}
                  style={{
                    backgroundColor: p.color,
                    borderRadius: 6,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff",
                  }}
                >
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: "1rem",
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    {p.contracts}
                  </div>
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontSize: "0.9rem",
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                      flex: 1,
                    }}
                  >
                    {p.firm}
                  </div>
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    {p.words}
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @media (max-width: 768px) {
                .plans-grid { grid-template-columns: 1fr 1fr !important; }
              }
              @media (max-width: 480px) {
                .plans-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
