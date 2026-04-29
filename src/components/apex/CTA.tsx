import { motion } from "framer-motion";

export default function CTA({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <>
      <section
        id="cta"
        className="section-pad"
        style={{
          padding: "8rem 0",
          backgroundColor: "var(--color-bg-secondary)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          scrollMarginTop: 80,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                  padding: "0.5rem 1rem",
                  borderRadius: 100,
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#ef4444",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--color-gold)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Update: 4/5 Pilot Slots Remaining
                </span>
              </div>

              <h2 style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1.1, marginTop: "1.5rem" }}>
                Start Your 14-Day <br />
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                  }}
                >
                  Concierge Pilot.
                </span>
              </h2>

              <p
                style={{
                  fontSize: "clamp(1rem, 2.4vw, 1.2rem)",
                  color: "var(--color-text-muted)",
                  marginTop: "1.25rem",
                  maxWidth: 600,
                }}
              >
                No contracts. No commitments. Measurable results in 14 days or you owe nothing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: "100%" }}
            >
              <div
                className="stack-mobile card-pad-mobile"
                style={{
                  padding: "2.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  backgroundColor: "var(--color-bg)",
                  textAlign: "left",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: "1 1 260px" }}>
                  <h4 style={{ fontSize: "clamp(1.15rem, 3vw, 1.5rem)", marginBottom: "0.5rem" }}>
                    Your Competitors Are Already Automating.
                  </h4>
                  <p style={{ color: "var(--color-text-muted)", maxWidth: 400, lineHeight: 1.6, fontSize: "0.95rem" }}>
                    Every day without automation is a day your rivals close the gap. The firms that act now define the
                    standard for the next decade.
                  </p>
                </div>
                <button
                  onClick={onOpenBooking}
                  style={{
                    padding: "1rem 2rem",
                    backgroundColor: "var(--color-gold)",
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                    minHeight: 48,
                  }}
                >
                  Book Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </section>

      <footer
        style={{
          padding: "3rem 0 2rem 0",
          backgroundColor: "var(--color-bg)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="container">
          <div
            className="stack-mobile"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    border: "1px solid var(--color-gold)",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span className="text-gold" style={{ fontSize: "1.2rem", fontFamily: "var(--font-serif)" }}>
                    A
                  </span>
                </div>
                <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: 1 }}>
                  Apex<span style={{ color: "var(--color-gold)" }}>Automation</span>
                </span>
              </div>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", maxWidth: 300 }}>
                Automation Built for Professional Firms. While You Sleep, We Deliver.
              </p>
            </div>

            <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <span
                  style={{
                    color: "var(--color-text)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "0.25rem",
                  }}
                >
                  Platform
                </span>
                <a href="#calculator" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                  Calculator
                </a>
                <a href="#industries" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                  Industries
                </a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <span
                  style={{
                    color: "var(--color-text)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "0.25rem",
                  }}
                >
                  Company
                </span>
                <a href="#compliance" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                  Compliance
                </a>
                <a href="#results" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                  Results
                </a>
              </div>
            </div>
          </div>

          <div
            className="stack-mobile"
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-muted)",
              fontSize: "0.8rem",
            }}
          >
            <span>© 2026 Apex Automation Group. All rights reserved.</span>
            <span>Serving USA, UK and SA</span>
          </div>
        </div>
      </footer>
    </>
  );
}
