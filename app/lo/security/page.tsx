import type { Metadata } from "next";
import { SecurityPageContent } from "../../security/content";

export const metadata: Metadata = {
  title: "ຄວາມປອດໄພ",
  description: "ຮຽນຮູ້ວິທີທີ່ Waow ປົກປ້ອງບັນຊີ, ອຸປະກອນ ແລະ ການສົນທະນາສ່ວນຕົວຂອງທ່ານ.",
  alternates: {
    canonical: "/lo/security",
    languages: { en: "/security", lo: "/lo/security", "x-default": "/security" },
  },
};

export default function LaoSecurityPage() {
  return <SecurityPageContent />;
}
