import type { Metadata } from "next";
import { FeaturesPageContent } from "../../features/content";

export const metadata: Metadata = {
  title: "ຟີເຈີແຊັດລາວ: ແຊັດກຸ່ມ, ໂທສຽງ ແລະ ໂທວິດີໂອ",
  description: "ສຳຫຼວດການສົ່ງຂໍ້ຄວາມສ່ວນຕົວ, ແຊັດກຸ່ມ, ໂທສຽງ, ໂທວິດີໂອ, ສື່ ແລະ ການແປຂໍ້ຄວາມໃນ Waow.",
  alternates: {
    canonical: "/lo/features",
    languages: { en: "/features", lo: "/lo/features", "x-default": "/features" },
  },
};

export default function LaoFeaturesPage() {
  return <FeaturesPageContent />;
}
