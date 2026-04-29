import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

const ComplianceBadge = ({
  acronym,
  fullName,
  bullets,
  delay,
}: {
  acronym: string;
  fullName: string;
  bullets: string[];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="card-pad-mobile"
    style={{
      flex: "1 1 260px",
      minWidth: 0,
      padding: "2.5rem",
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Shield size={32} color="var(--color-gold)" style={{ marginBottom: "1.25rem", opacity: 0.8 }} />
    <h3
      style={{
        fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
        color: "var(--color-gold)",
        marginBottom: "0.5rem",
        fontFamily: "var(--font-serif)",
      }}
    >
      {acronym}
    </h3>
    <span
      style={{
        fontSize: "0.7rem",
        color: "var(--color-text-muted)",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "1.5rem",
        display: "block",
      }}
    >
      {fullName}
    </span>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left", width: "100%" }}>
      {bullets.map((b, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            marginBottom: "0.85rem",
            color: "var(--color-text-muted)",
            fontSize: "0.875rem",
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--color-gold)",
              marginTop: "0.4rem",
              flexShrink: 0,
            }}
          />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg-secondary)",
        scrollMarginTop: 80,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            Enterprise Security
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Bank-Grade Compliance</h2>
        </div>

        <div
          className="stack-mobile"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <ComplianceBadge
            acronym="HIPAA"
            fullName="Health Insurance Portability and Accountability Act"
            bullets={["End-to-end PHI encryption", "BAA execution available", "Audit logging & access control"]}
            delay={0.1}
          />
          <ComplianceBadge
            acronym="GDPR"
            fullName="General Data Protection Regulation"
            bullets={["EU data residency options", "Right-to-be-forgotten automated", "Data processing agreements"]}
            delay={0.3}
          />
          <ComplianceBadge
            acronym="POPIA"
            fullName="Protection of Personal Information Act"
            bullets={["Condition 7 security safeguards", "Operator agreement compliance", "Cross-border transfer rules met"]}
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="card-pad-mobile-sm"
          style={{
            backgroundColor: "#0a0a0a",
            border: "1px solid rgba(212, 175, 55, 0.3)",
            borderRadius: 4,
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            flexWrap: "wrap",
            textAlign: "center",
          }}
        >
          <Lock size={28} color="var(--color-gold)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: "clamp(0.95rem, 2.4vw, 1.1rem)", color: "var(--color-text)", margin: 0 }}>
            <strong style={{ color: "var(--color-gold)", fontWeight: 600 }}>Zero-Data-Retention Policy</strong>
            {" "}— your client data is never stored beyond the task.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
