import type { Metadata } from "next";
import { HomeContent } from "../home-content";

export const metadata: Metadata = {
  title: "Waow — ແອັບສົນທະນາສ່ວນຕົວຈາກລາວ",
  description:
    "Waow ແມ່ນແອັບສົນທະນາຈາກລາວ ສຳລັບຂໍ້ຄວາມທີ່ເຂົ້າລະຫັດ, ການໂທ, ການແບ່ງປັນສື່ ແລະ ການແປພາສາທັນທີ.",
  alternates: {
    canonical: "/lo",
    languages: { en: "/", lo: "/lo", "x-default": "/" },
  },
};

export default function LaoHomePage() {
  return <HomeContent />;
}
