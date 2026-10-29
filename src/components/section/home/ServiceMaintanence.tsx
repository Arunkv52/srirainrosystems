/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const PHONE_HREF = "tel:+919999999999";

type Service = {
  slug: string; // used in the enquiry link
  title: string;
  description: string;
  icon: string; // SVG path
};

const services: Service[] = [
  {
    slug: "installation-commissioning",
    title: "RO installation & commissioning",
    description:
      "Site check, mounting, plumbing and electrical connections, followed by testing and commissioning.",
    icon: "M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9",
  },
  {
    slug: "repair-troubleshooting",
    title: "Repair & troubleshooting",
    description:
      "Diagnosis and repair of low flow, leakage, taste problems, noise and other faults.",
    icon: "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z",
  },
  {
    slug: "filter-membrane-replacement",
    title: "Filter & membrane replacement",
    description:
      "Timely replacement of sediment, carbon and spun filters and RO membranes.",
    icon: "M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4",
  },
  {
    slug: "amc",
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Scheduled service visits through the year, so your system keeps performing.",
    icon: "M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6zM9 12l2 2 4-4",
  },
  {
    slug: "plant-maintenance",
    title: "Commercial & industrial plant maintenance",
    description:
      "Preventive maintenance and breakdown support for plant-scale RO systems.",
    icon: "M3 21V10l6 3V10l6 3V6h4v15H3z",
  },
  {
    slug: "equipment-rental",
    title: "Equipment on rental basis",
    description:
      "RO equipment available on rent for short-term and long-term requirements.",
    icon: "M3 6h18v15H3zM3 10h18M8 3v4M16 3v4",
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

const ARROW = "M5 12h14M13 6l6 6-6 6";
const PHONE = "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z";

/* =========================================================
   3. ONE SERVICE CARD
   ========================================================= */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const number = String(index + 1).padStart(2, "0"); // 1 -> "01"

  return (
    <a
      href={`/contact?service=${service.slug}#service`}
      className="group relative flex h-full flex-col rounded-xs border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 sm:p-7"
    >
      {/* Icon on the left, number on the right */}
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300">
          <Icon d={service.icon} />
        </span>
        <span className="text-3xl font-semibold tabular-nums text-slate-200 transition-colors group-hover:text-cyan-200">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold leading-snug text-(--primary)">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-(--primary) group-hover:text-cyan-700">
        Enquire
        <Icon
          d={ARROW}
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </span>
    </a>
  );
}

/* =========================================================
   4. THE SECTION
   ========================================================= */
export default function ServiceMaintenance() {
  return (
    <section
      id="service"
      aria-labelledby="service-title"
      className="bg-slate-50 py-20 sm:py-24"
    >
      <div className="px-5 sm:px-8 lg:px-5">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---- Left: intro panel (stays in view while you scroll the cards) ---- */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-xs bg-gradient-to-br from-(--blue) to-(--primary) p-8 text-white sm:p-10 lg:sticky lg:top-28 md:h-1/2 h-auto">
              {/* Decorative water drop */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="pointer-events-none absolute -bottom-12 -right-12 h-72 w-72 text-cyan-300/10"
                aria-hidden="true"
              >
                <path d="M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z" />
              </svg>

              <p className="relative text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Service &amp; maintenance
              </p>
              <h2
                id="service-title"
                className="relative mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
              >
                Installed right. Serviced on time.
              </h2>
              <p className="relative mt-4 text-base leading-relaxed text-white/70">
                From the first installation to yearly upkeep, our team keeps
                homes, businesses and plants running on clean water.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact#service"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06242a] transition-colors hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Book a service
                  <Icon d={ARROW} className="h-4 w-4" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <Icon d={PHONE} className="h-4 w-4" />
                  Call now
                </a>
              </div>
            </div>
          </div>

          {/* ---- Right: the six service cards ---- */}
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {services.map((s, i) => (
              <li key={s.slug}>
                <ServiceCard service={s} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}