import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hashwift handles website inquiries and planned WhatsApp ordering data, including deletion requests.",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <main id="main" className="wrap legal">
      <span className="eyebrow green">YOUR DATA. YOUR TRUST.</span>
      <h1>Privacy Policy</h1>
      <p className="small">Last updated: 22 October 2026</p>
      <p className="lead">
        This notice explains the information handled through the Hashwift
        website and the safeguards required for a merchant pilot.
      </p>
      <p className="notice">
        The interactive website demo uses fictional orders and runs in your
        browser. It does not connect to WhatsApp or upload receipts. Live
        merchant integrations require separate onboarding and agreed
        data-processing terms.
      </p>
      <h2>1. Who we are and how to contact us</h2>
      <p>
        Hashwift is a food-ordering software project initially serving Lahore,
        Pakistan. For this website’s inquiries, contact{" "}
        <a href="mailto:hello@gethashwift.com">hello@gethashwift.com</a>. The
        contracting entity and its business address must be identified in the
        merchant agreement before any live service is activated.
      </p>
      <h2>2. Information this website handles</h2>
      <p>
        The inquiry forms ask for a business or contact name, area, business
        type, order volume and WhatsApp number, plus your message where
        provided. In email-draft mode, these details stay in the form until you
        choose to open your email application. They are sent only when you send
        that email. If direct submission is enabled, the form sends these fields
        to our configured inquiry processor over HTTPS. Hosting providers may
        process request metadata such as IP address, time, browser and error
        information to deliver and secure the site.
      </p>
      <h2>3. Purpose and lawful basis</h2>
      <p>
        We use inquiries to answer your questions, assess pilot fit and take
        steps you request before entering a contract. Security and abuse
        prevention support our legitimate interest in operating the website. We
        ask your permission to contact you about an inquiry; promotional
        messaging requires a separate opt-in. We do not sell contact information
        or use it for unrelated advertising.
      </p>
      <h2>4. WhatsApp Cloud API and webhook processing</h2>
      <p>
        If you later activate a merchant pilot, the intended integration uses
        the official Meta WhatsApp Business Platform. Customer messages and
        events may arrive through authenticated webhooks and include phone
        numbers, message identifiers, message text, order selections, delivery
        details and receipt attachments. These data are used to construct
        orders, provide agreed customer replies and update the merchant’s
        kitchen queue. This website has no live WhatsApp webhook. Before
        activation, the merchant must receive a description of the actual
        processing, retention, subprocessors and security controls.
      </p>
      <h2>5. Merchant and customer responsibilities</h2>
      <p>
        Merchants determine the purposes of their customer ordering data and
        must provide appropriate notices, obtain required permissions and honour
        customer requests. Hashwift would process that data on documented
        merchant instructions under a data-processing agreement. Meta
        independently handles information under its own terms and policies. A
        merchant’s food fulfilment, payment and delivery practices are covered
        by that merchant’s notices.
      </p>
      <h2>6. AI and payment information</h2>
      <p>
        The website’s AI conversation is scripted; no message is sent to an AI
        provider. A live AI assistant may process only information necessary for
        an agreed ordering task after its provider and terms are disclosed.
        Sensitive queries should be routed to a person. Payment screenshots may
        expose financial details; merchants should minimise their collection and
        verify settled funds separately. Hashwift is not a bank or payment
        settlement service.
      </p>
      <h2>7. Security and phone number encryption</h2>
      <p>
        Production website traffic should use HTTPS. Live merchant deployment
        requires access restrictions, encrypted storage for phone numbers and
        other customer data, protected keys, verified webhook signatures and a
        documented incident process. These are activation requirements, not a
        claim that this standalone preview already stores or encrypts WhatsApp
        records. Do not submit passwords, full card numbers or sensitive medical
        information through our forms.
      </p>
      <h2>8. Retention and sharing</h2>
      <p>
        Inquiry records should be kept only for the inquiry and any resulting
        relationship, with inactive prospect records reviewed for deletion
        within 12 months. A live merchant agreement must specify retention for
        messages, orders, receipts and backups. Necessary hosting, email and
        inquiry-processing providers may process information to deliver those
        services. Disclosures may also be required by law. Provider locations
        and international transfer safeguards, including appropriate contractual
        protections where required, must be disclosed before a live pilot
        processes customer data.
      </p>
      <h2 id="deletion">9. Access, correction and data deletion</h2>
      <p>
        Email{" "}
        <a href="mailto:hello@gethashwift.com?subject=Data%20deletion%20request">
          hello@gethashwift.com
        </a>{" "}
        with the subject “Data deletion request”. Include the phone number or
        email used, the merchant name if relevant, and enough context to locate
        the record. Do not send identity documents unless requested through an
        appropriate secure channel. We may take proportionate steps to confirm
        ownership before acting.
      </p>
      <p>
        We aim to acknowledge requests within seven days and respond within
        applicable legal time limits; where GDPR applies, the usual response
        period is one month, subject to permitted extensions. Rights may include
        access, correction, erasure, restriction, portability, objection and
        withdrawal of consent. Some records may need to be retained to meet
        legal obligations or resolve disputes. Where a merchant controls the
        record, we will direct or forward the request to that merchant as
        appropriate. You may complain to the relevant supervisory authority
        where available under law.
      </p>
      <h2>10. Cookies, children and changes</h2>
      <p>
        This site does not add advertising trackers, analytics cookies or
        persistent demo storage. Your email provider has its own privacy
        practices. The service targets adult business operators, not children.
        We may revise this notice as the product changes; material processing
        changes must be communicated before they apply. The date above
        identifies this version.
      </p>
      <h2>11. Platform rules</h2>
      <p>
        Any live integration must follow applicable Meta Platform Terms,
        WhatsApp Business messaging policies and data-protection law. Use of
        official APIs does not by itself certify legal compliance or guarantee
        Meta business verification.
      </p>
    </main>
  );
}
