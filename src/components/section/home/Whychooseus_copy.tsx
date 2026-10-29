/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const PHONE_HREF = "tel:+919999999999";

// Photo for the tall card on the left. Import it at the top of the file, then set it here:
//   import WhyImg from "../assets/home/why-choose-us.jpg";
//   const IMAGE = WhyImg;
// While this is empty, a blue gradient with a water drop is shown.
const IMAGE = "";

type Reason = {
  title: string;
  text: string;
  icon: string; // SVG path
};

const reasons: Reason[] = [
  {
    title: "Complete RO range",
    text: "Domestic, commercial and industrial systems from one trusted supplier.",
    icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  },
  {
    title: "Our own service team",
    text: "Installation, repair and maintenance handled by our own technicians.",
    icon: "M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 21a8 8 0 0 1 16 0",
  },
  {
    title: "Genuine spares",
    text: "Membranes, filters, pumps and fittings for the systems we sell and service.",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5",
  },
  {
    title: "Right-sized solutions",
    text: "We match the system to your water source, daily usage and available space.",
    icon: "M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6",
  },
  {
    title: "Clear, upfront quotes",
    text: "Know the scope and cost before any work begins, with no surprises later.",
    icon: "M7 3h8l4 4v14H7zM14 3v5h5M10 13h6M10 17h6",
  },
  {
    title: "Support after the sale",
    text: "AMC plans and rental options keep you covered long after installation.",
    icon: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z",
  },
];

/* =========================================================
   2. SMALL ICON HELPER
   ========================================================= */
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

/* =========================================================
   3. THE TALL PHOTO CARD (same style as the "Bulk orders" card)
   ========================================================= */
function PhotoCard() {
  return (
    <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-(--blue) to-(--primary) p-6 sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0">
      {IMAGE ? (
        <img
          src={IMAGE}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="pointer-events-none absolute -bottom-10 -right-10 h-72 w-72 text-cyan-300/10"
          aria-hidden="true"
        >
          <path d="M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z" />
        </svg>
      )}

      {/* Dark fade so the white text is always readable on a photo */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35"
        aria-hidden="true"
      />

      <p className="relative text-sm font-semibold text-cyan-300">
        Free advice
      </p>

      <div className="relative">
        <h3 className="text-3xl font-semibold leading-tight text-white">
          Not sure which system you need?
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/80">
          Talk to our team and get a recommendation for your space and water
          source.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <a
            href="/contact#quote"
            className="rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Get a quote
          </a>
          <a
            href={PHONE_HREF}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Call now
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4. ONE REASON CARD
   ========================================================= */
function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-7">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/15 text-cyan-300 transition-colors group-hover:bg-cyan-300 group-hover:text-(--primary)">
        <Icon d={reason.icon} />
      </span>
      <h3 className="mt-6 text-xl font-medium leading-snug text-white">
        {reason.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {reason.text}
      </p>
    </div>
  );
}

/* =========================================================
   5. THE SECTION
   ========================================================= */
export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-title"
      className="bg-(--blue) py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Top: title and intro (same as the Spares section) */}
        <div>
          <h2
            id="why-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Why choose us?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            From choosing the right system to servicing it year after year, we
            look after every step.
          </p>
        </div>

        {/* Middle: tall photo card + six reasons */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <PhotoCard />
          {reasons.map((r) => (
            <ReasonCard key={r.title} reason={r} />
          ))}
        </div>
      </div>
    </section>
  );
}