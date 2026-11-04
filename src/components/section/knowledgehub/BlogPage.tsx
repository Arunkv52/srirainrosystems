import { Link } from 'react-router'

const PAGE_TITLE = 'Knowledge Hub'

export default function KnowledgeHub () {
  return (
    <main>
      <section
        aria-labelledby='blog-title'
        className='blog-hero relative isolate flex min-h-[70vh] items-center overflow-hidden px-5 pb-16 pt-36 text-white md:px-8 sm:pb-24 sm:pt-44'
      >
        <div className='w-full'>
          <nav aria-label='Breadcrumb' className='text-sm text-white/70'>
            <ol className='flex items-center gap-2'>
              <li>
                <Link
                  to='/'
                  className='hover:text-white focus-visible:underline focus-visible:outline-none'
                >
                  Home
                </Link>
              </li>
              <li aria-hidden='true'>/</li>
              <li className='text-white' aria-current='page'>
                {PAGE_TITLE}
              </li>
            </ol>
          </nav>

          <h1
            id='blog-title'
            className='mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl'
          >
            Coming Soon
          </h1>
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg'>
            Our {PAGE_TITLE} is on the way. Please check back soon.
          </p>
        </div>
      </section>
    </main>
  )
}