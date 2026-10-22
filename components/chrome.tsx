"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Hashwift home">
      <svg
        width="30"
        height="34"
        viewBox="0 0 30 34"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 3 4 31M23 3 18 31M3 12h24M1 22h24"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      hashwift<span className="logo-dot">.</span>
    </Link>
  );
}
const links = [
  ["How it works", "how-it-works"],
  ["Demo", "demo"],
  ["Features", "features"],
  ["Compare", "compare"],
  ["Pricing", "pricing"],
  ["FAQ", "faq"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Logo />
        <nav
          aria-label="Main navigation"
          className={open ? "nav-links open" : "nav-links"}
        >
          {links.map(([label, id]) => (
            <Link onClick={() => setOpen(false)} key={id} href={`/#${id}`}>
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild className="nav-cta">
          <Link href="/#book-demo">
            Start free pilot <ArrowUpRight size={15} />
          </Link>
        </Button>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer wrap">
      <div>
        <Logo />
        <p>Good food deserves a better inbox.</p>
        <span className="small">Built for Lahore. Ready to grow with you.</span>
      </div>
      <div className="footer-links">
        <Link href="/contact">
          Get in touch <ArrowRight size={14} />
        </Link>
        <Link href="/privacy">Privacy policy</Link>
        <Link href="/terms">Terms of service</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Hashwift. All rights reserved.</span>
        <span>Independent of Meta and WhatsApp.</span>
        <span className="status-dot">Pilot applications open</span>
      </div>
    </footer>
  );
}
