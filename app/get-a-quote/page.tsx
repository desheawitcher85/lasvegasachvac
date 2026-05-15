import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import QuoteForm from "@/components/blocks/QuoteForm";
import { Phone, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Free HVAC Quote  -  Vegas AC HVAC Las Vegas",
  description:
    "Get a free same-day quote from Vegas AC HVAC. AC repair, installation, emergency service. Call (702) 930-3316 or fill out the form.",
  alternates: { canonical: "/get-a-quote/" },
};

export default function GetAQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Get a Quote", url: "/get-a-quote/" },
            ])
          ),
        }}
      />

      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Get a Quote</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Get a Free Same-Day Quote</h1>
          <p className="text-gray-600">
            Fill out the form below or call us directly. Most calls answered in under 2 minutes.
          </p>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <div className="border border-gray-200 rounded p-6 bg-gray-50">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Tell Us What's Going On</h2>
                <p className="text-sm text-gray-500 mb-5">
                  The more detail you provide, the better we can prepare for your service visit.
                </p>
                <QuoteForm source="get-a-quote" mode="full" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded p-5 bg-white">
                <p className="font-semibold text-gray-900 mb-3 text-sm">Prefer to call?</p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-red-600 font-bold text-lg hover:text-red-700 mb-2"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <p className="text-xs text-gray-500">Answered 24/7. Emergency dispatch available.</p>
              </div>

              <div className="border border-gray-200 rounded p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">What to Expect</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">1.</span>
                    We'll call within 15 minutes during business hours
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">2.</span>
                    Confirm the issue and schedule your appointment
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">3.</span>
                    Tech arrives same day in 95%+ of cases
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">4.</span>
                    Diagnostic, price quote, then work starts
                  </li>
                </ol>
              </div>

              <div className="border border-gray-200 rounded p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Why Us</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-red-600 flex-shrink-0" />
                    Licensed, bonded &amp; insured
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-red-600 flex-shrink-0" />
                    Available 24/7 for emergencies
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-red-600 flex-shrink-0" />
                    Up-front pricing before any work starts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
