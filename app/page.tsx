import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const features = [
  {
    tag: "MESSAGE FREELY",
    title: "Conversations that feel effortless.",
    copy: "Reply, react, edit and share the moments that matter—in one-to-one chats or with your whole group.",
    icon: "✦",
  },
  {
    tag: "STAY CLOSE",
    title: "Calls that bring everyone together.",
    copy: "Move naturally from a message to a private voice or video call, with group calling for the people who matter.",
    icon: "◉",
  },
  {
    tag: "MAKE IT YOURS",
    title: "Create before you send.",
    copy: "Crop photos, shape video clips, add captions and choose the quality that fits the moment.",
    icon: "◇",
  },
];

const trustPoints = [
  ["Chat lock", "Protect selected conversations with Face ID."],
  ["Hidden chats", "Keep your locked-chat folder out of the normal inbox."],
  ["Private previews", "Conceal sensitive notification details."],
  ["Clear controls", "Choose who can reach you and what they can see."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">A better way to stay close</div>
          <h1>Every conversation deserves a little <em>waow.</em></h1>
          <p className="hero-lede">
            Private messaging, expressive media and clear calling—thoughtfully
            designed for iPhone and iPad.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/download">
              Download for iOS <span>↗</span>
            </Link>
            <Link className="text-link" href="/features">
              Explore Waow <span>→</span>
            </Link>
          </div>
          <p className="microcopy">Available on the App Store soon.</p>
        </div>

        <div className="hero-visual real-product-hero" aria-label="Real Waow app screens">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="real-phone real-phone-main">
            <img src="/screens/personal-chat.png" alt="Waow personal chat showing messages, calls and shared media" />
          </div>
          <div className="real-phone real-phone-side">
            <img src="/screens/chat-list.png" alt="Waow chat list in Lao" />
          </div>
          <img className="hero-app-icon" src="/waow-app-icon.png" alt="Waow app icon" />
        </div>
      </section>

      <section className="promise-strip">
        <div className="shell promise-inner">
          <p>Built for connection.</p>
          <p>Designed for privacy.</p>
          <p>Made in Laos.</p>
        </div>
      </section>

      <section className="laos-story">
        <div className="shell laos-story-layout">
          <div className="laos-art" aria-label="Illustrated cultural landmarks and symbols of Laos">
            <div className="laos-sun" />
            <img className="laos-map-art" src="/laos/laos-map-culture.png" alt="Map of Laos illustrated with temples, monuments, an elephant, flowers and a tuk-tuk" />
            <img className="lao-character-art" src="/laos/lao-character.png" alt="Lao character wearing traditional sinh and patterned shoulder cloth" />
            <div className="laos-brand-chip">
              <img src="/waow-app-icon.png" alt="" />
              <span><b>Designed in Laos</b><small>Made to connect everyone</small></span>
            </div>
          </div>
          <div className="laos-story-copy">
            <span className="eyebrow eyebrow-laos">Rooted in Laos</span>
            <h2>Local character.<br />A world of conversations.</h2>
            <p>
              Waow takes inspiration from the warmth, colour and unmistakable
              spirit of Laos—from temple rooftops and handwoven patterns to the
              everyday energy of life along the Mekong.
            </p>
            <div className="lao-values">
              <div><span>ສ</span><b>Warm by nature</b><small>Made for genuine connection</small></div>
              <div><span>ລ</span><b>Proudly Lao</b><small>Designed with local identity</small></div>
              <div><span>ວ</span><b>Open to everyone</b><small>Built to connect beyond borders</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">One app, every moment</span>
            <h2>More than messages.</h2>
          </div>
          <p>
            Waow keeps the experience simple while giving every conversation
            room to be expressive.
          </p>
        </div>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className={`feature-card feature-${index + 1}`} key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>
              <span>{feature.tag}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-band">
        <div className="shell privacy-layout">
          <div className="privacy-copy">
            <span className="eyebrow eyebrow-light">Privacy, made practical</span>
            <h2>Your private spaces stay private.</h2>
            <p>
              Face ID chat lock, hidden conversations and discreet previews give
              you understandable control without getting in the way.
            </p>
            <Link className="button button-light" href="/privacy">
              Explore privacy <span>→</span>
            </Link>
          </div>
          <div className="privacy-list">
            {trustPoints.map(([title, copy], index) => (
              <div className="privacy-point" key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell product-showcase">
        <div className="showcase-copy">
          <span className="eyebrow">The real Waow experience</span>
          <h2>Designed around real conversations.</h2>
          <p>
            Browse chats, share media, talk in groups and manage the details
            that make every conversation feel personal.
          </p>
          <Link className="text-link" href="/features">Explore every feature <span>→</span></Link>
        </div>
        <div className="screen-gallery">
          <div className="gallery-phone gallery-left">
            <img src="/screens/chat-list.png" alt="Waow chats screen" />
          </div>
          <div className="gallery-phone gallery-centre">
            <img src="/screens/group-chat.png" alt="Waow group conversation screen" />
          </div>
          <div className="gallery-phone gallery-right">
            <img src="/screens/contact-info.png" alt="Waow contact information screen" />
          </div>
        </div>
      </section>

      <section className="onboarding-band">
        <div className="shell onboarding-layout">
          <div className="onboarding-screens">
            <div className="setup-phone setup-back"><img src="/screens/login.png" alt="Waow login screen" /></div>
            <div className="setup-phone setup-front"><img src="/screens/onboarding.png" alt="Waow onboarding screen" /></div>
          </div>
          <div className="onboarding-copy">
            <span className="eyebrow eyebrow-light">Simple from the start</span>
            <h2>From hello to your first message in a few clear steps.</h2>
            <p>Sign in with your phone number, verify securely, set up your profile and start talking.</p>
          </div>
        </div>
      </section>

      <section className="download-cta">
        <div className="shell download-inner">
          <div>
            <span className="eyebrow eyebrow-light">Start your next conversation</span>
            <h2>Say hello to Waow.</h2>
          </div>
          <div className="download-action">
            <Link className="button button-light" href="/download">Get Waow for iOS <span>↗</span></Link>
            <p>iPhone and iPad · Android planned</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
