import { useEffect, useState } from 'react'
import Image1 from '../../../assets/Products/Water Softener/image-1.jpg'
import Image2 from '../../../assets/Products/Water Softener/image-2.jpeg'
import Image3 from '../../../assets/Products/Water Softener/image-3.jpeg'
import Image4 from '../../../assets/Products/Water Softener/image-4.jpeg'
import { Link } from 'react-router'


/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = 'Sri Rain RO Systems'
const PHONE_HREF = 'tel:+919942499000'
const WHATSAPP_NUMBER = '+919942499000' // country code + number, no "+"

// Photos: import each one at the top of the file, then set it here, e.g.
//   import SoftenerImg from "../assets/softeners/softener.jpg";
//   const INTRO_IMAGE = SoftenerImg;
// Until then, a gradient with a water drop is shown.

type Spec = { label: string; value: string }

/* ---- Intro ---- */
const keyFeatures = [
  'Efficient hardness reduction using ion-exchange technology',
  'Manual and automatic regeneration options',
  'Durable vessels and high-quality softening resin',
  'Single-tank and twin-tank configurations',
  'Custom-designed systems based on water hardness and consumption',
  'Suitable for homes, hotels, hospitals, laundries, industries and RO pretreatment',
  'Installation, commissioning, servicing and maintenance support'
]

/* ---- The three softener types ---- */
type SoftenerType = {
  id: string // used in links: /water-softeners?type=commercial
  name: string
  forWho: string
  capacity: string // big number
  capacityNote: string
  specs: Spec[]
  image?: string // optional photo
  icon: string
}

const types: SoftenerType[] = [
  {
    id: 'domestic',
    name: 'Domestic water softener',
    forWho: 'Homes, apartments and villas',
    capacity: '500–2,000 LPH',
    capacityNote: 'Indicative treatment capacity',
    icon: 'M3 11l9-8 9 8M5 10v10h14V10',
    image: Image2,
    specs: [
      {
        label: 'Application',
        value: 'Bathroom, kitchen and whole-house water treatment'
      },
      { label: 'Treatment capacity', value: '500–2,000 LPH (indicative)' },
      {
        label: 'Vessel material',
        value: 'FRP / food-grade compatible material'
      },
      { label: 'Regeneration', value: 'Manual / automatic' },
      { label: 'Control valve', value: 'Multiport / automatic digital valve' },
      { label: 'Regeneration method', value: 'Salt-based ion exchange' },
      { label: 'Power supply', value: '230 V AC for automatic models' },
      {
        label: 'Main benefits',
        value: 'Reduces hardness, scaling and soap consumption'
      }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial water softener',
    forWho: 'Hotels, hospitals, laundries and commercial buildings',
    capacity: '1,000–10,000 LPH',
    capacityNote: 'Indicative treatment capacity',
    icon: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 10h2M14 10h2',
    image: Image3,
    specs: [
      {
        label: 'Application',
        value: 'Commercial water supply and equipment protection'
      },
      { label: 'Treatment capacity', value: '1,000–10,000 LPH (indicative)' },
      {
        label: 'Vessel material',
        value: 'FRP / rubber-lined MS / suitable SS'
      },
      { label: 'Resin type', value: 'Strong acid cation exchange resin' },
      {
        label: 'Operation',
        value: 'Manual / semi-automatic / fully automatic'
      },
      { label: 'Configuration', value: 'Single tank / twin tank' },
      { label: 'Regeneration', value: 'Time-based / meter-based' },
      {
        label: 'Main benefits',
        value:
          'Controls scale formation and protects heaters, boilers and plumbing'
      }
    ]
  },
  {
    id: 'industrial',
    name: 'Industrial water softener',
    forWho: 'Manufacturing plants, boilers and process industries',
    capacity: '5,000–100,000+ LPH',
    capacityNote: 'Based on design',
    icon: 'M3 21V10l6 3V10l6 3V6h4v15H3z',
    image: Image4,
    specs: [
      {
        label: 'Application',
        value: 'Industrial process water and pretreatment for RO systems'
      },
      {
        label: 'Treatment capacity',
        value: '5,000–100,000+ LPH, based on design'
      },
      {
        label: 'Vessel material',
        value: 'FRP / rubber-lined MS / SS, as required'
      },
      { label: 'Resin type', value: 'Industrial-grade cation exchange resin' },
      {
        label: 'Control system',
        value: 'Automatic multiport valve / PLC-based control'
      },
      {
        label: 'Configuration',
        value: 'Single, duplex or multi-vessel system'
      },
      { label: 'Regeneration', value: 'Automatic brine regeneration' },
      {
        label: 'Optional features',
        value:
          'Flow meter, pressure gauges, hardness monitoring and control panel'
      },
      {
        label: 'Main benefits',
        value:
          'Reduces hardness-related scaling and helps protect downstream equipment'
      }
    ]
  }
]

/* ---- How softening works (from the specification table) ---- */
const flow = [
  {
    title: 'Hard water in',
    text: 'Raw water from a borewell, municipal supply or other tested source carries calcium and magnesium ions.',
    icon: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
  },
  {
    title: 'Ion exchange',
    text: 'The water passes through cation exchange resin, which removes the calcium and magnesium ions.',
    icon: 'M8 3h8v18H8zM8 8h8M8 13h8M8 18h8'
  },
  {
    title: 'Softened water out',
    text: 'The outlet hardness is a design target, commonly below 5 ppm as CaCO₃ when properly designed and operated.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5'
  },
  {
    title: 'Regeneration',
    text: 'The resin is refreshed with sodium chloride (softener salt), manually, automatically or meter-based.',
    icon: 'M20 11a8 8 0 0 0-14-4M4 4v4h4M4 13a8 8 0 0 0 14 4M20 20v-4h-4'
  }
]

/* ---- What softening protects ---- */
const benefits = [
  {
    title: 'Pipelines',
    text: 'Less scale formation in water lines.',
    icon: 'M3 10h5v4H3zM16 10h5v4h-5zM8 8h8v8H8z'
  },
  {
    title: 'Bathroom fittings',
    text: 'Helps keep taps and fittings free of scale.',
    icon: 'M5 20v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6M9 11V6a2 2 0 0 1 2-2h2'
  },
  {
    title: 'Heat exchangers & boilers',
    text: 'Protects heaters, boilers and heat exchangers from scaling.',
    icon: 'M8 3h8v18H8zM8 8h8M12 11v5'
  },
  {
    title: 'Water-using equipment',
    text: 'Helps protect downstream and water-using equipment.',
    icon: 'M4 5h16v14H4zM8 9h8M8 13h3M15 14h.01'
  },
  {
    title: 'Soap consumption',
    text: 'Softer water means less soap is needed in homes.',
    icon: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
  },
  {
    title: 'RO pretreatment',
    text: 'Softening ahead of an RO system protects the membranes.',
    icon: 'M6 7a6 2.5 0 0 1 12 0v10a6 2.5 0 0 1-12 0zM6 7a6 2.5 0 0 0 12 0'
  }
]

/* ---- Common specification table ---- */
const commonSpecs: Spec[] = [
  { label: 'Product type', value: 'Domestic / Commercial / Industrial' },
  { label: 'Treatment technology', value: 'Ion exchange / Polymax' },
  { label: 'Hardness removal', value: 'Calcium and magnesium ions' },
  {
    label: 'Raw water source',
    value: 'Borewell / municipal / other tested sources'
  },
  {
    label: 'Inlet water hardness',
    value: 'As per feed-water analysis and design'
  },
  {
    label: 'Outlet hardness',
    value:
      'Design target; commonly below 5 ppm as CaCO₃ when properly designed and operated'
  },
  {
    label: 'Operating pressure',
    value: 'Typically 2–6 bar, subject to vessel and valve ratings'
  },
  { label: 'Regeneration chemical', value: 'Sodium chloride (softener salt)' },
  { label: 'Control mode', value: 'Manual / automatic / meter-based' },
  { label: 'Media', value: 'Cation exchange resin' },
  { label: 'Vessel type', value: 'FRP / lined MS / stainless steel' },
  {
    label: 'Installation',
    value: 'Indoor / outdoor with suitable weather protection'
  },
  {
    label: 'Maintenance',
    value: 'Salt replenishment, resin inspection and valve servicing'
  },
  {
    label: 'Optional accessories',
    value:
      'Brine tank, bypass valve, pressure gauges, flow meter and pre-filter'
  }
]

// What we need to recommend a softener (from the closing line of your content)
const needs = [
  {
    title: 'Your water quality',
    text: 'A feed-water analysis shows the hardness we have to treat.',
    icon: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
  },
  {
    title: 'Your daily consumption',
    text: 'How much water you use sets the size and configuration.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2'
  },
  {
    title: 'Your application',
    text: 'Home, hotel, laundry, boiler or RO pretreatment: each has different needs.',
    icon: 'M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6'
  }
]

const availableSolutions = [
  'Domestic water softeners',
  'Commercial water softeners',
  'Industrial water softeners',
  'Automatic water softening plants'
]

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = 'mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12'
const DROP = 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
const ARROW = 'M5 12h14M13 6l6 6-6 6'
const CHAT = 'M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z'
const CHECK = 'M5 12.5l4.5 4.5L19 7.5'

function Icon ({ d, className = 'h-6 w-6' }: { d: string; className?: string }) {
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

function Eyebrow ({ children }: { children: string }) {
  return (
    <p className='flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700'>
      <span className='h-px w-8 bg-cyan-600/50' aria-hidden='true' />
      {children}
    </p>
  )
}

const quoteHref = (product?: string) =>
  `/contact?topic=${encodeURIComponent('Water softener')}${
    product ? `&product=${encodeURIComponent(product)}` : ''
  }#quote`

function Datasheet ({
  title,
  tag,
  rows
}: {
  title: string
  tag: string
  rows: Spec[]
}) {
  return (
    <div className='overflow-hidden rounded-xs border border-slate-200 bg-white'>
      <div className='flex items-center justify-between gap-4 bg-(--primary) px-5 py-3 text-white'>
        <h3 className='text-sm font-semibold uppercase tracking-wider'>
          {title}
        </h3>
        <span className='text-xs text-white/70'>{tag}</span>
      </div>
      <dl className='divide-y divide-slate-100'>
        {rows.map(r => (
          <div
            key={r.label}
            className='grid gap-1 px-5 py-3.5 sm:grid-cols-[12rem_1fr] sm:gap-6'
          >
            <dt className='text-sm font-semibold text-(--primary)'>
              {r.label}
            </dt>
            <dd className='text-sm leading-relaxed text-slate-600'>
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Picture ({
  src,
  alt,
  label,
  className = ''
}: {
  src?: string
  alt: string
  label?: string
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading='lazy'
          className='absolute inset-0 h-full w-full object-cover'
        />
      ) : (
        <>
          <svg
            viewBox='0 0 24 24'
            fill='currentColor'
            className='absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-cyan-300/20'
            aria-hidden='true'
          >
            <path d={DROP} />
          </svg>
          {label && (
            <span className='absolute inset-x-0 bottom-5 px-4 text-center text-base font-semibold text-white/80'>
              {label}
            </span>
          )}
        </>
      )}
    </div>
  )
}

/* =========================================================
   3. SECTION: HERO
   ========================================================= */
function Hero () {
  return (
    <section
      aria-labelledby='softener-title'
      className='common-prod-bg relative isolate overflow-hidden bg-linear-to-br from-(--blue) to-(--primary) pb-16 pt-36 text-white sm:pb-24 sm:pt-44'
    >
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
              Water softeners
            </li>
          </ol>
        </nav>

        <h1
          id='softener-title'
          className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
        >
          Water softener systems
        </h1>
        <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
          Reliable softening for homes, hotels, hospitals, laundries and
          industry. Designed to reduce water hardness caused by calcium and
          magnesium, from {BRAND}.
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href={quoteHref()}
            className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
          >
            Get a Quote
          </a>
          <a
            href='#solutions'
            className='rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
          >
            Explore solutions
          </a>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   4. SECTION: INTRODUCTION
   ========================================================= */
function Intro () {
  return (
    <section aria-labelledby='intro-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          <img
            src={Image1}
            alt='Water softener system'
            className=' rounded-xs shadow-xl shadow-cyan-900/10'
          />

          <div>
            <Eyebrow>Water softener systems</Eyebrow>
            <h2
              id='intro-title'
              className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl'
            >
              Less scale, longer-lasting equipment
            </h2>
            <p className='mt-5 text-base leading-relaxed text-slate-600'>
              {BRAND} provides reliable water softener solutions for domestic,
              commercial and industrial applications. Our systems are designed
              to reduce water hardness caused by calcium and magnesium, helping
              minimize scale formation in pipelines, bathroom fittings, heat
              exchangers, boilers and water-using equipment.
            </p>

            <ul className='mt-6 space-y-3'>
              {keyFeatures.map(f => (
                <li
                  key={f}
                  className='flex gap-3 text-sm leading-relaxed text-slate-700'
                >
                  <span className='mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700'>
                    <Icon d={CHECK} className='h-3 w-3' />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   5. SECTION: DOMESTIC / COMMERCIAL / INDUSTRIAL
   ========================================================= */
function Solutions () {
  const [active, setActive] = useState(0)
  const t = types[active]

  // Open a type from a link such as /water-softeners?type=industrial
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('type')
    const i = types.findIndex(x => x.id === id)
    if (i >= 0) setActive(i)
  }, [])

  return (
    <section
      id='solutions'
      aria-labelledby='solutions-title'
      className='scroll-mt-24 bg-slate-50 py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Available solutions</Eyebrow>
          </div>
          <h2
            id='solutions-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            A softener for every scale
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Choose where you will use it to see the typical configuration.
          </p>
        </div>

        {/* Selector */}
        <div
          role='tablist'
          aria-label='Choose a softener type'
          className='mt-10 grid gap-3 sm:grid-cols-3'
        >
          {types.map((x, i) => {
            const on = i === active
            return (
              <button
                key={x.id}
                type='button'
                role='tab'
                id={`tab-${x.id}`}
                aria-selected={on}
                aria-controls='solution-panel'
                onClick={() => setActive(i)}
                className={`group flex items-center gap-4 rounded-xs border p-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                  on
                    ? 'border-(--primary) bg-(--primary) text-white shadow-lg shadow-cyan-900/20'
                    : 'border-slate-200 bg-white text-(--primary) hover:border-cyan-300'
                }`}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors ${
                    on
                      ? 'bg-cyan-300/15 text-cyan-300'
                      : 'bg-cyan-50 text-cyan-700'
                  }`}
                >
                  <Icon d={x.icon} />
                </span>
                <span>
                  <span className='block text-lg font-semibold'>
                    {x.name.replace(' water softener', '')}
                  </span>
                  <span
                    className={`block text-sm ${
                      on ? 'text-white/70' : 'text-slate-500'
                    }`}
                  >
                    {x.capacity}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Panel */}
        <div
          id='solution-panel'
          role='tabpanel'
          aria-labelledby={`tab-${t.id}`}
          className='mt-8 grid items-start gap-10 rounded-xs border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-12 lg:gap-14'
        >
          <div className='lg:col-span-5'>
            <Picture
              src={t.image}
              alt={t.name}
              label={t.name}
              className='aspect-4/3 rounded-xs'
            />

            <div className='mt-5 rounded-xs bg-linear-to-br from-(--blue) to-(--primary) p-6 text-white'>
              <p className='text-xs font-semibold uppercase tracking-wider text-white/70'>
                Treatment capacity
              </p>
              <p className='mt-1 text-3xl font-semibold text-cyan-300'>
                {t.capacity}
              </p>
              <p className='mt-1 text-xs text-white/70'>{t.capacityNote}</p>
            </div>
          </div>

          <div className='lg:col-span-7'>
            <h3 className='text-2xl font-semibold tracking-tight text-(--primary) sm:text-3xl'>
              {t.name}
            </h3>
            <p className='mt-2 text-base font-medium text-cyan-700'>
              For {t.forWho.toLowerCase()}
            </p>

            <dl className='mt-6 divide-y divide-slate-100 overflow-hidden rounded-xs border border-slate-200'>
              {t.specs.map(s => (
                <div
                  key={s.label}
                  className='grid gap-1 px-5 py-3.5 sm:grid-cols-[11rem_1fr] sm:gap-6'
                >
                  <dt className='text-sm font-semibold text-(--primary)'>
                    {s.label}
                  </dt>
                  <dd className='text-sm leading-relaxed text-slate-600'>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className='mt-7 flex flex-wrap items-center gap-3'>
               <Link
            to={'/contact'}
                className='inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
              >
                Request a quote
                <Icon d={ARROW} className='h-4 w-4' />
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Hi, I'd like details on the ${t.name}.`
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-(--primary)/25 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
              >
                <Icon d={CHAT} className='h-4 w-4' />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Available solutions strip */}
        <ul
          className='mt-8 flex flex-wrap justify-center gap-2'
          aria-label='Available solutions'
        >
          {availableSolutions.map(s => (
            <li
              key={s}
              className='rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200'
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   6. SECTION: HOW IT WORKS
   ========================================================= */
function HowItWorks () {
  return (
    <section
      aria-labelledby='how-title'
      className='bg-(--blue) py-20 text-white sm:py-28'
    >
      <div className={wrap}>
        <div className='grid gap-5 lg:grid-cols-12 lg:items-end'>
          <h2
            id='how-title'
            className='text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl'
          >
            How water softening works
          </h2>
          <p className='max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5'>
            Salt-based ion exchange, in four steps.
          </p>
        </div>

        <ol className='mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {flow.map((s, i) => (
            <li
              key={s.title}
              className='relative rounded-xs border border-white/15 bg-white/10 p-6 backdrop-blur-sm'
            >
              <div className='flex items-center justify-between'>
                <span className='grid h-12 w-12 place-items-center rounded-xl bg-cyan-300/15 text-cyan-300'>
                  <Icon d={s.icon} />
                </span>
                <span className='text-2xl font-semibold tabular-nums text-white/30'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className='mt-5 text-lg font-medium'>{s.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-white/70'>
                {s.text}
              </p>

              {i < flow.length - 1 && (
                <span
                  className='absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-cyan-300 text-(--primary) lg:grid'
                  aria-hidden='true'
                >
                  <Icon d={ARROW} className='h-4 w-4' />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* =========================================================
   7. SECTION: WHAT SOFTENING PROTECTS
   ========================================================= */
function Benefits () {
  return (
    <section
      aria-labelledby='benefits-title'
      className='bg-white py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Benefits</Eyebrow>
          </div>
          <h2
            id='benefits-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            What softer water protects
          </h2>
        </div>

        <ul className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {benefits.map(b => (
            <li
              key={b.title}
              className='group flex gap-4 rounded-xs border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-900/10'
            >
              <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-cyan-100 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300'>
                <Icon d={b.icon} />
              </span>
              <div>
                <h3 className='text-lg font-semibold text-(--primary)'>
                  {b.title}
                </h3>
                <p className='mt-1 text-sm leading-relaxed text-slate-600'>
                  {b.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   8. SECTION: COMMON SPECIFICATIONS
   ========================================================= */
function CommonSpecs () {
  return (
    <section
      aria-labelledby='specs-title'
      className='bg-slate-50 py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='grid items-start gap-10 lg:grid-cols-12 lg:gap-14'>
          <div className='lg:sticky lg:top-28 lg:col-span-4'>
            <Eyebrow>Specifications</Eyebrow>
            <h2
              id='specs-title'
              className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl'
            >
              Common technical specifications
            </h2>
            <p className='mt-4 text-base leading-relaxed text-slate-600'>
              The main parameters that apply to all our water softener models.
              Final values depend on your feed-water analysis and the design.
            </p>
             <Link
            to={'/contact'}
              className='mt-6 inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
            >
              Ask about your water
              <Icon d={ARROW} className='h-4 w-4' />
            </Link>
          </div>

          <div className='lg:col-span-8'>
            <Datasheet
              title='Water softener'
              tag='Common options'
              rows={commonSpecs}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   9. SECTION: WHAT WE NEED + CALL TO ACTION
   ========================================================= */
function NeedsAndCta () {
  return (
    <section aria-labelledby='needs-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Getting started</Eyebrow>
          </div>
          <h2
            id='needs-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            What we need to recommend the right softener
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Each system is custom designed based on water hardness and
            consumption.
          </p>
        </div>

        <ol className='mt-12 grid gap-6 md:grid-cols-3'>
          {needs.map((n, i) => (
            <li
              key={n.title}
              className='rounded-xs border border-slate-200 bg-slate-50 p-7'
            >
              <div className='flex items-center justify-between'>
                <span className='grid h-12 w-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700'>
                  <Icon d={n.icon} />
                </span>
                <span className='text-3xl font-semibold tabular-nums text-slate-300'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                {n.title}
              </h3>
              <p className='mt-2 text-sm leading-relaxed text-slate-600'>
                {n.text}
              </p>
            </li>
          ))}
        </ol>

        {/* Call to action */}
        <div className='relative isolate mt-16 overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16'>
         

          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2 className='max-w-xl text-3xl font-semibold leading-tight sm:text-4xl'>
                Ready to protect your water and equipment?
              </h2>
              <p className='mt-3 max-w-xl text-base leading-relaxed text-white/75'>
                Contact {BRAND} for a softener suited to your water quality,
                daily consumption and application.
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
               <Link
            to={'/contact'}
                className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Request a quote
                <Icon d={ARROW} className='h-4 w-4' />
              </Link>
              <a
                href={PHONE_HREF}
                className='rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Call now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   10. THE PAGE
   ========================================================= */
export default function WaterSoftenersPage () {
  return (
    <main>
      <Hero />
      <Intro />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <CommonSpecs />
      <NeedsAndCta />
    </main>
  )
}
