import LegalLayout, { A, LEGAL, P, Sub, UL } from '../layout/LegalLayout'
import type { LegalSection } from '../layout/LegalLayout'
import Navbar from '../layout/Navbar'

const sections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <P>
          {LEGAL.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
          &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains
          what personal information we collect when you visit our website,
          contact us or use our products and services, how we use it, and the
          choices you have.
        </P>
        <P>
          We supply and service water purification systems, spare parts and
          related equipment for homes, businesses and industry from our
          locations in {LEGAL.locations}, Tamil Nadu. By using this website or
          sending us an enquiry, you accept the practices described here. If you
          do not agree, please do not submit your personal information.
        </P>
      </>
    )
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    body: (
      <>
        <Sub>Information you give us</Sub>
        <UL>
          <li>
            <strong>Contact details:</strong> your name, phone number and email
            address.
          </li>
          <li>
            <strong>Location:</strong> the branch or area nearest to you.
          </li>
          <li>
            <strong>Your enquiry:</strong> the product or service you are
            interested in and the message you write, which may include details
            about your water source, daily usage or equipment.
          </li>
          <li>
            <strong>Our conversations:</strong> records of calls, emails and
            WhatsApp messages between you and us.
          </li>
          <li>
            <strong>Customer records:</strong> if you buy from us or use our
            services, your delivery or installation address, equipment details,
            service and AMC history, and invoices.
          </li>
        </UL>

        <Sub>Information collected automatically</Sub>
        <P>
          When you visit our website, standard technical information may be
          recorded by our hosting provider or by analytics tools, if we use
          them. This can include your IP address, browser and device type, the
          pages you view, and the date and time of your visit. We use it to keep
          the website secure and working properly and to understand how it is
          used.
        </P>

        <Sub>Information we do not ask for</Sub>
        <P>
          Our enquiry form does not ask for payment card or bank details. Please
          do not include passwords, identity numbers or other sensitive
          information in your message.
        </P>
      </>
    )
  },
  {
    id: 'how-we-use',
    title: 'How we use your information',
    body: (
      <>
        <P>We use your information to:</P>
        <UL>
          <li>respond to your enquiries and prepare quotations;</li>
          <li>
            recommend suitable systems, spare parts or services based on your
            water source and requirements;
          </li>
          <li>
            arrange installation, commissioning, servicing, repairs, spare parts
            supply and Annual Maintenance Contracts;
          </li>
          <li>
            contact you by phone, WhatsApp or email about your enquiry, order or
            service;
          </li>
          <li>keep records, issue invoices and handle warranty claims;</li>
          <li>
            maintain the security of our website and improve how it works; and
          </li>
          <li>meet our legal, tax and accounting obligations.</li>
        </UL>
        <P>
          We will only send you promotional messages if you have agreed to
          receive them, and you can ask us to stop at any time.
        </P>
      </>
    )
  },
  {
    id: 'basis',
    title: 'Why we may use your information',
    body: (
      <>
        <P>We rely on one or more of the following:</P>
        <UL>
          <li>
            <strong>Your consent,</strong> for example when you tick the consent
            box and submit our enquiry form.
          </li>
          <li>
            <strong>Your request,</strong> where we need your information to
            respond to you or to provide a product or service you asked for.
          </li>
          <li>
            <strong>Legal obligations,</strong> such as tax and accounting
            requirements.
          </li>
        </UL>
        <P>
          Where we rely on your consent, you can withdraw it at any time by
          contacting us. Withdrawing consent does not affect what we did before
          you withdrew it, and it may mean we can no longer respond to your
          enquiry or provide a service that depends on that information.
        </P>
      </>
    )
  },
  {
    id: 'third-party-services',
    title: 'WhatsApp, maps and other third-party services',
    body: (
      <>
        <UL>
          <li>
            <strong>WhatsApp.</strong> Our WhatsApp buttons open WhatsApp with a
            message ready to send. Messages you send through WhatsApp are
            handled by WhatsApp under its own terms and privacy policy.
          </li>
          <li>
            <strong>Google Maps.</strong> Our contact page shows an embedded
            Google Map and directions links. When it loads, Google may collect
            information as described in Google&apos;s privacy policy.
          </li>
          <li>
            <strong>Hosting and technical providers.</strong> Companies that
            host our website or process enquiries on our behalf may handle your
            information, only as needed to provide those services to us.
          </li>
        </UL>
        <P>
          We do not control how these third parties use information. Please read
          their privacy policies.
        </P>
      </>
    )
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    body: (
      <>
        <P>
          Our website may use cookies or similar technologies that it needs in
          order to work. Third-party services such as embedded maps may also set
          their own cookies. You can control or delete cookies in your browser
          settings, but blocking some of them may stop parts of the website from
          working properly.
        </P>
        <P>
          If we add analytics or advertising tools in future, we will update
          this policy.
        </P>
      </>
    )
  },
  {
    id: 'sharing',
    title: 'Who we share your information with',
    body: (
      <>
        <P>We do not sell your personal information. We may share it with:</P>
        <UL>
          <li>
            our own team and branches in {LEGAL.locations} who handle your
            enquiry, installation or service;
          </li>
          <li>
            service providers who help us run our website, send messages or
            deliver goods, only as needed to do so;
          </li>
          <li>
            manufacturers or suppliers, where needed for the warranty or service
            of a product you bought;
          </li>
          <li>professional advisers such as accountants and legal advisers;</li>
          <li>
            government or law-enforcement authorities, where the law requires
            it; and
          </li>
          <li>
            a buyer or successor, if our business is sold or restructured.
          </li>
        </UL>
      </>
    )
  },
  {
    id: 'retention',
    title: 'How long we keep your information',
    body: (
      <P>
        We keep personal information only for as long as we need it for the
        purpose it was collected, for example to answer your enquiry, to provide
        warranty, AMC and service support, and to meet legal, tax and accounting
        requirements. When it is no longer needed, we delete or anonymise it.
      </P>
    )
  },
  {
    id: 'security',
    title: 'How we protect your information',
    body: (
      <>
        <P>
          We take reasonable steps to protect your information from loss, misuse
          and unauthorised access, including limiting who can see it. However,
          no method of sending data over the internet or storing it
          electronically is completely secure, so we cannot guarantee absolute
          security.
        </P>
        <P>
          If you believe your information has been misused, please contact us
          straight away.
        </P>
      </>
    )
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    body: (
      <>
        <P>You can ask us to:</P>
        <UL>
          <li>tell you what personal information we hold about you;</li>
          <li>correct information that is wrong or out of date;</li>
          <li>delete your information, subject to what we must keep by law;</li>
          <li>
            stop contacting you or stop using your information where you have
            given consent; and
          </li>
          <li>look into a complaint or concern you have.</li>
        </UL>
        <P>
          To do any of these, contact us using the details at the end of this
          page. We may need to confirm your identity first, and we will reply
          within a reasonable time. Nothing in this policy limits the rights you
          have under applicable Indian law, including the Information Technology
          Act, 2000 and the Digital Personal Data Protection Act, 2023 and the
          rules made under it, as they come into force.
        </P>
      </>
    )
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <P>
        Our website is not intended for children under 18, and we do not
        knowingly collect their personal information. If you are a parent or
        guardian and believe a child has given us information, please contact us
        and we will delete it.
      </P>
    )
  },
  {
    id: 'other-links',
    title: 'Links to other websites',
    body: (
      <P>
        Our website may link to other websites. We are not responsible for their
        content or privacy practices, so please read their policies before
        sharing your information.
      </P>
    )
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <P>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page shows when it last changed.
        If you keep using our website after an update, you accept the updated
        policy. Please also see our <A href='/terms'>Terms &amp; Conditions</A>.
      </P>
    )
  },
  {
    id: 'contact',
    title: 'Contact us and grievances',
    body: (
      <>
        <P>
          For questions about this policy, to use your rights, or to raise a
          grievance, write to us:
        </P>
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
          <br />
          Grievance contact: {LEGAL.grievanceOfficer}
        </P>
      </>
    )
  }
]

export default function PrivacyPolicyPage () {
  return (
    <>
      <Navbar />
      <LegalLayout
        title='Privacy Policy'
        intro={`How ${LEGAL.brand} collects, uses and protects your personal information.`}
        sections={sections}
        other={{ label: 'Terms & Conditions', href: '/terms' }}
      />
    </>
  )
}
