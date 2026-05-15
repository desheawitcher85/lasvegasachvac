import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

interface CTAStripProps {
  heading?: string;
  sub?: string;
}

export default function CTAStrip({
  heading = "AC problem? We can help today.",
  sub = "Call now or fill out the form. Most calls answered in under 2 minutes.",
}: CTAStripProps) {
  return (
    <section className="bg-red-600 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold text-xl">{heading}</p>
          <p className="text-red-100 text-sm mt-1">{sub}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 bg-white text-red-600 font-semibold px-6 py-3 rounded hover:bg-red-50 transition-colors text-sm whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/get-a-quote/"
            className="bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition-colors text-sm text-center whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
