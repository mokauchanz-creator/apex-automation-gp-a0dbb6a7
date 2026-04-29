import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: 4,
  color: "white",
  outline: "none",
  transition: "border-color 0.3s",
  fontSize: "0.95rem",
  minHeight: 48,
};
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "0.4rem",
  color: "var(--color-text-muted)",
};

const selectBg =
  "rgba(255, 255, 255, 0.05) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\") no-repeat right 1rem center / 1rem";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    orgType: "",
    teamSize: "",
    country: "",
    phone: "",
    source: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const templateParams = {
      to_email: formData.email,
      reply_to: formData.email,
      from_name: `${formData.firstName} ${formData.lastName}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      job_title: formData.jobTitle,
      org_type: formData.orgType,
      team_size: formData.teamSize,
      country: formData.country,
      source: formData.source,
      message: `New demo booking from ${formData.firstName} ${formData.lastName} at ${formData.company}`,
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          jobTitle: "",
          orgType: "",
          teamSize: "",
          country: "",
          phone: "",
          source: "",
          consent: false,
        });
        onClose();
      }, 3000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      setError(`Failed to send: ${err?.text || err?.message || "Unknown error"}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(5px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="booking-modal-card"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 800,
              maxHeight: "90vh",
              overflowY: "auto",
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 8,
              padding: "3rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              margin: "1rem",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                color: "var(--color-text-muted)",
                cursor: "pointer",
                minHeight: 44,
                minWidth: 44,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "rgba(212, 175, 55, 0.1)",
                    border: "1px solid var(--color-gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <span style={{ color: "var(--color-gold)", fontSize: "2rem" }}>✓</span>
                </div>
                <h3 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", marginBottom: "0.75rem" }}>Request Received</h3>
                <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, fontSize: "1rem" }}>
                  We've received your request. Our automation experts will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-text)",
                  }}
                >
                  Book Your Demo
                </h3>
                <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                  Discover how many billable hours you can reclaim with intelligent automation.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="booking-form-grid"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
                >
                  <div>
                    <label style={labelStyle}>First Name</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Business Email</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Company Name</label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Job Title</label>
                    <input
                      required
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Organisation Type</label>
                    <select
                      required
                      value={formData.orgType}
                      onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                      style={{ ...inputStyle, appearance: "none", background: selectBg }}
                    >
                      <option value="" disabled style={{ color: "black" }}>Select...</option>
                      <option value="Law Firm" style={{ color: "black" }}>Law Firm</option>
                      <option value="Private Clinic" style={{ color: "black" }}>Private Clinic</option>
                      <option value="Consulting" style={{ color: "black" }}>Consulting</option>
                      <option value="Accounting" style={{ color: "black" }}>Accounting</option>
                      <option value="Other" style={{ color: "black" }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Team Size</label>
                    <select
                      required
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      style={{ ...inputStyle, appearance: "none", background: selectBg }}
                    >
                      <option value="" disabled style={{ color: "black" }}>Select...</option>
                      <option value="1-9" style={{ color: "black" }}>1-9</option>
                      <option value="10-49" style={{ color: "black" }}>10-49</option>
                      <option value="50-199" style={{ color: "black" }}>50-199</option>
                      <option value="200+" style={{ color: "black" }}>200+</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Country</label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      style={{ ...inputStyle, appearance: "none", background: selectBg }}
                    >
                      <option value="" disabled style={{ color: "black" }}>Select...</option>
                      <option value="USA" style={{ color: "black" }}>United States</option>
                      <option value="UK" style={{ color: "black" }}>United Kingdom</option>
                      <option value="SA" style={{ color: "black" }}>South Africa</option>
                      <option value="Other" style={{ color: "black" }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>How Did You Hear About Us?</label>
                    <select
                      required
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      style={{ ...inputStyle, appearance: "none", background: selectBg }}
                    >
                      <option value="" disabled style={{ color: "black" }}>Select...</option>
                      <option value="Search" style={{ color: "black" }}>Search Engine</option>
                      <option value="Social" style={{ color: "black" }}>Social Media</option>
                      <option value="Referral" style={{ color: "black" }}>Referral</option>
                      <option value="Other" style={{ color: "black" }}>Other</option>
                    </select>
                  </div>

                  <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                    <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        style={{ marginTop: "0.25rem" }}
                      />
                      <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                        I agree to receive communications from Apex Automation Group and understand my data will be
                        handled in accordance with the Privacy Policy.
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div
                      style={{
                        gridColumn: "1 / -1",
                        padding: "1rem",
                        backgroundColor: "rgba(220, 38, 38, 0.1)",
                        border: "1px solid rgba(220, 38, 38, 0.3)",
                        borderRadius: 4,
                        color: "#fca5a5",
                        fontSize: "0.9rem",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "1.1rem",
                        backgroundColor: "var(--color-gold)",
                        color: "#000",
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        borderRadius: 2,
                        border: "none",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        opacity: isSubmitting ? 0.7 : 1,
                        minHeight: 52,
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              </>
            )}

            <style>{`
              @media (max-width: 640px) {
                .booking-modal-card { padding: 1.5rem !important; margin: 0.5rem !important; max-height: 95vh !important; }
                .booking-form-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
