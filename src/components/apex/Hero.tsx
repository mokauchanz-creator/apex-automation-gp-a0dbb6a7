import { motion } from "framer-motion";

export default function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section
      className="hero-section"
      style={{ position: "relative", display: "flex", flexDirection: "column", zIndex: 10 }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: "100px",
          paddingBottom: "2rem",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: 800 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-gold)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--color-text-muted)",
                }}
              >
                Overnight Automation
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 7vw, 5.5rem)",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
                color: "var(--color-text)",
              }}
            >
              Automation Built for <br />
              <span className="text-gold" style={{ fontStyle: "italic" }}>
                Professional Firms.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2.4vw, 1.25rem)",
                color: "var(--color-text-muted)",
                marginBottom: "2rem",
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              While you sleep, we deliver. Requests submitted by 5 PM EST are processed and ready by
              9 AM EST — your team starts each day with work already done.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  padding: "1rem 2rem",
                  backgroundColor: "var(--color-text)",
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  minHeight: 48,
                }}
                onClick={onOpenBooking}
              >
                Book Demo
              </button>
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  paddingLeft: "1.25rem",
                }}
              >
                Trusted by firms across USA, UK and SA
              </span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
