/**
 * Lao (ລາວ) for the legal documents.
 *
 * Translated in-house and NOT reviewed by a qualified legal translator. These
 * are binding documents and the Terms of Service state that the law of the Lao
 * PDR governs them, so this Lao text could be treated as authoritative. Have it
 * reviewed before launch, and state in the Terms which language version
 * prevails.
 *
 * Keys mirror legal-shell.tsx: `legal.<slug>.title`, `legal.<slug>.<block>`,
 * `.<n>` for list items, `.h0`/`.h1`/`.rNa`/`.rNb` for table cells. Any key left
 * empty falls back to English. Regenerate the key list with:
 *   node --experimental-strip-types scripts/legal-i18n.mjs --dump
 */
export const legalLo: Record<string, string> = {

  // ── privacy ──
  // en: Privacy Policy
  "legal.privacy.title": "ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ",
  // en: Who we are
  "legal.privacy.0": "ພວກເຮົາແມ່ນໃຜ",
  // en: Waow is a communication service operated by Dynamic Solution Sole Co., Ltd. ("Waow"), a company registered in the Lao People's Democratic Republic, with its registered office at Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR.
  "legal.privacy.1": "Waow ເປັນບໍລິການສື່ສານທີ່ດຳເນີນງານໂດຍ Dynamic Solution Sole Co., Ltd. (\"Waow\") ເຊິ່ງເປັນບໍລິສັດທີ່ຈົດທະບຽນຢູ່ ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ ໂດຍມີສຳນັກງານຈົດທະບຽນຢູ່ ບ້ານດົງສັງຫິນ, ເມືອງໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ.",
  // en: This policy explains what information Waow collects, why, who it is shared with, and the choices you have. It covers the Waow mobile apps, the Waow web experience, official accounts and our support services. For any question about your information, write to privacy@waow.app.
  "legal.privacy.2": "ນະໂຍບາຍນີ້ອະທິບາຍວ່າ Waow ເກັບຂໍ້ມູນຫຍັງ, ເພື່ອຫຍັງ, ແບ່ງປັນກັບໃຜ ແລະ ທ່ານມີທາງເລືອກຫຍັງແດ່. ມັນຄຸ້ມຄອງແອັບມືຖື Waow, ປະສົບການເວັບຂອງ Waow, ບັນຊີທາງການ ແລະ ບໍລິການຊ່ວຍເຫຼືອຂອງພວກເຮົາ. ສຳລັບຄຳຖາມໃດໆກ່ຽວກັບຂໍ້ມູນຂອງທ່ານ ກະລຸນາຂຽນຫາ privacy@waow.app.",
  // en: Information we collect
  "legal.privacy.3": "ຂໍ້ມູນທີ່ພວກເຮົາເກັບ",
  // en: Information you give us
  "legal.privacy.4": "ຂໍ້ມູນທີ່ທ່ານໃຫ້ພວກເຮົາ",
  // en: Your phone number. Required to create an account. We send a one-time code by SMS to confirm the number belongs to you.
  "legal.privacy.5.0": "ເບີໂທລະສັບຂອງທ່ານ. ຈຳເປັນສຳລັບການສ້າງບັນຊີ. ພວກເຮົາສົ່ງລະຫັດຄັ້ງດຽວທາງ SMS ເພື່ອຢືນຢັນວ່າເບີນັ້ນເປັນຂອງທ່ານ.",
  // en: Your profile. A name, and optionally a photo and status message. Other people see these according to your privacy settings.
  "legal.privacy.5.1": "ໂປຣໄຟລ໌ຂອງທ່ານ. ຊື່ ແລະ ຮູບກັບຂໍ້ຄວາມສະຖານະ (ບໍ່ບັງຄັບ). ຄົນອື່ນເຫັນສິ່ງເຫຼົ່ານີ້ຕາມການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວຂອງທ່ານ.",
  // en: Your messages and media. Text, photos, videos, voice notes, documents, reactions and other content you send. We deliver this content to the people and groups you choose.
  "legal.privacy.5.2": "ຂໍ້ຄວາມ ແລະ ສື່ຂອງທ່ານ. ຂໍ້ຄວາມ, ຮູບ, ວິດີໂອ, ຂໍ້ຄວາມສຽງ, ເອກະສານ, ຄວາມຮູ້ສຶກ ແລະ ເນື້ອຫາອື່ນທີ່ທ່ານສົ່ງ. ພວກເຮົາສົ່ງເນື້ອຫານີ້ໄປຫາຄົນ ແລະ ກຸ່ມທີ່ທ່ານເລືອກ.",
  // en: Your contacts, if you allow it. Waow checks the phone numbers in your address book so it can show you which of your contacts already use Waow. We use these numbers only for that purpose. If you do not grant permission you can still use Waow and add people by phone number manually.
  "legal.privacy.5.3": "ລາຍຊື່ຕິດຕໍ່ຂອງທ່ານ ຖ້າທ່ານອະນຸຍາດ. Waow ກວດເບີໂທໃນສະໝຸດລາຍຊື່ຂອງທ່ານ ເພື່ອສະແດງໃຫ້ເຫັນວ່າຜູ້ຕິດຕໍ່ຄົນໃດໃຊ້ Waow ຢູ່ແລ້ວ. ພວກເຮົາໃຊ້ເບີເຫຼົ່ານີ້ເພື່ອຈຸດປະສົງນັ້ນເທົ່ານັ້ນ. ຖ້າທ່ານບໍ່ໃຫ້ສິດ ທ່ານກໍຍັງໃຊ້ Waow ໄດ້ ແລະ ເພີ່ມຄົນດ້ວຍເບີໂທດ້ວຍຕົນເອງ.",
  // en: Content you make public. Anything you post through an official account, and any comment or reaction you leave on public content.
  "legal.privacy.5.4": "ເນື້ອຫາທີ່ທ່ານເຮັດໃຫ້ເປັນສາທາລະນະ. ສິ່ງໃດກໍຕາມທີ່ທ່ານໂພສຜ່ານບັນຊີທາງການ ແລະ ຄຳເຫັນ ຫຼື ຄວາມຮູ້ສຶກທີ່ທ່ານໃສ່ໃນເນື້ອຫາສາທາລະນະ.",
  // en: Reports, appeals and support messages you send us.
  "legal.privacy.5.5": "ລາຍງານ, ການອຸທອນ ແລະ ຂໍ້ຄວາມຂໍຄວາມຊ່ວຍເຫຼືອທີ່ທ່ານສົ່ງມາຫາພວກເຮົາ.",
  // en: Information we collect automatically
  "legal.privacy.6": "ຂໍ້ມູນທີ່ພວກເຮົາເກັບອັດຕະໂນມັດ",
  // en: Account activity: when your account was created, when you were last online, and which features you use.
  "legal.privacy.7.0": "ການເຄື່ອນໄຫວຂອງບັນຊີ: ບັນຊີຂອງທ່ານຖືກສ້າງເມື່ອໃດ, ທ່ານອອນລາຍລ່າສຸດເມື່ອໃດ ແລະ ທ່ານໃຊ້ຄຸນສົມບັດໃດແດ່.",
  // en: Device and connection information: device model, operating system and app version, language, time zone, IP address, and mobile network.
  "legal.privacy.7.1": "ຂໍ້ມູນອຸປະກອນ ແລະ ການເຊື່ອມຕໍ່: ລຸ້ນອຸປະກອນ, ລະບົບປະຕິບັດການ ແລະ ລຸ້ນແອັບ, ພາສາ, ເຂດເວລາ, ທີ່ຢູ່ IP ແລະ ເຄືອຂ່າຍມືຖື.",
  // en: Call information: who took part in a call, when it started, and how long it lasted, along with the technical signalling needed to connect it. We do not record the content of your calls.
  "legal.privacy.7.2": "ຂໍ້ມູນການໂທ: ໃຜເຂົ້າຮ່ວມການໂທ, ເລີ່ມເມື່ອໃດ ແລະ ດົນປານໃດ ພ້ອມກັບສັນຍານທາງເຕັກນິກທີ່ຈຳເປັນໃນການເຊື່ອມຕໍ່ສາຍ. ພວກເຮົາບໍ່ບັນທຶກເນື້ອຫາການໂທຂອງທ່ານ.",
  // en: Diagnostic and crash information, so we can find and fix faults.
  "legal.privacy.7.3": "ຂໍ້ມູນວິນິດໄສ ແລະ ການລົ້ມຂອງແອັບ ເພື່ອໃຫ້ພວກເຮົາຫາ ແລະ ແກ້ໄຂຂໍ້ຜິດພາດໄດ້.",
  // en: A push notification token, so Apple or Google can deliver notifications to your device.
  "legal.privacy.7.4": "ໂທເຄັນການແຈ້ງເຕືອນ ເພື່ອໃຫ້ Apple ຫຼື Google ສົ່ງການແຈ້ງເຕືອນໄປຫາອຸປະກອນຂອງທ່ານໄດ້.",
  // en: Information you choose to share
  "legal.privacy.8": "ຂໍ້ມູນທີ່ທ່ານເລືອກແບ່ງປັນ",
  // en: Location, only when you choose to share it in a conversation. Live location sharing stops automatically at the end of the period you select, and you can stop it at any time.
  "legal.privacy.9.0": "ສະຖານທີ່ ສະເພາະເມື່ອທ່ານເລືອກແບ່ງປັນມັນໃນການສົນທະນາ. ການແບ່ງປັນສະຖານທີ່ແບບສົດຈະຢຸດອັດຕະໂນມັດເມື່ອສິ້ນສຸດໄລຍະເວລາທີ່ທ່ານເລືອກ ແລະ ທ່ານສາມາດຢຸດມັນໄດ້ທຸກເວລາ.",
  // en: Text you send to translation or to the AI assistant. Your conversations are not sent to a translation or AI provider automatically — this happens only when you use the feature on content you have selected.
  "legal.privacy.9.1": "ຂໍ້ຄວາມທີ່ທ່ານສົ່ງໄປແປ ຫຼື ໄປຫາຜູ້ຊ່ວຍ AI. ການສົນທະນາຂອງທ່ານຈະບໍ່ຖືກສົ່ງໄປຫາຜູ້ໃຫ້ບໍລິການແປ ຫຼື AI ໂດຍອັດຕະໂນມັດ — ສິ່ງນີ້ເກີດຂຶ້ນສະເພາະເມື່ອທ່ານໃຊ້ຄຸນສົມບັດນັ້ນກັບເນື້ອຫາທີ່ທ່ານເລືອກເທົ່ານັ້ນ.",
  // en: How we use information
  "legal.privacy.10": "ພວກເຮົາໃຊ້ຂໍ້ມູນແນວໃດ",
  // en: To run the service: create your account, deliver your messages, connect your calls, sync your linked devices, and show you which contacts use Waow.
  "legal.privacy.11.0": "ເພື່ອດຳເນີນການບໍລິການ: ສ້າງບັນຊີຂອງທ່ານ, ສົ່ງຂໍ້ຄວາມຂອງທ່ານ, ເຊື່ອມຕໍ່ການໂທຂອງທ່ານ, ຊິງອຸປະກອນທີ່ເຊື່ອມຕໍ່ ແລະ ສະແດງໃຫ້ເຫັນວ່າຜູ້ຕິດຕໍ່ຄົນໃດໃຊ້ Waow.",
  // en: To keep people safe: confirm accounts are real, detect spam, scams and impersonation, review reports, enforce our Terms and Community Guidelines, and protect users, especially children.
  "legal.privacy.11.1": "ເພື່ອຮັກສາຄວາມປອດໄພຂອງຜູ້ຄົນ: ຢືນຢັນວ່າບັນຊີເປັນຂອງຈິງ, ກວດຫາສະແປມ, ການສໍ້ໂກງ ແລະ ການແອບອ້າງ, ກວດສອບລາຍງານ, ບັງຄັບໃຊ້ເງື່ອນໄຂ ແລະ ຫຼັກການຊຸມຊົນຂອງພວກເຮົາ ພ້ອມທັງປົກປ້ອງຜູ້ໃຊ້ ໂດຍສະເພາະເດັກ.",
  // en: To keep the service working: measure reliability, diagnose faults, and improve performance and accessibility.
  "legal.privacy.11.2": "ເພື່ອໃຫ້ການບໍລິການເຮັດວຽກໄດ້: ວັດແທກຄວາມໜ້າເຊື່ອຖື, ວິນິດໄສຂໍ້ຜິດພາດ ແລະ ປັບປຸງປະສິດທິພາບ ແລະ ການເຂົ້າເຖິງ.",
  // en: To answer you: respond to support, privacy, safety and legal requests.
  "legal.privacy.11.3": "ເພື່ອຕອບທ່ານ: ຕອບສະໜອງຄຳຮ້ອງດ້ານການຊ່ວຍເຫຼືອ, ຄວາມເປັນສ່ວນຕົວ, ຄວາມປອດໄພ ແລະ ກົດໝາຍ.",
  // en: To meet legal obligations under the law of the Lao PDR.
  "legal.privacy.11.4": "ເພື່ອປະຕິບັດຕາມພັນທະທາງກົດໝາຍພາຍໃຕ້ກົດໝາຍຂອງ ສປປ ລາວ.",
  // en: We do not sell your personal information. We do not use the content of your personal chats to target advertising.
  "legal.privacy.12": "ພວກເຮົາບໍ່ຂາຍຂໍ້ມູນສ່ວນຕົວຂອງທ່ານ. ພວກເຮົາບໍ່ໃຊ້ເນື້ອຫາການສົນທະນາສ່ວນຕົວຂອງທ່ານເພື່ອກຳນົດເປົ້າໝາຍການໂຄສະນາ.",
  // en: Message and call security
  "legal.privacy.13": "ຄວາມປອດໄພຂອງຂໍ້ຄວາມ ແລະ ການໂທ",
  // en: Waow protects your communications with encryption while they travel between your device and our servers, and while they are stored on our servers. Access to systems holding user data is restricted to a small number of authorised staff and is logged.
  "legal.privacy.14": "Waow ປົກປ້ອງການສື່ສານຂອງທ່ານດ້ວຍການເຂົ້າລະຫັດ ໃນຂະນະທີ່ມັນເດີນທາງລະຫວ່າງອຸປະກອນຂອງທ່ານກັບເຊີບເວີຂອງພວກເຮົາ ແລະ ໃນຂະນະທີ່ມັນຖືກຈັດເກັບຢູ່ໃນເຊີບເວີຂອງພວກເຮົາ. ການເຂົ້າເຖິງລະບົບທີ່ເກັບຂໍ້ມູນຜູ້ໃຊ້ຖືກຈຳກັດໄວ້ສະເພາະພະນັກງານທີ່ໄດ້ຮັບອະນຸຍາດຈຳນວນໜ້ອຍ ແລະ ມີການບັນທຶກໄວ້.",
  // en: Inside the app you can open the encryption information screen for any conversation and compare a security code with the other person to confirm you are talking to who you expect.
  "legal.privacy.15": "ພາຍໃນແອັບ ທ່ານສາມາດເປີດໜ້າຂໍ້ມູນການເຂົ້າລະຫັດຂອງການສົນທະນາໃດກໍໄດ້ ແລະ ປຽບທຽບລະຫັດຄວາມປອດໄພກັບອີກຝ່າຍ ເພື່ອຢືນຢັນວ່າທ່ານກຳລັງສົນທະນາກັບຄົນທີ່ທ່ານຄາດຫວັງ.",
  // en: Waow also offers protections you control: app lock using your device's Face ID or fingerprint, locked conversations that require biometric approval to open, hidden chat folders, discreet notification previews, and screenshot protection on profile screens.
  "legal.privacy.16": "Waow ຍັງມີການປົກປ້ອງທີ່ທ່ານຄວບຄຸມເອງ: ການລັອກແອັບດ້ວຍ Face ID ຫຼື ລາຍນິ້ວມືຂອງອຸປະກອນ, ການສົນທະນາທີ່ລັອກໄວ້ເຊິ່ງຕ້ອງໃຊ້ຂໍ້ມູນຊີວະມິຕິເພື່ອເປີດ, ໂຟນເດີແຊັດທີ່ເຊື່ອງໄວ້, ຕົວຢ່າງການແຈ້ງເຕືອນທີ່ລະມັດລະວັງ ແລະ ການປ້ອງກັນການຖ່າຍພາບໜ້າຈໍໃນໜ້າໂປຣໄຟລ໌.",
  // en: App lock uses your device's own biometric system. Waow never receives or stores your fingerprint or face data — your device only tells the app whether the check succeeded.
  "legal.privacy.17": "ການລັອກແອັບໃຊ້ລະບົບຊີວະມິຕິຂອງອຸປະກອນທ່ານເອງ. Waow ບໍ່ເຄີຍໄດ້ຮັບ ຫຼື ຈັດເກັບຂໍ້ມູນລາຍນິ້ວມື ຫຼື ໃບໜ້າຂອງທ່ານ — ອຸປະກອນຂອງທ່ານພຽງແຕ່ບອກແອັບວ່າການກວດສອບສຳເລັດ ຫຼື ບໍ່.",
  // en: Who we share information with
  "legal.privacy.18": "ພວກເຮົາແບ່ງປັນຂໍ້ມູນກັບໃຜ",
  // en: The people you choose. Your messages go to your chosen recipients. Your profile details are visible according to your privacy settings.
  "legal.privacy.19.0": "ຄົນທີ່ທ່ານເລືອກ. ຂໍ້ຄວາມຂອງທ່ານໄປຫາຜູ້ຮັບທີ່ທ່ານເລືອກ. ລາຍລະອຽດໂປຣໄຟລ໌ຂອງທ່ານເບິ່ງເຫັນໄດ້ຕາມການຕັ້ງຄ່າຄວາມເປັນສ່ວນຕົວຂອງທ່ານ.",
  // en: Companies that provide services to us, and only for that purpose: cloud hosting and infrastructure, SMS delivery for verification codes, push notification delivery (Apple and Google), translation and AI processing, and crash and performance reporting.
  "legal.privacy.19.1": "ບໍລິສັດທີ່ໃຫ້ບໍລິການແກ່ພວກເຮົາ ແລະ ເພື່ອຈຸດປະສົງນັ້ນເທົ່ານັ້ນ: ການໂຮສຄລາວ ແລະ ພື້ນຖານໂຄງລ່າງ, ການສົ່ງ SMS ສຳລັບລະຫັດຢືນຢັນ, ການສົ່ງການແຈ້ງເຕືອນ (Apple ແລະ Google), ການປະມວນຜົນການແປ ແລະ AI ພ້ອມທັງການລາຍງານການລົ້ມ ແລະ ປະສິດທິພາບ.",
  // en: Authorities, where we are required to act by a valid legal request under Lao law, or where there is an urgent risk of serious harm to a person. Our Law Enforcement Request Policy explains how we handle these.
  "legal.privacy.19.2": "ອົງການລັດ ໃນກໍລະນີທີ່ພວກເຮົາຕ້ອງດຳເນີນການຕາມການຮ້ອງຂໍທາງກົດໝາຍທີ່ຖືກຕ້ອງພາຍໃຕ້ກົດໝາຍລາວ ຫຼື ບ່ອນທີ່ມີຄວາມສ່ຽງຮີບດ່ວນຕໍ່ອັນຕະລາຍຮ້າຍແຮງຕໍ່ບຸກຄົນ. ນະໂຍບາຍການຮ້ອງຂໍຈາກເຈົ້າໜ້າທີ່ຂອງພວກເຮົາອະທິບາຍວິທີທີ່ພວກເຮົາຈັດການເລື່ອງເຫຼົ່ານີ້.",
  // en: A successor company, if Waow is transferred as part of a lawful business transaction. The protections in this policy continue to apply.
  "legal.privacy.19.3": "ບໍລິສັດຜູ້ສືບທອດ ຖ້າ Waow ຖືກໂອນເປັນສ່ວນໜຶ່ງຂອງທຸລະກຳທາງທຸລະກິດທີ່ຖືກຕ້ອງຕາມກົດໝາຍ. ການປົກປ້ອງໃນນະໂຍບາຍນີ້ຈະຍັງຄົງນຳໃຊ້ຕໍ່ໄປ.",
  // en: Waow's cooperation agreement with the National Internet Center under the Ministry of Technology and Communications covers the development and management of the platform and Laos's digital ecosystem. It does not give any party open access to user information, and it does not remove your rights under Lao law.
  "legal.privacy.20": "ຂໍ້ຕົກລົງຮ່ວມມືຂອງ Waow ກັບສູນອິນເຕີເນັດແຫ່ງຊາດ ພາຍໃຕ້ກະຊວງເຕັກໂນໂລຊີ ແລະ ການສື່ສານ ຄຸ້ມຄອງການພັດທະນາ ແລະ ການຄຸ້ມຄອງແພລດຟອມ ແລະ ລະບົບນິເວດດິຈິຕອນຂອງລາວ. ມັນບໍ່ໄດ້ໃຫ້ຝ່າຍໃດເຂົ້າເຖິງຂໍ້ມູນຜູ້ໃຊ້ໄດ້ຢ່າງເປີດກວ້າງ ແລະ ບໍ່ໄດ້ຖອນສິດຂອງທ່ານພາຍໃຕ້ກົດໝາຍລາວ.",
  // en: Where your information is stored
  "legal.privacy.21": "ຂໍ້ມູນຂອງທ່ານຖືກຈັດເກັບຢູ່ໃສ",
  // en: Waow's servers are operated for us by TODO(hosting provider), with data stored in TODO(country/region). Some information is necessarily handled outside Laos by the international services Waow depends on — Apple and Google for push notifications and app distribution, our SMS provider for verification codes, and our translation and AI providers. Where information leaves Laos, we transfer it under the conditions required by the Law on Electronic Data Protection of the Lao PDR.
  "legal.privacy.22": "ເຊີບເວີຂອງ Waow ດຳເນີນງານໃຫ້ພວກເຮົາໂດຍ TODO(hosting provider) ໂດຍຂໍ້ມູນຖືກຈັດເກັບຢູ່ TODO(country/region). ຂໍ້ມູນບາງສ່ວນຈຳເປັນຕ້ອງຖືກຈັດການຢູ່ນອກລາວ ໂດຍບໍລິການສາກົນທີ່ Waow ອາໄສ — Apple ແລະ Google ສຳລັບການແຈ້ງເຕືອນ ແລະ ການແຈກຢາຍແອັບ, ຜູ້ໃຫ້ບໍລິການ SMS ຂອງພວກເຮົາສຳລັບລະຫັດຢືນຢັນ ແລະ ຜູ້ໃຫ້ບໍລິການແປ ແລະ AI ຂອງພວກເຮົາ. ບ່ອນທີ່ຂໍ້ມູນອອກຈາກລາວ ພວກເຮົາໂອນມັນພາຍໃຕ້ເງື່ອນໄຂທີ່ກົດໝາຍວ່າດ້ວຍການປົກປ້ອງຂໍ້ມູນເອເລັກໂຕຣນິກຂອງ ສປປ ລາວ ກຳນົດ.",
  // en: Waow's long-term direction is to move core platform infrastructure into Laos. We will update this page when that happens rather than describe it in advance.
  "legal.privacy.23": "ທິດທາງໄລຍະຍາວຂອງ Waow ແມ່ນການຍ້າຍພື້ນຖານໂຄງລ່າງຫຼັກຂອງແພລດຟອມເຂົ້າມາໃນລາວ. ພວກເຮົາຈະອັບເດດໜ້ານີ້ເມື່ອສິ່ງນັ້ນເກີດຂຶ້ນ ແທນທີ່ຈະອະທິບາຍລ່ວງໜ້າ.",
  // en: How long we keep information
  "legal.privacy.24": "ພວກເຮົາເກັບຂໍ້ມູນໄວ້ດົນປານໃດ",
  // en: Information
  "legal.privacy.25.h0": "ຂໍ້ມູນ",
  // en: How long we keep it
  "legal.privacy.25.h1": "ພວກເຮົາເກັບໄວ້ດົນປານໃດ",
  // en: Your account and profile
  "legal.privacy.25.r0a": "ບັນຊີ ແລະ ໂປຣໄຟລ໌ຂອງທ່ານ",
  // en: For as long as your account is active. Deleted when you delete your account.
  "legal.privacy.25.r0b": "ຕາບໃດທີ່ບັນຊີຂອງທ່ານຍັງໃຊ້ງານຢູ່. ຖືກລຶບເມື່ອທ່ານລຶບບັນຊີ.",
  // en: Messages waiting to be delivered
  "legal.privacy.25.r1a": "ຂໍ້ຄວາມທີ່ລໍຖ້າສົ່ງ",
  // en: Until delivered, and no longer than 30 days if the recipient never comes online.
  "legal.privacy.25.r1b": "ຈົນກວ່າຈະສົ່ງເຖິງ ແລະ ບໍ່ເກີນ 30 ວັນ ຖ້າຜູ້ຮັບບໍ່ເຄີຍອອນລາຍ.",
  // en: Messages and media stored on our servers
  "legal.privacy.25.r2a": "ຂໍ້ຄວາມ ແລະ ສື່ທີ່ຈັດເກັບຢູ່ໃນເຊີບເວີຂອງພວກເຮົາ",
  // en: TODO(confirmed storage model)
  "legal.privacy.25.r2b": "TODO(confirmed storage model)",
  // en: Verification code (OTP) records
  "legal.privacy.25.r3a": "ບັນທຶກລະຫັດຢືນຢັນ (OTP)",
  // en: 90 days, to protect accounts and prevent fraud.
  "legal.privacy.25.r3b": "90 ວັນ ເພື່ອປົກປ້ອງບັນຊີ ແລະ ປ້ອງກັນການສໍ້ໂກງ.",
  // en: Call records (who, when, how long)
  "legal.privacy.25.r4a": "ບັນທຶກການໂທ (ໃຜ, ເມື່ອໃດ, ດົນປານໃດ)",
  // en: 12 months. We do not keep call content.
  "legal.privacy.25.r4b": "12 ເດືອນ. ພວກເຮົາບໍ່ເກັບເນື້ອຫາການໂທ.",
  // en: Crash and diagnostic data
  "legal.privacy.25.r5a": "ຂໍ້ມູນການລົ້ມ ແລະ ວິນິດໄສ",
  // en: 90 days.
  "legal.privacy.25.r5b": "90 ວັນ.",
  // en: Support conversations
  "legal.privacy.25.r6a": "ການສົນທະນາກັບຝ່າຍຊ່ວຍເຫຼືອ",
  // en: 24 months.
  "legal.privacy.25.r6b": "24 ເດືອນ.",
  // en: Reports, appeals and enforcement records
  "legal.privacy.25.r7a": "ລາຍງານ, ການອຸທອນ ແລະ ບັນທຶກການບັງຄັບໃຊ້",
  // en: As long as needed to keep people safe and meet legal obligations, including after an account is deleted.
  "legal.privacy.25.r7b": "ດົນເທົ່າທີ່ຈຳເປັນເພື່ອຮັກສາຄວາມປອດໄພຂອງຜູ້ຄົນ ແລະ ປະຕິບັດຕາມພັນທະທາງກົດໝາຍ ລວມທັງຫຼັງຈາກບັນຊີຖືກລຶບແລ້ວ.",
  // en: Backups
  "legal.privacy.25.r8a": "ໄຟລ໌ສຳຮອງ",
  // en: Deleted through the normal backup rotation within 35 days of account deletion.
  "legal.privacy.25.r8b": "ຖືກລຶບຜ່ານການໝູນວຽນສຳຮອງປົກກະຕິ ພາຍໃນ 35 ວັນນັບຈາກການລຶບບັນຊີ.",
  // en: Your rights and choices
  "legal.privacy.26": "ສິດ ແລະ ທາງເລືອກຂອງທ່ານ",
  // en: See and change your profile at any time in the app.
  "legal.privacy.27.0": "ເບິ່ງ ແລະ ປ່ຽນໂປຣໄຟລ໌ຂອງທ່ານໄດ້ທຸກເວລາໃນແອັບ.",
  // en: Control who can see your photo, status, last seen and read receipts, and who can add you to groups.
  "legal.privacy.27.1": "ຄວບຄຸມວ່າໃຜເຫັນຮູບ, ສະຖານະ, ເວລາອອນລາຍລ່າສຸດ ແລະ ໃບຮັບການອ່ານຂອງທ່ານ ແລະ ໃຜສາມາດເພີ່ມທ່ານເຂົ້າກຸ່ມໄດ້.",
  // en: Block anyone, and report any message, user, group or official account.
  "legal.privacy.27.2": "ບລັອກຜູ້ໃດກໍໄດ້ ແລະ ລາຍງານຂໍ້ຄວາມ, ຜູ້ໃຊ້, ກຸ່ມ ຫຼື ບັນຊີທາງການໃດກໍໄດ້.",
  // en: Withdraw permission for contacts, camera, microphone, location or notifications in your device settings at any time.
  "legal.privacy.27.3": "ຖອນສິດການເຂົ້າເຖິງລາຍຊື່ຕິດຕໍ່, ກ້ອງ, ໄມໂຄຣໂຟນ, ສະຖານທີ່ ຫຼື ການແຈ້ງເຕືອນ ໃນການຕັ້ງຄ່າອຸປະກອນຂອງທ່ານໄດ້ທຸກເວລາ.",
  // en: Ask us to correct information about you, or ask for a copy of it, by writing to privacy@waow.app.
  "legal.privacy.27.4": "ຂໍໃຫ້ພວກເຮົາແກ້ໄຂຂໍ້ມູນກ່ຽວກັບທ່ານ ຫຼື ຂໍສຳເນົາຂອງມັນ ໂດຍຂຽນຫາ privacy@waow.app.",
  // en: Delete your account at any time.
  "legal.privacy.27.5": "ລຶບບັນຊີຂອງທ່ານໄດ້ທຸກເວລາ.",
  // en: Deleting your account
  "legal.privacy.28": "ການລຶບບັນຊີຂອງທ່ານ",
  // en: In the app: Settings → Account → Delete Account. From a browser, without installing the app: waow.app/delete-account.
  "legal.privacy.29": "ໃນແອັບ: ການຕັ້ງຄ່າ → ບັນຊີ → ລຶບບັນຊີ. ຈາກບຣາວເຊີ ໂດຍບໍ່ຕ້ອງຕິດຕັ້ງແອັບ: waow.app/delete-account.",
  // en: When you delete your account, your profile is removed, you are removed from your groups, and the data we hold about you is deleted on the schedule above. Messages you already sent remain on the devices of the people who received them, because those copies belong to them. We keep a limited record where we must, for safety, fraud prevention or legal reasons.
  "legal.privacy.30": "ເມື່ອທ່ານລຶບບັນຊີ ໂປຣໄຟລ໌ຂອງທ່ານຈະຖືກລຶບອອກ, ທ່ານຈະຖືກລຶບອອກຈາກກຸ່ມຂອງທ່ານ ແລະ ຂໍ້ມູນທີ່ພວກເຮົາເກັບກ່ຽວກັບທ່ານຈະຖືກລຶບຕາມກຳນົດເວລາຂ້າງເທິງ. ຂໍ້ຄວາມທີ່ທ່ານສົ່ງໄປແລ້ວຈະຍັງຄົງຢູ່ໃນອຸປະກອນຂອງຜູ້ທີ່ໄດ້ຮັບ ເພາະສຳເນົາເຫຼົ່ານັ້ນເປັນຂອງເຂົາ. ພວກເຮົາເກັບບັນທຶກໄວ້ຈຳກັດເມື່ອຈຳເປັນ ເພື່ອຄວາມປອດໄພ, ການປ້ອງກັນການສໍ້ໂກງ ຫຼື ເຫດຜົນທາງກົດໝາຍ.",
  // en: Age
  "legal.privacy.31": "ອາຍຸ",
  // en: Waow is for people aged 16 and over. If you are under 18, you confirm that a parent or legal guardian permits you to use Waow. If we learn that an account belongs to someone under 16, we close it. If you believe someone under 16 is using Waow, tell us at safety@waow.app.
  "legal.privacy.32": "Waow ແມ່ນສຳລັບຜູ້ທີ່ມີອາຍຸ 16 ປີຂຶ້ນໄປ. ຖ້າທ່ານມີອາຍຸຕ່ຳກວ່າ 18 ປີ ທ່ານຢືນຢັນວ່າພໍ່ແມ່ ຫຼື ຜູ້ປົກຄອງຕາມກົດໝາຍອະນຸຍາດໃຫ້ທ່ານໃຊ້ Waow. ຖ້າພວກເຮົາຮູ້ວ່າບັນຊີໃດເປັນຂອງຜູ້ທີ່ມີອາຍຸຕ່ຳກວ່າ 16 ປີ ພວກເຮົາຈະປິດມັນ. ຖ້າທ່ານເຊື່ອວ່າມີຜູ້ທີ່ມີອາຍຸຕ່ຳກວ່າ 16 ປີໃຊ້ Waow ກະລຸນາແຈ້ງພວກເຮົາທີ່ safety@waow.app.",
  // en: Changes to this policy
  "legal.privacy.33": "ການປ່ຽນແປງນະໂຍບາຍນີ້",
  // en: We will update this page as Waow changes. If a change materially affects you, we will tell you in the app before it takes effect. The date at the top of this page shows the current version.
  "legal.privacy.34": "ພວກເຮົາຈະອັບເດດໜ້ານີ້ເມື່ອ Waow ປ່ຽນແປງ. ຖ້າການປ່ຽນແປງມີຜົນກະທົບຕໍ່ທ່ານຢ່າງມີນັຍສຳຄັນ ພວກເຮົາຈະແຈ້ງໃຫ້ທ່ານຮູ້ໃນແອັບກ່ອນທີ່ມັນຈະມີຜົນ. ວັນທີຢູ່ດ້ານເທິງຂອງໜ້ານີ້ສະແດງລຸ້ນປັດຈຸບັນ.",
  // en: Contact
  "legal.privacy.35": "ຕິດຕໍ່",
  // en: Dynamic Solution Sole Co., Ltd. · Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR · privacy@waow.app · support@waow.app
  "legal.privacy.36": "Dynamic Solution Sole Co., Ltd. · ບ້ານດົງສັງຫິນ, ເມືອງໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ · privacy@waow.app · support@waow.app",

  // ── terms ──
  // en: Terms of Service
  "legal.terms.title": "ເງື່ອນໄຂການໃຫ້ບໍລິການ",
  // en: 1. Your agreement with us
  "legal.terms.0": "1. ຂໍ້ຕົກລົງຂອງທ່ານກັບພວກເຮົາ",
  // en: These Terms are an agreement between you and Dynamic Solution Sole Co., Ltd., Vientiane, Lao PDR. By creating a Waow account or using Waow, you accept these Terms, our Community Guidelines and our Privacy Policy. If you do not accept them, do not use Waow.
  "legal.terms.1": "ເງື່ອນໄຂເຫຼົ່ານີ້ເປັນຂໍ້ຕົກລົງລະຫວ່າງທ່ານ ກັບ Dynamic Solution Sole Co., Ltd., ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ. ໂດຍການສ້າງບັນຊີ Waow ຫຼື ການໃຊ້ Waow ທ່ານຍອມຮັບເງື່ອນໄຂເຫຼົ່ານີ້, ຫຼັກການຊຸມຊົນ ແລະ ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງພວກເຮົາ. ຖ້າທ່ານບໍ່ຍອມຮັບ ກະລຸນາຢ່າໃຊ້ Waow.",
  // en: 2. Who can use Waow
  "legal.terms.2": "2. ໃຜສາມາດໃຊ້ Waow ໄດ້",
  // en: You must be at least 16 years old. If you are under 18, you confirm that a parent or legal guardian permits you to use Waow. You must register with a phone number you are entitled to use, and give accurate information. You must not use Waow if we have previously removed your account, or if your use would break the law.
  "legal.terms.3": "ທ່ານຕ້ອງມີອາຍຸຢ່າງໜ້ອຍ 16 ປີ. ຖ້າທ່ານມີອາຍຸຕ່ຳກວ່າ 18 ປີ ທ່ານຢືນຢັນວ່າພໍ່ແມ່ ຫຼື ຜູ້ປົກຄອງຕາມກົດໝາຍອະນຸຍາດໃຫ້ທ່ານໃຊ້ Waow. ທ່ານຕ້ອງລົງທະບຽນດ້ວຍເບີໂທລະສັບທີ່ທ່ານມີສິດໃຊ້ ແລະ ໃຫ້ຂໍ້ມູນທີ່ຖືກຕ້ອງ. ທ່ານຕ້ອງບໍ່ໃຊ້ Waow ຖ້າພວກເຮົາເຄີຍລຶບບັນຊີຂອງທ່ານມາກ່ອນ ຫຼື ຖ້າການໃຊ້ຂອງທ່ານຈະລະເມີດກົດໝາຍ.",
  // en: 3. Your account
  "legal.terms.4": "3. ບັນຊີຂອງທ່ານ",
  // en: You are responsible for your device, your verification codes and your account. Do not sell, rent or transfer your account. Tell us at support@waow.app if you think someone else has gained access to it. We recommend turning on app lock.
  "legal.terms.5": "ທ່ານຮັບຜິດຊອບຕໍ່ອຸປະກອນ, ລະຫັດຢືນຢັນ ແລະ ບັນຊີຂອງທ່ານ. ຢ່າຂາຍ, ໃຫ້ເຊົ່າ ຫຼື ໂອນບັນຊີຂອງທ່ານ. ກະລຸນາແຈ້ງພວກເຮົາທີ່ support@waow.app ຖ້າທ່ານຄິດວ່າມີຄົນອື່ນເຂົ້າເຖິງມັນໄດ້. ພວກເຮົາແນະນຳໃຫ້ເປີດການລັອກແອັບ.",
  // en: 4. How you may use Waow
  "legal.terms.6": "4. ທ່ານໃຊ້ Waow ໄດ້ແນວໃດ",
  // en: Use Waow lawfully and treat other people decently. You must not use Waow to:
  "legal.terms.7": "ໃຊ້ Waow ຢ່າງຖືກຕ້ອງຕາມກົດໝາຍ ແລະ ປະຕິບັດຕໍ່ຜູ້ອື່ນຢ່າງເໝາະສົມ. ທ່ານຕ້ອງບໍ່ໃຊ້ Waow ເພື່ອ:",
  // en: break the law, or help anyone else break it;
  "legal.terms.8.0": "ລະເມີດກົດໝາຍ ຫຼື ຊ່ວຍໃຫ້ຜູ້ອື່ນລະເມີດກົດໝາຍ;",
  // en: harm, exploit, sexualise or endanger a child in any way;
  "legal.terms.8.1": "ທຳຮ້າຍ, ຂູດຮີດ, ເຮັດໃຫ້ເປັນວັດຖຸທາງເພດ ຫຼື ເຮັດໃຫ້ເດັກຕົກຢູ່ໃນອັນຕະລາຍໃນທຸກຮູບແບບ;",
  // en: threaten, harass, bully or defame anyone, or promote violence or terrorism;
  "legal.terms.8.2": "ຂົ່ມຂູ່, ລ່ວງລະເມີດ, ຂົ່ມເຫັງ ຫຼື ໝິ່ນປະໝາດຜູ້ໃດ ຫຼື ສົ່ງເສີມຄວາມຮຸນແຮງ ຫຼື ການກໍ່ການຮ້າຍ;",
  // en: send spam or bulk unsolicited messages, run scams or phishing, or distribute malware;
  "legal.terms.8.3": "ສົ່ງສະແປມ ຫຼື ຂໍ້ຄວາມຈຳນວນຫຼາຍທີ່ບໍ່ໄດ້ຮ້ອງຂໍ, ດຳເນີນການສໍ້ໂກງ ຫຼື ຟິດຊິງ ຫຼື ເຜີຍແຜ່ມັລແວ;",
  // en: impersonate another person, a bank, a government body or any organisation;
  "legal.terms.8.4": "ແອບອ້າງເປັນບຸກຄົນອື່ນ, ທະນາຄານ, ອົງການລັດ ຫຼື ອົງກອນໃດກໍຕາມ;",
  // en: infringe someone's privacy rights or intellectual property;
  "legal.terms.8.5": "ລະເມີດສິດຄວາມເປັນສ່ວນຕົວ ຫຼື ຊັບສິນທາງປັນຍາຂອງຜູ້ອື່ນ;",
  // en: attack, probe, scrape or reverse-engineer the service, or access it through unauthorised automation;
  "legal.terms.8.6": "ໂຈມຕີ, ສືບຄົ້ນ, ດຶງຂໍ້ມູນ ຫຼື ວິສະວະກຳຍ້ອນກັບການບໍລິການ ຫຼື ເຂົ້າເຖິງມັນຜ່ານລະບົບອັດຕະໂນມັດທີ່ບໍ່ໄດ້ຮັບອະນຸຍາດ;",
  // en: break our Community Guidelines.
  "legal.terms.8.7": "ລະເມີດຫຼັກການຊຸມຊົນຂອງພວກເຮົາ.",
  // en: 5. Your content
  "legal.terms.9": "5. ເນື້ອຫາຂອງທ່ານ",
  // en: What you create stays yours. You give us only the permission we need to run the service: to store your content, deliver it to the people you choose, display it to them, and review it if it is reported to us. You are responsible for having the right to share what you share.
  "legal.terms.10": "ສິ່ງທີ່ທ່ານສ້າງຍັງເປັນຂອງທ່ານ. ທ່ານໃຫ້ພວກເຮົາພຽງສິດທີ່ຈຳເປັນໃນການດຳເນີນການບໍລິການ: ເພື່ອຈັດເກັບເນື້ອຫາຂອງທ່ານ, ສົ່ງມັນໄປຫາຄົນທີ່ທ່ານເລືອກ, ສະແດງມັນໃຫ້ເຂົາເຫັນ ແລະ ກວດສອບມັນຖ້າມີການລາຍງານມາຫາພວກເຮົາ. ທ່ານຮັບຜິດຊອບໃນການມີສິດແບ່ງປັນສິ່ງທີ່ທ່ານແບ່ງປັນ.",
  // en: 6. Groups and public spaces
  "legal.terms.11": "6. ກຸ່ມ ແລະ ພື້ນທີ່ສາທາລະນະ",
  // en: If you administer a group, use those controls responsibly. Content posted in public spaces, including official account channels, is subject to our Community Guidelines and may be moderated.
  "legal.terms.12": "ຖ້າທ່ານເປັນຜູ້ດູແລກຸ່ມ ໃຫ້ໃຊ້ການຄວບຄຸມເຫຼົ່ານັ້ນຢ່າງມີຄວາມຮັບຜິດຊອບ. ເນື້ອຫາທີ່ໂພສໃນພື້ນທີ່ສາທາລະນະ ລວມທັງຊ່ອງທາງບັນຊີທາງການ ຢູ່ພາຍໃຕ້ຫຼັກການຊຸມຊົນຂອງພວກເຮົາ ແລະ ອາດຖືກກວດສອບ.",
  // en: 7. Official accounts
  "legal.terms.13": "7. ບັນຊີທາງການ",
  // en: Organisations may apply for a verified official account. Verification requires evidence of the organisation's identity and of the applicant's authority to act for it. A verification badge confirms that we reviewed that relationship at the time of approval. It is not our endorsement of anything the account later says. We may suspend or remove verification if an account misleads people, breaks these Terms, or is no longer controlled by the verified organisation.
  "legal.terms.14": "ອົງກອນສາມາດສະໝັກຂໍບັນຊີທາງການທີ່ຢືນຢັນແລ້ວ. ການຢືນຢັນຕ້ອງມີຫຼັກຖານຕົວຕົນຂອງອົງກອນ ແລະ ສິດອຳນາດຂອງຜູ້ສະໝັກໃນການດຳເນີນການແທນ. ປ້າຍຢືນຢັນຢືນຢັນວ່າພວກເຮົາໄດ້ກວດສອບຄວາມສຳພັນນັ້ນໃນເວລາທີ່ອະນຸມັດ. ມັນບໍ່ແມ່ນການຮັບຮອງສິ່ງທີ່ບັນຊີນັ້ນເວົ້າໃນພາຍຫຼັງ. ພວກເຮົາອາດໂຈະ ຫຼື ຖອນການຢືນຢັນ ຖ້າບັນຊີເຮັດໃຫ້ຄົນເຂົ້າໃຈຜິດ, ລະເມີດເງື່ອນໄຂເຫຼົ່ານີ້ ຫຼື ບໍ່ໄດ້ຖືກຄວບຄຸມໂດຍອົງກອນທີ່ຢືນຢັນແລ້ວອີກຕໍ່ໄປ.",
  // en: 8. AI and translation
  "legal.terms.15": "8. AI ແລະ ການແປພາສາ",
  // en: Waow includes translation and an AI assistant. These produce automated results, which can be wrong or incomplete. They are not medical, legal, financial or emergency advice, and you should check anything important independently. These features run only when you use them on content you have selected.
  "legal.terms.16": "Waow ມີການແປພາສາ ແລະ ຜູ້ຊ່ວຍ AI. ພວກມັນສ້າງຜົນລັບອັດຕະໂນມັດ ເຊິ່ງອາດຜິດ ຫຼື ບໍ່ຄົບຖ້ວນ. ພວກມັນບໍ່ແມ່ນຄຳແນະນຳທາງການແພດ, ກົດໝາຍ, ການເງິນ ຫຼື ສຸກເສີນ ແລະ ທ່ານຄວນກວດສອບສິ່ງທີ່ສຳຄັນດ້ວຍຕົນເອງ. ຄຸນສົມບັດເຫຼົ່ານີ້ເຮັດວຽກສະເພາະເມື່ອທ່ານໃຊ້ມັນກັບເນື້ອຫາທີ່ທ່ານເລືອກເທົ່ານັ້ນ.",
  // en: 9. Availability
  "legal.terms.17": "9. ຄວາມພ້ອມໃຊ້ງານ",
  // en: Waow is provided as available. We may add, change or remove features, and may interrupt the service for maintenance, security or legal reasons. We will give notice of significant changes where we reasonably can.
  "legal.terms.18": "Waow ຖືກໃຫ້ບໍລິການຕາມສະພາບທີ່ມີຢູ່. ພວກເຮົາອາດເພີ່ມ, ປ່ຽນແປງ ຫຼື ລຶບຄຸນສົມບັດ ແລະ ອາດຢຸດການບໍລິການເພື່ອການບຳລຸງຮັກສາ, ຄວາມປອດໄພ ຫຼື ເຫດຜົນທາງກົດໝາຍ. ພວກເຮົາຈະແຈ້ງການປ່ຽນແປງທີ່ສຳຄັນເທົ່າທີ່ພວກເຮົາເຮັດໄດ້ຢ່າງສົມເຫດສົມຜົນ.",
  // en: 10. Enforcement and appeals
  "legal.terms.19": "10. ການບັງຄັບໃຊ້ ແລະ ການອຸທອນ",
  // en: If you break these Terms or our Community Guidelines, or if it is necessary to protect people, we may remove content, limit what your account can do, suspend it, or close it permanently. Serious cases — in particular anything involving harm to a child — may be acted on immediately and referred to the competent authorities.
  "legal.terms.20": "ຖ້າທ່ານລະເມີດເງື່ອນໄຂເຫຼົ່ານີ້ ຫຼື ຫຼັກການຊຸມຊົນຂອງພວກເຮົາ ຫຼື ຖ້າຈຳເປັນເພື່ອປົກປ້ອງຜູ້ຄົນ ພວກເຮົາອາດລຶບເນື້ອຫາ, ຈຳກັດສິ່ງທີ່ບັນຊີຂອງທ່ານເຮັດໄດ້, ໂຈະມັນ ຫຼື ປິດມັນຢ່າງຖາວອນ. ກໍລະນີຮ້າຍແຮງ — ໂດຍສະເພາະສິ່ງທີ່ກ່ຽວຂ້ອງກັບອັນຕະລາຍຕໍ່ເດັກ — ອາດຖືກດຳເນີນການທັນທີ ແລະ ສົ່ງຕໍ່ໄປຫາອົງການທີ່ມີອຳນາດ.",
  // en: We aim to review and remove reported objectionable content, and to remove the user responsible, within 24 hours of a report.
  "legal.terms.21": "ພວກເຮົາມຸ່ງກວດສອບ ແລະ ລຶບເນື້ອຫາທີ່ບໍ່ເໝາະສົມທີ່ຖືກລາຍງານ ພ້ອມທັງລຶບຜູ້ໃຊ້ທີ່ຮັບຜິດຊອບ ພາຍໃນ 24 ຊົ່ວໂມງນັບຈາກການລາຍງານ.",
  // en: If you think we got a decision wrong, write to support@waow.app or safety@waow.app and we will review it.
  "legal.terms.22": "ຖ້າທ່ານຄິດວ່າພວກເຮົາຕັດສິນຜິດ ກະລຸນາຂຽນຫາ support@waow.app ຫຼື safety@waow.app ແລ້ວພວກເຮົາຈະທົບທວນຄືນ.",
  // en: 11. Ending your use of Waow
  "legal.terms.23": "11. ການສິ້ນສຸດການໃຊ້ Waow ຂອງທ່ານ",
  // en: You may stop using Waow and delete your account at any time, in the app or at waow.app/delete-account.
  "legal.terms.24": "ທ່ານສາມາດຢຸດໃຊ້ Waow ແລະ ລຶບບັນຊີຂອງທ່ານໄດ້ທຸກເວລາ ບໍ່ວ່າຈະໃນແອັບ ຫຼື ທີ່ waow.app/delete-account.",
  // en: 12. Liability
  "legal.terms.25": "12. ຄວາມຮັບຜິດຊອບ",
  // en: To the fullest extent Lao law allows, we are not responsible for content created by users, or for indirect or consequential losses. Nothing in these Terms limits liability that cannot be limited by law.
  "legal.terms.26": "ເທົ່າທີ່ກົດໝາຍລາວອະນຸຍາດຢ່າງເຕັມທີ່ ພວກເຮົາບໍ່ຮັບຜິດຊອບຕໍ່ເນື້ອຫາທີ່ຜູ້ໃຊ້ສ້າງຂຶ້ນ ຫຼື ຕໍ່ຄວາມເສຍຫາຍທາງອ້ອມ ຫຼື ຜົນສືບເນື່ອງ. ບໍ່ມີສິ່ງໃດໃນເງື່ອນໄຂເຫຼົ່ານີ້ທີ່ຈຳກັດຄວາມຮັບຜິດຊອບທີ່ບໍ່ສາມາດຈຳກັດໄດ້ຕາມກົດໝາຍ.",
  // en: 13. Governing law and disputes
  "legal.terms.27": "13. ກົດໝາຍທີ່ໃຊ້ບັງຄັບ ແລະ ຂໍ້ຂັດແຍ່ງ",
  // en: These Terms are governed by the law of the Lao PDR. If there is a dispute, please contact us first — most things are resolved that way. If it cannot be resolved, it may be brought before the competent dispute-resolution body or the courts of the Lao PDR.
  "legal.terms.28": "ເງື່ອນໄຂເຫຼົ່ານີ້ຢູ່ພາຍໃຕ້ກົດໝາຍຂອງ ສປປ ລາວ. ຖ້າມີຂໍ້ຂັດແຍ່ງ ກະລຸນາຕິດຕໍ່ພວກເຮົາກ່ອນ — ສ່ວນຫຼາຍແກ້ໄຂໄດ້ດ້ວຍວິທີນັ້ນ. ຖ້າແກ້ໄຂບໍ່ໄດ້ ມັນອາດຖືກນຳສະເໜີຕໍ່ອົງການແກ້ໄຂຂໍ້ຂັດແຍ່ງທີ່ມີອຳນາດ ຫຼື ສານຂອງ ສປປ ລາວ.",
  // en: 14. Changes to these Terms
  "legal.terms.29": "14. ການປ່ຽນແປງເງື່ອນໄຂເຫຼົ່ານີ້",
  // en: We may update these Terms. If a change materially affects you, we will tell you in the app before it takes effect. Continuing to use Waow after that means you accept the updated Terms.
  "legal.terms.30": "ພວກເຮົາອາດອັບເດດເງື່ອນໄຂເຫຼົ່ານີ້. ຖ້າການປ່ຽນແປງມີຜົນກະທົບຕໍ່ທ່ານຢ່າງມີນັຍສຳຄັນ ພວກເຮົາຈະແຈ້ງໃຫ້ທ່ານຮູ້ໃນແອັບກ່ອນທີ່ມັນຈະມີຜົນ. ການສືບຕໍ່ໃຊ້ Waow ຫຼັງຈາກນັ້ນໝາຍຄວາມວ່າທ່ານຍອມຮັບເງື່ອນໄຂທີ່ອັບເດດແລ້ວ.",
  // en: 15. Contact
  "legal.terms.31": "15. ຕິດຕໍ່",
  // en: Dynamic Solution Sole Co., Ltd. · Dongsanghin Village, Xaythany District, Vientiane Capital, Lao PDR · legal@waow.app
  "legal.terms.32": "Dynamic Solution Sole Co., Ltd. · ບ້ານດົງສັງຫິນ, ເມືອງໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ · legal@waow.app",

  // ── community-guidelines ──
  // en: Community Guidelines
  "legal.community-guidelines.title": "ຫຼັກການຊຸມຊົນ",
  // en: Waow exists so that people can talk freely and safely. We do not routinely read your private conversations. When you report something to us, the reported content and the context needed to understand it are sent to our safety team for review. These rules apply to everything on Waow, and we enforce them.
  "legal.community-guidelines.0": "Waow ມີຢູ່ເພື່ອໃຫ້ຄົນສາມາດສົນທະນາໄດ້ຢ່າງອິດສະຫຼະ ແລະ ປອດໄພ. ພວກເຮົາບໍ່ໄດ້ອ່ານການສົນທະນາສ່ວນຕົວຂອງທ່ານເປັນປົກກະຕິ. ເມື່ອທ່ານລາຍງານສິ່ງໃດມາຫາພວກເຮົາ ເນື້ອຫາທີ່ຖືກລາຍງານ ແລະ ບໍລິບົດທີ່ຈຳເປັນໃນການເຂົ້າໃຈມັນ ຈະຖືກສົ່ງໄປໃຫ້ທີມຄວາມປອດໄພຂອງພວກເຮົາກວດສອບ. ກົດລະບຽບເຫຼົ່ານີ້ນຳໃຊ້ກັບທຸກສິ່ງໃນ Waow ແລະ ພວກເຮົາບັງຄັບໃຊ້ມັນ.",
  // en: Never allowed
  "legal.community-guidelines.1": "ບໍ່ອະນຸຍາດເດັດຂາດ",
  // en: Child sexual abuse or exploitation in any form — including grooming, sextortion, trafficking, and any sexualisation of a person under 18. We remove these accounts immediately and report them to the authorities.
  "legal.community-guidelines.2.0": "ການລ່ວງລະເມີດ ຫຼື ການຂູດຮີດທາງເພດຕໍ່ເດັກໃນທຸກຮູບແບບ — ລວມທັງການລໍ້ລວງ, ການຂົ່ມຂູ່ດ້ວຍພາບທາງເພດ, ການຄ້າມະນຸດ ແລະ ການເຮັດໃຫ້ຜູ້ທີ່ມີອາຍຸຕ່ຳກວ່າ 18 ປີກາຍເປັນວັດຖຸທາງເພດ. ພວກເຮົາລຶບບັນຊີເຫຼົ່ານີ້ທັນທີ ແລະ ລາຍງານໄປຫາອົງການລັດ.",
  // en: Credible threats of violence, terrorism, or incitement to harm people.
  "legal.community-guidelines.2.1": "ການຂົ່ມຂູ່ດ້ວຍຄວາມຮຸນແຮງທີ່ໜ້າເຊື່ອຖື, ການກໍ່ການຮ້າຍ ຫຼື ການຍຸຍົງໃຫ້ທຳຮ້າຍຜູ້ອື່ນ.",
  // en: Human trafficking, and the sale or promotion of illegal drugs, weapons or other illegal goods and services.
  "legal.community-guidelines.2.2": "ການຄ້າມະນຸດ ແລະ ການຂາຍ ຫຼື ສົ່ງເສີມຢາເສບຕິດ, ອາວຸດ ຫຼື ສິນຄ້າ ແລະ ບໍລິການຜິດກົດໝາຍອື່ນໆ.",
  // en: Sharing intimate images of anyone without their consent.
  "legal.community-guidelines.2.3": "ການແບ່ງປັນພາບສ່ວນຕົວຂອງຜູ້ໃດກໍຕາມໂດຍບໍ່ໄດ້ຮັບຄວາມຍິນຍອມ.",
  // en: Fraud, phishing, fake investment schemes, and impersonating banks, government bodies or verified organisations.
  "legal.community-guidelines.2.4": "ການສໍ້ໂກງ, ຟິດຊິງ, ແຜນການລົງທຶນປອມ ແລະ ການແອບອ້າງເປັນທະນາຄານ, ອົງການລັດ ຫຼື ອົງກອນທີ່ຢືນຢັນແລ້ວ.",
  // en: Not allowed
  "legal.community-guidelines.3": "ບໍ່ອະນຸຍາດ",
  // en: Harassment, bullying, and targeted hate based on ethnicity, religion, nationality, gender or similar characteristics.
  "legal.community-guidelines.4.0": "ການລ່ວງລະເມີດ, ການຂົ່ມເຫັງ ແລະ ຄວາມກຽດຊັງທີ່ພຸ່ງເປົ້າ ໂດຍອີງໃສ່ຊົນເຜົ່າ, ສາສະໜາ, ສັນຊາດ, ເພດ ຫຼື ລັກສະນະທີ່ຄ້າຍຄືກັນ.",
  // en: Spam: bulk unsolicited messages, automated messaging tools, and deceptive links.
  "legal.community-guidelines.4.1": "ສະແປມ: ຂໍ້ຄວາມຈຳນວນຫຼາຍທີ່ບໍ່ໄດ້ຮ້ອງຂໍ, ເຄື່ອງມືສົ່ງຂໍ້ຄວາມອັດຕະໂນມັດ ແລະ ລິ້ງທີ່ຫຼອກລວງ.",
  // en: Impersonating another person or organisation, including claiming to be verified when you are not.
  "legal.community-guidelines.4.2": "ການແອບອ້າງເປັນບຸກຄົນ ຫຼື ອົງກອນອື່ນ ລວມທັງການອ້າງວ່າໄດ້ຮັບການຢືນຢັນແລ້ວທັງທີ່ບໍ່ແມ່ນ.",
  // en: Malware, account theft, and attempts to compromise other people's devices or accounts.
  "legal.community-guidelines.4.3": "ມັລແວ, ການລັກບັນຊີ ແລະ ຄວາມພະຍາຍາມເຈາະລະບົບອຸປະກອນ ຫຼື ບັນຊີຂອງຄົນອື່ນ.",
  // en: Infringing copyright or trademarks, and misusing official emblems.
  "legal.community-guidelines.4.4": "ການລະເມີດລິຂະສິດ ຫຼື ເຄື່ອງໝາຍການຄ້າ ແລະ ການໃຊ້ຕາສັນຍາລັກທາງການໃນທາງທີ່ຜິດ.",
  // en: Manipulated or false public content shared in a way likely to cause serious harm.
  "legal.community-guidelines.4.5": "ເນື້ອຫາສາທາລະນະທີ່ຖືກບິດເບືອນ ຫຼື ເປັນຄວາມຜິດ ທີ່ຖືກແບ່ງປັນໃນລັກສະນະທີ່ອາດກໍ່ໃຫ້ເກີດອັນຕະລາຍຮ້າຍແຮງ.",
  // en: How to report
  "legal.community-guidelines.5": "ວິທີລາຍງານ",
  // en: Report a message: press and hold it, then choose Report.
  "legal.community-guidelines.6.0": "ລາຍງານຂໍ້ຄວາມ: ແຕະຄ້າງໄວ້ ແລ້ວເລືອກ ລາຍງານ.",
  // en: Report a person, group or official account: open its profile, then choose Report.
  "legal.community-guidelines.6.1": "ລາຍງານບຸກຄົນ, ກຸ່ມ ຫຼື ບັນຊີທາງການ: ເປີດໂປຣໄຟລ໌ຂອງມັນ ແລ້ວເລືອກ ລາຍງານ.",
  // en: Block someone: open their profile and choose Block. They will not be told.
  "legal.community-guidelines.6.2": "ບລັອກຜູ້ໃດຜູ້ໜຶ່ງ: ເປີດໂປຣໄຟລ໌ຂອງເຂົາ ແລ້ວເລືອກ ບລັອກ. ເຂົາຈະບໍ່ຖືກແຈ້ງ.",
  // en: Reporting is confidential. We do not tell the reported person who reported them.
  "legal.community-guidelines.6.3": "ການລາຍງານເປັນຄວາມລັບ. ພວກເຮົາບໍ່ບອກຜູ້ທີ່ຖືກລາຍງານວ່າໃຜເປັນຜູ້ລາຍງານ.",
  // en: What we do about it
  "legal.community-guidelines.7": "ພວກເຮົາເຮັດຫຍັງກ່ຽວກັບເລື່ອງນີ້",
  // en: Depending on how serious it is, we may remove the content, limit the account's reach or features, issue a warning, suspend the account, or close it permanently. We preserve evidence where we must, and we refer illegal conduct to the competent authorities in Laos. We aim to act on reports of objectionable content within 24 hours.
  "legal.community-guidelines.8": "ຂຶ້ນກັບຄວາມຮ້າຍແຮງ ພວກເຮົາອາດລຶບເນື້ອຫາ, ຈຳກັດການເຂົ້າເຖິງ ຫຼື ຄຸນສົມບັດຂອງບັນຊີ, ອອກຄຳເຕືອນ, ໂຈະບັນຊີ ຫຼື ປິດມັນຢ່າງຖາວອນ. ພວກເຮົາຮັກສາຫຼັກຖານໄວ້ເມື່ອຈຳເປັນ ແລະ ສົ່ງພຶດຕິກຳຜິດກົດໝາຍໄປຫາອົງການທີ່ມີອຳນາດໃນລາວ. ພວກເຮົາມຸ່ງດຳເນີນການກັບລາຍງານເນື້ອຫາທີ່ບໍ່ເໝາະສົມພາຍໃນ 24 ຊົ່ວໂມງ.",
  // en: If you believe we made a mistake, write to safety@waow.app.
  "legal.community-guidelines.9": "ຖ້າທ່ານເຊື່ອວ່າພວກເຮົາຕັດສິນຜິດພາດ ກະລຸນາຂຽນຫາ safety@waow.app.",

  // ── child-safety ──
  // en: Child Safety Standards
  "legal.child-safety.title": "ມາດຕະຖານຄວາມປອດໄພຂອງເດັກ",
  // en: Waow prohibits child sexual abuse and exploitation (CSAE) in every form. This includes child sexual abuse material (CSAM), grooming, sextortion, trafficking of minors, and any sexualisation of a person under 18. We have no tolerance for it anywhere on Waow — in reported private messages, in groups, in public content, or in official channels.
  "legal.child-safety.0": "Waow ຫ້າມການລ່ວງລະເມີດ ແລະ ການຂູດຮີດທາງເພດຕໍ່ເດັກ (CSAE) ໃນທຸກຮູບແບບ. ນີ້ລວມເຖິງສື່ການລ່ວງລະເມີດທາງເພດຕໍ່ເດັກ (CSAM), ການລໍ້ລວງ, ການຂົ່ມຂູ່ດ້ວຍພາບທາງເພດ, ການຄ້າມະນຸດຜູ້ເຍົາ ແລະ ການເຮັດໃຫ້ຜູ້ທີ່ມີອາຍຸຕ່ຳກວ່າ 18 ປີກາຍເປັນວັດຖຸທາງເພດ. ພວກເຮົາບໍ່ຍອມຮັບສິ່ງເຫຼົ່ານີ້ຢູ່ບ່ອນໃດກໍຕາມໃນ Waow — ບໍ່ວ່າຈະໃນຂໍ້ຄວາມສ່ວນຕົວທີ່ຖືກລາຍງານ, ໃນກຸ່ມ, ໃນເນື້ອຫາສາທາລະນະ ຫຼື ໃນຊ່ອງທາງທາງການ.",
  // en: Our standards
  "legal.child-safety.1": "ມາດຕະຖານຂອງພວກເຮົາ",
  // en: Prohibition. Our Terms of Service and Community Guidelines explicitly forbid CSAE. Any account involved is closed permanently.
  "legal.child-safety.2.0": "ການຫ້າມ. ເງື່ອນໄຂການໃຫ້ບໍລິການ ແລະ ຫຼັກການຊຸມຊົນຂອງພວກເຮົາຫ້າມ CSAE ຢ່າງຊັດເຈນ. ບັນຊີໃດທີ່ກ່ຽວຂ້ອງຈະຖືກປິດຢ່າງຖາວອນ.",
  // en: Minimum age. Waow is for people aged 16 and over. Accounts we identify as belonging to someone under 16 are closed.
  "legal.child-safety.2.1": "ອາຍຸຂັ້ນຕ່ຳ. Waow ແມ່ນສຳລັບຜູ້ທີ່ມີອາຍຸ 16 ປີຂຶ້ນໄປ. ບັນຊີທີ່ພວກເຮົາລະບຸໄດ້ວ່າເປັນຂອງຜູ້ທີ່ມີອາຍຸຕ່ຳກວ່າ 16 ປີຈະຖືກປິດ.",
  // en: Reporting. Every user can report any message, person, group or channel from inside the app. Reports that indicate possible harm to a child are prioritised above all other reports.
  "legal.child-safety.2.2": "ການລາຍງານ. ຜູ້ໃຊ້ທຸກຄົນສາມາດລາຍງານຂໍ້ຄວາມ, ບຸກຄົນ, ກຸ່ມ ຫຼື ຊ່ອງທາງໃດກໍໄດ້ຈາກພາຍໃນແອັບ. ລາຍງານທີ່ບົ່ງບອກເຖິງອັນຕະລາຍທີ່ອາດເກີດກັບເດັກຈະຖືກຈັດລຳດັບຄວາມສຳຄັນເໜືອລາຍງານອື່ນທັງໝົດ.",
  // en: Review. Child safety reports are reviewed by trained staff. We aim to act within 24 hours, and faster where a child appears to be at immediate risk.
  "legal.child-safety.2.3": "ການກວດສອບ. ລາຍງານດ້ານຄວາມປອດໄພຂອງເດັກຈະຖືກກວດສອບໂດຍພະນັກງານທີ່ຜ່ານການຝຶກອົບຮົມ. ພວກເຮົາມຸ່ງດຳເນີນການພາຍໃນ 24 ຊົ່ວໂມງ ແລະ ໄວກວ່ານັ້ນເມື່ອເດັກເບິ່ງຄືວ່າຢູ່ໃນຄວາມສ່ຽງທັນທີ.",
  // en: Action and referral. When we identify CSAM or CSAE conduct, we remove the content, permanently close the accounts involved, preserve the evidence the law requires us to preserve, and refer the matter to the competent authorities of the Lao PDR.
  "legal.child-safety.2.4": "ການດຳເນີນການ ແລະ ການສົ່ງຕໍ່. ເມື່ອພວກເຮົາລະບຸ CSAM ຫຼື ພຶດຕິກຳ CSAE ພວກເຮົາຈະລຶບເນື້ອຫານັ້ນ, ປິດບັນຊີທີ່ກ່ຽວຂ້ອງຢ່າງຖາວອນ, ຮັກສາຫຼັກຖານຕາມທີ່ກົດໝາຍກຳນົດ ແລະ ສົ່ງເລື່ອງໄປຫາອົງການທີ່ມີອຳນາດຂອງ ສປປ ລາວ.",
  // en: Compliance. We comply with the child protection provisions of Lao law, including the Penal Code and the Law on Prevention and Combating Cyber Crime, and we cooperate with lawful requests relating to child safety.
  "legal.child-safety.2.5": "ການປະຕິບັດຕາມກົດໝາຍ. ພວກເຮົາປະຕິບັດຕາມບົດບັນຍັດການປົກປ້ອງເດັກຂອງກົດໝາຍລາວ ລວມທັງກົດໝາຍອາຍາ ແລະ ກົດໝາຍວ່າດ້ວຍການສະກັດກັ້ນ ແລະ ຕ້ານອາຊະຍາກຳທາງໄຊເບີ ພ້ອມທັງຮ່ວມມືກັບການຮ້ອງຂໍທີ່ຖືກຕ້ອງຕາມກົດໝາຍທີ່ກ່ຽວກັບຄວາມປອດໄພຂອງເດັກ.",
  // en: Prevention. We work to detect and disrupt patterns of behaviour associated with grooming and the distribution of CSAM, and we review our measures as the service grows.
  "legal.child-safety.2.6": "ການປ້ອງກັນ. ພວກເຮົາເຮັດວຽກເພື່ອກວດຫາ ແລະ ຢຸດຢັ້ງຮູບແບບພຶດຕິກຳທີ່ກ່ຽວຂ້ອງກັບການລໍ້ລວງ ແລະ ການເຜີຍແຜ່ CSAM ພ້ອມທັງທົບທວນມາດຕະການຂອງພວກເຮົາເມື່ອການບໍລິການເຕີບໂຕຂຶ້ນ.",
  // en: Child safety contact
  "legal.child-safety.3": "ຜູ້ຕິດຕໍ່ດ້ານຄວາມປອດໄພຂອງເດັກ",
  // en: Designated point of contact: TODO(child safety contact name), TODO(child safety contact role), Dynamic Solution Sole Co., Ltd. — safety@waow.app, monitored, and able to discuss our CSAE prevention practices with app stores, authorities and the public.
  "legal.child-safety.4": "ຈຸດຕິດຕໍ່ທີ່ກຳນົດໄວ້: TODO(child safety contact name), TODO(child safety contact role), Dynamic Solution Sole Co., Ltd. — safety@waow.app ເຊິ່ງມີການຕິດຕາມ ແລະ ສາມາດປຶກສາຫາລືກ່ຽວກັບແນວທາງປ້ອງກັນ CSAE ຂອງພວກເຮົາກັບຮ້ານແອັບ, ອົງການລັດ ແລະ ສາທາລະນະຊົນ.",

  // ── official-accounts ──
  // en: Official Account Policy
  "legal.official-accounts.title": "ນະໂຍບາຍບັນຊີທາງການ",
  // en: An official account lets an organisation reach people on Waow under a verified identity, so users can tell a real institution from an impersonator. Verification is granted by application and manual review.
  "legal.official-accounts.0": "ບັນຊີທາງການເຮັດໃຫ້ອົງກອນສາມາດເຂົ້າເຖິງຜູ້ຄົນໃນ Waow ພາຍໃຕ້ຕົວຕົນທີ່ຢືນຢັນແລ້ວ ເພື່ອໃຫ້ຜູ້ໃຊ້ແຍກແຍະສະຖາບັນຈິງອອກຈາກຜູ້ແອບອ້າງໄດ້. ການຢືນຢັນຈະໄດ້ຮັບໂດຍການສະໝັກ ແລະ ການກວດສອບດ້ວຍຄົນ.",
  // en: Who can apply
  "legal.official-accounts.1": "ໃຜສາມາດສະໝັກໄດ້",
  // en: Government bodies and public institutions of the Lao PDR.
  "legal.official-accounts.2.0": "ອົງການລັດ ແລະ ສະຖາບັນສາທາລະນະຂອງ ສປປ ລາວ.",
  // en: Registered companies and financial institutions.
  "legal.official-accounts.2.1": "ບໍລິສັດທີ່ຈົດທະບຽນ ແລະ ສະຖາບັນການເງິນ.",
  // en: Registered media organisations.
  "legal.official-accounts.2.2": "ອົງກອນສື່ມວນຊົນທີ່ຈົດທະບຽນ.",
  // en: Educational and health institutions, and other organisations we approve.
  "legal.official-accounts.2.3": "ສະຖາບັນການສຶກສາ ແລະ ສາທາລະນະສຸກ ພ້ອມທັງອົງກອນອື່ນທີ່ພວກເຮົາອະນຸມັດ.",
  // en: What we require
  "legal.official-accounts.3": "ສິ່ງທີ່ພວກເຮົາຕ້ອງການ",
  // en: Evidence that the organisation exists: registration or establishment documents.
  "legal.official-accounts.4.0": "ຫຼັກຖານວ່າອົງກອນມີຕົວຕົນຈິງ: ເອກະສານຈົດທະບຽນ ຫຼື ການສ້າງຕັ້ງ.",
  // en: Evidence that the applicant is authorised to act for it: an authorisation letter and the identity document of the authorised representative.
  "legal.official-accounts.4.1": "ຫຼັກຖານວ່າຜູ້ສະໝັກມີສິດດຳເນີນການແທນ: ໜັງສືມອບສິດ ແລະ ເອກະສານຢັ້ງຢືນຕົວຕົນຂອງຜູ້ຕາງໜ້າທີ່ໄດ້ຮັບມອບສິດ.",
  // en: An official contact channel we can independently verify — a published telephone number, domain email address or official website.
  "legal.official-accounts.4.2": "ຊ່ອງທາງຕິດຕໍ່ທາງການທີ່ພວກເຮົາກວດສອບໄດ້ດ້ວຍຕົນເອງ — ເບີໂທລະສັບທີ່ເຜີຍແຜ່, ອີເມວທີ່ໃຊ້ໂດເມນ ຫຼື ເວັບໄຊທາງການ.",
  // en: Confirmation of who will control the account and who may broadcast from it.
  "legal.official-accounts.4.3": "ການຢືນຢັນວ່າໃຜຈະຄວບຄຸມບັນຊີ ແລະ ໃຜສາມາດກະຈາຍຂ່າວສານຈາກມັນໄດ້.",
  // en: We review applications manually, in a process comparable to opening a corporate bank account. We may ask for further evidence, and we may decline an application.
  "legal.official-accounts.5": "ພວກເຮົາກວດສອບການສະໝັກດ້ວຍຄົນ ໃນຂັ້ນຕອນທີ່ທຽບໄດ້ກັບການເປີດບັນຊີທະນາຄານຂອງບໍລິສັດ. ພວກເຮົາອາດຂໍຫຼັກຖານເພີ່ມເຕີມ ແລະ ອາດປະຕິເສດການສະໝັກ.",
  // en: Badges and categories
  "legal.official-accounts.6": "ປ້າຍ ແລະ ໝວດໝູ່",
  // en: Verified accounts carry a badge, and may be labelled by category — Government, Business, Media or Institution. A badge confirms that we verified the organisation and the applicant's authority at the time of approval. It is not an endorsement of anything the account publishes.
  "legal.official-accounts.7": "ບັນຊີທີ່ຢືນຢັນແລ້ວຈະມີປ້າຍ ແລະ ອາດຖືກຈັດປະເພດ — ພາກລັດ, ທຸລະກິດ, ສື່ ຫຼື ສະຖາບັນ. ປ້າຍຢືນຢັນວ່າພວກເຮົາໄດ້ກວດສອບອົງກອນ ແລະ ສິດອຳນາດຂອງຜູ້ສະໝັກໃນເວລາທີ່ອະນຸມັດ. ມັນບໍ່ແມ່ນການຮັບຮອງເນື້ອຫາໃດໆທີ່ບັນຊີນັ້ນເຜີຍແຜ່.",
  // en: Rules for official accounts
  "legal.official-accounts.8": "ກົດລະບຽບສຳລັບບັນຊີທາງການ",
  // en: Publish accurate information, and correct it promptly if it turns out to be wrong.
  "legal.official-accounts.9.0": "ເຜີຍແຜ່ຂໍ້ມູນທີ່ຖືກຕ້ອງ ແລະ ແກ້ໄຂໂດຍໄວຖ້າພົບວ່າຜິດພາດ.",
  // en: Keep public notices distinct from advertising. Do not disguise advertising as an official announcement.
  "legal.official-accounts.9.1": "ແຍກແຈ້ງການສາທາລະນະອອກຈາກການໂຄສະນາ. ຢ່າປອມແປງການໂຄສະນາໃຫ້ເປັນປະກາດທາງການ.",
  // en: Do not send spam or bulk messages to people who have not chosen to follow you.
  "legal.official-accounts.9.2": "ຢ່າສົ່ງສະແປມ ຫຼື ຂໍ້ຄວາມຈຳນວນຫຼາຍໄປຫາຜູ້ທີ່ບໍ່ໄດ້ເລືອກຕິດຕາມທ່ານ.",
  // en: Use least-privilege admin roles, and keep broadcasts auditable within your organisation.
  "legal.official-accounts.9.3": "ໃຊ້ບົດບາດຜູ້ດູແລແບບສິດໜ້ອຍທີ່ສຸດ ແລະ ຮັກສາການກະຈາຍຂ່າວສານໃຫ້ກວດສອບໄດ້ພາຍໃນອົງກອນຂອງທ່ານ.",
  // en: Tell us when the authorised representative changes or the organisation's details change.
  "legal.official-accounts.9.4": "ແຈ້ງພວກເຮົາເມື່ອຜູ້ຕາງໜ້າທີ່ໄດ້ຮັບມອບສິດປ່ຽນ ຫຼື ລາຍລະອຽດຂອງອົງກອນປ່ຽນແປງ.",
  // en: Losing verification
  "legal.official-accounts.10": "ການສູນເສຍການຢືນຢັນ",
  // en: We may suspend or remove verification if documents expire, if control of the account changes without notice, if the account misleads people, or if it breaks our Terms or Community Guidelines. Serious cases result in permanent removal. Apply or ask a question: officialaccounts@waow.app.
  "legal.official-accounts.11": "ພວກເຮົາອາດໂຈະ ຫຼື ຖອນການຢືນຢັນ ຖ້າເອກະສານໝົດອາຍຸ, ຖ້າການຄວບຄຸມບັນຊີປ່ຽນມືໂດຍບໍ່ແຈ້ງ, ຖ້າບັນຊີເຮັດໃຫ້ຄົນເຂົ້າໃຈຜິດ ຫຼື ຖ້າມັນລະເມີດເງື່ອນໄຂ ຫຼື ຫຼັກການຊຸມຊົນຂອງພວກເຮົາ. ກໍລະນີຮ້າຍແຮງຈະສົ່ງຜົນໃຫ້ຖືກຖອນຢ່າງຖາວອນ. ສະໝັກ ຫຼື ສອບຖາມ: officialaccounts@waow.app.",

  // ── ai-translation ──
  // en: AI and Translation Notice
  "legal.ai-translation.title": "ແຈ້ງການກ່ຽວກັບ AI ແລະ ການແປພາສາ",
  // en: Waow includes an AI assistant and message translation. This page explains plainly how they handle your content.
  "legal.ai-translation.0": "Waow ມີຜູ້ຊ່ວຍ AI ແລະ ການແປຂໍ້ຄວາມ. ໜ້ານີ້ອະທິບາຍຢ່າງກົງໄປກົງມາວ່າພວກມັນຈັດການເນື້ອຫາຂອງທ່ານແນວໃດ.",
  // en: When these features run
  "legal.ai-translation.1": "ຄຸນສົມບັດເຫຼົ່ານີ້ເຮັດວຽກເມື່ອໃດ",
  // en: Translation and the AI assistant run only when you use them. Waow does not send your conversations to a translation or AI provider in the background. When you translate a message, that message is sent for translation. When you ask the AI assistant something, what you type is sent to be answered. Nothing else is.
  "legal.ai-translation.2": "ການແປ ແລະ ຜູ້ຊ່ວຍ AI ຈະເຮັດວຽກສະເພາະເມື່ອທ່ານໃຊ້ພວກມັນເທົ່ານັ້ນ. Waow ບໍ່ສົ່ງການສົນທະນາຂອງທ່ານໄປຫາຜູ້ໃຫ້ບໍລິການແປ ຫຼື AI ຢູ່ເບື້ອງຫຼັງ. ເມື່ອທ່ານແປຂໍ້ຄວາມໃດໜຶ່ງ ຂໍ້ຄວາມນັ້ນຈຶ່ງຖືກສົ່ງໄປແປ. ເມື່ອທ່ານຖາມຜູ້ຊ່ວຍ AI ສິ່ງທີ່ທ່ານພິມຈຶ່ງຖືກສົ່ງໄປເພື່ອຕອບ. ບໍ່ມີສິ່ງອື່ນຖືກສົ່ງ.",
  // en: Where your text goes
  "legal.ai-translation.3": "ຂໍ້ຄວາມຂອງທ່ານໄປໃສ",
  // en: Translation and AI responses are produced by TODO(provider category) acting for Waow. Processing takes place in TODO(processing country/region). These providers may use your text only to produce the result you asked for.
  "legal.ai-translation.4": "ການແປ ແລະ ຄຳຕອບຂອງ AI ຖືກສ້າງຂຶ້ນໂດຍ TODO(provider category) ທີ່ດຳເນີນການແທນ Waow. ການປະມວນຜົນເກີດຂຶ້ນຢູ່ TODO(processing country/region). ຜູ້ໃຫ້ບໍລິການເຫຼົ່ານີ້ອາດໃຊ້ຂໍ້ຄວາມຂອງທ່ານພຽງເພື່ອສ້າງຜົນລັບທີ່ທ່ານຮ້ອງຂໍເທົ່ານັ້ນ.",
  // en: What we keep
  "legal.ai-translation.5": "ສິ່ງທີ່ພວກເຮົາເກັບໄວ້",
  // en: AI assistant conversations are kept for TODO(AI history retention period) so that you can see your history, and are then deleted. You can delete your AI conversation history at any time from within the assistant. Translated text is not stored beyond the moment it takes to return the translation.
  "legal.ai-translation.6": "ການສົນທະນາກັບຜູ້ຊ່ວຍ AI ຖືກເກັບໄວ້ເປັນເວລາ TODO(AI history retention period) ເພື່ອໃຫ້ທ່ານເບິ່ງປະຫວັດໄດ້ ຈາກນັ້ນຈຶ່ງຖືກລຶບ. ທ່ານສາມາດລຶບປະຫວັດການສົນທະນາ AI ຂອງທ່ານໄດ້ທຸກເວລາຈາກພາຍໃນຜູ້ຊ່ວຍ. ຂໍ້ຄວາມທີ່ແປແລ້ວຈະບໍ່ຖືກເກັບໄວ້ເກີນຊ່ວງເວລາທີ່ໃຊ້ໃນການສົ່ງຄຳແປກັບຄືນ.",
  // en: Training
  "legal.ai-translation.7": "ການຝຶກໂມເດວ",
  // en: Your private chats are never used to train AI models. Your AI assistant conversations are not used to train models unless you give separate, clear consent.
  "legal.ai-translation.8": "ການສົນທະນາສ່ວນຕົວຂອງທ່ານຈະບໍ່ຖືກນຳໄປໃຊ້ຝຶກໂມເດວ AI ເລີຍ. ການສົນທະນາກັບຜູ້ຊ່ວຍ AI ຂອງທ່ານຈະບໍ່ຖືກນຳໄປໃຊ້ຝຶກໂມເດວ ນອກຈາກທ່ານຈະໃຫ້ຄວາມຍິນຍອມແຍກຕ່າງຫາກຢ່າງຊັດເຈນ.",
  // en: What it is not
  "legal.ai-translation.9": "ສິ່ງທີ່ມັນບໍ່ແມ່ນ",
  // en: Automated results can be wrong, out of date, or incomplete. They are not medical, legal or financial advice, and they must not be relied on in an emergency. Where the original message is available, Waow shows it alongside the translation so you can judge for yourself.
  "legal.ai-translation.10": "ຜົນລັບອັດຕະໂນມັດອາດຜິດ, ລ້າສະໄໝ ຫຼື ບໍ່ຄົບຖ້ວນ. ພວກມັນບໍ່ແມ່ນຄຳແນະນຳທາງການແພດ, ກົດໝາຍ ຫຼື ການເງິນ ແລະ ບໍ່ຄວນຖືກເຊື່ອຖືໃນກໍລະນີສຸກເສີນ. ບ່ອນໃດທີ່ມີຂໍ້ຄວາມຕົ້ນສະບັບ Waow ຈະສະແດງມັນຄຽງຄູ່ກັບຄຳແປ ເພື່ອໃຫ້ທ່ານຕັດສິນເອງໄດ້.",

  // ── security ──
  // en: Security and Vulnerability Disclosure
  "legal.security.title": "ຄວາມປອດໄພ ແລະ ການເປີດເຜີຍຊ່ອງໂຫວ່",
  // en: Waow protects user data with encryption in transit and at rest, restricted and logged administrative access, secure development practices, monitoring, backups, and a defined incident response process.
  "legal.security.0": "Waow ປົກປ້ອງຂໍ້ມູນຜູ້ໃຊ້ດ້ວຍການເຂົ້າລະຫັດໃນລະຫວ່າງການສົ່ງ ແລະ ໃນຂະນະຈັດເກັບ, ການຈຳກັດ ແລະ ບັນທຶກການເຂົ້າເຖິງລະດັບຜູ້ດູແລລະບົບ, ການພັດທະນາຢ່າງປອດໄພ, ການຕິດຕາມ, ການສຳຮອງຂໍ້ມູນ ແລະ ຂັ້ນຕອນຮັບມືເຫດການທີ່ກຳນົດໄວ້.",
  // en: Reporting a vulnerability
  "legal.security.1": "ການລາຍງານຊ່ອງໂຫວ່",
  // en: If you find a security issue in Waow, tell us privately at security@waow.app before telling anyone else. Include enough detail for us to reproduce it.
  "legal.security.2": "ຖ້າທ່ານພົບບັນຫາດ້ານຄວາມປອດໄພໃນ Waow ກະລຸນາແຈ້ງພວກເຮົາເປັນການສ່ວນຕົວທີ່ security@waow.app ກ່ອນບອກຄົນອື່ນ. ກະລຸນາໃສ່ລາຍລະອຽດພຽງພໍໃຫ້ພວກເຮົາເຮັດຊ້ຳໄດ້.",
  // en: Do not access, modify or delete other people's data. Use your own test accounts.
  "legal.security.3.0": "ຢ່າເຂົ້າເຖິງ, ແກ້ໄຂ ຫຼື ລຶບຂໍ້ມູນຂອງຄົນອື່ນ. ໃຫ້ໃຊ້ບັນຊີທົດສອບຂອງທ່ານເອງ.",
  // en: Do not disrupt the service, and do not run denial-of-service or spam tests.
  "legal.security.3.1": "ຢ່າລົບກວນການບໍລິການ ແລະ ຢ່າທົດສອບແບບ denial-of-service ຫຼື ສະແປມ.",
  // en: Do not use social engineering against our staff or users.
  "legal.security.3.2": "ຢ່າໃຊ້ວິສະວະກຳສັງຄົມກັບພະນັກງານ ຫຼື ຜູ້ໃຊ້ຂອງພວກເຮົາ.",
  // en: Take only the minimum action needed to demonstrate the issue.
  "legal.security.3.3": "ໃຫ້ດຳເນີນການພຽງເທົ່າທີ່ຈຳເປັນຕໍ່ສຸດເພື່ອສະແດງໃຫ້ເຫັນບັນຫາ.",
  // en: What we will do
  "legal.security.4": "ສິ່ງທີ່ພວກເຮົາຈະເຮັດ",
  // en: We aim to acknowledge a report within 5 working days, keep you informed while we investigate, and agree a disclosure timing with you. We ask that you do not publish an unresolved issue before we have had a reasonable period to fix it. We are glad to credit researchers who report responsibly.
  "legal.security.5": "ພວກເຮົາມຸ່ງຮັບຮູ້ລາຍງານພາຍໃນ 5 ວັນລັດຖະການ, ແຈ້ງໃຫ້ທ່ານຮູ້ໃນລະຫວ່າງການກວດສອບ ແລະ ຕົກລົງເວລາການເປີດເຜີຍຮ່ວມກັບທ່ານ. ພວກເຮົາຂໍໃຫ້ທ່ານຢ່າເຜີຍແຜ່ບັນຫາທີ່ຍັງບໍ່ໄດ້ແກ້ໄຂ ກ່ອນທີ່ພວກເຮົາຈະມີເວລາພໍສົມຄວນໃນການແກ້ໄຂ. ພວກເຮົາຍິນດີໃຫ້ກຽດແກ່ນັກຄົ້ນຄວ້າທີ່ລາຍງານຢ່າງມີຄວາມຮັບຜິດຊອບ.",

  // ── law-enforcement ──
  // en: Law Enforcement Request Policy
  "legal.law-enforcement.title": "ນະໂຍບາຍການຮ້ອງຂໍຈາກເຈົ້າໜ້າທີ່",
  // en: This page explains how Waow handles requests for user information from authorities. We publish it because people are entitled to know.
  "legal.law-enforcement.0": "ໜ້ານີ້ອະທິບາຍວິທີທີ່ Waow ຈັດການກັບການຮ້ອງຂໍຂໍ້ມູນຜູ້ໃຊ້ຈາກອົງການລັດ. ພວກເຮົາເຜີຍແຜ່ມັນເພາະປະຊາຊົນມີສິດຮູ້.",
  // en: How we handle a request
  "legal.law-enforcement.1": "ພວກເຮົາຈັດການກັບການຮ້ອງຂໍແນວໃດ",
  // en: We confirm who the requester is and that they have legal authority to make the request.
  "legal.law-enforcement.2.0": "ພວກເຮົາຢືນຢັນວ່າຜູ້ຮ້ອງຂໍແມ່ນໃຜ ແລະ ມີອຳນາດທາງກົດໝາຍໃນການຮ້ອງຂໍ.",
  // en: We check the legal basis, the scope, whether the request is necessary and proportionate, and how urgent it is.
  "legal.law-enforcement.2.1": "ພວກເຮົາກວດສອບພື້ນຖານທາງກົດໝາຍ, ຂອບເຂດ, ຄວາມຈຳເປັນ ແລະ ຄວາມສົມເຫດສົມຜົນ ພ້ອມທັງລະດັບຄວາມຮີບດ່ວນ.",
  // en: We provide only the information the law requires and that we actually hold. We do not create data we do not have.
  "legal.law-enforcement.2.2": "ພວກເຮົາໃຫ້ພຽງຂໍ້ມູນທີ່ກົດໝາຍກຳນົດ ແລະ ທີ່ພວກເຮົາມີຢູ່ຈິງ. ພວກເຮົາບໍ່ສ້າງຂໍ້ມູນທີ່ພວກເຮົາບໍ່ມີ.",
  // en: Sensitive or large-scale requests require approval at senior management level.
  "legal.law-enforcement.2.3": "ການຮ້ອງຂໍທີ່ອ່ອນໄຫວ ຫຼື ຂະໜາດໃຫຍ່ ຕ້ອງໄດ້ຮັບການອະນຸມັດຈາກລະດັບຜູ້ບໍລິຫານອາວຸໂສ.",
  // en: We keep an internal audit record of every request and every decision.
  "legal.law-enforcement.2.4": "ພວກເຮົາເກັບບັນທຶກການກວດສອບພາຍໃນຂອງທຸກການຮ້ອງຂໍ ແລະ ທຸກການຕັດສິນໃຈ.",
  // en: We tell the affected user where the law permits it and where doing so would not create a risk to someone's safety.
  "legal.law-enforcement.2.5": "ພວກເຮົາແຈ້ງໃຫ້ຜູ້ໃຊ້ທີ່ໄດ້ຮັບຜົນກະທົບຮູ້ ໃນກໍລະນີທີ່ກົດໝາຍອະນຸຍາດ ແລະ ບ່ອນທີ່ການແຈ້ງນັ້ນຈະບໍ່ສ້າງຄວາມສ່ຽງຕໍ່ຄວາມປອດໄພຂອງໃຜ.",
  // en: We use emergency disclosure only where there is an imminent risk of death or serious harm, and we document the reason.
  "legal.law-enforcement.2.6": "ພວກເຮົາໃຊ້ການເປີດເຜີຍສຸກເສີນສະເພາະເມື່ອມີຄວາມສ່ຽງທີ່ຈະເກີດການເສຍຊີວິດ ຫຼື ອັນຕະລາຍຮ້າຍແຮງໃນທັນທີ ແລະ ພວກເຮົາບັນທຶກເຫດຜົນໄວ້.",
  // en: About our cooperation with the National Internet Center
  "legal.law-enforcement.3": "ກ່ຽວກັບການຮ່ວມມືຂອງພວກເຮົາກັບສູນອິນເຕີເນັດແຫ່ງຊາດ",
  // en: Dynamic Solution Sole Co., Ltd. has a memorandum of cooperation with the National Internet Center under the Ministry of Technology and Communications, concerning the study, development and management of the Waow platform and Laos's digital ecosystem. It is a framework for technical cooperation and future service integration. It is not a standing authorisation to access user information, and it does not exempt any request from the process on this page. Requests should be sent to legal@waow.app.
  "legal.law-enforcement.4": "Dynamic Solution Sole Co., Ltd. ມີບົດບັນທຶກຄວາມຮ່ວມມືກັບສູນອິນເຕີເນັດແຫ່ງຊາດ ພາຍໃຕ້ກະຊວງເຕັກໂນໂລຊີ ແລະ ການສື່ສານ ກ່ຽວກັບການສຶກສາ, ການພັດທະນາ ແລະ ການຄຸ້ມຄອງແພລດຟອມ Waow ແລະ ລະບົບນິເວດດິຈິຕອນຂອງລາວ. ມັນເປັນກອບສຳລັບຄວາມຮ່ວມມືທາງເຕັກນິກ ແລະ ການເຊື່ອມໂຍງບໍລິການໃນອະນາຄົດ. ມັນບໍ່ແມ່ນການອະນຸຍາດຖາວອນໃນການເຂົ້າເຖິງຂໍ້ມູນຜູ້ໃຊ້ ແລະ ບໍ່ໄດ້ຍົກເວັ້ນການຮ້ອງຂໍໃດຈາກຂັ້ນຕອນໃນໜ້ານີ້. ການຮ້ອງຂໍຄວນສົ່ງໄປທີ່ legal@waow.app.",

  // ── licences ──
  // en: Open Source Licences
  "legal.licences.title": "ໃບອະນຸຍາດໂອເພນຊອດ",
  // en: Waow is built with open source software. We are grateful to the people who wrote it. The components we use, and the full text of their licences, are listed below.
  "legal.licences.0": "Waow ຖືກສ້າງຂຶ້ນດ້ວຍຊອບແວໂອເພນຊອດ. ພວກເຮົາຂອບໃຈຜູ້ທີ່ຂຽນມັນ. ອົງປະກອບທີ່ພວກເຮົາໃຊ້ ແລະ ຂໍ້ຄວາມເຕັມຂອງໃບອະນຸຍາດ ແມ່ນລາຍການຢູ່ດ້ານລຸ່ມ.",
  // en: TODO(open source component and licence list)
  "legal.licences.1": "TODO(open source component and licence list)",

  // ── website-privacy ──
  // en: Website Privacy Notice
  "legal.website-privacy.title": "ແຈ້ງການຄວາມເປັນສ່ວນຕົວຂອງເວັບໄຊ",
  // en: This notice covers waow.app itself. Our Privacy Policy covers the Waow app.
  "legal.website-privacy.0": "ແຈ້ງການນີ້ຄຸ້ມຄອງ waow.app ເອງ. ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວຂອງພວກເຮົາຄຸ້ມຄອງແອັບ Waow.",
  // en: Our website host records standard technical information about visits — IP address, browser type, pages requested and time of request — to keep the site available and secure.
  "legal.website-privacy.1.0": "ຜູ້ໃຫ້ບໍລິການໂຮສເວັບໄຊຂອງພວກເຮົາບັນທຶກຂໍ້ມູນທາງເຕັກນິກມາດຕະຖານກ່ຽວກັບການເຂົ້າຊົມ — ທີ່ຢູ່ IP, ປະເພດບຣາວເຊີ, ໜ້າທີ່ຮ້ອງຂໍ ແລະ ເວລາຂອງການຮ້ອງຂໍ — ເພື່ອຮັກສາໃຫ້ເວັບໄຊໃຊ້ງານໄດ້ ແລະ ປອດໄພ.",
  // en: If you register for early access, we store the details you submit so we can contact you about availability, and for no other purpose. You may ask us to delete them at any time at privacy@waow.app.
  "legal.website-privacy.1.1": "ຖ້າທ່ານລົງທະບຽນເພື່ອເຂົ້າເຖິງລ່ວງໜ້າ ພວກເຮົາຈະເກັບຂໍ້ມູນທີ່ທ່ານສົ່ງມາ ເພື່ອຕິດຕໍ່ທ່ານກ່ຽວກັບຄວາມພ້ອມໃຊ້ງານ ແລະ ບໍ່ໄດ້ໃຊ້ເພື່ອຈຸດປະສົງອື່ນ. ທ່ານສາມາດຂໍໃຫ້ພວກເຮົາລຶບມັນໄດ້ທຸກເວລາທີ່ privacy@waow.app.",
  // en: TODO(cookies and analytics disclosure)
  "legal.website-privacy.1.2": "TODO(cookies and analytics disclosure)",
  // en: We do not sell website visitor information and do not use it for advertising.
  "legal.website-privacy.1.3": "ພວກເຮົາບໍ່ຂາຍຂໍ້ມູນຜູ້ເຂົ້າຊົມເວັບໄຊ ແລະ ບໍ່ໃຊ້ມັນເພື່ອການໂຄສະນາ.",

  // ── delete-account ──
  // en: Delete Your Account
  "legal.delete-account.title": "ລຶບບັນຊີຂອງທ່ານ",
  // en: You can delete your Waow account whenever you want. Deletion is permanent and cannot be undone.
  "legal.delete-account.0": "ທ່ານສາມາດລຶບບັນຊີ Waow ຂອງທ່ານໄດ້ທຸກເວລາທີ່ຕ້ອງການ. ການລຶບແມ່ນຖາວອນ ແລະ ບໍ່ສາມາດຍົກເລີກໄດ້.",
  // en: From the app
  "legal.delete-account.1": "ຈາກແອັບ",
  // en: Open Waow and go to Settings → Account → Delete Account.
  "legal.delete-account.2.0": "ເປີດ Waow ແລ້ວໄປທີ່ ການຕັ້ງຄ່າ → ບັນຊີ → ລຶບບັນຊີ.",
  // en: Confirm your phone number and follow the steps.
  "legal.delete-account.2.1": "ຢືນຢັນເບີໂທລະສັບຂອງທ່ານ ແລ້ວປະຕິບັດຕາມຂັ້ນຕອນ.",
  // en: From this page, if you no longer have the app
  "legal.delete-account.3": "ຈາກໜ້ານີ້ ຖ້າທ່ານບໍ່ມີແອັບແລ້ວ",
  // en: Enter your phone number below.
  "legal.delete-account.4.0": "ປ້ອນເບີໂທລະສັບຂອງທ່ານຢູ່ດ້ານລຸ່ມ.",
  // en: We send a verification code by SMS, so we can be sure the request comes from you.
  "legal.delete-account.4.1": "ພວກເຮົາຈະສົ່ງລະຫັດຢືນຢັນທາງ SMS ເພື່ອໃຫ້ແນ່ໃຈວ່າຄຳຮ້ອງຂໍມາຈາກທ່ານ.",
  // en: Enter the code to confirm. Your account is closed straight away.
  "legal.delete-account.4.2": "ປ້ອນລະຫັດເພື່ອຢືນຢັນ. ບັນຊີຂອງທ່ານຈະຖືກປິດທັນທີ.",
  // en: TODO(self-service deletion form — needs send-code and confirm-delete API endpoints)
  "legal.delete-account.5": "TODO(self-service deletion form — needs send-code and confirm-delete API endpoints)",
  // en: If you cannot receive the code — for example the number is no longer yours — write to privacy@waow.app and we will verify your identity another way and process the request within 7 days.
  "legal.delete-account.6": "ຖ້າທ່ານບໍ່ສາມາດຮັບລະຫັດໄດ້ — ຕົວຢ່າງ ເບີນັ້ນບໍ່ແມ່ນຂອງທ່ານແລ້ວ — ກະລຸນາຂຽນຫາ privacy@waow.app ແລ້ວພວກເຮົາຈະຢືນຢັນຕົວຕົນຂອງທ່ານດ້ວຍວິທີອື່ນ ແລະ ດຳເນີນການຕາມຄຳຮ້ອງພາຍໃນ 7 ວັນ.",
  // en: What happens next
  "legal.delete-account.7": "ສິ່ງທີ່ຈະເກີດຂຶ້ນຕໍ່ໄປ",
  // en: Your profile, name, photo and status are removed.
  "legal.delete-account.8.0": "ໂປຣໄຟລ໌, ຊື່, ຮູບ ແລະ ສະຖານະຂອງທ່ານຈະຖືກລຶບອອກ.",
  // en: You are removed from all your groups.
  "legal.delete-account.8.1": "ທ່ານຈະຖືກລຶບອອກຈາກທຸກກຸ່ມຂອງທ່ານ.",
  // en: The data we hold about you is deleted on the schedule in our Privacy Policy, and disappears from backups within 35 days.
  "legal.delete-account.8.2": "ຂໍ້ມູນທີ່ພວກເຮົາເກັບກ່ຽວກັບທ່ານຈະຖືກລຶບຕາມກຳນົດເວລາໃນນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ ແລະ ຈະຫາຍໄປຈາກໄຟລ໌ສຳຮອງພາຍໃນ 35 ວັນ.",
  // en: Messages you already sent stay on the devices of the people who received them. We cannot remove those copies.
  "legal.delete-account.8.3": "ຂໍ້ຄວາມທີ່ທ່ານສົ່ງໄປແລ້ວຈະຍັງຄົງຢູ່ໃນອຸປະກອນຂອງຜູ້ທີ່ໄດ້ຮັບ. ພວກເຮົາບໍ່ສາມາດລຶບສຳເນົາເຫຼົ່ານັ້ນໄດ້.",
  // en: We keep a limited record where safety, fraud prevention or the law requires it.
  "legal.delete-account.8.4": "ພວກເຮົາເກັບບັນທຶກໄວ້ຈຳກັດ ໃນກໍລະນີທີ່ຄວາມປອດໄພ, ການປ້ອງກັນການສໍ້ໂກງ ຫຼື ກົດໝາຍກຳນົດ.",
  // en: Questions: privacy@waow.app.
  "legal.delete-account.9": "ຄຳຖາມ: privacy@waow.app.",
};
