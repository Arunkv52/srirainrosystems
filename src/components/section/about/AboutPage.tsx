import { Link } from 'react-router'
import AbtImg from '../../../assets/about/happy-young-couple.jpg'
/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */


const BRAND = 'Sri Rain RO Systems'
const PHONE_HREF = 'tel:+919942499000'

/* ---- About section (your company description) ---- */
const aboutParagraphs = [
  `${BRAND} is a water purification and treatment solutions company established in 2012, dedicated to providing reliable, efficient and cost-effective water purification solutions for residential, commercial and industrial applications.`,
  'With a focus on quality products, technical expertise and customer satisfaction, we offer a comprehensive range of domestic RO water purifiers, commercial reverse osmosis systems, industrial RO plants, water-treatment components, spare parts and maintenance services.',
  'We understand that every customer has different water quality requirements. Our approach is to help customers identify suitable purification solutions based on their water source, water quality, daily consumption and application needs.',
  `From household drinking water requirements to commercial installations and industrial water-treatment projects, ${BRAND} strives to deliver practical solutions backed by dependable service and ongoing technical support.`,
  'Serving customers across Tirupur, Pollachi and Avinashi, we aim to build long-term relationships through product quality, professional service, transparent communication and value for money.'
]

const facts = [
  { label: 'Established', value: '2012' },
  { label: 'Service locations', value: 'Tirupur · Pollachi · Avinashi' },
  { label: 'We serve', value: 'Homes · Businesses · Industry' }
]

/* ---- Journey, mission and vision ---- */
const journey =
  `Since our establishment in 2012, ${BRAND} has focused on meeting the evolving water purification needs of homes, businesses and industries. Our commitment is to continuously improve our product range, technical capabilities and customer service to provide dependable water-treatment solutions.`

const mission =
  'To make reliable and effective water purification solutions accessible to every home, business and industry through quality products, technical expertise, affordable options and dedicated customer service.'

const vision =
  'To become a trusted and preferred water purification solutions provider, recognized for quality, innovation, customer satisfaction and long-term service excellence.'

/* ---- Core values ---- */
const values = [
  {
    title: 'Quality',
    text: 'Providing suitable water purification products and components that meet the requirements of each application.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5'
  },
  {
    title: 'Customer Satisfaction',
    text: 'Understanding customer needs and offering practical, reliable solutions.',
    icon: 'M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z'
  },
  {
    title: 'Technical Excellence',
    text: 'Supporting customers with system selection, installation guidance and maintenance expertise.',
    icon: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z'
  },
  {
    title: 'Integrity',
    text: 'Maintaining transparent communication and professional business practices.',
    icon: 'M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6zM9 12l2 2 4-4'
  },
  {
    title: 'Affordability',
    text: 'Offering solutions across different requirements and budgets.',
    icon: 'M4 7h16v10H4zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM7 10h.01M17 14h.01'
  },
  {
    title: 'Long-Term Support',
    text: 'Building lasting customer relationships through maintenance, spare parts and after-sales service.',
    icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z'
  }
]

/* ---- Products and services ---- */
const services = [
  {
    title: 'Domestic RO Water Purifiers',
    text: 'Water purification systems designed for household drinking-water requirements, selected according to source-water quality and family consumption.',
    href: '/domestic-ro',
    icon: 'M3 11l9-8 9 8M5 10v10h14V10'
  },
  {
    title: 'Commercial RO Systems',
    text: 'Water purification solutions for offices, restaurants, hotels, institutions, shops and other commercial applications.',
    href: '/commercial-ro',
    icon: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 10h2M14 10h2'
  },
  {
    title: 'Industrial RO Plants',
    text: 'Reverse osmosis and water-treatment solutions designed around industrial feed-water conditions, required capacity and target water quality.',
    href: '/industrial-ro',
    icon: 'M3 21V10l6 3V10l6 3V6h4v15H3z'
  },
  {
    title: 'RO Spare Parts and Consumables',
    text: 'A range of water-treatment components, including RO membranes, pumps, spun filters, sediment filters, carbon filters, housings, valves, controllers, fittings and accessories.',
    href: '/spares-service',
    icon: 'M8 3h8v18H8zM8 7h8M8 11h8M8 15h8'
  },
  {
    title: 'Installation and Maintenance',
    text: 'Support for installation, servicing, troubleshooting, filter replacement, membrane replacement and Annual Maintenance Contracts (AMC), subject to service availability.',
    href: '/contact?service=amc#service',
    icon: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9'
  },
  {
    title: 'Water-Treatment Solutions',
    text: 'Assistance with evaluating water quality and selecting appropriate treatment arrangements for domestic, commercial and industrial applications.',
    href: '/water-softeners',
    icon: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
  }
]

/* ---- Service process ---- */
const steps = [
  {
    title: 'Consultation',
    text: 'Tell us about your water source, daily usage and space.',
    icon: 'M4 5h16v11H9l-5 4z'
  },
  {
    title: 'Site survey',
    text: 'We check your water quality and the installation site.',
    icon: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z'
  },
  {
    title: 'Proposal & quote',
    text: 'Receive a clear recommendation with an upfront quote.',
    icon: 'M7 3h8l4 4v14H7zM14 3v5h5M10 13h6M10 17h6'
  },
  {
    title: 'Installation',
    text: 'Our team installs, tests and commissions your system.',
    icon: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z'
  },
  {
    title: 'Ongoing support',
    text: 'Spares, AMC and service to keep the water clean.',
    icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z'
  }
]

/* ---- Why choose us and our commitment ---- */
const whyChoose = [
  'Established in 2012',
  'Solutions for domestic, commercial and industrial requirements',
  'Wide range of RO systems and water-treatment components',
  'Product recommendations based on water quality and application',
  'Competitive pricing and value-focused options',
  'Technical guidance and maintenance support',
  'Spare parts and consumables availability',
  'Customer-focused service and long-term business relationships'
]

const commitment = [
  "At Sri Rain RO Systems, we believe that a good water purification solution begins with understanding the water and the customer's needs. We are committed to helping customers choose appropriate systems, maintain their equipment and obtain dependable support throughout the product's service life.",
  'We continue to work towards a future where every customer can make an informed choice about water purification with confidence.'
]



/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = ' px-5 md:px-8'

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

function Stars ({ count }: { count: number }) {
  return (
    <div
      className='flex gap-1 text-amber-400'
      role='img'
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox='0 0 24 24'
          className={`h-5 w-5 ${i < count ? '' : 'text-slate-200'}`}
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z' />
        </svg>
      ))}
    </div>
  )
}

// Small label above titles on light sections
function Eyebrow ({ children }: { children: string }) {
  return (
    <p className='flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700'>
      <span className='h-px w-8 bg-cyan-600/50' aria-hidden='true' />
      {children}
    </p>
  )
}

/* =========================================================
   3. SECTION: PAGE HERO
   ========================================================= */
function Hero () {
  return (
    <section
      aria-labelledby='about-hero-title'
      className='about-hero relative isolate overflow-hidden  pb-16 pt-36 text-white sm:pb-24 sm:pt-44'
    >
      <div className={wrap}>
        {/* Breadcrumb */}
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
              About us
            </li>
          </ol>
        </nav>

        <h1
          id='about-hero-title'
          className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
        >
          Clean water, looked after by people who care
        </h1>
        <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
          Established in 2012, {BRAND} provides reliable, efficient and
          cost-effective water purification solutions for homes, businesses and
          industry across Tirupur, Pollachi and Avinashi.
        </p>
      </div>
    </section>
  )
}

/* =========================================================
   4. SECTION: ABOUT US
   ========================================================= */
function AboutIntro () {
  return (
    <section aria-labelledby='about-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          {/* Left: picture with a floating card */}
          <div className='relative'>
            <div className='relative aspect-4/3 overflow-hidden rounded-sm bg-linear-to-br from-(--blue) to-(--primary) lg:aspect-5/4'>
              <img
                src={AbtImg}
                alt={`The ${BRAND} team at work`}
                loading='lazy'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='absolute -bottom-6 right-4 max-w-68 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 sm:right-8'>
              <p className='text-sm font-semibold text-(--primary)'>
                Pure Water | Healthy Life
              </p>
              <p className='mt-1 text-sm leading-relaxed text-slate-600'>
                Serving Tirupur, Pollachi and Avinashi since 2012.
              </p>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <Eyebrow>About us</Eyebrow>
            <h2
              id='about-title'
              className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl'
            >
              Water purification you can depend on
            </h2>

            <div className='mt-6 space-y-4 text-base leading-relaxed text-slate-600'>
              {aboutParagraphs.map(p => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Quick facts */}
        <dl className='mt-20 grid gap-6 border-t border-slate-200 pt-10 sm:grid-cols-3'>
          {facts.map(f => (
            <div key={f.label}>
              <dt className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
                {f.label}
              </dt>
              <dd className='mt-1 text-2xl font-semibold text-(--primary)'>
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* =========================================================
   5. SECTION: JOURNEY, MISSION AND VISION
   ========================================================= */
function Purpose () {
  return (
    <section
      aria-labelledby='purpose-title'
      className='bg-slate-50 py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Who we are</Eyebrow>
          </div>
          <h2
            id='purpose-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            Our journey, mission and vision
          </h2>
        </div>

        <div className='mt-14 grid gap-6 lg:grid-cols-12'>
          {/* Journey */}
          <div className='relative isolate overflow-hidden rounded-2xl bg-linear-to-br from-(--blue) to-(--primary) p-8 text-white sm:p-10 lg:col-span-5'>
            <p className='text-sm font-semibold uppercase tracking-widest text-cyan-300'>
              Our journey
            </p>
            <p className='mt-4 text-7xl font-semibold leading-none text-cyan-300 sm:text-8xl'>
              2012
            </p>
            <p className='mt-6 text-base leading-relaxed text-white/80'>
              {journey}
            </p>
          </div>

          {/* Mission and vision */}
          <div className='grid gap-6 sm:grid-cols-2 lg:col-span-7'>
            <div className='rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10'>
              <span className='grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-700'>
                <Icon d='M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 11.5v1' />
              </span>
              <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                Our mission
              </h3>
              <p className='mt-3 text-base leading-relaxed text-slate-600'>
                {mission}
              </p>
            </div>

            <div className='rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10'>
              <span className='grid h-12 w-12 place-items-center rounded-xl bg-cyan-50 text-cyan-700'>
                <Icon d='M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' />
              </span>
              <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                Our vision
              </h3>
              <p className='mt-3 text-base leading-relaxed text-slate-600'>
                {vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================
   6. SECTION: CORE VALUES
   ========================================================= */
function Values () {
  return (
    <section aria-labelledby='values-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>What guides us</Eyebrow>
          </div>
          <h2
            id='values-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            Our core values
          </h2>
        </div>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {values.map(v => (
            <li
              key={v.title}
              className='group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-900/10'
            >
              <span className='grid h-12 w-12 place-items-center rounded-xl bg-cyan-100 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300'>
                <Icon d={v.icon} />
              </span>
              <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                {v.title}
              </h3>
              <p className='mt-2 text-base leading-relaxed text-slate-600'>
                {v.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   7. SECTION: PRODUCTS AND SERVICES
   ========================================================= */
function Services () {
  return (
    <section
      aria-labelledby='services-title'
      className='bg-slate-50 py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>What we do</Eyebrow>
          </div>
          <h2
            id='services-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            Our products and services
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Everything you need for clean water, from the first system to
            ongoing service.
          </p>
        </div>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((s, i) => (
            <li key={s.title}>
              <a
                href={s.href}
                className='group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
              >
                <div className='flex items-start justify-between'>
                  <span className='grid h-14 w-14 place-items-center rounded-xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300'>
                    <Icon d={s.icon} className='h-7 w-7' />
                  </span>
                  <span className='text-3xl font-semibold tabular-nums text-slate-200 transition-colors group-hover:text-cyan-200'>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                  {s.title}
                </h3>
                <p className='mt-2 text-base leading-relaxed text-slate-600'>
                  {s.text}
                </p>
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   8. SECTION: SERVICE PROCESS
   ========================================================= */
function Process () {
  return (
    <section
      aria-labelledby='process-title'
      className='bg-(--blue) py-20 text-white sm:py-28'
    >
      <div className={wrap}>
        <div className='grid gap-5 lg:grid-cols-12 lg:items-end'>
          <h2
            id='process-title'
            className='text-3xl font-semibold tracking-tight sm:text-4xl lg:col-span-7 lg:text-5xl'
          >
            Our service process
          </h2>
          <p className='max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:col-span-5'>
            A clear path from your first enquiry to years of dependable service.
          </p>
        </div>

        <ol className='relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-6'>
          {/* Connecting lines: horizontal on desktop, vertical on mobile */}
          <span
            className='absolute left-0 right-0 top-7 hidden h-px bg-white/25 lg:block'
            aria-hidden='true'
          />
          <span
            className='absolute bottom-7 left-7 top-7 w-px bg-white/25 lg:hidden'
            aria-hidden='true'
          />

          {steps.map((s, i) => (
            <li
              key={s.title}
              className='relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center'
            >
              <span className='relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-cyan-300/60 bg-(--blue) text-cyan-300'>
                <Icon d={s.icon} className='h-6 w-6' />
                <span className='absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-cyan-300 text-xs font-bold text-(--primary)'>
                  {i + 1}
                </span>
              </span>

              <div className='lg:mt-6'>
                <h3 className='text-xl font-medium'>{s.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-white/70 lg:mx-auto lg:max-w-[16rem]'>
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* =========================================================
   9. SECTION: WHY CHOOSE US AND OUR COMMITMENT
   ========================================================= */
function WhyChoose () {
  return (
    <section aria-labelledby='why-title' className='bg-white py-20 sm:py-28'>
      <div className={wrap}>
        <div className='grid items-start gap-12 lg:grid-cols-12 lg:gap-16'>
          {/* Left: heading and commitment */}
          <div className='lg:col-span-5'>
            <Eyebrow>Why choose us</Eyebrow>
            <h2
              id='why-title'
              className='mt-4 text-3xl font-semibold leading-tight tracking-tight text-(--primary) sm:text-4xl'
            >
              Why choose {BRAND}?
            </h2>

            <div className='mt-8 rounded-2xl bg-slate-50 p-7 sm:p-8'>
              <h3 className='text-lg font-semibold text-(--primary)'>
                Our commitment
              </h3>
              <div className='mt-3 space-y-4 text-base leading-relaxed text-slate-600'>
                {commitment.map(p => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: the eight reasons */}
          <ul className='grid gap-4 sm:grid-cols-2 lg:col-span-7'>
            {whyChoose.map(w => (
              <li
                key={w}
                className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-900/10'
              >
                <span className='mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-100 text-cyan-700'>
                  <Icon d={CHECK} className='h-4 w-4' />
                </span>
                <span className='text-base font-medium leading-snug text-(--primary)'>
                  {w}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}




/* =========================================================
   11. SECTION: CALL TO ACTION
   ========================================================= */
function CtaBand () {
  return (
    <section
      aria-labelledby='about-cta-title'
      className='bg-white py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='relative isolate overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16'>
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-widest text-cyan-300'>
                Pure Water | Healthy Life
              </p>
              <h2
                id='about-cta-title'
                className='mt-3 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl'
              >
                Ready for cleaner, safer water?
              </h2>
              <p className='mt-3 max-w-xl text-base leading-relaxed text-white/75'>
                Contact us for domestic RO purifiers, commercial systems,
                industrial RO plants, spare parts, installation and maintenance
                enquiries.
              </p>
              <p className='mt-3 text-sm text-white/70'>
                Our service locations: Tirupur | Pollachi | Avinashi
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
             <Link
            to={'/contact'}
                className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Get a quote
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
   12. THE PAGE
   ========================================================= */
export default function AboutPage () {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <Purpose />
      <Values />
      <Services />
      <Process />
      <WhyChoose />
     
      <CtaBand />
    </main>
  )
}