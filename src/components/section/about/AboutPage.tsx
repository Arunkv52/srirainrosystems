import AbtImg from '../../../assets/about/happy-young-couple.jpg'


/* =========================================================
   1. YOUR DATA  (edit this part)
   ========================================================= */
const BRAND = 'Sri Rain Ro Systems'
const PHONE_HREF = 'tel:+919999999999'

// Photo for the About section. Import it at the top of the file, then set it here:
//   import AboutImg from "../assets/about/about.jpg";
//   const ABOUT_IMAGE = AboutImg;
// While this is empty, a blue gradient with a water drop is shown.

/* ---- About section ---- */
const aboutParagraphs = [
  `${BRAND} provides reverse osmosis water purification for homes, businesses and industry. We supply the systems, install and commission them, and keep them running with genuine spares and regular maintenance.`,
  'Our approach is simple: understand your water, recommend the right system for your needs, and stand behind it long after installation.'
]

const aboutPoints = [
  'Domestic, commercial and industrial RO',
  'Our own installation and service team',
  'Genuine spares and accessories',
  'AMC and rental options'
]

const values = [
  {
    title: 'Quality',
    text: 'Dependable systems and genuine parts.',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8.5 12.5l2.5 2.5 4.5-5'
  },
  {
    title: 'Reliability',
    text: 'Service that turns up when promised.',
    icon: 'M12 3l8 3v6c0 4.5-3.2 8.2-8 9-4.8-.8-8-4.5-8-9V6zM9 12l2 2 4-4'
  },
  {
    title: 'Honesty',
    text: 'Clear advice and upfront quotes.',
    icon: 'M7 3h8l4 4v14H7zM14 3v5h5M10 13h6M10 17h6'
  }
]

/* ---- Capabilities ---- */
const capabilities = [
  {
    title: 'Domestic RO systems',
    text: 'Water purifiers for homes, sized to your family and your water source.',
    icon: 'M3 11l9-8 9 8M5 10v10h14V10'
  },
  {
    title: 'Commercial RO systems',
    text: 'Reliable purification for offices, shops, hotels and restaurants.',
    icon: 'M4 21V6l8-3 8 3v15M9 21v-5h6v5M8 10h2M14 10h2'
  },
  {
    title: 'Industrial RO plants',
    text: 'Water treatment plants for production and process requirements.',
    icon: 'M3 21V10l6 3V10l6 3V6h4v15H3z'
  },
  {
    title: 'Installation & commissioning',
    text: 'Professional installation, testing and handover by our own team.',
    icon: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9'
  },
  {
    title: 'Spares & accessories',
    text: 'Membranes, filters, pumps, housings, valves, controllers and fittings.',
    icon: 'M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z'
  },
  {
    title: 'AMC & rental',
    text: 'Annual maintenance contracts and equipment on rental basis.',
    icon: 'M3 6h18v15H3zM3 10h18M8 3v4M16 3v4'
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

/* ---- Testimonials: SAMPLE TEXT, replace with real customer reviews ---- */
const testimonials = [
  {
    name: 'Customer name',
    role: 'Home owner',
    quote:
      'Replace this with a real review from a customer about their installation and service experience.',
    rating: 5
  },
  {
    name: 'Customer name',
    role: 'Restaurant owner',
    quote:
      'Replace this with a real review from a commercial customer about how the system and support worked for them.',
    rating: 5
  },
  {
    name: 'Customer name',
    role: 'Factory manager',
    quote:
      'Replace this with a real review from an industrial customer about plant maintenance and response time.',
    rating: 5
  }
]

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = ' px-5 md:px-8'

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
          Get to know {BRAND}: who we are, what we can do for you, and how we
          work from the first call to long-term service.
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
                Homes, businesses and industry
              </p>
              <p className='mt-1 text-sm leading-relaxed text-slate-600'>
                One partner for supply, installation and service.
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

            <ul className='mt-6 grid gap-3 sm:grid-cols-2'>
              {aboutPoints.map(p => (
                <li
                  key={p}
                  className='flex items-center gap-3 text-sm font-medium text-slate-700'
                >
                  
                  {p}
                </li>
              ))}
            </ul>

            {/* Values */}
            <ul className='mt-10 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3'>
              {values.map(v => (
                <li key={v.title}>
                  <span className='grid h-11 w-11 place-items-center rounded-xl bg-cyan-50 text-cyan-700'>
                    <Icon d={v.icon} className='h-5 w-5' />
                  </span>
                  <h3 className='mt-3 text-base font-semibold text-(--primary)'>
                    {v.title}
                  </h3>
                  <p className='mt-1 text-sm leading-relaxed text-slate-600'>
                    {v.text}
                  </p>
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
   5. SECTION: OUR CAPABILITIES
   ========================================================= */
function Capabilities () {
  return (
    <section
      aria-labelledby='capabilities-title'
      className='bg-slate-50 py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>What we do</Eyebrow>
          </div>
          <h2
            id='capabilities-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            Our capabilities
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Everything you need for clean water, from the first system to
            ongoing service.
          </p>
        </div>

        <ul className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {capabilities.map(c => (
            <li key={c.title}>
              <div className='group h-full rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-900/10'>
                <span className='grid h-14 w-14 place-items-center rounded-xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300'>
                  <Icon d={c.icon} className='h-7 w-7' />
                </span>
                <h3 className='mt-6 text-xl font-semibold text-(--primary)'>
                  {c.title}
                </h3>
                <p className='mt-2 text-base leading-relaxed text-slate-600'>
                  {c.text}
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
   6. SECTION: SERVICE PROCESS
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
   7. SECTION: CUSTOMER TESTIMONIALS
   ========================================================= */
function Testimonials () {
  return (
    <section
      aria-labelledby='testimonials-title'
      className='bg-white py-20 sm:py-28'
    >
      <div className={wrap}>
        <div className='mx-auto max-w-2xl text-center'>
          <div className='flex justify-center'>
            <Eyebrow>Testimonials</Eyebrow>
          </div>
          <h2
            id='testimonials-title'
            className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'
          >
            What our customers say
          </h2>
          <p className='mt-4 text-base leading-relaxed text-slate-600'>
            Feedback from homes, businesses and plants we look after.
          </p>
        </div>

        <ul className='mt-14 grid gap-6 lg:grid-cols-3'>
          {testimonials.map((t, i) => (
            <li key={i}>
              <figure className='relative flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10 sm:p-8'>
                <span
                  className='absolute right-6 top-2 text-8xl font-serif leading-none text-cyan-300/50'
                  aria-hidden='true'
                >
                  &ldquo;
                </span>

                <Stars count={t.rating} />

                <blockquote className='mt-5 flex-1 text-base leading-relaxed text-slate-700'>
                  {t.quote}
                </blockquote>

                <figcaption className='mt-7 flex items-center gap-3 border-t border-slate-200 pt-5'>
                  <span className='grid h-11 w-11 place-items-center rounded-full bg-(--primary) text-sm font-semibold text-white'>
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className='block text-sm font-semibold text-(--primary)'>
                      {t.name}
                    </span>
                    <span className='block text-sm text-slate-500'>
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================
   8. SECTION: CALL TO ACTION
   ========================================================= */
function CtaBand () {
  return (
    <section
      aria-labelledby='about-cta-title abt-cta'
      className='bg-white pb-20 sm:pb-28'
    >
      <div className={wrap}>
        <div className='relative isolate overflow-hidden rounded-xs abt-cta px-7 py-12 text-white sm:px-14 sm:py-16'>
         

          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            <div>
              <h2
                id='about-cta-title'
                className='max-w-xl text-3xl font-semibold leading-tight sm:text-4xl'
              >
                Ready for cleaner, safer water?
              </h2>
              <p className='mt-3 max-w-xl text-base leading-relaxed text-white/75'>
                Tell us what you need and we will recommend the right system.
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-2'>
              <a
                href='/contact#quote'
                className='inline-flex items-center gap-2 rounded-full bg-white/90 px-7 py-3.5 text-sm font-semibold text-(--primary) transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300'
              >
                Get a quote
               
              </a>
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
   9. THE PAGE
   ========================================================= */
export default function AboutPage () {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <Capabilities />
      <Process />
      <Testimonials />
      <CtaBand />
    </main>
  )
}
