import { motion } from "framer-motion";

const ProcessCard = ({
  number,
  title,
  description,
  delay,
}: {
  number: number;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="card-pad-mobile"
    style={{
      flex: "1 1 280px",
      minWidth: 0,
      backgroundColor: "#111",
      borderTop: "2px solid var(--color-gold)",
      padding: "3rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.25rem",
      position: "relative",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    }}
  >
    <div
      style={{
        fontSize: "1.75rem",
        fontFamily: "var(--font-serif)",
        color: "var(--color-gold)",
        fontWeight: "bold",
        opacity: 0.8,
      }}
    >
      0{number}
    </div>
    <h3 style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)", color: "var(--color-text)" }}>{title}</h3>
    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, fontSize: "0.95rem" }}>{description}</p>
  </motion.div>
);

export default function Process() {
  return (
    <section
      id="process"
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg)",
        scrollMarginTop: 80,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-gold)",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
            }}
          >
            How It Works
          </h2>
        </div>

        <div
          className="stack-mobile"
          style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}
        >
          <ProcessCard number={1} title="Submit by 5 PM EST" description="Send your documents, tasks, or workflows before end of business. Any format, any complexity." delay={0.1} />
          <ProcessCard number={2} title="We Process Overnight" description="Our automation handles everything while your team rests — no overnight staff, no delays, no errors." delay={0.3} />
          <ProcessCard number={3} title="Ready by 9 AM EST" description="Your completed work is in your inbox before your team arrives. Every morning, without exception." delay={0.5} />
        </div>
      </div>
    </section>
  );
}
