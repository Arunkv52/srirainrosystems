// Blog post: What does your TDS reading really mean?
// Same layout as SimpleBlogPost: one file, no extra layout needed.

import { Link } from 'react-router'
import Footer from '../../../layout/Footer'
import Navbar from '../../../layout/Navbar'

const TITLE = 'What does your TDS reading really mean?'
const CATEGORY = 'RO basics'
const DATE = '8 October 2026'
const READ_TIME = '4 min read'

export default function TdsBlogPost () {
  return (
    <main>
      <Navbar />
      {/* Title area */}
      <header className='bg-linear-to-br from-(--blue) to-(--primary) px-5 pb-12 pt-36 text-white md:px-8 sm:pt-44'>
        <div className='mx-auto max-w-3xl'>
          <Link
            to='/knowledgehub'
            className='text-sm text-white/70 hover:text-white'
          >
            &larr; Knowledge Hub
          </Link>
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
          A TDS meter is a small, cheap tool, and the number on its screen is
          easy to misread. Some people panic at 300. Others assume that a low
          number means their water is perfectly safe. Neither is quite right.
        </p>

        <h2>What TDS measures</h2>
        <p>
          <strong>TDS stands for total dissolved solids.</strong> It is the
          total amount of dissolved minerals and salts in your water, such as
          calcium, magnesium, sodium, chlorides and sulphates. It is shown in
          mg/L, which is the same as ppm for drinking water.
        </p>
        <p>
          The meter does not count these directly. It measures how well the
          water conducts electricity and converts that into a number. The more
          dissolved salts, the higher the reading.
        </p>

        <h2>What TDS does not tell you</h2>
        <ul className='list-disc space-y-2 pl-6'>
          <li>
            <strong>Germs.</strong> Bacteria and viruses do not change the
            reading, so water with low TDS can still be unsafe to drink.
          </li>
          <li>
            <strong>Which substances are in the water.</strong> It cannot
            separate harmless calcium from harmful chemicals such as arsenic,
            fluoride, nitrate or pesticides. For these, get a laboratory test.
          </li>
          <li>
            <strong>Whether water is safe.</strong> TDS is a guide to taste and
            mineral content, not a safety certificate.
          </li>
        </ul>

        <h2>How to read the number</h2>
        <p>
          The Indian standard (IS 10500:2012) gives <strong>500 mg/L</strong> as
          the acceptable limit for drinking water. It allows up to 2,000 mg/L
          only where no better source is available. As a rough guide to taste:
        </p>
        <div className='overflow-x-auto rounded-2xl border border-slate-200'>
          <table className='w-full min-w-[480px] text-left text-base'>
            <thead className='bg-(--primary) text-white'>
              <tr>
                <th className='px-5 py-3 font-semibold'>TDS (mg/L)</th>
                <th className='px-5 py-3 font-semibold'>What it usually means</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              <tr>
                <td className='px-5 py-3'>Under 300</td>
                <td className='px-5 py-3'>Low mineral content, pleasant taste</td>
              </tr>
              <tr>
                <td className='px-5 py-3'>300 to 500</td>
                <td className='px-5 py-3'>Within the acceptable limit, good taste</td>
              </tr>
              <tr>
                <td className='px-5 py-3'>500 to 900</td>
                <td className='px-5 py-3'>
                  Above the acceptable limit, noticeably salty or hard
                </td>
              </tr>
              <tr>
                <td className='px-5 py-3'>900 to 2,000</td>
                <td className='px-5 py-3'>
                  High: a good RO system is recommended
                </td>
              </tr>
              <tr>
                <td className='px-5 py-3'>Above 2,000</td>
                <td className='px-5 py-3'>
                  Very high: needs a higher-rated or commercial RO
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Using TDS to check your RO system</h2>
        <p>
          The most useful thing a TDS meter does is compare the water before
          and after your purifier. Test the tap water going in, then the
          purified water coming out. For example, 800 mg/L in and 40 mg/L out
          means the membrane is removing about 95% of the dissolved salts.
        </p>
        <p>
          If the purified water reading slowly creeps up over the months, the
          membrane is probably wearing out. That is a good time to book a
          service visit.
        </p>

        <h2>A few tips</h2>
        <ul className='list-disc space-y-2 pl-6'>
          <li>Rinse the meter probe with clean water before each test.</li>
          <li>Test a glass of water, not a running tap, and let it settle.</li>
          <li>
            Cheap meters can drift. Check yours against a known sample from
            time to time.
          </li>
          <li>
            Very low TDS is not a problem in itself, and many RO models add
            minerals back to improve the taste.
          </li>
        </ul>

        {/* Help box */}
        <div className='!mt-12 rounded-2xl bg-slate-50 p-7'>
          <p className='text-xl font-semibold text-(--primary)'>
            Not sure what your TDS reading means for you?
          </p>
          <p className='mt-2 text-base'>
            Send us your water source and TDS reading and we will recommend a
            suitable system.
          </p>
          <Link
            to='/contact?topic=Domestic%20RO#quote'
            className='mt-5 inline-block rounded-full bg-(--primary) px-7 py-3 text-base font-semibold text-white hover:bg-(--primary)/90'
          >
            Get a recommendation
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  )
}