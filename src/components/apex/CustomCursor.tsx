import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true); // assume touch by default to avoid SSR mismatch / mobile flash

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          backgroundColor: "var(--color-gold)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 10px 2px rgba(212, 175, 55, 0.8)",
        }}
      />
      <motion.div
        className="custom-cursor"
        animate={{ x: pos.x - 20, y: pos.y - 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          backgroundColor: "rgba(212, 175, 55, 0.1)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          filter: "blur(4px)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      />
      <style>{`@media (hover: hover) and (pointer: fine) { * { cursor: none !important; } }`}</style>
    </>
  );
}
