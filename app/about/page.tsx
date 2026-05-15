import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import CTAStrip from "@/components/blocks/CTAStrip";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Vegas AC HVAC  -  Las Vegas HVAC Company",
  description:
    "Vegas AC HVAC serves Las Vegas, Henderson, and Summerlin. Licensed, bonded, insured. Local technicians, no call centers. Learn more about our team and service area.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about/" },
            ])
          ),
        }}
      />

      {/* Page heading */}
      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">About</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">About Vegas AC HVAC</h1>
          <p className="text-gray-600">Serving the Las Vegas valley.</p>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vegas AC HVAC was built with a straightforward goal: give Las Vegas homeowners a local HVAC option that shows up, does honest work, and charges a fair price.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                No call centers. No subcontractors. When you call, a local technician picks up the phone and comes out. We have a small team of licensed technicians who know the Las Vegas market and the specific ways Vegas climate beats up AC equipment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do residential AC repair, new system installation, commercial HVAC, mini splits, thermostat installs, and furnace work. Everything in the HVAC category for homes and businesses across the valley.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're not the largest company in Las Vegas. We're the one that answers the phone at 11pm in July when your AC stops working and your family is trying to sleep in 90-degree heat.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Work</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every service call starts with a diagnostic. We find the problem and give you a full price before any work starts. You decide whether to proceed. No pressure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The diagnostic fee is waived if you proceed with the repair. If you decide not to repair, you pay the diagnostic fee and we shake hands. No hard feelings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All repairs carry a 1-year parts warranty and 90-day labor warranty. New installations come with manufacturer warranty plus our installation warranty. We put everything in writing.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Area</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We cover the full Las Vegas valley including Las Vegas, Henderson, Summerlin, North Las Vegas, Spring Valley, Enterprise, Paradise, Boulder City, and Anthem.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Emergency calls get 60-minute response in Las Vegas, Henderson, Summerlin, and Paradise. Outlying areas like Boulder City and North Las Vegas are 90 minutes.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-gray-200 rounded p-5 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-4">At a Glance</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Hours</dt>
                    <dd className="font-medium text-gray-900">{siteConfig.hours}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Phone</dt>
                    <dd>
                      <a href={`tel:${siteConfig.phoneRaw}`} className="font-medium text-red-600 hover:text-red-700">
                        {siteConfig.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Reviews</dt>
                    <dd className="font-medium text-gray-900">
                      {/* TODO: Replace with real review count and link */}
                      {siteConfig.reviewRating} / {siteConfig.reviewCount} reviews
                    </dd>
                  </div>

                </dl>
              </div>

              <div className="border border-gray-200 rounded p-5 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-4">Certifications</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    Nevada State Contractor License
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    EPA 608 Certified (refrigerant handling)
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    Bonded and insured
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    Workers compensation coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Questions? We're easy to reach."
        sub={`Call ${siteConfig.phone} or fill out the quote form. We pick up 24/7.`}
      />
    </>
  );
}
