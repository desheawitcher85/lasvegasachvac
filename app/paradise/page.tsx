import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Paradise, NV  -  Same-Day Service",
  description:
    "Same-day AC repair in Paradise, NV. Las Vegas Strip corridor, residential and commercial HVAC service. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/paradise/" },
};

const faqs = [
  {
    question: "How fast can you respond to an AC call in Paradise?",
    answer:
      "Paradise is central to the valley and easy to reach. Standard calls are scheduled same-day. Emergency response targets 60 minutes. The central location means we can usually get there fast.",
  },
  {
    question: "Do you service commercial properties in Paradise?",
    answer:
      "Yes. We service commercial HVAC systems including rooftop package units, split systems, and light commercial equipment. Paradise has a high density of commercial properties given the proximity to the Strip. We handle diagnostics, repair, and preventive maintenance contracts for commercial customers.",
  },
  {
    question: "What neighborhoods in Paradise do you cover?",
    answer:
      "All of Paradise: the residential areas east and south of the Strip, the University District near UNLV, Whitney, and the surrounding unincorporated streets. If your address is in Paradise, NV, we cover it.",
  },
  {
    question: "My home was built in the 1960s or 1970s. Can you repair it?",
    answer:
      "Yes. Paradise has some of the older mid-century housing stock in the valley. We work on older equipment. Some of those homes still have R-22 systems that have been repaired multiple times. We'll assess honestly and let you know whether repair or replacement is the better call for where your system is in its life.",
  },
  {
    question: "Do you work on weekends and after hours in Paradise?",
    answer:
      "Yes. We dispatch 24/7, every day of the year. After-hours calls carry a flat surcharge that we quote before sending anyone. No hidden fees.",
  },
  {
    question: "Is the diagnostic fee charged for commercial calls too?",
    answer:
      "Commercial diagnostics are priced separately and depend on the scope of the equipment. Call us and describe the system. We'll give you a clear answer on the diagnostic cost before we schedule anything.",
  },
];

export default function ParadisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Paradise", url: "/paradise/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Paradise, NV"
        supporting="Same-day AC repair for residential and commercial properties in Paradise. All makes and models. 24/7 service."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Paradise", href: "/paradise/" },
        ]}
        source="paradise"
        mapSrc="https://maps.google.com/maps?q=Paradise,+NV&output=embed&z=12"
      />

      {/* Serving Paradise */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Paradise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most people don't realize it, but the Las Vegas Strip is technically in Paradise, not the City of Las Vegas. Paradise is an unincorporated area that covers a dense corridor of residential neighborhoods, hotels, and commercial properties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The residential areas of Paradise are a mix of older mid-century homes and newer infill construction. Housing stock from the 1960s and 1970s is common, especially in the neighborhoods east of the Strip. Some of those homes have been updated with modern systems. Others are still running older equipment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Commercial HVAC demand in this area is high. Restaurants, retail spaces, and hospitality properties need reliable cooling year-round. We work on both residential and light commercial equipment and can set up preventive maintenance contracts for commercial customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Paradise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="border border-gray-200 rounded p-4 bg-white hover:border-red-300 transition-colors block"
              >
                <p className="font-semibold text-gray-900 mb-1">{s.name}</p>
                <p className="text-gray-600 text-xs">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common HVAC issues */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Paradise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the older homes east and south of the Strip, we see aging equipment with refrigerant leaks, failing compressors, and ductwork that hasn't been touched in 20 years. Some properties still have R-22 systems. When those start needing frequent refrigerant top-offs, it's time to have an honest conversation about replacement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            For commercial properties, rooftop package units are the most common setup. These units take a beating in desert heat with no shade and no maintenance in some cases. The most frequent commercial calls we get are failed capacitors, dirty condenser coils, and refrigerant leaks at fittings that have been vibrating for years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The density of Paradise means ductwork on older properties is sometimes shared between units or poorly routed. If you're getting uneven cooling in different rooms or units, the duct system is usually where to look first.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Paradise?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
