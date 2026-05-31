import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Process", target: "process" },
  { label: "Compliance", target: "compliance" },
  { label: "Calculator", target: "calculator" },
  { label: "Lead Magnet", target: "lead-magnet" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({
  onOpenBooking,
  onOpenPlans,
}: {
  onOpenBooking: () => void;
  onOpenPlans: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleLink = (target: string) => {
    setOpen(false);
    setTimeout(() => scrollTo(target), 50);
  };


  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "1.25rem 0",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(5, 5, 5, 0.7)",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="https://5riyrv9yyd.ucarecd.net/1bcdf3bb-270b-4bfa-8f2f-df083d45bd19/-/preview/512x512/"
              alt="Apex Automation Logo"
              style={{ width: 36, height: 36, objectFit: "contain" }}
            />
            <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: "1px" }}>
              Apex<span style={{ color: "var(--color-gold)" }}>Automation</span>
            </span>
          </div>

          <div className="desktop-nav" style={desktopNavStyle}>
            {links.map(({ label, target }) => (
              <a
                key={target}
                href={`#${target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(target);
                }}
                style={{
                  color: "var(--color-text-muted)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              className="book-demo-desktop"
              style={{
                padding: "0.75rem 1.4rem",
                backgroundColor: "transparent",
                color: "var(--color-gold)",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: 2,
                border: "1px solid var(--color-gold)",
                cursor: "pointer",
                minHeight: 44,
              }}
              onClick={onOpenPlans}
            >
              Usage Plans
            </button>
            <button
              className="book-demo-desktop"
              style={{
                padding: "0.75rem 1.4rem",
                backgroundColor: "var(--color-gold)",
                color: "#000",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
                minHeight: 44,
              }}
              onClick={onOpenBooking}
            >
              Book Demo
            </button>

            <button
              aria-label="Open menu"
              className="mobile-toggle"
              onClick={() => setOpen(true)}
              style={{
                display: "none",
                padding: 8,
                color: "var(--color-text)",
                background: "none",
                border: "none",
                cursor: "pointer",
                minHeight: 44,
                minWidth: 44,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .desktop-nav { display: none !important; }
            .book-demo-desktop { display: none !important; }
            .mobile-toggle { display: inline-flex !important; }
          }
        `}</style>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.25rem 1.25rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <span style={{ fontSize: "1.1rem", fontWeight: 500, letterSpacing: 1 }}>
                Apex<span style={{ color: "var(--color-gold)" }}>Automation</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-text)",
                  cursor: "pointer",
                  padding: 8,
                  minHeight: 44,
                  minWidth: 44,
                }}
              >
                <X size={28} />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
                gap: "1.5rem",
              }}
            >
              {links.map(({ label, target }) => (
                <button
                  key={target}
                  onClick={() => handleLink(target)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-text)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "2rem",
                    textAlign: "left",
                    padding: "0.5rem 0",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenPlans();
                }}
                style={{
                  marginTop: "2rem",
                  padding: "1.1rem 1.5rem",
                  backgroundColor: "transparent",
                  color: "var(--color-gold)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  borderRadius: 4,
                  border: "1px solid var(--color-gold)",
                  cursor: "pointer",
                  minHeight: 52,
                }}
              >
                Usage Plans
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenBooking();
                }}
                style={{
                  marginTop: "0.75rem",
                  padding: "1.1rem 1.5rem",
                  backgroundColor: "var(--color-gold)",
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  minHeight: 52,
                }}
              >
                Book Demo
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const desktopNavStyle: React.CSSProperties = {
  display: "flex",
  gap: "2.5rem",
  alignItems: "center",
  fontSize: "0.85rem",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
};
