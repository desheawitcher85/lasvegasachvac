import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Henderson, NV  -  Same-Day Service",
  description:
    "Same-day AC repair in Henderson. Green Valley, Anthem, Lake Las Vegas. Licensed technicians, 24/7 emergency service. Call (702) 930-3316.",
  alternates: { canonical: "/henderson/" },
};

const faqs = [
  {
    question: "How fast can you respond to a call in Henderson?",
    answer:
      "Standard service calls are scheduled same-day in most cases. Emergency calls target a 60-minute response. We have technicians working the southeast valley regularly, so Henderson is well-covered. During summer peaks, calling in the morning gets you faster service.",
  },
  {
    question: "Which Henderson areas do you cover?",
    answer:
      "All of Henderson: Green Valley, Anthem, Lake Las Vegas, MacDonald Ranch, Tuscany Village, Seven Hills, Whitney Ranch, Cadence, and surrounding neighborhoods. If you have a Henderson address, we service it.",
  },
  {
    question: "My Green Valley home is from the early 1990s. Can you still fix the AC?",
    answer:
      "Yes. Older Green Valley homes often have R-22 systems that are 15-25 years old. We service older equipment and can advise you honestly on whether a repair makes sense or if replacement is a better use of your money. R-22 refrigerant is expensive now, but a recharge is still sometimes the right call for a short-term fix.",
  },
  {
    question: "Do you offer 24/7 emergency AC repair in Henderson?",
    answer:
      "Yes. We respond around the clock, including weekends and holidays. After-hours service has a flat surcharge that we quote upfront before dispatching. Call anytime.",
  },
  {
    question: "What does the diagnostic fee cover?",
    answer:
      "The tech arrives, runs a full system check, identifies the problem, and gives you a complete repair quote before touching anything. The diagnostic fee is waived when you approve the repair. You only pay it if you decide not to repair.",
  },
  {
    question: "What warranty do you offer on repairs?",
    answer:
      "Parts are under a 1-year manufacturer warranty. Our labor is warranted for 90 days. If the same problem comes back within those windows, we return at no charge.",
  },
];

export default function HendersonPage() {
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
              { name: "Henderson", url: "/henderson/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Henderson, NV"
        supporting="Same-day AC repair across Henderson. Green Valley, Anthem, Lake Las Vegas. We work on all makes and models."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Henderson", href: "/henderson/" },
        ]}
        source="henderson"
        mapSrc="https://maps.google.com/maps?q=Henderson,+NV&output=embed&z=12"
      />

      {/* Serving Henderson */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Henderson</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Henderson is a mixed bag when it comes to HVAC equipment. Green Valley's original neighborhoods have homes from the late 1980s and early 1990s. Many of those still have R-22 systems that are running on borrowed time. Anthem and MacDonald Ranch have newer construction with higher-efficiency equipment. Lake Las Vegas has custom homes with high-end brands and complex zoning setups.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We work across all of it. Whether your system is a 20-year-old Goodman in Green Valley or a newer Trane variable-speed unit in Anthem Country Club, we can diagnose it and fix it the same day in most cases.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Henderson's southeast location means it gets some of the hottest ambient temperatures in the valley. Systems here work hard from April through October. Regular maintenance helps, but eventually something breaks.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Henderson</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Henderson</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In older Green Valley homes, we see a lot of aging R-22 systems with refrigerant leaks, worn compressors, and cracked heat exchangers in the furnace. When an R-22 system starts losing refrigerant regularly, the repair math often stops making sense. We'll give you honest numbers on both options.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Anthem and MacDonald Ranch, the calls are typically capacitors, contactors, and the occasional control board issue. These are mid-life repairs on 10-15 year old systems. Not cheap, but a lot less than a full replacement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lake Las Vegas homes sometimes have two-stage or variable-speed systems with more complex diagnostics. We bring the right test equipment and know how to read the fault codes on the more advanced units.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Henderson?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
