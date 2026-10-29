
/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */

import { useState } from "react";

// Optional: use your own house illustration instead of the built-in drawing.
//   import HouseImg from "../assets/home/house-cutaway.png";
//   const IMAGE = HouseImg;
// If you use your own image, move each hotspot with its x / y below.
const IMAGE = "";

type Hotspot = {
  id: number;
  x: number; // position from the left, in %
  y: number; // position from the top, in %
  title: string; // short label shown on the image
  text: string; // description shown in the list below
};

const hotspots: Hotspot[] = [
  {
    id: 1,
    x: 62.5,
    y: 84,
    title: "Kitchen tap",
    text: "RO + UV purified water for drinking and cooking, right at the kitchen tap.",
  },
  {
    id: 2,
    x: 28.5,
    y: 81,
    title: "Laundry & plumbing",
    text: "Pre-filtration keeps sediment away from your washing machine, fittings and appliances.",
  },
  {
    id: 3,
    x: 88,
    y: 84,
    title: "Main water line",
    text: "Filters at the inlet clean the water before it enters your home.",
  },
];

/* =========================================================
   2. THE BUILT-IN HOUSE DRAWING (used when IMAGE is empty)
   ========================================================= */
function HouseDrawing() {
  return (
    <svg
      viewBox="0 0 800 520"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Cross-section of a home showing where clean water is delivered"
    >
      {/* Ground */}
      <rect x="40" y="496" width="720" height="10" rx="5" fill="#d1d5db" />

      {/* Roof */}
      <polygon
        points="100,150 400,30 700,150 700,168 400,52 100,168"
        fill="#f3f4f6"
        stroke="#d1d5db"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* House shell */}
      <rect x="150" y="150" width="500" height="346" fill="#f9fafb" stroke="#cbd5e1" strokeWidth="6" />

      {/* Rooms */}
      <polygon points="180,232 400,118 620,232" fill="#e5e7eb" />
      <rect x="160" y="245" width="230" height="100" fill="#eef0f2" />
      <rect x="410" y="245" width="230" height="100" fill="#e5e7eb" />
      <rect x="160" y="355" width="230" height="135" fill="#e5e7eb" />
      <rect x="410" y="355" width="230" height="135" fill="#eef0f2" />

      {/* Floors */}
      <rect x="154" y="232" width="492" height="10" fill="#cbd5e1" />
      <rect x="154" y="346" width="492" height="10" fill="#cbd5e1" />
      <rect x="394" y="240" width="12" height="256" fill="#cbd5e1" />

      {/* Attic: bath and bed */}
      <ellipse cx="290" cy="214" rx="42" ry="12" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="470" y="206" width="104" height="16" rx="4" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />

      {/* Middle left: shelves and desk */}
      <rect x="180" y="262" width="62" height="52" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M180 280h62M180 298h62" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="260" y="318" width="110" height="8" rx="2" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M270 326v18M360 326v18" stroke="#cbd5e1" strokeWidth="3" />

      {/* Middle right: sofa and lamp */}
      <rect x="470" y="314" width="130" height="24" rx="6" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M440 262v70M432 332h16" stroke="#cbd5e1" strokeWidth="3" />

      {/* Ground left: washing machine and counter */}
      <rect x="196" y="428" width="56" height="62" rx="5" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="224" cy="466" r="15" fill="#e5e7eb" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="262" y="448" width="112" height="42" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />

      {/* Ground right: fridge, counter, sink and tap */}
      <rect x="592" y="388" width="42" height="102" rx="4" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="426" y="452" width="150" height="38" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M496 452v-18q0-8 8-8h8" stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Outdoor filter units */}
      <rect x="690" y="398" width="28" height="98" rx="9" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="724" y="428" width="38" height="68" rx="11" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />

      {/* Water pipes (teal) */}
      <path d="M704 488H500v-34" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 7" />
      <path d="M704 492H224v-24" stroke="#14b8a6" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="2 7" />
    </svg>
  );
}

/* =========================================================
   3. THE SECTION
   ========================================================= */
export default function HouseHotspots() {
  // Which point is highlighted (set by hovering the image OR the list)
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="house-title"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700">
            <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
            Whole-home water care
            <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
          </p>
          <h2
            id="house-title"
            className="mt-4 text-3xl font-semibold uppercase tracking-wide text-(--primary) sm:text-4xl"
          >
            Clean water at every tap
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            See where our systems work in a typical home, from the main line to
            the kitchen.
          </p>
        </div>

        {/* House picture with numbered points */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-slate-50 p-4 sm:p-8">
          <div className="relative aspect-[800/520] w-full">
            {IMAGE ? (
              <img
                src={IMAGE}
                alt="Cross-section of a home showing where clean water is delivered"
                className="absolute inset-0 h-full w-full object-contain"
              />
            ) : (
              <HouseDrawing />
            )}

            {hotspots.map((h) => {
              const on = active === h.id;
              return (
                <button
                  key={h.id}
                  type="button"
                  aria-label={`${h.id}. ${h.title}`}
                  aria-pressed={on}
                  onMouseEnter={() => setActive(h.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(h.id)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(on ? null : h.id)}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                >
                  {/* Pulse ring */}
                  <span
                    className={`absolute inset-0 rounded-full bg-cyan-400/50 motion-reduce:hidden ${
                      on ? "animate-ping" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                  {/* Number */}
                  <span
                    className={`relative grid h-9 w-9 place-items-center rounded-full text-base font-semibold shadow-lg ring-2 transition duration-200 sm:h-11 sm:w-11 sm:text-lg ${
                      on
                        ? "scale-110 bg-(--primary) text-white ring-cyan-300"
                        : "bg-white text-(--primary) ring-white"
                    }`}
                  >
                    {h.id}
                  </span>
                  {/* Label on hover */}
                  <span
                    className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-(--primary) px-3 py-1.5 text-xs font-medium text-white shadow-lg transition duration-200 ${
                      on ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                    }`}
                  >
                    {h.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The list below the picture */}
        <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
          {hotspots.map((h) => {
            const on = active === h.id;
            return (
              <li
                key={h.id}
                onMouseEnter={() => setActive(h.id)}
                onMouseLeave={() => setActive(null)}
                className="flex gap-4"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg font-semibold transition-colors duration-200 ${
                    on
                      ? "bg-(--primary) text-white"
                      : "bg-cyan-100 text-(--primary)"
                  }`}
                >
                  {h.id}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-(--primary)">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {h.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}