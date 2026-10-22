export const site = {
  name: "Hashwift",
  url: "https://gethashwift.com",
  email: "hello@gethashwift.com",
};
export const plans = [
  {
    name: "Starter",
    pkr: 6500,
    usd: 25,
    limit: 350,
    description: "A calmer inbox. A more organised kitchen.",
    features: [
      "Interactive menus & WhatsApp Flows",
      "Live owner dashboard",
      "COD & bank receipt capture",
      "Up to 350 orders / month",
    ],
  },
  {
    name: "Growth",
    pkr: 13500,
    usd: 49,
    limit: 1200,
    description: "Your best order-taker, even at rush hour.",
    features: [
      "Everything in Starter",
      "Roman Urdu + English AI assistant",
      "Saved addresses & 1-tap reorders",
      "Sales analytics",
      "Up to 1,200 orders / month",
    ],
  },
  {
    name: "Scale",
    pkr: 22000,
    usd: 79,
    limit: null,
    description: "More kitchens. One connected operation.",
    features: [
      "Everything in Growth",
      "Opt-in promotional broadcasts",
      "Loyalty engine & multi-staff logins",
      "Dedicated account onboarding",
      "Order allowance agreed at onboarding",
    ],
  },
];
export type Currency = "PKR" | "USD";
export const money = (value: number, currency: Currency = "PKR") =>
  `${currency === "PKR" ? "Rs. " : "$"}${Math.round(value).toLocaleString("en-US")}`;
export function calculateSavings(
  orders: number,
  aov: number,
  commission: number,
  currency: Currency,
) {
  const volume = orders * 30;
  const plan = volume <= 350 ? plans[0] : volume <= 1200 ? plans[1] : plans[2];
  const fee = currency === "PKR" ? plan.pkr : plan.usd;
  const commissionCost = (volume * aov * commission) / 100;
  return {
    volume,
    plan: plan.name,
    fee,
    commissionCost,
    savings: commissionCost - fee,
    needsQuote: volume > 1200,
  };
}
