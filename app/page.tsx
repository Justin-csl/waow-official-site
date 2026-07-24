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

        <div className="hero-visual" aria-label="Preview of a Waow conversation">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone">
            <div className="phone-top"><span /><b>Raj</b><span>•••</span></div>
            <div className="chat-canvas">
              <div className="chat-date">TODAY</div>
              <div className="bubble bubble-in">Are we still meeting by the river?</div>
              <div className="bubble bubble-out">Yes — sunset at 5:45 ✨</div>
              <div className="photo-message">
                <div className="sun" />
                <div className="river" />
                <span>Found the perfect spot.</span>
              </div>
              <div className="composer"><span>Message</span><b>↑</b></div>
            </div>
          </div>
          <div className="floating-card floating-lock">
            <span className="round-icon">⌁</span>
            <div><b>Chat locked</b><small>Protected with Face ID</small></div>
          </div>
          <div className="floating-card floating-call">
            <span className="avatar">R</span>
            <div><b>Raj is calling</b><small>Waow video</small></div>
            <span className="call-dot">●</span>
          </div>
        </div>
      </section>

      <section className="promise-strip">
        <div className="shell promise-inner">
          <p>Built for connection.</p>
          <p>Designed for privacy.</p>
          <p>Made in Laos.</p>
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

      <section className="section shell ipad-section">
        <div className="ipad-copy">
          <span className="eyebrow">Made for the big screen</span>
          <h2>Your conversations, beautifully at home on iPad.</h2>
          <p>
            A spacious layout keeps chats, calls and media close at hand in
            portrait, landscape and multitasking views.
          </p>
          <Link className="text-link" href="/features">See the iPad experience <span>→</span></Link>
        </div>
        <div className="tablet">
          <div className="tablet-screen">
            <div className="tablet-sidebar">
              <div className="tablet-title">Chats <b>＋</b></div>
              <div className="tablet-search">⌕ Search</div>
              {["Raj", "Waow Team", "Nok", "Family"].map((name, i) => (
                <div className={`tablet-chat ${i === 0 ? "active" : ""}`} key={name}>
                  <span>{name[0]}</span><div><b>{name}</b><small>{i === 0 ? "See you there!" : "New conversation"}</small></div>
                </div>
              ))}
            </div>
            <div className="tablet-conversation">
              <div className="tablet-contact"><span>R</span><b>Raj</b><small>online</small></div>
              <div className="tablet-message">This feels right at home on iPad.</div>
              <div className="tablet-reply">It really does 💙</div>
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
