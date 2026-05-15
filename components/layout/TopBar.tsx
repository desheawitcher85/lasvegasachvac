"use client";

import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-white font-bold text-lg tracking-tight">
            {siteConfig.brandName}
          </Link>
          <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span>{siteConfig.reviewRating} / {siteConfig.reviewCount} reviews</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-xs text-gray-400">{siteConfig.hours}</span>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="text-red-400 font-bold text-base sm:text-lg hover:text-red-300 transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
