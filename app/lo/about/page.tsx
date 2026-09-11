import type { Metadata } from "next";
import { AboutPageContent } from "../../about/content";

export const metadata: Metadata = {
  title: "ກ່ຽວກັບ Waow",
  description: "ຮູ້ຈັກ Waow, ແອັບສົນທະນາສ່ວນຕົວທີ່ສ້າງຂຶ້ນຢູ່ລາວ ເພື່ອຊ່ວຍໃຫ້ຜູ້ຄົນສື່ສານຢ່າງປອດໄພ.",
  alternates: {
    canonical: "/lo/about",
    languages: { en: "/about", lo: "/lo/about", "x-default": "/about" },
  },
};

export default function LaoAboutPage() {
  return <AboutPageContent />;
}
