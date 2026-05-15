import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Enterprise, NV  -  Same-Day Service",
  description:
    "Same-day AC repair in Enterprise, NV. Mountain's Edge, Silverado Ranch, and surrounding areas. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/enterprise/" },
};

const faqs = [
  {
    question: "How fast can you get to Enterprise for an emergency?",
    answer:
      "Emergency calls in Enterprise target a 60-minute response. We cover the south valley regularly. During summer peak hours, call early in the day for the fastest response. We dispatch 24 hours a day.",
  },
  {
    question: "Which Enterprise neighborhoods do you serve?",
    answer:
      "Mountain's Edge, Silverado Ranch, Rhodes Ranch, and the surrounding south valley. Enterprise is a large area. If you're not sure whether your address is covered, call and give us your zip code. We'll confirm right away.",
  },
  {
    question: "My home in Mountain's Edge is about 12 years old. What repairs should I expect?",
    answer:
      "Homes from 2010-2015 are hitting the window where capacitors, contactors, and fan motors start to wear. These are normal mid-life repairs. Neither should catch you off guard if you're watching for symptoms: slow starts, loud humming, or the system tripping the breaker. Call for a quote if you run into any of these.",
  },
  {
    question: "Does the south valley heat make AC systems fail faster?",
    answer:
      "Yes. The south valley gets some of the highest ambient temperatures in the metro area. Outdoor condensers running against 115°F ambient air work significantly harder than manufacturers' test conditions. Capacitors and compressors see shorter lifespans here than the spec sheet suggests. It's not a flaw in the equipment. It's just physics.",
  },
  {
    question: "Do you work on all brands common in Enterprise?",
    answer:
      "Yes. Goodman, Carrier, Rheem, Trane, Lennox, American Standard, York, and Bryant. Builder-spec equipment in Mountain's Edge and Silverado Ranch is usually Goodman or Rheem. We stock those parts and handle most repairs same-day.",
  },
  {
    question: "What happens if my system can't be repaired the same day?",
    answer:
      "If we need to order a part, we'll tell you the timeline upfront. Most common parts arrive next day. For compressor replacements, plan on 2-3 days. We'll be honest about the wait and won't leave you without options.",
  },
];

export default function EnterprisePage() {
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
              { name: "Enterprise", url: "/enterprise/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Enterprise, Las Vegas"
        supporting="Same-day AC repair for Enterprise homes. Mountain's Edge, Silverado Ranch, and surrounding areas. 60-minute emergency response."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Enterprise", href: "/enterprise/" },
        ]}
        source="enterprise"
        mapSrc="https://maps.google.com/maps?q=Enterprise,+NV&output=embed&z=12"
      />

      {/* Serving Enterprise */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Enterprise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enterprise is one of the fastest-growing parts of the Las Vegas valley. Mountain's Edge and Silverado Ranch brought in thousands of homes starting in the mid-2000s. Most of that construction used builder-grade equipment that's now hitting or approaching its first major service cycle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The south valley location is no small factor. Enterprise sits in one of the hotter parts of the metro area. Condensers work longer hours and against higher ambient temperatures than systems in the central or northern valley. That accelerates wear on capacitors, contactors, and eventually compressors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We know what breaks in south valley homes and we stock the parts to fix it. Most Enterprise calls are handled in a single visit.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Enterprise</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Enterprise</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Capacitor failure is the most common call in Enterprise. Builder-spec capacitors in homes from 2005-2015 have a rated life of 10-15 years under normal conditions. South valley heat cuts that down. If your system hums but doesn't start, clicks without turning on, or trips the breaker repeatedly, a bad capacitor is the first thing to check.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dirty condenser coils are the second most common issue. The desert dust in the south valley is fine-grained and packs into coil fins quickly. A clogged condenser raises head pressure, forces the compressor to work harder, and eventually causes shutdown on high-pressure safety. Annual coil cleaning prevents most of this.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Homes in Mountain's Edge with two-story layouts sometimes have comfort imbalance between floors. The upstairs stays hot even when the thermostat is set low. That's usually a duct balance issue or an undersized return, not a system failure. We can diagnose it and explain your options.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Enterprise?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
