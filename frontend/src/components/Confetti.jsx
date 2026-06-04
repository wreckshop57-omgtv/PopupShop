// Pop-Up confetti — pure CSS particles synced with the popup-bounce animation
const COLORS = ["#0071E3", "#FF3B30", "#FF9F0A", "#34C759", "#AF52DE", "#FFD60A"];

// Deterministic-ish set of particles arranged around the word
const PIECES = [
  { x: -160, y: -120, r: 540, d: 0.0, c: 0, s: 9, shape: "rect" },
  { x: 170, y: -110, r: -420, d: 0.15, c: 1, s: 8, shape: "circle" },
  { x: -210, y: -40, r: 360, d: 0.3, c: 2, s: 7, shape: "rect" },
  { x: 220, y: -30, r: -300, d: 0.05, c: 3, s: 10, shape: "circle" },
  { x: -120, y: -180, r: 480, d: 0.2, c: 4, s: 6, shape: "rect" },
  { x: 130, y: -170, r: -540, d: 0.35, c: 5, s: 8, shape: "circle" },
  { x: -260, y: 30, r: 420, d: 0.1, c: 1, s: 7, shape: "rect" },
  { x: 260, y: 40, r: -360, d: 0.25, c: 2, s: 9, shape: "circle" },
  { x: -70, y: -210, r: 600, d: 0.4, c: 3, s: 6, shape: "rect" },
  { x: 90, y: -200, r: -480, d: 0.12, c: 4, s: 8, shape: "circle" },
  { x: -190, y: 80, r: 300, d: 0.45, c: 5, s: 7, shape: "rect" },
  { x: 200, y: 90, r: -420, d: 0.08, c: 0, s: 9, shape: "circle" },
  { x: -30, y: -240, r: 720, d: 0.22, c: 2, s: 6, shape: "rect" },
  { x: 50, y: -230, r: -660, d: 0.32, c: 5, s: 7, shape: "circle" },
  { x: -140, y: 130, r: 420, d: 0.18, c: 1, s: 8, shape: "rect" },
  { x: 160, y: 140, r: -360, d: 0.28, c: 3, s: 7, shape: "circle" },
];

export const Confetti = () => (
  <span aria-hidden className="absolute inset-0 pointer-events-none">
    {PIECES.map((p, i) => (
      <span
        key={i}
        className="confetti-piece"
        style={{
          "--cx": `${p.x}px`,
          "--cy": `${p.y}px`,
          "--cr": `${p.r}deg`,
          width: `${p.s}px`,
          height: `${p.s}px`,
          background: COLORS[p.c],
          borderRadius: p.shape === "circle" ? "50%" : "2px",
          animationDelay: `${p.d}s`,
        }}
      />
    ))}
  </span>
);
