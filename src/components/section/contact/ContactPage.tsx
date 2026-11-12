import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import type { ReactNode } from 'react'

/* =========================================================
   1. YOUR DATA  (edit this part)
   Enter VERIFIED details only. Everything below is a placeholder.
   ========================================================= */
const BRAND = 'Sri Rain Ro Systems'

// Main company contact (shown in the top cards)
const business = {
  phone: '+91 99424 99000,+91 97158 86000,+91 97912 87666',
  phoneHref: 'tel:+919715886000',
  whatsapp: '+919715886000', // country code + number, no "+"
  email: 'sales@srirainrosystems.com',
  hours: 'Mon – Sat, 9:00 am – 6:30 pm'
}

type Location = {
  name: string
  address: string[] // each item is one line
  phone: string
  phoneHref: string
  whatsapp: string
  email: string
  hours: string
  mapQuery: string // what Google Maps should search for (use the full address for best results)
}

const locations: Location[] = [
  {
    name: 'Tirupur',
    address: [
      'No.595/3c. HP Bank, Kongu Main Road, Bharathi Nagar (North)',
      'Tirupur - 641 603, Tamil Nadu'
    ],
    phone: '+91 99424 99000, +91 97158 86000',
    phoneHref: 'tel:+919942499000',
    whatsapp: '+919942499000',
    email: 'srirainrosystems@gmail.com',
    hours: 'Mon – Sat, 9:00 am – 6:30 pm',
    mapQuery: 'Tirupur, Tamil Nadu'
  },
  {
    name: 'Pollachi',
    address: [
      'No.10, Kmr Streeet, Venkatesa Colony',
      'Pollachi - 642 001, Tamil Nadu'
    ],
    phone: '+91 99424 99000, +91 97158 86000',
    phoneHref: 'tel:+919942499000',
    whatsapp: '+919942499000',
    email: 'srirainrosystems@gmail.com',
    hours: 'Mon – Sat, 9:00 am – 6:30 pm',
    mapQuery: 'Pollachi, Tamil Nadu'
  },
  {
    name: 'Avinashi',
    address: ['No.13, Seyur Road, Soolai,', 'Avinashi - 641 654, Tamil Nadu'],
    phone: '+91 99424 99000, +91 97158 86000',
    phoneHref: 'tel:+919942499000',
    whatsapp: '+919942499000',
    email: 'srirainrosystems@gmail.com',
    hours: 'Mon – Sat, 9:00 am – 6:30 pm',
    mapQuery: 'Avinashi, Tamil Nadu'
  }
]

const enquiryTypes = [
  'Domestic RO',
  'Commercial RO',
  'Industrial RO',
  'Water softener',
  'Spares & accessories',
  'Installation & commissioning',
  'Repair & troubleshooting',
  'Filter & membrane replacement',
  'Annual Maintenance Contract (AMC)',
  'Plant maintenance',
  'Equipment on rental',
  'Bulk order',
  'Other'
]

// Lets links like /contact?service=amc#service pre-select the enquiry type
const serviceToType: Record<string, string> = {
  'installation-commissioning': 'Installation & commissioning',
  'repair-troubleshooting': 'Repair & troubleshooting',
  'filter-membrane-replacement': 'Filter & membrane replacement',
  amc: 'Annual Maintenance Contract (AMC)',
  'plant-maintenance': 'Plant maintenance',
  'equipment-rental': 'Equipment on rental'
}

/* =========================================================
   2. SMALL HELPERS
   ========================================================= */
const wrap = ' px-5 md:px-8'

const ICONS = {
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
  phone:
    'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  chat: 'M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z',
  mail: 'M3 5h18v14H3zM3 7l9 7 9-7',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  drop: 'M12 2.5s6 6.2 6 10.5a6 6 0 1 1-12 0C6 8.7 12 2.5 12 2.5z'
}

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

function Eyebrow ({ children }: { children: string }) {
  return (
    <p className='flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-700'>
      <span className='h-px w-8 bg-cyan-600/50' aria-hidden='true' />
      {children}
    </p>
  )
}

/* =========================================================
   3. THE FORM (react-hook-form)
   ========================================================= */
type FormValues = {
  name: string
  phone: string
  email: string
  location: string
  topic: string
  message: string
  consent: boolean
  website: string // hidden "honeypot" field: real people leave it empty
}

const defaultValues: FormValues = {
  name: '',
  phone: '',
  email: '',
  location: locations[0].name,
  topic: '',
  message: '',
  consent: false,
  website: ''
}

// TODO: replace the body with your real submit (your API, EmailJS, Formspree...).
// Right now it only waits a moment and logs the data, so NOTHING is sent anywhere yet.
async function sendEnquiry (data: FormValues): Promise<void> {
  // await fetch("/api/enquiry", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(data),
  // });
  await new Promise(resolve => setTimeout(resolve, 900))
  console.log('Enquiry submitted:', data)
}

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2'
const inputOk = 'border-slate-300 focus:border-cyan-500 focus:ring-cyan-500/30'
const inputBad = 'border-red-400 focus:border-red-500 focus:ring-red-500/20'

function Field ({
  id,
  label,
  error,
  optional,
  children,
  className = ''
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='mb-1.5 block text-sm font-medium text-slate-700'
      >
        {label}
        {optional && (
          <span className='font-normal text-slate-400'> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          role='alert'
          className='mt-1.5 text-sm text-red-600'
        >
          {error}
        </p>
      )}
    </div>
  )
}

function EnquiryForm () {
  // The form is created once in <ContactPage /> and shared, so the location
  // cards and map tabs can read and change the "location" field too.
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useFormContext<FormValues>()

  // Pre-fill from links like /contact?service=amc or /contact?product=home-ro-8l
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    const product = params.get('product')
    if (service && serviceToType[service])
      setValue('topic', serviceToType[service])
    if (product) {
      setValue(
        'message',
        `I'd like to book a demo / get details for: ${product}`
      )
    }
  }, [setValue])

  // The "Location" field is shared with the location cards and map tabs
  const chosenLocation = watch('location')

  const onSubmit = async (data: FormValues) => {
    if (data.website) return // a bot filled the hidden field: ignore silently
    await sendEnquiry(data)
  }

  // ---- Success view ----
  if (isSubmitSuccessful) {
    const loc = locations.find(l => l.name === chosenLocation) ?? locations[0]
    return (
      <div className='flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12'>
        <span className='grid h-16 w-16 place-items-center rounded-full bg-cyan-100 text-cyan-700'>
          <Icon d={ICONS.check} className='h-8 w-8' />
        </span>
        <h3 className='mt-6 text-2xl font-semibold text-(--primary)'>
          Thank you, we have your enquiry
        </h3>
        <p className='mt-3 max-w-md text-base leading-relaxed text-slate-600'>
          Our {loc.name} team will get back to you shortly. For anything urgent,
          call us or message on WhatsApp.
        </p>
        <div className='mt-7 flex flex-wrap justify-center gap-3'>
          <a
            href={loc.phoneHref}
            className='inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
          >
            <Icon d={ICONS.phone} className='h-4 w-4' />
            Call {loc.name}
          </a>
          <button
            type='button'
            onClick={() => reset()}
            className='rounded-full border border-(--primary)/25 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:border-(--primary) hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500'
          >
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  // ---- Form view ----
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className='rounded-xs border border-slate-200 bg-white p-6 shadow-sm sm:p-10'
    >
      <h3 className='text-2xl font-semibold text-(--primary)'>
        Send an enquiry
      </h3>
      <p className='mt-2 text-base text-slate-600'>
        Fill in the form and we will reply as soon as we can.
      </p>

      <div className='mt-8 grid gap-5 sm:grid-cols-2'>
        <Field id='name' label='Full name' error={errors.name?.message}>
          <input
            id='name'
            autoComplete='name'
            placeholder='Your name'
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputBase} ${errors.name ? inputBad : inputOk}`}
            {...register('name', {
              required: 'Please enter your name',
              minLength: { value: 2, message: 'Name is too short' }
            })}
          />
        </Field>

        <Field id='phone' label='Phone number' error={errors.phone?.message}>
          <input
            id='phone'
            type='tel'
            inputMode='tel'
            autoComplete='tel'
            placeholder='+91 98765 43210'
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputBase} ${errors.phone ? inputBad : inputOk}`}
            {...register('phone', {
              required: 'Please enter your phone number',
              pattern: {
                value: /^\+?[0-9\s-]{10,15}$/,
                message: 'Enter a valid phone number (10 to 15 digits)'
              }
            })}
          />
        </Field>

        <Field
          id='email'
          label='Email'
          optional
          error={errors.email?.message}
          className='sm:col-span-2'
        >
          <input
            id='email'
            type='email'
            autoComplete='email'
            placeholder='you@example.com'
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputBase} ${errors.email ? inputBad : inputOk}`}
            {...register('email', {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address'
              }
            })}
          />
        </Field>

        <Field
          id='location'
          label='Nearest location'
          error={errors.location?.message}
        >
          <select
            id='location'
            aria-invalid={!!errors.location}
            className={`${inputBase} ${errors.location ? inputBad : inputOk}`}
            {...register('location', { required: 'Please choose a location' })}
          >
            {locations.map(l => (
              <option key={l.name} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id='topic'
          label='I am enquiring about'
          error={errors.topic?.message}
        >
          <select
            id='topic'
            aria-invalid={!!errors.topic}
            aria-describedby={errors.topic ? 'topic-error' : undefined}
            className={`${inputBase} ${errors.topic ? inputBad : inputOk}`}
            {...register('topic', { required: 'Please choose a topic' })}
          >
            <option value=''>Select a topic</option>
            {enquiryTypes.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id='message'
          label='Message'
          error={errors.message?.message}
          className='sm:col-span-2'
        >
          <textarea
            id='message'
            rows={5}
            placeholder='Tell us what you need: system type, daily water usage, problem you are facing...'
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${inputBase} resize-y ${
              errors.message ? inputBad : inputOk
            }`}
            {...register('message', {
              required: 'Please tell us a little about your requirement',
              minLength: {
                value: 10,
                message: 'Please write at least 10 characters'
              }
            })}
          />
        </Field>

        {/* Honeypot: hidden from people, visible to bots */}
        <div className='hidden' aria-hidden='true'>
          <label htmlFor='website'>Website</label>
          <input
            id='website'
            tabIndex={-1}
            autoComplete='off'
            {...register('website')}
          />
        </div>

        <div className='sm:col-span-2'>
          <label className='flex cursor-pointer items-start gap-3 text-sm text-slate-600'>
            <input
              type='checkbox'
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? 'consent-error' : undefined}
              className='mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-(--primary)'
              {...register('consent', {
                required:
                  'Please agree so we can contact you about this enquiry'
              })}
            />
            I agree to be contacted about my enquiry by phone, WhatsApp or
            email.
          </label>
          {errors.consent && (
            <p
              id='consent-error'
              role='alert'
              className='mt-1.5 text-sm text-red-600'
            >
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--primary) px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto'
      >
        {isSubmitting ? (
          <>
            <svg
              className='h-4 w-4 animate-spin'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <circle
                cx='12'
                cy='12'
                r='9'
                stroke='currentColor'
                strokeWidth='3'
                opacity='0.25'
              />
              <path
                d='M21 12a9 9 0 0 0-9-9'
                stroke='currentColor'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send enquiry
            <Icon d={ICONS.arrow} className='h-4 w-4' />
          </>
        )}
      </button>
    </form>
  )
}

/* =========================================================
   4. HERO + QUICK CONTACT CARDS
   ========================================================= */
function Hero () {
  const quick = [
    {
      label: 'Call us',
      value: business.phone,
      href: business.phoneHref,
      icon: ICONS.phone
    },
    {
      label: 'WhatsApp',
      value: 'Chat with us',
      href: `https://wa.me/${business.whatsapp}`,
      icon: ICONS.chat,
      external: true
    },
    {
      label: 'Email',
      value: business.email,
      href: `mailto:${business.email}`,
      icon: ICONS.mail
    },
    { label: 'Working hours', value: business.hours, icon: ICONS.clock }
  ]

  return (
    <>
      <section
        aria-labelledby='contact-title'
        className='contact-hero relative isolate overflow-hidden pb-28 pt-36 text-white sm:pb-32 sm:pt-44'
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
                Contact
              </li>
            </ol>
          </nav>

          <h1
            id='contact-title'
            className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
          >
            Contact &amp; locations
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
            Reach {BRAND} in Tirupur, Pollachi or Avinashi. Call, message us on
            WhatsApp, send an enquiry or visit your nearest location.
          </p>
        </div>
      </section>

      {/* Cards that overlap the bottom of the hero */}
      <div className={`${wrap} relative z-10 -mt-14`}>
        <ul className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {quick.map(q => {
            const inner = (
              <>
                <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xs bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-(--primary) group-hover:text-cyan-300'>
                  <Icon d={q.icon} className='h-6 w-6' />
                </span>
                <span className='min-w-0'>
                  <span className='block text-xs font-semibold uppercase tracking-wider text-slate-500'>
                    {q.label}
                  </span>
                  <span className='mt-0.5 block wrap-break-word text-base font-semibold text-(--primary)'>
                    {q.value}
                  </span>
                </span>
              </>
            )
            const cls =
              'group flex h-full items-center gap-4 rounded-xs border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 transition duration-300'
            return (
              <li key={q.label}>
                {q.href ? (
                  <a
                    href={q.href}
                    {...(q.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`${cls} hover:-translate-y-1 hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

/* =========================================================
   5. FORM + LOCATION CARDS
   ========================================================= */
function LocationDetails ({ loc }: { loc: Location }) {
  const rows = [
    {
      icon: ICONS.pin,
      content: loc.address.map(l => (
        <span key={l} className='block'>
          {l}
        </span>
      ))
    },
    {
      icon: ICONS.phone,
      content: (
        <a
          href={loc.phoneHref}
          className='hover:text-(--primary) hover:underline'
        >
          {loc.phone}
        </a>
      )
    },
    {
      icon: ICONS.chat,
      content: (
        <a
          href={`https://wa.me/${loc.whatsapp}`}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-(--primary) hover:underline'
        >
          WhatsApp this branch
        </a>
      )
    },
    {
      icon: ICONS.mail,
      content: (
        <a
          href={`mailto:${loc.email}`}
          className='break-all hover:text-(--primary) hover:underline'
        >
          {loc.email}
        </a>
      )
    },
    { icon: ICONS.clock, content: loc.hours }
  ]

  return (
    <div className='border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6'>
      <ul className='space-y-3 text-sm leading-relaxed text-slate-600'>
        {rows.map((r, i) => (
          <li key={i} className='flex gap-3'>
            <Icon
              d={r.icon}
              className='mt-0.5 h-4 w-4 shrink-0 text-cyan-700'
            />
            <span>{r.content}</span>
          </li>
        ))}
      </ul>
      {/* <a
        href={directionsUrl(loc.mapQuery)}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-5 inline-flex items-center gap-2 rounded-full bg-(--primary) px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--primary)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2'
      >
        Get directions
        <Icon d={ICONS.arrow} className='h-4 w-4' />
      </a> */}
    </div>
  )
}

function FormAndLocations () {
  // Location cards and map tabs share the form's "location" value
  const { setValue, watch } = useFormContext<FormValues>()
  const selected = watch('location')

  return (
    <div className='lg:col-span-5'>
      <Eyebrow>Our locations</Eyebrow>
      <h2 className='mt-4 text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl'>
        Visit or call your nearest branch
      </h2>
      <p className='mt-3 text-base leading-relaxed text-slate-600'>
        Choose a location to see its details. It also fills in the form.
      </p>

      <ul className='mt-8 space-y-4'>
        {locations.map(loc => {
          const active = selected === loc.name
          return (
            <li
              key={loc.name}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                active
                  ? 'border-cyan-400 shadow-lg shadow-cyan-900/10 ring-1 ring-cyan-300'
                  : 'border-slate-200 hover:border-cyan-300'
              }`}
            >
              <button
                type='button'
                aria-expanded={active}
                onClick={() =>
                  setValue('location', loc.name, { shouldDirty: true })
                }
                className='flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-500 sm:px-6'
              >
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${
                    active
                      ? 'bg-(--primary) text-cyan-300'
                      : 'bg-cyan-50 text-cyan-700'
                  }`}
                >
                  <Icon d={ICONS.pin} />
                </span>
                <span className='min-w-0 flex-1'>
                  <span className='block text-lg font-semibold text-(--primary)'>
                    {loc.name}
                  </span>
                  <span className='block truncate text-sm text-slate-500'>
                    {loc.address[loc.address.length - 1]}
                  </span>
                </span>
                <Icon
                  d='m6 9 6 6 6-6'
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    active ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {active && <LocationDetails loc={loc} />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/* =========================================================
   7. THE PAGE
   ========================================================= */
export default function ContactPage () {
  const methods = useForm<FormValues>({ mode: 'onTouched', defaultValues })

  return (
    <FormProvider {...methods}>
      <main>
        <Hero />

        <section className='relative bg-slate-50 py-20 sm:py-28'>
          {/* Anchors for links like /contact#quote, #service and #demo
              (placed above the section so the fixed navbar doesn't cover the form) */}
          <span id='quote' className='absolute -top-24' aria-hidden='true' />
          <span id='service' className='absolute -top-24' aria-hidden='true' />
          <span id='demo' className='absolute -top-24' aria-hidden='true' />

          <div className={wrap}>
            <div className='grid items-start gap-10 lg:grid-cols-12 lg:gap-14'>
              <div className='lg:col-span-7'>
                <EnquiryForm />
              </div>
              <FormAndLocations />
            </div>
          </div>
        </section>
      </main>
    </FormProvider>
  )
}
