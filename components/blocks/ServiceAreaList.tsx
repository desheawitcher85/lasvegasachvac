import Link from "next/link";
import { MapPin } from "lucide-react";
import { neighborhoods } from "@/lib/siteConfig";

export default function ServiceAreaList() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Areas</h2>
        <p className="text-gray-600 mb-8 text-sm">
          We serve Las Vegas and all surrounding communities. Same-day service in most areas.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/${n.slug}/`}
              className="flex items-center gap-2 border border-gray-200 rounded p-4 bg-white hover:border-red-300 hover:text-red-600 transition-colors group"
            >
              <MapPin className="w-4 h-4 text-gray-400 group-hover:text-red-500 flex-shrink-0 transition-colors" />
              <span className="font-medium text-gray-700 group-hover:text-red-600 text-sm transition-colors">
                {n.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
