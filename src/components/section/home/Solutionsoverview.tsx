/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */

// Left text panel
const HEADING = "Water treatment for every need";
const PARAGRAPHS = [
  "Clean water matters in every setting, whether it is a family kitchen, a busy office or a full production line. That is why we offer reverse osmosis systems for homes, businesses and industry.",
  "Each system is chosen to suit your water source, daily usage and available space, then installed and commissioned by our own team.",
  "After installation we stay with you through genuine spares, scheduled maintenance and annual service plans, so your water stays clean for years.",
];

// The four cards on the right.
// To show a photo: import it at the top of the file and set `image`, for example
//   import DomesticImg from "../assets/home/domestic.jpg";
//   { ..., image: DomesticImg }
type Tile = {
  title: string;
  href: string;
  icon: string; // SVG path, shown until you add a photo
  image?: string;
};

const tiles: Tile[] = [
  {
    title: "Domestic RO",
    href: "/domestic-ro",
    icon: "M3 11l9-8 9 8M5 10v10h14V10",
  },
  {
    title: "Commercial RO",
    href: "/commercial-ro",
    icon: "M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 10h2M14 10h2",
  },
  {
    title: "Industrial RO",
    href: "/industrial-ro",
    icon: "M3 21V10l6 3V10l6 3V6h4v15H3z",
  },
  {
    title: "Spares & Service",
    href: "/spares-service",
    icon: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z",
  },
];

/* =========================================================
   2. SMALL ICON HELPER
   ========================================================= */
function Icon({ d, className = "h-5 w-5" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const CHEVRON = "M9 6l6 6-6 6";
const ARROW = "M5 12h14M13 6l6 6-6 6";

/* =========================================================
   3. ONE IMAGE CARD
   ========================================================= */
function TileCard({ tile }: { tile: Tile }) {
  return (
    <a
      href={tile.href}
      className="group relative block aspect-square overflow-hidden bg-gradient-to-br from-(--blue) to-(--primary) focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-cyan-300"
    >
      {/* Photo fills the whole card (the text bar sits on top of it) */}
      {tile.image ? (
        <img
          src={tile.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Icon
          d={tile.icon}
          className="absolute left-1/2 top-[34%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-cyan-300/50 transition-transform duration-700 group-hover:scale-110"
        />
      )}

      {/* Frosted text bar at the bottom */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-white/85 px-5 py-6 backdrop-blur-md sm:px-6">
        <h3 className="text-lg font-bold leading-snug text-(--primary)">
          {tile.title}
        </h3>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-(--primary)/60 text-(--primary) transition-colors duration-300 group-hover:bg-(--primary) group-hover:text-white">
          <Icon d={CHEVRON} />
        </span>
      </div>
    </a>
  );
}

/* =========================================================
   4. THE SECTION
   ========================================================= */
export default function SolutionsOverview() {
  return (
    <section
      aria-labelledby="solutions-title"
      className="bg-white py-16 sm:py-20"
    >
      <div className=" px-5 sm:px-8 lg:px-5">
        <div className="grid overflow-hidden  bg-slate-200 lg:grid-cols-2">
          {/* ---- Left: text panel ---- */}
          <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 xl:px-24">
            <h2
              id="solutions-title"
              className="text-3xl font-bold tracking-tight text-(--primary) sm:text-4xl"
            >
              {HEADING}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700">
              {PARAGRAPHS.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <a
              href="/contact#quote"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
            >
              Talk to our team
              <Icon d={ARROW} className="h-4 w-4" />
            </a>
          </div>

          {/* ---- Right: 2 x 2 image cards ---- */}
          <ul className="grid grid-cols-1 sm:grid-cols-2">
            {tiles.map((t) => (
              <li key={t.title}>
                <TileCard tile={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}