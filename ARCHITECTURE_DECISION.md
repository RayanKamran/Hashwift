# Architecture decision: Hashwift website

Date: 22 October 2026. Decision: Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion, Lucide and a shadcn-style Radix Slot/CVA button primitive.

| Candidate | Benefits | Costs |
| --- | --- | --- |
| Next.js App Router | Static marketing routes, metadata/image/robots/sitemap conventions, server-side inquiry endpoint, one React/TypeScript repository for a future tenant dashboard, straightforward Vercel deployment | More JavaScript than a purely static site; ongoing framework patching; tenant auth and storage are future work |
| Astro + React islands | Small default JS payload, excellent content-first architecture, independently hydrated interactive sections | Future dashboard needs more integration decisions; inter-island calculator/pricing state is less natural; no automatic perfect Lighthouse score |

Next.js wins because the stated roadmap includes a merchant application and several interactive sections. Installed 16.4.2, the registry's current patched stable version at implementation, rather than freezing on the brief's older 14/15 suggestion. Runtime uses Node 22. Lockfile is committed.

## Rendering and scope

- Home, contact, privacy, terms and metadata assets are prerendered. Only interactive previews, forms and calculator/pricing hydrate.
- Server-side configuration chooses email-draft mode unless the full webhook and rate-limit configuration is supplied at build time. No secrets reach client code.
- Fonts (Inter and JetBrains Mono) are self-hosted npm assets. No third-party analytics, stock image requests or browser font services.
- Demo uses deterministic data and client state. It has no real Meta, Claude, bank or rider connection, per the user's website-only clarification.
- Contact details never invent a registration number, street address, staffed support hours or live WhatsApp phone number.
- A protected server inquiry endpoint can later relay validated leads to a durable CRM endpoint. It requires HTTPS, bearer authentication, same-origin requests, limited request size and a durable Redis rate limiter. It does not claim success on failed delivery.
- Meta onboarding, phone encryption, merchant records, auth, multi-tenancy, production retention and bank reconciliation are not implemented by a marketing site. Legal pages accurately distinguish current website processing from future activation requirements.

## UI choices

Obsidian/emerald, restrained indigo, custom SVG mark, generous typographic hierarchy and detailed coded product UI. Accessible native forms and details, labelled controls, keyboard focus, reduced-motion support, responsive stacked preview. Shared calculator/pricing currency; comparison excludes operator cost from commission savings and flags Scale usage for quoting.

## Validation and dependency caveat

Run lint, tests, build and typecheck; CI repeats these and audits production dependencies. The complete npm audit currently reports GHSA-vfj7-8cjw-p6xm in the development-only Next ESLint → fast-glob → micromatch → braces chain (five affected-package entries). Registry braces latest is 3.0.3 and no compatible patched release is available. Do not accept npm's suggested downgrade to Next ESLint 14; monitor upstream. Production dependency audit is clean. Never process untrusted glob patterns through the dev lint tooling.
