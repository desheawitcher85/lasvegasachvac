import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Anthem, Henderson, NV  -  Same-Day Service",
  description:
    "AC repair in Anthem. High-efficiency systems, same-day service. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/anthem/" },
};

const faqs = [
  {
    question: "How fast can you respond to an AC call in Anthem?",
    answer:
      "Standard calls are scheduled same-day. Emergency calls target 60 minutes. Anthem is in the southeast Henderson area and we cover it regularly. Calling in the morning gives you the best window for same-day service.",
  },
  {
    question: "Do you work on the high-efficiency systems common in Anthem?",
    answer:
      "Yes. Anthem homes from the 2000s and 2010s often have two-stage or variable-speed Carrier, Trane, or Lennox systems. These units have more electronic controls and communicating thermostats than basic builder-grade equipment. We have the diagnostic tools to work with them and know how to read the system fault codes.",
  },
  {
    question: "Which parts of Anthem do you serve?",
    answer:
      "Both sections: Anthem proper (the original development) and Anthem Country Club. We cover all of the southeast Henderson area including surrounding streets. If you have a Henderson address in the 89052 or 89044 zip code, we service it.",
  },
  {
    question: "My Anthem home has HOA rules about the AC unit location. Does that affect repairs?",
    answer:
      "HOA aesthetics rules typically apply to equipment visibility and placement, which matters for replacements and new installations. Most repairs don't move or add equipment, so HOA restrictions don't come into play. If you're doing a full system replacement and the new unit is a different size or footprint, that's when we'd account for HOA requirements.",
  },
  {
    question: "My Carrier or Trane system is about 15 years old. Is it worth repairing?",
    answer:
      "Depends on the repair. Capacitors, contactors, fan motors, and similar components are worth fixing on a 15-year-old high-quality system. A compressor on a 15-year-old system is a closer call. We'll give you the repair cost and a replacement estimate side by side and let you decide. There's no pressure to replace.",
  },
  {
    question: "Do you offer emergency AC service in Anthem on nights and weekends?",
    answer:
      "Yes. We dispatch 24/7 including holidays. After-hours service has a flat surcharge that we quote before sending anyone. Call anytime.",
  },
];

export default function AnthemPage() {
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
              { name: "Anthem", url: "/anthem/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Anthem, Henderson, NV"
        supporting="Same-day AC repair for Anthem homes. High-efficiency systems, two-stage and variable-speed equipment. Licensed, insured."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Anthem", href: "/anthem/" },
        ]}
        source="anthem"
        mapSrc="https://maps.google.com/maps?q=Anthem,+Henderson,+NV&output=embed&z=12"
      />

      {/* Serving Anthem */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Anthem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anthem is one of the better-built master-planned communities in Henderson. Homes from the early 2000s through 2015 were built with higher-end specifications than typical tract construction. The HVAC equipment reflects that. Carrier, Trane, and Lennox are the dominant brands here.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Those systems are now 10-20 years old, which is the range where repairs start coming up. High-efficiency two-stage and variable-speed units have more electronic components than single-stage equipment. When something goes wrong, it takes more than just checking a capacitor. You need test equipment and someone who knows how the controls talk to each other.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work on Anthem systems regularly and carry the diagnostic tools for the premium brands. Most repairs are done in one visit.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Anthem</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Anthem</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most frequent calls from Anthem involve two-stage systems that are no longer staging correctly. When the second stage stops engaging, the system runs constantly on low speed and can't keep up on a 110°F day. The cause is usually a control board issue, a bad thermostat communication wire, or a failed compressor contactor on the second stage. These are diagnosable and repairable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Refrigerant leaks at the service valves and flare fittings show up in systems that have had years of thermal expansion and contraction cycles. Anthem homes often have longer linesets because the equipment is tucked away from view per HOA requirements. Longer linesets mean more fittings and more potential leak points.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Variable-speed blower motors are another repair we see in newer Anthem systems. When the blower motor starts making noise or runs at the wrong speed, the system becomes inefficient and comfort drops. Motor replacements are typically same-day repairs if we have the part on the truck, which we do for the most common Carrier and Trane models.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Anthem?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
