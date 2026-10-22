import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { leadSchema } from "@/lib/leads";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== request.nextUrl.origin)
    return NextResponse.json(
      { error: "Request origin is not allowed." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json({ error: "JSON required." }, { status: 415 });
  const reader = request.body?.getReader();
  if (!reader)
    return NextResponse.json({ error: "Request is empty." }, { status: 400 });
  let raw = "";
  let bytes = 0;
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    if (bytes > 8192) {
      await reader.cancel();
      return NextResponse.json(
        { error: "Request too large." },
        { status: 413 },
      );
    }
    raw += decoder.decode(value, { stream: true });
  }
  raw += decoder.decode();
  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success)
    return NextResponse.json(
      { error: "Please check your details and consent." },
      { status: 400 },
    );
  if (parsed.data.website)
    return NextResponse.json(
      { error: "Unable to accept this inquiry." },
      { status: 400 },
    );
  const url = process.env.LEAD_WEBHOOK_URL;
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  const redis = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !secret || !redis || !token)
    return NextResponse.json(
      {
        error:
          "Direct submission is not configured. Please email hello@gethashwift.com.",
      },
      { status: 503 },
    );
  try {
    if (
      new URL(url).protocol !== "https:" ||
      new URL(redis).protocol !== "https:"
    )
      throw new Error("Invalid integration URL");
    const ip =
      request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
      "shared";
    const key =
      "hashwift:lead:" +
      createHash("sha256")
        .update(ip + secret)
        .digest("hex");
    const limit = await fetch(`${redis.replace(/\/$/, "")}/eval`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        'local n = redis.call("INCR", KEYS[1]); if n == 1 then redis.call("EXPIRE", KEYS[1], 600) end; return n',
        1,
        key,
      ]),
      signal: AbortSignal.timeout(5000),
    });
    const count = await limit.json();
    if (!limit.ok || typeof count.result !== "number")
      throw new Error("Rate limiter unavailable");
    if (count.result > 5)
      return NextResponse.json(
        { error: "Too many inquiries. Please try again in ten minutes." },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    const { website, ...lead } = parsed.data;
    void website;
    const sent = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
      redirect: "error",
    });
    if (!sent.ok) throw new Error("Delivery failed");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "We could not confirm delivery. Please retry or email hello@gethashwift.com.",
      },
      { status: 502 },
    );
  }
}
