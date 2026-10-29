import { useEffect, useRef, useState } from 'react'
import Drink from '../../../assets/home/mom-daughter-drinks.jpg'
import DummyImg from '../../../assets/home/closeup-view-water.jpg'

/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const WHATSAPP_NUMBER = '919999999999' // country code + number, no "+"
const PHONE_HREF = 'tel:+919999999999'

// Opens WhatsApp with a ready-made bulk order message
const BULK_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to place a bulk order for RO spares."
)}`

type Group = 'Filters' | 'Parts'

type Item = {
  slug: string // used in the link: /spares-service/<slug>
  name: string
  group: Group // decides which tab it shows under
  segments: string // small grey line under the name
  image: string // optional: "/images/spares/membrane.jpg" or an imported file
}

const items: Item[] = [
  {
    slug: 'ro-membranes',
    name: 'RO membranes',
    group: 'Filters',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'spun-filters',
    name: 'Spun filters',
    group: 'Filters',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'sediment-filters',
    name: 'Sediment filters',
    group: 'Filters',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'carbon-filters',
    name: 'Carbon filters',
    group: 'Filters',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'housings',
    name: 'Filter housings',
    group: 'Filters',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'pumps',
    name: 'Pumps',
    group: 'Parts',
    segments: 'Domestic · Commercial',
    image : DummyImg
  },
  {
    slug: 'valves',
    name: 'Valves',
    group: 'Parts',
    segments: 'Domestic · Commercial',
    image : DummyImg
  },
  {
    slug: 'controllers',
    name: 'Controllers',
    group: 'Parts',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  },
  {
    slug: 'fittings',
    name: 'Fittings',
    group: 'Parts',
    segments: 'Domestic · Commercial · Industrial',
    image : DummyImg
  }
]

// The tabs at the top right
const tabs = ['All', 'Filters', 'Parts'] as const
type Tab = typeof tabs[number]

/* =========================================================
   2. SMALL ICON HELPER
   ========================================================= */
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

const ARROW_LEFT = 'M15 6l-6 6 6 6'
const ARROW_RIGHT = 'M9 6l6 6-6 6'

/* =========================================================
   3. THE CARDS
   ========================================================= */

// The first tall card (like "Fresh. Trendy. Now." in your screenshot)
function PromoCard () {
  return (
    <div className='relative flex w-[260px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-gradient-to-b from-[#12424a] to-[#0b2a30] p-4 sm:w-[288px]'>
      {/* Decorative water drop in the background */}
      
      <img src={Drink}
        className='pointer-events-none absolute -bottom-10 right-0  h-auto w-full text-cyan-300/10' alt="" />

      <div className='relative'>
        <p className='text-sm font-semibold text-cyan-300'>Bulk orders</p>
        <h3 className='mt-4 text-3xl font-semibold leading-tight text-white'>
          Buying in quantity?
        </h3>
        <p className='mt-3 text-sm leading-relaxed text-white/70'>
          Dealers, installers and businesses get one quote for large or
          recurring orders.
        </p>
      </div>

      <div className='relative mt-10 flex flex-wrap gap-2'>
        <a
          href={BULK_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-[#0b2a30] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
        >
          Bulk enquiry
        </a>
        <a
          href={PHONE_HREF}
          className='rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
        >
          Call sales
        </a>
      </div>
    </div>
  )
}

// One spare-part card: image on top, text below
function ItemCard ({ item }: { item: Item }) {
  return (
    <a
      href={`/spares-service/${item.slug}`}
      className='group block w-[260px] shrink-0 snap-start focus-visible:outline-none sm:w-[288px]'
    >
      {/* Image box (square) */}
      <div className='grid aspect-square place-items-center overflow-hidden rounded-sm bg-gradient-to-br from-[#16383f] to-[#0c2227] ring-cyan-300 group-focus-visible:ring-2'>
        
          <img
            src={item.image}
            alt={item.name}
            loading='lazy'
            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
       
      </div>

      {/* Text */}
      <div className='px-2 pt-6'>
        <p className='text-xs font-semibold uppercase tracking-wider text-white/60'>
          {item.group}
        </p>
        <h3 className='mt-2 text-lg font-medium text-white'>{item.name}</h3>
        <p className='mt-1 text-sm text-white/55'>{item.segments}</p>
        <p className='mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300'>
          Enquire
          <Icon
            d={ARROW_RIGHT}
            className='h-4 w-4 transition-transform group-hover:translate-x-1'
          />
        </p>
      </div>
    </a>
  )
}

/* =========================================================
   4. THE SECTION (tabs + scrolling row + progress bar + arrows)
   ========================================================= */
export default function SparesCarousel () {
  const [tab, setTab] = useState<Tab>('All')

  // The scrolling row. We keep a reference so we can move it with the arrows.
  const trackRef = useRef<HTMLDivElement>(null)

  // Progress bar: how wide the white bar is, and how far from the left it sits (in %)
  const [bar, setBar] = useState({ width: 100, left: 0 })

  // Show only the items that match the selected tab
  const visible = tab === 'All' ? items : items.filter(i => i.group === tab)

  // Work out the progress bar from the scroll position
  const updateBar = () => {
    const el = trackRef.current
    if (!el) return
    setBar({
      width: (el.clientWidth / el.scrollWidth) * 100,
      left: (el.scrollLeft / el.scrollWidth) * 100
    })
  }

  // When the tab changes: go back to the start and refresh the bar
  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 })
    updateBar()
  }, [tab])

  // Refresh the bar when the window is resized
  useEffect(() => {
    updateBar()
    window.addEventListener('resize', updateBar)
    return () => window.removeEventListener('resize', updateBar)
  }, [])

  // Arrow buttons: scroll the row left or right
  const scrollRow = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section
      aria-labelledby='spares-title'
      className='bg-gradient-to-br from-(--blue) to-(--primary) py-16 text-white sm:py-24'
    >
      <div className='mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12'>
        {/* ---- Top: title on the left, tabs on the right ---- */}
        <div className='flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between'>
          <div>
            <h2
              id='spares-title'
              className='text-3xl font-semibold tracking-tight sm:text-4xl'
            >
              Spares &amp; accessories
            </h2>
            <p className='mt-4 max-w-xl text-base text-white/65'>
              Membranes, pumps, filters, housings, valves, controllers and
              fittings for repair, replacement and routine service.
            </p>
          </div>

          <div role='tablist' aria-label='Spares groups' className='flex gap-6'>
            {tabs.map(t => (
              <button
                key={t}
                type='button'
                role='tab'
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`border-b-2 pb-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:text-cyan-300 ${
                  tab === t
                    ? 'border-white text-white'
                    : 'border-transparent text-white/55 hover:text-white'
                }`}
              >
                {t === 'All' ? 'All spares' : t}
              </button>
            ))}
          </div>
        </div>

        {/* ---- Middle: the scrolling row of cards ---- */}
        <div
          ref={trackRef}
          onScroll={updateBar}
          className='mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        >
          <PromoCard />
          {visible.map(item => (
            <ItemCard key={item.slug} item={item} />
          ))}
        </div>

        {/* ---- Bottom: progress bar on the left, arrows on the right ---- */}
        <div className='mt-8 flex items-center gap-8'>
          <div className='relative h-px flex-1 bg-white/20' aria-hidden='true'>
            <div
              className='absolute -top-px h-0.5 bg-white transition-[left,width] duration-150'
              style={{ width: `${bar.width}%`, left: `${bar.left}%` }}
            />
          </div>

          <div className='flex gap-3'>
            <button
              type='button'
              aria-label='Scroll left'
              onClick={() => scrollRow(-1)}
              className='grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[#071b1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
            >
              <Icon d={ARROW_LEFT} className='h-5 w-5' />
            </button>
            <button
              type='button'
              aria-label='Scroll right'
              onClick={() => scrollRow(1)}
              className='grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-[#071b1f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
            >
              <Icon d={ARROW_RIGHT} className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
