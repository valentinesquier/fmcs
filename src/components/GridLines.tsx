"use client";

export default function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Left */}
      <div
        className="absolute top-0 bottom-0 w-px left-[3%] sm:left-[5%]"
        style={{ background: "rgba(0,0,0,0.06)" }}
      >
        <div
          className="absolute w-px h-[120px]"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.25), transparent)",
            animation: "gridPulseV 9s linear infinite",
            animationDelay: "-2s",
          }}
        />
      </div>

      {/* Right */}
      <div
        className="absolute top-0 bottom-0 w-px right-[3%] sm:right-[5%]"
        style={{ background: "rgba(0,0,0,0.06)" }}
      >
        <div
          className="absolute w-px h-[120px]"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.25), transparent)",
            animation: "gridPulseV 11s linear infinite",
            animationDelay: "-5s",
          }}
        />
      </div>

      {/* Bottom — flush at the very bottom */}
      <div
        className="absolute left-0 right-0 h-px bottom-0"
        style={{ background: "rgba(0,0,0,0.06)" }}
      >
        <div
          className="absolute h-px w-[120px]"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.25), transparent)",
            animation: "gridPulseH 12s linear infinite",
            animationDelay: "-7s",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridPulseV {
          0% { top: -120px; }
          100% { top: 100%; }
        }
        @keyframes gridPulseH {
          0% { left: -120px; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}
