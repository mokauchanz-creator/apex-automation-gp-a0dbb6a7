import { useIsMobile } from "@/hooks/use-is-mobile";

export default function Hero3D() {
  const isMobile = useIsMobile();
  const src = isMobile
    ? "https://5riyrv9yyd.ucarecd.net/7c6171f1-d9d6-4065-a3c0-9391dea5bf3a/MultiShotVideoSleekPremium2.webm"
    : "https://5riyrv9yyd.ucarecd.net/29143ee0-2218-46e4-9cd6-3b7bfebf6035/adaptive_video/";
  const type = isMobile ? "video/webm" : "video/mp4";

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(5, 5, 5, 0.7)",
          zIndex: 1,
        }}
      />
      <video
        key={isMobile ? "mobile" : "desktop"}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.8,
          filter: "brightness(0.7) contrast(1.1)",
        }}
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
}
