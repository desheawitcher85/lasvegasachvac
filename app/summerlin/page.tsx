import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, services } from "@/lib/siteConfig";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AC Repair in Summerlin, Las Vegas  -  Same-Day Service",
  description:
    "Same-day AC repair in Summerlin. Local technicians, 60-minute emergency response. Licensed, bonded, insured. Call (702) 930-3316.",
  alternates: { canonical: "/summerlin/" },
};

const faqs = [
  {
    question: "How fast can you get to Summerlin for an emergency?",
    answer:
      "For emergency calls, we target 60 minutes or less from the time you call. We keep technicians positioned in the western valley to cover Summerlin quickly. During peak summer months, call us early  -  wait times get longer by early afternoon.",
  },
  {
    question: "Which Summerlin neighborhoods do you serve?",
    answer:
      "All of them. The Trails, The Hills, The Vistas, The Willows, The Paseos, The Ridges, The Canyons, Downtown Summerlin area, and surrounding streets. If your address is in the 89117, 89134, 89135, 89138, or 89144 zip codes, we cover you.",
  },
  {
    question: "My home was built around 2010 and has a Carrier or Trane system. Can you repair it?",
    answer:
      "Yes. Carrier, Trane, and Lennox are the most common brands in Summerlin's newer construction, and our techs work on them every day. We stock the most common parts for those brands on our trucks. Newer high-SEER systems have more electronic controls than older units, but that's not a problem for us.",
  },
  {
    question: "Do you offer 24/7 emergency AC repair in Summerlin?",
    answer:
      "Yes. We dispatch around the clock. After-hours calls have a flat surcharge that we quote you before sending anyone. There are no hidden fees. If it's 2am and your AC is out, call us.",
  },
  {
    question: "My HOA has rules about where the AC unit can be placed. Does that affect the repair?",
    answer:
      "HOA placement rules affect installation and replacement, not most repairs. If we're doing a full unit replacement and relocating equipment, we'll work within whatever restrictions your HOA has set. Ask us when you call and we'll confirm the specifics for your community.",
  },
  {
    question: "Do you service all of the western Las Vegas valley, or just Summerlin proper?",
    answer:
      "We cover the broader western valley including Summerlin, the 215 beltway corridor, and areas toward Red Rock. If you're unsure whether your address is in our service area, call and give us your zip code. We'll tell you right away.",
  },
];

export default function SummerlinPage() {
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
              { name: "Summerlin", url: "/summerlin/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Summerlin, Las Vegas"
        supporting="Same-day AC repair for Summerlin homes. 60-minute emergency response. We work on Carrier, Trane, Lennox, and all major brands."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Summerlin", href: "/summerlin/" },
        ]}
        source="summerlin"
        mapSrc="https://maps.google.com/maps?q=Summerlin,+Las+Vegas,+NV&output=embed&z=12"
      />

      {/* Serving Summerlin */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Serving Summerlin</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Summerlin is one of the best-built communities in Las Vegas. The homes are newer, the systems are better, and the HOAs keep things looking sharp. But newer doesn't mean problem-free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Homes built between 2005 and 2020 are coming up on their first major service cycles. Capacitors go at 8-10 years. Contactor contacts pit and burn. Refrigerant lines develop micro-leaks at fittings. The Red Rock area also brings more dust than most people expect, and that dust packs into condenser coils and kills airflow.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We know the neighborhoods, the builder-spec equipment, and the HOA quirks. Call us when something goes wrong.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Services in Summerlin</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common HVAC Issues in Summerlin</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most common calls we get from Summerlin are capacitor failures. The high-SEER systems common in newer construction run harder in peak summer heat, and capacitors are usually the first component to go. If your system starts slowly, trips the breaker, or hums without fully starting, that's the first thing we check.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dirty coils are the second most frequent problem. Desert dust and the sandy soil near Red Rock Canyon make their way into condensers. A coil clogged with debris raises the refrigerant head pressure and makes the compressor work harder than it should. We see this in systems that have never been cleaned since installation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Refrigerant leaks show up in Summerlin homes around years 8-12. Vibration works loose the flare fittings on the lineset over time. Signs: ice on the lines, poor cooling even when the system runs all day, or a slight hissing sound near the air handler. Don't ignore it.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Need HVAC service in Summerlin?"
        sub={`Call ${siteConfig.phone} for same-day service. Available 24/7.`}
      />
    </>
  );
}
