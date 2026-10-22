# Hashwift

A polished, responsive marketing website for WhatsApp-first food businesses. Built with Next.js App Router and TypeScript. The original `Hashwift_Concept_Note.md` is preserved.

## Run

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production: `npm run build && npm start`.

## Included

- Home with three interactive customer/kitchen scenarios, customisable menu, COD/receipt preview, order progression, optional sound and clipboard handoff.
- Commission calculator, linked PKR/USD pricing, FAQs and pilot inquiry flow.
- `/contact`, `/privacy`, `/terms`, generated OpenGraph image, favicon, robots and sitemap.
- Responsive design, self-hosted fonts, semantic HTML and reduced-motion support.
- Validated optional inquiry API with durable rate limiting and honest delivery errors.

## Website-only mode

No configuration is needed to preview the website. Forms prepare an email draft; they explicitly require the visitor to send it. No inquiry is silently stored. Email delivery requires a working hello@gethashwift.com mailbox and visitor email client. No live WhatsApp bot, Meta verification, bank verification or rider booking is enabled.

To later enable direct lead collection, copy `.env.example` to `.env.local` and configure ALL four server variables: `LEAD_WEBHOOK_URL`, `LEAD_WEBHOOK_SECRET`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`. Rebuild after configuration changes. The webhook must authenticate the bearer secret and durably store a lead before returning 2xx. On Vercel, the platform-provided forwarded IP enables per-IP limits; on other hosts requests use a conservative shared bucket unless the trusted-proxy integration is adapted. No personal data is logged by the application.

Public business identity/address/hours can be configured using the documented public variables. Live WhatsApp connection is intentionally deferred.

## Checks

```sh
npm run lint
npm test
npm run build
npm run typecheck
npm audit --omit=dev
```

See `ARCHITECTURE_DECISION.md` for decisions and the development-only dependency advisory. See `DEPLOYMENT_AND_GODADDY_GUIDE.md` for hosting and domain setup. See `VALIDATION.md` for verification evidence and limits.
