import test from "node:test";
import assert from "node:assert/strict";
import { calculateSavings } from "../lib/site";
import { leadSchema } from "../lib/leads";
import { NextRequest } from "next/server";
import { POST } from "../app/api/leads/route";
const lead = {
  kind: "pilot",
  business: "Test Kitchen",
  area: "DHA, Lahore",
  type: "Cloud kitchen",
  volume: "11–30",
  phone: "+92 300 1234567",
  consent: "yes",
  website: "",
};
test("calculator selects plans by capacity and keeps operator costs separate", () => {
  assert.deepEqual(calculateSavings(30, 1200, 27, "PKR"), {
    volume: 900,
    plan: "Growth",
    fee: 13500,
    commissionCost: 291600,
    savings: 278100,
    needsQuote: false,
  });
  assert.equal(calculateSavings(5, 1200, 25, "PKR").plan, "Starter");
  assert.equal(calculateSavings(40, 1200, 25, "PKR").plan, "Growth");
  assert.equal(calculateSavings(41, 1200, 25, "PKR").needsQuote, true);
});
test("USD uses USD plan fees", () => {
  assert.equal(calculateSavings(30, 12, 27, "USD").savings, 2867);
});
test("lead validation rejects missing consent, invalid phone and blank messages", () => {
  assert.equal(leadSchema.safeParse(lead).success, true);
  for (const data of [
    { ...lead, consent: "no" },
    { ...lead, phone: "123" },
    { ...lead, kind: "contact", message: "  " },
    { ...lead, business: "" },
  ])
    assert.equal(leadSchema.safeParse(data).success, false);
});
function request(body: unknown, origin = "http://localhost:3000") {
  return new NextRequest("http://localhost:3000/api/leads", {
    method: "POST",
    headers: { origin, "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}
test("endpoint rejects cross-origin and invalid requests", async () => {
  assert.equal(
    (await POST(request(lead, "https://untrusted.example"))).status,
    403,
  );
  assert.equal((await POST(request({}))).status, 400);
  assert.equal((await POST(request({ ...lead, website: "spam" }))).status, 400);
});
test("unconfigured delivery never returns false success", async () => {
  assert.equal((await POST(request(lead))).status, 503);
});
test("oversized requests are rejected", async () => {
  assert.equal(
    (await POST(request({ ...lead, message: "a".repeat(9000) }))).status,
    413,
  );
});
test("delivery, rate limit and upstream errors are handled without leaking secrets", async () => {
  const keys = [
    "LEAD_WEBHOOK_URL",
    "LEAD_WEBHOOK_SECRET",
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
  ];
  const previous = keys.map((k) => process.env[k]);
  const originalFetch = globalThis.fetch;
  Object.assign(process.env, {
    LEAD_WEBHOOK_URL: "https://crm.example/leads",
    LEAD_WEBHOOK_SECRET: "test-secret",
    UPSTASH_REDIS_REST_URL: "https://redis.example",
    UPSTASH_REDIS_REST_TOKEN: "test-token",
  });
  try {
    globalThis.fetch = async (input) =>
      new Response(
        JSON.stringify(
          String(input).includes("redis") ? { result: 1 } : { ok: true },
        ),
        { status: 200 },
      );
    assert.equal((await POST(request(lead))).status, 200);
    globalThis.fetch = async () =>
      new Response(JSON.stringify({ result: 6 }), { status: 200 });
    assert.equal((await POST(request(lead))).status, 429);
    globalThis.fetch = async (input) =>
      new Response(JSON.stringify({ result: 1 }), {
        status: String(input).includes("redis") ? 200 : 500,
      });
    const failed = await POST(request(lead));
    assert.equal(failed.status, 502);
    assert.equal((await failed.text()).includes("test-secret"), false);
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((k, i) => {
      if (previous[i] === undefined) delete process.env[k];
      else process.env[k] = previous[i];
    });
  }
});
