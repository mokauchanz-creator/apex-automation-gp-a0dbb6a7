import { motion } from "framer-motion";

const IndustryCard = ({
  title,
  description,
  bgImage,
}: {
  title: string;
  description: string;
  bgImage: string;
}) => (
  <div
    className="card-pad-mobile"
    style={{
      padding: "3rem",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 360,
      backgroundColor: "var(--color-bg)",
      position: "relative",
      overflow: "hidden",
      borderRadius: 4,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1,
      }}
    />

    <div style={{ position: "relative", zIndex: 2 }}>
      <h3
        style={{
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          marginBottom: "1.25rem",
          fontFamily: "var(--font-serif)",
          color: "#fff",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "#eaeaea", lineHeight: 1.6, fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)", maxWidth: "95%" }}>
        {description}
      </p>
    </div>

    <button
      type="button"
      onClick={onLearnMore}
      style={{
        color: "var(--color-gold)",
        fontSize: "0.85rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        position: "relative",
        zIndex: 2,
        marginTop: "2rem",
        fontWeight: 600,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
        alignSelf: "flex-start",
      }}
    >
      Learn More <span>→</span>
    </button>
  </div>
);

export default function Industries({ onOpenBooking }: { onOpenBooking?: () => void }) {

  return (
    <section
      id="industries"
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg)",
        position: "relative",
        zIndex: 10,
        scrollMarginTop: 80,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Industries
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "0 auto", maxWidth: 600 }}>
            Built for Your <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>Profession</span>
          </h2>
        </motion.div>

        <div
          className="single-col-mobile"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <IndustryCard
              title="Law Firms"
              description="From contract drafting to due diligence, we automate the document-heavy workflows that consume your associates' billable hours — delivered before the workday begins."
              bgImage="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <IndustryCard
              title="Private Clinics"
              description="Patient scheduling, medical scribing, billing automation — all handled overnight, HIPAA-compliant, so your clinical staff focuses entirely on patient care."
              bgImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
