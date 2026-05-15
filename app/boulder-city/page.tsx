import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Boulder City, NV  -  Same-Day Service",
  description:
    "AC repair in Boulder City. Near Lake Mead. Older homes, same-day service, 90-minute emergency response. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/boulder-city/" },
};

const faqs = [
  {
    question: "How long does it take to get to Boulder City for an emergency?",
    answer:
      "Boulder City is about 25-30 miles southeast of Henderson. We target a 90-minute emergency response for Boulder City calls. It's a longer drive than the main valley, but we do make the trip. Call as early as possible during summer  -  morning calls get priority scheduling.",
  },
  {
    question: "Do you actually service Boulder City, or is it too far out?",
    answer:
      "We service Boulder City. It's farther than Henderson or the Strip corridor, so we factor in travel time on scheduling. Standard non-emergency calls are available same-day or next-day depending on the schedule. Emergency calls are prioritized.",
  },
  {
    question: "My home in Boulder City was built in the 1970s. Can you repair it?",
    answer:
      "Yes. Boulder City has a lot of older housing stock and we work on older equipment routinely. That era often means R-22 refrigerant, older compressors with a lot of runtime, and ductwork that's never been checked. We'll assess what you have and give you a straight read on repair vs. replacement.",
  },
  {
    question: "My system uses R-22 refrigerant. Is that a problem?",
    answer:
      "R-22 is no longer manufactured and the supply is limited, which makes it expensive. A recharge is still possible and sometimes makes sense for a short-term fix. But if the system is leaking regularly or the compressor is showing signs of wear, replacement is usually the better long-term call. We'll give you the numbers on both.",
  },
  {
    question: "Do you offer 24/7 emergency service in Boulder City?",
    answer:
      "Yes. We dispatch around the clock. The 90-minute response estimate applies to emergency calls. After-hours service has a flat surcharge we quote upfront. Call anytime.",
  },
  {
    question: "What kinds of repairs are most common in Boulder City homes?",
    answer:
      "Given the age of most Boulder City housing, we see a lot of refrigerant leaks, aging compressors, and failed capacitors on older systems. Ductwork issues are also common in the older homes. We also see thermostat wiring problems in homes where the HVAC has been upgraded but the old wiring wasn't replaced.",
  },
];

export default function BoulderCityPage() {
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
              { name: "Boulder City", url: "/boulder-city/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Boulder City, NV"
        supporting="AC repair for Boulder City homes near Lake Mead. Older systems welcome. 90-minute emergency response."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Boulder City", href: "/boulder-city/" },
        ]}
        source="boulder-city"
        mapSrc="https://maps.google.com/maps?q=Boulder+City,+NV&output=embed&z=12"
      />

      {/* Serving Boulder City */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Boulder City</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Boulder City is different from the rest of the Las Vegas valley. No casinos, controlled growth, and a housing stock that goes back to the Hoover Dam construction era. Many homes here were built in the 1960s, 1970s, and 1980s. Some have had the same HVAC equipment for 20-plus years.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Getting out to Boulder City takes more time than hitting Henderson or the Strip corridor, so we plan routes accordingly. We're honest about that. Emergency calls get 90-minute response targets. Non-emergency calls can typically be scheduled same-day or next-day.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have an older system and aren't sure whether to repair it or replace it, we'll give you real numbers and a straight opinion. We don't push replacements when a repair makes sense.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Boulder City</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Boulder City</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Older homes in Boulder City often have R-22 systems that have been patched and recharged multiple times. When a system needs refrigerant more than once every two to three years, there's a leak somewhere. We find it, fix it if it's accessible, and give you an honest assessment if the leak is in the coil and makes replacement a better option.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Compressor issues are common in systems that are 20-plus years old. Heat and runtime hours add up. A system that was installed in the 1990s and has run every summer in Nevada has seen a lot of cycles. When a compressor is failing, we'll tell you what it costs to replace it versus what a new system costs, and let you make the call.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Lake Mead proximity brings some humidity during monsoon season, which is unusual for desert HVAC. If your evaporator coil is freezing or your drain line is backing up, that moisture is part of the equation. We know what to look for.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Boulder City?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
