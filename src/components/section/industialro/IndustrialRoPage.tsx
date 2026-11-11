import { Link } from 'react-router'
import IndustryImg from '../../../assets/Products/Industrial/WhatsApp Image 2026-10-10 at 16.49.30.jpeg'
import Img1 from '../../../assets/Products/Rain water filteration/Image-1.jpeg'
import Img2 from '../../../assets/Products/Rain water filteration/image-2.jpeg'
import Img3 from '../../../assets/Products/Rain water filteration/image-3.jpeg'
import Img4 from '../../../assets/Products/Water Dispensers/bottle-type.jpeg'
import Img5 from '../../../assets/Products/Water Dispensers/domestic-1.webp'
import Img6 from '../../../assets/Products/Water Dispensers/commercial.webp'
import Img7 from '../../../assets/products/lph/200-lph.jpeg'
import Img8 from '../../../assets/products/lph/1000-lph.jpeg'
import Img9 from '../../../assets/products/lph/2000-lph.jpeg'
import Img10 from '../../../assets/products/lph/10000-lph.jpeg'


/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = 'Sri Rain RO Systems'
const PHONE_HREF = 'tel:+919715886000'


// Photos: import each one at the top of the file, then set it here, e.g.
//   import PlantImg from "../assets/industrial/ro-plant.jpg";
//   const PLANT_IMAGE = PlantImg;
// Until then, a gradient with a water drop is shown.

type Spec = { label: string; value: string };

/* ---- Industrial RO ---- */
const plantChecklist = [
  "Industrial RO plants from 250 LPH to 50,000+ LPH, subject to design requirements",
  "Single-pass and double-pass RO configurations",
  "Multi-stage pre-treatment and chemical dosing options",
  "Industrial-grade pumps, membrane housings and piping",
  "Manual, semi-automatic and PLC-based control options",
  "Optional CIP systems and online water-quality monitoring",
  "Installation, commissioning, maintenance and AMC support",
];

const capacityBands = [
  { range: "250–500", unit: "LPH", text: "Small industrial units, laboratories and light commercial applications.", img : Img7 },
  { range: "1,000", unit: "LPH", text: "Factories, hotels, institutions and small manufacturing plants.", img : Img8 },
  { range: "2,000–5,000", unit: "LPH", text: "Textile units, process-water supply and medium-sized industries.", img : Img9 },
  { range: "10,000–50,000+", unit: "LPH", text: "Large manufacturing facilities and high-volume process-water applications.", img : Img10 },
];

const features = [
  { title: "High-capacity purification", text: "Designed to meet industrial water demand.", icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" },
  { title: "Customized plant design", text: "Selected according to feed-water analysis and required output.", icon: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" },
  { title: "Efficient membrane technology", text: "Helps reduce dissolved salts and impurities.", icon: "M6 7a6 2.5 0 0 1 12 0v10a6 2.5 0 0 1-12 0zM6 7a6 2.5 0 0 0 12 0" },
  { title: "Automated operation", text: "Optional PLC control, alarms and automatic flushing.", icon: "M4 5h16v14H4zM8 9h8M8 13h3M15 14h.01" },
  { title: "Easy maintenance", text: "Serviceable pre-filters and membrane cleaning provisions.", icon: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" },
  { title: "Industrial-grade construction", text: "Frame and wetted materials selected for the application.", icon: "M3 21V10l6 3V10l6 3V6h4v15H3z" },
  { title: "After-sales service", text: "Installation, commissioning, AMC and replacement spares.", icon: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z" },
];

// How the plant treats water, taken from the specification table
const flowSteps = [
  { title: "Raw water", text: "Feed water is analysed so the plant can be designed around it.", icon: "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z" },
  { title: "Pre-treatment", text: "Multi-grade sand filter, activated carbon filter and micron cartridge filter.", icon: "M8 3h8v18H8zM8 8h8M8 13h8M8 18h8" },
  { title: "Chemical dosing", text: "Antiscalant dosing, with pH adjustment as required.", icon: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" },
  { title: "RO membranes", text: "Multistage centrifugal pump feeding single-pass or double-pass TFC membranes.", icon: "M6 7a6 2.5 0 0 1 12 0v10a6 2.5 0 0 1-12 0zM6 7a6 2.5 0 0 0 12 0" },
  { title: "Post-treatment", text: "UV, re-mineralization or polishing, as required.", icon: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
];

const plantSpecs: Spec[] = [
  { label: "System type", value: "Industrial Reverse Osmosis (RO) Plant" },
  { label: "Capacity range", value: "250 LPH to 50,000+ LPH" },
  { label: "Purification technology", value: "Single-pass / double-pass RO" },
  { label: "Membrane type", value: "Thin Film Composite (TFC) spiral-wound membrane" },
  { label: "Membrane sizes", value: "4040 / 8040, depending on capacity" },
  { label: "Pre-treatment", value: "Multi-grade sand filter, activated carbon filter and micron cartridge filter" },
  { label: "Chemical dosing", value: "Antiscalant dosing; pH adjustment as required" },
  { label: "High-pressure pump", value: "Multistage centrifugal pump" },
  { label: "Pump material", value: "SS 304 / SS 316, as specified" },
  { label: "Membrane housing", value: "FRP / stainless steel" },
  { label: "Plant frame", value: "SS 304 / SS 316 / powder-coated MS" },
  { label: "Control panel", value: "Manual / semi-automatic / PLC-based automatic" },
  { label: "Monitoring", value: "Pressure gauges, flow meters and TDS/conductivity meters" },
  { label: "Water recovery", value: "Typically 40–75%, depending on feed-water quality and design" },
  { label: "TDS rejection", value: "Typically 95–99% under suitable operating conditions" },
  { label: "Power supply", value: "Three-phase 415 V AC for many industrial installations" },
  { label: "Cleaning system", value: "CIP (Clean-in-Place), optional or included depending on plant" },
  { label: "Post-treatment", value: "UV, re-mineralization or polishing, as required" },
  { label: "Installation", value: "Skid-mounted / floor-mounted" },
  { label: "Applications", value: "Industrial process water, textiles, food processing, boiler feed and manufacturing" },
];

const applications = [
  { title: "Textile processing", icon: "M4 6c4-3 6 3 10 0s4 0 6 0M4 12c4-3 6 3 10 0s4 0 6 0M4 18c4-3 6 3 10 0s4 0 6 0" },
  { title: "Food & beverage manufacturing", icon: "M6 3v8a3 3 0 0 0 3 3v7M12 3v8M9 3v6M17 3c-2 1-3 4-3 7h3v11" },
  { title: "Engineering industries", icon: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" },
  { title: "Boiler feed-water pre-treatment", icon: "M8 3h8v18H8zM8 8h8M12 11v5" },
  { title: "General industrial process water", icon: "M3 21V10l6 3V10l6 3V6h4v15H3z" },
];

/* ---- Rainwater harvesting filters ---- */
type RainModel = {
  name: string;
  forWho: string;
  roof: string; // suggested roof area
  roofNote: string;
  bullets: string[];
  image?: string; // optional photo
};

const rainModels: RainModel[] = [
  {
    name: "Domestic rainwater filter",
    forWho: "Individual houses and small buildings",
    roof: "Up to 120 m²",
    roofNote: "Suggested roof area",
    image : Img1,
    bullets: [
      "Inline or gravity-operated design",
      "Removable mesh for cleaning",
      "Connects to a storage tank or recharge pit",
    ],
  },
  {
    name: "Commercial rainwater filter",
    forWho: "Apartments, offices, schools and shops",
    roof: "120–350 m²",
    roofNote: "Suggested roof area",
    image : Img2,
    bullets: [
      "Higher-flow filtration options",
      "Self-cleaning or manual-cleaning models",
      "Suitable for multiple rainwater collection points when correctly sized",
    ],
  },
  {
    name: "Industrial rainwater filter",
    forWho: "Factories, warehouses and large roof areas",
    roof: "350 m² and above",
    roofNote: "Suggested roof area",
    image : Img3,
    bullets: [
      "Larger inlet and outlet connections",
      "Multiple filters or a high-flow filter assembly",
      "Optional first-flush diverter and desilting chamber",
    ],
  },
];

const rainSpecs: Spec[] = [
  { label: "Product type", value: "Rooftop rainwater harvesting filter" },
  { label: "Filter type", value: "Inline, mesh-screen, media or self-cleaning filter" },
  { label: "Filter element", value: "SS 304 stainless-steel mesh or suitable filter media" },
  { label: "Mesh rating", value: "Around 100–500 microns, depending on model" },
  { label: "Housing material", value: "UV-stabilized HDPE, PVC, FRP or stainless steel" },
  { label: "Operating principle", value: "Gravity-fed filtration" },
  { label: "Power requirement", value: "No electricity for gravity-operated models" },
  { label: "Cleaning method", value: "Manual cleaning, auto-flush or self-cleaning, depending on model" },
  { label: "Installation", value: "Rooftop downpipe, wall-mounted or inline" },
  { label: "Applications", value: "Houses, apartments, factories, offices, schools and commercial buildings" },
  { label: "Outlet connection", value: "Selected to match the rainwater pipe and required flow" },
  { label: "Water destination", value: "Storage tank, sump or groundwater recharge pit" },
];

/* ---- Water dispensers ---- */
// The three taps: hot, cold and normal temperature
const dispenserTaps = [
  {
    name: "Hot",
    temp: "Approx. 85–95°C",
    gradient: "from-orange-500 to-amber-500",
    
    facts: [
      { label: "Heating capacity", value: "Approx. 5 litres/hour" },
      { label: "Hot water tank", value: "Approx. 1–2 litres" },
      { label: "Heating power", value: "Approx. 450–500 W" },
    ],
  },
  {
    name: "Cold",
    temp: "Approx. 7–15°C",
    gradient: "from-cyan-500 to-blue-600",
    
    facts: [
      { label: "Cooling capacity", value: "Approx. 2–3 litres/hour" },
      { label: "Cold water tank", value: "Approx. 2–4 litres" },
      { label: "Cooling power", value: "Approx. 80–110 W" },
    ],
  },
  {
    name: "Normal",
    temp: "Normal temperature",
    gradient: "from-slate-500 to-slate-700",
    
    facts: [
      { label: "Normal water tank", value: "Model-dependent" },
      { label: "Number of taps", value: "3" },
      { label: "Dispensing options", value: "Hot, cold and normal-temperature water" },
    ],
  },
];

type DispenserConfig = {
  name: string;
  tag: string; // small label on the picture
  forWho: string;
  bullets: string[];
  image?: string; // optional photo
};

const dispenserConfigs: DispenserConfig[] = [
  {
    name: "Bottle-type water dispenser",
    tag: "Bottle-fed",
    forWho: "Homes and small offices",
    image: Img4,
    bullets: [
      "Uses a water bottle, commonly 20 litres",
      "Hot, cold and normal dispensing",
    ],
  },
  {
    name: "RO water purifier with dispenser",
    tag: "RO built in",
    forWho: "Offices and shared-use areas",
    image: Img5,
    bullets: [
      "Integrated RO purification, with optional additional treatment stages",
      "Direct water supply on compatible models",
      "Hot, cold and normal purified-water outlets",
    ],
  },
  {
    name: "Commercial water dispenser",
    tag: "High capacity",
    forWho: "Factories, canteens, institutions and larger offices",
    image:Img6,
    bullets: [
      "Higher-capacity storage and dispensing options",
      "Stainless-steel tanks available",
    ],
  },
];

const dispenserSpecs: Spec[] = [
  { label: "Product type", value: "Hot, cold and normal water dispenser" },
  { label: "Dispenser type", value: "Floor-standing or tabletop" },
  { label: "Dispensing options", value: "Hot, cold and normal-temperature water" },
  { label: "Number of taps", value: "3" },
  { label: "Hot water temperature", value: "Approx. 85–95°C" },
  { label: "Cold water temperature", value: "Approx. 7–15°C" },
  { label: "Heating capacity", value: "Approx. 5 litres/hour" },
  { label: "Cooling capacity", value: "Approx. 2–3 litres/hour" },
  { label: "Hot water tank", value: "Approx. 1–2 litres" },
  { label: "Cold water tank", value: "Approx. 2–4 litres" },
  { label: "Normal water tank", value: "Model-dependent" },
  { label: "Tank material", value: "Food-grade stainless steel or suitable food-grade plastic" },
  { label: "Cooling system", value: "Compressor cooling" },
  { label: "Refrigerant", value: "Model-dependent; commonly R134a in some models" },
  { label: "Heating power", value: "Approx. 450–500 W" },
  { label: "Cooling power", value: "Approx. 80–110 W" },
  { label: "Power supply", value: "220–240 V AC, 50 Hz, single phase" },
  { label: "Safety features", value: "Hot-water child lock and overheat protection, depending on model" },
  { label: "Indicators", value: "Power, heating and cooling LEDs" },
  { label: "Applications", value: "Homes, offices, shops, schools, hospitals and factories" },
];

const dispenserApplications = ["Homes", "Offices", "Shops", "Schools", "Hospitals", "Factories"];

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = "px-5 md:px-8";
const DROP = "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z";
const ARROW = "M5 12h14M13 6l6 6-6 6";
const CHECK = "M5 12.5l4.5 4.5L19 7.5";

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



// Datasheet card: dark header, then label / value rows
function Datasheet({ title, tag, rows }: { title: string; tag: string; rows: Spec[] }) {
  return (
    <div className="overflow-hidden rounded-xs border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-4 bg-(--primary) px-5 py-3 text-white">
        <h3 className="text-sm font-semibold uppercase tracking-wider">{title}</h3>
        <span className="text-xs text-white/70">{tag}</span>
      </div>
      <dl className="divide-y divide-slate-100">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 px-5 py-3.5 sm:grid-cols-[12rem_1fr] sm:gap-6">
            <dt className="text-sm font-semibold text-(--primary)">{r.label}</dt>
            <dd className="text-sm leading-relaxed text-slate-600">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Photo or gradient with a water drop
function Picture({
  src,
  alt,
  className = "",
  label,
}: {
  src?: string;
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) ${className}`}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cyan-300/20"
            aria-hidden="true"
          >
            <path d={DROP} />
          </svg>
          {label && (
            <span className="absolute inset-x-0 bottom-5 px-4 text-center text-base font-semibold text-white/80">
              {label}
            </span>
          )}
        </>
      )}
    </div>
  );
}

/* =========================================================
   3. SECTION: HERO
   ========================================================= */
function Hero() {
  return (
    <section
      aria-labelledby="industrial-title"
      className="common-prod-bg relative isolate overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) pb-16 pt-36 text-white sm:pb-24 sm:pt-44"
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
              Industrial RO
            </li>
          </ol>
        </nav>

        <h1
          id="industrial-title"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Industrial RO, rainwater filters &amp; dispensers
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Industrial water purification solutions for factories, manufacturing
          plants and process-water applications, plus rainwater harvesting
          filters and hot, cold and normal water dispensers, from {BRAND}.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#industrial-ro"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Industrial RO plants
            <Icon d="M12 5v14M6 13l6 6 6-6" className="h-4 w-4" />
          </a>
          <a
            href="#rainwater"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Rainwater filters
            <Icon d="M12 5v14M6 13l6 6 6-6" className="h-4 w-4" />
          </a>
          <a
            href="#dispensers"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Water dispensers
            <Icon d="M12 5v14M6 13l6 6 6-6" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. SECTION: INDUSTRIAL RO OVERVIEW
   ========================================================= */
function PlantOverview() {
  return (
    <section id="industrial-ro" aria-labelledby="plant-title" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className={wrap}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Industrial water treatment plants</Eyebrow>
            <h2
              id="plant-title"
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl"
            >
              Industrial RO plants, built around your water
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {BRAND} provides industrial reverse osmosis solutions designed
              for factories, manufacturing plants and process-water
              applications. Our systems can be configured to suit different
              capacities and feed-water conditions, helping industries meet
              their water-quality and operational requirements.
            </p>

            <ul className="mt-6 space-y-3">
              {plantChecklist.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700">
                    <Icon d={CHECK} className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
               <Link
            to={'/contact'}
                className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                Get a Quote
                <Icon d={ARROW} className="h-4 w-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="rounded-full border border-(--primary)/25 px-7 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                Call now
              </a>
            </div>
          </div>

         
          <img src={IndustryImg} alt="Industrial RO plant"
            className="aspect-4/3 rounded-xs shadow-xl shadow-cyan-900/10" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   5. SECTION: CAPACITY LADDER
   ========================================================= */
function Capacity() {
  // Bar heights only show that capacity steps up. They are not to scale.

  return (
    <section aria-labelledby="capacity-title" className="bg-slate-50 py-20 sm:py-28">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Capacity options</Eyebrow>
          </div>
          <h2
            id="capacity-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            From 250 LPH to 50,000+ LPH
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Final capacity is subject to design requirements and your raw-water
            analysis.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capacityBands.map((b) => (
            <li
              key={b.range}
              className="group flex flex-col rounded-xs border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10"
            >
              {/* Rising bar */}
              {/* <div className="flex h-44 items-end" aria-hidden="true">
                <div
                  className={`w-full rounded-t-xl bg-linear-to-t from-(--primary) to-cyan-400 transition-all duration-500 group-hover:opacity-90 ${barHeights[i]}`}
                />
              </div> */}
              <img src={b.img} alt="" />
              <p className="mt-5 text-3xl font-semibold leading-none text-(--primary)">
                {b.range}
                <span className="ml-1.5 text-base font-medium text-cyan-700">{b.unit}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{b.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =========================================================
   6. SECTION: HOW THE PLANT WORKS + SPECIFICATIONS
   ========================================================= */
function ProcessAndSpecs() {
  return (
    <section aria-labelledby="process-title" className="bg-(--blue) py-20 text-white sm:py-28">
      <div className={wrap}>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2
            id="process-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl"
          >
            How an industrial RO plant treats water
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5">
            Five stages, from raw feed water to treated water, configured to
            your application.
          </p>
        </div>

        {/* Process flow */}
        <ol className="mt-14 grid gap-5 lg:grid-cols-5">
          {flowSteps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-xs border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/15 text-cyan-300">
                  <Icon d={s.icon} />
                </span>
                <span className="text-2xl font-semibold tabular-nums text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>

              {/* Arrow to the next stage (desktop only) */}
              {i < flowSteps.length - 1 && (
                <span
                  className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-cyan-300 text-(--primary) lg:grid"
                  aria-hidden="true"
                >
                  <Icon d={ARROW} className="h-4 w-4" />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Datasheet */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <h3 className="text-2xl font-semibold sm:text-3xl">General technical specifications</h3>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Common industrial RO details. Final capacity, recovery, power
              requirement and permeate quality are determined from raw-water
              analysis and your application requirements.
            </p>
             <Link
            to={'/contact'}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Technical consultation
              <Icon d={ARROW} className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <Datasheet title="Industrial RO plant" tag="Common specification" rows={plantSpecs} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   7. SECTION: FEATURES + APPLICATIONS
   ========================================================= */
function FeaturesAndApplications() {
  return (
    <section aria-labelledby="features-title" className="bg-white py-20 sm:py-28">
      <div className={wrap}>
        {/* Features */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Why our plants</Eyebrow>
          </div>
          <h2
            id="features-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            Built for industrial demand
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li key={f.title} className="group rounded-xs border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-900/10">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300">
                <Icon d={f.icon} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-(--primary)">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
            </li>
          ))}
        </ul>

        {/* Applications */}
        <div className="mt-20 rounded-xs bg-slate-50 p-7 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Applications</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-(--primary) sm:text-3xl">
                Where industrial RO is used
              </h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {applications.map((a) => (
                <li key={a.title} className="flex items-center gap-3 rounded-xs border border-slate-200 bg-white p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Icon d={a.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-(--primary)">{a.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   8. SECTION: RAINWATER HARVESTING FILTERS
   ========================================================= */
function Rainwater() {
  return (
    <section id="rainwater" aria-labelledby="rain-title" className="scroll-mt-24 bg-slate-50 py-20 sm:py-28">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Rainwater harvesting</Eyebrow>
          </div>
          <h2
            id="rain-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            Rainwater harvesting filters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Rooftop filters that clean rainwater on its way to a storage tank,
            sump or groundwater recharge pit. Choose by roof area.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {rainModels.map((m) => (
            <li key={m.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xs border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10">
                <div className="relative">
                  <Picture src={m.image} alt={m.name} label={m.name} className="aspect-16/10" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-(--primary) backdrop-blur">
                    {m.roof}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-(--primary)">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-700">For {m.forWho.toLowerCase()}</p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {m.roofNote}
                  </p>
                  <p className="text-2xl font-semibold text-(--primary)">{m.roof}</p>

                  <ul className="mt-5 space-y-2.5">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700">
                          <Icon d={CHECK} className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Datasheet title="Rainwater harvesting filter" tag="Common options" rows={rainSpecs} />
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Roof areas are suggestions. The right filter depends on roof area,
            rainfall and the number of collection points, so we size it with
            you.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   8b. SECTION: WATER DISPENSERS
   ========================================================= */
function Dispensers() {
  return (
    <section id="dispensers" aria-labelledby="dispenser-title" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Water dispensers</Eyebrow>
          </div>
          <h2
            id="dispenser-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            Hot, cold &amp; normal water dispensers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Three taps, three temperatures. Floor-standing or tabletop
            dispensers for homes, offices, shops, schools, hospitals and
            factories.
          </p>
        </div>

        {/* The three taps */}
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {dispenserTaps.map((t) => (
            <li
              key={t.name}
              className={`rounded-xs bg-linear-to-br ${t.gradient} p-7 text-white shadow-lg shadow-slate-900/10`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                    {t.name} water
                  </p>
                  <p className="mt-2 text-2xl font-semibold leading-tight">{t.temp}</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/20">
                  <Icon d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0z" className="h-5 w-5" />
                </span>
              </div>

              <dl className="mt-6 space-y-3 border-t border-white/25 pt-5">
                {t.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <dt className="text-white/80">{f.label}</dt>
                    <dd className="text-right font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        {/* Available configurations */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-(--primary) sm:text-3xl">
            Available configurations
          </h3>
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {dispenserConfigs.map((c) => (
            <li key={c.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xs border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10">
                <div className="relative">
                  <Picture src={c.image} alt={c.name} label={c.name} className="aspect-16/10" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-(--primary) backdrop-blur">
                    {c.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h4 className="text-xl font-semibold text-(--primary)">{c.name}</h4>
                  <p className="mt-1 text-sm font-medium text-cyan-700">Suitable for {c.forWho.toLowerCase()}</p>

                  <ul className="mt-5 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700">
                          <Icon d={CHECK} className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Datasheet and applications */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:col-span-4">
            <Eyebrow>Specifications</Eyebrow>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-(--primary) sm:text-3xl">
              Hot, cold &amp; normal water dispenser
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Typical specifications. These ranges are consistent with
              published specifications for several dispenser models, but they
              are not universal ratings.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Applications
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Applications">
              {dispenserApplications.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-cyan-50 px-3.5 py-1.5 text-sm font-medium text-cyan-800 ring-1 ring-inset ring-cyan-100"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <Datasheet title="Water dispenser" tag="Typical specification" rows={dispenserSpecs} />
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Please confirm the exact specification for the model you choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   9. SECTION: CALL TO ACTION
   ========================================================= */
function CtaBand() {
  return (
    <section aria-labelledby="industrial-cta-title" className="bg-white pb-20 sm:pb-28">
      <div className={wrap}>
        <div className="relative isolate overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16">
          

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="industrial-cta-title" className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Need a technical consultation?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
                Share your raw-water analysis and requirement and we will
                prepare a customized quotation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
               <Link
            to={'/contact'}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Request a Quote
                <Icon d={ARROW} className="h-4 w-4" />
              </Link>
              <a
                href={PHONE_HREF}
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   10. THE PAGE
   ========================================================= */
export default function IndustrialRoPage() {
  return (
    <main>
      <Hero />
      <PlantOverview />
      <Capacity />
      <ProcessAndSpecs />
      <FeaturesAndApplications />
      <Rainwater />
      <Dispensers />
      <CtaBand />
    </main>
  );
}