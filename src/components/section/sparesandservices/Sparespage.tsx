/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = "Sri Rain RO Systems";
const PHONE_HREF = "tel:+919999999999";
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no "+"

type Segment = "Domestic" | "Commercial" | "Industrial";

type Spec = { label: string; value: string };

type Category = {
  slug: string; // used for the page anchor (#slug) and the enquiry link
  name: string;
  summary: string; // one short line under the title
  segments: Segment[];
  types: string[]; // product types, shown as small tags
  specs: Spec[]; // shown like a datasheet
  icon: string; // SVG path, shown until you add a photo
  // Photo: import it at the top of the file, then set it here, e.g.
  //   import MembraneImg from "../assets/spares/ro-membranes.jpg";
  //   image: MembraneImg
  image?: string;
};

const categories: Category[] = [
  {
    slug: "filter-cartridges",
    name: "Filter cartridges",
    summary: "Pre-filtration for sediment, chlorine, odour and taste.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["PP sediment", "UDF", "CTO", "Inline sediment"],
    specs: [
      { label: "Micron rating", value: "1, 5, 10, 20 microns (model-dependent)" },
      { label: "Sizes", value: "10-inch, 20-inch, Big Blue 10-inch and 20-inch" },
      { label: "Material", value: "Polypropylene, activated carbon" },
      { label: "Application", value: "Sediment, chlorine, odour and taste reduction" },
      { label: "Replacement", value: "Based on water quality and operating hours" },
    ],
    icon: "M8 3h8v18H8zM8 7h8M8 11h8M8 15h8",
  },
  {
    slug: "ro-membranes",
    name: "RO membranes",
    summary: "The heart of every RO system, for homes through to plants.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["Domestic", "Commercial", "Industrial"],
    specs: [
      { label: "Domestic capacities", value: "50, 75, 80, 100 GPD" },
      { label: "Commercial capacities", value: "300, 400, 500, 800 GPD and above" },
      { label: "Industrial types", value: "4040 and 8040 membrane elements" },
      { label: "Technology", value: "Thin-film composite (TFC)" },
      { label: "Function", value: "Dissolved salt and contaminant reduction" },
      { label: "Key specifications", value: "Salt rejection, operating pressure, flow and dimensions" },
    ],
    icon: "M6 7a6 2.5 0 0 1 12 0v10a6 2.5 0 0 1-12 0zM6 7a6 2.5 0 0 0 12 0",
  },
  {
    slug: "pumps-motors",
    name: "RO pumps & motors",
    summary: "Booster and high-pressure pumps with their repair parts.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["Domestic booster pumps", "Commercial pumps", "Industrial high-pressure pumps"],
    specs: [
      { label: "Domestic voltage", value: "24 V DC (common models)" },
      { label: "Domestic flow", value: "Model-dependent, commonly 0.8–2 LPM" },
      { label: "Commercial / industrial", value: "Based on system flow and pressure requirements" },
      { label: "Materials", value: "Plastic composite, brass, stainless steel or other rated materials" },
      { label: "Accessories", value: "Pump head, motor, diaphragm and repair kit" },
    ],
    icon: "M12 5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM12 9v5M9.5 11.5h5M18.5 11.5H22M2 11.5h3.5",
  },
  {
    slug: "valves-switches",
    name: "Valves & switches",
    summary: "Flow control, pressure protection and automatic operation.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["Solenoid valve", "Check valve", "Auto shut-off valve", "Pressure switch", "Float switch"],
    specs: [
      { label: "Pressure switches", value: "Low-pressure and high-pressure" },
      { label: "Float switches", value: "Tank level control" },
      { label: "Connectors", value: "1/4-inch, 3/8-inch and 1/2-inch options" },
      { label: "Materials", value: "Food-contact-suitable plastic, brass or stainless steel" },
      { label: "Function", value: "Flow control, pressure protection and automatic operation" },
    ],
    icon: "M3 12h6M15 12h6M9 8l6 8M15 8l-6 8M12 8V4M9 4h6",
  },
  {
    slug: "electrical-electronic",
    name: "Electrical & electronic spares",
    summary: "Power supplies, controllers, UV parts and sensors.",
    segments: ["Domestic", "Commercial"],
    types: ["SMPS", "Controller PCB", "TDS display / monitor", "UV ballast", "UV lamp", "Float sensors", "Wiring harness"],
    specs: [
      { label: "SMPS power supply", value: "Commonly 24 V DC domestic units" },
      { label: "Controller PCB", value: "Model-specific" },
      { label: "TDS display and monitor", value: "Digital / inline" },
      { label: "UV ballast and lamp", value: "Matched to the purifier model" },
      { label: "Key specifications", value: "Input voltage, output voltage, wattage and connector type" },
    ],
    icon: "M13 3L5 14h6l-1 7 8-11h-6z",
  },
  {
    slug: "housings-vessels",
    name: "Housings & pressure vessels",
    summary: "Housings for filters and membranes in every size.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["Filter housing", "Membrane housing", "Cartridge housing"],
    specs: [
      { label: "Sizes", value: "10-inch / 20-inch housings and membrane-specific housings" },
      { label: "Materials", value: "PP, reinforced plastic, FRP or stainless steel" },
      { label: "Connections", value: "Threaded or quick-connect" },
      { label: "Key specifications", value: "Rated pressure, dimensions, port size and seal type" },
      { label: "Application", value: "Domestic, commercial and industrial RO systems" },
    ],
    icon: "M7 3h10v4H7zM8 7h8v14H8z",
  },
  {
    slug: "tubes-fittings",
    name: "Tubes, connectors & fittings",
    summary: "Everything that joins your water lines together.",
    segments: ["Domestic", "Commercial", "Industrial"],
    types: ["Straight connector", "Elbow", "Tee", "Union", "Reducer", "Bulkhead fitting"],
    specs: [
      { label: "Tube sizes", value: "1/4-inch, 3/8-inch and 1/2-inch" },
      { label: "Materials", value: "Food-grade-compatible PE, PP or other suitable polymers" },
      { label: "Connection options", value: "Push-fit and threaded" },
      { label: "Application", value: "Domestic, commercial and industrial water lines" },
    ],
    icon: "M3 10h5v4H3zM16 10h5v4h-5zM8 8h8v8H8z",
  },
  {
    slug: "softener-industrial",
    name: "Water softener & industrial RO spares",
    summary: "Media, valves, vessels and instruments for larger plants.",
    segments: ["Industrial"],
    types: [
      "Softener resin and filter media",
      "Automatic multiport control valves",
      "Brine valves and tank accessories",
      "FRP vessels and distributors",
      "Membrane seals, O-rings and adapters",
      "Pressure gauges, flow meters, dosing pump spares",
    ],
    specs: [
      {
        label: "Key specifications",
        value: "Vessel size, flow rating, pressure rating, connection size and material compatibility",
      },
    ],
    icon: "M3 21V10l6 3V10l6 3V6h4v15H3z",
  },
];

// What customers should send us to get the right part
const matchSteps = [
  {
    title: "Model name or number",
    text: "Found on the purifier or plant nameplate.",
    icon: "M4 6h16v12H4zM8 10h8M8 14h5",
  },
  {
    title: "A clear photo of the part",
    text: "Old or damaged parts are fine, as long as the details are visible.",
    icon: "M4 8h3l2-3h6l2 3h3v11H4zM12 11a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
  },
  {
    title: "Water source and usage",
    text: "Borewell, municipal or tank water, and roughly how much you use daily.",
    icon: "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z",
  },
];

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = " px-5 md:px-8";
const ARROW = "M5 12h14M13 6l6 6-6 6";
const CHAT = "M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z";

function Icon({ d, className = "h-6 w-6" }: { d: string; className?: string }) {
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

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700">
      <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
      {children}
    </p>
  );
}

const enquiryHref = (c: Category) =>
  `/contact?topic=${encodeURIComponent("Spares & accessories")}&product=${encodeURIComponent(
    c.name
  )}#quote`;

/* =========================================================
   3. SECTION: HERO
   ========================================================= */
function Hero() {
  return (
    <section
      aria-labelledby="spares-title"
      className="hero-spares relative isolate overflow-hidden  pb-16 pt-36 text-white sm:pb-24 sm:pt-44"
    >
    
      

      <div className={wrap}>
        <nav aria-label="Breadcrumb" className="text-sm text-white/70">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/" className="hover:text-white focus-visible:outline-none focus-visible:underline">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-white" aria-current="page">
              Spare parts
            </li>
          </ol>
        </nav>

        <h1
          id="spares-title"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          RO spare parts for every system
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Spares for domestic, commercial and industrial RO systems, water
          softeners and general water-treatment equipment, from {BRAND}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact?topic=Spares%20%26%20accessories#quote"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Request a quote
            <Icon d={ARROW} className="h-4 w-4" />
          </a>
          <a
            href="#browse"
            className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Browse categories
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. SECTION: CATEGORY OVERVIEW (also works as a menu)
   ========================================================= */
function Overview() {
  return (
    <section id="browse" aria-labelledby="browse-title" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Browse by category</Eyebrow>
          </div>
          <h2
            id="browse-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            Find the part you need
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Choose a category to see its types and specifications.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <li key={c.slug}>
              <a
                href={`#${c.slug}`}
                className="group flex h-full flex-col rounded-xs border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xs bg-cyan-100 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300">
                    <Icon d={c.icon} />
                  </span>
                  <span className="text-2xl font-semibold tabular-nums text-slate-300 transition-colors group-hover:text-cyan-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-(--primary)">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.summary}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.segments.map((s) => (
                    <li key={s} className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
                      {s}
                    </li>
                  ))}
                </ul>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-(--primary) group-hover:text-cyan-700">
                  View details
                  <Icon d="M12 5v14M6 13l6 6 6-6" className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* =========================================================
   5. SECTION: ONE DETAILED CATEGORY (photo + datasheet)
   ========================================================= */
function CategorySection({
  category: c,
  index,
}: {
  category: Category;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const reversed = index % 2 === 1; // photo switches sides every other section

  return (
    <section
      id={c.slug}
      aria-labelledby={`${c.slug}-title`}
      className={`scroll-mt-24 py-16 sm:py-24 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
    >
      <div className={wrap}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Photo */}
          <div className={reversed ? "lg:order-2" : ""}>
            <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-linear-to-br from-(--blue) to-(--primary) shadow-xl shadow-cyan-900/10">
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Icon
                  d={c.icon}
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cyan-300/40"
                />
              )}
              <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-lg font-semibold tabular-nums text-(--primary) backdrop-blur">
                {number}
              </span>
            </div>
          </div>

          {/* Text and datasheet */}
          <div>
            <Eyebrow>{`Category ${number}`}</Eyebrow>
            <h2
              id={`${c.slug}-title`}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl"
            >
              {c.name}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{c.summary}</p>

            {/* Product types */}
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Product types">
              {c.types.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-cyan-50 px-3.5 py-1.5 text-sm font-medium text-cyan-800 ring-1 ring-inset ring-cyan-100"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* Specifications, styled like a datasheet */}
            <div className="mt-7 overflow-hidden rounded-xs border border-slate-200 bg-white">
              <div className="flex items-center justify-between bg-(--primary) px-5 py-3 text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Specifications
                </h3>
                <span className="text-xs text-white/70">{c.segments.join(" · ")}</span>
              </div>
              <dl className="divide-y divide-slate-100">
                {c.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid gap-1 px-5 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-(--primary)">{s.label}</dt>
                    <dd className="text-sm leading-relaxed text-slate-600">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={enquiryHref(c)}
                className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                Enquire about this
                <Icon d={ARROW} className="h-4 w-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi, I need details on: ${c.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-(--primary)/25 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                <Icon d={CHAT} className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   6. SECTION: HOW TO GET THE RIGHT PART
   ========================================================= */
function MatchGuide() {
  return (
    <section aria-labelledby="match-title" className="bg-(--blue) py-20 text-white sm:py-28">
      <div className={wrap}>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2
            id="match-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl"
          >
            Not sure which part you need?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5">
            Send us these three details and we will help you identify the right
            spare.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {matchSteps.map((s, i) => (
            <li
              key={s.title}
              className="rounded-xs border border-white/15 bg-white/10 p-7 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xs bg-cyan-300/15 text-cyan-300">
                  <Icon d={s.icon} />
                </span>
                <span className="text-3xl font-semibold tabular-nums text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi, I need help finding the right RO spare part."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Icon d={CHAT} className="h-4 w-4" />
            Send details on WhatsApp
          </a>
          <a
            href={PHONE_HREF}
            className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   7. SECTION: BULK ORDER CTA
   ========================================================= */
function BulkBand() {
  return (
    <section aria-labelledby="bulk-title" className="bg-white py-20 sm:py-28">
      <div className={wrap}>
        <div className="spares-bg relative isolate overflow-hidden rounded-xs px-7 py-12 text-white sm:px-14 sm:py-16">
          

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300">Bulk orders</p>
              <h2 id="bulk-title" className="mt-2 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Buying in quantity?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
                Dealers, installers and businesses can request one quote for
                large or recurring orders across any of these categories.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/contact?topic=Bulk%20order#quote"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Bulk enquiry
                <Icon d={ARROW} className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Call sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   8. THE PAGE
   ========================================================= */
export default function SparesPage() {
  return (
    <main>
      <Hero />
      <Overview />
      {categories.map((c, i) => (
        <CategorySection key={c.slug} category={c} index={i} />
      ))}
      <MatchGuide />
      <BulkBand />
    </main>
  );
}