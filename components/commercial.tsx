"use client";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Mail,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/button";
import { calculateSavings, plans, money, type Currency } from "@/lib/site";
export function Commercial() {
  const [currency, setCurrency] = useState<Currency>("PKR");
  const [orders, setOrders] = useState(30);
  const [aov, setAov] = useState(1200);
  const [commission, setCommission] = useState(27);
  const result = calculateSavings(orders, aov, commission, currency);
  return (
    <>
      <section className="section savings" id="compare">
        <div className="section-heading">
          <span className="eyebrow green">YOUR ORDERS. YOUR MARGINS.</span>
          <h2>
            Keep the flavour.
            <br />
            <span className="muted">Keep more of the profit.</span>
          </h2>
          <p>
            A flat subscription, instead of a cut of every meal.
            <br />
            See what that could look like for your kitchen.
          </p>
        </div>
        <div className="calculator">
          <div className="calc-controls">
            <div className="row">
              <h3>Let’s do the maths.</h3>
              <div className="currency" aria-label="Currency">
                {(["PKR", "USD"] as const).map((c) => (
                  <button
                    key={c}
                    aria-pressed={currency === c}
                    onClick={() => {
                      setCurrency(c);
                      setAov(c === "PKR" ? 1200 : 12);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <label className="slider-label" htmlFor="orders">
              Orders per day <strong>{orders}</strong>
            </label>
            <input
              id="orders"
              type="range"
              min="5"
              max="150"
              value={orders}
              onChange={(e) => setOrders(+e.target.value)}
            />
            <div className="range-label">
              <span>5 orders</span>
              <span>150 orders</span>
            </div>
            <label className="slider-label" htmlFor="aov">
              Average order value <strong>{money(aov, currency)}</strong>
            </label>
            <input
              id="aov"
              type="range"
              min={currency === "PKR" ? 300 : 3}
              max={currency === "PKR" ? 5000 : 50}
              step={currency === "PKR" ? 100 : 1}
              value={aov}
              onChange={(e) => setAov(+e.target.value)}
            />
            <label className="slider-label" htmlFor="commission">
              Aggregator commission <strong>{commission}%</strong>
            </label>
            <input
              id="commission"
              type="range"
              min="25"
              max="30"
              value={commission}
              onChange={(e) => setCommission(+e.target.value)}
            />
            <p className="tiny">
              Illustration over 30 days. Excludes delivery, tax, Meta messaging
              fees and payment charges. Channels may provide different services.
            </p>
          </div>
          <div className="calc-result">
            <span className="eyebrow">
              POTENTIAL MONTHLY COMMISSION SAVINGS
            </span>
            <strong className="saving-number">
              {money(result.savings, currency)}
            </strong>
            <span className="saving-note">
              <TrendingUp size={15} /> More room for the things you love making.
            </span>
            <div className="calc-breakdown">
              <p>
                <span>Aggregator commission</span>
                <b>{money(result.commissionCost, currency)}</b>
              </p>
              <p>
                <span>
                  Hashwift {result.plan}
                  {result.needsQuote ? " from" : ""}
                </span>
                <b>{money(result.fee, currency)}</b>
              </p>
              {currency === "PKR" && (
                <p>
                  <span>Phone operator benchmark</span>
                  <b>Rs. 30,000</b>
                </p>
              )}
            </div>
            <p className="tiny">
              {result.needsQuote
                ? "Above 1,200 orders: Scale pricing is indicative. Request an allowance and quote for your volume."
                : "Based on the plan that covers your estimated monthly orders."}{" "}
              Operator cost is a separate comparison, not added to savings.
            </p>
            <a className="text-link" href="#book-demo">
              Put your margins back on the menu <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section id="pricing" className="section pricing">
        <div className="section-heading centered">
          <span className="eyebrow green">
            SIMPLE PLANS. ZERO ORDER COMMISSION.
          </span>
          <h2>
            A small subscription.
            <br />
            <span className="muted">A big weight off your kitchen.</span>
          </h2>
          <p>Start with what you need. Grow when you’re ready.</p>
          <div className="currency" aria-label="Pricing currency">
            {(["PKR", "USD"] as const).map((c) => (
              <button
                key={c}
                aria-pressed={currency === c}
                onClick={() => {
                  setCurrency(c);
                  setAov(c === "PKR" ? 1200 : 12);
                }}
              >
                {c === "PKR" ? "PKR · Pakistan" : "USD · International"}
              </button>
            ))}
          </div>
        </div>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <article
              className={`price-card ${i === 1 ? "featured" : ""}`}
              key={p.name}
            >
              {i === 1 && (
                <span className="popular">THE KITCHEN FAVOURITE</span>
              )}
              <span className="eyebrow">0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="price">
                {money(currency === "PKR" ? p.pkr : p.usd, currency)}
                <span>/ month</span>
              </div>
              <Button variant={i === 1 ? "default" : "outline"} asChild>
                <a href="#book-demo">
                  Start free pilot <ArrowUpRight size={16} />
                </a>
              </Button>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={15} />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Indicative launch pricing. Meta messaging fees, taxes and delivery
          charges are separate. Scale allowances and paid terms are agreed
          before activation. No card required for the pilot.
        </p>
      </section>
    </>
  );
}
export function LeadForm({
  contact = false,
  connected = false,
}: {
  contact?: boolean;
  connected?: boolean;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "prepared" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [mail, setMail] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (!connected) {
      const body = Object.entries(data)
        .filter(([k]) => k !== "website" && k !== "consent")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      setMail(
        `mailto:hello@gethashwift.com?subject=${encodeURIComponent(contact ? "Hashwift inquiry" : "Hashwift pilot application")}&body=${encodeURIComponent(body)}`,
      );
      setStatus("prepared");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind: contact ? "contact" : "pilot" }),
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.error || "Unable to submit. Please try again.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }
  if (status === "sent" || status === "prepared")
    return (
      <div className="form-confirm" role="status">
        <CheckCircle2 size={42} />
        <span className="eyebrow green">
          {status === "sent" ? "YOU’RE ON THE LIST" : "ONE LAST STEP"}
        </span>
        <h3>
          {status === "sent"
            ? "Your next chapter starts here."
            : "Your inquiry is ready."}
        </h3>
        <p>
          {status === "sent"
            ? "Thanks for reaching out. The Hashwift team will contact you about the next steps."
            : "Open your email app to review and send your details to hello@gethashwift.com. Your inquiry has not been sent yet."}
        </p>
        {status === "prepared" && (
          <Button asChild>
            <a href={mail}>
              Open email draft <Mail size={16} />
            </a>
          </Button>
        )}
        <button className="text-button" onClick={() => setStatus("idle")}>
          Back to form
        </button>
      </div>
    );
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          {contact ? "Your name" : "Business name"}
          <input
            name="business"
            autoComplete="organization"
            placeholder={contact ? "Your full name" : "e.g. The Burger Lab"}
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label>
          City / area
          <select name="area" required defaultValue="">
            <option disabled value="">
              Select your area
            </option>
            {[
              "DHA, Lahore",
              "Gulberg, Lahore",
              "Johar Town, Lahore",
              "Other, Lahore",
              "Outside Lahore",
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Business type
          <select name="type" required defaultValue="">
            <option disabled value="">
              What’s cooking?
            </option>
            {[
              "Cloud kitchen",
              "Takeaway / burger joint",
              "Home bakery",
              "Tiffin / meal prep",
              "Other",
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Daily order volume
          <select name="volume" required defaultValue="">
            <option disabled value="">
              Select daily orders
            </option>
            {["0–10", "11–30", "31–60", "61–150", "150+"].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label className="full">
          WhatsApp number
          <input
            name="phone"
            autoComplete="tel"
            type="tel"
            placeholder="+92 300 1234567"
            pattern="\+?[0-9 ()\-]{9,20}"
            required
            maxLength={21}
          />
        </label>
        {contact && (
          <label className="full">
            How can we help?
            <textarea
              name="message"
              placeholder="Tell us about your kitchen or your question…"
              required
              maxLength={2000}
            />
          </label>
        )}
      </div>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>
          I agree to be contacted about this inquiry and have read the{" "}
          <a href="/privacy">Privacy Policy</a>.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending"
          ? "Sending…"
          : connected
            ? contact
              ? "Send inquiry"
              : "Apply for the free pilot"
            : "Prepare my inquiry"}
        <ArrowRight size={16} />
      </Button>
      <p className="tiny">
        {connected
          ? "No spam. No credit card. Just a conversation about your kitchen."
          : "This opens a ready-to-send email draft after you review your details."}
      </p>
    </form>
  );
}
