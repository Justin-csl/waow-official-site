export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: [string, string]; rows: [string, string][] };

export type LegalDoc = {
  slug: string;
  title: string;
  path: string;
  /** Absent until the approved text is supplied. */
  effective?: string;
  updated?: string;
  body?: LegalBlock[];
};

/**
 * `TODO(...)` marks text the business still has to supply. It renders as a
 * visible marker rather than plausible-looking filler, and `npm run legal:check`
 * fails while any remain, so an unfinished policy cannot ship quietly.
 */
export const TODO_PATTERN = /TODO\(([^)]*)\)/g;

const privacy: LegalBlock[] = [
  { type: "h2", text: "Who we are" },
  {
    type: "p",
    text: 'Waow is a communication service operated by Dynamic Solution Sole Co., Ltd. ("Waow"), a company registered in the Lao People\'s Democratic Republic, with its registered office at Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR.',
  },
  {
    type: "p",
    text: "This policy explains what information Waow collects, why, who it is shared with, and the choices you have. It covers the Waow mobile app, this website and our support services. For any question about your information, write to privacy@waow.app.",
  },

  { type: "h2", text: "Information we collect" },
  { type: "h3", text: "Information you give us" },
  {
    type: "ul",
    items: [
      "Your phone number. Required to create an account. We send a one-time code by SMS to confirm the number belongs to you.",
      "Your profile. Waow stores your name and phone number and, if you add them, your profile image and bio or status message. People you communicate with may see these profile details.",
      "Your messages and media. Most chat data is stored locally on your device. Encrypted copies are also stored on Waow's server so Waow can deliver and synchronize the text, photos, videos, voice notes, documents, reactions and other content you send to the people and groups you choose.",
      "Your contacts, if you allow it. Waow checks the phone numbers in your address book so it can show you which of your contacts already use Waow. We use these numbers only for that purpose. If you do not grant permission you can still use Waow and add people by phone number manually.",
      "Reports, appeals and support messages you send us.",
    ],
  },
  { type: "h3", text: "Information we collect automatically" },
  {
    type: "ul",
    items: [
      "Account activity: when your account was created and when you were last online.",
      "Device and connection information needed to sign in, secure linked devices and operate the service, including device name and identifier, app version, IP address, public encryption key and session information.",
      "A push notification token, so Apple or Google can deliver notifications to your device.",
    ],
  },
  { type: "h3", text: "Information you choose to share" },
  {
    type: "ul",
    items: [
      "Location, only when you open the location picker or choose to share a location in a conversation. Live location sharing stops automatically at the end of the period you select, and you can stop it at any time.",
      "Text you choose to translate. Waow does not send other messages to the translation service.",
    ],
  },

  { type: "h2", text: "How we use information" },
  {
    type: "ul",
    items: [
      "To run the service: create your account, deliver and synchronize your messages, connect your calls, manage linked devices, and show you which contacts use Waow.",
      "To keep people safe: confirm accounts are real, detect spam, scams and impersonation, review reports, enforce our Terms and Community Guidelines, and protect users, especially children.",
      "To keep the service working: measure reliability, diagnose faults, and improve performance and accessibility.",
      "To answer you: respond to support, privacy, safety and legal requests.",
      "To meet legal obligations under the law of the Lao PDR.",
    ],
  },
  {
    type: "p",
    text: "We do not sell your personal information. We do not use the content of your personal chats to target advertising.",
  },

  { type: "h2", text: "Message and call security" },
  {
    type: "p",
    text: "Waow end-to-end encrypts personal and group messages, including message media. Voice and video calls are encrypted while in transit. Waow does not record the audio or video content of calls.",
  },
  {
    type: "p",
    text: "Inside the app you can open the encryption information screen for any conversation and compare a security code with the other person to confirm you are talking to who you expect.",
  },
  {
    type: "p",
    text: "Waow also offers protections you control: app lock using your device's Face ID or fingerprint, locked conversations that require biometric approval to open, hidden chat folders, discreet notification previews, and screenshot protection on profile screens.",
  },
  {
    type: "p",
    text: "App lock uses your device's own biometric system. Waow never receives or stores your fingerprint or face data — your device only tells the app whether the check succeeded.",
  },

  { type: "h2", text: "Who we share information with" },
  {
    type: "ul",
    items: [
      "The people you choose. Your messages go to your chosen recipients, who may also see your profile details.",
      "Companies that provide services to us, and only for that purpose: Google Cloud for hosting and storage, our SMS provider for verification codes, Apple and Google for push notifications and app distribution, mapping services when you use the location picker, and the translation service when you translate selected text.",
      "Authorities, where we are required to act by a valid legal request under Lao law, or where there is an urgent risk of serious harm to a person. Our Law Enforcement Request Policy explains how we handle these.",
      "A successor company, if Waow is transferred as part of a lawful business transaction. The protections in this policy continue to apply.",
    ],
  },
  {
    type: "p",
    text: "Waow's cooperation agreement with the National Internet Center under the Ministry of Technology and Communications covers the development and management of the platform and Laos's digital ecosystem. It does not give any party open access to user information, and it does not remove your rights under Lao law.",
  },

  { type: "h2", text: "Where your information is stored" },
  {
    type: "p",
    text: "Waow's core servers and encrypted message storage are hosted on Google Cloud, primarily in Singapore. Some information is necessarily handled in other countries by services Waow depends on, including Apple and Google for app distribution and push notifications, our SMS provider for verification codes, mapping services when you use the location picker, and the translation service when you translate selected text.",
  },
  {
    type: "p",
    text: "Waow's long-term direction is to move core platform infrastructure into Laos. We will update this page when that happens rather than describe it in advance.",
  },

  { type: "h2", text: "How long we keep information" },
  {
    type: "p",
    text: "We keep account, device and encrypted message data only for as long as needed to operate Waow, protect the service and meet legal obligations. Contact numbers submitted for discovery are used for matching and are not added to a Waow address book. Support and safety records may be retained longer where needed to resolve a request, prevent abuse or comply with law.",
  },

  { type: "h2", text: "Your rights and choices" },
  {
    type: "ul",
    items: [
      "See and change your profile at any time in the app.",
      "Manage device-local privacy preferences and notification previews in the app.",
      "Block a user, report a message, or contact support about a user or group.",
      "Withdraw permission for contacts, camera, microphone, location or notifications in your device settings at any time.",
      "Ask us to correct information about you, or ask for a copy of it, by writing to privacy@waow.app.",
      "Delete your account at any time.",
    ],
  },

  { type: "h2", text: "Deleting your account" },
  {
    type: "p",
    text: "In the app: Settings → Account → Delete Account. From a browser, without installing the app: waow.la/delete-account.",
  },
  {
    type: "p",
    text: "When you delete your account in the app, Waow deactivates it immediately and revokes its linked-device sessions. The account can be recovered for seven days by verifying its phone number. Messages already delivered to other people may remain on their devices. For permanent erasure requests or questions about information that remains after deactivation, write to privacy@waow.app.",
  },

  { type: "h2", text: "Age" },
  {
    type: "p",
    text: "Waow is for people aged 16 and over. If you are under 18, you confirm that a parent or legal guardian permits you to use Waow. If we learn that an account belongs to someone under 16, we close it. If you believe someone under 16 is using Waow, tell us at safety@waow.app.",
  },

  { type: "h2", text: "Changes to this policy" },
  {
    type: "p",
    text: "We will update this page as Waow changes. If a change materially affects you, we will tell you in the app before it takes effect. The date at the top of this page shows the current version.",
  },

  { type: "h2", text: "Contact" },
  {
    type: "p",
    text: "Dynamic Solution Sole Co., Ltd. · Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR · privacy@waow.app · support@waow.app",
  },
];

const terms: LegalBlock[] = [
  { type: "h2", text: "1. Your agreement with us" },
  {
    type: "p",
    text: "These Terms are an agreement between you and Dynamic Solution Sole Co., Ltd., Vientiane, Lao PDR. By creating a Waow account or using Waow, you accept these Terms, our Community Guidelines and our Privacy Policy. If you do not accept them, do not use Waow.",
  },

  { type: "h2", text: "2. Who can use Waow" },
  {
    type: "p",
    text: "You must be at least 16 years old. If you are under 18, you confirm that a parent or legal guardian permits you to use Waow. You must register with a phone number you are entitled to use, and give accurate information. You must not use Waow if we have previously removed your account, or if your use would break the law.",
  },

  { type: "h2", text: "3. Your account" },
  {
    type: "p",
    text: "You are responsible for your device, your verification codes and your account. Do not sell, rent or transfer your account. Tell us at support@waow.app if you think someone else has gained access to it. We recommend turning on app lock.",
  },

  { type: "h2", text: "4. How you may use Waow" },
  {
    type: "p",
    text: "Use Waow lawfully and treat other people decently. You must not use Waow to:",
  },
  {
    type: "ul",
    items: [
      "break the law, or help anyone else break it;",
      "harm, exploit, sexualise or endanger a child in any way;",
      "threaten, harass, bully or defame anyone, or promote violence or terrorism;",
      "send spam or bulk unsolicited messages, run scams or phishing, or distribute malware;",
      "impersonate another person, a bank, a government body or any organisation;",
      "infringe someone's privacy rights or intellectual property;",
      "attack, probe, scrape or reverse-engineer the service, or access it through unauthorised automation;",
      "break our Community Guidelines.",
    ],
  },

  { type: "h2", text: "5. Your content" },
  {
    type: "p",
    text: "What you create stays yours. You give us only the permission we need to run the service: to store your content, deliver it to the people you choose, display it to them, and review it if it is reported to us. You are responsible for having the right to share what you share.",
  },

  { type: "h2", text: "6. Groups" },
  {
    type: "p",
    text: "If you own or administer a group, use those controls responsibly. Group messages remain subject to these Terms and our Community Guidelines.",
  },

  { type: "h2", text: "7. Private communication" },
  {
    type: "p",
    text: "The current Waow app is designed for one-to-one and group communication. It does not provide a public feed or a public official-account publishing service.",
  },

  { type: "h2", text: "8. Translation" },
  {
    type: "p",
    text: "Waow can translate text you select. Translation is automated and can be wrong or incomplete, so check anything important independently. Selected text is sent to Waow's translation service only when you request a translation.",
  },

  { type: "h2", text: "9. Availability" },
  {
    type: "p",
    text: "Waow is provided as available. We may add, change or remove features, and may interrupt the service for maintenance, security or legal reasons. We will give notice of significant changes where we reasonably can.",
  },

  { type: "h2", text: "10. Enforcement and appeals" },
  {
    type: "p",
    text: "If you break these Terms or our Community Guidelines, or if it is necessary to protect people, we may remove content, limit what your account can do, suspend it, or close it permanently. Serious cases — in particular anything involving harm to a child — may be acted on immediately and referred to the competent authorities.",
  },
  {
    type: "p",
    text: "We aim to review and remove reported objectionable content, and to remove the user responsible, within 24 hours of a report.",
  },
  {
    type: "p",
    text: "If you think we got a decision wrong, write to support@waow.app or safety@waow.app and we will review it.",
  },

  { type: "h2", text: "11. Ending your use of Waow" },
  {
    type: "p",
    text: "You may stop using Waow and deactivate your account in the app at any time. Waow provides a seven-day recovery window. See waow.la/delete-account for instructions and contact privacy@waow.app to request permanent erasure.",
  },

  { type: "h2", text: "12. Liability" },
  {
    type: "p",
    text: "To the fullest extent Lao law allows, we are not responsible for content created by users, or for indirect or consequential losses. Nothing in these Terms limits liability that cannot be limited by law.",
  },

  { type: "h2", text: "13. Governing law and disputes" },
  {
    type: "p",
    text: "These Terms are governed by the law of the Lao PDR. If there is a dispute, please contact us first — most things are resolved that way. If it cannot be resolved, it may be brought before the competent dispute-resolution body or the courts of the Lao PDR.",
  },

  { type: "h2", text: "14. Changes to these Terms" },
  {
    type: "p",
    text: "We may update these Terms. If a change materially affects you, we will tell you in the app before it takes effect. Continuing to use Waow after that means you accept the updated Terms.",
  },

  { type: "h2", text: "15. Contact" },
  {
    type: "p",
    text: "Dynamic Solution Sole Co., Ltd. · Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR · legal@waow.app",
  },
];

const communityGuidelines: LegalBlock[] = [
  {
    type: "p",
    text: "Waow exists so that people can talk freely and safely. We do not routinely read your private conversations. When you report a message, the reported content and the context needed to understand it are sent to our safety team for review. These rules apply to one-to-one and group conversations on Waow.",
  },
  { type: "h2", text: "Never allowed" },
  {
    type: "ul",
    items: [
      "Child sexual abuse or exploitation in any form — including grooming, sextortion, trafficking, and any sexualisation of a person under 18. We remove these accounts immediately and report them to the authorities.",
      "Credible threats of violence, terrorism, or incitement to harm people.",
      "Human trafficking, and the sale or promotion of illegal drugs, weapons or other illegal goods and services.",
      "Sharing intimate images of anyone without their consent.",
      "Fraud, phishing, fake investment schemes, and impersonating another person or organisation.",
    ],
  },
  { type: "h2", text: "Not allowed" },
  {
    type: "ul",
    items: [
      "Harassment, bullying, and targeted hate based on ethnicity, religion, nationality, gender or similar characteristics.",
      "Spam: bulk unsolicited messages, automated messaging tools, and deceptive links.",
      "Impersonating another person or organisation.",
      "Malware, account theft, and attempts to compromise other people's devices or accounts.",
      "Infringing copyright or trademarks, and misusing official emblems.",
      "Manipulated or false content shared in a way likely to cause serious harm.",
    ],
  },
  { type: "h2", text: "How to report" },
  {
    type: "ul",
    items: [
      "Report a message: press and hold it, then choose Report.",
      "To report a person or group, report a relevant message or contact support from the app.",
      "Block someone: open their profile and choose Block. They will not be told.",
      "Reporting is confidential. We do not tell the reported person who reported them.",
    ],
  },
  { type: "h2", text: "What we do about it" },
  {
    type: "p",
    text: "Depending on how serious it is, we may remove the content, limit the account's reach or features, issue a warning, suspend the account, or close it permanently. We preserve evidence where we must, and we refer illegal conduct to the competent authorities in Laos. We aim to act on reports of objectionable content within 24 hours.",
  },
  { type: "p", text: "If you believe we made a mistake, write to safety@waow.app." },
];

const childSafety: LegalBlock[] = [
  {
    type: "p",
    text: "Waow prohibits child sexual abuse and exploitation (CSAE) in every form. This includes child sexual abuse material (CSAM), grooming, sextortion, trafficking of minors, and any sexualisation of a person under 18. We have no tolerance for it in one-to-one or group conversations.",
  },
  { type: "h2", text: "Our standards" },
  {
    type: "ul",
    items: [
      "Prohibition. Our Terms of Service and Community Guidelines explicitly forbid CSAE. Any account involved is closed permanently.",
      "Minimum age. Waow is for people aged 16 and over. Accounts we identify as belonging to someone under 16 are closed.",
      "Reporting. Every user can report a message from inside the app or contact our safety team about a person or group. Reports that indicate possible harm to a child are prioritised above other reports.",
      "Review. Child safety reports are reviewed by trained staff. We aim to act within 24 hours, and faster where a child appears to be at immediate risk.",
      "Action and referral. When we identify CSAM or CSAE conduct, we remove the content, permanently close the accounts involved, preserve the evidence the law requires us to preserve, and refer the matter to the competent authorities of the Lao PDR.",
      "Compliance. We comply with the child protection provisions of Lao law, including the Penal Code and the Law on Prevention and Combating Cyber Crime, and we cooperate with lawful requests relating to child safety.",
      "Prevention. We work to detect and disrupt patterns of behaviour associated with grooming and the distribution of CSAM, and we review our measures as the service grows.",
    ],
  },
  { type: "h2", text: "Child safety contact" },
  {
    type: "p",
    text: "Dynamic Solution Sole Co., Ltd. can be reached about child-safety matters at safety@waow.app. This address is the designated contact for app stores, authorities and the public.",
  },
];

const aiTranslation: LegalBlock[] = [
  {
    type: "p",
    text: "Waow includes message translation. This notice explains how selected text is handled.",
  },
  { type: "h2", text: "When translation runs" },
  {
    type: "p",
    text: "Translation runs only when you select a message and request it. Waow sends that message to its translation service and does not send the rest of the conversation.",
  },
  { type: "h2", text: "Where your text goes" },
  {
    type: "p",
    text: "The selected text is sent from your device to Waow's translation service and the translated result is returned to your device. Because the selected text is processed outside the end-to-end encrypted chat, do not translate a message if you do not want its text sent to that service.",
  },
  { type: "h2", text: "What we keep" },
  {
    type: "p",
    text: "The Waow app displays the translation with the message on your device. Waow does not provide an AI-assistant history feature.",
  },
  { type: "h2", text: "What it is not" },
  {
    type: "p",
    text: "Automated results can be wrong, out of date, or incomplete. They are not medical, legal or financial advice, and they must not be relied on in an emergency. Where the original message is available, Waow shows it alongside the translation so you can judge for yourself.",
  },
];

const securityDisclosure: LegalBlock[] = [
  {
    type: "p",
    text: "Waow protects user data with encryption in transit and at rest, restricted and logged administrative access, secure development practices, monitoring, backups, and a defined incident response process.",
  },
  { type: "h2", text: "Reporting a vulnerability" },
  {
    type: "p",
    text: "If you find a security issue in Waow, tell us privately at security@waow.app before telling anyone else. Include enough detail for us to reproduce it.",
  },
  {
    type: "ul",
    items: [
      "Do not access, modify or delete other people's data. Use your own test accounts.",
      "Do not disrupt the service, and do not run denial-of-service or spam tests.",
      "Do not use social engineering against our staff or users.",
      "Take only the minimum action needed to demonstrate the issue.",
    ],
  },
  { type: "h2", text: "What we will do" },
  {
    type: "p",
    text: "We aim to acknowledge a report within 5 working days, keep you informed while we investigate, and agree a disclosure timing with you. We ask that you do not publish an unresolved issue before we have had a reasonable period to fix it. We are glad to credit researchers who report responsibly.",
  },
];

const lawEnforcement: LegalBlock[] = [
  {
    type: "p",
    text: "This page explains how Waow handles requests for user information from authorities. We publish it because people are entitled to know.",
  },
  { type: "h2", text: "How we handle a request" },
  {
    type: "ol",
    items: [
      "We confirm who the requester is and that they have legal authority to make the request.",
      "We check the legal basis, the scope, whether the request is necessary and proportionate, and how urgent it is.",
      "We provide only the information the law requires and that we actually hold. We do not create data we do not have.",
      "Sensitive or large-scale requests require approval at senior management level.",
      "We keep an internal audit record of every request and every decision.",
      "We tell the affected user where the law permits it and where doing so would not create a risk to someone's safety.",
      "We use emergency disclosure only where there is an imminent risk of death or serious harm, and we document the reason.",
    ],
  },
  { type: "h2", text: "About our cooperation with the National Internet Center" },
  {
    type: "p",
    text: "Dynamic Solution Sole Co., Ltd. has a memorandum of cooperation with the National Internet Center under the Ministry of Technology and Communications, concerning the study, development and management of the Waow platform and Laos's digital ecosystem. It is a framework for technical cooperation and future service integration. It is not a standing authorisation to access user information, and it does not exempt any request from the process on this page. Requests should be sent to legal@waow.app.",
  },
];

const websitePrivacy: LegalBlock[] = [
  {
    type: "p",
    text: "This notice covers waow.la itself. Our Privacy Policy covers the Waow app.",
  },
  {
    type: "ul",
    items: [
      "Our website host records standard technical information about visits — IP address, browser type, pages requested and time of request — to keep the site available and secure.",
      "The public website does not provide user accounts, forms or an early-access registration service.",
      "The site does not set advertising or analytics cookies. Essential hosting infrastructure may use technical cookies or request data only where needed to deliver and protect the site.",
      "We do not sell website visitor information and do not use it for advertising.",
    ],
  },
];

const deleteAccount: LegalBlock[] = [
  {
    type: "p",
    text: "You can deactivate your Waow account from the app. Waow revokes its sessions immediately and provides a seven-day recovery window.",
  },
  { type: "h2", text: "From the app" },
  {
    type: "ol",
    items: [
      "Open Waow and go to Settings → Account → Delete Account.",
      "Confirm your phone number and follow the steps.",
    ],
  },
  { type: "h2", text: "If you no longer have the app" },
  {
    type: "p",
    text: "Write to privacy@waow.app from an address you can access and include the phone number on the account. We will verify the request before processing it. Do not send a verification code, password or private message content by email.",
  },
  { type: "h2", text: "What happens next" },
  {
    type: "ul",
    items: [
      "Your account is deactivated and its linked-device sessions are revoked immediately.",
      "You can recover the account for seven days by verifying the same phone number.",
      "Contact privacy@waow.app if you want permanent erasure or have questions about data that remains after deactivation.",
      "Messages you already sent stay on the devices of the people who received them. We cannot remove those copies.",
      "Limited records may be kept where safety, fraud prevention or the law requires it.",
    ],
  },
  { type: "p", text: "Questions: privacy@waow.app." },
];

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    path: "/legal/privacy",
    effective: "7 September 2026",
    updated: "7 September 2026",
    body: privacy,
  },
  {
    slug: "terms",
    title: "Terms of Service",
    path: "/legal/terms",
    effective: "7 September 2026",
    body: terms,
  },
  {
    slug: "community-guidelines",
    title: "Community Guidelines",
    path: "/legal/community-guidelines",
    body: communityGuidelines,
  },
  { slug: "child-safety", title: "Child Safety Standards", path: "/legal/child-safety", body: childSafety },
  { slug: "ai-translation", title: "Translation Notice", path: "/legal/ai-translation", body: aiTranslation },
  {
    slug: "security",
    title: "Security and Vulnerability Disclosure",
    path: "/legal/security",
    body: securityDisclosure,
  },
  {
    slug: "law-enforcement",
    title: "Law Enforcement Request Policy",
    path: "/legal/law-enforcement",
    body: lawEnforcement,
  },
  { slug: "website-privacy", title: "Website Privacy Notice", path: "/legal/website-privacy", body: websitePrivacy },
  { slug: "delete-account", title: "Delete Your Account", path: "/delete-account", body: deleteAccount },
];

export const getDoc = (slug: string) => legalDocs.find((doc) => doc.slug === slug);
