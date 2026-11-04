import Ro25Img from '../../../assets/Products/Commercial/25 LPH/WhatsApp Image 2026-10-05 at 13.15.35.jpeg'
import Ro50Img from '../../../assets/Products/Commercial/50 LPH/WhatsApp Image 2026-10-08 at 12.47.21.jpeg'
/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = "Sri Rain RO Systems";
const PHONE_HREF = "tel:+919999999999";
const WHATSAPP_NUMBER = "919999999999"; // country code + number, no "+"

type Spec = { parameter: string; value: string };

type Product = {
  slug: string; // page anchor (#slug)
  name: string;
  badge: string; // small label on the card
  subtitle: string;
  description: string;
  capacity: string; // big number, e.g. "25 LPH"
  capacityNote: string;
  daily: string; // e.g. "100 L/day"
  dailyNote: string;
  applications: string[]; // tags on the overview card
  specs: Spec[];
  // Photo: import it at the top of the file, then set it here, e.g.
  //   import Ro25Img from "../assets/commercial/ro-25-lph.jpg";
  //   image: Ro25Img
  image?: string;
};

const products: Product[] = [
  {
    slug: "ro-25-lph",
    name: "25 LPH RO Water Purification System",
    badge: "Small-scale",
    subtitle: "Domestic & small-scale applications",
    description:
      "A compact reverse osmosis water purification system designed to reduce dissolved salts and other impurities in feed water, subject to the incoming water quality and the selected treatment configuration.",
    capacity: "25 LPH",
    capacityNote: "Nominal production rate",
    daily: "100 L/day",
    dailyNote: "Daily output at 8 hours. Theoretical, under rated conditions",
    applications: ["Homes", "Offices", "Small shops", "Low-volume needs"],
    image: Ro25Img,
    specs: [
      { parameter: "Product name", value: "SRRS-RO-25 LPH RO Water Purifier" },
      { parameter: "Purification technology", value: "Reverse Osmosis (RO)" },
      { parameter: "Rated production capacity", value: "25 litres per hour" },
      { parameter: "Membrane", value: "RO membrane selected for 25 LPH output" },
      { parameter: "Feed water sources", value: "Borewell, municipal or tanker water, subject to water analysis" },
      { parameter: "Pre-filtration", value: "Sediment filter and activated carbon filter" },
      { parameter: "High-pressure pump", value: "As required by feed-water TDS and membrane operating pressure" },
      { parameter: "Membrane housing", value: "Compatible with the selected membrane" },
      { parameter: "Post-treatment", value: "Post-carbon filter; optional UV or mineral cartridge" },
      { parameter: "Storage tank", value: "Optional; select capacity based on customer demand" },
      { parameter: "Automatic operation", value: "Optional auto shut-off and low/high-pressure protection" },
      { parameter: "Frame / cabinet", value: "Wall-mounted or floor-mounted, depending on design" },
      { parameter: "Power supply", value: "Confirm from the selected pump and electrical components" },
      { parameter: "Installation", value: "Plumbing and electrical requirements to be confirmed" },
      { parameter: "Applications", value: "Homes, offices, small shops and other low-volume requirements" },
    ],
  },
  {
    slug: "ro-50-lph",
    name: "50 LPH Commercial RO Plant",
    badge: "Commercial",
    subtitle: "Commercial water purification",
    description:
      "Designed for small businesses and facilities requiring a consistent supply of RO-treated water.",
    capacity: "50 LPH",
    capacityNote: "Litres per hour",
    daily: "200 L/day",
    dailyNote: "Theoretical daily output at 8 hours of operation",
    applications: ["Offices", "Shops", "Restaurants", "Clinics", "Small facilities"],
    image: Ro50Img,
    specs: [
      { parameter: "Product model", value: "SRRS-RO-50 LPH (suggested model code)" },
      { parameter: "System type", value: "Commercial reverse osmosis plant" },
      { parameter: "Rated permeate capacity", value: "50 litres per hour" },
      { parameter: "Purification technology", value: "Reverse osmosis" },
      { parameter: "Feed water", value: "Borewell, municipal or tanker water, after analysis" },
      { parameter: "Pretreatment", value: "Sediment and activated carbon filtration as required" },
      { parameter: "RO membrane", value: "Selected to deliver 50 LPH under specified conditions" },
      { parameter: "Membrane housing", value: "Compatible with selected membrane" },
      { parameter: "Feed pump", value: "Based on feed pressure and pretreatment requirements" },
      { parameter: "High-pressure pump", value: "Selected according to membrane operating pressure and feed-water TDS" },
      { parameter: "Control panel", value: "On/off controls and protection devices as configured" },
      { parameter: "Product-water storage", value: "Optional tank; capacity based on demand" },
      { parameter: "Automatic controls", value: "Optional low-pressure protection and tank-level auto shut-off" },
      { parameter: "Frame", value: "Powder-coated MS or SS, as selected" },
      { parameter: "Power supply", value: "Confirm from selected pump and control-panel ratings" },
      { parameter: "Installation", value: "Plumbing and electrical connections as required" },
      {
        parameter: "Applications",
        value:
          "Offices, shops, restaurants, clinics and small commercial facilities, subject to water-quality suitability",
      },
    ],
  },
];

// Side-by-side comparison. "—" means the information was not specified.
const comparison: { label: string; a: string; b: string }[] = [
  { label: "Rated capacity", a: "25 LPH", b: "50 LPH" },
  { label: "Theoretical daily output (8 h)", a: "100 L/day", b: "200 L/day" },
  { label: "Product model", a: "SRRS-RO-25 LPH", b: "SRRS-RO-50 LPH" },
  {
    label: "Pre-treatment",
    a: "Sediment filter and activated carbon filter",
    b: "Sediment and activated carbon filtration as required",
  },
  { label: "Post-treatment", a: "Post-carbon filter; optional UV or mineral cartridge", b: "—" },
  {
    label: "Storage tank",
    a: "Optional; capacity based on customer demand",
    b: "Optional; capacity based on demand",
  },
  {
    label: "Automatic controls",
    a: "Optional auto shut-off and low/high-pressure protection",
    b: "Optional low-pressure protection and tank-level auto shut-off",
  },
  {
    label: "Frame",
    a: "Wall-mounted or floor-mounted, depending on design",
    b: "Powder-coated MS or SS, as selected",
  },
  {
    label: "Applications",
    a: "Homes, offices, small shops and other low-volume requirements",
    b: "Offices, shops, restaurants, clinics and small commercial facilities",
  },
];

// What we need from the customer to propose a system
const sizingItems = [
  {
    title: "Your water source",
    text: "Borewell, municipal or tanker water. A water analysis tells us what treatment your feed water needs.",
    icon: "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z",
  },
  {
    title: "Your daily requirement",
    text: "How many litres you need each day and how many hours the plant will run.",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  },
  {
    title: "Your site",
    text: "Available space, plumbing and electrical connections, and whether you want a storage tank.",
    icon: "M3 11l9-8 9 8M5 10v10h14V10",
  },
];

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = " px-5 md:px-8";
const DROP = "M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z";
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

const quoteHref = (p: Product) =>
  `/contact?topic=${encodeURIComponent("Commercial RO")}&product=${encodeURIComponent(p.name)}#quote`;

const whatsappHref = (p: Product) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'd like details on the ${p.name}.`)}`;

// Product picture: your photo, or a gradient with a water drop until you add one
function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) ${className}`}>
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 text-cyan-300/20"
          aria-hidden="true"
        >
          <path d={DROP} />
        </svg>
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
      aria-labelledby="commercial-title"
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
              Commercial RO
            </li>
          </ol>
        </nav>

        <h1
          id="commercial-title"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Commercial RO systems
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          RO water purification for homes, offices, shops, restaurants and
          clinics, from {BRAND}. Choose a model below and we will confirm the
          right configuration for your water.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact?topic=Commercial%20RO#quote"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Get a quote
           
          </a>
         
        
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   4. SECTION: MODELS AT A GLANCE
   ========================================================= */
// function Models() {
//   return (
//     <section id="models" aria-labelledby="models-title" className="scroll-mt-24 bg-white py-20 sm:py-24">
//       <div className={wrap}>
//         <div className="mx-auto max-w-2xl text-center">
//           <div className="flex justify-center">
//             <Eyebrow>Our models</Eyebrow>
//           </div>
//           <h2
//             id="models-title"
//             className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
//           >
//             Choose your capacity
//           </h2>
//           <p className="mt-4 text-base leading-relaxed text-slate-600">
//             Two sizes for low-volume and small commercial needs.
//           </p>
//         </div>

//         <ul className="mt-12 grid gap-6 md:grid-cols-2">
//           {products.map((p) => (
//             <li key={p.slug}>
//               <article className="group flex h-full flex-col overflow-hidden rounded-xs border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10">
//                 <div className="relative">
//                   <ProductImage product={p} className="aspect-[16/10]" />
//                   <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-(--primary) backdrop-blur">
//                     {p.badge}
//                   </span>
//                 </div>

//                 <div className="flex flex-1 flex-col p-7 sm:p-8">
//                   <p className="text-sm font-semibold text-cyan-700">{p.subtitle}</p>
//                   <h3 className="mt-2 text-2xl font-semibold leading-snug text-(--primary)">
//                     {p.name}
//                   </h3>

//                   {/* Key numbers */}
//                   <dl className="mt-6 grid grid-cols-2 gap-4">
//                     <div className="rounded-xs bg-slate-50 p-4">
//                       <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
//                         Rated capacity
//                       </dt>
//                       <dd className="mt-1 text-3xl font-semibold text-(--primary)">{p.capacity}</dd>
//                     </div>
//                     <div className="rounded-xs bg-slate-50 p-4">
//                       <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
//                         Daily output (8 h)
//                       </dt>
//                       <dd className="mt-1 text-3xl font-semibold text-(--primary)">{p.daily}</dd>
//                     </div>
//                   </dl>
//                   <p className="mt-2 text-xs text-slate-500">Daily output is theoretical, under rated conditions.</p>

//                   <ul className="mt-5 flex flex-wrap gap-2" aria-label="Applications">
//                     {p.applications.map((a) => (
//                       <li
//                         key={a}
//                         className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-800 ring-1 ring-inset ring-cyan-100"
//                       >
//                         {a}
//                       </li>
//                     ))}
//                   </ul>

//                   <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
//                     <a
//                       href={`#${p.slug}`}
//                       className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
//                     >
//                       View specifications
//                       <Icon d="M12 5v14M6 13l6 6 6-6" className="h-4 w-4" />
//                     </a>
//                     <a
//                       href={quoteHref(p)}
//                       className="rounded-full border border-(--primary)/25 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
//                     >
//                       Get a quote
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

/* =========================================================
   5. SECTION: ONE PRODUCT IN DETAIL (photo, numbers, datasheet)
   ========================================================= */
function ProductDetail({ product: p, index }: { product: Product; index: number }) {
  const reversed = index % 2 === 1; // photo switches sides every other product

  return (
    <section
      id={p.slug}
      aria-labelledby={`${p.slug}-title`}
      className={`scroll-mt-24 py-16 sm:py-24 ${index % 2 === 0 ? "bg-slate-50" : "bg-white"}`}
    >
      <div className={wrap}>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Photo and key numbers */}
          <div className={`lg:col-span-5 lg:sticky lg:top-28 ${reversed ? "lg:order-2" : ""}`}>
            <ProductImage product={p} className="aspect-4/3 rounded-xs shadow-xl shadow-cyan-900/10" />

            <dl className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xs bg-linear-to-br from-(--blue) to-(--primary) p-5 text-white">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Rated capacity
                </dt>
                <dd className="mt-1 text-4xl font-semibold text-cyan-300">{p.capacity}</dd>
                <p className="mt-1 text-xs text-white/70">{p.capacityNote}</p>
              </div>
              <div className="rounded-xs bg-linear-to-br from-(--blue) to-(--primary) p-5 text-white">
                <dt className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Daily output
                </dt>
                <dd className="mt-1 text-4xl font-semibold text-cyan-300">{p.daily}</dd>
                <p className="mt-1 text-xs text-white/70">{p.dailyNote}</p>
              </div>
            </dl>
          </div>

          {/* Text and datasheet */}
          <div className="lg:col-span-7">
            <Eyebrow>{p.badge}</Eyebrow>
            <h2
              id={`${p.slug}-title`}
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl"
            >
              {p.name}
            </h2>
            <p className="mt-2 text-base font-medium text-cyan-700">{p.subtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{p.description}</p>

            <div className="mt-8 overflow-hidden rounded-xs border border-slate-200 bg-white">
              <div className="flex items-center justify-between bg-(--primary) px-5 py-3 text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Technical specifications
                </h3>
                <span className="text-xs text-white/70">Proposed specification</span>
              </div>
              <dl className="divide-y divide-slate-100">
                {p.specs.map((s) => (
                  <div
                    key={s.parameter}
                    className="grid gap-1 px-5 py-3.5 sm:grid-cols-[12rem_1fr] sm:gap-6"
                  >
                    <dt className="text-sm font-semibold text-(--primary)">{s.parameter}</dt>
                    <dd className="text-sm leading-relaxed text-slate-600">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Specifications are proposed and depend on your incoming water
              quality and the selected configuration.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={quoteHref(p)}
                className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                Request a quote
                <Icon d={ARROW} className="h-4 w-4" />
              </a>
              <a
                href={whatsappHref(p)}
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
   6. SECTION: COMPARE THE TWO MODELS
   ========================================================= */
function Compare() {
  return (
    <section aria-labelledby="compare-title" className="bg-(--blue) py-20 text-white sm:py-28">
      <div className={wrap}>
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2
            id="compare-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl"
          >
            Compare the models
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5">
            The main differences side by side. A dash means the information is
            not specified.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-xs border border-white/15 bg-white/10 backdrop-blur-sm">
          <table className="w-full min-w-160 border-collapse text-left">
            <caption className="sr-only">Comparison of the 25 LPH and 50 LPH RO systems</caption>
            <thead>
              <tr className="border-b border-white/15">
                <th scope="col" className="px-5 py-4 text-sm font-semibold text-white/70 sm:px-7">
                  Feature
                </th>
                {products.map((p) => (
                  <th key={p.slug} scope="col" className="px-5 py-4 text-lg font-semibold text-cyan-300 sm:px-7">
                    {p.capacity}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((r) => (
                <tr key={r.label} className="border-b border-white/10 last:border-0">
                  <th scope="row" className="px-5 py-4 align-top text-sm font-semibold text-white sm:px-7">
                    {r.label}
                  </th>
                  <td className="px-5 py-4 align-top text-sm leading-relaxed text-white/80 sm:px-7">{r.a}</td>
                  <td className="px-5 py-4 align-top text-sm leading-relaxed text-white/80 sm:px-7">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   7. SECTION: WHAT WE NEED TO SIZE YOUR SYSTEM
   ========================================================= */
function Sizing() {
  return (
    <section aria-labelledby="sizing-title" className="bg-white py-20 sm:py-28">
      <div className={wrap}>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Getting started</Eyebrow>
          </div>
          <h2
            id="sizing-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            What we need to recommend the right system
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Pump, membrane and treatment are chosen to suit your feed water, so
            a few details help us get it right.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {sizingItems.map((s, i) => (
            <li key={s.title} className="rounded-xs border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xs bg-cyan-100 text-cyan-700">
                  <Icon d={s.icon} />
                </span>
                <span className="text-3xl font-semibold tabular-nums text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-(--primary)">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =========================================================
   8. SECTION: CALL TO ACTION
   ========================================================= */
function CtaBand() {
  return (
    <section aria-labelledby="commercial-cta-title" className="bg-white pb-20 sm:pb-28">
      <div className={wrap}>
        <div className="relative isolate overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16">
          

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 id="commercial-cta-title" className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Need a different capacity?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
                Tell us your daily requirement and water source and we will
                propose a system that fits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="/contact?topic=Commercial%20RO#quote"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Talk to our team
                <Icon d={ARROW} className="h-4 w-4" />
              </a>
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
   9. THE PAGE
   ========================================================= */
export default function CommercialRoPage() {
  return (
    <main>
      <Hero />
      
      {products.map((p, i) => (
        <ProductDetail key={p.slug} product={p} index={i} />
      ))}
      <Compare />
      <Sizing />
      <CtaBand />
    </main>
  );
}