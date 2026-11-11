import Footer from '../layout/Footer'
import LegalLayout, { A, LEGAL, P, UL } from '../layout/LegalLayout'
import type { LegalSection } from '../layout/LegalLayout'
import Navbar from '../layout/Navbar'

const sections: LegalSection[] = [
  {
    id: 'about',
    title: 'About these terms',
    body: (
      <>
        <P>
          These Terms &amp; Conditions apply to your use of this website and to
          the products and services offered by {LEGAL.legalName}{' '}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) from our
          locations in {LEGAL.locations}, Tamil Nadu.
        </P>
        <P>
          By using this website, sending an enquiry, or buying from us, you
          agree to these terms. If a written quotation, invoice, warranty card
          or agreement says something different for your purchase, that document
          applies to the extent of the difference.
        </P>
      </>
    )
  },
  {
    id: 'website-use',
    title: 'Using our website',
    body: (
      <>
        <P>You agree to use this website lawfully and not to:</P>
        <UL>
          <li>submit false, misleading or abusive information;</li>
          <li>
            try to damage, overload or gain unauthorised access to the website
            or its systems;
          </li>
          <li>
            copy or collect content from the website by automated means without
            our written permission; or
          </li>
          <li>use the website to send spam or unsolicited advertising.</li>
        </UL>
      </>
    )
  },
  {
    id: 'product-information',
    title: 'Product information',
    body: (
      <>
        <P>
          We try to keep the information on this website accurate. Please note:
        </P>
        <UL>
          <li>
            Specifications such as capacity, storage, power, pressure and
            temperature are typical, indicative or proposed values. They can
            vary by model, variant and supplier, and are not universal ratings.
          </li>
          <li>Daily output figures are theoretical, under rated conditions.</li>
          <li>
            Photographs and illustrations are for guidance and may differ from
            the product supplied.
          </li>
          <li>
            Products and specifications may change without notice, and errors or
            omissions may occasionally occur.
          </li>
          <li>
            Third-party brand and model names belong to their owners and are
            used only to identify products.
          </li>
        </UL>
        <P>
          Nothing on this website is an offer that we must accept. A binding
          agreement is formed only when we confirm your order in writing.
        </P>
      </>
    )
  },
  {
    id: 'quotations',
    title: 'Enquiries and quotations',
    body: (
      <>
        <P>
          Sending an enquiry does not create a contract. Our quotations are
          prepared from the information you give us, such as your water source,
          water quality, daily consumption and requirements.
        </P>
        <UL>
          <li>
            A quotation is valid for the period stated in it. After that we may
            revise it.
          </li>
          <li>
            Quotations may change after a site survey or a water analysis if the
            conditions differ from what you told us.
          </li>
          <li>
            Unless a quotation says otherwise, prices exclude applicable taxes.
          </li>
        </UL>
      </>
    )
  },
  {
    id: 'orders-payment',
    title: 'Orders and payment',
    body: (
      <>
        <P>
          An order is confirmed when we accept it in writing, for example by
          sending an invoice or order confirmation. Payment terms, including any
          advance payment, are those stated in the quotation or invoice.
        </P>
        <P>
          If you want to change or cancel an order, tell us as soon as possible.
          Items already specially ordered or made to your requirements, and work
          already carried out, may be charged.
        </P>
      </>
    )
  },
  {
    id: 'delivery-installation',
    title: 'Delivery, installation and commissioning',
    body: (
      <>
        <P>
          Delivery and installation dates we give are estimates, and delays can
          happen for reasons outside our control.
        </P>
        <P>For installation to go ahead, you are responsible for:</P>
        <UL>
          <li>
            providing safe access to the site and a suitable location for the
            equipment;
          </li>
          <li>
            having the water supply, plumbing, drainage and electrical supply
            ready as we have advised; and
          </li>
          <li>
            telling us about anything on site that could affect the work, such
            as concealed pipes or unusual water conditions.
          </li>
        </UL>
        <P>
          Extra work needed because the site was not ready may be charged
          separately.
        </P>
      </>
    )
  },
  {
    id: 'water-quality',
    title: 'Water quality and performance',
    body: (
      <>
        <P>
          How a purifier, plant or softener performs depends heavily on the
          water that goes into it. Capacity, recovery, output quality and the
          life of filters and membranes vary with feed-water quality, pressure,
          temperature, usage and maintenance.
        </P>
        <UL>
          <li>
            Please give us accurate information about your water source and use,
            and a water analysis where we ask for one.
          </li>
          <li>
            Each model has its own feed-water TDS rating. Using a system outside
            its rating can reduce performance or cause damage.
          </li>
          <li>
            Filters, membranes and other consumables wear out and must be
            replaced on schedule.
          </li>
          <li>
            Our products are for water treatment. We do not make medical claims
            about them.
          </li>
        </UL>
      </>
    )
  },
  {
    id: 'warranty',
    title: 'Warranty',
    body: (
      <>
        <P>
          Warranty on a product is as stated in the invoice, the warranty card
          or the manufacturer&apos;s warranty terms for that model. Warranty
          periods and conditions differ between models.
        </P>
        <P>Unless the warranty terms say otherwise, warranty does not cover:</P>
        <UL>
          <li>
            damage from misuse, accidents, or incorrect installation by others;
          </li>
          <li>
            faults caused by an unsuitable power supply, water pressure or feed
            water outside the model&apos;s rating;
          </li>
          <li>repairs or changes made by anyone we have not authorised; and</li>
          <li>
            normal wear of consumables such as filters, cartridges and
            membranes.
          </li>
        </UL>
      </>
    )
  },
  {
    id: 'service-amc',
    title: 'Service, maintenance and AMC',
    body: (
      <>
        <P>
          Installation, servicing, troubleshooting and replacement services are
          offered subject to service availability in our service areas.
        </P>
        <P>
          Annual Maintenance Contracts (AMC) are covered by the written contract
          you sign, which sets out the equipment covered, the number of visits,
          what parts and consumables are included, and the charges. Anything
          outside that contract is charged separately.
        </P>
      </>
    )
  },
  {
    id: 'spares-returns',
    title: 'Spare parts, returns and refunds',
    body: (
      <>
        <P>
          Many spare parts are specific to a model. Please confirm the model
          and, if possible, send us a photo of the part so we can help you
          choose the right one. We cannot be responsible for a part that was
          ordered against wrong or incomplete information.
        </P>
        <P>
          Returns, replacements and refunds are handled as stated on your
          invoice or in your written agreement. Parts that have been installed,
          used or damaged may not be returnable unless they were faulty when
          supplied. Nothing in these terms affects any right you have under
          applicable consumer law.
        </P>
      </>
    )
  },
  {
    id: 'rental',
    title: 'Equipment on rental',
    body: (
      <P>
        Equipment supplied on rental is covered by a separate rental agreement.
        Unless that agreement says otherwise, the equipment remains our
        property, you must take reasonable care of it, you must not move, sell
        or lend it, and you are responsible for loss or damage beyond normal
        wear. Rent, deposit, duration and return terms are as agreed in writing.
      </P>
    )
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <P>
        The text, images, logos, layout and other content on this website belong
        to us or our licensors and are protected by law. You may view and print
        the pages for your own use, but you may not copy, republish or use them
        commercially without our written permission.
      </P>
    )
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <P>
          To the fullest extent the law allows, we are not liable for indirect
          or consequential loss, loss of profit, loss of business or loss of
          data arising from your use of this website or our products and
          services.
        </P>
        <P>
          Where we are found liable, our total liability for a product or
          service is limited to the amount you paid us for that product or
          service. Nothing in these terms excludes or limits liability that
          cannot be excluded or limited by law, or any right you have as a
          consumer under applicable law.
        </P>
      </>
    )
  },
  {
    id: 'third-parties',
    title: 'Third-party links and services',
    body: (
      <P>
        Our website may link to or embed third-party services such as WhatsApp
        and Google Maps. We do not control them and are not responsible for
        their content, availability or practices. Your use of them is subject to
        their own terms.
      </P>
    )
  },
  {
    id: 'privacy',
    title: 'Privacy',
    body: (
      <P>
        How we handle your personal information is explained in our{' '}
        <A href='/privacy-policy'>Privacy Policy</A>, which forms part of these
        terms.
      </P>
    )
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    body: (
      <P>
        These terms are governed by the laws of India. We would like to resolve
        any concern directly with you first, so please contact us before taking
        other steps. Subject to any right you have under consumer law, the
        courts at Tirupur, Tamil Nadu have jurisdiction over any dispute arising
        from these terms.
      </P>
    )
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    body: (
      <P>
        We may update these terms from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page shows when they last
        changed. If you keep using our website or services after an update, you
        accept the updated terms.
      </P>
    )
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: (
      <P>
        <strong>{LEGAL.legalName}</strong>
        <br />
        {LEGAL.address.map(line => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        Phone: <A href={LEGAL.phoneHref}>{LEGAL.phone}</A>
        <br />
        Email: <A href={`mailto:${LEGAL.email}`}>{LEGAL.email}</A>
      </P>
    )
  }
]

export default function TermsPage () {
  return (
    <>
      <Navbar />
      <LegalLayout
        title='Terms & Conditions'
        intro={`The terms that apply when you use our website or buy products and services from ${LEGAL.brand}.`}
        sections={sections}
        other={{ label: 'Privacy Policy', href: '/privacy-policy' }}
      />
      <Footer />
    </>
  )
}
