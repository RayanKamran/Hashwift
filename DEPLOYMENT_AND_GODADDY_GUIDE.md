# Hashwift — deployment, GoDaddy and future Meta launch

Prepared 22 October 2026. Current delivery is the website only, per the owner's clarification. Live WhatsApp, business verification, DNS and mailbox setup are deferred. This guide does not indicate that any of those services have been activated.

## 1. Import the repository into hosting

Repository: https://github.com/RayanKamran/Hashwift

Vercel import shortcut: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRayanKamran%2FHashwift

For automatic deployment from the existing repository, use Vercel → Add New → Project → Import Git Repository → `RayanKamran/Hashwift`. Authorise only the intended repository. Select Next.js, root directory `.`, Node.js 22, install command `npm ci`, build command `npm run build`, and the framework's default output setting. Deploy. Set the production branch to `main`; future main pushes deploy automatically and pull requests receive previews.

**Commercial hosting:** Vercel Hobby is for personal/non-commercial use. This business marketing site needs an eligible commercial plan, not an assumed free Hobby entitlement. Review costs before activating a paid plan. If a zero-cost commercial host is essential, evaluate the current Netlify free plan and its Next.js runtime support/quotas before importing. No paid hosting purchase has been made.

No environment variables are needed for website-only/email-draft mode. For later direct lead collection, configure all four server values from `.env.example`, then rebuild:

- `LEAD_WEBHOOK_URL`: HTTPS endpoint that durably stores inquiries before returning 2xx.
- `LEAD_WEBHOOK_SECRET`: server-only bearer secret accepted by that endpoint.
- `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`: durable rate limiter, five attempts per ten minutes per trusted IP on Vercel.

Use provider secret settings, never Git. Check delivery end-to-end before advertising direct submissions. The endpoint returns an error when the processor or rate limiter fails. Email-draft mode requires a functioning business mailbox and the visitor's email client.

## 2. Connect gethashwift.com in GoDaddy

First add `gethashwift.com` and `www.gethashwift.com` in Vercel Project → Settings → Domains. Select the apex as the primary domain and redirect www to it. Vercel's project-specific instructions are authoritative.

In GoDaddy → Domain Portfolio → gethashwift.com → DNS → Manage DNS, first save the current records. The brief's legacy/general-purpose Vercel values are:

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 76.76.21.21 | 600 seconds or provider default |
| CNAME | www | cname.vercel-dns.com | 600 seconds or provider default |

**Use the current A/CNAME values shown by your own Vercel project when they differ.** Current Vercel setups may assign a project-specific CNAME. Do not blindly replace an assigned target with these legacy examples.

Remove only conflicting parked-domain A/AAAA records for `@`, conflicting `www` records and incompatible GoDaddy forwarding. Preserve MX, SPF, DKIM, DMARC and unrelated verification TXT records. A hostname with CNAME cannot also have other record types. If the authoritative nameservers point elsewhere, edit DNS there instead of GoDaddy.

Wait for propagation, then verify the domain status in Vercel and HTTPS for apex and www. Test every page, OpenGraph image and sitemap. Do not move traffic away from any existing live service until the new deployment is verified.

Sources: https://vercel.com/docs/domains/set-up-custom-domain and https://vercel.com/kb/guide/a-record-and-caa-with-vercel

## 3. Create hello@gethashwift.com

### Zoho Mail

Zoho's free custom-domain option is available only in selected data centres/regions. Where eligible it supports up to five users with webmail; availability must be checked during signup. Otherwise choose an appropriate paid mailbox or Google Workspace.

Add the domain, copy Zoho's verification TXT into GoDaddy, verify ownership, and create `hello`. Then use the exact MX/SPF records from the account's Tools & Configurations screen. Generic US-region examples (do not use for a different data centre):

| Type | Host | Value | Priority |
| --- | --- | --- | --- |
| MX | @ | mx.zoho.com | 10 |
| MX | @ | mx2.zoho.com | 20 |
| MX | @ | mx3.zoho.com | 50 |
| TXT | @ | v=spf1 include:zohomail.com ~all | — |

Publish **one** SPF record. If other authorised senders exist, merge their includes rather than creating a second SPF. Generate DKIM in Zoho, publish its exact selector (`selector._domainkey`) and TXT public key, and enable authentication after verification. DKIM is account-specific and cannot be safely invented. Replace old MX records only after any existing email migration is planned. Test inbound and outbound mail and SPF/DKIM results.

Sources: https://www.zoho.com/mail/help/adminconsole/subscription.html ; https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html ; https://www.zoho.com/mail/help/adminconsole/spf-configuration.html

### Google Workspace alternative

Create the domain's Workspace account and `hello` mailbox; verify the provided domain TXT. Use the Admin console's current MX values and priorities (new and legacy configurations can differ). Publish one SPF TXT at `@` authorising Google, normally `v=spf1 include:_spf.google.com ~all` when Google is the only sender. In Gmail authentication settings generate a DKIM key, publish the exact supplied host and key in GoDaddy, and activate signing. Keep other legitimate senders in the same SPF record. Follow the account's setup wizard before removing existing MX.

Official references: https://support.google.com/a/answer/174125 and https://support.google.com/a/answer/33786

Optionally configure DMARC after SPF/DKIM work, starting with a monitored policy; choose a reporting mailbox you control. Never copy an example reporting recipient that belongs to someone else.

## 4. Future Meta developer and business checklist

The website alone is not a Meta-verified business or a complete WhatsApp integration. When you decide to activate it:

1. Confirm and publish the actual legal business name, postal address, support hours and contact details, matching registration documents. Set the public environment variables, and replace prospective legal text with an accurate operational policy reflecting the deployed backend and processors.
2. Verify that hello@gethashwift.com receives mail. Domain email helps establish control but does not itself guarantee verification.
3. In Meta App Dashboard settings use the live homepage `https://gethashwift.com`, Privacy Policy URL `https://gethashwift.com/privacy`, Terms URL `https://gethashwift.com/terms`, and domain `gethashwift.com` where requested. Where an instructions URL is accepted for user-data deletion, use `https://gethashwift.com/privacy#deletion`.
4. In Business Portfolio/Business Manager information, use the same homepage and exact legal identity. Complete domain verification using Meta's generated TXT value if requested. Upload only genuine supporting documents through the official interface.
5. Follow the current official Cloud API and Tech Provider onboarding process for the account. Confirm whether coexistence is supported for each merchant before promising it. Use a dedicated ordering line when appropriate and agreed.
6. Before live message processing, implement a real webhook (not `/api/leads`), verify challenge and signature validation, secure tokens and phone numbers, agree subprocessors/retention and the merchant data-processing agreement, implement opt-in/template policy controls and deletion handling. A deletion callback, when required, needs signed-request validation and a real status mechanism; a privacy page is not a callback.
7. Test using Meta test numbers first. Request permissions/review appropriate to the current account and product. Do not claim approval or immunity from bans merely because official APIs are used.

Official starting points (recheck the dashboard's current requirements): https://developers.facebook.com/docs/whatsapp/cloud-api/ ; https://developers.facebook.com/terms/ ; https://business.whatsapp.com/policy

## 5. Final checks and rollback

Run `npm ci`, lint, tests, build, typecheck and production dependency audit. Check the four public routes on a real phone, contact draft behaviour, no horizontal overflow, keyboard navigation and correct social preview. Do not publish invented legal details. Before a live pilot, review legal text against the actual operator and implementation; it is not a legal certification.

A Vercel deployment can be rolled back to a known-good deployment through the dashboard. Preserve the previous DNS records until cutover is complete. The repository includes GitHub Actions checks; confirm the remote run after pushing.

Hosting policy references: https://vercel.com/legal/terms (Hobby plan section), https://vercel.com/docs/plans
