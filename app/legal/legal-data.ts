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
    text: "This policy explains what information Waow collects, why, who it is shared with, and the choices you have. It covers the Waow mobile apps, the Waow web experience, official accounts and our support services. For any question about your information, write to privacy@waow.app.",
  },

  { type: "h2", text: "Information we collect" },
  { type: "h3", text: "Information you give us" },
  {
    type: "ul",
    items: [
      "Your phone number. Required to create an account. We send a one-time code by SMS to confirm the number belongs to you.",
      "Your profile. A name, and optionally a photo and status message. Other people see these according to your privacy settings.",
      "Your messages and media. Text, photos, videos, voice notes, documents, reactions and other content you send. We deliver this content to the people and groups you choose.",
      "Your contacts, if you allow it. Waow checks the phone numbers in your address book so it can show you which of your contacts already use Waow. We use these numbers only for that purpose. If you do not grant permission you can still use Waow and add people by phone number manually.",
      "Content you make public. Anything you post through an official account, and any comment or reaction you leave on public content.",
      "Reports, appeals and support messages you send us.",
    ],
  },
  { type: "h3", text: "Information we collect automatically" },
  {
    type: "ul",
    items: [
      "Account activity: when your account was created, when you were last online, and which features you use.",
      "Device and connection information: device model, operating system and app version, language, time zone, IP address, and mobile network.",
      "Call information: who took part in a call, when it started, and how long it lasted, along with the technical signalling needed to connect it. We do not record the content of your calls.",
      "Diagnostic and crash information, so we can find and fix faults.",
      "A push notification token, so Apple or Google can deliver notifications to your device.",
    ],
  },
  { type: "h3", text: "Information you choose to share" },
  {
    type: "ul",
    items: [
      "Location, only when you choose to share it in a conversation. Live location sharing stops automatically at the end of the period you select, and you can stop it at any time.",
      "Text you send to translation or to the AI assistant. Your conversations are not sent to a translation or AI provider automatically — this happens only when you use the feature on content you have selected.",
    ],
  },

  { type: "h2", text: "How we use information" },
  {
    type: "ul",
    items: [
      "To run the service: create your account, deliver your messages, connect your calls, sync your linked devices, and show you which contacts use Waow.",
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
    text: "Waow protects your communications with encryption while they travel between your device and our servers, and while they are stored on our servers. Access to systems holding user data is restricted to a small number of authorised staff and is logged.",
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
      "The people you choose. Your messages go to your chosen recipients. Your profile details are visible according to your privacy settings.",
      "Companies that provide services to us, and only for that purpose: cloud hosting and infrastructure, SMS delivery for verification codes, push notification delivery (Apple and Google), translation and AI processing, and crash and performance reporting.",
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
    text: "Waow's servers are operated for us by TODO(hosting provider), with data stored in TODO(country/region). Some information is necessarily handled outside Laos by the international services Waow depends on — Apple and Google for push notifications and app distribution, our SMS provider for verification codes, and our translation and AI providers. Where information leaves Laos, we transfer it under the conditions required by the Law on Electronic Data Protection of the Lao PDR.",
  },
  {
    type: "p",
    text: "Waow's long-term direction is to move core platform infrastructure into Laos. We will update this page when that happens rather than describe it in advance.",
  },

  { type: "h2", text: "How long we keep information" },
  {
    type: "table",
    head: ["Information", "How long we keep it"],
    rows: [
      ["Your account and profile", "For as long as your account is active. Deleted when you delete your account."],
      ["Messages waiting to be delivered", "Until delivered, and no longer than 30 days if the recipient never comes online."],
      ["Messages and media stored on our servers", "TODO(confirmed storage model)"],
      ["Verification code (OTP) records", "90 days, to protect accounts and prevent fraud."],
      ["Call records (who, when, how long)", "12 months. We do not keep call content."],
      ["Crash and diagnostic data", "90 days."],
      ["Support conversations", "24 months."],
      [
        "Reports, appeals and enforcement records",
        "As long as needed to keep people safe and meet legal obligations, including after an account is deleted.",
      ],
      ["Backups", "Deleted through the normal backup rotation within 35 days of account deletion."],
    ],
  },

  { type: "h2", text: "Your rights and choices" },
  {
    type: "ul",
    items: [
      "See and change your profile at any time in the app.",
      "Control who can see your photo, status, last seen and read receipts, and who can add you to groups.",
      "Block anyone, and report any message, user, group or official account.",
      "Withdraw permission for contacts, camera, microphone, location or notifications in your device settings at any time.",
      "Ask us to correct information about you, or ask for a copy of it, by writing to privacy@waow.app.",
      "Delete your account at any time.",
    ],
  },

  { type: "h2", text: "Deleting your account" },
  {
    type: "p",
    text: "In the app: Settings → Account → Delete Account. From a browser, without installing the app: waow.app/delete-account.",
  },
  {
    type: "p",
    text: "When you delete your account, your profile is removed, you are removed from your groups, and the data we hold about you is deleted on the schedule above. Messages you already sent remain on the devices of the people who received them, because those copies belong to them. We keep a limited record where we must, for safety, fraud prevention or legal reasons.",
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

  { type: "h2", text: "6. Groups and public spaces" },
  {
    type: "p",
    text: "If you administer a group, use those controls responsibly. Content posted in public spaces, including official account channels, is subject to our Community Guidelines and may be moderated.",
  },

  { type: "h2", text: "7. Official accounts" },
  {
    type: "p",
    text: "Organisations may apply for a verified official account. Verification requires evidence of the organisation's identity and of the applicant's authority to act for it. A verification badge confirms that we reviewed that relationship at the time of approval. It is not our endorsement of anything the account later says. We may suspend or remove verification if an account misleads people, breaks these Terms, or is no longer controlled by the verified organisation.",
  },

  { type: "h2", text: "8. AI and translation" },
  {
    type: "p",
    text: "Waow includes translation and an AI assistant. These produce automated results, which can be wrong or incomplete. They are not medical, legal, financial or emergency advice, and you should check anything important independently. These features run only when you use them on content you have selected.",
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
    text: "You may stop using Waow and delete your account at any time, in the app or at waow.app/delete-account.",
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
    text: "Waow exists so that people can talk freely and safely. We do not routinely read your private conversations. When you report something to us, the reported content and the context needed to understand it are sent to our safety team for review. These rules apply to everything on Waow, and we enforce them.",
  },
  { type: "h2", text: "Never allowed" },
  {
    type: "ul",
    items: [
      "Child sexual abuse or exploitation in any form — including grooming, sextortion, trafficking, and any sexualisation of a person under 18. We remove these accounts immediately and report them to the authorities.",
      "Credible threats of violence, terrorism, or incitement to harm people.",
      "Human trafficking, and the sale or promotion of illegal drugs, weapons or other illegal goods and services.",
      "Sharing intimate images of anyone without their consent.",
      "Fraud, phishing, fake investment schemes, and impersonating banks, government bodies or verified organisations.",
    ],
  },
  { type: "h2", text: "Not allowed" },
  {
    type: "ul",
    items: [
      "Harassment, bullying, and targeted hate based on ethnicity, religion, nationality, gender or similar characteristics.",
      "Spam: bulk unsolicited messages, automated messaging tools, and deceptive links.",
      "Impersonating another person or organisation, including claiming to be verified when you are not.",
      "Malware, account theft, and attempts to compromise other people's devices or accounts.",
      "Infringing copyright or trademarks, and misusing official emblems.",
      "Manipulated or false public content shared in a way likely to cause serious harm.",
    ],
  },
  { type: "h2", text: "How to report" },
  {
    type: "ul",
    items: [
      "Report a message: press and hold it, then choose Report.",
      "Report a person, group or official account: open its profile, then choose Report.",
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
    text: "Waow prohibits child sexual abuse and exploitation (CSAE) in every form. This includes child sexual abuse material (CSAM), grooming, sextortion, trafficking of minors, and any sexualisation of a person under 18. We have no tolerance for it anywhere on Waow — in reported private messages, in groups, in public content, or in official channels.",
  },
  { type: "h2", text: "Our standards" },
  {
    type: "ul",
    items: [
      "Prohibition. Our Terms of Service and Community Guidelines explicitly forbid CSAE. Any account involved is closed permanently.",
      "Minimum age. Waow is for people aged 16 and over. Accounts we identify as belonging to someone under 16 are closed.",
      "Reporting. Every user can report any message, person, group or channel from inside the app. Reports that indicate possible harm to a child are prioritised above all other reports.",
      "Review. Child safety reports are reviewed by trained staff. We aim to act within 24 hours, and faster where a child appears to be at immediate risk.",
      "Action and referral. When we identify CSAM or CSAE conduct, we remove the content, permanently close the accounts involved, preserve the evidence the law requires us to preserve, and refer the matter to the competent authorities of the Lao PDR.",
      "Compliance. We comply with the child protection provisions of Lao law, including the Penal Code and the Law on Prevention and Combating Cyber Crime, and we cooperate with lawful requests relating to child safety.",
      "Prevention. We work to detect and disrupt patterns of behaviour associated with grooming and the distribution of CSAM, and we review our measures as the service grows.",
    ],
  },
  { type: "h2", text: "Child safety contact" },
  {
    type: "p",
    text: "Designated point of contact: TODO(child safety contact name), TODO(child safety contact role), Dynamic Solution Sole Co., Ltd. — safety@waow.app, monitored, and able to discuss our CSAE prevention practices with app stores, authorities and the public.",
  },
];

const officialAccounts: LegalBlock[] = [
  {
    type: "p",
    text: "An official account lets an organisation reach people on Waow under a verified identity, so users can tell a real institution from an impersonator. Verification is granted by application and manual review.",
  },
  { type: "h2", text: "Who can apply" },
  {
    type: "ul",
    items: [
      "Government bodies and public institutions of the Lao PDR.",
      "Registered companies and financial institutions.",
      "Registered media organisations.",
      "Educational and health institutions, and other organisations we approve.",
    ],
  },
  { type: "h2", text: "What we require" },
  {
    type: "ul",
    items: [
      "Evidence that the organisation exists: registration or establishment documents.",
      "Evidence that the applicant is authorised to act for it: an authorisation letter and the identity document of the authorised representative.",
      "An official contact channel we can independently verify — a published telephone number, domain email address or official website.",
      "Confirmation of who will control the account and who may broadcast from it.",
    ],
  },
  {
    type: "p",
    text: "We review applications manually, in a process comparable to opening a corporate bank account. We may ask for further evidence, and we may decline an application.",
  },
  { type: "h2", text: "Badges and categories" },
  {
    type: "p",
    text: "Verified accounts carry a badge, and may be labelled by category — Government, Business, Media or Institution. A badge confirms that we verified the organisation and the applicant's authority at the time of approval. It is not an endorsement of anything the account publishes.",
  },
  { type: "h2", text: "Rules for official accounts" },
  {
    type: "ul",
    items: [
      "Publish accurate information, and correct it promptly if it turns out to be wrong.",
      "Keep public notices distinct from advertising. Do not disguise advertising as an official announcement.",
      "Do not send spam or bulk messages to people who have not chosen to follow you.",
      "Use least-privilege admin roles, and keep broadcasts auditable within your organisation.",
      "Tell us when the authorised representative changes or the organisation's details change.",
    ],
  },
  { type: "h2", text: "Losing verification" },
  {
    type: "p",
    text: "We may suspend or remove verification if documents expire, if control of the account changes without notice, if the account misleads people, or if it breaks our Terms or Community Guidelines. Serious cases result in permanent removal. Apply or ask a question: officialaccounts@waow.app.",
  },
];

const aiTranslation: LegalBlock[] = [
  {
    type: "p",
    text: "Waow includes an AI assistant and message translation. This page explains plainly how they handle your content.",
  },
  { type: "h2", text: "When these features run" },
  {
    type: "p",
    text: "Translation and the AI assistant run only when you use them. Waow does not send your conversations to a translation or AI provider in the background. When you translate a message, that message is sent for translation. When you ask the AI assistant something, what you type is sent to be answered. Nothing else is.",
  },
  { type: "h2", text: "Where your text goes" },
  {
    type: "p",
    text: "Translation and AI responses are produced by TODO(provider category) acting for Waow. Processing takes place in TODO(processing country/region). These providers may use your text only to produce the result you asked for.",
  },
  { type: "h2", text: "What we keep" },
  {
    type: "p",
    text: "AI assistant conversations are kept for TODO(AI history retention period) so that you can see your history, and are then deleted. You can delete your AI conversation history at any time from within the assistant. Translated text is not stored beyond the moment it takes to return the translation.",
  },
  { type: "h2", text: "Training" },
  {
    type: "p",
    text: "Your private chats are never used to train AI models. Your AI assistant conversations are not used to train models unless you give separate, clear consent.",
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

const licences: LegalBlock[] = [
  {
    type: "p",
    text: "Waow is built with open source software. We are grateful to the people who wrote it. The components we use, and the full text of their licences, are listed below.",
  },
  { type: "p", text: "TODO(open source component and licence list)" },
];

const websitePrivacy: LegalBlock[] = [
  {
    type: "p",
    text: "This notice covers waow.app itself. Our Privacy Policy covers the Waow app.",
  },
  {
    type: "ul",
    items: [
      "Our website host records standard technical information about visits — IP address, browser type, pages requested and time of request — to keep the site available and secure.",
      "If you register for early access, we store the details you submit so we can contact you about availability, and for no other purpose. You may ask us to delete them at any time at privacy@waow.app.",
      "TODO(cookies and analytics disclosure)",
      "We do not sell website visitor information and do not use it for advertising.",
    ],
  },
];

const deleteAccount: LegalBlock[] = [
  {
    type: "p",
    text: "You can delete your Waow account whenever you want. Deletion is permanent and cannot be undone.",
  },
  { type: "h2", text: "From the app" },
  {
    type: "ol",
    items: [
      "Open Waow and go to Settings → Account → Delete Account.",
      "Confirm your phone number and follow the steps.",
    ],
  },
  { type: "h2", text: "From this page, if you no longer have the app" },
  {
    type: "ol",
    items: [
      "Enter your phone number below.",
      "We send a verification code by SMS, so we can be sure the request comes from you.",
      "Enter the code to confirm. Your account is closed straight away.",
    ],
  },
  { type: "p", text: "TODO(self-service deletion form — needs send-code and confirm-delete API endpoints)" },
  {
    type: "p",
    text: "If you cannot receive the code — for example the number is no longer yours — write to privacy@waow.app and we will verify your identity another way and process the request within 7 days.",
  },
  { type: "h2", text: "What happens next" },
  {
    type: "ul",
    items: [
      "Your profile, name, photo and status are removed.",
      "You are removed from all your groups.",
      "The data we hold about you is deleted on the schedule in our Privacy Policy, and disappears from backups within 35 days.",
      "Messages you already sent stay on the devices of the people who received them. We cannot remove those copies.",
      "We keep a limited record where safety, fraud prevention or the law requires it.",
    ],
  },
  { type: "p", text: "Questions: privacy@waow.app." },
];

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    path: "/legal/privacy",
    effective: "TODO(effective date)",
    updated: "TODO(last updated date)",
    body: privacy,
  },
  {
    slug: "terms",
    title: "Terms of Service",
    path: "/legal/terms",
    effective: "TODO(effective date)",
    body: terms,
  },
  {
    slug: "community-guidelines",
    title: "Community Guidelines",
    path: "/legal/community-guidelines",
    body: communityGuidelines,
  },
  { slug: "child-safety", title: "Child Safety Standards", path: "/legal/child-safety", body: childSafety },
  {
    slug: "official-accounts",
    title: "Official Account Policy",
    path: "/legal/official-accounts",
    body: officialAccounts,
  },
  { slug: "ai-translation", title: "AI and Translation Notice", path: "/legal/ai-translation", body: aiTranslation },
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
  { slug: "licences", title: "Open Source Licences", path: "/legal/licences", body: licences },
  { slug: "website-privacy", title: "Website Privacy Notice", path: "/legal/website-privacy", body: websitePrivacy },
  { slug: "delete-account", title: "Delete Your Account", path: "/delete-account", body: deleteAccount },
];

export const getDoc = (slug: string) => legalDocs.find((doc) => doc.slug === slug);
