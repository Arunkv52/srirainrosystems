import Image from '../../../assets/home/family-filter.jpg'

type OfferCardProps = {
  title: string
  description: string
  image?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
  graphicLines?: string[] // shows a dark-blue text tile instead of an image
}

const offers: OfferCardProps[] = [
  {
    title: 'Offers & Customer Enquiries',
    description:
      'Discover exciting savings with exclusive offers and flexible purchase options. Customers can explore genuine cash-payment discounts, eligible EMI schemes, seasonal promotions, and special deals on bulk purchases. Our team is always ready to assist with enquiries, provide offer details, and help customers choose the right option for their needs.',
    image: Image,
    imageAlt: 'Family using a water purifier at home',
    imageFit: 'cover'
  },
  {
    title: 'Exclusive Offers. Better Value. Smarter Purchases.',
    description:
      'Make the most of attractive cash discounts, flexible EMI options, seasonal deals, and bulk-purchase benefits. Get in touch with our team to learn more about current offers, eligibility, and applicable terms and conditions.',
    graphicLines: ['Better', 'Value']
  }
]

function OfferCard ({
  title,
  description,
  image,
  imageAlt,
  imageFit = 'cover',
  graphicLines
}: OfferCardProps) {
  return (
    <article className='flex min-h-62 items-stretch gap-4 bg-white p-4.5'>
      {graphicLines ? (
        <div
          aria-hidden='true'
          className='flex aspect-square w-[38%] shrink-0 items-center justify-center self-start bg-[#062b53] text-center text-3xl font-normal leading-[1.1] text-white sm:text-4xl lg:w-52.75 lg:text-[40px]'
        >
          <span>
            {graphicLines.map(line => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
          </span>
        </div>
      ) : (
        <img
          src={image}
          alt={imageAlt ?? ''}
          className={`aspect-square w-[38%] shrink-0 self-start bg-white lg:w-52.75 ${
            imageFit === 'contain' ? 'object-contain' : 'object-cover'
          }`}
        />
      )}

      <div className='min-w-0 flex-1 pt-0.5'>
        <h3 className='text-base font-semibold leading-[1.4] text-[#062b53] sm:text-lg md:text-2xl'>
          {title}
        </h3>
        <p className='mt-3 text-sm leading-6 text-[#062b53]/70'>{description}</p>
       
      </div>
    </article>
  )
}

export default function Offers () {
  return (
    <section
      id='offers'
      aria-labelledby='offers-title'
      className='mt-5 bg-[#d8e5f3] px-5 pb-12 pt-7 sm:px-8 sm:pb-16 sm:pt-8'
    >
      <div className='mx-auto max-w-[1760px]'>
        <h2
          id='offers-title'
          className='text-center text-4xl font-normal leading-tight tracking-[-0.04em] text-[#062b53] sm:text-5xl md:text-[60px]'
        >
          Offers
        </h2>

        <div className='mt-9 grid grid-cols-1 gap-5 md:mt-10 lg:grid-cols-2'>
          {offers.map(offer => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>
    </section>
  )
}