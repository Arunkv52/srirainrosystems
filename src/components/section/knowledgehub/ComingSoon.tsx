import { Link } from 'react-router'

type Props = {
  title?: string
  message?: string
}

export default function ComingSoon ({
  title = 'Coming Soon',
  message = 'We are working on something great. Please check back soon.'
}: Props) {
  return (
    <main className='grid min-1/2 py-20 place-items-center px-5 text-center'>
      <div className='max-w-xl'>
        <h1 className='text-5xl font-normal leading-tight tracking-[-0.04em] text-[#062b53] sm:text-6xl'>
          {title}
        </h1>
        <p className='mt-4 text-lg leading-8 text-[#062b53]/70'>{message}</p>
        <Link
          to='/'
          className='mt-8 inline-block rounded-full bg-(--blue) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--primary) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--primary)'
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}