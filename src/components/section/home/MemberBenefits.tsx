import Image from '../../../assets/home/mom-daughter-drinks.jpg'

type OfferCardProps = {
  title: string
  image?: string
  imageAlt?: string
  discountGraphic?: boolean
  imageFit?: 'cover' | 'contain'
}

const offers: OfferCardProps[] = [
  {
    title: 'Use HEALTHYCOPPER code and get 10% OFF',
    image: Image,
    imageAlt: 'Healthy Copper water purifier',
    imageFit: 'cover'
  },
 
  {
    title: 'Welcome Offer! Get 5% OFF on first purchase',
    discountGraphic: true
  }
]

function OfferCard ({
  title,
  image,
  imageAlt,
  discountGraphic,
  imageFit = 'cover'
}: OfferCardProps) {
  return (
    <article className='flex min-h-[248px] items-stretch gap-3 bg-white p-[18px] sm:gap-2.5'>
      {discountGraphic ? (
        <div className='flex aspect-square w-[38%] shrink-0 items-center justify-center bg-[#062b53] text-center text-[40px] font-normal leading-[1.05] text-white sm:w-[38%] lg:w-[211px]'>
          <span>
            5%
            <br />
            OFF
          </span>
        </div>
      ) : (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className={`aspect-square w-[38%] shrink-0 bg-white sm:w-[38%] lg:w-[211px] ${
            imageFit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
        />
      )}

      <div className='min-w-0 flex-1 pt-0.5'>
        <h2 className='text-base font-semibold leading-[1.4] text-[#062b53] sm:text-lg'>
          {title}
        </h2>
        <p className='mt-5 text-sm leading-5 text-[#8b9bb0]'>
          Limited time offer
        </p>
        <a
          href='/offers'
          className='mt-2 inline-flex items-center gap-2 text-base text-[#062b53] hover:underline'
        >
          <span>Explore</span>
          <span
            aria-hidden='true'
            className='flex size-6 items-center justify-center rounded-full border border-[#6e849f] text-sm leading-none'
          >
            →
          </span>
        </a>
      </div>
    </article>
  )
}

export default function Offers () {
  return (
    <section className='mt-5 bg-[#d8e5f3] px-5 pb-12 pt-7 sm:px-8 sm:pb-16 sm:pt-8'>
      <div className='mx-auto max-w-[1760px]'>
        <h1 className='text-center text-4xl font-normal leading-tight tracking-[-0.04em] text-[#062b53] sm:text-5xl md:text-[60px]'>
          Offers
        </h1>

        <div className='mt-9 grid grid-cols-1 gap-5 md:mt-10 lg:grid-cols-2'>
          {offers.map(offer => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}
