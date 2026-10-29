import Img from "../../../assets/home/ro-commercial.jpeg";

/* ---------- Types ---------- */
type Badge = "New launch" | "Popular choice" | "Best value";

type Product = {
  id: string;
  name: string;
  category: string;
  badge?: Badge;
  image?: string; // imported asset or URL
  features: string[];
  href: string; // product page
};

/* ---------- Sample data: replace with your real products ---------- */
const products: Product[] = [
  {
    id: "home-ro-8l",
    name: "Home RO + UV + MF Water Purifier, 8 L Storage",
    category: "Domestic RO",
    badge: "New launch",
    image: Img,
    features: ["RO", "UV", "MF", "8 L tank"],
    href: "/domestic-ro/home-ro-8l",
  },
  {
    id: "wall-mount-7l",
    name: "Wall-Mounted RO + UV Purifier, 7 L Storage",
    category: "Domestic RO",
    badge: "Popular choice",
    image: Img,
    features: ["RO", "UV", "Mineral", "7 L tank"],
    href: "/domestic-ro/wall-mount-7l",
  },
  {
    id: "commercial-50",
    name: "Commercial RO Plant, 50 LPH for Offices and Shops",
    category: "Commercial RO",
    badge: "Popular choice",
    image: Img,
    features: ["50 LPH", "SS frame", "Auto flush"],
    href: "/commercial-ro/commercial-50",
  },
  {
    id: "industrial-250",
    name: "Industrial RO Plant, 250 LPH Water Treatment",
    category: "Industrial RO",
    badge: "New launch",
    image: Img,
    features: ["250 LPH", "Pre-treatment", "AMC ready"],
    href: "/industrial-ro/industrial-250",
  },
];

/* ---------- UI helpers ---------- */
const badgeStyles: Record<Badge, string> = {
  "New launch": "bg-cyan-50 text-cyan-800 ring-cyan-200",
  "Popular choice": "bg-(--primary) text-white ring-(--primary)",
  "Best value": "bg-emerald-50 text-emerald-800 ring-emerald-200",
};

function DropPlaceholder() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-20 w-20 text-cyan-700/30"
      aria-hidden="true"
    >
      <path d="M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { id, name, category, badge, image, features, href } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10">
      {/* Image */}
      <div className="relative grid aspect-[4/3.2] place-items-center overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 p-6">
        {badge && (
          <span
            className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${badgeStyles[badge]}`}
          >
            {badge}
          </span>
        )}

        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            // mix-blend-multiply hides a white photo background on the grey gradient
            className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <DropPlaceholder />
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
          {category}
        </p>

        <h3 className="mt-2 line-clamp-2 min-h-[2.9rem] text-base font-semibold leading-snug text-(--primary)">
          <a
            href={href}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {name}
          </a>
        </h3>

        <ul className="mb-6 mt-4 flex flex-wrap gap-2">
          {features.map((f) => (
            <li
              key={f}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {f}
            </li>
          ))}
        </ul>

        {/* Actions pinned to the bottom so every card lines up */}
        <div className="mt-auto grid grid-cols-2 gap-2.5 border-t border-slate-100 pt-5">
          <a
            href={href}
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-(--primary)/25 px-4 py-2.5 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Learn more
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={`/contact?product=${encodeURIComponent(id)}#demo`}
            className="inline-flex items-center justify-center rounded-full bg-(--primary) px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            Book demo
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------- Section ---------- */
export default function BestSellers() {
  return (
    <section
      aria-labelledby="best-sellers-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700">
            <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
            Best sellers
            <span className="h-px w-8 bg-cyan-600/50" aria-hidden="true" />
          </p>
          <h2
            id="best-sellers-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
          >
            Best selling purifiers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Our most requested RO systems for homes, businesses and industry,
            installed and serviced by our own team.
          </p>
        </div>

        {/* Grid */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>

        {/* View all */}
        <div className="mt-12 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border border-(--primary) px-7 py-3 text-sm font-semibold text-(--primary) transition-colors hover:bg-(--primary) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
          >
            View all products
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}