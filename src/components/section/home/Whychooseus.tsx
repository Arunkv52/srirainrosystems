type Reason = {
  title: string
  text: string
  icon: string
}

const reasons: Reason[] = [
  {
    title: 'Complete RO range',
    text: 'Domestic, commercial and industrial systems from one trusted supplier.',
    icon: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5',
  },
  {
    title: 'Our own service team',
    text: 'Installation, repair and maintenance handled by our own technicians.',
    icon: 'M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 21a8 8 0 0 1 16 0',
  },
  {
    title: 'Genuine spares',
    text: 'Membranes, filters, pumps and fittings for the systems we sell and service.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5',
  },
  {
    title: 'Right-sized solutions',
    text: 'We match the system to your water source, daily usage and available space.',
    icon: 'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6',
  },
]

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}

function ReasonRow({
  reason,
  index,
}: {
  reason: Reason
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t border-black/15 py-7 transition-colors duration-300 hover:border-(--blue)/60 sm:gap-7 sm:py-8">
      <span className="w-12 text-3xl font-semibold tabular-nums text-black/30 transition-colors group-hover:text-(--primary) sm:w-16 sm:text-4xl">
        {number}
      </span>

      <div>
        <h3 className="text-xl font-medium leading-snug text-black sm:text-2xl">
          {reason.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-black/70 sm:text-base">
          {reason.text}
        </p>
      </div>

      <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-300/15 text-(--blue) transition-colors group-hover:bg-(--blue) group-hover:text-(--white)">
        <Icon path={reason.icon} />
      </span>
    </li>
  )
}

export default function WhyChooseUs() {
  const middleIndex = Math.ceil(reasons.length / 2)

  const columns = [
    reasons.slice(0, middleIndex),
    reasons.slice(middleIndex),
  ]

  return (
    <section aria-labelledby="why-title" className="py-10 text-black sm:py-20">
      <div className="px-5 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2
            id="why-title"
            className="text-3xl font-semibold tracking-tight text-[var(--blue)] sm:text-4xl lg:col-span-7 lg:text-5xl"
          >
            Why choose us?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-black/70 sm:text-lg lg:col-span-5">
            From choosing the right system to servicing it year after year, we
            look after every step.
          </p>
        </div>

        <div className="mt-12 grid gap-x-16 lg:mt-16 lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <ol key={columnIndex}>
              {column.map((reason, index) => {
                const reasonIndex =
                  columnIndex === 0 ? index : middleIndex + index

                return (
                  <ReasonRow
                    key={reason.title}
                    reason={reason}
                    index={reasonIndex}
                  />
                )
              })}
            </ol>
          ))}
        </div>
      </div>
    </section>
  )
}