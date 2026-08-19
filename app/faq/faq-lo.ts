/**
 * Lao (ລາວ) translations for the Help Centre.
 *
 * English lives in faq-data.ts and faq-i18n.ts and is the source of truth.
 * Fill in the Lao string for each key below. Any key left as an empty string
 * falls back to English at render time, so this file can be translated in
 * stages without ever showing a blank page.
 *
 * Keep **double asterisks** exactly where they appear in the English — they
 * mark the UI labels a reader has to find on screen and are rendered bold.
 * Leave arrows (→) and separators (›) as they are.
 *
 * 411 keys, 411 translated.
 * Regenerate after editing faq-data.ts with: npm run faq:i18n
 */
export const loStrings: Record<string, string> = {

  // ── Interface ──
  // en: Help Centre
  "ui.helpCentre": "ສູນຊ່ວຍເຫຼືອ",
  // en: Frequently asked questions
  "ui.breadcrumb": "ຄຳຖາມທີ່ພົບເລື້ອຍໆ",
  // en: How can we help you?
  "ui.title": "ພວກເຮົາຊ່ວຍທ່ານໄດ້ແນວໃດ?",
  // en: Search help articles…
  "ui.searchPlaceholder": "ຄົ້ນຫາບົດຄວາມຊ່ວຍເຫຼືອ…",
  // en: Search Waow help articles
  "ui.searchLabel": "ຄົ້ນຫາບົດຄວາມຊ່ວຍເຫຼືອຂອງ Waow",
  // en: Clear search
  "ui.clearSearch": "ລ້າງການຄົ້ນຫາ",
  // en: Help topics
  "ui.topicsLabel": "ຫົວຂໍ້ຊ່ວຍເຫຼືອ",
  // en: Popular topics
  "ui.popularTopics": "ຫົວຂໍ້ຍອດນິຍົມ",
  // en: Popular articles
  "ui.popularArticles": "ບົດຄວາມຍອດນິຍົມ",
  // en: Related articles
  "ui.relatedArticles": "ບົດຄວາມທີ່ກ່ຽວຂ້ອງ",
  // en: No results
  "ui.noResults": "ບໍ່ພົບຜົນລັບ",
  // en: results for
  "ui.resultsFor": "ຜົນລັບສຳລັບ",
  // en: result for
  "ui.resultForOne": "ຜົນລັບສຳລັບ",
  // en: Try a shorter phrase such as “backup”, “ticks” or “Face ID”. If you still can’t find an answer, write to
  "ui.emptyHint": "ລອງໃຊ້ຄຳສັ້ນກວ່າ ເຊັ່ນ “ສຳຮອງຂໍ້ມູນ”, “ເຄື່ອງໝາຍຖືກ” ຫຼື “Face ID”. ຖ້າຍັງບໍ່ພົບຄຳຕອບ ກະລຸນາຂຽນຫາ",
  // en: Didn’t find what you needed? Email
  "ui.didntFind": "ບໍ່ພົບສິ່ງທີ່ທ່ານຕ້ອງການບໍ? ສົ່ງອີເມວຫາ",
  // en: Still need help?
  "ui.stillNeedHelp": "ຍັງຕ້ອງການຄວາມຊ່ວຍເຫຼືອບໍ?",
  // en: If the answer you need isn’t here, write to us at support@waow.app, or open Settings → Help → Report a problem in the app so your report arrives with the diagnostic details we need. Support requests never include your messages, your media or your encryption keys.
  "ui.contactCopy": "ຖ້າຄຳຕອບທີ່ທ່ານຕ້ອງການບໍ່ມີຢູ່ນີ້ ກະລຸນາຂຽນຫາພວກເຮົາທີ່ support@waow.app ຫຼື ເປີດ ການຕັ້ງຄ່າ → ຊ່ວຍເຫຼືອ → ລາຍງານບັນຫາ ໃນແອັບ ເພື່ອໃຫ້ລາຍງານຂອງທ່ານມາພ້ອມກັບຂໍ້ມູນວິນິດໄສທີ່ພວກເຮົາຕ້ອງການ. ຄຳຮ້ອງຂໍການຊ່ວຍເຫຼືອຈະບໍ່ລວມຂໍ້ຄວາມ, ສື່ ຫຼື ກະແຈເຂົ້າລະຫັດຂອງທ່ານເລີຍ.",
  // en: Contact support
  "ui.contactSupport": "ຕິດຕໍ່ຝ່າຍຊ່ວຍເຫຼືອ",
  // en: Privacy Policy
  "ui.privacyPolicy": "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
  // en: Report a vulnerability
  "ui.reportVulnerability": "ລາຍງານຊ່ອງໂຫວ່",
  // en: Change language
  "ui.changeLanguage": "ປ່ຽນພາສາ",

  // ── Get Started ──
  // en: Get Started
  "cat.get-started.title": "ເລີ່ມຕົ້ນ",
  // en: Create your account, set up your profile and add your first contacts.
  "cat.get-started.blurb": "ສ້າງບັນຊີ, ຕັ້ງໂປຣໄຟລ໌ ແລະ ເພີ່ມລາຍຊື່ຜູ້ຕິດຕໍ່ທຳອິດຂອງທ່ານ.",

  // ── Get Started › Account Setup ──
  // en: Account Setup
  "sec.get-started.account-setup.title": "ການຕັ້ງບັນຊີ",

  // ── Get Started › Account Setup › How to create a Waow account ──
  // en: How to create a Waow account
  "art.get-started.account-setup.create-account.title": "ວິທີສ້າງບັນຊີ Waow",
  // en: Your phone number is your Waow identity. There is no separate username or password to remember, so setting up takes a minute.
  "body.get-started.account-setup.create-account.0": "ເບີໂລະສັບຂອງທ່ານຈະເປັນສິ່ງທີ່ລະບຸຕົວຕົນຂອງທ່ານໃນການໃຊ້ງານ Waow. ບໍ່ມີຊື່ຜູ້ໃຊ້ ຫຼື ລະຫັດຜ່ານແຍກຕ່າງຫາກໃຫ້ຈື່ ດັ່ງນັ້ນການຕັ້ງຄ່າໃຊ້ເວລາພຽງ 1 ນາທີ.",
  // en: Register your number
  "body.get-started.account-setup.create-account.1": "ລົງທະບຽນເບີໂທຂອງທ່ານ",
  // en: Install **Waow** from the App Store or Google Play and open it.
  "body.get-started.account-setup.create-account.2.0": "ຕິດຕັ້ງ **Waow** ຈາກ App Store ຫຼື Google Play ແລ້ວເປີດມັນ.",
  // en: Choose your country, enter your phone number and tap **Next**.
  "body.get-started.account-setup.create-account.2.1": "ເລືອກປະເທດຂອງທ່ານ, ປ້ອນເບີໂທລະສັບ ແລ້ວແຕະ **ຕໍ່ໄປ**.",
  // en: Enter the six-digit code we send you by SMS.
  "body.get-started.account-setup.create-account.2.2": "ປ້ອນລະຫັດຫົກຕົວເລກທີ່ພວກເຮົາສົ່ງໃຫ້ທ່ານທາງ SMS.",
  // en: Enter the name you want people to see, add a profile photo, and tap **Done**.
  "body.get-started.account-setup.create-account.2.3": "ປ້ອນຊື່ທີ່ທ່ານຢາກໃຫ້ຄົນອື່ນເຫັນ, ເພີ່ມຮູບໂປຣໄຟລ໌ ແລ້ວແຕະ **ສຳເລັດ**.",
  // en: Allow contacts and notifications
  "body.get-started.account-setup.create-account.3": "ອະນຸຍາດການເຂົ້າເຖິງລາຍຊື່ຕິດຕໍ່ ແລະ ການແຈ້ງເຕືອນ",
  // en: Waow asks for permission to read your address book so it can show you which of your contacts already use Waow, and for permission to send notifications so you know when a message arrives. You can change both later in your phone's settings.
  "body.get-started.account-setup.create-account.4": "Waow ຈະຂໍສິດອ່ານສະໝຸດລາຍຊື່ຕິດຕໍ່ຂອງທ່ານ ເພື່ອສະແດງໃຫ້ເຫັນວ່າຜູ້ຕິດຕໍ່ຄົນໃດໃຊ້ Waow ຢູ່ແລ້ວ ແລະ ຂໍສິດສົ່ງການແຈ້ງເຕືອນ ເພື່ອໃຫ້ທ່ານຮູ້ເມື່ອມີຂໍ້ຄວາມມາຮອດ. ທ່ານສາມາດປ່ຽນທັງສອງຢ່າງໄດ້ພາຍຫຼັງໃນການຕັ້ງຄ່າຂອງໂທລະສັບ.",
  // en: Note: Use the number you can receive SMS on right now. If you are moving to a new number, register the old one first and then use Change number so your chats move with you.
  "body.get-started.account-setup.create-account.5": "ໝາຍເຫດ: ໃຊ້ເບີທີ່ທ່ານສາມາດຮັບ SMS ໄດ້ໃນຕອນນີ້. ຖ້າທ່ານກຳລັງຍ້າຍໄປໃຊ້ເບີໃໝ່ ໃຫ້ລົງທະບຽນເບີເກົ່າກ່ອນ ແລ້ວຈຶ່ງໃຊ້ ປ່ຽນເບີໂທ ເພື່ອໃຫ້ການສົນທະນາຂອງທ່ານຍ້າຍໄປນຳ.",

  // ── Get Started › Account Setup › I didn't receive my verification code ──
  // en: I didn't receive my verification code
  "art.get-started.account-setup.no-code.title": "ຂ້ອຍບໍ່ໄດ້ຮັບລະຫັດຢືນຢັນ",
  // en: Verification codes arrive by SMS within a minute or two. If nothing arrives, work through these checks in order.
  "body.get-started.account-setup.no-code.0": "ລະຫັດຢືນຢັນຈະສົ່ງຜ່ານ SMS ພາຍໃນໜຶ່ງຫາສອງນາທີ. ຖ້າຍັງບໍ່ໄດ້ຮັບ ກະລຸນາປະຕິບັດຕາມຂັ້ນຕອນຕໍ່ໄປນີ້:",
  // en: Check that the number on screen matches your SIM exactly, including the country code.
  "body.get-started.account-setup.no-code.1.0": "ກວດວ່າເບີໃນໜ້າຈໍກົງກັບ SIM ຂອງທ່ານທຸກຢ່າງ ລວມທັງລະຫັດປະເທດ.",
  // en: Make sure your phone has signal and can receive normal text messages.
  "body.get-started.account-setup.no-code.1.1": "ໃຫ້ແນ່ໃຈວ່າໂທລະສັບຂອງທ່ານມີສັນຍານ ແລະ ຮັບຂໍ້ຄວາມໄດ້ປົກກະຕິ.",
  // en: Wait for the countdown on the verification screen to finish, then tap **Resend**.
  "body.get-started.account-setup.no-code.1.2": "ລໍຖ້າໃຫ້ການນັບຖອຍຫຼັງໃນໜ້າຢືນຢັນສິ້ນສຸດ ແລ້ວແຕະ **ສົ່ງໃໝ່**.",
  // en: Restart your phone and try once more.
  "body.get-started.account-setup.no-code.1.3": "ປິດເປີດໂທລະສັບໃໝ່ ແລ້ວລອງອີກເທື່ອໜຶ່ງ.",
  // en: I received a code I didn't request
  "body.get-started.account-setup.no-code.2": "ຂ້ອຍໄດ້ຮັບລະຫັດທີ່ບໍ່ໄດ້ຮ້ອງຂໍ",
  // en: Someone most likely mistyped their own number. Ignore the message — nobody can register your number without the code.
  "body.get-started.account-setup.no-code.3": "ອາດຈະມີຄົນພິມເບີໂທຂອງຕົນເອງຜິດ. ທ່ານສາມາດຂ້າມຂໍ້ຄວາມນີ້ໄດ້ — ບໍ່ມີໃຜສາມາດລົງທະບຽນເບີໂທຂອງທ່ານໄດ້ ໂດຍບໍ່ມີລະຫັດຢືນຢັນ.",
  // en: Note: Never share a Waow verification code with anyone, including someone claiming to be from Waow support. The code is all it takes to register your number on another phone.
  "body.get-started.account-setup.no-code.4": "ໝາຍເຫດ: ຢ່າແບ່ງປັນລະຫັດຢືນຢັນ Waow ຂອງທ່ານໃຫ້ຜູ້ອື່ນເດັດຂາດ, ລວມເຖິງຜູ້ທີ່ອ້າງວ່າເປັນຝ່າຍຊ່ວຍເຫຼືອຂອງ Waow. ພຽງແຕ່ມີລະຫັດນີ້ ກໍສາມາດນຳໄປລົງທະບຽນເບີໂທຂອງທ່ານໃນໂທລະສັບເຄື່ອງອື່ນໄດ້.",

  // ── Get Started › Account Setup › How to set your name, photo and About ──
  // en: How to set your name, photo and About
  "art.get-started.account-setup.profile.title": "ວິທີຕັ້ງຊື່, ຮູບໂປຣໄຟລ໌ ແລະ ຂໍ້ມູນກ່ຽວກັບຕົວທ່ານ",
  // en: Open **Settings** and tap your name at the top.
  "body.get-started.account-setup.profile.0.0": "ເປີດ **ການຕັ້ງຄ່າ** ແລ້ວແຕະຊື່ຂອງທ່ານຢູ່ດ້ານເທິງ.",
  // en: Tap your photo to take a new picture or choose one from your library, then move and scale it inside the square and tap **Done**.
  "body.get-started.account-setup.profile.0.1": "ແຕະຮູບເພື່ອຖ່າຍຮູບໃໝ່ ຫຼື ເລືອກຈາກຄັງຮູບ. ຈາກນັ້ນ ເລື່ອນ ແລະ ປັບຂະໜາດຮູບໃຫ້ຢູ່ໃນກອບ ແລະ ແຕະ ສຳເລັດ",
  // en: Tap **Name** or **About** to change the text other people see.
  "body.get-started.account-setup.profile.0.2": "ແຕະ “ຊື່” ຫຼື “ກ່ຽວກັບ” ເພື່ອແກ້ໄຂຂໍ້ຄວາມທີ່ຈະສະແດງໃນໂປຣໄຟລ໌",
  // en: Profile photos are cropped square before they are uploaded, so you choose exactly which part of the picture people see.
  "body.get-started.account-setup.profile.1": "ຮູບໂປຣໄຟລ໌ຈະຖືກຕັດເປັນຮູບສີ່ຫຼ່ຽມກ່ອນອັບໂຫຼດ, ເພື່ອໃຫ້ທ່ານເລືອກໄດ້ວ່າຈະສະແດງສ່ວນໃດຂອງຮູບໃນໂປຣໄຟລ໌.",
  // en: Note: Who can see your photo and About depends on your privacy settings. See How to choose who can see your last seen, photo and About.
  "body.get-started.account-setup.profile.2": "ໝາຍເຫດ: ຜູ້ທີ່ສາມາດເຫັນຮູບຂອງທ່ານ ແລະ ຂໍ້ມູນກ່ຽວກັບຕົວທ່ານ ຂຶ້ນກັບການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວ. ສາມາດເບິ່ງການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວໄດ້ທີ່ \"ວິທີເລືອກວ່າໃຜສາມາດເຫັນເວລາອອນລາຍລ່າສຸດ, ຮູບ ແລະ ຂໍ້ມູນ ຂອງທ່ານໄດ້\"",

  // ── Get Started › Adding Contacts ──
  // en: Adding Contacts
  "sec.get-started.adding-contacts.title": "ການເພີ່ມລາຍຊື່ຕິດຕໍ່",

  // ── Get Started › Adding Contacts › How to add a contact ──
  // en: How to add a contact
  "art.get-started.adding-contacts.add-contact.title": "ວິທີເພີ່ມລາຍຊື່ຕິດຕໍ່",
  // en: Waow matches your phone's address book against people who already have an account, so anyone you have saved appears automatically once they join.
  "body.get-started.adding-contacts.add-contact.0": "Waow ຈະກວດສອບລາຍຊື່ໃນໂທລະສັບຂອງທ່ານວ່າໃຜມີບັນຊີ Waow ແລ້ວ. ດັ່ງນັ້ນ, ຄົນທີ່ທ່ານບັນທຶກເບີໄວ້ຈະປາກົດອັດຕະໂນມັດເມື່ອພວກເຂົາເຂົ້າໃຊ້ງານ Waow.",
  // en: Add someone by number
  "body.get-started.adding-contacts.add-contact.1": "ເພີ່ມຜູ້ຕິດຕໍ່ດ້ວຍເບີໂທ",
  // en: Tap the new chat button on the **Chats** tab.
  "body.get-started.adding-contacts.add-contact.2.0": "ແຕະປຸ່ມສົນທະນາໃໝ່ໃນແຖບ ສົນທະນາ (ສັນຍາລັກ +)",
  // en: Tap **New contact**.
  "body.get-started.adding-contacts.add-contact.2.1": "ແຕະ **ຜູ້ຕິດຕໍ່ໃໝ່**.",
  // en: Enter their name and phone number with its country code, then tap **Save**.
  "body.get-started.adding-contacts.add-contact.2.2": "ປ້ອນຊື່ ແລະ ເບີໂທລະສັບພ້ອມລະຫັດປະເທດ ແລ້ວແຕະ **ບັນທຶກ**.",
  // en: Note: If a contact doesn't appear, check that the number is saved with the full country code and that Waow has permission to read your contacts.
  "body.get-started.adding-contacts.add-contact.3": "ໝາຍເຫດ: ຖ້າລາຍຊື່ຕິດຕໍ່ບໍ່ປາກົດ, ໃຫ້ກວດສອບວ່າເບີໂທຖືກບັນທຶກພ້ອມລະຫັດປະເທດຄົບຖ້ວນ ແລະ Waow ໄດ້ຮັບອະນຸຍາດໃຫ້ເຂົ້າເຖິງລາຍຊື່ຕິດຕໍ່ຂອງທ່ານແລ້ວຫຼືບໍ່.",

  // ── Get Started › Adding Contacts › How to add a contact with a QR code ──
  // en: How to add a contact with a QR code
  "art.get-started.adding-contacts.qr-code.title": "ວິທີເພີ່ມລາຍຊື່ຕິດຕໍ່ດ້ວຍ QR code",
  // en: A QR code is the quickest way to swap numbers when you are together in person — neither of you has to type anything.
  "body.get-started.adding-contacts.qr-code.0": "QR Code ເປັນວິທີທີ່ໄວທີ່ສຸດໃນການແລກປ່ຽນເບີໂທເມື່ອທ່ານພົບກັນ. ບໍ່ຈຳເປັນຕ້ອງພິມຫຍັງເລີຍ.",
  // en: Show your code
  "body.get-started.adding-contacts.qr-code.1": "ສະແດງ code ຂອງທ່ານ",
  // en: Open **Settings**.
  "body.get-started.adding-contacts.qr-code.2.0": "ເປີດ **ການຕັ້ງຄ່າ**.",
  // en: Tap the **QR code** icon next to your name.
  "body.get-started.adding-contacts.qr-code.2.1": "ແຕະໄອຄອນ **QR code** ຖັດຈາກຊື່ຂອງທ່ານ.",
  // en: Scan someone else's code
  "body.get-started.adding-contacts.qr-code.3": "ສະແກນ code ຂອງຄົນອື່ນ",
  // en: Open **Settings** and tap the **QR code** icon.
  "body.get-started.adding-contacts.qr-code.4.0": "ເປີດ **ການຕັ້ງຄ່າ** ແລ້ວແຕະໄອຄອນ **QR code**.",
  // en: Tap **Scan code** and point your camera at their code.
  "body.get-started.adding-contacts.qr-code.4.1": "ແຕະ ສະແກນ QR code ແລ້ວໃຊ້ກ້ອງສະແກນ code ຂອງເຂົາ.",
  // en: Check the number that appears, add a name and tap **Save**.
  "body.get-started.adding-contacts.qr-code.4.2": "ກວດເບີທີ່ປາກົດຂຶ້ນ, ເພີ່ມຊື່ ແລ້ວແຕະ **ບັນທຶກ**.",

  // ── Get Started › Adding Contacts › How to invite a friend to Waow ──
  // en: How to invite a friend to Waow
  "art.get-started.adding-contacts.invite.title": "ວິທີເຊີນໝູ່ມາໃຊ້ Waow",
  // en: Open **Settings** → **Invite a friend**.
  "body.get-started.adding-contacts.invite.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ເຊີນໝູ່**.",
  // en: Choose a contact from the list.
  "body.get-started.adding-contacts.invite.0.1": "ເລືອກລາຍຊື່ຕິດຕໍ່ຈາກລາຍການ.",
  // en: Pick how you want to send the invitation from your phone's share sheet.
  "body.get-started.adding-contacts.invite.0.2": "ເລືອກວິທີທີ່ທ່ານຕ້ອງການສົ່ງຄຳເຊີນຈາກໜ້າແບ່ງປັນໃນໂທລະສັບຂອງທ່ານ",
  // en: The invitation contains a short link that takes them straight to the download page.
  "body.get-started.adding-contacts.invite.1": "ໃນຄຳເຊີນຈະມີລິ້ງສັ້ນໆ ເຊິ່ງຈະພາໄປຫາໜ້າດາວໂຫຼດໂດຍກົງ",

  // ── Get Started › About Waow ──
  // en: About Waow
  "sec.get-started.about-waow.title": "ກ່ຽວກັບ Waow",

  // ── Get Started › About Waow › Which devices Waow supports ──
  // en: Which devices Waow supports
  "art.get-started.about-waow.devices-supported.title": "Waow ຮອງຮັບອຸປະກອນໃດແດ່",
  // en: **iPhone** — iOS, with the full feature set.
  "body.get-started.about-waow.devices-supported.0.0": "iPhone — ຮອງຮັບທຸກຟັງຊັນໃນ IOS",
  // en: **iPad** — a two-column layout with your chat list beside the open conversation.
  "body.get-started.about-waow.devices-supported.0.1": "**iPad** — ຮູບແບບສອງຖັນ ໂດຍມີລາຍການສົນທະນາຢູ່ຂ້າງການສົນທະນາທີ່ເປີດຢູ່.",
  // en: **Android** — phones and tablets.
  "body.get-started.about-waow.devices-supported.0.2": "**Android** — ໂທລະສັບ ແລະ ແທັບເລັດ.",
  // en: You can also link extra devices to the same account. See Linked Devices.
  "body.get-started.about-waow.devices-supported.1": "ທ່ານຍັງສາມາດເຊື່ອມອຸປະກອນເພີ່ມເຕີມເຂົ້າກັບບັນຊີດຽວກັນໄດ້. ເບິ່ງເພີ່ມເຕີມໄດ້ທີ່ \"ອຸປະກອນທີ່ເຊື່ອມຕໍ່\"",

  // ── Get Started › About Waow › Does Waow cost anything? ──
  // en: Does Waow cost anything?
  "art.get-started.about-waow.cost.title": "Waow ເສຍຄ່າໃຊ້ຈ່າຍບໍ?",
  // en: No. Waow is free to use, with no subscription and no charge per message.
  "body.get-started.about-waow.cost.0": "Waow ໃຫ້ໃຊ້ງານຟຣີ ໂດຍບໍ່ມີຄ່າສະມາຊິກ ແລະ ບໍ່ມີຄ່າບໍລິການຕໍ່ຂໍ້ຄວາມ.",
  // en: Messages, media and calls travel over your internet connection, so your normal mobile data or Wi-Fi charges still apply. Turning off media auto-download on mobile data is the easiest way to keep that low — see How to control what downloads automatically.
  "body.get-started.about-waow.cost.1": "ຂໍ້ຄວາມ, ໄຟລ໌ສື່ ແລະ ການໂທ ໃຊ້ການເຊື່ອມຕໍ່ອິນເຕີເນັດ, ດັ່ງນັ້ນອາດມີຄ່າໃຊ້ງານດາຕ້າມືຖື ຫຼື Wi-Fi ຕາມປົກກະຕິ. ເພື່ອປະຫຍັດຂໍ້ມູນມືຖື, ທ່ານສາມາດປິດການດາວໂຫຼດໄຟລ໌ສື່ອັດຕະໂນມັດໄດ້ — ເບິ່ງເພີ່ມເຕີມໄດ້ທີ່ “ວິທີຄວບຄຸມການດາວໂຫຼດອັດຕະໂນມັດ”",

  // ── Chats ──
  // en: Chats
  "cat.chats.title": "ສົນທະນາ",
  // en: Sending, editing, replies, groups, translation and disappearing messages.
  "cat.chats.blurb": "ການສົ່ງ, ການແກ້ໄຂ, ການຕອບກັບ, ກຸ່ມ, ການແປ ແລະ ຂໍ້ຄວາມຫາຍໄປ.",

  // ── Chats › Individual and Group Chats ──
  // en: Individual and Group Chats
  "sec.chats.individual-group.title": "ການສົນທະນາສ່ວນຕົວ ແລະ ກຸ່ມ",

  // ── Chats › Individual and Group Chats › How to reply to a message ──
  // en: How to reply to a message
  "art.chats.individual-group.reply.title": "ວິທີຕອບກັບຂໍ້ຄວາມ",
  // en: Swipe right on the message.
  "body.chats.individual-group.reply.0.0": "ປັດຂໍ້ຄວາມໄປທາງຂວາ.",
  // en: Enter your response and tap send.
  "body.chats.individual-group.reply.0.1": "ພິມຄຳຕອບຂອງທ່ານ ແລ້ວແຕະສົ່ງ.",
  // en: The message you replied to is quoted above yours. Tap the quote to jump back to the original.
  "body.chats.individual-group.reply.1": "ຂໍ້ຄວາມທີ່ທ່ານຕອບກັບຈະຖືກອ້າງອີງຢູ່ເທິງຂໍ້ຄວາມຂອງທ່ານ. ແຕະຄຳອ້າງອີງເພື່ອກັບໄປຫາຂໍ້ຄວາມຕົ້ນສະບັບ.",
  // en: React to a message instead
  "body.chats.individual-group.reply.2": "ຫຼື ຈະໃສ່ຄວາມຮູ້ສຶກໃສ່ຂໍ້ຄວາມກໍໄດ້",
  // en: Tap and hold the message.
  "body.chats.individual-group.reply.3.0": "ແຕະຂໍ້ຄວາມຄ້າງໄວ້.",
  // en: Choose an emoji from the row that appears.
  "body.chats.individual-group.reply.3.1": "ເລືອກອີໂມຈິຈາກແຖວທີ່ປາກົດຂຶ້ນ.",
  // en: Tap and hold, then choose **More** to forward, copy, star or pin the message instead.
  "body.chats.individual-group.reply.4": "ແຕະຄ້າງໄວ້ ແລ້ວເລືອກ **ເພີ່ມເຕີມ** ເພື່ອສົ່ງຕໍ່, ສຳເນົາ, ຕິດດາວ ຫຼື ປັກໝຸດຂໍ້ຄວາມແທນ.",

  // ── Chats › Individual and Group Chats › How to edit a message ──
  // en: How to edit a message
  "art.chats.individual-group.edit.title": "ວິທີແກ້ໄຂຂໍ້ຄວາມ",
  // en: You can edit a message you sent for up to 15 minutes after sending it.
  "body.chats.individual-group.edit.0": "ທ່ານສາມາດແກ້ໄຂຂໍ້ຄວາມທີ່ທ່ານສົ່ງໄປແລ້ວໄດ້ພາຍໃນ 15 ນາທີຫຼັງຈາກສົ່ງ.",
  // en: Tap and hold your message.
  "body.chats.individual-group.edit.1.0": "ແຕະຂໍ້ຄວາມຂອງທ່ານຄ້າງໄວ້.",
  // en: Tap **More** → **Edit**.
  "body.chats.individual-group.edit.1.1": "ແຕະ **ເພີ່ມເຕີມ** → **ແກ້ໄຂ**.",
  // en: Change the text and tap send.
  "body.chats.individual-group.edit.1.2": "ປ່ຽນຂໍ້ຄວາມ ແລ້ວແຕະສົ່ງ.",
  // en: The message is replaced for everyone in the chat and marked as edited, so nobody is misled about what was originally sent.
  "body.chats.individual-group.edit.2": "ຂໍ້ຄວາມຈະຖືກປ່ຽນແທນສຳລັບທຸກຄົນໃນການສົນທະນາ ແລະ ຖືກໝາຍວ່າແກ້ໄຂແລ້ວ ດັ່ງນັ້ນຈຶ່ງບໍ່ມີໃຜເຂົ້າໃຈຜິດກ່ຽວກັບສິ່ງທີ່ສົ່ງມາໃນເບື້ອງຕົ້ນ.",
  // en: Note: After 15 minutes the Edit option disappears. Delete the message and send a new one instead.
  "body.chats.individual-group.edit.3": "ໝາຍເຫດ: ຫຼັງຈາກ 15 ນາທີ ຕົວເລືອກແກ້ໄຂຈະຫາຍໄປ. ໃຫ້ລົບຂໍ້ຄວາມນັ້ນ ແລ້ວສົ່ງຂໍ້ຄວາມໃໝ່ແທນ.",

  // ── Chats › Individual and Group Chats › How to delete messages ──
  // en: How to delete messages
  "art.chats.individual-group.delete.title": "ວິທີລົບຂໍ້ຄວາມ",
  // en: Delete for me
  "body.chats.individual-group.delete.0": "ລົບສຳລັບຂ້ອຍ",
  // en: Tap and hold the message.
  "body.chats.individual-group.delete.1.0": "ແຕະຂໍ້ຄວາມຄ້າງໄວ້.",
  // en: Tap **Delete** → **Delete for me**.
  "body.chats.individual-group.delete.1.1": "ແຕະ ລົບ → ລົບສຳລັບຂ້ອຍ.",
  // en: The message is removed from your device only. Everyone else still sees it.
  "body.chats.individual-group.delete.2": "ຂໍ້ຄວາມຈະຖືກລຶບອອກຈາກອຸປະກອນຂອງທ່ານເທົ່ານັ້ນ. ຄົນອື່ນຍັງເຫັນຢູ່.",
  // en: Delete for everyone
  "body.chats.individual-group.delete.3": "ລົບສຳລັບທຸກຄົນ",
  // en: Tap and hold the message.
  "body.chats.individual-group.delete.4.0": "ແຕະຂໍ້ຄວາມຄ້າງໄວ້.",
  // en: Tap **Delete** → **Delete for everyone**.
  "body.chats.individual-group.delete.4.1": "ແຕະ ລົບ → ລົບສຳລັບທຸກຄົນ.",
  // en: The message is removed from every device in the chat and replaced with a short note, so the conversation still reads sensibly. You can do this for about two days after sending.
  "body.chats.individual-group.delete.5": "ຂໍ້ຄວາມຈະຖືກລົບອອກຈາກທຸກອຸປະກອນໃນການສົນທະນາ ແລະ ຖືກປ່ຽນເປັນໝາຍເຫດສັ້ນໆ ເພື່ອໃຫ້ການສົນທະນາຍັງອ່ານເຂົ້າໃຈໄດ້. ທ່ານສາມາດລົບສຳລັບທຸກຄົນໄດ້ພາຍໃນປະມານສອງມື້ຫຼັງຈາກສົ່ງ.",
  // en: Note: If someone already saved a photo to their camera roll, deleting the message cannot take that copy back.
  "body.chats.individual-group.delete.6": "ໝາຍເຫດ: ຖ້າມີຄົນບັນທຶກຮູບໄວ້ໃນຄັງຮູບຂອງໂທລະສັບແລ້ວ, ການລົບຂໍ້ຄວາມຈະບໍ່ສາມາດນຳສຳເນົານັ້ນກັບຄືນມາລົບໄດ້",

  // ── Chats › Individual and Group Chats › How to use disappearing messages ──
  // en: How to use disappearing messages
  "art.chats.individual-group.disappearing.title": "ວິທີໃຊ້ຂໍ້ຄວາມຊົ່ວຄາວ",
  // en: Open the chat and tap the contact or group name at the top.
  "body.chats.individual-group.disappearing.0.0": "ເປີດການສົນທະນາ ແລ້ວແຕະຊື່ຜູ້ຕິດຕໍ່ ຫຼື ຊື່ກຸ່ມຢູ່ດ້ານເທິງ.",
  // en: Tap **Disappearing messages**.
  "body.chats.individual-group.disappearing.0.1": "ແຕະ ຂໍ້ຄວາຊົ່ວຄາວ",
  // en: Choose **24 hours**, **7 days**, **90 days** or **Off**.
  "body.chats.individual-group.disappearing.0.2": "ເລືອກ **24 ຊົ່ວໂມງ**, **7 ມື້**, **90 ມື້** ຫຼື **ປິດ**.",
  // en: New messages sent after that point are removed from both devices once the timer runs out. Messages sent before you turned it on are not affected, and everyone in the chat sees a note when the timer changes.
  "body.chats.individual-group.disappearing.1": "ຂໍ້ຄວາມໃໝ່ທີ່ສົ່ງຫຼັງຈາກນັ້ນຈະຖືກລຶບອອກຈາກທັງສອງອຸປະກອນເມື່ອໝົດເວລາ. ຂໍ້ຄວາມທີ່ສົ່ງກ່ອນທ່ານເປີດໃຊ້ຈະບໍ່ໄດ້ຮັບຜົນກະທົບ ແລະ ທຸກຄົນໃນການສົນທະນາຈະເຫັນໝາຍເຫດເມື່ອເວລາຖືກປ່ຽນ.",
  // en: Note: In groups, only admins can change the disappearing-messages timer.
  "body.chats.individual-group.disappearing.2": "ໝາຍເຫດ: ສຳຫຼັບກຸ່ມ ມີແຕ່ຜູ້ດູແລເທົ່ານັ້ນທີ່ປ່ຽນເວລາຂໍ້ຄວາມຊົ່ວຄາວໄດ້.",

  // ── Chats › Individual and Group Chats › How to create and manage a group ──
  // en: How to create and manage a group
  "art.chats.individual-group.groups.title": "ວິທີສ້າງ ແລະ ຈັດການກຸ່ມ",
  // en: Create a group
  "body.chats.individual-group.groups.0": "ສ້າງກຸ່ມ",
  // en: Tap the new chat button on the **Chats** tab.
  "body.chats.individual-group.groups.1.0": "ແຕະປຸ່ມສົນທະນາໃໝ່ໃນແຖບ ສົນທະນາ (ສັນຍາລັກ +)",
  // en: Tap **New group**.
  "body.chats.individual-group.groups.1.1": "ແຕະ **ກຸ່ມໃໝ່**.",
  // en: Choose the members and tap **Next**.
  "body.chats.individual-group.groups.1.2": "ເລືອກສະມາຊິກ ແລ້ວແຕະ **ຕໍ່ໄປ**.",
  // en: Enter a group name, add a photo and tap **Create**.
  "body.chats.individual-group.groups.1.3": "ປ້ອນຊື່ກຸ່ມ, ເພີ່ມຮູບ ແລ້ວແຕະ **ສ້າງ**.",
  // en: What admins can do
  "body.chats.individual-group.groups.2": "ສິ່ງທີ່ຜູ້ດູແລເຮັດໄດ້",
  // en: Add and remove members.
  "body.chats.individual-group.groups.3.0": "ເພີ່ມ ແລະ ລົບສະມາຊິກ.",
  // en: Promote other members to admin.
  "body.chats.individual-group.groups.3.1": "ຍົກລະດັບສະມາຊິກຄົນອື່ນເປັນຜູ້ດູແລ.",
  // en: Change the group name, photo and description.
  "body.chats.individual-group.groups.3.2": "ປ່ຽນຊື່ກຸ່ມ, ຮູບ ແລະ ຄຳອະທິບາຍ.",
  // en: Set the disappearing-messages timer.
  "body.chats.individual-group.groups.3.3": "ຕັ້ງເວລາຂໍ້ຄວາມຊົ່ວຄາວ.",
  // en: Anyone can leave a group at any time from the group info screen.
  "body.chats.individual-group.groups.4": "ທຸກຄົນສາມາດອອກຈາກກຸ່ມໄດ້ທຸກເວລາ ໂດຍເຂົ້າໄປທີ່ໜ້າຂໍ້ມູນກຸ່ມ.",

  // ── Chats › Individual and Group Chats › How to pin, favourite or archive a chat ──
  // en: How to pin, favourite or archive a chat
  "art.chats.individual-group.organise.title": "ວິທີປັກໝຸດ, ໃສ່ລາຍການໂປດ ຫຼື ຈັດເກັບການສົນທະນາ",
  // en: Tap and hold the conversation in your chat list.
  "body.chats.individual-group.organise.0.0": "ແຕະການສົນທະນາໃນລາຍການສົນທະນາຂອງທ່ານຄ້າງໄວ້.",
  // en: Choose **Pin**, **Add to Favourites**, **Mute** or **Archive**.
  "body.chats.individual-group.organise.0.1": "ເລືອກ **ປັກໝຸດ**, **ເພີ່ມໃສ່ລາຍການໂປດ**, **ປິດສຽງ** ຫຼື **ຈັດເກັບ**.",
  // en: **Pinned** chats stay at the top of the list.
  "body.chats.individual-group.organise.1.0": "ການສົນທະນາທີ່ **ປັກໝຸດ** ຈະຢູ່ເທິງສຸດຂອງລາຍການ.",
  // en: **Favourites** can be shown on their own with the filter above the chat list.
  "body.chats.individual-group.organise.1.1": "**ລາຍການໂປດ** ສາມາດສະແດງແຍກຕ່າງຫາກໄດ້ດ້ວຍຕົວກັ່ນຕອງເໜືອລາຍການສົນທະນາ.",
  // en: **Archived** chats move out of the main list into Archived, and come back if you unarchive them.
  "body.chats.individual-group.organise.1.2": "ການສົນທະນາທີ່ **ຈັດເກັບ** ຈະຍ້າຍອອກຈາກລາຍການຫຼັກໄປຢູ່ ຈັດເກັບແລ້ວ ແລະ ຈະກັບຄືນມາຖ້າທ່ານຍົກເລີກການຈັດເກັບ.",
  // en: Everything else is sorted by most recent activity, with groups and one-to-one chats mixed together.
  "body.chats.individual-group.organise.2": "ສ່ວນທີ່ເຫຼືອຈະຖືກຈັດລຽງຕາມການເຄື່ອນໄຫວລ່າສຸດ ໂດຍກຸ່ມ ແລະ ການສົນທະນາສ່ວນຕົວປະປົນກັນ.",

  // ── Chats › Individual and Group Chats › How to export a chat ──
  // en: How to export a chat
  "art.chats.individual-group.export.title": "ວິທີສົ່ງອອກການສົນທະນາ",
  // en: Open the chat and tap the contact or group name at the top.
  "body.chats.individual-group.export.0.0": "ເປີດການສົນທະນາ ແລ້ວແຕະຊື່ຜູ້ຕິດຕໍ່ ຫຼື ຊື່ກຸ່ມຢູ່ດ້ານເທິງ.",
  // en: Tap **Export chat**.
  "body.chats.individual-group.export.0.1": "ແຕະ **ສົ່ງອອກການສົນທະນາ**.",
  // en: Choose **Without media** for a text transcript, or **Attach media** to include the photos, videos and files.
  "body.chats.individual-group.export.0.2": "ເລືອກ **ບໍ່ລວມສື່** ເພື່ອເອົາສະເພາະຂໍ້ຄວາມ ຫຼື **ແນບສື່** ເພື່ອລວມຮູບ, ວິດີໂອ ແລະ ໄຟລ໌ນຳ.",
  // en: Pick where to send or save the export.
  "body.chats.individual-group.export.0.3": "ເລືອກບ່ອນທີ່ຈະສົ່ງ ຫຼື ບັນທຶກໄຟລ໌ທີ່ສົ່ງອອກ.",
  // en: Note: An export is an ordinary file. It leaves Waow's end-to-end encryption the moment you share it, so keep it somewhere you trust.
  "body.chats.individual-group.export.1": "ໝາຍເຫດ: ໄຟລ໌ທີ່ສົ່ງອອກແມ່ນໄຟລ໌ທົ່ວໄປ. ເມື່ອທ່ານແບ່ງປັນໄຟລ໌ນີ້, ມັນຈະບໍ່ຢູ່ພາຍໃຕ້ການເຂົ້າລະຫັດແບບຕົ້ນທາງຫາປາຍທາງຂອງ Waow ອີກຕໍ່ໄປ, ດັ່ງນັ້ນຄວນເກັບໄວ້ໃນບ່ອນທີ່ປອດໄພ.",

  // ── Chats › Message Status ──
  // en: Message Status
  "sec.chats.message-status.title": "ສະຖານະຂໍ້ຄວາມ",

  // ── Chats › Message Status › About the ticks next to your messages ──
  // en: About the ticks next to your messages
  "art.chats.message-status.ticks.title": "ກ່ຽວກັບເຄື່ອງໝາຍກຳກັບຂໍ້ຄວາມຂອງທ່ານ",
  // en: **Clock** — the message is still on your phone and hasn't been sent yet, usually because you are offline.
  "body.chats.message-status.ticks.0.0": "**ໂມງ** — ຂໍ້ຄວາມຍັງຢູ່ໃນໂທລະສັບຂອງທ່ານ ແລະ ຍັງບໍ່ທັນຖືກສົ່ງ ໂດຍປົກກະຕິແມ່ນຍ້ອນທ່ານອອຟລາຍ.",
  // en: **One tick** — Waow has accepted the message.
  "body.chats.message-status.ticks.0.1": "**ເຄື່ອງໝາຍຖືກອັນດຽວ** — Waow ໄດ້ຮັບຂໍ້ຄວາມແລ້ວ.",
  // en: **Two grey ticks** — it reached the other person's device.
  "body.chats.message-status.ticks.0.2": "**ເຄື່ອງໝາຍຖືກສີເທົາສອງອັນ** — ຂໍ້ຄວາມໄປຮອດອຸປະກອນຂອງອີກຝ່າຍແລ້ວ.",
  // en: **Two blue ticks** — they opened the chat and read it.
  "body.chats.message-status.ticks.0.3": "ເຄື່ອງໝາຍຖືກສີຟ້າສອງອັນ — ປາຍທາງເປີດການສົນທະນາ ແລະ ອ່ານແລ້ວ.",
  // en: Ticks only ever move forward. A receipt that arrives late can never turn a read message back into a delivered one.
  "body.chats.message-status.ticks.1": "ເຄື່ອງໝາຍກຳກັບຂໍ້ຄວາມຈະເລື່ອນໄປໜ້າເທົ່ານັ້ນ. ຫາກໃນກໍລະນີທີ່ສະຖານະຂໍ້ຄວາມ ສົ່ງເຖິງແລ້ວ ອັດເດດຊ້າ ຈະບໍ່ສາມາດເຮັດໃຫ້ຂໍ້ຄວາມທີ່ອ່ານແລ້ວກັບໄປເປັນ ສົ່ງເຖິງແລ້ວໄດ້.",
  // en: Note: If you turn off read receipts in Settings → Privacy, you stop sending blue ticks and you stop seeing them from other people. Blue ticks in groups and for voice messages are not affected.
  "body.chats.message-status.ticks.2": "ໝາຍເຫດ: ເມື່ອທ່ານປິດ “ສະຖານະການອ່ານ” ໃນ ການຕັ້ງຄ່າ → ຄວາມເປັນສ່ວນຕົວ, ເຄື່ອງໝາຍຖືກສີຟ້າສອງອັນຈະບໍ່ຖືກໃຊ້ງານ. ແຕ່ເຄື່ອງໝາຍຖືກສີຟ້າໃນແຊັດກຸ່ມ ແລະ ສຳລັບຂໍ້ຄວາມສຽງຈະຍັງເຮັດວຽກແບບເດີມ.",

  // ── Chats › Message Status › My message won't send ──
  // en: My message won't send
  "art.chats.message-status.not-sending.title": "ຂໍ້ຄວາມຂອງຂ້ອຍສົ່ງບໍ່ອອກ",
  // en: A clock icon means Waow is waiting for a connection. The message is already saved on your device and is sent automatically as soon as you are back online — even if you close the app or your phone restarts in the meantime.
  "body.chats.message-status.not-sending.0": "ໄອຄອນໂມງໝາຍຄວາມວ່າ Waow ກຳລັງລໍຖ້າການເຊື່ອມຕໍ່. ຂໍ້ຄວາມໄດ້ຖືກບັນທຶກໄວ້ໃນອຸປະກອນຂອງທ່ານແລ້ວ ແລະ ຈະຖືກສົ່ງອັດຕະໂນມັດທັນທີທີ່ທ່ານກັບມາອອນລາຍ — ເຖິງແມ່ນວ່າໃນລະຫວ່າງນັ້ນທ່ານຈະປິດແອັບ ຫຼື ໂທລະສັບຣີສະຕາດກໍຕາມ.",
  // en: Each message keeps the same identity when it is retried, so a resend can never arrive twice.
  "body.chats.message-status.not-sending.1": "ແຕ່ລະຂໍ້ຄວາມຈະຍັງຄົງໄວ້ເພື່ອຈະສົ່ງຄືນໃໝ່, ດັ່ງນັ້ນຂໍ້ຄວາມຈະບໍ່ຖືກສົ່ງຊ້ຳສອງຄັ້ງ.",
  // en: If messages stay stuck
  "body.chats.message-status.not-sending.2": "ຖ້າຂໍ້ຄວາມຍັງຄ້າງຢູ່",
  // en: Check that your phone has a working internet connection.
  "body.chats.message-status.not-sending.3.0": "ກວດວ່າໂທລະສັບຂອງທ່ານມີການເຊື່ອມຕໍ່ອິນເຕີເນັດທີ່ໃຊ້ງານໄດ້.",
  // en: Check that Waow is allowed to use mobile data in your phone's settings.
  "body.chats.message-status.not-sending.3.1": "ກວດວ່າ Waow ຖືກອະນຸຍາດໃຫ້ໃຊ້ດາຕ້າມືຖືໃນການຕັ້ງຄ່າຂອງໂທລະສັບແລ້ວ",
  // en: Turn off any VPN or content blocker and try again.
  "body.chats.message-status.not-sending.3.2": "ປິດ VPN ຫຼື ຕົວບລັອກເນື້ອຫາໃດໆ ແລ້ວລອງໃໝ່.",
  // en: Close and reopen Waow.
  "body.chats.message-status.not-sending.3.3": "ປິດ ແລ້ວເປີດ Waow ຄືນໃໝ່.",

  // ── Chats › Translation ──
  // en: Translation
  "sec.chats.translation.title": "ການແປພາສາ",

  // ── Chats › Translation › How to set up chat translation ──
  // en: How to set up chat translation
  "art.chats.translation.translate-setup.title": "ວິທີຕັ້ງຄ່າການແປການສົນທະນາ",
  // en: Chat translation lets you read a message in your own language without leaving the conversation. You choose the language once and it applies everywhere.
  "body.chats.translation.translate-setup.0": "ການແປການສົນທະນາຊ່ວຍໃຫ້ທ່ານອ່ານຂໍ້ຄວາມເປັນພາສາຂອງທ່ານເອງໂດຍບໍ່ຕ້ອງອອກຈາກການສົນທະນາ. ທ່ານເລືອກພາສາເທື່ອດຽວ ແລ້ວມັນຈະຖືກນຳໃຊ້ໃນທຸກບ່ອນ.",
  // en: Open **Settings** → **Chats** → **Chat Translation**.
  "body.chats.translation.translate-setup.1.0": "ເປີດ ການຕັ້ງຄ່າ → ສົນທະນາ → ການແປການສົນທະນາ",
  // en: Tap **Translate to** and choose the language you read in.
  "body.chats.translation.translate-setup.1.1": "ແຕະ **ແປເປັນ** ແລ້ວເລືອກພາສາທີ່ທ່ານອ່ານ.",
  // en: Turn on **Auto-translate** if you want incoming messages translated without asking.
  "body.chats.translation.translate-setup.1.2": "ເປີດ **ແປອັດຕະໂນມັດ** ຖ້າທ່ານຢາກໃຫ້ຂໍ້ຄວາມທີ່ເຂົ້າມາຖືກແປໂດຍບໍ່ຕ້ອງຖາມ.",
  // en: Translations appear underneath the original message, never in place of it, so you can always see exactly what was sent.
  "body.chats.translation.translate-setup.2": "ຄຳແປຈະສະແດງຢູ່ລຸ່ມຂໍ້ຄວາມເດີມ ໂດຍຈະບໍ່ແທນທີ່ຂໍ້ຄວາມເດີມ, ເຮັດໃຫ້ທ່ານຍັງສາມາດເຫັນຂໍ້ຄວາມຕົ້ນສະບັບໄດ້ສະເໝີ.",
  // en: Note: Turning **Auto-translate** off also hides the Translate option in chats. Leave it on if you want to translate messages one at a time.
  "body.chats.translation.translate-setup.3": "ໝາຍເຫດ: ຖ້າປິດ “ແປອັດຕະໂນມັດ”, ຕົວເລືອກ “ແປ” ໃນການສົນທະນາກໍຈະຖືກເຊື່ອງໄປນຳ. ໃຫ້ເປີດໄວ້ ຖ້າຕ້ອງການແປຂໍ້ຄວາມເທື່ອລະຂໍ້ຄວາມ",

  // ── Chats › Translation › How to translate a single message ──
  // en: How to translate a single message
  "art.chats.translation.translate-message.title": "ວິທີແປຂໍ້ຄວາມເທື່ອລະຂໍ້ຄວາມ",
  // en: Tap and hold the message.
  "body.chats.translation.translate-message.0.0": "ແຕະຂໍ້ຄວາມຄ້າງໄວ້.",
  // en: Tap **More** → **Translate**.
  "body.chats.translation.translate-message.0.1": "ແຕະ **ເພີ່ມເຕີມ** → **ແປ**.",
  // en: The translation appears under the message once it is ready.
  "body.chats.translation.translate-message.0.2": "ຄຳແປຈະປາກົດຢູ່ລຸ່ມຂໍ້ຄວາມເມື່ອພ້ອມແລ້ວ.",
  // en: To hide a translation again, tap the close button next to it. The original message is never changed.
  "body.chats.translation.translate-message.1": "ຖ້າຕ້ອງການເຊື່ອງຄຳແປ, ໃຫ້ແຕະປຸ່ມປິດຂ້າງຄຳແປ. ຂໍ້ຄວາມເດີມຈະບໍ່ຖືກປ່ຽນ.",
  // en: This works in one-to-one chats and in groups. Any **@mentions** in the message are kept as they are rather than being translated.
  "body.chats.translation.translate-message.2": "ສາມາດໃຊ້ຟັງຊັນນີ້ໄດ້ທັງໃນແຊັດສ່ວນຕົວ ແລະ ແຊັດກຸ່ມ. ສ່ວນ @mention ໃນຂໍ້ຄວາມຈະຍັງຄົງຢູ່ຄືເດີມ ແລະ ຈະບໍ່ຖືກແປ.",

  // ── Chats › Translation › How to show pronunciation with a translation ──
  // en: How to show pronunciation with a translation
  "art.chats.translation.transliteration.title": "ວິທີສະແດງຄຳອ່ານພ້ອມກັບຄຳແປ",
  // en: Transliteration writes the translated text out in the Latin alphabet, so you can sound out a language whose script you don't read.
  "body.chats.translation.transliteration.0": "ການຖອດຂໍ້ຄວາມຈະສະແດງຄຳແປເປັນອັກສອນລາຕິນ, ເພື່ອໃຫ້ທ່ານສາມາດອ່ານອອກສຽງພາສາທີ່ໃຊ້ອັກສອນທີ່ທ່ານອ່ານບໍ່ໄດ້.",
  // en: Open **Settings** → **Chats** → **Chat Translation**.
  "body.chats.translation.transliteration.1.0": "ເປີດ ການຕັ້ງຄ່າ → ສົນທະນາ → ການແປການສົນທະນາ",
  // en: Turn on **Transliteration**.
  "body.chats.translation.transliteration.1.1": "ເປີດ ການຖອດຂໍ້ຄວາມ.",
  // en: The pronunciation is shown as a second line below the translation. Turning it off leaves the translation itself unchanged.
  "body.chats.translation.transliteration.2": "ຄຳອ່ານຈະສະແດງຢູ່ເປັນແຖວທີສອງລຸ່ມຄຳແປ. ຖ້າປິດຟັງຊັນນີ້,ຈະບໍ່ປ່ຽນແປງຄຳແປ",

  // ── Chats › Translation › Which languages Waow can translate ──
  // en: Which languages Waow can translate
  "art.chats.translation.translate-languages.title": "Waow ແປພາສາໃດໄດ້ແດ່",
  // en: Waow translates between more than a hundred languages. Lao and English are both supported, and Lao is the default target language.
  "body.chats.translation.translate-languages.0": "Waow ຮອງຮັບການແປຫຼາຍກວ່າ 100 ພາສາ, ລວມທັງພາສາລາວ ແລະ ພາສາອັງກິດ. ໂດຍພາສາລາວຈະຖືກຕັ້ງເປັນພາສາແປເລີ່ມຕົ້ນ",
  // en: The full list is in **Settings** → **Chats** → **Chat Translation** → **Translate to**, and includes the languages most used across South East Asia — Burmese, Khmer, Thai, Vietnamese, Chinese, Malay, Indonesian, Filipino and Hmong among them.
  "body.chats.translation.translate-languages.1": "ລາຍການເຕັມຢູ່ໃນ ການຕັ້ງຄ່າ → ສົນທະນາ → ການແປການສົນທະນາ → ແປເປັນ ເຊິ່ງລວມພາສາທີ່ໃຊ້ຫຼາຍທີ່ສຸດໃນອາຊີຕາເວັນອອກສຽງໃຕ້ — ພະມ້າ, ຂະແໝ້ນ, ໄທ, ຫວຽດນາມ, ຈີນ, ມາເລ, ອິນໂດເນເຊຍ, ຟິລິປິນ ແລະ ມົ້ງ ເປັນຕົ້ນ.",

  // ── Chats › Translation › Does translation affect end-to-end encryption? ──
  // en: Does translation affect end-to-end encryption?
  "art.chats.translation.translate-privacy.title": "ການແປມີຜົນຕໍ່ການເຂົ້າລະຫັດແບບຕົ້ນທາງເຖິງປາຍທາງບໍ?",
  // en: Yes, in one specific way, and it is worth understanding before you turn translation on.
  "body.chats.translation.translate-privacy.0": "ແມ່ນ. ມີຈຸດໜຶ່ງທີ່ຄວນເຂົ້າໃຈກ່ອນເປີດໃຊ້ການແປ.",
  // en: Messages reach you end-to-end encrypted as normal, and are decrypted on your device. When a message is translated, that decrypted text is sent to Waow's translation service, translated there, and the result is sent back to your device. So the text of a message you translate is handled by our service rather than staying only on your phone.
  "body.chats.translation.translate-privacy.1": "ຕາມປົກກະຕິ, ຂໍ້ຄວາມຈະຖືກເຂົ້າລະຫັດແບບຕົ້ນທາງຫາປາຍທາງ ແລະ ຖອດລະຫັດຢູ່ໃນອຸປະກອນຂອງທ່ານ. ແຕ່ເມື່ອທ່ານແປຂໍ້ຄວາມ, ຂໍ້ຄວາມທີ່ຖອດລະຫັດແລ້ວຈະຖືກສົ່ງໄປຍັງບໍລິການແປພາສາຂອງ Waow ເພື່ອແປ ແລະ ຜົນການແປຈະຖືກສົ່ງກັບຄືນມາຫາອຸປະກອນຂອງທ່ານ. ດັ່ງນັ້ນ, ຂໍ້ຄວາມທີ່ທ່ານເລືອກແປຈະຖືກປະມວນຜົນໂດຍບໍລິການຂອງ Waow ແລະ ບໍ່ໄດ້ຢູ່ພຽງແຕ່ໃນອຸປະກອນຂອງທ່ານ.",
  // en: Messages you never translate are not sent anywhere. Turning **Auto-translate** off means nothing is translated unless you ask for it message by message.
  "body.chats.translation.translate-privacy.2": "ຂໍ້ຄວາມທີ່ທ່ານບໍ່ໄດ້ເລືອກແປ ຈະບໍ່ຖືກສົ່ງໄປໃສ. ຖ້າປິດ “ແປອັດຕະໂນມັດ”, ຈະບໍ່ມີຂໍ້ຄວາມໃດຖືກແປ ນອກຈາກທ່ານຈະເລືອກແປເອງເທື່ອລະຂໍ້ຄວາມ.",
  // en: Note: If a conversation is sensitive enough that it should never leave your device, leave Auto-translate off and don't translate it.
  "body.chats.translation.translate-privacy.3": "ໝາຍເຫດ: ຖ້າການສົນທະນາທີ່ມີຂໍ້ມູນລັບຫຼືອ່ອນໄຫວຫຼາຍ ບໍ່ຄວນຖືກສົ່ງອອກຈາກອຸປະກອນຂອງທ່ານ, ດັ່ງນັ້ນໃຫ້ປິດ “ແປອັດຕະໂນມັດ” ແລະ ຢ່າເລືອກແປຂໍ້ຄວາມໃນການສົນທະນານັ້ນໆ.",

  // ── Chats › Translation › A translation is missing or looks wrong ──
  // en: A translation is missing or looks wrong
  "art.chats.translation.translate-problems.title": "ບໍ່ພົບຄຳແປ ຫຼື ຄຳແປບໍ່ຖືກຕ້ອງ",
  // en: The translation says it failed
  "body.chats.translation.translate-problems.0": "ການແປລົ້ມເຫຼວ",
  // en: Translation needs a working connection to Waow. Check that you are online and try again — the message itself is unaffected.
  "body.chats.translation.translate-problems.1": "ການແປຕ້ອງການການເຊື່ອມຕໍ່ກັບ Waow. ກວດສອບວ່າທ່ານມີອິນເຕີເນັດທີ່ໃຊ້ງານໄດ້ ແລ້ວລອງໃໝ່",
  // en: I can't see the Translate option
  "body.chats.translation.translate-problems.2": "ຂ້ອຍບໍ່ເຫັນຕົວເລືອກ “ການແປ”",
  // en: Open **Settings** → **Chats** → **Chat Translation** and check that **Auto-translate** is on. With it off, the Translate option is hidden everywhere.
  "body.chats.translation.translate-problems.3": "ເປີດ ການຕັ້ງຄ່າ → ສົນທະນາ → ການແປການສົນທະນາ ແລ້ວກວດວ່າ ແປອັດຕະໂນມັດ ເປີດຢູ່. ຖ້າປິດໄວ້, ຕົວເລືອກ “ແປ” ຈະບໍ່ສະແດງໃນການສົນທະນາໃດໆ",
  // en: The wording is off
  "body.chats.translation.translate-problems.4": "ຄຳແປບໍ່ຖືກຕ້ອງ",
  // en: Translations are produced automatically, so slang, jokes and regional expressions often come through literally. The original message is always shown above the translation — read that if something seems strange.
  "body.chats.translation.translate-problems.5": "ຄຳແປຖືກສ້າງຂຶ້ນອັດຕະໂນມັດ, ດັ່ງນັ້ນຄຳສະແລງ, ຄຳເວົ້າຕະຫຼົກ ແລະ ສຳນວນທ້ອງຖິ່ນ ອາດຖືກແປອອກມາແບບກົງຕົວ. ຂໍ້ຄວາມເດີມຈະສະແດງຢູ່ເທິງຄຳແປສະເໝີ — ຖ້າອ່ານແລ້ວຮູ້ສຶກແປກໆ, ໃຫ້ເບິ່ງຂໍ້ຄວາມເດີມເພື່ອເຮັດໃຫ້ເຂົ້າໃຈຂຶ້ນຕື່ມ",

  // ── Chats › Appearance ──
  // en: Appearance
  "sec.chats.appearance.title": "ຮູບແບບການສະແດງຜົນ",

  // ── Chats › Appearance › How to change your theme and wallpaper ──
  // en: How to change your theme and wallpaper
  "art.chats.appearance.themes.title": "ວິທີປ່ຽນຮູບແບບການສະແດງຜົນ ແລະ ພາບພື້ນຫຼັງ",
  // en: Change the theme
  "body.chats.appearance.themes.0": "ປ່ຽນຮູບແບບການສະແດງຜົນ",
  // en: Open **Settings** → **Appearance**.
  "body.chats.appearance.themes.1.0": "ເປີດ ການຕັ້ງຄ່າ → ຮູບແບບການສະແດງຜົນ.",
  // en: Choose the theme you want.
  "body.chats.appearance.themes.1.1": "ເລືອກຮູບແບບສີທີ່ທ່ານຕ້ອງການ.",
  // en: The Love theme adds a warmer palette and playful floating emoji effects to your conversations.
  "body.chats.appearance.themes.2": "ຮູບແບບສີ Love ຈະເພີ່ມໂທນສີທີ່ອົບອຸ່ນຂຶ້ນ ແລະ ເອັບເຟັກອີໂມຈິທີ່ລອຍໄປມາໃນການສົນທະນາຂອງທ່ານ.",
  // en: Change your chat wallpaper
  "body.chats.appearance.themes.3": "ປ່ຽນພາບພື້ນຫຼັງການສົນທະນາ",
  // en: Open **Settings** → **Chats** → **Wallpaper**.
  "body.chats.appearance.themes.4.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ສົນທະນາ** → **ພາບພື້ນຫຼັງ**.",
  // en: Choose a picture from the gallery or your own library.
  "body.chats.appearance.themes.4.1": "ເລືອກຮູບຈາກຄັງຮູບ ຫຼື ຈາກຄັງຮູບຂອງທ່ານເອງ.",
  // en: Check the preview and tap **Set wallpaper**.
  "body.chats.appearance.themes.4.2": "ກວດເບິ່ງຕົວຢ່າງ ແລ້ວແຕະ **ຕັ້ງພາບພື້ນຫຼັງ**.",

  // ── Voice and Video Calls ──
  // en: Voice and Video Calls
  "cat.calls.title": "ໂທສຽງ ແລະ ວິດີໂອ",
  // en: Placing calls, group calls, call quality and ringing problems.
  "cat.calls.blurb": "ການໂທອອກ, ການໂທກຸ່ມ, ຄຸນນະພາບການໂທ ແລະ ບັນຫາສຽງໂທເຂົ້າ.",

  // ── Voice and Video Calls › Making Calls ──
  // en: Making Calls
  "sec.calls.making-calls.title": "ການໂທອອກ",

  // ── Voice and Video Calls › Making Calls › How to make a voice or video call ──
  // en: How to make a voice or video call
  "art.calls.making-calls.make-call.title": "ວິທີໂທສຽງ ຫຼື ວິດີໂອ",
  // en: Open the chat with the person you want to call.
  "body.calls.making-calls.make-call.0.0": "ເປີດການສົນທະນາກັບຄົນທີ່ທ່ານຢາກໂທຫາ.",
  // en: Tap the phone icon for a voice call, or the camera icon for a video call.
  "body.calls.making-calls.make-call.0.1": "ແຕະໄອຄອນໂທລະສັບເພື່ອໂທສຽງ ຫຼື ໄອຄອນກ້ອງເພື່ອໂທວິດີໂອ.",
  // en: You can also call from the **Calls** tab, or from a contact's info screen. During a call, tap the camera icon to switch between voice and video.
  "body.calls.making-calls.make-call.1": "ທ່ານຍັງສາມາດໂທຈາກແຖບ **ໂທ** ຫຼື ຈາກໜ້າຂໍ້ມູນຜູ້ຕິດຕໍ່. ໃນລະຫວ່າງການໂທ ໃຫ້ແຕະໄອຄອນກ້ອງເພື່ອສະຫຼັບລະຫວ່າງສຽງ ແລະ ວິດີໂອ.",
  // en: Note: The first time you call, your phone asks for microphone and camera permission. Waow cannot place a call until you allow it.
  "body.calls.making-calls.make-call.2": "ໝາຍເຫດ: ໃນການໂທຄັ້ງທຳອິດ ໂທລະສັບຂອງທ່ານຈະຂໍສິດເຂົ້າເຖິງໄມໂຄຣໂຟນ ແລະ ກ້ອງ. Waow ບໍ່ສາມາດໂທໄດ້ຈົນກວ່າທ່ານຈະອະນຸຍາດ.",

  // ── Voice and Video Calls › Making Calls › How to make a group call ──
  // en: How to make a group call
  "art.calls.making-calls.group-call.title": "ວິທີໂທກຸ່ມ",
  // en: Open a group chat and tap the call icon, or start a normal call first.
  "body.calls.making-calls.group-call.0.0": "ເປີດການສົນທະນາກຸ່ມ ແລ້ວແຕະໄອຄອນໂທ ຫຼື ເລີ່ມການໂທທຳມະດາກ່ອນ.",
  // en: Tap **Add participant** to bring more people in.
  "body.calls.making-calls.group-call.0.1": "ແຕະ **ເພີ່ມຜູ້ເຂົ້າຮ່ວມ** ເພື່ອດຶງຄົນອື່ນເຂົ້າມາ.",
  // en: Everyone who joins appears in a tiled layout. Tap a tile to make that person full screen.
  "body.calls.making-calls.group-call.1": "ທຸກຄົນທີ່ເຂົ້າຮ່ວມຈະສະແດງເປັນຊ່ອງໆໃນໜ້າຈໍ. ແຕະໃສ່ຊ່ອງຂອງຄົນໃດກໍໄດ້ ເພື່ອສະແດງຄົນນັ້ນແບບເຕັມໜ້າຈໍ",

  // ── Voice and Video Calls › Troubleshooting ──
  // en: Troubleshooting
  "sec.calls.call-troubleshooting.title": "ການແກ້ໄຂບັນຫາ",

  // ── Voice and Video Calls › Troubleshooting › My call quality is poor ──
  // en: My call quality is poor
  "art.calls.call-troubleshooting.call-quality.title": "ຄຸນນະພາບການໂທຂອງຂ້ອຍບໍ່ດີ",
  // en: Calls need a steady connection more than a fast one, so a weak Wi-Fi signal is often worse than mobile data.
  "body.calls.call-troubleshooting.call-quality.0": "ການໂທຕ້ອງການການເຊື່ອມຕໍ່ທີ່ສະຖຽນຫຼາຍກວ່າຄວາມໄວ, ດັ່ງນັ້ນ Wi-Fi ທີ່ສັນຍານອ່ອນມັກຈະມີບັນຫາຫຼາຍກວ່າການໃຊ້ຂໍ້ມູນມືຖື.",
  // en: Move closer to your router, or switch between Wi-Fi and mobile data to see which is more stable.
  "body.calls.call-troubleshooting.call-quality.1.0": "ເຂົ້າໃກ້ເຣົາເຕີຂອງທ່ານ ຫຼື ລອງສະຫຼັບລະຫວ່າງ Wi-Fi ແລະ ຂໍ້ມູນມືຖື ເພື່ອເບິ່ງວ່າອັນໃດມີການເຊື່ອມຕໍ່ທີ່ສະຖຽນກວ່າ.",
  // en: Turn off video — a voice call needs far less data.
  "body.calls.call-troubleshooting.call-quality.1.1": "ປິດວິດີໂອ — ການໂທສຽງໃຊ້ດາຕ້ານ້ອຍກວ່າຫຼາຍ.",
  // en: Close other apps that are streaming or downloading in the background.
  "body.calls.call-troubleshooting.call-quality.1.2": "ປິດແອັບອື່ນທີ່ກຳລັງສະຕຣີມ ຫຼື ດາວໂຫຼດຢູ່ເບື້ອງຫຼັງ.",
  // en: If you are on speaker in a noisy room, switch to headphones.
  "body.calls.call-troubleshooting.call-quality.1.3": "ຖ້າທ່ານໃຊ້ລຳໂພງໃນຫ້ອງທີ່ມີສຽງດັງ ໃຫ້ປ່ຽນໄປໃຊ້ຫູຟັງ.",

  // ── Voice and Video Calls › Troubleshooting › My phone doesn't ring for incoming calls ──
  // en: My phone doesn't ring for incoming calls
  "art.calls.call-troubleshooting.not-ringing.title": "ໂທລະສັບຂອງຂ້ອຍບໍ່ດັງເມື່ອມີສາຍໂທເຂົ້າ",
  // en: Open your phone's **Settings** → **Notifications** → **Waow** and make sure notifications are allowed.
  "body.calls.call-troubleshooting.not-ringing.0.0": "ເຂົ້າໄປທີ່ ການຕັ້ງຄ່າ → ການແຈ້ງເຕືອນ → Waow ໃນໂທລະສັບຂອງທ່ານ ແລະ ກວດສອບວ່າອະນຸຍາດໃຫ້ສະແດງການແຈ້ງເຕືອນແລ້ວ.",
  // en: Check that Focus or Do Not Disturb is not filtering Waow.
  "body.calls.call-troubleshooting.not-ringing.0.1": "ກວດສອບວ່າໂໝດ Focus ຫຼື ຫ້າມລົບກວນ (Do Not Disturb) ບໍ່ໄດ້ຈຳກັດການແຈ້ງເຕືອນຈາກ Waow.",
  // en: Turn off any battery-saving mode that stops apps working in the background.
  "body.calls.call-troubleshooting.not-ringing.0.2": "ປິດໂໝດປະຫຍັດແບັດເຕີຣີທີ່ຢຸດການເຮັດວຽກຂອງແອັບໃນເບື້ອງຫຼັງ.",
  // en: Check that the caller is not muted or blocked.
  "body.calls.call-troubleshooting.not-ringing.0.3": "ກວດວ່າຜູ້ໂທບໍ່ໄດ້ຖືກປິດສຽງ ຫຼື ຖືກບລັອກ.",
  // en: Note: On iPhone, incoming Waow calls use the normal iOS call screen, so they also follow your Silence Unknown Callers and Focus settings.
  "body.calls.call-troubleshooting.not-ringing.1": "ໝາຍເຫດ: ໃນ iPhone, ສາຍໂທເຂົ້າຈາກ Waow ຈະສະແດງຜ່ານໜ້າຈໍຮັບສາຍໂທປົກກະຕິຂອງ iOS. ດັ່ງນັ້ນ ການໂທຈະຖືກຄວບຄຸມຕາມການຕັ້ງຄ່າ “ປິດສຽງຜູ້ໂທທີ່ບໍ່ຮູ້ຈັກ” ແລະ “Focus” ຂອງ iPhone",

  // ── Voice and Video Calls › Call Security ──
  // en: Call Security
  "sec.calls.call-security.title": "ຄວາມປອດໄພການໂທ",

  // ── Voice and Video Calls › Call Security › Are Waow calls encrypted? ──
  // en: Are Waow calls encrypted?
  "art.calls.call-security.call-encryption.title": "ການໂທຂອງ Waow ປອດໄພບໍ?",
  // en: Yes. Voice and video calls are end-to-end encrypted between the people on the call, one-to-one and in groups.
  "body.calls.call-security.call-encryption.0": "ແມ່ນ. ການໂທສຽງ ແລະ ວິດີໂອຖືກເຂົ້າລະຫັດແບບຕົ້ນທາງເຖິງປາຍທາງລະຫວ່າງຄົນທີ່ຢູ່ໃນສາຍ ທັງແບບສ່ວນຕົວ ແລະ ໃນກຸ່ມ.",
  // en: Waow does not record your calls and cannot listen to them. Only the call's start time, duration and participants are needed to connect it.
  "body.calls.call-security.call-encryption.1": "Waow ບໍ່ບັນທຶກ ຫຼື ຟັງການໂທຂອງທ່ານ. ເພື່ອເຊື່ອມຕໍ່ການໂທ, ລະບົບຕ້ອງການພຽງເວລາເລີ່ມການໂທ, ໄລຍະເວລາການໂທ ແລະ ລາຍຊື່ຜູ້ເຂົ້າຮ່ວມ.",

  // ── Photos, Videos and Storage ──
  // en: Photos, Videos and Storage
  "cat.media.title": "ຮູບ, ວິດີໂອ ແລະ ພື້ນທີ່ເກັບຂໍ້ມູນ",
  // en: Downloads, media quality, freeing up space and encrypted backups.
  "cat.media.blurb": "ການດາວໂຫຼດ, ຄຸນນະພາບສື່, ການເພີ່ມພື້ນທີ່ວ່າງ ແລະ ການສຳຮອງຂໍ້ມູນແບບເຂົ້າລະຫັດ.",

  // ── Photos, Videos and Storage › Media ──
  // en: Media
  "sec.media.media-basics.title": "ສື່",

  // ── Photos, Videos and Storage › Media › How to control what downloads automatically ──
  // en: How to control what downloads automatically
  "art.media.media-basics.auto-download.title": "ວິທີຄວບຄຸມການດາວໂຫຼດອັດຕະໂນມັດ",
  // en: Open **Settings** → **Storage and data** → **Media auto-download**.
  "body.media.media-basics.auto-download.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ພື້ນທີ່ເກັບຂໍ້ມູນ ແລະ ດາຕ້າ** → **ການດາວໂຫຼດສື່ອັດຕະໂນມັດ**.",
  // en: Choose **Wi-Fi** or **Mobile data**.
  "body.media.media-basics.auto-download.0.1": "ເລືອກ **Wi-Fi** ຫຼື **ດາຕ້າມືຖື**.",
  // en: Turn each of **Photos**, **Audio**, **Videos** and **Documents** on or off.
  "body.media.media-basics.auto-download.0.2": "ເປີດ ຫຼື ປິດແຕ່ລະລາຍການ **ຮູບ**, **ສຽງ**, **ວິດີໂອ** ແລະ **ເອກະສານ**.",
  // en: By default only photos download automatically on mobile data. Anything you turn off shows a download button instead, so you choose what to spend data on.
  "body.media.media-basics.auto-download.1": "ຕາມຄ່າເລີ່ມຕົ້ນ, ມີພຽງຮູບພາບເທົ່ານັ້ນທີ່ຈະຖືກດາວໂຫຼດອັດຕະໂນມັດເມື່ອໃຊ້ດາຕ້າມືຖື. ສຳລັບສິ່ງໃດທີ່ທ່ານປິດການດາວໂຫຼດອັດຕະໂນມັດ, ຈະສະແດງປຸ່ມ “ດາວໂຫຼດ” ແທນ, ເພື່ອໃຫ້ທ່ານເລືອກເອງວ່າຈະໃຊ້ດາຕ້າໂຫຼດສື່ປະເພດໃດແນ່",

  // ── Photos, Videos and Storage › Media › How to download or cancel a file ──
  // en: How to download or cancel a file
  "art.media.media-basics.download-button.title": "ວິທີດາວໂຫຼດ ຫຼື ຍົກເລີກໄຟລ໌",
  // en: Tap the round arrow on the message to start the download.
  "body.media.media-basics.download-button.0.0": "ແຕະລູກສອນວົງກົມເທິງຂໍ້ຄວາມເພື່ອເລີ່ມການດາວໂຫຼດ.",
  // en: While it runs, the arrow becomes a progress ring with a stop square — tap it to cancel.
  "body.media.media-basics.download-button.0.1": "ໃນລະຫວ່າງດາວໂຫຼດ ລູກສອນຈະກາຍເປັນວົງແຫວນຄວາມຄືບໜ້າພ້ອມຮູບສີ່ຫຼ່ຽມຢຸດ — ແຕະມັນເພື່ອຍົກເລີກ.",
  // en: If the download fails, tap the retry button to try again.
  "body.media.media-basics.download-button.0.2": "ຖ້າການດາວໂຫຼດລົ້ມເຫຼວ ໃຫ້ແຕະປຸ່ມລອງໃໝ່ເພື່ອລອງອີກຄັ້ງ.",
  // en: Photos show a blurred preview behind the control so you can decide whether it is worth downloading.
  "body.media.media-basics.download-button.1": "ຮູບພາບຈະສະແດງຕົວຢ່າງແບບມົວໆຢູ່ດ້ານຫຼັງປຸ່ມ ເພື່ອໃຫ້ທ່ານຕັດສິນໃຈວ່າຈະດາວໂຫຼດຫຼືບໍ່",

  // ── Photos, Videos and Storage › Media › How to edit a photo or video before sending ──
  // en: How to edit a photo or video before sending
  "art.media.media-basics.editing.title": "ວິທີແກ້ໄຂຮູບ ຫຼື ວິດີໂອກ່ອນສົ່ງ",
  // en: Choose a photo or video in the chat.
  "body.media.media-basics.editing.0.0": "ເລືອກຮູບ ຫຼື ວິດີໂອໃນການສົນທະນາ.",
  // en: Use the tools at the top to crop, draw, add text or trim a video.
  "body.media.media-basics.editing.0.1": "ໃຊ້ເຄື່ອງມືຢູ່ດ້ານເທິງເພື່ອຕັດ, ແຕ້ມ, ເພີ່ມຂໍ້ຄວາມ ຫຼື ຕັດຕໍ່ວິດີໂອ.",
  // en: Add a caption at the bottom, then tap send.
  "body.media.media-basics.editing.0.2": "ເພີ່ມຄຳບັນຍາຍຢູ່ດ້ານລຸ່ມ ແລ້ວແຕະສົ່ງ.",
  // en: In the full-screen viewer you can pinch, double-tap and drag to zoom into a picture someone sent you.
  "body.media.media-basics.editing.1": "ເມື່ອເບິ່ງຮູບແບບເຕັມຈໍ, ທ່ານສາມາດໃຊ້ສອງນິ້ວຫຍໍ້-ຂະຫຍາຍ, ແຕະສອງຄັ້ງ ຫຼື ລາກຮູບ ເພື່ອຂະຫຍາຍເບິ່ງລາຍລະອຽດ.",

  // ── Photos, Videos and Storage › Media › How to send a voice message ──
  // en: How to send a voice message
  "art.media.media-basics.voice-notes.title": "ວິທີສົ່ງຂໍ້ຄວາມສຽງ",
  // en: Tap and hold the microphone button in the message box and speak.
  "body.media.media-basics.voice-notes.0.0": "ແຕະຄ້າງປຸ່ມໄມໂຄຣໂຟນຢູ່ໃນຊ່ອງຂໍ້ຄວາມ ແລ້ວເວົ້າໄດ້ເລີຍ.",
  // en: Slide up to lock recording so you can let go and keep talking.
  "body.media.media-basics.voice-notes.0.1": "ເລື່ອນຂຶ້ນເພື່ອລັອກການບັນທຶກ, ຈາກນັ້ນປ່ອຍນິ້ວໄດ້ ແລະ ເວົ້າຕໍ່ໄປໄດ້.",
  // en: Release, or tap send, to send it. Slide away to cancel.
  "body.media.media-basics.voice-notes.0.2": "ປ່ອຍນິ້ວ ຫຼື ແຕະ “ສົ່ງ” ເພື່ອສົ່ງຂໍ້ຄວາມສຽງ. ເລື່ອນໄປທາງຂ້າງເພື່ອຍົກເລີກ.",
  // en: Note: Waow asks for microphone permission the first time you record.
  "body.media.media-basics.voice-notes.1": "ໝາຍເຫດ: Waow ຈະຂໍສິດເຂົ້າເຖິງໄມໂຄຣໂຟນໃນຄັ້ງທຳອິດທີ່ທ່ານບັນທຶກສຽງ",

  // ── Photos, Videos and Storage › Storage ──
  // en: Storage
  "sec.media.storage.title": "ພື້ນທີ່ເກັບຂໍ້ມູນ",

  // ── Photos, Videos and Storage › Storage › How to free up space on your phone ──
  // en: How to free up space on your phone
  "art.media.storage.manage-storage.title": "ວິທີເພີ່ມພື້ນທີ່ວ່າງໃນໂທລະສັບຂອງທ່ານ",
  // en: Open **Settings** → **Storage and data** → **Manage storage**.
  "body.media.storage.manage-storage.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ພື້ນທີ່ເກັບຂໍ້ມູນ ແລະ ດາຕ້າ** → **ຈັດການພື້ນທີ່ເກັບຂໍ້ມູນ**.",
  // en: Review the totals for photos, videos, audio and documents.
  "body.media.storage.manage-storage.0.1": "ເບິ່ງຍອດລວມສຳລັບຮູບ, ວິດີໂອ, ສຽງ ແລະ ເອກະສານ.",
  // en: Tap a conversation to see its media in a grid.
  "body.media.storage.manage-storage.0.2": "ແຕະເຂົ້າໄປໃນການສົນທະນາ ເພື່ອເບິ່ງໄຟລ໌ສື່ຕ່າງໆເປັນຕາຕະລາງ",
  // en: Select the items you no longer need and tap delete.
  "body.media.storage.manage-storage.0.3": "ເລືອກລາຍການທີ່ທ່ານບໍ່ຕ້ອງການແລ້ວ ແລ້ວແຕະລົບ.",
  // en: Conversations are listed largest first, so the chats worth clearing are at the top. **Free up space** clears larger files across all chats at once.
  "body.media.storage.manage-storage.1": "ການສົນທະນາຈະຖືກຈັດລຽງຈາກການໃຊ້ພື້ນທີ່ຫຼາຍທີ່ສຸດຂຶ້ນກ່ອນ, ດັ່ງນັ້ນການສົນທະນາທີ່ຄວນລົບເພື່ອຄືນພື້ນທີ່ຈະຢູ່ດ້ານເທິງ. ກົດ “ເພີ່ມພື້ນທີ່ວ່າງ” ຈະລົບໄຟລ໌ຂະໜາດໃຫຍ່ຈາກທຸກການສົນທະນາພ້ອມກັນ",
  // en: Note: Deleting media here removes the file from your phone. The message stays in the chat.
  "body.media.storage.manage-storage.2": "ໝາຍເຫດ: ການລົບໄຟລ໌ສື່ຈາກບ່ອນນີ້ຈະລົບໄຟລ໌ອອກຈາກໂທລະສັບຂອງທ່ານເຊັ່ນກັນ. ແຕ່ຂໍ້ຄວາມຍັງຄົງຢູ່ໃນການສົນທະນາ.",

  // ── Photos, Videos and Storage › Storage › Why does an old photo say "Tap to download" again? ──
  // en: Why does an old photo say "Tap to download" again?
  "art.media.storage.evicted.title": "ເປັນຫຍັງຮູບເກົ່າຈຶ່ງຂຶ້ນວ່າ “ແຕະເພື່ອດາວໂຫຼດ” ອີກ?",
  // en: The file is no longer on your phone — either you cleared it in Manage storage, or it never downloaded because auto-download was off for that type of file.
  "body.media.storage.evicted.0": "ໄຟລ໌ນີ້ບໍ່ຢູ່ໃນໂທລະສັບຂອງທ່ານແລ້ວ — ອາດເປັນເພາະທ່ານໄດ້ລົບມັນອອກໃນ “ຈັດການພື້ນທີ່” ຫຼື ໄຟລ໌ບໍ່ເຄີຍຖືກດາວໂຫຼດຕັ້ງແຕ່ຕົ້ນ ເນື່ອງຈາກປິດການດາວໂຫຼດອັດຕະໂນມັດສຳລັບໄຟລ໌ປະເພດນັ້ນ.",
  // en: The message itself is still yours. Tap it to fetch the file again while it is still available.
  "body.media.storage.evicted.1": "ແຕ່ຂໍ້ຄວາມຍັງຢູ່ໃນການສົນທະນາເຊັ່ນເດີມ. ແຕະທີ່ຂໍ້ຄວາມເພື່ອດາວໂຫຼດໄຟລ໌ອີກຄັ້ງ ຖ້າໄຟລ໌ນັ້ນຍັງສາມາດດາວໂຫຼດໄດ້.",

  // ── Photos, Videos and Storage › Back Up and Restore ──
  // en: Back Up and Restore
  "sec.media.backup-restore.title": "ສຳຮອງ ແລະ ກູ້ຄືນ",

  // ── Photos, Videos and Storage › Back Up and Restore › How to back up your chats ──
  // en: How to back up your chats
  "art.media.backup-restore.backup.title": "ວິທີສຳຮອງການສົນທະນາຂອງທ່ານ",
  // en: Open **Settings** → **Chats** → **Chat backup**.
  "body.media.backup-restore.backup.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ສົນທະນາ** → **ການສຳຮອງການສົນທະນາ**.",
  // en: Tap **Create encrypted backup**.
  "body.media.backup-restore.backup.0.1": "ແຕະ **ສ້າງການສຳຮອງແບບເຂົ້າລະຫັດ**.",
  // en: Enter a password of at least eight characters and confirm it.
  "body.media.backup-restore.backup.0.2": "ປ້ອນລະຫັດຜ່ານຢ່າງໜ້ອຍແປດຕົວອັກສອນ ແລ້ວຢືນຢັນ.",
  // en: Wait for the backup to finish, then save the file somewhere safe.
  "body.media.backup-restore.backup.0.3": "ລໍຖ້າໃຫ້ການສຳຮອງສຳເລັດ ແລ້ວບັນທຶກໄຟລ໌ໄວ້ໃນບ່ອນປອດໄພ.",
  // en: The backup is encrypted with your password before it leaves the app, so nobody — including Waow — can open it without that password.
  "body.media.backup-restore.backup.1": "ຂໍ້ມູນສຳຮອງຈະຖືກເຂົ້າລະຫັດດ້ວຍລະຫັດຜ່ານຂອງທ່ານກ່ອນທີ່ຈະອອກຈາກແອັບ, ດັ່ງນັ້ນຈະບໍ່ມີໃຜ — ລວມເຖິງ Waow — ທີ່ສາມາດເປີດໄຟລ໌ນີ້ໄດ້ໂດຍບໍ່ມີລະຫັດຜ່ານດັ່ງກ່າວ",
  // en: Note: The password cannot be reset or recovered. If you lose it, the backup cannot be opened.
  "body.media.backup-restore.backup.2": "ໝາຍເຫດ: ລະຫັດຜ່ານບໍ່ສາມາດຕັ້ງໃໝ່ ຫຼື ກູ້ຄືນໄດ້. ຖ້າລືມ ທ່ານຈະບໍ່ສາມາດເປີດຂໍ້ມູນສຳຮອງໄດ້",

  // ── Photos, Videos and Storage › Back Up and Restore › How to restore from a backup ──
  // en: How to restore from a backup
  "art.media.backup-restore.restore.title": "ວິທີກູ້ຄືນຈາກໄຟລ໌ສຳຮອງ",
  // en: Open **Settings** → **Chats** → **Chat backup**.
  "body.media.backup-restore.restore.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ສົນທະນາ** → **ການສຳຮອງການສົນທະນາ**.",
  // en: Tap **Restore from backup file**.
  "body.media.backup-restore.restore.0.1": "ແຕະ **ກູ້ຄືນຈາກໄຟລ໌ສຳຮອງ**.",
  // en: Choose the backup file.
  "body.media.backup-restore.restore.0.2": "ເລືອກໄຟລ໌ສຳຮອງ.",
  // en: Enter the password you set when you created it and confirm.
  "body.media.backup-restore.restore.0.3": "ປ້ອນລະຫັດຜ່ານທີ່ທ່ານຕັ້ງໄວ້ຕອນສ້າງມັນ ແລ້ວຢືນຢັນ.",
  // en: Note: Restoring replaces the chats currently on this device. Create a fresh backup first if there is anything on it you want to keep.
  "body.media.backup-restore.restore.1": "ໝາຍເຫດ: ການກູ້ຄືນຈະແທນທີ່ການສົນທະນາທີ່ຢູ່ໃນອຸປະກອນຕອນນີ້. ຖ້າມີການສົນທະນາ ຫຼື ຂໍ້ມູນໃດທີ່ທ່ານຢາກເກັບໄວ້, ໃຫ້ສ້າງຂໍ້ມູນສຳຮອງໃໝ່ກ່ອນການກູ້ຄືນ",

  // ── Privacy, Safety and Security ──
  // en: Privacy, Safety and Security
  "cat.privacy.title": "ຄວາມເປັນສ່ວນຕົວ, ຄວາມປອດໄພ ແລະ ຄວາມໝັ້ນຄົງ",
  // en: Encryption, App Lock, locked chats, privacy settings, blocking and reporting.
  "cat.privacy.blurb": "ການເຂົ້າລະຫັດ, ການລັອກແອັບ, ການສົນທະນາທີ່ລັອກໄວ້, ການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວ, ການບລັອກ ແລະ ການລາຍງານ.",

  // ── Privacy, Safety and Security › Encryption ──
  // en: Encryption
  "sec.privacy.encryption.title": "ການເຂົ້າລະຫັດ",

  // ── Privacy, Safety and Security › Encryption › About end-to-end encryption ──
  // en: About end-to-end encryption
  "art.privacy.encryption.e2ee.title": "ກ່ຽວກັບການເຂົ້າລະຫັດແບບຕົ້ນທາງເຖິງປາຍທາງ",
  // en: Your messages are locked on your device with a key only the people in the chat hold, and unlocked on theirs. Nobody in between — not the network you are on, and not Waow — can read them.
  "body.privacy.encryption.e2ee.0": "ຂໍ້ຄວາມຂອງທ່ານຈະຖືກເຂົ້າລະຫັດໄວ້ໃນອຸປະກອນ ໂດຍມີພຽງຜູ້ທີ່ຢູ່ໃນການສົນທະນາເທົ່ານັ້ນທີ່ສາມາດເປີດອ່ານໄດ້. ບໍ່ມີໃຜເຂົ້າເຖິງ ຫຼື ສາມາດອ່ານຂໍ້ຄວາມຂອງທ່ານໄດ້ບໍ່ວ່າຈະເປັນເຄືອຂ່າຍທີ່ທ່ານໃຊ້ ຫຼື ແມ້ແຕ່ Waow ເອງ .",
  // en: This covers one-to-one chats, groups, photos and videos, voice messages, and voice and video calls.
  "body.privacy.encryption.e2ee.1": "ການຄຸ້ມຄອງຄວາມເປັນສ່ວນຕົວນີ້ແມ່ນຄອບຄຸມທັງການສົນທະນາແບບສອງຄົນ, ສົນທະນາກຸ່ມ, ຮູບພາບ ແລະ ວິດີໂອ, ຂໍ້ຄວາມສຽງ, ລວມເຖິງການໂທດ້ວຍສຽງ ແລະ ວິດີໂອ.",
  // en: Note: Encryption protects a message in transit. It cannot stop the person you sent it to from screenshotting, saving or forwarding it.
  "body.privacy.encryption.e2ee.2": "ໝາຍເຫດ: ການເຂົ້າລະຫັດຈະປົກປ້ອງຂໍ້ຄວາມໃນຂະນະທີ່ກຳລັງສົ່ງ. ແຕ່ບໍ່ສາມາດປ້ອງກັນຄົນທີ່ທ່ານສົ່ງຂໍ້ຄວາມໃຫ້ ຈາກການຖ່າຍພາບໜ້າຈໍ, ບັນທຶກ ຫຼື ສົ່ງຕໍ່ຂໍ້ຄວາມນັ້ນໄດ້.",

  // ── Privacy, Safety and Security › Encryption › How to verify a chat is encrypted ──
  // en: How to verify a chat is encrypted
  "art.privacy.encryption.verify-code.title": "ວິທີກວດສອບວ່າການສົນທະນາຖືກເຂົ້າລະຫັດແລ້ວ",
  // en: Open the chat and tap the contact's name at the top.
  "body.privacy.encryption.verify-code.0.0": "ເປີດການສົນທະນາ ແລ້ວແຕະຊື່ຜູ້ຕິດຕໍ່ຢູ່ດ້ານເທິງ.",
  // en: Tap **Encryption**.
  "body.privacy.encryption.verify-code.0.1": "ແຕະ **ການເຂົ້າລະຫັດ**.",
  // en: Compare the security code — scan their QR code if you are together, or read the digits out loud if you are apart.
  "body.privacy.encryption.verify-code.0.2": "ປຽບທຽບລະຫັດຄວາມປອດໄພ — ຖ້າຢູ່ນຳກັນ ໃຫ້ສະແກນ QR code ຂອງອີກຝ່າຍ, ຫຼື ຖ້າຢູ່ຄົນລະບ່ອນ ໃຫ້ປຽບທຽບຕົວເລກລະຫັດຄວາມປອດໄພ.",
  // en: Matching codes confirm that nobody is sitting in the middle of the conversation.
  "body.privacy.encryption.verify-code.1": "ຖ້າລະຫັດຄວາມປອດໄພກົງກັນ, ນັ້ນໝາຍຄວາມວ່າບໍ່ມີຄົນອື່ນແຊກຊ້ອນການສົນທະນາຂອງທ່ານ",
  // en: Note: The code changes if your contact reinstalls Waow or switches phone. That is normal, but it is worth checking again.
  "body.privacy.encryption.verify-code.2": "ໝາຍເຫດ: ລະຫັດຄວາມປອດໄພຈະປ່ຽນໃໝ່ ຖ້າຄົນທີ່ທ່ານຕິດຕໍ່ຕິດຕັ້ງ Waow ໃໝ່ ຫຼື ປ່ຽນໂທລະສັບ. ນີ້ເປັນເລື່ອງປົກກະຕິ, ແຕ່ແນະນຳໃຫ້ກວດສອບລະຫັດອີກຄັ້ງ.",

  // ── Privacy, Safety and Security › App and Chat Lock ──
  // en: App and Chat Lock
  "sec.privacy.app-chat-lock.title": "ການລັອກແອັບ ແລະ ການລັອກແຊັດ",

  // ── Privacy, Safety and Security › App and Chat Lock › How to lock the whole app ──
  // en: How to lock the whole app
  "art.privacy.app-chat-lock.app-lock.title": "ວິທີລັອກໜ້າແອັບທັງໝົດ",
  // en: Open **Settings** → **Privacy** → **App Lock**.
  "body.privacy.app-chat-lock.app-lock.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ຄວາມເປັນສ່ວນຕົວ** → **ການລັອກແອັບ**.",
  // en: Turn on **Require Face ID** (or **Touch ID**).
  "body.privacy.app-chat-lock.app-lock.0.1": "ເປີດ **ຕ້ອງໃຊ້ Face ID** (ຫຼື **Touch ID**).",
  // en: Confirm with your face, fingerprint or device passcode.
  "body.privacy.app-chat-lock.app-lock.0.2": "ຢືນຢັນດ້ວຍໃບໜ້າ, ລາຍນິ້ວມື ຫຼື ລະຫັດຜ່ານອຸປະກອນຂອງທ່ານ.",
  // en: Waow then asks for biometrics every time you open it, and hides your conversations behind a cover in the app switcher so nothing is visible when you swipe between apps.
  "body.privacy.app-chat-lock.app-lock.1": "ຈາກນັ້ນ Waow ຈະຂໍໃຫ້ທ່ານຢືນຢັນຕົວຕົນດ້ວຍຂໍ້ມູນ Biometrics ເຊັ່ນ: Face ID ຫຼື Touch ID ທຸກຄັ້ງທີ່ເປີດແອັບ. ເມື່ອທ່ານສະຫຼັບໄປມາລະຫວ່າງແອັບ ການສົນທະນາຈະຖືກປິດໄວ້ເພື່ອບໍ່ໃຫ້ຄົນອື່ນເຫັນເນື້ອຫາໄດ້.",
  // en: Note: If biometrics fail, your device passcode unlocks Waow. There is no separate Waow PIN for App Lock.
  "body.privacy.app-chat-lock.app-lock.2": "ໝາຍເຫດ: ຖ້າການຢືນຢັນດ້ວຍ Biometrics ບໍ່ສຳເລັດ, ທ່ານສາມາດໃຊ້ລະຫັດຜ່ານຂອງອຸປະກອນເພື່ອປົດລັອກ Waow ໄດ້. ສຳລັບການລັອກແອັບ, Waow ບໍ່ມີ PIN ແຍກຕ່າງຫາກ",

  // ── Privacy, Safety and Security › App and Chat Lock › How to lock a single chat ──
  // en: How to lock a single chat
  "art.privacy.app-chat-lock.chat-lock.title": "ວິທີລັອກສະເພາະການສົນທະນາດຽວ",
  // en: Open the chat and tap the contact or group name at the top.
  "body.privacy.app-chat-lock.chat-lock.0.0": "ເປີດການສົນທະນາ ແລ້ວແຕະຊື່ຜູ້ຕິດຕໍ່ ຫຼື ຊື່ກຸ່ມຢູ່ດ້ານເທິງ.",
  // en: Turn on **Lock chat**.
  "body.privacy.app-chat-lock.chat-lock.0.1": "ເປີດ ລັອກການສົນທະນາ.",
  // en: Confirm with Face ID or Touch ID.
  "body.privacy.app-chat-lock.chat-lock.0.2": "ຢືນຢັນດ້ວຍ Face ID ຫຼື Touch ID.",
  // en: The conversation then shows as **Locked chat** in your list with no preview of the message, and needs biometrics to open. This is useful when you hand your unlocked phone to someone but want one conversation kept private.
  "body.privacy.app-chat-lock.chat-lock.1": "ຈາກນັ້ນ ການສົນທະນາຈະສະແດງເປັນ “ແຊັດທີ່ລັອກ” ໃນລາຍການແຊັດ ໂດຍບໍ່ສະແດງຕົວຢ່າງຂໍ້ຄວາມ ແລະ ຕ້ອງໃຊ້ Biometrics ເພື່ອເປີດ. ຟັງຊັນນີ້ເໝາະສຳລັບເວລາທີ່ທ່ານໃຫ້ຄົນອື່ນໃຊ້ໂທລະສັບໃນຂະນະທີ່ປົດລັອກຢູ່ ແຕ່ຕ້ອງການເກັບການສົນທະນາໃດໜຶ່ງໄວ້ເປັນສ່ວນຕົວ",

  // ── Privacy, Safety and Security › App and Chat Lock › About screenshot protection ──
  // en: About screenshot protection
  "art.privacy.app-chat-lock.screenshot.title": "ກ່ຽວກັບການປ້ອງກັນການຖ່າຍພາບໜ້າຈໍ",
  // en: Contact info screens are protected against screen capture, so someone else's profile cannot be quietly saved from your phone.
  "body.privacy.app-chat-lock.screenshot.0": "ໜ້າຂໍ້ມູນຕິດຕໍ່ຈະຖືກປ້ອງກັນຈາກການຖ່າຍພາບໜ້າຈໍ, ເພື່ອບໍ່ໃຫ້ຄົນອື່ນສາມາດແອບບັນທຶກໂປຣໄຟລ໌ຂອງທ່ານໄວ້ໃນໂທລະສັບ.",
  // en: Note: Screenshots inside conversations cannot be prevented on every device. Treat anything you send as something the other person can keep.
  "body.privacy.app-chat-lock.screenshot.1": "ໝາຍເຫດ: ບໍ່ແມ່ນທຸກອຸປະກອນທີ່ສາມາດປ້ອງກັນການຖ່າຍພາບໜ້າຈໍໃນແຊັດໄດ້. ດັ່ງນັ້ນ ຄວນຄຳນຶງຢູ່ສະເໝີວ່າ ສິ່ງທີ່ທ່ານສົ່ງສາມາດຖືກອີກຝ່າຍເກັບໄວ້ໄດ້.",

  // ── Privacy, Safety and Security › Privacy Settings ──
  // en: Privacy Settings
  "sec.privacy.privacy-settings.title": "ການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວ",

  // ── Privacy, Safety and Security › Privacy Settings › How to choose who can see your last seen, photo and About ──
  // en: How to choose who can see your last seen, photo and About
  "art.privacy.privacy-settings.audience.title": "ວິທີເລືອກວ່າໃຜສາມາດເຫັນເວລາອອນລາຍລ່າສຸດ, ຮູບ ແລະ ຂໍ້ມູນ ຂອງທ່ານໄດ້",
  // en: Open **Settings** → **Privacy**.
  "body.privacy.privacy-settings.audience.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ຄວາມເປັນສ່ວນຕົວ**.",
  // en: Tap **Last seen**, **Profile photo** or **About**.
  "body.privacy.privacy-settings.audience.0.1": "ແຕະ ໃຊ້ງານລ່າສຸດ, ຮູບໂປຣໄຟລ໌ ຫຼື ຂໍ້ມູນກ່ຽວກັບທ່ານ.",
  // en: Choose **Everyone**, **My Contacts**, or **My Contacts Except…** and pick who to exclude.
  "body.privacy.privacy-settings.audience.0.2": "ເລືອກ **ທຸກຄົນ**, **ຜູ້ຕິດຕໍ່ຂອງຂ້ອຍ** ຫຼື **ຜູ້ຕິດຕໍ່ຂອງຂ້ອຍ ຍົກເວັ້ນ…** ແລ້ວເລືອກຄົນທີ່ຈະຍົກເວັ້ນ.",
  // en: Profile photo and About can also be set to **Same as Last seen**, so one change covers all three.
  "body.privacy.privacy-settings.audience.1": "ທ່ານສາມາດຕັ້ງຮູບໂປຣໄຟລ໌ ແລະ ຂໍ້ມູນກ່ຽວກັບທ່ານ ໃຫ້ໃຊ້ການຕັ້ງຄ່າດຽວກັນກັບ “ໃຊ້ງານລ່າສຸດ” ໄດ້, ດັ່ງນັ້ນປ່ຽນຄັ້ງດຽວກໍມີຜົນກັບທັງ 3 ຢ່າງ.",
  // en: Read receipts
  "body.privacy.privacy-settings.audience.2": "ສະຖານະການອ່ານ",
  // en: Read receipts are a single switch in the same screen. If you turn them off, you stop sending blue ticks and you stop seeing them from other people.
  "body.privacy.privacy-settings.audience.3": "ປຸ່ມເປີດ/ປິດ ສະຖານະການອ່ານ ແມ່ນຢູ່ໃນໜ້າດຽວກັນ. ຖ້າປິດການຕັ້ງຄ່ານີ້ ເຄື່ອງໝາຍຖືກສີຟ້າສອງອັນຈະບໍ່ຖືກສົ່ງ ແລະ ທ່ານກໍຈະບໍ່ເຫັນເຄື່ອງໝາຍນີ້ຈາກຄົນອື່ນເຊັ່ນກັນ.",

  // ── Privacy, Safety and Security › Safety ──
  // en: Safety
  "sec.privacy.safety.title": "ຄວາມປອດໄພ",

  // ── Privacy, Safety and Security › Safety › How to block or report someone ──
  // en: How to block or report someone
  "art.privacy.safety.block.title": "ວິທີບລັອກ ຫຼື ລາຍງານຜູ້ຕິດຕໍ່ໃດໜຶ່ງ",
  // en: Open the chat and tap the contact's name at the top.
  "body.privacy.safety.block.0.0": "ເປີດການສົນທະນາ ແລ້ວແຕະຊື່ຜູ້ຕິດຕໍ່ຢູ່ດ້ານເທິງ.",
  // en: Scroll down and tap **Block** or **Report**.
  "body.privacy.safety.block.0.1": "ເລື່ອນລົງ ແລ້ວແຕະ **ບລັອກ** ຫຼື **ລາຍງານ**.",
  // en: Choose whether to block and report in the same step.
  "body.privacy.safety.block.0.2": "ເລືອກວ່າຈະບລັອກ ແລະ ລາຍງານພ້ອມກັນໃນຂັ້ນຕອນດຽວກັນຫຼືບໍ່.",
  // en: Blocking stops their messages and calls reaching you, and they are not told that you blocked them. Reporting sends the most recent messages from that chat to us so we can review the account.
  "body.privacy.safety.block.1": "ເມື່ອທ່ານບລັອກຜູ້ຕິດຕໍ່ໃດໜຶ່ງ, ຂໍ້ຄວາມ ແລະ ສາຍໂທຈາກຄົນນັ້ນຈະບໍ່ສາມາດສົ່ງມາຫາທ່ານໄດ້, ແລະ ຜູ້ຕິດຕໍ່ນັ້ນຈະບໍ່ຮູ້ວ່າທ່ານໄດ້ບລັອກລາວ. ສ່ວນການລາຍງານແມ່ນຈະສົ່ງຂໍ້ຄວາມລ່າສຸດຈາກການສົນທະນານັ້ນໃຫ້ພວກເຮົາເພື່ອກວດສອບບັນຊີໃນຂັ້ນຕອນຕໍ່ໄປ.",
  // en: Unblock someone
  "body.privacy.safety.block.2": "ຍົກເລີກການບລັອກ",
  // en: Open **Settings** → **Privacy** → **Blocked**.
  "body.privacy.safety.block.3.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ຄວາມເປັນສ່ວນຕົວ** → **ຖືກບລັອກ**.",
  // en: Tap the contact and tap **Unblock**.
  "body.privacy.safety.block.3.1": "ແຕະຜູ້ຕິດຕໍ່ ແລ້ວແຕະ **ຍົກເລີກການບລັອກ**.",

  // ── Privacy, Safety and Security › Safety › About two-step verification ──
  // en: About two-step verification
  "art.privacy.safety.two-step.title": "ກ່ຽວກັບການຢືນຢັນສອງຂັ້ນຕອນ",
  // en: Two-step verification adds a six-digit PIN that is needed whenever your phone number is registered on a device. Even someone who intercepts an SMS code cannot take over your number without it.
  "body.privacy.safety.two-step.0": "ການຢືນຢັນ 2 ຂັ້ນຕອນຈະເພີ່ມ PIN 6 ຕົວເລກ ທີ່ຈຳເປັນຕ້ອງໃສ່ທຸກຄັ້ງທີ່ເບີໂທຂອງທ່ານຖືກນຳໄປລົງທະບຽນໃນອຸປະກອນ. ດັ່ງນັ້ນ ໃນກໍລະນີທີ່ມີຄົນສາມາດຈັບລະຫັດ SMS ໄດ້ ກໍບໍ່ສາມາດເຂົ້າຍຶດບັນຊີຂອງທ່ານໄດ້ຫາກບໍ່ມີ PIN ນີ້.",
  // en: Open **Settings** → **Account** → **Security**.
  "body.privacy.safety.two-step.1.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ບັນຊີ** → **ຄວາມປອດໄພ**.",
  // en: Tap **Set up two-step verification**.
  "body.privacy.safety.two-step.1.1": "ແຕະ **ຕັ້ງຄ່າການຢືນຢັນສອງຂັ້ນຕອນ**.",
  // en: Enter a six-digit PIN and confirm it.
  "body.privacy.safety.two-step.1.2": "ປ້ອນລະຫັດ PIN ຫົກຕົວເລກ ແລ້ວຢືນຢັນ.",
  // en: Use a passkey instead
  "body.privacy.safety.two-step.2": "ໃຊ້ passkey ແທນ",
  // en: On supported phones you can create a passkey in the same screen, so registration is confirmed with Face ID or Touch ID rather than a code.
  "body.privacy.safety.two-step.3": "ຖ້າໂທລະສັບຂອງທ່ານຮອງຮັບ, ທ່ານສາມາດສ້າງ Passkey ໄດ້ຈາກໜ້າດຽວກັນ. ຈາກນັ້ນ ສາມາດໃຊ້ Face ID ຫຼື Touch ID ເພື່ອຢືນຢັນການລົງທະບຽນ ແທນການໃຊ້ລະຫັດ.",
  // en: Note: Choose a PIN you will remember. It is not a password you can reset — there is no way to look it up later.
  "body.privacy.safety.two-step.4": "ໝາຍເຫດ: ເລືອກ PIN ທີ່ທ່ານຈື່ໄດ້. PIN ນີ້ບໍ່ສາມາດຕັ້ງໃໝ່ໄດ້ ແລະ ບໍ່ມີວິທີກູ້ຄືນ ຫຼື ເບິ່ງ PIN ນີ້ໃນພາຍຫຼັງ.",

  // ── Notifications ──
  // en: Notifications
  "cat.notifications.title": "ການແຈ້ງເຕືອນ",
  // en: Previews, sounds, muted chats and notifications that don't arrive.
  "cat.notifications.blurb": "ຕົວຢ່າງຂໍ້ຄວາມ, ສຽງ, ການສົນທະນາທີ່ປິດສຽງ ແລະ ການແຈ້ງເຕືອນທີ່ບໍ່ມາຮອດ.",

  // ── Notifications › Notification Settings ──
  // en: Notification Settings
  "sec.notifications.notification-settings.title": "ການຕັ້ງຄ່າການແຈ້ງເຕືອນ",

  // ── Notifications › Notification Settings › How to turn notifications on ──
  // en: How to turn notifications on
  "art.notifications.notification-settings.turn-on.title": "ວິທີເປີດການແຈ້ງເຕືອນ",
  // en: Waow asks for notification permission the first time you open it. If you said no, you can change it in your phone's settings.
  "body.notifications.notification-settings.turn-on.0": "Waow ຈະຂໍອະນຸຍາດໃຫ້ສົ່ງການແຈ້ງເຕືອນໃນຄັ້ງທຳອິດທີ່ທ່ານເປີດແອັບ. ຖ້າທ່ານເລືອກ “ບໍ່ອະນຸຍາດ”, ທ່ານສາມາດໄປປ່ຽນການຕັ້ງຄ່າໄດ້ໃນ ການຕັ້ງຄ່າ ຂອງໂທລະສັບ",
  // en: Open your phone's **Settings** → **Notifications** → **Waow**.
  "body.notifications.notification-settings.turn-on.1.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ການແຈ້ງເຕືອນ** → **Waow** ຂອງໂທລະສັບທ່ານ.",
  // en: Allow notifications.
  "body.notifications.notification-settings.turn-on.1.1": "ອະນຸຍາດການແຈ້ງເຕືອນ.",
  // en: Back in Waow, open **Settings** → **Notifications** and turn on **Message notifications**.
  "body.notifications.notification-settings.turn-on.1.2": "ກັບມາໃນ Waow ໃຫ້ເປີດ **ການຕັ້ງຄ່າ** → **ການແຈ້ງເຕືອນ** ແລ້ວເປີດ **ການແຈ້ງເຕືອນຂໍ້ຄວາມ**.",

  // ── Notifications › Notification Settings › How to hide message text in notifications ──
  // en: How to hide message text in notifications
  "art.notifications.notification-settings.previews.title": "ວິທີເຊື່ອງເນື້ອຫາຂໍ້ຄວາມໃນການແຈ້ງເຕືອນ",
  // en: Open **Settings** → **Notifications**.
  "body.notifications.notification-settings.previews.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ການແຈ້ງເຕືອນ**.",
  // en: Turn off **Show preview**.
  "body.notifications.notification-settings.previews.0.1": "ປິດ **ສະແດງຕົວຢ່າງ**.",
  // en: Notifications then say only that a message arrived, without the sender's text.
  "body.notifications.notification-settings.previews.1": "ຈາກນັ້ນການແຈ້ງເຕືອນຈະບອກພຽງວ່າມີຂໍ້ຄວາມມາຮອດ ໂດຍບໍ່ມີເນື້ອຫາຂໍ້ຄວາມຂອງຜູ້ສົ່ງ.",

  // ── Notifications › Notification Settings › How to turn off sounds inside the app ──
  // en: How to turn off sounds inside the app
  "art.notifications.notification-settings.in-app-sounds.title": "ວິທີປິດສຽງພາຍໃນແອັບ",
  // en: Open **Settings** → **Notifications**.
  "body.notifications.notification-settings.in-app-sounds.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ການແຈ້ງເຕືອນ**.",
  // en: Turn off **In-app sounds**.
  "body.notifications.notification-settings.in-app-sounds.0.1": "ປິດ **ສຽງພາຍໃນແອັບ**.",
  // en: This controls the sounds played for messages sent and received while Waow is open, separately from your notification sound.
  "body.notifications.notification-settings.in-app-sounds.1": "ການຕັ້ງຄ່ານີ້ແມ່ນສຽງສຳລັບຂໍ້ຄວາມທີ່ສົ່ງ ແລະ ໄດ້ຮັບໃນຂະນະທີ່ເປີດໃຊ້ Waow ຢູ່. ການຕັ້ງຄ່ານີ້ແມ່ນແຍກຈາກສຽງການແຈ້ງເຕືອນ",

  // ── Notifications › Notification Settings › How to mute a chat ──
  // en: How to mute a chat
  "art.notifications.notification-settings.mute.title": "ວິທີປິດສຽງການສົນທະນາ",
  // en: Tap and hold the conversation in your chat list.
  "body.notifications.notification-settings.mute.0.0": "ແຕະການສົນທະນາໃນລາຍການສົນທະນາຂອງທ່ານຄ້າງໄວ້.",
  // en: Tap **Mute** and choose how long for.
  "body.notifications.notification-settings.mute.0.1": "ແຕະ **ປິດສຽງ** ແລ້ວເລືອກໄລຍະເວລາ.",
  // en: Muted chats still receive messages, they just don't make a sound or raise a banner. **Settings** → **Notifications** → **Muted chats** lists everything you have silenced, with an **Unmute all** option.
  "body.notifications.notification-settings.mute.1": "ການສົນທະນາທີ່ປິດສຽງຍັງຮັບຂໍ້ຄວາມໄດ້ປົກກະຕິ, ແຕ່ຈະບໍ່ມີສຽງ ຫຼື ແຈ້ງເຕືອນໃນແຖບ. ໃນ ການຕັ້ງຄ່າ → ການແຈ້ງເຕືອນ → ການສົນທະນາທີ່ປິດສຽງ ທ່ານສາມາດເບິ່ງການສົນທະນທັງໝົດທີ່ປິດສຽງໄວ້ ແລະ ເລືອກ ເປີດສຽງທັງໝົດ ເພື່ອເປີດສຽງຄືນທັງໝົດ.",

  // ── Notifications › Troubleshooting ──
  // en: Troubleshooting
  "sec.notifications.notification-troubleshooting.title": "ການແກ້ໄຂບັນຫາ",

  // ── Notifications › Troubleshooting › I'm not receiving notifications ──
  // en: I'm not receiving notifications
  "art.notifications.notification-troubleshooting.no-notifications.title": "ຂ້ອຍບໍ່ໄດ້ຮັບການແຈ້ງເຕືອນ",
  // en: Check that notifications are allowed for Waow in your phone's settings.
  "body.notifications.notification-troubleshooting.no-notifications.0.0": "ກວດເບິ່ງວ່າໃນການຕັ້ງຄ່າຂອງໂທລະສັບ ໄດ້ອະນຸຍາດການແຈ້ງເຕືອນສຳລັບ Waow ແລ້ວ.",
  // en: Check that the chat is not muted.
  "body.notifications.notification-troubleshooting.no-notifications.0.1": "ກວດເບິ່ງວ່າການສົນທະນານັ້ນບໍ່ໄດ້ຖືກປິດສຽງ.",
  // en: Check that Focus or Do Not Disturb is not filtering them out.
  "body.notifications.notification-troubleshooting.no-notifications.0.2": "ກວດເບິ່ງວ່າໂໝດ Focus ຫຼື Do Not Disturb ບໍ່ໄດ້ປິດກັ້ນການແຈ້ງເຕືອນ.",
  // en: Turn off battery-saving modes that stop background activity.
  "body.notifications.notification-troubleshooting.no-notifications.0.3": "ປິດໂໝດປະຢັດແບັດເຕີຣີທີ່ຈຳກັດການເຮັດວຽກຂອງແອັບໃນເບື້ອງຫຼັງ.",

  // ── Notifications › Troubleshooting › If messages are encrypted, how can a notification show the text? ──
  // en: If messages are encrypted, how can a notification show the text?
  "art.notifications.notification-troubleshooting.preview-privacy.title": "ຖ້າຂໍ້ຄວາມຖືກເຂົ້າລະຫັດ ການແຈ້ງເຕືອນສະແດງຂໍ້ຄວາມໄດ້ແນວໃດ?",
  // en: The notification arrives as ciphertext and is unlocked on your phone, by your phone, just before it is shown. The push service only ever carries the encrypted version.
  "body.notifications.notification-troubleshooting.preview-privacy.0": "ການແຈ້ງເຕືອນຈະສົ່ງມາໃນຮູບແບບຂໍ້ຄວາມທີ່ຕ້ອງເຂົ້າລະຫັດ ແລະ ໂທລະສັບຂອງທ່ານຈະເປັນຜູ້ຖອດລະຫັດກ່ອນທີ່ຈະສະແດງໃນແຈ້ງເຕືອນ.",

  // ── Linked Devices ──
  // en: Linked Devices
  "cat.linked-devices.title": "ອຸປະກອນທີ່ເຊື່ອມຕໍ່",
  // en: Using Waow on another device, transferring history and signing out.
  "cat.linked-devices.blurb": "ການໃຊ້ Waow ໃນອຸປະກອນອື່ນ, ການໂອນປະຫວັດ ແລະ ການອອກຈາກລະບົບ.",

  // ── Linked Devices › Using Waow on Other Devices ──
  // en: Using Waow on Other Devices
  "sec.linked-devices.using-other-devices.title": "ການໃຊ້ Waow ໃນອຸປະກອນອື່ນ",

  // ── Linked Devices › Using Waow on Other Devices › How to link a device ──
  // en: How to link a device
  "art.linked-devices.using-other-devices.link.title": "ວິທີເຊື່ອມອຸປະກອນ",
  // en: On your phone, open **Settings** → **Linked devices**.
  "body.linked-devices.using-other-devices.link.0.0": "ເປີດ ການຕັ້ງຄ່າ → ອຸປະກອນທີ່ເຊື່ອມຕໍ່.",
  // en: Tap **Link a device**.
  "body.linked-devices.using-other-devices.link.0.1": "ແຕະ **ເຊື່ອມອຸປະກອນ**.",
  // en: Scan the QR code shown on the other device.
  "body.linked-devices.using-other-devices.link.0.2": "ສະແກນ QR code ທີ່ສະແດງຢູ່ໃນອຸປະກອນອື່ນ.",
  // en: The link is confirmed on your phone, so a code alone is not enough for someone to add themselves to your account.
  "body.linked-devices.using-other-devices.link.1": "ການເຊື່ອມຕໍ່ຈະຖືກຢືນຢັນຢູ່ໃນໂທລະສັບຂອງທ່ານ, ດັ່ງນັ້ນການມີພຽງລະຫັດຢ່າງດຽວ ບໍ່ສາມາດໃຫ້ຄົນອື່ນເພີ່ມອຸປະກອນເຂົ້າໃນບັນຊີຂອງທ່ານໄດ້.",

  // ── Linked Devices › Using Waow on Other Devices › Will my chat history appear on a linked device? ──
  // en: Will my chat history appear on a linked device?
  "art.linked-devices.using-other-devices.history.title": "ປະຫວັດການສົນທະນາຂອງຂ້ອຍຈະສະແດງຢູ່ໃນອຸປະກອນທີ່ເຊື່ອມຕໍ່ບໍ?",
  // en: Recent history is transferred to the new device when it is linked.
  "body.linked-devices.using-other-devices.history.0": "ປະຫວັດການສົນທະນາລ່າສຸດຈະຖືກໂອນໄປຍັງອຸປະກອນໃໝ່ເມື່ອທ່ານເຊື່ອມຕໍ່ອຸປະກອນນັ້ນ.",
  // en: If the transfer doesn't finish, the device is still linked and new messages arrive normally. Unlink it and link it again to retry the history.
  "body.linked-devices.using-other-devices.history.1": "ຖ້າການໂອນປະຫວັດການສົນທະນາບໍ່ສຳເລັດ, ອຸປະກອນນັ້ນຍັງຄົງເຊື່ອມຕໍ່ຢູ່ ແລະ ຍັງສາມາດຮັບຂໍ້ຄວາມໃໝ່ໄດ້ຕາມປົກກະຕິ. ໃຫ້ຍົກເລີກການເຊື່ອມຕໍ່ ແລະ ເຊື່ອມຕໍ່ອີກຄັ້ງເພື່ອລອງໂອນປະຫວັດການສົນທະນາໃໝ່.",

  // ── Linked Devices › Using Waow on Other Devices › How to see and remove linked devices ──
  // en: How to see and remove linked devices
  "art.linked-devices.using-other-devices.review.title": "ວິທີເບິ່ງ ແລະ ລົບອຸປະກອນທີ່ເຊື່ອມຕໍ່",
  // en: Open **Settings** → **Linked devices**.
  "body.linked-devices.using-other-devices.review.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ອຸປະກອນທີ່ເຊື່ອມຕໍ່**.",
  // en: Check the list and when each device was last active.
  "body.linked-devices.using-other-devices.review.0.1": "ກວດເບິ່ງລາຍການ ແລະ ເວລາທີ່ແຕ່ລະອຸປະກອນໃຊ້ງານລ່າສຸດ.",
  // en: Tap a device you want to remove, then confirm to unlink it.
  "body.linked-devices.using-other-devices.review.0.2": "ແຕະອຸປະກອນທີ່ທ່ານຢາກລົບ ແລ້ວຢືນຢັນເພື່ອຍົກເລີກການເຊື່ອມຕໍ່.",
  // en: Note: If you see a device you don't recognise, unlink it and then set up two-step verification.
  "body.linked-devices.using-other-devices.review.1": "ໝາຍເຫດ: ຖ້າທ່ານເຫັນອຸປະກອນທີ່ທ່ານບໍ່ຮູ້ຈັກ ໃຫ້ຍົກເລີກການເຊື່ອມ ແລ້ວຕັ້ງຄ່າການຢືນຢັນສອງຂັ້ນຕອນ.",

  // ── Linked Devices › Using Waow on Other Devices › Are linked devices end-to-end encrypted? ──
  // en: Are linked devices end-to-end encrypted?
  "art.linked-devices.using-other-devices.device-encryption.title": "ອຸປະກອນທີ່ເຊື່ອມຕໍ່ຖືກເຂົ້າລະຫັດແບບຕົ້ນທາງເຖິງປາຍທາງບໍ?",
  // en: Yes. Each device has its own keys, and your personal messages stay end-to-end encrypted on all of them.
  "body.linked-devices.using-other-devices.device-encryption.0": "ແມ່ນ. ແຕ່ລະອຸປະກອນຈະມີ Key ການເຂົ້າລະຫັດຂອງຕົນເອງ ແລະ ຂໍ້ຄວາມສ່ວນຕົວຂອງທ່ານຈະຍັງຄົງຖືກເຂົ້າລະຫັດແບບຕົ້ນທາງຫາປາຍທາງຢູ່ໃນທຸກອຸປະກອນ.",

  // ── Account and Bans ──
  // en: Account and Bans
  "cat.account.title": "ບັນຊີ ແລະ ການລະງັບ",
  // en: Changing your number, multiple accounts, deletion and banned accounts.
  "cat.account.blurb": "ການປ່ຽນເບີໂທ, ຫຼາຍບັນຊີ, ການລຶບບັນຊີ ແລະ ບັນຊີທີ່ຖືກລະງັບ.",

  // ── Account and Bans › Manage Your Account ──
  // en: Manage Your Account
  "sec.account.manage-account.title": "ຈັດການບັນຊີຂອງທ່ານ",

  // ── Account and Bans › Manage Your Account › How to change your phone number ──
  // en: How to change your phone number
  "art.account.manage-account.change-number.title": "ວິທີປ່ຽນເບີໂທລະສັບຂອງທ່ານ",
  // en: Open **Settings** → **Account** → **Change number**.
  "body.account.manage-account.change-number.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ບັນຊີ** → **ປ່ຽນເບີໂທ**.",
  // en: Enter your old number and your new number.
  "body.account.manage-account.change-number.0.1": "ປ້ອນເບີເກົ່າ ແລະ ເບີໃໝ່ຂອງທ່ານ.",
  // en: Confirm the new number with the code we send you.
  "body.account.manage-account.change-number.0.2": "ຢືນຢັນເບີໃໝ່ດ້ວຍລະຫັດທີ່ພວກເຮົາສົ່ງໃຫ້ທ່ານ.",
  // en: Your chats, groups and settings move with you.
  "body.account.manage-account.change-number.1": "ການສົນທະນາ, ກຸ່ມ ແລະ ການຕັ້ງຄ່າຂອງທ່ານຈະຍ້າຍໄປນຳ.",
  // en: Note: Do this before you cancel the old SIM — you need to be able to receive the verification code.
  "body.account.manage-account.change-number.2": "ໝາຍເຫດ: ໃຫ້ເຮັດຂັ້ນຕອນນີ້ກ່ອນທີ່ຈະຍົກເລີກ SIM ເກົ່າ, ເພາະທ່ານຍັງຕ້ອງສາມາດຮັບລະຫັດຢືນຢັນໄດ້",

  // ── Account and Bans › Manage Your Account › How to use two accounts on one phone ──
  // en: How to use two accounts on one phone
  "art.account.manage-account.multi-account.title": "ວິທີໃຊ້ສອງບັນຊີໃນໂທລະສັບເຄື່ອງດຽວ",
  // en: Open **Settings** → **Account** → **Switch account**.
  "body.account.manage-account.multi-account.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ບັນຊີ** → **ສະຫຼັບບັນຊີ**.",
  // en: Tap **Add account** and register the second number.
  "body.account.manage-account.multi-account.0.1": "ແຕະ **ເພີ່ມບັນຊີ** ແລ້ວລົງທະບຽນເບີທີສອງ.",
  // en: Use the same screen to move between accounts.
  "body.account.manage-account.multi-account.0.2": "ໃຊ້ໜ້າດຽວກັນນີ້ເພື່ອສະຫຼັບໄປມາລະຫວ່າງບັນຊີ.",
  // en: Each account keeps its own chats, contacts and settings. You do not have to sign out of the first one.
  "body.account.manage-account.multi-account.1": "ແຕ່ລະບັນຊີຈະມີການສົນທະນາ, ລາຍຊື່ຕິດຕໍ່ ແລະ ການຕັ້ງຄ່າຂອງຕົນເອງ. ທ່ານບໍ່ຈຳເປັນຕ້ອງອອກຈາກລະບົບບັນຊີທຳອິດ.",

  // ── Account and Bans › Manage Your Account › How to request your account information ──
  // en: How to request your account information
  "art.account.manage-account.request-info.title": "ວິທີຮ້ອງຂໍຂໍ້ມູນບັນຊີຂອງທ່ານ",
  // en: Open **Settings** → **Account** → **Request account info**.
  "body.account.manage-account.request-info.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ບັນຊີ** → **ຮ້ອງຂໍຂໍ້ມູນບັນຊີ**.",
  // en: Tap **Request report**.
  "body.account.manage-account.request-info.0.1": "ແຕະ **ຮ້ອງຂໍລາຍງານ**.",
  // en: Come back in a few days to download it.
  "body.account.manage-account.request-info.0.2": "ກັບມາອີກໃນສອງສາມມື້ເພື່ອດາວໂຫຼດມັນ.",
  // en: Note: Because your messages are end-to-end encrypted, the report cannot include their contents. Use Export chat if you want a copy of a conversation.
  "body.account.manage-account.request-info.1": "ໝາຍເຫດ: ເນື່ອງຈາກຂໍ້ຄວາມຖືກເຂົ້າລະຫັດແບບຕົ້ນທາງຫາປາຍທາງ, ລາຍງານຈະບໍ່ລວມເນື້ອຫາຂອງຂໍ້ຄວາມ. ຖ້າຕ້ອງການເກັບສຳເນົາການສົນທະນາ, ໃຫ້ໃຊ້ “ສົ່ງອອກການສົນທະນາ”.",

  // ── Account and Bans › Deleting Your Account ──
  // en: Deleting Your Account
  "sec.account.delete-account.title": "ການລຶບບັນຊີຂອງທ່ານ",

  // ── Account and Bans › Deleting Your Account › How to delete your Waow account ──
  // en: How to delete your Waow account
  "art.account.delete-account.delete.title": "ວິທີລຶບບັນຊີ Waow ຂອງທ່ານ",
  // en: Open **Settings** → **Account** → **Delete account**.
  "body.account.delete-account.delete.0.0": "ເປີດ ການຕັ້ງຄ່າ → ບັນຊີ → ລົບບັນຊີ.",
  // en: Enter your phone number with its country code.
  "body.account.delete-account.delete.0.1": "ປ້ອນເບີໂທລະສັບຂອງທ່ານພ້ອມລະຫັດປະເທດ.",
  // en: Tap **Delete my account**.
  "body.account.delete-account.delete.0.2": "ແຕະ ລົບບັນຊີຂອງຂ້ອຍ.",
  // en: Deleting removes your account, your profile, your group memberships and your message history from our servers.
  "body.account.delete-account.delete.1": "ຂັ້ນຕອນນີ້ຈະລົບບັນຊີຂອງທ່ານ, ໂປຣໄຟລ໌, ການເຂົ້າຮ່ວມກຸ່ມ ແລະ ປະຫວັດຂໍ້ຄວາມຂອງທ່ານອອກຈາກເຊີບເວີຂອງພວກເຮົາ.",
  // en: Note: This cannot be undone, and messages other people already received stay on their devices. Export anything you want to keep first.
  "body.account.delete-account.delete.2": "ໝາຍເຫດ: ການລຶບບັນຊີບໍ່ສາມາດກູ້ຄືນໄດ້. ຂໍ້ຄວາມທີ່ຄົນອື່ນໄດ້ຮັບໄປແລ້ວ ຈະຍັງຄົງຢູ່ໃນອຸປະກອນຂອງພວກເຂົາ. ຖ້າມີຂໍ້ມູນໃດທີ່ທ່ານຕ້ອງການເກັບໄວ້, ໃຫ້ໃຊ້ “ສົ່ງອອກການສົນທະນາ” ເພື່ອເກັບສຳເນົາກ່ອນ.",

  // ── Account and Bans › Bans and Reports ──
  // en: Bans and Reports
  "sec.account.bans.title": "ການລະງັບ ແລະ ການລາຍງານ",

  // ── Account and Bans › Bans and Reports › About banned accounts ──
  // en: About banned accounts
  "art.account.bans.banned.title": "ກ່ຽວກັບບັນຊີທີ່ຖືກລະງັບ",
  // en: Accounts are restricted for sending bulk or automated messages, impersonating other people, or behaviour reported repeatedly by other users.
  "body.account.bans.banned.0": "ບັນຊີອາດຖືກຈຳກັດການໃຊ້ງານ ຖ້າມີການສົ່ງຂໍ້ຄວາມຈຳນວນຫຼາຍ ຫຼື ສົ່ງຂໍ້ຄວາມແບບອັດຕະໂນມັດ, ປອມແປງເປັນຄົນອື່ນ, ຫຼື ມີພຶດຕິກຳທີ່ຖືກຜູ້ໃຊ້ອື່ນລາຍງານຊ້ຳໆ.",
  // en: Temporarily banned
  "body.account.bans.banned.1": "ຖືກລະງັບຊົ່ວຄາວ",
  // en: A temporary ban usually means unofficial software was detected. Uninstall it, install the official Waow app and wait for the countdown to finish.
  "body.account.bans.banned.2": "ການລະງັບຊົ່ວຄາວມັກໝາຍເຖິງວ່າລະບົບກວດພົບວ່າທ່ານກຳລັງໃຊ້ຊອບແວ ຫຼື ແອັບ Waow ເວີຊັ່ນທາງການ. ໃຫ້ຖອນການຕິດຕັ້ງແອັບນັ້ນ ແລະ ຕິດຕັ້ງ Waow ເວີຊັ່ນທາງການແທນ",
  // en: If you believe the decision was wrong, contact support@waow.app and ask for a review.
  "body.account.bans.banned.3": "ຖ້າທ່ານຄິດວ່າການລະງັບນີ້ເກີດຈາກຄວາມຜິດພາດ, ໃຫ້ຕິດຕໍ່ support@waow.app ເພື່ອຂໍໃຫ້ກວດສອບຄືນ.",

  // ── Account and Bans › Bans and Reports › How to report a problem ──
  // en: How to report a problem
  "art.account.bans.report-problem.title": "ວິທີລາຍງານບັນຫາ",
  // en: Open **Settings** → **Help** → **Report a problem**.
  "body.account.bans.report-problem.0.0": "ເປີດ **ການຕັ້ງຄ່າ** → **ຊ່ວຍເຫຼືອ** → **ລາຍງານບັນຫາ**.",
  // en: Describe what happened and tap send.
  "body.account.bans.report-problem.0.1": "ອະທິບາຍສິ່ງທີ່ເກີດຂຶ້ນ ແລ້ວແຕະສົ່ງ.",
  // en: Note: The report includes diagnostic details about your app and device — never your messages, your media or your encryption keys.
  "body.account.bans.report-problem.1": "ໝາຍເຫດ: ລາຍງານນີ້ມີພຽງຂໍ້ມູນສຳລັບການກວດສອບບັນຫາຂອງແອັບ ແລະ ອຸປະກອນຂອງທ່ານເທົ່ານັ້ນ — ຈະບໍ່ມີຂໍ້ຄວາມ, ໄຟລ໌ສື່ ຫຼື Key ຕ່າງໆຂອງທ່ານ.",
};
