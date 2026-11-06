import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { BsWhatsapp } from 'react-icons/bs'
import { MdWifiCalling3 } from 'react-icons/md'
import CommercialRoImg from '../assets/navbar/commercial-ro.jpeg'
import DomesticRoImg from '../assets/navbar/domestic-ro.jpeg'
import IndustrialRoImg from '../assets/navbar/industrial-ro.jpeg'
import SparesandServiceslRoImg from '../assets/navbar/plumber-change-water-filter.jpg'
import WaterSoftenersImg from '../assets/navbar/water-softener.jpeg'

import Logo from '../assets/logo.png'

/* ---------- Edit these ---------- */
const PHONE = '+919942499000' // Replace with your phone number.
const WHATSAPP = PHONE.replace(/\D/g, '') // derived: digits only, no "+"
const WHATSAPP_TEXT = "Hi, I'd like to know more about your RO systems."

/* ---------- Hide / show on scroll settings ---------- */
const SHOW_ALWAYS_BELOW = 80 // px from the top where the navbar is always visible
const SCROLL_TOLERANCE = 8 // ignore tiny scrolls so it doesn't flicker

const ICONS = {
  chevron: 'm6 9 6 6 6-6',
  close: 'M18 6 6 18M6 6l12 12',
  menu: 'M4 6h16M4 12h16M4 18h16'
} as const

type MenuItem = {
  label: string
  description: string
  href: string
  image: string
}

// Items shown in the dropdown panel.
const rangeItems: MenuItem[] = [
  {
    label: 'Domestic RO',
    description: 'Home water purifiers',
    href: '/domesticro',
    image: DomesticRoImg
  },
  {
    label: 'Commercial RO',
    description: 'Offices, shops, hotels',
    href: '/commercialro',
    image: CommercialRoImg
  },
  {
    label: 'Industrial RO',
    description: 'Industrial water treatment',
    href: '/industrialro',
    image: IndustrialRoImg
  },
  {
    label: 'Water Softeners',
    description: 'Solutions for all sectors',
    href: '/watersofteners',
    image: WaterSoftenersImg
  },
  {
    label: 'Spares & Service',
    description: 'Filters, membranes, AMC',
    href: '/sparesandservices',
    image: SparesandServiceslRoImg
  }
]

const RANGE_LABEL = 'Our range'

const homeLink = { label: 'Home', href: '/' }
const otherLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Knowledge', href: '/knowledgehub' },
]

/* ---------- Helpers ---------- */
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

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)'
const linkClass = `rounded-full px-4 py-2 text-sm font-medium text-black/80 transition-colors hover:bg-black/5 hover:text-black ${focusRing}`
const outlineBtn = `items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-sm font-medium text-black transition-colors hover:bg-black/5 ${focusRing}`

/* ---------- Component ---------- */
export default function Navbar () {
  const [rangeOpen, setRangeOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const lastY = useRef(0)
  const pointer = useRef('mouse') // last pointer type used on the "Our range" button
  const { pathname, hash } = useLocation()

  // Close menus after every route change (Link keeps this component mounted),
  // and scroll to #hash targets such as /contact#quote.
  useEffect(() => {
    setRangeOpen(false)
    setMobileOpen(false)
    if (hash) {
      requestAnimationFrame(() =>
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: 'smooth' })
      )
    }
  }, [pathname, hash])

  // Close on outside click and Escape.
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
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
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDown)
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
        setHidden(false)
        lastY.current = y
      } else if (diff > SCROLL_TOLERANCE) {
        setHidden(true)
        setRangeOpen(false)
        setMobileOpen(false)
        lastY.current = y
      } else if (diff < -SCROLL_TOLERANCE) {
        setHidden(false)
        lastY.current = y
      }
      ticking = false
    }

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
      onFocusCapture={() => setHidden(false)}
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        hidden ? '-translate-y-[calc(100%+1rem)]' : 'translate-y-0'
      }`}
    >
      <div
        ref={wrapRef}
        className='relative mx-auto'
        // Hover-close only for a real mouse; touch uses tap to toggle.
        onPointerLeave={e => e.pointerType === 'mouse' && setRangeOpen(false)}
        // Keyboard: close the dropdown when focus leaves the navbar.
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null))
            setRangeOpen(false)
        }}
      >
        {/* ===== Top bar ===== */}
        <nav
          aria-label='Main navigation'
          className='flex items-center justify-between gap-2 border-b border-black/10 bg-white px-3 py-2'
        >
          <Link to='/' aria-label='Sri Rain RO Systems – Home'>
            <img src={Logo} alt='' className='w-32.5' />
          </Link>

          {/* Desktop links */}
          <ul className='hidden items-center gap-1 lg:flex'>
            <li>
              <Link to={homeLink.href} className={linkClass}>
                {homeLink.label}
              </Link>
            </li>

            <li
              onPointerEnter={e =>
                e.pointerType === 'mouse' && setRangeOpen(true)
              }
            >
              <button
                type='button'
                aria-expanded={rangeOpen}
                aria-controls='range-panel'
                onPointerDown={e => {
                  pointer.current = e.pointerType
                }}
                onClick={e =>
                  // Mouse click keeps the hover-opened panel open; touch/keyboard toggles.
                  setRangeOpen(v =>
                    e.detail > 0 && pointer.current === 'mouse' ? true : !v
                  )
                }
                className={`${linkClass} flex items-center gap-1.5 ${
                  rangeOpen ? 'bg-black/5 text-black' : ''
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

            {otherLinks.map(l => (
              <li key={l.href}>
                <Link to={l.href} className={linkClass}>
                  {l.label}
                </Link>
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
              className={`hidden sm:flex ${outlineBtn}`}
            >
              <BsWhatsapp />
              <span className='hidden xl:inline'>WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              aria-label='Call now'
              className={`hidden sm:flex ${outlineBtn}`}
            >
              <MdWifiCalling3 />
              <span className='hidden xl:inline'>Call Now</span>
            </a>
            <Link
              to='/contact'
              className='rounded-full bg-(--blue) px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary) focus-visible:ring-offset-2'
            >
              Get a Quote
            </Link>

            {/* Mobile toggle */}
            <button
              type='button'
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls='mobile-panel'
              onClick={() => setMobileOpen(v => !v)}
              className={`grid h-10 w-10 place-items-center rounded-full text-(--blue) hover:bg-black/5 lg:hidden ${focusRing}`}
            >
              <Icon d={mobileOpen ? ICONS.close : ICONS.menu} />
            </button>
          </div>
        </nav>

        {/* ===== Desktop dropdown ===== */}
        <div
          id='range-panel'
          className={`absolute inset-x-0 top-full hidden pt-2 transition-all duration-200 lg:block ${
            rangeOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-1 opacity-0'
          }`}
        >
          <div className='rounded-sm border border-black/10 bg-white p-3 shadow-2xl shadow-black/20'>
            <ul className='grid grid-cols-5 gap-2'>
              {rangeItems.map(item => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    tabIndex={rangeOpen ? 0 : -1}
                    className={`group flex h-full flex-col gap-3 rounded-2xl p-4 transition-colors hover:bg-black/5 ${focusRing}`}
                  >
                    <img
                      src={item.image}
                      alt=''
                      className='h-full w-full object-cover'
                    />
                    <span>
                      <span className='block text-base font-semibold text-black'>
                        {item.label}
                      </span>
                      <span className='mt-0.5 block text-sm text-black/60'>
                        {item.description}
                      </span>
                    </span>
                  </Link>
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
          <div className='max-h-[80vh] overflow-y-auto rounded-xs border border-black/10 bg-white p-3 shadow-2xl shadow-black/20'>
            <ul className='flex flex-col'>
              <li>
                <Link
                  to={homeLink.href}
                  className='block rounded-2xl px-4 py-3 text-base font-medium text-black hover:bg-black/5'
                >
                  {homeLink.label}
                </Link>
              </li>

              {rangeItems.map(item => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className='flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-black/5'
                  >
                    <img
                      src={item.image}
                      alt=''
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
                  </Link>
                </li>
              ))}

              {otherLinks.map(l => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className='block rounded-2xl px-4 py-3 text-base font-medium text-black hover:bg-black/5'
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className='mt-3 grid grid-cols-2 gap-2 border-t border-black/10 pt-3'>
              <a
                href={whatsappHref}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 rounded-full border border-black/15 py-2.5 text-sm font-medium text-black hover:bg-black/5'
              >
                <BsWhatsapp /> WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className='flex items-center justify-center gap-2 rounded-full border border-black/15 py-2.5 text-sm font-medium text-black hover:bg-black/5'
              >
                <MdWifiCalling3 /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
