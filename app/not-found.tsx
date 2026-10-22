import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="eyebrow green">404 · NOT ON THE MENU</span>
      <h1>Let’s get you back.</h1>
      <p>This page could not be found.</p>
      <Link className="button button-primary" href="/">
        Back to Hashwift
      </Link>
    </main>
  );
}
