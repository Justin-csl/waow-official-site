import type { Metadata } from "next";
import { SecurityPageContent } from "../../security/content";

export const metadata: Metadata = {
  title: "ແຊັດລາວສ່ວນຕົວ ແລະ ປອດໄພດ້ວຍ Waow",
  description: "ຮຽນຮູ້ວິທີທີ່ Waow ປົກປ້ອງຂໍ້ຄວາມສ່ວນຕົວ ແລະ ກຸ່ມ ດ້ວຍການເຂົ້າລະຫັດ, ລັອກແຊັດ ແລະ ຄວາມປອດໄພຂອງອຸປະກອນ.",
  alternates: {
    canonical: "/lo/security",
    languages: { en: "/security", lo: "/lo/security", "x-default": "/security" },
  },
};

export default function LaoSecurityPage() {
  return <SecurityPageContent />;
}
