"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 md:hidden bg-red-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors"
      aria-label={`Call ${siteConfig.brandName}`}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
