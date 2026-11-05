import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

/* =========================================================
   1. YOUR DETAILS  (edit this once, both legal pages use it)
   These are placeholders. Replace them with your real, verified details.
   ========================================================= */
export const LEGAL = {
  brand: 'Sri Rain RO Systems',
  legalName: 'Sri Rain RO Systems', // your registered business / legal name
  email: 'sales@srirainrosystems.com',
  phone: '+91 99424 99000,+91 97158 86000,+91 97912 87666',
  phoneHref: 'tel:+919942499000',
  address: ['No.595/3c. HP Bank, Kongu Main Road, Bharathi Nagar (North), Tamil Nadu', 'Tirupur - 641 603, Tamil Nadu, India'],
  lastUpdated: '5 November 2026',
  locations: 'Tirupur, Pollachi and Avinashi'
}

/* =========================================================
   2. SMALL BUILDING BLOCKS FOR THE TEXT
   ========================================================= */
export type LegalSection = { id: string; title: string; body: ReactNode }

export function P ({ children }: { children: ReactNode }) {
  return <p>{children}</p>
}

export function Sub ({ children }: { children: ReactNode }) {
  return (
    <h3 className='pt-2 text-lg font-semibold text-(--primary)'>{children}</h3>
  )
}

export function UL ({ children }: { children: ReactNode }) {
  return (
    <ul className='list-disc space-y-2 pl-5 marker:text-cyan-600'>{children}</ul>
  )
}

export function A ({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className='font-medium text-(--primary) underline decoration-cyan-400 underline-offset-4 hover:text-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
    >
      {children}
    </a>
  )
}

const wrap = ' px-5 md:px-8'

function Icon ({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.6}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'
    >
      <path d={d} />
    </svg>
  )
}

/* =========================================================
   3. THE SHARED PAGE LAYOUT
   ========================================================= */
type Props = {
  title: string
  intro: string
  sections: LegalSection[]
  other: { label: string; href: string } // link to the other legal page
}

// The "On this page" list (used on desktop and on mobile)
function Toc ({
  sections,
  active
}: {
  sections: LegalSection[]
  active: string
}) {
  return (
    <ol className='space-y-1'>
      {sections.map((s, i) => {
        const on = s.id === active
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              aria-current={on ? 'true' : undefined}
              className={`flex gap-3 rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                on
                  ? 'bg-cyan-50 font-semibold text-(--primary)'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-(--primary)'
              }`}
            >
              <span className='w-5 shrink-0 tabular-nums text-slate-400'>
                {i + 1}.
              </span>
              <span>{s.title}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

export default function LegalLayout ({ title, intro, sections, other }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  // Highlight the section you are reading in the "On this page" list
  useEffect(() => {
    const els = sections
      .map(s => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <main>
      {/* ---- Hero ---- */}
      <section
        aria-labelledby='legal-title'
        className='relative isolate overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) pb-14 pt-36 text-white sm:pb-20 sm:pt-44'
      >
        <svg
          viewBox='0 0 24 24'
          fill='currentColor'
          className='pointer-events-none absolute -bottom-24 right-0 -z-10 h-112 w-md text-cyan-300/10 sm:right-20'
          aria-hidden='true'
        >
          <path d='M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z' />
        </svg>

        <div className={wrap}>
          <nav aria-label='Breadcrumb' className='text-sm text-white/70'>
            <ol className='flex items-center gap-2'>
              <li>
                <a
                  href='/'
                  className='hover:text-white focus-visible:outline-none focus-visible:underline'
                >
                  Home
                </a>
              </li>
              <li aria-hidden='true'>/</li>
              <li className='text-white' aria-current='page'>
                {title}
              </li>
            </ol>
          </nav>

          <h1
            id='legal-title'
            className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
          >
            {title}
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
            {intro}
          </p>
          <p className='mt-4 text-sm text-white/60'>
            Last updated: {LEGAL.lastUpdated}
          </p>
        </div>
      </section>

      {/* ---- Body ---- */}
      <section className='bg-white py-14 sm:py-20'>
        <div className={wrap}>
          <div className='grid items-start gap-10 lg:grid-cols-12 lg:gap-16'>
            {/* Table of contents */}
            <aside className='lg:col-span-4 xl:col-span-3'>
              {/* Mobile: collapsible */}
              <details className='rounded-2xl border border-slate-200 bg-slate-50 p-4 lg:hidden'>
                <summary className='cursor-pointer text-sm font-semibold text-(--primary)'>
                  On this page
                </summary>
                <div className='mt-3'>
                  <Toc sections={sections} active={active} />
                </div>
              </details>

              {/* Desktop: stays in view while you scroll */}
              <nav
                aria-label='On this page'
                className='hidden lg:sticky lg:top-28 lg:block'
              >
                <p className='mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-500'>
                  On this page
                </p>
                <Toc sections={sections} active={active} />

                <button
                  type='button'
                  onClick={() => window.print()}
                  className='mt-6 inline-flex items-center gap-2 rounded-full border border-(--primary)/25 px-5 py-2.5 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
                >
                  <Icon d='M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z' />
                  Print this page
                </button>
              </nav>
            </aside>

            {/* The policy text */}
            <article className='max-w-3xl lg:col-span-8 xl:col-span-9'>
              <div className='space-y-12'>
                {sections.map((s, i) => (
                  <section
                    key={s.id}
                    id={s.id}
                    aria-labelledby={`${s.id}-title`}
                    className='scroll-mt-28'
                  >
                    <h2
                      id={`${s.id}-title`}
                      className='flex gap-3 text-2xl font-semibold tracking-tight text-(--primary)'
                    >
                      <span className='text-cyan-600'>{i + 1}.</span>
                      {s.title}
                    </h2>
                    <div className='mt-4 space-y-4 text-base leading-relaxed text-slate-600'>
                      {s.body}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact card */}
              <div className='relative isolate mt-16 overflow-hidden rounded-2xl bg-linear-to-br from-(--blue) to-(--primary) p-7 text-white sm:p-10'>
                <h2 className='text-2xl font-semibold'>Questions?</h2>
                <p className='mt-2 text-white/75'>
                  If anything on this page is unclear, please get in touch.
                </p>

                <dl className='mt-6 grid gap-4 text-sm sm:grid-cols-2'>
                  <div>
                    <dt className='text-xs font-semibold uppercase tracking-wider text-white/60'>
                      Business
                    </dt>
                    <dd className='mt-1 leading-relaxed'>
                      {LEGAL.legalName}
                      {LEGAL.address.map(line => (
                        <span key={line} className='block text-white/80'>
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className='text-xs font-semibold uppercase tracking-wider text-white/60'>
                      Contact
                    </dt>
                    <dd className='mt-1 leading-relaxed'>
                      <a href={LEGAL.phoneHref} className='block hover:underline'>
                        {LEGAL.phone}
                      </a>
                      <a href={`mailto:${LEGAL.email}`} className='block break-all hover:underline'>
                        {LEGAL.email}
                      </a>
                    </dd>
                  </div>
                </dl>

                
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}