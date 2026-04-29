import { motion } from "framer-motion";

const FeatureCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => (
  <div
    className="card-pad-mobile"
    style={{
      padding: "2.5rem",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      backgroundColor: "rgba(10, 10, 10, 0.5)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      transition: "background-color 0.3s ease",
    }}
  >
    <span
      style={{
        fontSize: "0.75rem",
        color: "var(--color-text-muted)",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      {title}
    </span>
    <h3
      style={{
        fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
        fontFamily: "var(--font-sans)",
        fontWeight: 300,
        color: "var(--color-gold)",
      }}
    >
      {value}
    </h3>
    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{description}</p>
  </div>
);

export default function Features() {
  return (
    <section
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg-secondary)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div id="results" style={{ marginBottom: "5rem", scrollMarginTop: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "3rem" }}
          >
            <span
              style={{
                color: "var(--color-gold)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Why Apex
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", maxWidth: 800, lineHeight: 1.1 }}>
              The firms that move first <br />
              <span style={{ color: "var(--color-text-muted)" }}>capture the advantage.</span>
            </h2>
            <p
              style={{
                marginTop: "1.5rem",
                maxWidth: 600,
                color: "var(--color-text-muted)",
                fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
                lineHeight: 1.6,
              }}
            >
              In professional services, speed is leverage. While your competitors still rely on manual processes,
              your team is already three steps ahead — with every contract reviewed, every intake processed, every
              document ready before the workday begins.
            </p>
          </motion.div>

          <div
            className="single-col-mobile"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 1,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <FeatureCard title="Saved per staff member per week" value="15+ hrs" description="Reclaim billable hours previously lost to manual data entry and document review." />
            <FeatureCard title="Faster document turnaround" value="400%" description="Overnight processing ensures documents are ready the moment your team logs in." />
            <FeatureCard title="Compliance breaches" value="Zero" description="Automated checks across all clients ensure perfect compliance and zero human error." />
          </div>
        </div>
      </div>
    </section>
  );
}
