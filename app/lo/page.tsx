import type { Metadata } from "next";
import { HomeContent } from "../home-content";

export const metadata: Metadata = {
  title: { absolute: "Waow — ແອັບແຊັດລາວ ແລະ ແອັບສົ່ງຂໍ້ຄວາມ" },
  description:
    "Waow ແມ່ນແອັບແຊັດລາວ ສຳລັບສົ່ງຂໍ້ຄວາມສ່ວນຕົວ, ແຊັດກຸ່ມ, ໂທສຽງ, ໂທວິດີໂອ ແລະ ແປຂໍ້ຄວາມລະຫວ່າງພາສາລາວກັບອັງກິດ.",
  alternates: {
    canonical: "/lo",
    languages: { en: "/", lo: "/lo", "x-default": "/" },
  },
};

export default function LaoHomePage() {
  return <HomeContent />;
}
