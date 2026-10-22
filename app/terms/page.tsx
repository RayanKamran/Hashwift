import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for the Hashwift website, interactive preview and prospective merchant pilot.",
  alternates: { canonical: "/terms" },
};
export default function Terms() {
  return (
    <main id="main" className="wrap legal">
      <span className="eyebrow green">CLEAR EXPECTATIONS</span>
      <h1>Terms of Service</h1>
      <p className="small">Last updated: 22 October 2026</p>
      <p className="lead">
        These terms govern use of the Hashwift website and product preview. A
        live merchant service requires a separate written agreement.
      </p>
      <h2>1. Scope and acceptance</h2>
      <p>
        By using this website, you agree to use it lawfully and in accordance
        with these terms. Hashwift introduces proposed food-ordering software
        for businesses. If you apply on behalf of a business, you confirm that
        you have authority to share its details. Inquiries do not create a paid
        subscription or guarantee pilot acceptance.
      </p>
      <h2>2. Demonstrations and availability</h2>
      <p>
        All demo customers, orders, prices and notifications are illustrative.
        The preview does not send WhatsApp messages, take real food orders,
        settle payments or dispatch riders. Features described for a future
        service remain subject to technical availability and an agreed
        onboarding scope. We may update the preview and correct errors without
        notice.
      </p>
      <h2>3. Pilot and subscriptions</h2>
      <p>
        The proposed 30-day pilot is subject to eligibility and capacity. The
        start date, included features, setup responsibilities and support
        arrangements must be agreed before activation. No paid plan is activated
        automatically by submitting a form. Displayed launch prices are
        indicative; taxes, Meta messaging charges, payment fees and delivery
        expenses may be additional. Scale usage allowances, overages, billing,
        cancellation and refund terms must be stated in the signed merchant
        agreement before any charge.
      </p>
      <h2>4. Merchant responsibilities</h2>
      <p>
        A merchant remains responsible for its menu, prices, allergens, food
        safety, licences, inventory, delivery promises, taxes, refunds and
        customer service. Merchants must verify AI-generated carts and payment
        status where necessary, obtain lawful messaging permissions, secure
        their accounts and supply accurate business information. Sensitive or
        ambiguous requests need human review.
      </p>
      <h2>5. Customer orders and payments</h2>
      <p>
        In a future live integration, food purchases are between the customer
        and the merchant. Hashwift is a software provider, not the food seller,
        bank or courier. A receipt screenshot is not proof that funds have
        settled. A copied delivery address does not book or pay a rider.
        Customers should direct order changes, fulfilment questions and refunds
        to the merchant.
      </p>
      <h2>6. Meta and third-party services</h2>
      <p>
        Hashwift is independent of Meta, WhatsApp, banks and delivery providers.
        Official API access, number coexistence, approved templates and
        messaging limits depend on third-party eligibility and policies. We
        cannot guarantee account approval, uninterrupted access or freedom from
        restrictions. Merchants must not send spam, bypass opt-in or use the
        service for prohibited goods or activities.
      </p>
      <h2>7. Acceptable use and intellectual property</h2>
      <p>
        Do not interfere with the website, introduce malicious code, impersonate
        another person or access data without permission. The Hashwift branding
        and website materials are protected by applicable intellectual-property
        law. Third-party names and marks belong to their owners. You retain
        rights to your submitted business information and grant only the
        permission necessary to handle your inquiry.
      </p>
      <h2>8. Privacy and confidentiality</h2>
      <p>
        Our <a href="/privacy">Privacy Policy</a> describes website inquiry
        handling. Do not upload confidential customer records or bank statements
        through this demo. Before live merchant data is processed, the parties
        must agree their roles, security safeguards, subprocessors, retention
        and deletion arrangements in writing.
      </p>
      <h2>9. Limitations</h2>
      <p>
        The preview is offered as available, without a promise of revenue,
        savings, error-free automation or fitness for a particular kitchen.
        Calculator outputs are estimates based on the inputs and stated
        assumptions. To the extent permitted by applicable law, we are not
        responsible for indirect losses from reliance on the preview. Nothing
        here excludes liability or rights that cannot lawfully be excluded,
        including applicable consumer protections.
      </p>
      <h2>10. Suspension, changes and disputes</h2>
      <p>
        We may restrict abusive use or suspend the website for security or
        maintenance. Changes to these website terms will be published with an
        updated date. Merchant service termination, data export, dispute forum
        and governing law must be agreed in the merchant contract; these terms
        do not remove mandatory rights under applicable law. Please contact us
        first to try to resolve a concern.
      </p>
      <h2>11. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:hello@gethashwift.com">hello@gethashwift.com</a>. The
        contracting business’s legal name and registered address will be
        provided before a live subscription or pilot agreement is concluded.
      </p>
    </main>
  );
}
