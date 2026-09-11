import type { Metadata } from "next";
import { FeaturesPageContent } from "../../features/content";

export const metadata: Metadata = {
  title: "ຄຸນສົມບັດ",
  description: "ສຳຫຼວດການສົນທະນາທີ່ເຂົ້າລະຫັດ, ການໂທ, ກຸ່ມ, ການແບ່ງປັນສື່ ແລະ ການແປພາສາລາວທັນທີໃນ Waow.",
  alternates: {
    canonical: "/lo/features",
    languages: { en: "/features", lo: "/lo/features", "x-default": "/features" },
  },
};

export default function LaoFeaturesPage() {
  return <FeaturesPageContent />;
}
