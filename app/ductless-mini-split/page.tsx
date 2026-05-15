import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Ductless Mini Split Installation Las Vegas  -  Garage, ADU, Addition",
  description:
    "Ductless mini split installation in Las Vegas for garages, additions, and casitas. Single-zone and multi-zone. Mitsubishi, Daikin, LG, Fujitsu. Call (702) 930-3316.",
  alternates: { canonical: "/ductless-mini-split/" },
};

const faqs = [
  {
    question: "How much does a mini split cost in Las Vegas?",
    answer:
      "Cost varies by the number of zones, equipment brand, and installation complexity. Call us for a free estimate.",
  },
  {
    question: "What's the best mini split brand?",
    answer:
      "Mitsubishi and Daikin consistently top reliability rankings. LG and Fujitsu are solid mid-tier options. We stock parts for all four brands locally, which matters for repair turnaround if something needs attention later.",
  },
  {
    question: "Can a mini split cool a Las Vegas garage?",
    answer:
      "Yes, and this is the most common mini split job we do. A 1.5 or 2-ton single-zone mini split can handle a typical 2-car garage in Las Vegas summer heat. We size based on garage square footage and insulation.",
  },
  {
    question: "Do mini splits need ductwork?",
    answer:
      "No. That's the whole point. The indoor head mounts on the wall, a small conduit runs through the wall to the outdoor compressor, and that's it. No ductwork, no major construction.",
  },
  {
    question: "Can I add a mini split to one room without replacing my whole system?",
    answer:
      "Yes. This is common for rooms that don't cool well from the main system, like a converted garage, a rear addition, or a bonus room with high heat gain.",
  },
  {
    question: "Do mini splits qualify for any rebates?",
    answer:
      "High-efficiency mini splits may qualify for NV Energy rebates and federal tax credits under the IRA. Ask when you call for a quote.",
  },
];

export default function MiniSplitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Ductless Mini Split Installation", "ductless-mini-split", "Single and multi-zone ductless mini split installation for garages, additions, and Las Vegas homes without ductwork.")
          ),
        }}
      />
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
              { name: "Ductless Mini Split", url: "/ductless-mini-split/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="Ductless Mini Split Installation in Las Vegas"
        supporting="Single-zone and multi-zone mini splits for additions, garages, and converted spaces."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Ductless Mini Split", href: "/ductless-mini-split/" },
        ]}
        source="ductless-mini-split"
      />

      {/* When mini splits make sense */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When a Mini Split Is the Right Choice</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { use: "Garage cooling", detail: "The most common Vegas mini split job. A 2-car garage in 110°F heat needs dedicated cooling  -  the main system can't reach it." },
              { use: "ADU or casita", detail: "Detached or attached guest units often lack ductwork. A mini split handles them cleanly without extending the main system." },
              { use: "Sunroom or addition", detail: "Additions added after the original build often don't have ducts. A mini split is faster and cheaper than duct extension." },
              { use: "Older home without ductwork", detail: "Some older Vegas homes were built without central air. Mini splits add AC without the major construction of ductwork." },
              { use: "One room that doesn't cool well", detail: "If one bedroom or office is always hot, a single-zone mini split can fix that without redesigning your ductwork." },
              { use: "Pool house or workshop", detail: "Any outbuilding that needs cooling but isn't connected to the main system is a mini split candidate." },
            ].map(({ use, detail }) => (
              <div key={use} className="border border-gray-200 rounded p-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-1">{use}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Brands We Install</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { brand: "Mitsubishi", note: "Best-in-class reliability. Industry standard for quality mini splits." },
              { brand: "Daikin", note: "Japanese-engineered, strong efficiency ratings, widely available parts." },
              { brand: "LG", note: "Solid mid-tier option with good warranty coverage." },
              { brand: "Fujitsu", note: "Reliable performance, competitive pricing on residential units." },
            ].map(({ brand, note }) => (
              <div key={brand} className="border border-gray-200 rounded p-4 bg-white text-center">
                <p className="font-bold text-gray-900 mb-1">{brand}</p>
                <p className="text-gray-500 text-xs">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Ready to cool your garage or addition?"
        sub={`Free estimates on all mini split installs. Call ${siteConfig.phone} to schedule.`}
      />
    </>
  );
}
