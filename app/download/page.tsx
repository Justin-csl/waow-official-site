import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../site-shell";

export const metadata: Metadata = {
  title: "Download",
  description: "Get Waow for iPhone and iPad.",
};

const qrPattern = Array.from({ length: 25 }, (_, i) => i);

export default function DownloadPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero eyebrow="Download" title="Bring Waow with you." copy="Waow is being prepared for iPhone and iPad. Official store links will appear here when the verified release is available." />
      <section className="content-section">
        <div className="download-card">
          <div>
            <span className="eyebrow eyebrow-light">iPhone & iPad</span>
            <h2>App Store release coming soon.</h2>
            <p>We will only link to the official App Store listing. No direct IPA downloads, unofficial profiles or misleading store badges.</p>
            <Link className="button button-light" href="/help">Visit Help Centre <span>→</span></Link>
          </div>
          <div className="qr-placeholder" aria-label="QR code placeholder for the future App Store listing">
            {qrPattern.map((cell) => <span key={cell} style={{ opacity: [1,2,5,7,8,10,12,14,16,18,20,21,22,24].includes(cell) ? 1 : .12 }} />)}
          </div>
        </div>
        <div className="shell content-grid">
          <article className="content-card"><span className="number">IOS</span><h2>Official availability</h2><p>The verified minimum iOS version, app size, release notes and store QR code will be published with the production release.</p></article>
          <article className="content-card"><span className="number">NEXT</span><h2>Other platforms</h2><p>Android, desktop and web are planned experiences. They will not be presented as available before they are stable and officially released.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
