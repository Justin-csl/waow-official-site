import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../site-shell";
import { FaqBrowser } from "../../faq/faq-browser";

export const metadata: Metadata = {
  title: "ຄຳຖາມ Waow — ແຊັດລາວ, ການໂທ ແລະ ແປຂໍ້ຄວາມ",
  description: "ຄຳຕອບກ່ຽວກັບການເລີ່ມໃຊ້ Waow, ການສົນທະນາ, ການໂທ, ການແປພາສາ, ຄວາມເປັນສ່ວນຕົວ ແລະ ບັນຊີຂອງທ່ານ.",
  alternates: {
    canonical: "/lo/faq",
    languages: { en: "/faq", lo: "/lo/faq", "x-default": "/faq" },
  },
};

export default function LaoFaqPage() {
  return (
    <main>
      <SiteHeader />
      <FaqBrowser />
      <SiteFooter />
    </main>
  );
}
