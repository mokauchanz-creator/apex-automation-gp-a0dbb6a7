import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Slider({
  label,
  min,
  max,
  value,
  onChange,
  prefix = "",
  suffix = "",
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: "1.25rem", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.65rem" }}>
        <label
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {label}
        </label>
        <span style={{ color: "var(--color-text)", fontWeight: 500, fontSize: "1rem" }}>
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="custom-slider"
        style={{
          width: "100%",
          height: 4,
          background: `linear-gradient(to right, var(--color-gold) ${pct}%, rgba(255, 255, 255, 0.1) ${pct}%)`,
          borderRadius: 2,
          appearance: "none",
          outline: "none",
          cursor: "pointer",
          minHeight: 0,
        }}
      />
    </div>
  );
}

export default function Calculator({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [staffCount, setStaffCount] = useState(10);
  const [staffRate, setStaffRate] = useState(50);
  const [billableRate, setBillableRate] = useState(250);
  const [wastedHours, setWastedHours] = useState(8);

  const [annualLeak, setAnnualLeak] = useState(0);
  const [monthlyLeak, setMonthlyLeak] = useState(0);

  useEffect(() => {
    const leak = (wastedHours * billableRate - wastedHours * staffRate) * 52 * staffCount;
    const safe = Math.max(0, leak);
    setAnnualLeak(safe);
    setMonthlyLeak(safe / 12);
  }, [staffCount, staffRate, billableRate, wastedHours]);

  const fmt = (v: number) =>
    new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 }).format(v);

  return (
    <section
      id="calculator"
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
            Revenue Leak Calculator
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            How Much Are You{" "}
            <span style={{ color: "var(--color-gold)", fontStyle: "italic" }}>Losing?</span>
          </h2>
        </div>

        <div className="stack-mobile" style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="single-col-mobile card-pad-mobile"
            style={{
              flex: "1 1 360px",
              minWidth: 0,
              padding: "2.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: 8,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              columnGap: "2rem",
              rowGap: "0.5rem",
            }}
          >
            <Slider label="Staff Count" min={1} max={100} value={staffCount} onChange={setStaffCount} />
            <Slider label="Staff Hourly Rate" min={10} max={200} value={staffRate} onChange={setStaffRate} prefix="R" />
            <Slider label="Billable Hourly Rate" min={50} max={500} value={billableRate} onChange={setBillableRate} prefix="R" />
            <Slider label="Weekly Hours Wasted" min={1} max={40} value={wastedHours} onChange={setWastedHours} suffix=" hrs" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: "1 1 320px",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div
              className="card-pad-mobile"
              style={{
                padding: "2.5rem",
                border: "1px solid var(--color-gold)",
                backgroundColor: "rgba(212, 175, 55, 0.05)",
                borderRadius: 8,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 150,
                  height: 150,
                  background:
                    "radial-gradient(circle at top right, rgba(212, 175, 55, 0.2), transparent 70%)",
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Your Annual Revenue Leak
              </span>
              <div
                style={{
                  fontSize: "clamp(2.25rem, 8vw, 4.5rem)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 300,
                  lineHeight: 1,
                  wordBreak: "break-word",
                }}
              >
                {fmt(annualLeak)}
              </div>
              <p style={{ color: "var(--color-text-muted)", marginTop: "1.25rem", fontSize: "1rem" }}>
                That's <strong style={{ color: "var(--color-text)" }}>{fmt(monthlyLeak)} per month</strong> in
                unrealised revenue.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              style={{
                width: "100%",
                padding: "1.1rem",
                backgroundColor: "var(--color-gold)",
                color: "#000",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: 4,
                border: "none",
                cursor: "pointer",
                minHeight: 52,
              }}
            >
              Reclaim This Revenue — Book Demo →
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--color-gold);
          cursor: pointer;
          border: 2px solid #000;
        }
        .custom-slider::-moz-range-thumb {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--color-gold);
          cursor: pointer;
          border: 2px solid #000;
        }
      `}</style>
    </section>
  );
}
