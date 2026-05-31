import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    contracts: "100 contracts/mo",
    firm: "Small firms 1–5 attorneys",
    words: "5k–20k words per contract",
  },
  {
    name: "PROFESSIONAL",
    contracts: "600 contracts/mo",
    firm: "Medium firms 6–20 attorneys",
    words: "20k–80k words per contract",
  },
  {
    name: "ENTERPRISE",
    contracts: "1,200 contracts/mo",
    firm: "Large firms 20+ attorneys",
    words: "80k–150k words per contract",
  },
  {
    name: "CUSTOM",
    contracts: "Unlimited",
    firm: "Any size · Any volume",
    words: "Any word count",
  },
];

export default function UsagePlansModal({
  isOpen,
  onClose,
  onSelectPlan,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: () => void;
}) {
  const handleSelect = () => {
    onClose();
    setTimeout(() => onSelectPlan(), 150);
  };

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
              backgroundColor: "var(--color-bg, #0a0a0a)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              maxWidth: 1100,
              width: "100%",
              padding: "2.5rem 2rem",
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

            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", margin: 0 }}>
                Usage{" "}
                <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>
                  Plans
                </span>
              </h2>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                }}
              >
                Select a plan to book a tailored demo
              </p>
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
                <button
                  key={p.name}
                  onClick={handleSelect}
                  className="plan-card"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    color: "var(--color-text)",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                    transition: "border-color 0.25s ease, transform 0.25s ease, background-color 0.25s ease",
                    minHeight: 260,
                  }}
                >
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      fontSize: "0.85rem",
                      color: "var(--color-gold)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {p.contracts}
                  </div>
                  <div
                    style={{
                      padding: "1.25rem 1rem",
                      textAlign: "center",
                      fontSize: "0.9rem",
                      color: "var(--color-text-muted)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
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
                      color: "var(--color-text-muted)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {p.words}
                  </div>
                  <div
                    style={{
                      padding: "0.9rem 1rem",
                      textAlign: "center",
                      fontSize: "0.75rem",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      fontWeight: 600,
                    }}
                  >
                    Book Demo →
                  </div>
                </button>
              ))}
            </div>

            <style>{`
              .plan-card:hover {
                border-color: var(--color-gold) !important;
                background-color: rgba(255,255,255,0.04) !important;
                transform: translateY(-2px);
              }
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
