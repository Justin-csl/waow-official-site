import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Waow home">
      <img className="brand-mark" src="/waow-app-icon.png" alt="" />
      <span>waow</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <Link href="/features">Features</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/security">Security</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/help">Help</Link>
        </nav>
        <div className="header-actions">
          <button className="language" aria-label="Change language">EN <span>⌄</span></button>
          <Link className="button button-small button-primary" href="https://web.waow.app/" target="_blank" rel="noreferrer">Download</Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>Private conversations with a little more expression.</p>
        </div>
        <div>
          <h3>Product</h3>
          <Link href="/features">Features</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/security">Security</Link>
          <Link href="https://web.waow.app/" target="_blank" rel="noreferrer">Download</Link>
        </div>
        <div>
          <h3>Support</h3>
          <Link href="/faq">FAQ</Link>
          <Link href="/help">Help Centre</Link>
          <Link href="/faq#contact">Contact Us</Link>
          <Link href="/help#status">Service Status</Link>
          <Link href="/help#delete">Delete Account</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About Waow</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/about#terms">Terms of Service</Link>
          <Link href="/security#report">Report a vulnerability</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Waow. All rights reserved.</span>
        <span>Made with care in Laos.</span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="page-hero shell">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
