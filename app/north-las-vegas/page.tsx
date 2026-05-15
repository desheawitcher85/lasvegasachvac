import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in North Las Vegas  -  Same-Day Service",
  description:
    "Same-day AC repair in North Las Vegas. Aliante, Centennial Hills, and surrounding areas. Licensed, insured. Call (702) 930-3316.",
  alternates: { canonical: "/north-las-vegas/" },
};

const faqs = [
  {
    question: "How fast can you get to North Las Vegas?",
    answer:
      "Same-day service is available for standard calls. Emergency response targets 60 minutes. We run routes through North Las Vegas regularly and can usually get someone out quickly. Calling before noon gives you the best chance of a morning or early-afternoon appointment.",
  },
  {
    question: "Which North Las Vegas neighborhoods do you cover?",
    answer:
      "Aliante, the older established areas near downtown North Las Vegas, Deer Springs, and surrounding streets. We also cover the Centennial Hills area in the northwest, which many North Las Vegas residents use as a reference point. If you have a North Las Vegas address, call and give us your zip code.",
  },
  {
    question: "My home in North Las Vegas is newer construction. Do you work on those systems?",
    answer:
      "Yes. Aliante and other newer North Las Vegas developments have builder-spec systems from Carrier, Goodman, and Rheem installed in the 2010s and later. These are straightforward to work on. We stock the most common parts for those brands and handle most repairs in a single visit.",
  },
  {
    question: "Do you offer emergency service in North Las Vegas on nights and weekends?",
    answer:
      "Yes. We dispatch around the clock, every day of the year. After-hours calls have a flat surcharge that we tell you before we send anyone. No surprises.",
  },
  {
    question: "What is the diagnostic fee and is it worth it?",
    answer:
      "The diagnostic fee gets a technician to your door with test equipment to find out exactly what's wrong. You get a complete repair quote before any work starts. The fee is waived when you approve the repair. Most customers find it worth it because guessing on parts is usually more expensive.",
  },
  {
    question: "Do you service older homes with older AC systems in North Las Vegas?",
    answer:
      "Yes. The older neighborhoods near downtown North Las Vegas have homes from the 1970s through 1990s with aging systems. We work on older equipment and will be straight with you about whether a repair is cost-effective. If a system is too far gone, we'll tell you and give you installation pricing.",
  },
];

export default function NorthLasVegasPage() {
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
              { name: "North Las Vegas", url: "/north-las-vegas/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in North Las Vegas"
        supporting="Same-day AC repair across North Las Vegas. Aliante, Deer Springs, and surrounding areas. All makes and models."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "North Las Vegas", href: "/north-las-vegas/" },
        ]}
        source="north-las-vegas"
        mapSrc="https://maps.google.com/maps?q=North+Las+Vegas,+NV&output=embed&z=12"
      />

      {/* Serving North Las Vegas */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving North Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            North Las Vegas has been growing fast. Aliante brought in a wave of newer construction in the 2000s and 2010s. The older parts of the city near downtown NLV have homes from the 1970s and 1980s. You get both extremes on the same service route.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Newer homes in Aliante are hitting the 10-15 year mark, which is when capacitors, contactors, and fan motors start to wear. It's not a crisis, but it's the maintenance window you don't want to ignore during summer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Older homes have older systems. Some of them are still on R-22 refrigerant, which is no longer manufactured and has gotten expensive to recharge. We work on all of it and give you straight answers about what makes financial sense.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in North Las Vegas</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in North Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In newer Aliante homes, the most common calls are capacitor and contactor failures on systems that are 10-15 years old. These are normal wear parts that take a beating in the desert heat. A capacitor replacement is a quick repair. A bad contactor is equally straightforward. Both are affordable fixes that extend the life of an otherwise solid system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the older parts of North Las Vegas, we see more refrigerant leaks, cracked drain pans, and corroded electrical connections. Ductwork in some of the older homes is undersized or improperly sealed, which causes comfort problems even when the equipment is working fine.
          </p>
          <p className="text-gray-700 leading-relaxed">
            North Las Vegas sits at a slightly higher elevation and can get more wind-driven dust than the central valley. That dust loads up condenser coils faster. If your system hasn't had a coil cleaning in more than two years, that alone could be causing cooling problems.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in North Las Vegas?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
