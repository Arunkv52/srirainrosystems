// A simple blog post: one file, no extra layout needed.
// To write a new post, copy this file and change the text.

import Footer from "../../../layout/Footer"
import Navbar from "../../../layout/Navbar"

const TITLE = 'RO, UV and UF: which water purifier is right for your home?'
const CATEGORY = 'Buying guides'
const DATE = '15 October 2026'
const READ_TIME = '4 min read'

export default function SimpleBlogPost () {
  return (
    <main>
      <Navbar />
      {/* Title area */}
      <header className='bg-linear-to-br from-(--blue) to-(--primary) px-5 pb-12 pt-36 text-white md:px-8 sm:pt-44'>
        <div className='mx-auto max-w-3xl'>
          <a href='/knowledgehub' className='text-sm text-white/70 hover:text-white'>
            &larr; Knowledge Hub
          </a>
          <p className='mt-6 text-sm font-semibold uppercase tracking-widest text-cyan-300'>
            {CATEGORY}
          </p>
          <h1 className='mt-3 text-3xl font-semibold leading-tight sm:text-5xl'>
            {TITLE}
          </h1>
          <p className='mt-5 text-sm text-white/70'>
            {DATE} · {READ_TIME} · By the Sri Rain RO Systems team
          </p>
        </div>
      </header>

      {/* Article text */}
      <article className='mx-auto max-w-3xl space-y-5 px-5 py-14 text-lg leading-8 text-slate-600 md:px-8 [&_h2]:pt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-(--primary) [&_strong]:text-(--primary)'>
        <p>
          Walk into any shop and you will see purifiers labelled RO, UV, UF, or
          all three. The right choice depends on one thing: the water coming
          into your home.
        </p>

        <h2>What each one does</h2>
        <p>
          <strong>RO (reverse osmosis)</strong> pushes water through a very fine
          membrane. It reduces dissolved salts and many other dissolved
          impurities. It needs electricity and a pump, and it produces some
          reject water.
        </p>
        <p>
          <strong>UV (ultraviolet)</strong> uses light to inactivate bacteria
          and viruses. It does not remove salts, chemicals or dirt, so your TDS
          stays the same.
        </p>
        <p>
          <strong>UF (ultrafiltration)</strong> is a membrane with tiny pores
          that holds back particles, bacteria and cysts. It does not remove
          dissolved salts.
        </p>

        <h2>Check your water first</h2>
        <p>
          A TDS meter shows how much salt and mineral is dissolved in your
          water. The Indian standard (IS 10500:2012) sets <strong>500 mg/L</strong>{' '}
          as the acceptable limit, and allows up to 2,000 mg/L only where no
          better source is available.
        </p>
        <p>
          A TDS meter cannot detect germs or specific chemicals such as arsenic,
          fluoride or nitrate. If you are worried about those, get a laboratory
          test.
        </p>

        <h2>Which one should you choose?</h2>
        <div className='overflow-x-auto rounded-2xl border border-slate-200'>
          <table className='w-full min-w-120 text-left text-base'>
            <thead className='bg-(--primary) text-white'>
              <tr>
                <th className='px-5 py-3 font-semibold'>Your water</th>
                <th className='px-5 py-3 font-semibold'>Usually needs</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              <tr>
                <td className='px-5 py-3'>Clear municipal water, TDS under 500</td>
                <td className='px-5 py-3'>UV, UF, or both</td>
              </tr>
              <tr>
                <td className='px-5 py-3'>Borewell water, TDS above 500</td>
                <td className='px-5 py-3'>RO (often with UV or UF)</td>
              </tr>
              <tr>
                <td className='px-5 py-3'>TDS near 2,000 or very salty</td>
                <td className='px-5 py-3'>A higher-rated RO or a commercial system</td>
              </tr>
              <tr>
                <td className='px-5 py-3'>Muddy water</td>
                <td className='px-5 py-3'>A sediment filter first</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>A few tips</h2>
        <ul className='list-disc space-y-2 pl-6'>
          <li>More stages are not always better. Choose what your water needs.</li>
          <li>Each model has a maximum feed-water TDS rating. Check it.</li>
          <li>Filters, membranes and UV lamps need replacing on schedule.</li>
          <li>Hard water that leaves scale may need a water softener as well.</li>
        </ul>

        {/* Help box */}
        <div className='mt-12! rounded-2xl bg-slate-50 p-7'>
          <p className='text-xl font-semibold text-(--primary)'>
            Not sure which purifier suits your water?
          </p>
          <p className='mt-2 text-base'>
            Send us your water source and TDS reading and we will recommend a
            model.
          </p>
          <a
            href='/contact?topic=Domestic%20RO#quote'
            className='mt-5 inline-block rounded-full bg-(--primary) px-7 py-3 text-base font-semibold text-white hover:bg-(--primary)/90'
          >
            Get a recommendation
          </a>
        </div>
      </article>

      <Footer />
    </main>
  )
}