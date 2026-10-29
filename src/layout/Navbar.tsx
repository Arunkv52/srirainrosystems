import { useEffect, useRef, useState } from 'react'
import RoImg from '../assets/navbar/Ro-img.jpeg'

/* ---------- Edit these ---------- */
const BRAND = 'Sri Rain Ro Systems'
const PHONE = '+919999999999' // Replace with your phone number.
const WHATSAPP = '919999999999' // Country code + number, without "+".
const WHATSAPP_TEXT = "Hi, I'd like to know more about your RO systems."

/* ---------- Hide / show on scroll settings ---------- */
const SHOW_ALWAYS_BELOW = 80 // px from the top of the page where the navbar is always visible
const SCROLL_TOLERANCE = 8 // ignore tiny scrolls so it doesn't flicker

const ICONS = {
  brand: 'M12 2.5c-2.2 3.5-6 7-6 11a6 6 0 0 0 12 0c0-4-3.8-7.5-6-11z',
  water: 'M12 2.5c-2.2 3.5-6 7-6 11a6 6 0 0 0 12 0c0-4-3.8-7.5-6-11z',
  chevron: 'm6 9 6 6 6-6',
  chat: 'M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 8.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1z',
  close: 'M18 6 6 18M6 6l12 12',
  menu: 'M4 6h16M4 12h16M4 18h16'
} as const

type MenuItem = {
  label: string
  description: string
  href: string
  image: string
}

// Items shown in the dropdown panel (the "menu list").
const rangeItems: MenuItem[] = [
  {
    label: 'Domestic RO',
    description: 'Home water purifiers',
    href: '/domestic-ro',
    image: RoImg
  },
  {
    label: 'Commercial RO',
    description: 'Offices, shops, hotels',
    href: '/commercial-ro',
    image: RoImg
  },
  {
    label: 'Industrial RO',
    description: 'Industrial water treatment',
    href: '/industrial-ro',
    image: RoImg
  },
  {
    label: 'Spares & Service',
    description: 'Filters, membranes, AMC',
    href: '/spares-service',
    image: RoImg
  }
]

const RANGE_LABEL = 'Our range'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Knowledge Hub', href: '/knowledge-hub' },
  { label: 'Contact', href: '/contact' }
]

/* ---------- Small helpers ---------- */
function Icon ({ d, className = 'h-5 w-5' }: { d: string; className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1.7}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      aria-hidden='true'
    >
      <path d={d} />
    </svg>
  )
}

const linkClass =
  'rounded-full px-4 py-2 text-sm font-medium text-black/80 transition-colors hover:black/10 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'

/* ---------- Component ---------- */
export default function Navbar () {
  const [rangeOpen, setRangeOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false) // true = navbar slid out of view
  const wrapRef = useRef<HTMLDivElement>(null)
  const lastY = useRef(0) // scroll position at the previous check

  // Close on outside click and Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setRangeOpen(false)
        setMobileOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setRangeOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Hide the navbar when scrolling down, show it when scrolling up.
  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      const diff = y - lastY.current

      if (y < SHOW_ALWAYS_BELOW) {
        // Near the top of the page: always show
        setHidden(false)
        lastY.current = y
      } else if (diff > SCROLL_TOLERANCE) {
        // Scrolling down: hide, and close any open menu
        setHidden(true)
        setRangeOpen(false)
        setMobileOpen(false)
        lastY.current = y
      } else if (diff < -SCROLL_TOLERANCE) {
        // Scrolling up: show
        setHidden(false)
        lastY.current = y
      }
      ticking = false
    }

    // requestAnimationFrame keeps this light while scrolling
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`

  return (
    <header
      // Keyboard users tabbing into a hidden navbar bring it back into view
      onFocusCapture={() => setHidden(false)}
      className={`fixed inset-x-0 top-0 z-50 px-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'
      }`}
    >
      <div
        ref={wrapRef}
        className='relative mx-auto'
        onMouseLeave={() => setRangeOpen(false)}
      >
        {/* ===== Top bar ===== */}
        <nav
          aria-label='Main navigation'
          className='flex items-center justify-between gap-2  border border-white/10 bg-white px-3 py-2  backdrop-blur-md'
        >
          {/* Logo */}
          <a
            href='/'
            className='flex items-center gap-2 rounded-full pl-2 pr-3 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
          >
            <Icon d={ICONS.brand} className='h-6 w-6 text-black' />
            <span className='text-base font-semibold tracking-tight text-black'>
              {BRAND}
            </span>
          </a>

          {/* Desktop links */}
          <ul className='hidden items-center gap-1 lg:flex'>
            <li>
              <a href={links[0].href} className={linkClass}>
                {links[0].label}
              </a>
            </li>

            <li onMouseEnter={() => setRangeOpen(true)}>
              <button
                type='button'
                aria-expanded={rangeOpen}
                aria-controls='range-panel'
                onClick={() => setRangeOpen(v => !v)}
                className={`${linkClass} flex items-center gap-1.5 ${
                  rangeOpen ? 'bg-white/10 text-black' : ''
                }`}
              >
                {RANGE_LABEL}
                <Icon
                  d={ICONS.chevron}
                  className={`h-4 w-4 transition-transform ${
                    rangeOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </li>

            {links.slice(1).map(l => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Header buttons */}
          <div className='flex items-center gap-2'>
            <a
              href={whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='WhatsApp'
              className='hidden items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex'
            >
              <Icon d={ICONS.chat} className='h-4 w-4 text-emerald-400' />
              <span className='hidden xl:inline'>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              aria-label='Call now'
              className='hidden items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:flex'
            >
              <Icon d={ICONS.phone} className='h-4 w-4 text-cyan-300' />
              <span className='hidden xl:inline'>Call Now</span>
            </a>
            <a
              href='/contact#quote'
              className='rounded-full bg-(--blue) px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
            >
              Get a Quote
            </a>

            {/* Mobile toggle */}
            <button
              type='button'
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls='mobile-panel'
              onClick={() => setMobileOpen(v => !v)}
              className='grid h-10 w-10 place-items-center rounded-full text-(--blue) hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden'
            >
              <Icon d={mobileOpen ? ICONS.close : ICONS.menu} />
            </button>
          </div>
        </nav>

        {/* ===== Desktop dropdown: the menu list ===== */}
        <div
          id='range-panel'
          className={`absolute inset-x-0 top-full hidden pt-2 transition duration-200 lg:block ${
            rangeOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-1 opacity-0'
          }`}
        >
          <div className='rounded-sm border border-white/10 bg-white p-3 shadow-2xl shadow-black/30 backdrop-blur-md'>
            <ul className='grid grid-cols-4 gap-2'>
              {rangeItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    tabIndex={rangeOpen ? 0 : -1}
                    className='group flex h-full flex-col gap-3 rounded-2xl p-4 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className='h-52 w-full object-cover'
                    />
                    <span>
                      <span className='block text-base font-semibold text-black'>
                        {item.label}
                      </span>
                      <span className='mt-0.5 block text-sm text-black/60'>
                        {item.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== Mobile panel ===== */}
        <div
          id='mobile-panel'
          className={`absolute inset-x-0 top-full pt-2 lg:hidden ${
            mobileOpen ? 'block' : 'hidden'
          }`}
        >
          <div className='max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-(--white)/30 p-3 shadow-2xl shadow-black/30 backdrop-blur-md'>
            <ul className='flex flex-col'>
              <li>
                <a
                  href={links[0].href}
                  className='block rounded-2xl px-4 py-3 text-base font-medium text-black hover:bg-black/10'
                >
                  {links[0].label}
                </a>
              </li>

              {rangeItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className='flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-black/10'
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      className='h-12 w-12 shrink-0 rounded-lg object-cover'
                    />
                    <span>
                      <span className='block text-base font-medium text-black'>
                        {item.label}
                      </span>
                      <span className='block text-sm text-black/60'>
                        {item.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}

              {links.slice(1).map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className='block rounded-2xl px-4 py-3 text-base font-medium text-black hover:bg-black/10'
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-3 grid grid-cols-2 gap-2 border-t border-black/10 pt-3'>
              <a
                href={whatsappHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 rounded-full border border-black/15 py-2.5 text-sm font-medium text-black hover:bg-black/10'
              >
                <Icon d={ICONS.chat} className='h-4 w-4 text-emerald-400' />
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className='flex items-center justify-center gap-2 rounded-full border border-black/15 py-2.5 text-sm font-medium text-black hover:bg-black/10'
              >
                <Icon d={ICONS.phone} className='h-4 w-4 text-cyan-300' />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}