import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/chrome";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://gethashwift.com"),
  title: {
    default: "Hashwift — WhatsApp orders, without the chaos.",
    template: "%s | Hashwift",
  },
  description:
    "Turn WhatsApp chats into organised food orders. Roman Urdu & English ordering, local payments, and a calmer kitchen. Join the Lahore pilot.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Good food. Zero inbox chaos.",
    description:
      "Your WhatsApp inbox. Your next ordering machine. Meet Hashwift.",
    url: "https://gethashwift.com",
    siteName: "Hashwift",
    type: "website",
    locale: "en_PK",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashwift — WhatsApp orders, without the chaos.",
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = { themeColor: "#07090e" };
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
