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
      <PageHero eyebrow="Download" title="Bring Waow with you." copy="Get Waow for iPhone and iPad from the official Waow app page." />
      <section className="content-section">
        <div className="download-card">
          <div>
            <span className="eyebrow eyebrow-light">iPhone & iPad</span>
            <h2>Download Waow from the official source.</h2>
            <p>Continue to the official Waow app page for verified availability and installation options.</p>
            <Link className="button button-light" href="https://web.waow.app/" target="_blank" rel="noreferrer">Download Waow <span>↗</span></Link>
          </div>
          <div className="qr-placeholder" aria-label="QR code placeholder for the future App Store listing">
            {qrPattern.map((cell) => <span key={cell} style={{ opacity: [1,2,5,7,8,10,12,14,16,18,20,21,22,24].includes(cell) ? 1 : .12 }} />)}
          </div>
        </div>
        <div className="shell content-grid">
          <article className="content-card"><span className="number">IOS</span><h2>Official availability</h2><p>Use the official Waow app page for current availability, supported iOS versions and installation details.</p></article>
          <article className="content-card"><span className="number">NEXT</span><h2>Other platforms</h2><p>Android, desktop and web are planned experiences. They will not be presented as available before they are stable and officially released.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
