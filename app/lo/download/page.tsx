import type { Metadata } from "next";
import { DownloadPageContent } from "../../download/content";

export const metadata: Metadata = {
  title: "ດາວໂຫຼດ Waow — ແອັບແຊັດລາວສຳລັບ iPhone ແລະ iPad",
  description: "ດາວໂຫຼດ Waow, ແອັບແຊັດລາວ ແລະ ແອັບສົ່ງຂໍ້ຄວາມສຳລັບ iPhone ແລະ iPad ຫຼື ໃຊ້ຜ່ານເວັບ.",
  alternates: {
    canonical: "/lo/download",
    languages: { en: "/download", lo: "/lo/download", "x-default": "/download" },
  },
};

export default function LaoDownloadPage() {
  return <DownloadPageContent />;
}
