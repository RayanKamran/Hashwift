import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChefHat,
  Clock3,
  Flame,
  Heart,
  Layers3,
  MessageCircle,
  MessageSquareText,
  MousePointer2,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  UtensilsCrossed,
  Wallet,
  X,
} from "lucide-react";
import { Simulator } from "@/components/simulator";
import { Commercial, LeadForm } from "@/components/commercial";
import { Button } from "@/components/ui/button";
const faqs = [
  [
    "Can I keep my existing WhatsApp number?",
    "We assess your number during onboarding. Eligible WhatsApp Business app accounts may use Meta’s coexistence onboarding, subject to account, region and provider availability. If it is unavailable, we can plan a dedicated ordering line or an agreed migration. Nothing changes without your approval.",
  ],
  [
    "Do my customers have to download an app?",
    "No. The proposed ordering experience happens in WhatsApp, with interactive menus and forms. Customers can continue using the app they already know.",
  ],
  [
    "What about Roman Urdu and custom instructions?",
    "The planned bilingual assistant turns mixed English and Roman Urdu into a cart for confirmation. Prices come from your configured menu. Uncertain instructions, allergies, complaints and custom cake or catering requests go to a person. The preview above uses scripted sample data.",
  ],
  [
    "Is this official Meta technology? Could my number be banned?",
    "Hashwift is designed for the official WhatsApp Business Platform (Cloud API), not unofficial browser automation. Hashwift is independent of Meta. Access remains subject to Meta approval, opt-in, template rules and messaging policies; no provider can guarantee that an account will never be restricted.",
  ],
  [
    "Does a bank screenshot mean an order is paid?",
    "No. A receipt is captured and attached to the order for review. Your team must verify the actual bank transaction before approving payment. Cash-on-delivery orders are labelled separately.",
  ],
  [
    "What happens during the 30-day pilot?",
    "We review your menu, ordering process and number eligibility, then agree the pilot scope with you. The planned pilot includes done-for-you setup and owner training. There is no automatic paid conversion; pricing and availability are confirmed before activation.",
  ],
  [
    "Is the WhatsApp bot live on this website?",
    "The on-page demo is an interactive product preview, using sample orders. It does not connect to WhatsApp, process real customer messages or verify bank payments. Contact us to discuss pilot availability.",
  ],
];
export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap">
        <a href="#book-demo" className="launch-pill">
          <span className="status-dot" />
          Made for the rush. Built for your kitchen.
          <ArrowUpRight size={13} />
        </a>
        <h1>
          Turn WhatsApp chaos
          <br />
          into <span>your next order.</span>
        </h1>
        <p className="hero-description">
          The orders keep coming. Your kitchen keeps moving.
          <br className="desktop" /> Turn chats, Roman Urdu messages and payment
          receipts into
          <br className="desktop" /> organised orders — without losing your
          personal touch.
        </p>
        <div className="hero-actions">
          <Button asChild>
            <a href="#book-demo">
              Start your 30-day free pilot <ArrowUpRight size={17} />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#demo">
              <Play size={14} />
              See it in action
            </a>
          </Button>
        </div>
        <div className="hero-proof">
          <span>
            <Check size={13} /> No app for your customers
          </span>
          <span>
            <Check size={13} /> Zero order commission
          </span>
          <span>
            <Check size={13} /> You’re always in control
          </span>
        </div>
        <Simulator />
        <div className="built-for">
          <span className="eyebrow">
            BIG AMBITIONS.
            <br />
            SMALL KITCHENS WELCOME.
          </span>
          <span>
            <Flame />
            Cloud kitchens
          </span>
          <span>
            <Store />
            Takeaways
          </span>
          <span>
            <Heart />
            Home bakeries
          </span>
          <span>
            <UtensilsCrossed />
            Meal prep brands
          </span>
        </div>
      </section>
      <section id="how-it-works" className="section wrap workflow">
        <div className="section-heading">
          <span className="eyebrow green">
            FROM “BHAI, MENU?” TO “ORDER READY.”
          </span>
          <h2>
            You handle the food.
            <br />
            <span className="muted">We’ll handle the back-and-forth.</span>
          </h2>
          <p>
            Your customers stay on WhatsApp. You get a clear order.
            <br />
            And everyone gets their evening back.
          </p>
        </div>
        <div className="steps">
          {[
            [
              MessageCircle,
              "01",
              "They message.",
              "A craving, a chat, or a late-night “menu please?” It starts where your customers already are.",
            ],
            [
              Sparkles,
              "02",
              "Hashwift organises.",
              "Menu choices, quantities, payment and delivery details become one clear order.",
            ],
            [
              ChefHat,
              "03",
              "Your kitchen gets cooking.",
              "Accept the order, update the status, and hand the address to your rider. All in a few taps.",
            ],
          ].map(([Icon, n, t, d]) => {
            const I = Icon as typeof MessageCircle;
            return (
              <article key={String(n)}>
                <div className="step-top">
                  <I size={23} />
                  <span>{String(n)}</span>
                </div>
                <h3>{String(t)}</h3>
                <p>{String(d)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section wrap before-after">
        <div className="before">
          <span className="eyebrow">SOUND LIKE YOUR 8 PM RUSH?</span>
          <h3>
            Great food.
            <br />A hundred unread messages.
          </h3>
          {[
            "The same menu JPEG. Sent for the 50th time.",
            "One order scattered across four voice notes.",
            "“Sorry, just saw this.” Another customer lost.",
            "Customer history? Somewhere in the chat.",
          ].map((t) => (
            <p key={t}>
              <X size={15} />
              {t}
            </p>
          ))}
        </div>
        <div className="after">
          <span className="eyebrow green">LET’S CHANGE THAT.</span>
          <h3>
            The same kitchen.
            <br />A much calmer kind of busy.
          </h3>
          {[
            "A menu customers can actually order from.",
            "One organised ticket with every detail.",
            "Timely replies and simple kitchen updates.",
            "Customer relationships that belong to you.",
          ].map((t) => (
            <p key={t}>
              <Check size={15} />
              {t}
            </p>
          ))}
        </div>
      </section>
      <section id="features" className="section wrap">
        <div className="section-heading">
          <span className="eyebrow green">MADE FOR HOW YOU REALLY WORK</span>
          <h2>
            All the right ingredients.
            <br />
            <span className="muted">None of the extra work.</span>
          </h2>
        </div>
        <div className="bento">
          <article className="feature feature-wide">
            <div className="feature-copy">
              <span className="feature-icon">
                <Layers3 />
              </span>
              <h3>A menu that takes the order.</h3>
              <p>
                Sizes, extras, crusts and cravings. Native WhatsApp Flows let
                customers build their meal right inside the chat.
              </p>
              <a href="#demo">
                Try the interactive menu <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mini-menu">
              <span className="eyebrow">MAKE IT YOURS</span>
              <div className="pizza-icon">🍕</div>
              <strong>Your pizza. Your rules.</strong>
              <div>
                <span>Regular</span>
                <span className="selected">
                  Large <Check size={12} />
                </span>
              </div>
              <p>
                <Check size={13} /> Extra cheese <b>+ Rs. 200</b>
              </p>
            </div>
          </article>
          <article className="feature ai-feature">
            <span className="feature-icon purple">
              <Sparkles />
            </span>
            <h3>Speaks your customer’s language.</h3>
            <p>
              English, Roman Urdu, and everything in between. A planned
              Claude-powered assistant, with menu-based prices and human
              handoff.
            </p>
            <div className="language-bubble">
              “Bhai 2 beef smash, no jalapenos”
              <span>
                <Sparkles size={12} /> 2 items. Special instruction saved.
              </span>
            </div>
          </article>
          <article className="feature">
            <span className="feature-icon">
              <Wallet />
            </span>
            <h3>
              Local payments.
              <br />
              Real-world flexibility.
            </h3>
            <p>
              Cash on delivery or Raast / bank transfer receipts, attached to
              the right order. You verify the funds and approve.
            </p>
            <div className="payment-methods">
              <span>Raast ↗</span>
              <span>Bank transfer</span>
              <span>COD</span>
            </div>
          </article>
          <article className="feature">
            <span className="feature-icon">
              <MousePointer2 />
            </span>
            <h3>
              One tap. Everyone’s
              <br />
              on the same page.
            </h3>
            <p>
              Kitchen status updates, customer notifications and a formatted
              address ready for your Bykea, InDrive or own rider.
            </p>
            <div className="progress-track">
              <span>
                <Check size={11} /> Accepted
              </span>
              <ArrowRight size={12} />
              <span className="green">In kitchen</span>
            </div>
          </article>
          <article className="feature">
            <span className="feature-icon">
              <Heart />
            </span>
            <h3>
              “The usual?”
              <br />
              Already remembered.
            </h3>
            <p>
              Saved addresses, favourite meals and easy repeat orders. Make
              every regular feel like a regular.
            </p>
            <div className="reorder">
              <div className="customer-avatar">AK</div>
              <span>
                Welcome back, Ahmed.
                <small>Your favourites, one tap away.</small>
              </span>
              <ArrowRight size={15} />
            </div>
          </article>
        </div>
        <div className="platform-note">
          <ShieldCheck size={17} />
          <span>Designed for the official Meta WhatsApp Cloud API</span>
          <span className="divider-dot">·</span>
          <span>You own the customer relationship</span>
        </div>
      </section>
      <div className="wrap">
        <Commercial />
      </div>
      <section className="section wrap pilot-section" id="book-demo">
        <div className="pilot-copy">
          <span className="launch-pill">
            <span className="status-dot" />
            LAHORE PILOT · APPLICATIONS OPEN
          </span>
          <h2>
            Your next busy night
            <br />
            could feel <span className="green">different.</span>
          </h2>
          <p>
            We’re inviting 5 food businesses in Lahore to a 30-day, done-for-you
            pilot. Bring your menu. We’ll work through the rest together.
          </p>
          <ul>
            <li>
              <Check />
              30 days to find your new flow
            </li>
            <li>
              <Check />
              Personal menu setup & onboarding
            </li>
            <li>
              <Check />
              No credit card. No automatic subscription.
            </li>
          </ul>
          <a href="mailto:hello@gethashwift.com" className="text-link">
            Prefer to talk first? hello@gethashwift.com{" "}
            <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="form-card">
          <div className="row">
            <h3>Let’s meet your kitchen.</h3>
            <ShoppingBag size={21} />
          </div>
          <p className="small">A few details. A more organised tomorrow.</p>
          <LeadForm
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
      </section>
      <section className="section wrap faq" id="faq">
        <div className="section-heading">
          <span className="eyebrow green">
            A FEW THINGS YOU MIGHT BE WONDERING
          </span>
          <h2>
            Good questions.
            <br />
            <span className="muted">Straight answers.</span>
          </h2>
          <p>
            Still curious?{" "}
            <a href="/contact">
              Let’s talk <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="closing wrap">
        <span className="eyebrow green">
          <MessageSquareText size={15} /> LESS INBOX. MORE KITCHEN.
        </span>
        <h2>
          Make food worth talking about.
          <br />
          <span className="muted">Let us take the order.</span>
        </h2>
        <Button asChild>
          <a href="#book-demo">
            Let’s get your kitchen ready <ArrowUpRight size={16} />
          </a>
        </Button>
        <span className="small">
          <Clock3 size={13} /> Start with a 15-minute conversation.
        </span>
      </section>
    </main>
  );
}
