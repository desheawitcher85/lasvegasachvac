import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Received  -  Vegas AC HVAC",
  description: "We received your request. A Vegas AC HVAC technician will call you shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Got it. We&apos;ll call you shortly.</h1>
        <p className="text-gray-600 mb-2">
          Your request came through. A technician will call you back, usually within 15 minutes during business hours.
        </p>
        <p className="text-gray-600 mb-8">
          If this is an emergency, don&apos;t wait — call us directly.
        </p>

        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 transition-colors text-lg mb-6"
        >
          <Phone className="w-5 h-5" />
          {siteConfig.phone}
        </a>

        <div>
          <Link href="/" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
