# HASHWIFT

## Concept Note

**WhatsApp Order and Customer Query Automation**
*For small food businesses that trade through WhatsApp messages and calls*

Working concept note · [gethashwift.com](https://gethashwift.com)

---

## 1. Concept Overview

Hashwift is a proposed WhatsApp automation service for small food businesses: home kitchens, cloud kitchens, bakeries, tiffin and meal-prep services, caterers and small takeaways whose entire storefront is a WhatsApp number.

These businesses already have customers. What they lack is a way to handle those customers at scale. Orders arrive as free-text messages, voice notes and phone calls. Menus are re-sent as images dozens of times a day. Prices, timings, delivery areas and "is it available today?" are answered by hand, often by the same person who is cooking.

Hashwift would connect to the business's WhatsApp number through the official WhatsApp Business Platform (Cloud API) and handle the repetitive conversation on the owner's behalf: showing the menu, taking structured orders, answering common questions, collecting addresses and payment, and sending order updates. The owner sees each confirmed order in a simple dashboard and steps in only when a human is actually needed.

> **Core proposition:** the business keeps WhatsApp as its storefront, because that is where its customers already are. Hashwift turns that inbox from a manual chat thread into an ordering system.

---

## 2. The Problem

A WhatsApp-only food business typically runs on one phone and one or two people. During a busy period, the owner is simultaneously:

- Replying to menu and price questions
- Taking orders written in inconsistent free text or voice notes
- Clarifying quantities, variants, add-ons and delivery addresses
- Confirming payment screenshots or cash-on-delivery
- Answering calls while cooking or packing
- Telling customers when the order is ready or on its way
- Keeping track of what was ordered, by whom, and whether it was paid

The consequences are practical and costly:

- **Missed and late replies.** Messages arriving during a rush go unanswered, and the customer orders elsewhere.
- **Order errors.** Details get lost in long chat threads, especially across several messages and voice notes.
- **No records.** There is no reliable history of orders, revenue, repeat customers or best-selling items.
- **Owner burnout.** The phone never stops, including outside working hours.
- **No reach back to customers.** Past customers are buried in the chat list and are rarely contacted again.

The alternative most often offered is a delivery aggregator. For many small businesses that means commissions on every order, loss of the customer relationship and a platform they do not control. Many deliberately stay WhatsApp-only for that reason.

---

## 3. Initial Target Customer

Hashwift is initially aimed at food businesses where WhatsApp is the main or only ordering channel and where one or a few people handle all customer communication.

- Home-based kitchens and home chefs
- Cloud / dark kitchens without their own app
- Home and small commercial bakeries (cakes, custom orders, pre-orders)
- Tiffin, meal-prep and subscription meal services
- Small caterers taking event and bulk orders
- Small takeaways and cafés that take phone and WhatsApp orders

The strongest early customer is likely a business receiving roughly **20 or more WhatsApp orders a day**: enough volume that manual handling is painful, but too small to justify building an app or paying for an enterprise ordering platform.

Businesses that are very new, receive only a handful of orders a week, or already run fully through an aggregator are not the initial focus.

---

## 4. Proposed Solution

Hashwift would sit between the customer and the business on the business's own WhatsApp number. Its intended workflow:

1. A customer messages the business on WhatsApp as they already do.
2. Hashwift greets them and presents the menu as an interactive list, catalogue or WhatsApp Flow (a native in-chat form) instead of an image.
3. The customer builds an order: items, quantities, variants, add-ons and special instructions.
4. Hashwift collects the delivery address or pickup choice and preferred time.
5. Payment is captured: a payment link, bank transfer details with screenshot upload, or cash on delivery.
6. The order is confirmed to the customer and appears instantly in the owner's dashboard and as an alert.
7. Status updates (accepted, preparing, out for delivery, delivered) are sent automatically as the owner taps through the order.
8. Free-text questions are answered from the business's own information; anything the system cannot handle confidently is passed to a human.

The owner keeps full control: they can pause the bot, take over any conversation, mark items sold out, and change the menu and hours at any time.

---

## 5. Core Product Components

### 5.1 Ordering Engine

The core of the product. It converts a chat into a structured order using WhatsApp's interactive messages (buttons, lists, catalogues and Flows) wherever possible, so customers tap rather than type. It handles item variants, add-ons, minimum order values, delivery zones and charges, opening hours and sold-out items.

The aim is that every order reaching the kitchen is complete and unambiguous, with no follow-up questions needed.

### 5.2 AI Query Assistant

Customers will not always follow buttons. They will type "do you have anything without nuts?", "can I get it by 7?", or write a full order in one message, often in mixed languages and informal spelling.

An AI layer, using a large language model such as Claude, would:

- Answer common questions from the business's own FAQ, menu and policies
- Interpret free-text orders and turn them into a draft cart for the customer to confirm
- Understand local language mixing and informal spelling
- Recognise when it is unsure, and hand the chat to the owner rather than guess

The AI should never invent prices, availability or promises. It answers only from information the business has provided.

### 5.3 Owner Dashboard

A simple, mobile-first web dashboard (and, later, an app) where the owner:

- Sees incoming orders in a live queue with sound and notification alerts
- Moves orders through statuses with one tap, which messages the customer automatically
- Edits menu, prices, hours, delivery areas and sold-out items
- Takes over any conversation from the bot
- Views daily sales, order counts, best sellers and repeat customers

### 5.4 Customer Memory and Re-engagement

Every order builds a customer record: name, address, past orders and preferences. That enables:

- "Reorder your last order?" in one tap
- Saved addresses so repeat customers do not retype them
- Opt-in broadcast messages for new menu items, weekend specials or festive pre-orders
- Simple loyalty mechanics (for example, every 10th order discounted)

This turns the WhatsApp contact list, currently a pile of old chats, into a usable customer base.

### 5.5 Call Handling (later phase)

Many customers still prefer to call. Two options are proposed for later stages:

- **Call deflection:** an automatic WhatsApp message to callers ("Order faster here: tap to see the menu") so missed calls become chat orders.
- **Voice handling:** Meta has introduced a WhatsApp Business Calling API, and AI voice agents can take simple orders by phone. This is technically harder and should come only after the chat product is proven.

---

## 6. Illustrative Use Case

A home bakery is approaching a Friday evening. On a typical Friday:

- 40+ messages arrive between 5 pm and 9 pm, many asking for the menu or whether a particular cake is available.
- Several customers send orders across three or four separate messages and a voice note.
- The owner is baking and misses replies for 30 to 60 minutes at a time.
- Two orders are prepared wrongly because a size or flavour was buried in the chat.

With Hashwift, each customer receives the menu immediately, picks items in the chat, enters an address and time slot, and either pays by link or chooses cash on delivery. The owner sees a clean list of confirmed orders on one screen. Questions about ingredients or delivery areas are answered automatically, and only an unusual custom-cake request is passed to the owner.

*This scenario is illustrative and should be treated as a hypothesis until confirmed through conversations with real businesses.*

---

## 7. Platform and Technical Approach

### 7.1 WhatsApp Business Platform

Hashwift would use Meta's official **WhatsApp Business Platform (Cloud API)**, not unofficial automation of the consumer or WhatsApp Business app, which risks the number being banned.

Key practical points (to be re-verified against Meta's current documentation, as policies change regularly):

- **Onboarding:** each business connects its number to Hashwift through Meta's Embedded Signup flow. Hashwift would operate as a Tech Provider (or partner through a Business Solution Provider at the start).
- **Keeping the existing number:** Meta has introduced a "coexistence" option allowing a number to stay on the WhatsApp Business app while also being connected to the API. This matters a lot: most owners will not give up their app or their number. Availability by region must be confirmed.
- **Messaging costs:** Meta charges per message for business-initiated templates (marketing, utility, authentication). Replies inside the 24-hour customer service window opened by a customer's message are currently free, and utility templates sent inside that window are also free. Because most food orders are started by the customer, the ordering flow itself should cost very little in Meta fees. Marketing broadcasts are the main paid component.
- **Verification:** businesses may need Meta Business verification and display-name approval to raise messaging limits.

### 7.2 Proposed Stack

| Layer | Proposed choice | Notes |
| --- | --- | --- |
| WhatsApp connection | Meta Cloud API (direct) | Avoids BSP mark-ups; a BSP can be used initially for speed |
| Backend / webhooks | Node.js (TypeScript) or Python | Receives messages, runs the order state machine |
| Database | PostgreSQL (e.g. Supabase) | Multi-tenant: one database, many businesses |
| AI | Claude API | Free-text understanding, FAQ answers, hand-off decisions |
| Dashboard | Next.js web app, mobile-first | Owner order queue, menu editor, analytics |
| Payments | Local gateways and payment links | Chosen per market; cash on delivery always supported |
| Hosting | Managed cloud (e.g. Vercel, Railway, Render, AWS) | Low cost at early scale |
| Website | gethashwift.com | Landing page, demo video, sign-up and pricing |

### 7.3 Multi-Tenant by Design

Hashwift is a single platform serving many businesses, not a custom bot per client. Each new business should be onboarded by configuration (number, menu, hours, delivery areas, FAQ) rather than new code. This is what makes recurring monthly income sustainable without the workload growing with every client.

---

## 8. Business Model and Monthly Income

The objective is **predictable recurring revenue** through monthly subscriptions.

### 8.1 Proposed Pricing Structure

Figures are placeholders, to be set after customer discovery and adjusted to local purchasing power.

| Plan | Indicative price | Includes |
| --- | --- | --- |
| **Setup** (one-off) | $30 – $100 | Number connection, menu entry, bot configuration, owner training |
| **Starter** | $15 – $25 / month | Ordering bot, dashboard, order alerts, basic FAQ, up to ~300 orders/month |
| **Growth** | $35 – $60 / month | AI query assistant, customer memory, reorder, analytics, higher order limit |
| **Pro** | $75+ / month | Broadcast campaigns, loyalty, multiple staff logins, priority support |

Meta's charges for marketing broadcasts would be passed through at cost or with a small margin, so heavy broadcast users do not erode the subscription margin.

An alternative to test is a **small per-order fee** with a low or zero base. It is easier to sell ("you only pay when you get orders") but makes income less predictable. A hybrid of a low base plus a per-order fee above a threshold is also worth testing.

### 8.2 The Comparison That Sells It

For the business owner, Hashwift should cost less than:

- the commission an aggregator would take on even a few orders a week, and
- the cost of hiring someone part-time to answer the phone.

If a business does 600 orders a month, a $40 subscription is under 7 cents per order.

### 8.3 Illustrative Revenue

| Paying businesses | Average revenue / business | Monthly recurring revenue |
| --- | --- | --- |
| 10 | $30 | $300 |
| 25 | $35 | $875 |
| 50 | $40 | $2,000 |
| 100 | $40 | $4,000 |
| 250 | $45 | $11,250 |

Running costs per business (hosting, AI usage, free-tier Meta conversations) are expected to be a small fraction of the subscription. This should be confirmed by measuring real usage during pilots.

### 8.4 Additional Revenue Streams

- Paid menu photography and catalogue setup
- Done-for-you monthly marketing broadcasts
- Simple branded order web page linked from Instagram bios
- Referral fees from payment or delivery partners

---

## 9. Market Positioning and Differentiation

Hashwift should not be positioned simply as another:

- Generic WhatsApp chatbot builder
- WhatsApp marketing and broadcast tool
- Shared team inbox
- Food delivery marketplace

General WhatsApp automation platforms already exist, including Wati, Interakt, AiSensy, Gallabox and Zoko, and some ordering-focused tools such as Take.app. Most are horizontal tools: the business owner has to design the bot flows themselves, which a busy home chef will not do.

Hashwift's proposed differentiation is the combination of:

- **Vertical focus:** built only for food ordering, so it works out of the box
- **Done-for-you onboarding:** Hashwift sets up the menu and bot, not the owner
- **AI that understands real customers:** informal spelling, mixed languages, voice-note-style orders
- **Keeps the owner's number and customer relationship:** no marketplace, no commission
- **Priced for very small businesses:** clearly cheaper than an aggregator or a staff member
- **Local payments and local language support** for the chosen market

The opportunity is framed as a simple, specialised ordering layer for a segment that general tools under-serve. It is not a claim that WhatsApp automation is new.

---

## 10. Human-in-the-Loop Principle

Hashwift supports the business owner. It does not replace them. The system handles routine ordering and questions, but:

- The owner can take over any conversation at any time.
- Uncertain, unusual or sensitive requests (complaints, refunds, allergy questions, custom orders) are handed to a human by default.
- The AI does not make promises about price, availability or delivery time beyond what the business has configured.
- Orders can be set to require owner acceptance before confirmation.

The product is best understood as a **virtual order-taker and front-desk assistant**, not an autonomous replacement for the owner.

---

## 11. Go-to-Market

### 11.1 Finding Customers

WhatsApp-only food businesses advertise publicly, which makes them easy to find:

- Instagram and Facebook food pages with "DM / WhatsApp to order" in the bio
- Local Facebook groups for home chefs, food sellers and neighbourhoods
- Food bazaars, pop-ups and markets
- Referrals from early customers

### 11.2 Approach

1. **Free pilots.** Onboard 3 to 5 businesses free for 30 days in exchange for feedback and a testimonial.
2. **Measure.** Record replies handled automatically, orders taken, response time and hours saved.
3. **Case study.** Publish the results on gethashwift.com and on social media, with before/after examples.
4. **Demo-led selling.** A test WhatsApp number prospects can message to experience ordering as a customer.
5. **Referral incentive.** One free month for each referred business that subscribes.
6. **Niche first.** Win one segment in one city (for example home bakers) before expanding.

### 11.3 Brand and Web Presence

The domain **gethashwift.com** is secured. Early website priorities:

- One clear headline: *"Take WhatsApp food orders on autopilot."*
- A 60-second demo video of a customer ordering
- A "Try it on WhatsApp" button linked to the demo number
- Simple pricing and a sign-up / book-a-call form
- Business email on the domain (e.g. hello@gethashwift.com), which also helps with Meta business verification

---

## 12. Proposed Roadmap

| Phase | Scope | Goal |
| --- | --- | --- |
| **0. Validation** (2–3 weeks) | Interviews with 15–20 businesses; demo bot on a test number | Confirm the problem, the must-have features and willingness to pay |
| **1. MVP** (4–6 weeks) | Menu → cart → address → confirmation; owner dashboard; order alerts; manual payment confirmation | First 3–5 pilot businesses live |
| **2. Paid launch** | AI query assistant, payment links, status updates, analytics | First 10–25 paying businesses |
| **3. Growth** | Customer memory, reorder, broadcasts, loyalty, self-serve onboarding | 50–100 paying businesses |
| **4. Expansion** | Call deflection / voice ordering, multi-staff, delivery partner integration, new cities or segments | Scale recurring revenue |

---

## 13. Key Risks

| Risk | Mitigation |
| --- | --- |
| Meta policy or pricing changes | Use only the official API; follow messaging policies; pass through message costs; review pricing regularly |
| Owners unwilling to move their number | Rely on the coexistence option; otherwise offer a second dedicated ordering number |
| Price sensitivity and churn | Price clearly below aggregator commission; show monthly "orders handled / hours saved" reports |
| AI mistakes on orders or prices | Structured confirmation step before every order; AI answers only from business data; human hand-off |
| Support load growing with clients | Configuration-based onboarding, templates per business type, self-serve menu editing |
| Competition from general WhatsApp tools | Vertical focus, done-for-you setup, local payments and language |
| Dependence on a single founder | Document onboarding; automate setup early |

---

## 14. Current Validation Status

The concept is currently **partially validated and partially assumed**. The prevalence of WhatsApp-only food businesses is visible and well known, but direct validation with the target customer has not yet established the severity of the problem or willingness to pay.

Open questions:

- How many orders per day a typical target business receives through WhatsApp and calls.
- How much time the owner spends answering repetitive messages.
- How many orders or customers are lost through slow replies.
- Whether customers will accept ordering through buttons and forms rather than free chat.
- Whether owners will connect their existing number, and through which option.
- Which payment methods are essential in the chosen market.
- What price point owners will pay monthly, and whether they prefer a flat fee or a per-order fee.
- How much of the remaining volume comes through phone calls rather than chat.

---

## 15. Route to Validation

The immediate priority is structured discovery with 15 to 20 WhatsApp-based food businesses. Research should establish:

1. How orders currently arrive (text, voice notes, calls, Instagram DMs) and in what proportions.
2. The most common questions customers ask before ordering.
3. Where errors, delays and lost orders happen today.
4. How payment is collected and confirmed.
5. Which tasks the owner would most like taken off their hands.
6. What the owner would and would not trust an automated assistant to do.
7. What monthly price they would consider fair, and what result would justify it.
8. Whether they would join a free pilot.

A simple demo bot on a test number should be shown during these conversations. Reactions to a working demo are far more reliable than reactions to a description.

---

## 16. Concept Statement

Hashwift is a WhatsApp ordering and customer-service automation service for small food businesses. It connects to a business's existing WhatsApp number through the official WhatsApp Business Platform, turns chat conversations into structured orders, answers routine customer questions with AI, keeps a record of every order and customer, and passes anything unusual to the owner.

Its purpose is not to replace WhatsApp, the business owner, or the personal relationship between a small food business and its customers. Its purpose is to make that relationship work at scale, earning Hashwift recurring monthly subscription revenue in return.

---

### Document Basis

This concept note is an initial working document. Features described as proposed, intended or illustrative remain subject to customer validation and technical design. Figures for pricing and revenue are placeholders. Details of WhatsApp Business Platform pricing, coexistence and calling features should be checked against Meta's current documentation before decisions are made.
