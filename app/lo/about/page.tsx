import type { Metadata } from "next";
import { AboutPageContent } from "../../about/content";

export const metadata: Metadata = {
  title: "ກ່ຽວກັບ Waow — ແອັບສົ່ງຂໍ້ຄວາມທີ່ສ້າງຢູ່ລາວ",
  description: "ຮູ້ຈັກ Waow, ແອັບແຊັດລາວທີ່ສ້າງຢູ່ວຽງຈັນ ເພື່ອຊ່ວຍໃຫ້ຜູ້ຄົນແຊັດ, ໂທ ແລະ ສື່ສານຢ່າງເປັນສ່ວນຕົວ.",
  alternates: {
    canonical: "/lo/about",
    languages: { en: "/about", lo: "/lo/about", "x-default": "/about" },
  },
};

export default function LaoAboutPage() {
  return <AboutPageContent />;
}
