import type { Metadata } from "next";
import { LeadForm } from "@/components/commercial";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Hashwift about your food business, the Lahore pilot or a privacy request.",
  alternates: { canonical: "/contact" },
};
export default function Contact() {
  return (
    <main id="main" className="wrap contact-page">
      <div>
        <span className="eyebrow green">LET’S TALK ABOUT YOUR KITCHEN</span>
        <h1>
          A real conversation.
          <br />
          <span className="muted">A better way to order.</span>
        </h1>
        <p>
          Questions about the pilot, your menu or how Hashwift could fit your
          business? We’d love to hear from you.
        </p>
        <div className="contact-details">
          <div>
            <span>EMAIL</span>
            <a href="mailto:hello@gethashwift.com">hello@gethashwift.com ↗</a>
          </div>
          <div>
            <span>BUSINESS</span>
            <strong>
              {process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME ||
                "Hashwift · food ordering software"}
            </strong>
          </div>
          <div>
            <span>INITIAL SERVICE AREA</span>
            <strong>
              {process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ||
                "Lahore, Pakistan · remote onboarding"}
            </strong>
          </div>
          <div>
            <span>SUPPORT</span>
            <strong>
              {process.env.NEXT_PUBLIC_SUPPORT_HOURS ||
                "Email inquiries welcome anytime. Calls by appointment."}
            </strong>
          </div>
          <div>
            <span>PRIVACY & DATA DELETION</span>
            <a href="/privacy#deletion">How to make a data request ↗</a>
          </div>
        </div>
      </div>
      <div className="form-card">
        <h3>What’s on your mind?</h3>
        <p className="small">Tell us a little about yourself.</p>
        <LeadForm
          contact
          connected={
            !!(
              process.env.LEAD_WEBHOOK_URL &&
              process.env.LEAD_WEBHOOK_SECRET &&
              process.env.UPSTASH_REDIS_REST_URL &&
              process.env.UPSTASH_REDIS_REST_TOKEN
            )
          }
        />
      </div>
    </main>
  );
}
