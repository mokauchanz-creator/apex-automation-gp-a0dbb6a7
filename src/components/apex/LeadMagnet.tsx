import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

export default function LeadMagnet() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    painPoint: "",
    teamSize: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; recommendation: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelection = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (step < 3) setTimeout(() => setStep(step + 1), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const baseScore = 65;
    const painScore = formData.painPoint === "Compliance gaps" ? 25 : 15;
    const sizeScore = formData.teamSize === "10+" ? 15 : 5;
    const score = Math.min(99, baseScore + painScore + sizeScore);
    const recommendation =
      "Your firm shows critical indicators for high-ROI automation. Immediate deployment of document processing and compliance workflows is recommended.";

    const templateParams = {
      to_email: formData.email,
      reply_to: formData.email,
      from_name: formData.email,
      email: formData.email,
      industry: formData.industry,
      pain_point: formData.painPoint,
      team_size: formData.teamSize,
      score,
      recommendation,
      message: `AI Readiness Quiz completed by ${formData.email} - Score: ${score}%`,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.LEAD_MAGNET_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setResult({ score, recommendation });
      setStep(4);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError(`Failed to send: ${err?.text || err?.message || "Unknown error"}`);
      setResult({ score, recommendation });
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const optionBtn = (selected: boolean): React.CSSProperties => ({
    padding: "1.1rem",
    backgroundColor: selected ? "rgba(212, 175, 55, 0.1)" : "rgba(255, 255, 255, 0.02)",
    border: `1px solid ${selected ? "var(--color-gold)" : "rgba(255, 255, 255, 0.1)"}`,
    color: "var(--color-text)",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.2s",
    minHeight: 52,
    textAlign: "left",
  });

  return (
    <section
      id="lead-magnet"
      className="section-pad"
      style={{
        padding: "8rem 0",
        backgroundColor: "var(--color-bg-secondary)",
        scrollMarginTop: 80,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container" style={{ maxWidth: 800 }}>
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
            Free Assessment
          </span>
          <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>AI Readiness Quiz</h2>
        </div>

        <div
          style={{
            backgroundColor: "#111",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: 8,
            position: "relative",
            overflow: "hidden",
            minHeight: 380,
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          {step < 4 && (
            <div style={{ width: "100%", height: 4, backgroundColor: "rgba(255,255,255,0.05)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
                style={{ height: "100%", backgroundColor: "var(--color-gold)" }}
              />
            </div>
          )}

          <div className="quiz-pad" style={{ padding: "2.5rem" }}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.5rem)", marginBottom: "1.5rem", textAlign: "center" }}>
                    What is your primary industry?
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      maxWidth: 400,
                      margin: "0 auto",
                    }}
                  >
                    {["Law Firm", "Private Clinic", "Other"].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelection("industry", option)}
                        style={optionBtn(formData.industry === option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.5rem)", marginBottom: "1.5rem", textAlign: "center" }}>
                    What is your biggest operational pain point?
                  </h3>
                  <div
                    className="quiz-pain-grid"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}
                  >
                    {["Document processing", "Staff overwhelmed", "Compliance gaps", "Slow turnaround"].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelection("painPoint", option)}
                        style={optionBtn(formData.painPoint === option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.5rem)", marginBottom: "1.5rem", textAlign: "center" }}>
                    What is your team size?
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem",
                      maxWidth: 400,
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    {["1-9", "10+"].map((option) => (
                      <button
                        key={option}
                        onClick={() => setFormData({ ...formData, teamSize: option })}
                        style={optionBtn(formData.teamSize === option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      maxWidth: 400,
                      margin: "0 auto",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          color: "var(--color-text-muted)",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Send my full report to my email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        style={{
                          width: "100%",
                          padding: "0.95rem",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                          outline: "none",
                          borderRadius: 4,
                          minHeight: 48,
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.teamSize}
                      style={{
                        padding: "1.1rem",
                        backgroundColor: "var(--color-gold)",
                        color: "#000",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        border: "none",
                        borderRadius: 4,
                        cursor: isSubmitting || !formData.teamSize ? "not-allowed" : "pointer",
                        opacity: isSubmitting || !formData.teamSize ? 0.7 : 1,
                        minHeight: 52,
                      }}
                    >
                      {isSubmitting ? "Analyzing..." : "Get My Score"}
                    </button>
                  </form>
                </motion.div>
              )}

              {step === 4 && result && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ textAlign: "center", padding: "1rem 0" }}
                >
                  <div
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      border: "4px solid var(--color-gold)",
                      margin: "0 auto 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(212, 175, 55, 0.05)",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem", color: "var(--color-gold)", fontWeight: "bold" }}>
                      {result.score}%
                    </span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", marginBottom: "1rem" }}>Automation Readiness</h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      maxWidth: 500,
                      margin: "0 auto",
                    }}
                  >
                    {result.recommendation}
                  </p>
                  {error ? (
                    <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "#fca5a5" }}>
                      ⚠ We couldn't email your report. Please screenshot your score or try again later.
                    </p>
                  ) : (
                    <p style={{ marginTop: "1.5rem", fontSize: "0.9rem", color: "var(--color-gold)" }}>
                      Your detailed report has been sent to {formData.email}.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .quiz-pad { padding: 1.5rem !important; }
            .quiz-pain-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
