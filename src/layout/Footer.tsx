import { Link } from 'react-router'
import Logo from '../assets/logo.png'

/* ---------- Edit these ---------- */
const BRAND = 'Sri Rain Ro Systems'
const INTRO = 'RO water purification for homes, businesses and industry.'
const ADDRESS = ['No.595/3c. HP Bank, Kongu Main Road', 'Bharathi Nagar (North), Tirupur - 641 603', 'Tamil Nadu, India']
const PHONE = '+91 99424 99000,+91 97158 86000,+91 97912 87666'

const ICONS = {
  drop: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z',
  mail: 'M3 5h18v14H3zM3 7l9 7 9-7',
  phone:
    'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  chat: 'M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z'
}

// Main menu
const menu = [
  { label: 'Home', link: '/' },
  { label: 'Domestic RO', link: '/domesticro' },
  { label: 'Commercial RO', link: '/commercialro' },
  { label: 'Industrial RO', link: '/industrialro' },
  { label: 'Water Softeners', link: '/watersofteners' },
  { label: 'Spares & Service', link: '/sparesandservices' },
  { label: 'About Us', link: '/about' },
  { label: 'Knowledge Hub', link: '/knowledgehub' },
  { label: 'Contact', link: '/contact' }
]

// Contact + social column
const connect = [
  {
    label: 'sales@srirainrosystems.com',
    href: 'mailto:sales@srirainrosystems.com',
    paths: [ICONS.mail],
    external: false
  },
  { label: PHONE, paths: [ICONS.phone], external: false },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+919942499000',
    paths: [ICONS.chat],
    external: true
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/sri-rain-ro-system/',
    paths: [
      'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      'M2 9h4v12H2z',
      'M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z'
    ],
    external: true
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Sri-Rain-Ro/61554829674440/',
    paths: [
      'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.955.93-1.955 1.885v2.274h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z'
    ],
    external: true
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/sri_rain_ro_systems/',
    paths: [
      'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z',
      'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z',
      'M17.5 6.5h.01'
    ],
    external: true
  }
]

const legal = [
  { label: 'Privacy policy', href: '/privacypolicy' },
  { label: 'Terms & conditions', href: '/termsandconditions' }
]

function Icon ({
  paths,
  className = 'h-5 w-5'
}: {
  paths: string[]
  className?: string
}) {
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
      {paths.map(d => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

const linkFocus =
  'focus-visible:outline-none focus-visible:underline focus-visible:decoration-cyan-300 focus-visible:underline-offset-4'

export default function Footer () {
  return (
    <footer className='bg-linear-to-br from-(--blue) to-(--primary) text-white'>
      <div className=' px-6 pb-10 pt-16 sm:px-10 md:px-8 lg:pt-10'>
        {/* Logo */}
        {/* <a
          href='/'
          aria-label={`${BRAND} home`}
          className='inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
        >
          <Icon paths={[ICONS.drop]} className='h-12 w-12 text-cyan-300' />
          <span className='text-3xl font-bold tracking-tight'>{BRAND}</span>
        </a> */}
        <Link to={'/'}>
          <img src={Logo} alt='' className='w-50 bg-white' />
        </Link>

        {/* Main row */}
        <div className='mt-16 md:grid grid md:grid-cols-[4fr_1fr_1fr] grid-cols-1 md:gap-14 gap-8 md:mt-2'>
          {/* Company info */}
          <div className='text-[15px] leading-relaxed'>
            <p>{INTRO}</p>
            <address className='mt-6 not-italic text-white/90'>
              {ADDRESS.map(line => (
                <span key={line} className='block'>
                  {line}
                </span>
              ))}
            </address>
          </div>

          {/* Menu */}
          <nav aria-label='Footer menu' className='7'>
            <ul className='space-y-2'>
              {menu.map(m => (
                <li key={m.link}>
                  <Link
                    to={m.link}
                    className='text-base font-normal transition-colors hover:text-cyan-300 ${linkFocus}'
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className=''>
            <ul className='space-y-2'>
              {connect.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`inline-flex items-center gap-3 text-base font-normal transition-colors hover:text-cyan-300 ${linkFocus}`}
                  >
                    <Icon paths={c.paths} className='h-4.5 w-4.5 shrink-0' />
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className='mt-10 bg-white text-black flex flex-col gap-5 text-sm lg:mt-10 lg:flex-row lg:items-center lg:justify-between py-2 px-8'>
        <p>
          &copy; {new Date().getFullYear()} {BRAND} - All rights reserved.
        </p>
        <ul className='flex flex-wrap gap-x-6 gap-y-2 font-semibold text-black/60'>
          {legal.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors hover:text-black ${linkFocus}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
