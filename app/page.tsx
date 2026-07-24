import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

const features = [
  {
    tag: "MESSAGE FREELY",
    title: "Conversations that feel effortless.",
    copy: "Reply, react, edit and share the moments that matter—in one-to-one chats or with your whole group.",
    visual: "message",
    image: "/screens/chat-real.png",
    imageAlt: "Real Waow conversation screen",
  },
  {
    tag: "STAY CLOSE",
    title: "Calls that bring everyone together.",
    copy: "Move naturally from a message to a private voice or video call, with group calling for the people who matter.",
    visual: "call",
    image: "/screens/translation-real.png",
    imageAlt: "Real Waow group conversation with calling controls",
  },
  {
    tag: "MAKE IT YOURS",
    title: "Create before you send.",
    copy: "Crop photos, shape video clips, add captions and choose the quality that fits the moment.",
    visual: "media",
    image: "/laos/lao-character.png",
    imageAlt: "Lao character being prepared to share in Waow",
  },
];

const trustPoints = [
  ["End-to-end encryption", "Personal messages and calls stay between you and the people you choose.", "encrypted"],
  ["Chat lock", "Protect selected conversations with Face ID.", "lock"],
  ["Hidden chats", "Keep your locked-chat folder out of the normal inbox.", "visibility_off"],
  ["Private previews", "Conceal sensitive notification details.", "notifications_off"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">Made for the people you love</div>
          <h1>Keep love moving, one <em>waow</em> at a time.</h1>
          <p className="hero-lede">
            End-to-end encrypted messaging, expressive media and clear
            calling—made to keep your favourite people close.
          </p>
          <div className="hero-trust">
            <span className="material-symbols-rounded" aria-hidden="true">encrypted</span>
            End-to-end encrypted
          </div>
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

        <div className="hero-visual real-product-hero" aria-label="Waow app showcase">
          <span className="love-orbit love-orbit-one" aria-hidden="true">♥</span>
          <span className="love-orbit love-orbit-two" aria-hidden="true">♥</span>
          <span className="love-orbit love-orbit-three" aria-hidden="true">♥</span>
          <img
            className="hero-landing-art"
            src="/new-land.png"
            alt="Waow app shown across chat list, welcome and Lao cultural screens"
          />
        </div>
      </section>

      <section className="promise-strip">
        <div className="shell promise-inner">
          <p><span className="promise-icon material-symbols-rounded" aria-hidden="true">favorite</span>Made for people you love.</p>
          <p><span className="promise-icon material-symbols-rounded" aria-hidden="true">encrypted</span>End-to-end encrypted.</p>
          <p><span className="promise-icon material-symbols-rounded" aria-hidden="true">location_on</span>Made in Laos.</p>
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
              <div className={`feature-visual feature-visual-${feature.visual}`}>
                <img src={feature.image} alt={feature.imageAlt} />
                {feature.visual === "message" && (
                  <div className="feature-visual-badge">
                    <span className="badge-symbol">♥</span>
                    <span><b>Reply sent</b><small>Delivered instantly</small></span>
                  </div>
                )}
                {feature.visual === "call" && (
                  <div className="feature-call-actions" aria-label="Voice and video calling">
                    <span aria-hidden="true">●</span>
                    <b>Voice &amp; video</b>
                  </div>
                )}
                {feature.visual === "media" && (
                  <>
                    <div className="feature-edit-toolbar" aria-label="Photo editing controls">
                      <span>↶</span><span>Crop</span><span>Adjust</span><b>Done</b>
                    </div>
                    <div className="feature-caption">Add a caption…</div>
                  </>
                )}
              </div>
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
            <span className="eyebrow eyebrow-light">Love freely. Speak privately.</span>
            <h2>Protected from hello to heart.</h2>
            <p>
              End-to-end encryption protects personal messages and calls, while
              Face ID chat lock, hidden conversations and discreet previews give
              you clear control over your private spaces.
            </p>
            <Link className="button button-light" href="/privacy">
              Explore privacy <span>→</span>
            </Link>
          </div>
          <div className="privacy-list">
            {trustPoints.map(([title, copy, icon], index) => (
              <div className="privacy-point" key={title}>
                <div className="privacy-point-icon">
                  <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                  <small>0{index + 1}</small>
                </div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="campaign-showcase">
        <div className="campaign-beam campaign-beam-left" />
        <div className="campaign-beam campaign-beam-right" />
        <div className="shell campaign-inner">
          <div className="campaign-heading">
            <img src="/waow-app-icon.png" alt="" />
            <span className="eyebrow eyebrow-light">The real Waow experience</span>
            <h2>Every conversation.<br />One beautiful place.</h2>
            <p>Real chats, instant translation and simple calling—shown exactly as they feel inside Waow.</p>
          </div>
          <div className="screen-gallery">
            <div className="gallery-phone gallery-left">
              <img src="/screens/chat-list-real.png" alt="Real Waow chats screen" />
            </div>
            <div className="gallery-phone gallery-centre">
              <img src="/screens/chat-real.png" alt="Real Waow conversation screen" />
            </div>
            <div className="gallery-phone gallery-right">
              <img src="/screens/translation-real.png" alt="Real Waow instant translation conversation" />
            </div>
          </div>
          <div className="campaign-action">
            <Link className="button button-light" href="/features">Explore every feature <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="translation-band">
        <div className="shell translation-layout">
          <div className="translation-visual" aria-label="Instant translation inside a real Waow conversation">
            <div className="translation-glow" />
            <div className="translation-phone">
              <img src="/screens/translation-real.png" alt="Real Waow conversation translated between Lao and English" />
            </div>
            <img
              className="translation-message-overlay"
              src="/screens/translation-overlay.png"
              alt="Real Waow message showing English translation, Lao script and Latin transliteration"
            />
          </div>
          <div className="translation-copy">
            <span className="eyebrow eyebrow-light">Instant translation</span>
            <h2>Understand every conversation, instantly.</h2>
            <p>
              Translate messages inside the chat while keeping the original
              meaning close at hand. Move naturally between Lao and English
              without leaving Waow.
            </p>
            <div className="language-pills">
              <span>ລາວ</span><b>⇄</b><span>English</span>
            </div>
          </div>
        </div>
      </section>

      <section className="onboarding-band">
        <div className="shell onboarding-layout">
          <div className="onboarding-screens">
            <div className="setup-phone setup-back"><img src="/screens/login-real.png" alt="Real Waow phone-number login screen" /></div>
            <div className="setup-phone setup-middle"><img src="/screens/onboarding-stay-connected.png" alt="Real Waow stay-connected onboarding screen" /></div>
            <div className="setup-phone setup-front"><img src="/screens/onboarding-connection.png" alt="Real Waow connection onboarding screen" /></div>
          </div>
          <div className="onboarding-copy">
            <span className="eyebrow eyebrow-light">Simple from the start</span>
            <h2>From hello to your first message in a few clear steps.</h2>
            <p>Sign in with your phone number, verify securely, set up your profile and start talking.</p>
            <div className="onboarding-preview-row" aria-label="Real Waow onboarding screens">
              <img src="/screens/onboarding-stay-connected.png" alt="Stay connected onboarding preview" />
              <img src="/screens/onboarding-typing.png" alt="Typing and conversation onboarding preview" />
              <img src="/screens/onboarding-connection.png" alt="Connection onboarding preview" />
            </div>
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
