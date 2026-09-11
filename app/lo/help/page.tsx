import type { Metadata } from "next";
import { HelpPageContent } from "../../help/content";

export const metadata: Metadata = {
  title: "ສູນຊ່ວຍເຫຼືອ Waow — ແຊັດ, ການໂທ ແລະ ການແປຂໍ້ຄວາມ",
  description: "ຊອກຫາຄຳຕອບກ່ຽວກັບບັນຊີ Waow, ສົ່ງຂໍ້ຄວາມ, ແຊັດກຸ່ມ, ໂທສຽງ, ໂທວິດີໂອ, ແປຂໍ້ຄວາມ ແລະ ຄວາມເປັນສ່ວນຕົວ.",
  alternates: {
    canonical: "/lo/help",
    languages: { en: "/help", lo: "/lo/help", "x-default": "/help" },
  },
};

export default function LaoHelpPage() {
  return <HelpPageContent />;
}
