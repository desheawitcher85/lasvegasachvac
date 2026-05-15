import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Spring Valley, Las Vegas  -  Same-Day Service",
  description:
    "Same-day AC repair in Spring Valley. Local HVAC technicians, same-day service. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/spring-valley/" },
};

const faqs = [
  {
    question: "How fast can you get to Spring Valley?",
    answer:
      "Spring Valley is central to our service area. Standard calls are typically scheduled same-day. Emergency response targets 60 minutes or less. The mid-valley location means we can route technicians to you quickly from multiple directions.",
  },
  {
    question: "Do you service apartments and condos in Spring Valley, or just houses?",
    answer:
      "Both. We work on single-family homes, townhomes, condos, and apartment units. For apartment repairs, we may need to confirm access with building management before we arrive. Let us know the property type when you call.",
  },
  {
    question: "My Spring Valley home was built in the 1990s. Can you work on that older equipment?",
    answer:
      "Yes. We work on systems from any era. Homes from the 1980s through early 2000s often have older R-22 systems or units that have been repaired multiple times. We'll assess the condition and give you an honest opinion on whether repair or replacement makes more sense at this stage of the system's life.",
  },
  {
    question: "Do you offer after-hours and weekend AC repair in Spring Valley?",
    answer:
      "Yes. We run 24/7, including weekends and holidays. After-hours calls have a flat surcharge we quote before dispatching. Call anytime.",
  },
  {
    question: "What types of problems do you fix on the first visit?",
    answer:
      "Capacitor failures, contactor replacements, refrigerant recharges, fan motor replacements, thermostat wiring, and most control board issues are all handled the same day. We carry common parts on the truck for all major brands. The only repairs that typically require a follow-up are major component orders like compressors.",
  },
  {
    question: "How much does AC repair cost in Spring Valley?",
    answer:
      "Pricing varies by repair type and system. Call for a quote before we do anything.",
  },
];

export default function SpringValleyPage() {
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
              { name: "Spring Valley", url: "/spring-valley/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Spring Valley, Las Vegas"
        supporting="Same-day AC repair for homes and apartments in Spring Valley. All makes and models. Up-front pricing."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Spring Valley", href: "/spring-valley/" },
        ]}
        source="spring-valley"
        mapSrc="https://maps.google.com/maps?q=Spring+Valley,+Las+Vegas,+NV&output=embed&z=12"
      />

      {/* Serving Spring Valley */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Spring Valley</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spring Valley is an established, densely-built community in the western Las Vegas valley. It has a mix of single-family homes from the 1980s and 1990s, newer construction from the 2000s, and a lot of apartment and condo buildings. That variety means the HVAC equipment we see varies widely on a single service day.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Older homes have older systems. Some are still running R-22 refrigerant. Some have had three or four owners and the maintenance history is unclear. We run diagnostics on all of it and give you the full picture before recommending anything.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you're in an apartment or condo, we can work with your building's access requirements. Just let us know when you call.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Spring Valley</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Spring Valley</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the older Spring Valley homes from the 1980s and 1990s, we see the full range of aging system problems: refrigerant leaks, failing compressors, corroded electrical connections, and ductwork that's starting to delaminate or pull apart at the seams. These are systems that have run hard for a long time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Mid-age systems from the 2000s are hitting the point where capacitors and contactors fail regularly. A system that's 15-20 years old is going to need a repair every year or two. That's normal wear. We'll fix what's broken and flag anything else that's close to failing so you can plan ahead.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In multi-family buildings, the most common call we get is a package unit on the roof that's overheating in summer. Rooftop units get no shade and face extreme thermal loads. Coil cleaning and good preventive maintenance keep those units running longer.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Spring Valley?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
