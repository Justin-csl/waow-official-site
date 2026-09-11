import type { Metadata } from "next";
import { HelpPageContent } from "../../help/content";

export const metadata: Metadata = {
  title: "ສູນຊ່ວຍເຫຼືອ",
  description: "ຊອກຫາຄຳຕອບກ່ຽວກັບບັນຊີ Waow, ຂໍ້ຄວາມ, ການໂທ, ຄວາມເປັນສ່ວນຕົວ ແລະ ອຸປະກອນ.",
  alternates: {
    canonical: "/lo/help",
    languages: { en: "/help", lo: "/lo/help", "x-default": "/help" },
  },
};

export default function LaoHelpPage() {
  return <HelpPageContent />;
}
