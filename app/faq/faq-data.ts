export type FaqBlock =
  | { type: "h"; text: string }
  | { type: "p"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "note"; text: string };

export type FaqArticle = {
  id: string;
  title: string;
  body: FaqBlock[];
};

export type FaqSection = {
  id: string;
  icon: string;
  title: string;
  articles: FaqArticle[];
};

export type FaqCategory = {
  id: string;
  icon: string;
  title: string;
  blurb: string;
  sections: FaqSection[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "get-started",
    icon: "flag",
    title: "Get Started",
    blurb: "Create your account, set up your profile and add your first contacts.",
    sections: [
      {
        id: "account-setup",
        icon: "person_add",
        title: "Account Setup",
        articles: [
          {
            id: "create-account",
            title: "How to create a Waow account",
            body: [
              {
                type: "p",
                text: "Your phone number is your Waow identity. There is no separate username or password to remember, so setting up takes a minute.",
              },
              { type: "h", text: "Register your number" },
              {
                type: "steps",
                items: [
                  "Install **Waow** from the App Store or Google Play and open it.",
                  "Choose your country, enter your phone number and tap **Next**.",
                  "Enter the six-digit code we send you by SMS.",
                  "Enter the name you want people to see, add a profile photo, and tap **Done**.",
                ],
              },
              { type: "h", text: "Allow contacts and notifications" },
              {
                type: "p",
                text: "Waow asks for permission to read your address book so it can show you which of your contacts already use Waow, and for permission to send notifications so you know when a message arrives. You can change both later in your phone's settings.",
              },
              {
                type: "note",
                text: "Note: Use the number you can receive SMS on right now. If you are moving to a new number, register the old one first and then use Change number so your chats move with you.",
              },
            ],
          },
          {
            id: "no-code",
            title: "I didn't receive my verification code",
            body: [
              {
                type: "p",
                text: "Verification codes arrive by SMS within a minute or two. If nothing arrives, work through these checks in order.",
              },
              {
                type: "steps",
                items: [
                  "Check that the number on screen matches your SIM exactly, including the country code.",
                  "Make sure your phone has signal and can receive normal text messages.",
                  "Wait for the countdown on the verification screen to finish, then tap **Resend**.",
                  "Restart your phone and try once more.",
                ],
              },
              { type: "h", text: "I received a code I didn't request" },
              {
                type: "p",
                text: "Someone most likely mistyped their own number. Ignore the message — nobody can register your number without the code.",
              },
              {
                type: "note",
                text: "Note: Never share a Waow verification code with anyone, including someone claiming to be from Waow support. The code is all it takes to register your number on another phone.",
              },
            ],
          },
          {
            id: "profile",
            title: "How to set your name, photo and About",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** and tap your name at the top.",
                  "Tap your photo to take a new picture or choose one from your library, then move and scale it inside the square and tap **Done**.",
                  "Tap **Name** or **About** to change the text other people see.",
                ],
              },
              {
                type: "p",
                text: "Profile photos are cropped square before they are uploaded, so you choose exactly which part of the picture people see.",
              },
              {
                type: "note",
                text: "Note: Who can see your photo and About depends on your privacy settings. See How to choose who can see your last seen, photo and About.",
              },
            ],
          },
        ],
      },
      {
        id: "adding-contacts",
        icon: "contacts",
        title: "Adding Contacts",
        articles: [
          {
            id: "add-contact",
            title: "How to add a contact",
            body: [
              {
                type: "p",
                text: "Waow matches your phone's address book against people who already have an account, so anyone you have saved appears automatically once they join.",
              },
              { type: "h", text: "Add someone by number" },
              {
                type: "steps",
                items: [
                  "Tap the new chat button on the **Chats** tab.",
                  "Tap **New contact**.",
                  "Enter their name and phone number with its country code, then tap **Save**.",
                ],
              },
              {
                type: "note",
                text: "Note: If a contact doesn't appear, check that the number is saved with the full country code and that Waow has permission to read your contacts.",
              },
            ],
          },
          {
            id: "qr-code",
            title: "How to add a contact with a QR code",
            body: [
              {
                type: "p",
                text: "A QR code is the quickest way to swap numbers when you are together in person — neither of you has to type anything.",
              },
              { type: "h", text: "Show your code" },
              { type: "steps", items: ["Open **Settings**.", "Tap the **QR code** icon next to your name."] },
              { type: "h", text: "Scan someone else's code" },
              {
                type: "steps",
                items: [
                  "Open **Settings** and tap the **QR code** icon.",
                  "Tap **Scan code** and point your camera at their code.",
                  "Check the number that appears, add a name and tap **Save**.",
                ],
              },
            ],
          },
          {
            id: "invite",
            title: "How to invite a friend to Waow",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Invite a friend**.",
                  "Choose a contact from the list.",
                  "Pick how you want to send the invitation from your phone's share sheet.",
                ],
              },
              {
                type: "p",
                text: "The invitation contains a short link that takes them straight to the download page.",
              },
            ],
          },
        ],
      },
      {
        id: "about-waow",
        icon: "info",
        title: "About Waow",
        articles: [
          {
            id: "devices-supported",
            title: "Which devices Waow supports",
            body: [
              {
                type: "bullets",
                items: [
                  "**iPhone** — iOS, with the full feature set.",
                  "**iPad** — a two-column layout with your chat list beside the open conversation.",
                  "**Android** — phones and tablets.",
                ],
              },
              {
                type: "p",
                text: "You can also link extra devices to the same account. See Linked Devices.",
              },
            ],
          },
          {
            id: "cost",
            title: "Does Waow cost anything?",
            body: [
              {
                type: "p",
                text: "No. Waow is free to use, with no subscription and no charge per message.",
              },
              {
                type: "p",
                text: "Messages, media and calls travel over your internet connection, so your normal mobile data or Wi-Fi charges still apply. Turning off media auto-download on mobile data is the easiest way to keep that low — see How to control what downloads automatically.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "chats",
    icon: "chat",
    title: "Chats",
    blurb: "Sending, editing, replies, groups, translation and disappearing messages.",
    sections: [
      {
        id: "individual-group",
        icon: "forum",
        title: "Individual and Group Chats",
        articles: [
          {
            id: "reply",
            title: "How to reply to a message",
            body: [
              { type: "steps", items: ["Swipe right on the message.", "Enter your response and tap send."] },
              {
                type: "p",
                text: "The message you replied to is quoted above yours. Tap the quote to jump back to the original.",
              },
              { type: "h", text: "React to a message instead" },
              {
                type: "steps",
                items: ["Tap and hold the message.", "Choose an emoji from the row that appears."],
              },
              {
                type: "p",
                text: "Tap and hold, then choose **More** to forward, copy, star or pin the message instead.",
              },
            ],
          },
          {
            id: "edit",
            title: "How to edit a message",
            body: [
              {
                type: "p",
                text: "You can edit a message you sent for up to 15 minutes after sending it.",
              },
              {
                type: "steps",
                items: [
                  "Tap and hold your message.",
                  "Tap **More** → **Edit**.",
                  "Change the text and tap send.",
                ],
              },
              {
                type: "p",
                text: "The message is replaced for everyone in the chat and marked as edited, so nobody is misled about what was originally sent.",
              },
              {
                type: "note",
                text: "Note: After 15 minutes the Edit option disappears. Delete the message and send a new one instead.",
              },
            ],
          },
          {
            id: "delete",
            title: "How to delete messages",
            body: [
              { type: "h", text: "Delete for me" },
              {
                type: "steps",
                items: ["Tap and hold the message.", "Tap **Delete** → **Delete for me**."],
              },
              {
                type: "p",
                text: "The message is removed from your device only. Everyone else still sees it.",
              },
              { type: "h", text: "Delete for everyone" },
              {
                type: "steps",
                items: ["Tap and hold the message.", "Tap **Delete** → **Delete for everyone**."],
              },
              {
                type: "p",
                text: "The message is removed from every device in the chat and replaced with a short note, so the conversation still reads sensibly. You can do this for about two days after sending.",
              },
              {
                type: "note",
                text: "Note: If someone already saved a photo to their camera roll, deleting the message cannot take that copy back.",
              },
            ],
          },
          {
            id: "disappearing",
            title: "How to use disappearing messages",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat and tap the contact or group name at the top.",
                  "Tap **Disappearing messages**.",
                  "Choose **24 hours**, **7 days**, **90 days** or **Off**.",
                ],
              },
              {
                type: "p",
                text: "New messages sent after that point are removed from both devices once the timer runs out. Messages sent before you turned it on are not affected, and everyone in the chat sees a note when the timer changes.",
              },
              {
                type: "note",
                text: "Note: In groups, only admins can change the disappearing-messages timer.",
              },
            ],
          },
          {
            id: "groups",
            title: "How to create and manage a group",
            body: [
              { type: "h", text: "Create a group" },
              {
                type: "steps",
                items: [
                  "Tap the new chat button on the **Chats** tab.",
                  "Tap **New group**.",
                  "Choose the members and tap **Next**.",
                  "Enter a group name, add a photo and tap **Create**.",
                ],
              },
              { type: "h", text: "What admins can do" },
              {
                type: "bullets",
                items: [
                  "Add and remove members.",
                  "Promote other members to admin.",
                  "Change the group name, photo and description.",
                  "Set the disappearing-messages timer.",
                ],
              },
              {
                type: "p",
                text: "Anyone can leave a group at any time from the group info screen.",
              },
            ],
          },
          {
            id: "organise",
            title: "How to pin, favourite or archive a chat",
            body: [
              {
                type: "steps",
                items: [
                  "Tap and hold the conversation in your chat list.",
                  "Choose **Pin**, **Add to Favourites**, **Mute** or **Archive**.",
                ],
              },
              {
                type: "bullets",
                items: [
                  "**Pinned** chats stay at the top of the list.",
                  "**Favourites** can be shown on their own with the filter above the chat list.",
                  "**Archived** chats move out of the main list into Archived, and come back if you unarchive them.",
                ],
              },
              {
                type: "p",
                text: "Everything else is sorted by most recent activity, with groups and one-to-one chats mixed together.",
              },
            ],
          },
          {
            id: "export",
            title: "How to export a chat",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat and tap the contact or group name at the top.",
                  "Tap **Export chat**.",
                  "Choose **Without media** for a text transcript, or **Attach media** to include the photos, videos and files.",
                  "Pick where to send or save the export.",
                ],
              },
              {
                type: "note",
                text: "Note: An export is an ordinary file. It leaves Waow's end-to-end encryption the moment you share it, so keep it somewhere you trust.",
              },
            ],
          },
        ],
      },
      {
        id: "message-status",
        icon: "done_all",
        title: "Message Status",
        articles: [
          {
            id: "ticks",
            title: "About the ticks next to your messages",
            body: [
              {
                type: "bullets",
                items: [
                  "**Clock** — the message is still on your phone and hasn't been sent yet, usually because you are offline.",
                  "**One tick** — Waow has accepted the message.",
                  "**Two grey ticks** — it reached the other person's device.",
                  "**Two blue ticks** — they opened the chat and read it.",
                ],
              },
              {
                type: "p",
                text: "Ticks only ever move forward. A receipt that arrives late can never turn a read message back into a delivered one.",
              },
              {
                type: "note",
                text: "Note: If you turn off read receipts in Settings → Privacy, you stop sending blue ticks and you stop seeing them from other people. Blue ticks in groups and for voice messages are not affected.",
              },
            ],
          },
          {
            id: "not-sending",
            title: "My message won't send",
            body: [
              {
                type: "p",
                text: "A clock icon means Waow is waiting for a connection. The message is already saved on your device and is sent automatically as soon as you are back online — even if you close the app or your phone restarts in the meantime.",
              },
              {
                type: "p",
                text: "Each message keeps the same identity when it is retried, so a resend can never arrive twice.",
              },
              { type: "h", text: "If messages stay stuck" },
              {
                type: "steps",
                items: [
                  "Check that your phone has a working internet connection.",
                  "Check that Waow is allowed to use mobile data in your phone's settings.",
                  "Turn off any VPN or content blocker and try again.",
                  "Close and reopen Waow.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "translation",
        icon: "translate",
        title: "Translation",
        articles: [
          {
            id: "translate-setup",
            title: "How to set up chat translation",
            body: [
              {
                type: "p",
                text: "Chat translation lets you read a message in your own language without leaving the conversation. You choose the language once and it applies everywhere.",
              },
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Chats** → **Chat Translation**.",
                  "Tap **Translate to** and choose the language you read in.",
                  "Turn on **Auto-translate** if you want incoming messages translated without asking.",
                ],
              },
              {
                type: "p",
                text: "Translations appear underneath the original message, never in place of it, so you can always see exactly what was sent.",
              },
              {
                type: "note",
                text: "Note: Turning **Auto-translate** off also hides the Translate option in chats. Leave it on if you want to translate messages one at a time.",
              },
            ],
          },
          {
            id: "translate-message",
            title: "How to translate a single message",
            body: [
              {
                type: "steps",
                items: [
                  "Tap and hold the message.",
                  "Tap **More** → **Translate**.",
                  "The translation appears under the message once it is ready.",
                ],
              },
              {
                type: "p",
                text: "To hide a translation again, tap the close button next to it. The original message is never changed.",
              },
              {
                type: "p",
                text: "This works in one-to-one chats and in groups. Any **@mentions** in the message are kept as they are rather than being translated.",
              },
            ],
          },
          {
            id: "transliteration",
            title: "How to show pronunciation with a translation",
            body: [
              {
                type: "p",
                text: "Transliteration writes the translated text out in the Latin alphabet, so you can sound out a language whose script you don't read.",
              },
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Chats** → **Chat Translation**.",
                  "Turn on **Transliteration**.",
                ],
              },
              {
                type: "p",
                text: "The pronunciation is shown as a second line below the translation. Turning it off leaves the translation itself unchanged.",
              },
            ],
          },
          {
            id: "translate-languages",
            title: "Which languages Waow can translate",
            body: [
              {
                type: "p",
                text: "Waow translates between more than a hundred languages. Lao and English are both supported, and Lao is the default target language.",
              },
              {
                type: "p",
                text: "The full list is in **Settings** → **Chats** → **Chat Translation** → **Translate to**, and includes the languages most used across South East Asia — Burmese, Khmer, Thai, Vietnamese, Chinese, Malay, Indonesian, Filipino and Hmong among them.",
              },
            ],
          },
          {
            id: "translate-privacy",
            title: "Does translation affect end-to-end encryption?",
            body: [
              {
                type: "p",
                text: "Yes, in one specific way, and it is worth understanding before you turn translation on.",
              },
              {
                type: "p",
                text: "Messages reach you end-to-end encrypted as normal, and are decrypted on your device. When a message is translated, that decrypted text is sent to Waow's translation service, translated there, and the result is sent back to your device. So the text of a message you translate is handled by our service rather than staying only on your phone.",
              },
              {
                type: "p",
                text: "Messages you never translate are not sent anywhere. Turning **Auto-translate** off means nothing is translated unless you ask for it message by message.",
              },
              {
                type: "note",
                text: "Note: If a conversation is sensitive enough that it should never leave your device, leave Auto-translate off and don't translate it.",
              },
            ],
          },
          {
            id: "translate-problems",
            title: "A translation is missing or looks wrong",
            body: [
              { type: "h", text: "The translation says it failed" },
              {
                type: "p",
                text: "Translation needs a working connection to Waow. Check that you are online and try again — the message itself is unaffected.",
              },
              { type: "h", text: "I can't see the Translate option" },
              {
                type: "p",
                text: "Open **Settings** → **Chats** → **Chat Translation** and check that **Auto-translate** is on. With it off, the Translate option is hidden everywhere.",
              },
              { type: "h", text: "The wording is off" },
              {
                type: "p",
                text: "Translations are produced automatically, so slang, jokes and regional expressions often come through literally. The original message is always shown above the translation — read that if something seems strange.",
              },
            ],
          },
        ],
      },
      {
        id: "appearance",
        icon: "palette",
        title: "Appearance",
        articles: [
          {
            id: "themes",
            title: "How to change your theme and wallpaper",
            body: [
              { type: "h", text: "Change the theme" },
              {
                type: "steps",
                items: ["Open **Settings** → **Appearance**.", "Choose the theme you want."],
              },
              {
                type: "p",
                text: "The Love theme adds a warmer palette and playful floating emoji effects to your conversations.",
              },
              { type: "h", text: "Change your chat wallpaper" },
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Chats** → **Wallpaper**.",
                  "Choose a picture from the gallery or your own library.",
                  "Check the preview and tap **Set wallpaper**.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "calls",
    icon: "call",
    title: "Voice and Video Calls",
    blurb: "Placing calls, group calls, call quality and ringing problems.",
    sections: [
      {
        id: "making-calls",
        icon: "call_made",
        title: "Making Calls",
        articles: [
          {
            id: "make-call",
            title: "How to make a voice or video call",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat with the person you want to call.",
                  "Tap the phone icon for a voice call, or the camera icon for a video call.",
                ],
              },
              {
                type: "p",
                text: "You can also call from the **Calls** tab, or from a contact's info screen. During a call, tap the camera icon to switch between voice and video.",
              },
              {
                type: "note",
                text: "Note: The first time you call, your phone asks for microphone and camera permission. Waow cannot place a call until you allow it.",
              },
            ],
          },
          {
            id: "group-call",
            title: "How to make a group call",
            body: [
              {
                type: "steps",
                items: [
                  "Open a group chat and tap the call icon, or start a normal call first.",
                  "Tap **Add participant** to bring more people in.",
                ],
              },
              {
                type: "p",
                text: "Everyone who joins appears in a tiled layout. Tap a tile to make that person full screen.",
              },
            ],
          },
        ],
      },
      {
        id: "call-troubleshooting",
        icon: "build",
        title: "Troubleshooting",
        articles: [
          {
            id: "call-quality",
            title: "My call quality is poor",
            body: [
              {
                type: "p",
                text: "Calls need a steady connection more than a fast one, so a weak Wi-Fi signal is often worse than mobile data.",
              },
              {
                type: "steps",
                items: [
                  "Move closer to your router, or switch between Wi-Fi and mobile data to see which is more stable.",
                  "Turn off video — a voice call needs far less data.",
                  "Close other apps that are streaming or downloading in the background.",
                  "If you are on speaker in a noisy room, switch to headphones.",
                ],
              },
            ],
          },
          {
            id: "not-ringing",
            title: "My phone doesn't ring for incoming calls",
            body: [
              {
                type: "steps",
                items: [
                  "Open your phone's **Settings** → **Notifications** → **Waow** and make sure notifications are allowed.",
                  "Check that Focus or Do Not Disturb is not filtering Waow.",
                  "Turn off any battery-saving mode that stops apps working in the background.",
                  "Check that the caller is not muted or blocked.",
                ],
              },
              {
                type: "note",
                text: "Note: On iPhone, incoming Waow calls use the normal iOS call screen, so they also follow your Silence Unknown Callers and Focus settings.",
              },
            ],
          },
        ],
      },
      {
        id: "call-security",
        icon: "lock",
        title: "Call Security",
        articles: [
          {
            id: "call-encryption",
            title: "Are Waow calls encrypted?",
            body: [
              {
                type: "p",
                text: "Yes. Voice and video calls are end-to-end encrypted between the people on the call, one-to-one and in groups.",
              },
              {
                type: "p",
                text: "Waow does not record your calls and cannot listen to them. Only the call's start time, duration and participants are needed to connect it.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "media",
    icon: "photo_library",
    title: "Photos, Videos and Storage",
    blurb: "Downloads, media quality, freeing up space and encrypted backups.",
    sections: [
      {
        id: "media-basics",
        icon: "image",
        title: "Media",
        articles: [
          {
            id: "auto-download",
            title: "How to control what downloads automatically",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Storage and data** → **Media auto-download**.",
                  "Choose **Wi-Fi** or **Mobile data**.",
                  "Turn each of **Photos**, **Audio**, **Videos** and **Documents** on or off.",
                ],
              },
              {
                type: "p",
                text: "By default only photos download automatically on mobile data. Anything you turn off shows a download button instead, so you choose what to spend data on.",
              },
            ],
          },
          {
            id: "download-button",
            title: "How to download or cancel a file",
            body: [
              {
                type: "steps",
                items: [
                  "Tap the round arrow on the message to start the download.",
                  "While it runs, the arrow becomes a progress ring with a stop square — tap it to cancel.",
                  "If the download fails, tap the retry button to try again.",
                ],
              },
              {
                type: "p",
                text: "Photos show a blurred preview behind the control so you can decide whether it is worth downloading.",
              },
            ],
          },
          {
            id: "editing",
            title: "How to edit a photo or video before sending",
            body: [
              {
                type: "steps",
                items: [
                  "Choose a photo or video in the chat.",
                  "Use the tools at the top to crop, draw, add text or trim a video.",
                  "Add a caption at the bottom, then tap send.",
                ],
              },
              {
                type: "p",
                text: "In the full-screen viewer you can pinch, double-tap and drag to zoom into a picture someone sent you.",
              },
            ],
          },
          {
            id: "voice-notes",
            title: "How to send a voice message",
            body: [
              {
                type: "steps",
                items: [
                  "Tap and hold the microphone button in the message box and speak.",
                  "Slide up to lock recording so you can let go and keep talking.",
                  "Release, or tap send, to send it. Slide away to cancel.",
                ],
              },
              {
                type: "note",
                text: "Note: Waow asks for microphone permission the first time you record.",
              },
            ],
          },
        ],
      },
      {
        id: "storage",
        icon: "storage",
        title: "Storage",
        articles: [
          {
            id: "manage-storage",
            title: "How to free up space on your phone",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Storage and data** → **Manage storage**.",
                  "Review the totals for photos, videos, audio and documents.",
                  "Tap a conversation to see its media in a grid.",
                  "Select the items you no longer need and tap delete.",
                ],
              },
              {
                type: "p",
                text: "Conversations are listed largest first, so the chats worth clearing are at the top. **Free up space** clears larger files across all chats at once.",
              },
              {
                type: "note",
                text: "Note: Deleting media here removes the file from your phone. The message stays in the chat.",
              },
            ],
          },
          {
            id: "evicted",
            title: "Why does an old photo say \"Tap to download\" again?",
            body: [
              {
                type: "p",
                text: "The file is no longer on your phone — either you cleared it in Manage storage, or it never downloaded because auto-download was off for that type of file.",
              },
              {
                type: "p",
                text: "The message itself is still yours. Tap it to fetch the file again while it is still available.",
              },
            ],
          },
        ],
      },
      {
        id: "backup-restore",
        icon: "cloud_upload",
        title: "Back Up and Restore",
        articles: [
          {
            id: "backup",
            title: "How to back up your chats",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Chats** → **Chat backup**.",
                  "Tap **Create encrypted backup**.",
                  "Enter a password of at least eight characters and confirm it.",
                  "Wait for the backup to finish, then save the file somewhere safe.",
                ],
              },
              {
                type: "p",
                text: "The backup is encrypted with your password before it leaves the app, so nobody — including Waow — can open it without that password.",
              },
              {
                type: "note",
                text: "Note: The password cannot be reset or recovered. If you lose it, the backup cannot be opened.",
              },
            ],
          },
          {
            id: "restore",
            title: "How to restore from a backup",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Chats** → **Chat backup**.",
                  "Tap **Restore from backup file**.",
                  "Choose the backup file.",
                  "Enter the password you set when you created it and confirm.",
                ],
              },
              {
                type: "note",
                text: "Note: Restoring replaces the chats currently on this device. Create a fresh backup first if there is anything on it you want to keep.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "privacy",
    icon: "lock",
    title: "Privacy, Safety and Security",
    blurb: "Encryption, App Lock, locked chats, privacy settings, blocking and reporting.",
    sections: [
      {
        id: "encryption",
        icon: "enhanced_encryption",
        title: "Encryption",
        articles: [
          {
            id: "e2ee",
            title: "About end-to-end encryption",
            body: [
              {
                type: "p",
                text: "Your messages are locked on your device with a key only the people in the chat hold, and unlocked on theirs. Nobody in between — not the network you are on, and not Waow — can read them.",
              },
              {
                type: "p",
                text: "This covers one-to-one chats, groups, photos and videos, voice messages, and voice and video calls.",
              },
              {
                type: "note",
                text: "Note: Encryption protects a message in transit. It cannot stop the person you sent it to from screenshotting, saving or forwarding it.",
              },
            ],
          },
          {
            id: "verify-code",
            title: "How to verify a chat is encrypted",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat and tap the contact's name at the top.",
                  "Tap **Encryption**.",
                  "Compare the security code — scan their QR code if you are together, or read the digits out loud if you are apart.",
                ],
              },
              {
                type: "p",
                text: "Matching codes confirm that nobody is sitting in the middle of the conversation.",
              },
              {
                type: "note",
                text: "Note: The code changes if your contact reinstalls Waow or switches phone. That is normal, but it is worth checking again.",
              },
            ],
          },
        ],
      },
      {
        id: "app-chat-lock",
        icon: "phonelink_lock",
        title: "App and Chat Lock",
        articles: [
          {
            id: "app-lock",
            title: "How to lock the whole app",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Privacy** → **App Lock**.",
                  "Turn on **Require Face ID** (or **Touch ID**).",
                  "Confirm with your face, fingerprint or device passcode.",
                ],
              },
              {
                type: "p",
                text: "Waow then asks for biometrics every time you open it, and hides your conversations behind a cover in the app switcher so nothing is visible when you swipe between apps.",
              },
              {
                type: "note",
                text: "Note: If biometrics fail, your device passcode unlocks Waow. There is no separate Waow PIN for App Lock.",
              },
            ],
          },
          {
            id: "chat-lock",
            title: "How to lock a single chat",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat and tap the contact or group name at the top.",
                  "Turn on **Lock chat**.",
                  "Confirm with Face ID or Touch ID.",
                ],
              },
              {
                type: "p",
                text: "The conversation then shows as **Locked chat** in your list with no preview of the message, and needs biometrics to open. This is useful when you hand your unlocked phone to someone but want one conversation kept private.",
              },
            ],
          },
          {
            id: "screenshot",
            title: "About screenshot protection",
            body: [
              {
                type: "p",
                text: "Contact info screens are protected against screen capture, so someone else's profile cannot be quietly saved from your phone.",
              },
              {
                type: "note",
                text: "Note: Screenshots inside conversations cannot be prevented on every device. Treat anything you send as something the other person can keep.",
              },
            ],
          },
        ],
      },
      {
        id: "privacy-settings",
        icon: "visibility",
        title: "Privacy Settings",
        articles: [
          {
            id: "audience",
            title: "How to choose who can see your last seen, photo and About",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Privacy**.",
                  "Tap **Last seen**, **Profile photo** or **About**.",
                  "Choose **Everyone**, **My Contacts**, or **My Contacts Except…** and pick who to exclude.",
                ],
              },
              {
                type: "p",
                text: "Profile photo and About can also be set to **Same as Last seen**, so one change covers all three.",
              },
              { type: "h", text: "Read receipts" },
              {
                type: "p",
                text: "Read receipts are a single switch in the same screen. If you turn them off, you stop sending blue ticks and you stop seeing them from other people.",
              },
            ],
          },
        ],
      },
      {
        id: "safety",
        icon: "shield",
        title: "Safety",
        articles: [
          {
            id: "block",
            title: "How to block or report someone",
            body: [
              {
                type: "steps",
                items: [
                  "Open the chat and tap the contact's name at the top.",
                  "Scroll down and tap **Block** or **Report**.",
                  "Choose whether to block and report in the same step.",
                ],
              },
              {
                type: "p",
                text: "Blocking stops their messages and calls reaching you, and they are not told that you blocked them. Reporting sends the most recent messages from that chat to us so we can review the account.",
              },
              { type: "h", text: "Unblock someone" },
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Privacy** → **Blocked**.",
                  "Tap the contact and tap **Unblock**.",
                ],
              },
            ],
          },
          {
            id: "two-step",
            title: "About two-step verification",
            body: [
              {
                type: "p",
                text: "Two-step verification adds a six-digit PIN that is needed whenever your phone number is registered on a device. Even someone who intercepts an SMS code cannot take over your number without it.",
              },
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Account** → **Security**.",
                  "Tap **Set up two-step verification**.",
                  "Enter a six-digit PIN and confirm it.",
                ],
              },
              { type: "h", text: "Use a passkey instead" },
              {
                type: "p",
                text: "On supported phones you can create a passkey in the same screen, so registration is confirmed with Face ID or Touch ID rather than a code.",
              },
              {
                type: "note",
                text: "Note: Choose a PIN you will remember. It is not a password you can reset — there is no way to look it up later.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "notifications",
    icon: "notifications",
    title: "Notifications",
    blurb: "Previews, sounds, muted chats and notifications that don't arrive.",
    sections: [
      {
        id: "notification-settings",
        icon: "tune",
        title: "Notification Settings",
        articles: [
          {
            id: "turn-on",
            title: "How to turn notifications on",
            body: [
              {
                type: "p",
                text: "Waow asks for notification permission the first time you open it. If you said no, you can change it in your phone's settings.",
              },
              {
                type: "steps",
                items: [
                  "Open your phone's **Settings** → **Notifications** → **Waow**.",
                  "Allow notifications.",
                  "Back in Waow, open **Settings** → **Notifications** and turn on **Message notifications**.",
                ],
              },
            ],
          },
          {
            id: "previews",
            title: "How to hide message text in notifications",
            body: [
              {
                type: "steps",
                items: ["Open **Settings** → **Notifications**.", "Turn off **Show preview**."],
              },
              {
                type: "p",
                text: "Notifications then say only that a message arrived, without the sender's text.",
              },
            ],
          },
          {
            id: "in-app-sounds",
            title: "How to turn off sounds inside the app",
            body: [
              {
                type: "steps",
                items: ["Open **Settings** → **Notifications**.", "Turn off **In-app sounds**."],
              },
              {
                type: "p",
                text: "This controls the sounds played for messages sent and received while Waow is open, separately from your notification sound.",
              },
            ],
          },
          {
            id: "mute",
            title: "How to mute a chat",
            body: [
              {
                type: "steps",
                items: [
                  "Tap and hold the conversation in your chat list.",
                  "Tap **Mute** and choose how long for.",
                ],
              },
              {
                type: "p",
                text: "Muted chats still receive messages, they just don't make a sound or raise a banner. **Settings** → **Notifications** → **Muted chats** lists everything you have silenced, with an **Unmute all** option.",
              },
            ],
          },
        ],
      },
      {
        id: "notification-troubleshooting",
        icon: "build",
        title: "Troubleshooting",
        articles: [
          {
            id: "no-notifications",
            title: "I'm not receiving notifications",
            body: [
              {
                type: "steps",
                items: [
                  "Check that notifications are allowed for Waow in your phone's settings.",
                  "Check that the chat is not muted.",
                  "Check that Focus or Do Not Disturb is not filtering them out.",
                  "Turn off battery-saving modes that stop background activity.",
                ],
              },
            ],
          },
          {
            id: "preview-privacy",
            title: "If messages are encrypted, how can a notification show the text?",
            body: [
              {
                type: "p",
                text: "The notification arrives as ciphertext and is unlocked on your phone, by your phone, just before it is shown. The push service only ever carries the encrypted version.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "linked-devices",
    icon: "devices",
    title: "Linked Devices",
    blurb: "Using Waow on another device, transferring history and signing out.",
    sections: [
      {
        id: "using-other-devices",
        icon: "cast",
        title: "Using Waow on Other Devices",
        articles: [
          {
            id: "link",
            title: "How to link a device",
            body: [
              {
                type: "steps",
                items: [
                  "On your phone, open **Settings** → **Linked devices**.",
                  "Tap **Link a device**.",
                  "Scan the QR code shown on the other device.",
                ],
              },
              {
                type: "p",
                text: "The link is confirmed on your phone, so a code alone is not enough for someone to add themselves to your account.",
              },
            ],
          },
          {
            id: "history",
            title: "Will my chat history appear on a linked device?",
            body: [
              {
                type: "p",
                text: "Recent history is transferred to the new device when it is linked.",
              },
              {
                type: "p",
                text: "If the transfer doesn't finish, the device is still linked and new messages arrive normally. Unlink it and link it again to retry the history.",
              },
            ],
          },
          {
            id: "review",
            title: "How to see and remove linked devices",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Linked devices**.",
                  "Check the list and when each device was last active.",
                  "Tap a device you want to remove, then confirm to unlink it.",
                ],
              },
              {
                type: "note",
                text: "Note: If you see a device you don't recognise, unlink it and then set up two-step verification.",
              },
            ],
          },
          {
            id: "device-encryption",
            title: "Are linked devices end-to-end encrypted?",
            body: [
              {
                type: "p",
                text: "Yes. Each device has its own keys, and your personal messages stay end-to-end encrypted on all of them.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "account",
    icon: "account_circle",
    title: "Account and Bans",
    blurb: "Changing your number, multiple accounts, deletion and banned accounts.",
    sections: [
      {
        id: "manage-account",
        icon: "manage_accounts",
        title: "Manage Your Account",
        articles: [
          {
            id: "change-number",
            title: "How to change your phone number",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Account** → **Change number**.",
                  "Enter your old number and your new number.",
                  "Confirm the new number with the code we send you.",
                ],
              },
              {
                type: "p",
                text: "Your chats, groups and settings move with you.",
              },
              {
                type: "note",
                text: "Note: Do this before you cancel the old SIM — you need to be able to receive the verification code.",
              },
            ],
          },
          {
            id: "multi-account",
            title: "How to use two accounts on one phone",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Account** → **Switch account**.",
                  "Tap **Add account** and register the second number.",
                  "Use the same screen to move between accounts.",
                ],
              },
              {
                type: "p",
                text: "Each account keeps its own chats, contacts and settings. You do not have to sign out of the first one.",
              },
            ],
          },
          {
            id: "request-info",
            title: "How to request your account information",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Account** → **Request account info**.",
                  "Tap **Request report**.",
                  "Come back in a few days to download it.",
                ],
              },
              {
                type: "note",
                text: "Note: Because your messages are end-to-end encrypted, the report cannot include their contents. Use Export chat if you want a copy of a conversation.",
              },
            ],
          },
        ],
      },
      {
        id: "delete-account",
        icon: "person_remove",
        title: "Deleting Your Account",
        articles: [
          {
            id: "delete",
            title: "How to delete your Waow account",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Account** → **Delete account**.",
                  "Enter your phone number with its country code.",
                  "Tap **Delete my account**.",
                ],
              },
              {
                type: "p",
                text: "Deleting removes your account, your profile, your group memberships and your message history from our servers.",
              },
              {
                type: "note",
                text: "Note: This cannot be undone, and messages other people already received stay on their devices. Export anything you want to keep first.",
              },
            ],
          },
        ],
      },
      {
        id: "bans",
        icon: "block",
        title: "Bans and Reports",
        articles: [
          {
            id: "banned",
            title: "About banned accounts",
            body: [
              {
                type: "p",
                text: "Accounts are restricted for sending bulk or automated messages, impersonating other people, or behaviour reported repeatedly by other users.",
              },
              { type: "h", text: "Temporarily banned" },
              {
                type: "p",
                text: "A temporary ban usually means unofficial software was detected. Uninstall it, install the official Waow app and wait for the countdown to finish.",
              },
              {
                type: "p",
                text: "If you believe the decision was wrong, contact support@waow.app and ask for a review.",
              },
            ],
          },
          {
            id: "report-problem",
            title: "How to report a problem",
            body: [
              {
                type: "steps",
                items: [
                  "Open **Settings** → **Help** → **Report a problem**.",
                  "Describe what happened and tap send.",
                ],
              },
              {
                type: "note",
                text: "Note: The report includes diagnostic details about your app and device — never your messages, your media or your encryption keys.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const popularTopics = ["get-started", "privacy", "chats", "calls", "media", "linked-devices"];

export const popularArticles: { categoryId: string; sectionId: string; articleId: string }[] = [
  { categoryId: "chats", sectionId: "individual-group", articleId: "reply" },
  { categoryId: "chats", sectionId: "message-status", articleId: "ticks" },
  { categoryId: "privacy", sectionId: "app-chat-lock", articleId: "app-lock" },
  { categoryId: "media", sectionId: "backup-restore", articleId: "backup" },
  { categoryId: "privacy", sectionId: "safety", articleId: "two-step" },
  { categoryId: "chats", sectionId: "individual-group", articleId: "disappearing" },
  { categoryId: "chats", sectionId: "translation", articleId: "translate-setup" },
  { categoryId: "media", sectionId: "storage", articleId: "manage-storage" },
];
