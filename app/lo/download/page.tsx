import type { Metadata } from "next";
import { DownloadPageContent } from "../../download/content";

export const metadata: Metadata = {
  title: "ດາວໂຫຼດ",
  description: "ດາວໂຫຼດແອັບສົນທະນາ Waow ສຳລັບ iPhone ແລະ iPad ຫຼື ໃຊ້ Waow ຜ່ານເວັບ.",
  alternates: {
    canonical: "/lo/download",
    languages: { en: "/download", lo: "/lo/download", "x-default": "/download" },
  },
};

export default function LaoDownloadPage() {
  return <DownloadPageContent />;
}
