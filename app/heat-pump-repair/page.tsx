import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Heat Pump Repair Las Vegas  -  Cooling and Heating",
  description:
    "Heat pump repair in Las Vegas. Both cooling and heating modes. Same-day service. All major brands. Call (702) 930-3316.",
  alternates: { canonical: "/heat-pump-repair/" },
};

const faqs = [
  {
    question: "How is a heat pump different from a regular AC?",
    answer:
      "A heat pump does what an AC does in cooling mode, but it can also reverse the process to heat your home in winter. In Las Vegas's mild winters, heat pumps are efficient at both jobs without needing a separate gas furnace.",
  },
  {
    question: "My heat pump isn't switching between cooling and heating. What's wrong?",
    answer:
      "Usually a failed reversing valve. That's the component that switches the refrigerant flow direction between modes. It's a common heat pump repair. A diagnostic visit will confirm the issue.",
  },
  {
    question: "What is the defrost cycle and why does it matter?",
    answer:
      "In heating mode, the outdoor coil can frost over in cold conditions. The defrost cycle briefly reverses operation to melt the ice. If defrost isn't working, the system loses efficiency in winter and can cause compressor damage.",
  },
  {
    question: "Should I get a heat pump or a traditional AC in Las Vegas?",
    answer:
      "Heat pumps make good sense in Las Vegas. The climate is cold enough in winter that you need heating capability, but winters are mild enough that a heat pump's efficiency advantage over electric resistance heat is significant. Gas furnace alternatives depend on your gas infrastructure and rate structure.",
  },
  {
    question: "How much does heat pump repair cost?",
    answer:
      "Pricing varies by repair type and system. Call us for a quote before any work starts.",
  },
  {
    question: "Do heat pumps qualify for tax credits?",
    answer:
      "Yes. Qualifying heat pumps may be eligible for federal tax credits under the Inflation Reduction Act. Specific efficiency thresholds apply. Consult your tax advisor for eligibility.",
  },
];

export default function HeatPumpRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Heat Pump Repair", "heat-pump-repair", "Heat pump repair and replacement for Las Vegas homes. Both cooling and heating modes serviced.")
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
              { name: "Heat Pump Repair", url: "/heat-pump-repair/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="Heat Pump Repair in Las Vegas"
        supporting="Heat pump repair, maintenance, and replacement. Both cooling and heating modes."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Heat Pump Repair", href: "/heat-pump-repair/" },
        ]}
        source="heat-pump-repair"
      />

      {/* Common issues */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Heat Pump Problems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { issue: "Not switching between modes", detail: "System cools but won't heat, or heats but won't cool. Usually a failed reversing valve." },
              { issue: "Defrost cycle problems", detail: "Outdoor unit icing over in winter and not clearing. Defrost board or sensor failure." },
              { issue: "Reversing valve failure", detail: "The component that changes refrigerant direction. If it sticks, you lose one mode entirely." },
              { issue: "Auxiliary heat strip issues", detail: "Electric backup heat kicks in when outdoor temps are too low for efficient heat pump operation. Strip heater failures leave you cold." },
              { issue: "Compressor problems", detail: "Same as a traditional AC. Hard start, no start, or tripping the breaker." },
              { issue: "Refrigerant leak", detail: "Low refrigerant affects both cooling and heating performance. Requires leak detection and repair before recharge." },
            ].map(({ issue, detail }) => (
              <div key={issue} className="border border-gray-200 rounded p-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-1">{issue}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vegas heat pump advantage */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Heat Pumps Work Well in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las Vegas winters are mild compared to most of the country. December through February temperatures range from the mid-30s to the upper 50s. A heat pump operates efficiently in that range without needing to rely heavily on backup heat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In extreme cold climates, heat pumps lose efficiency when outdoor temps drop below 20-25°F, and the backup heat strips carry most of the load. That rarely happens in Las Vegas, which means you get the efficiency advantage of the heat pump almost all winter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Combined with the cooling performance that's identical to a standard AC, heat pumps are a practical all-in-one option for Las Vegas homes.
          </p>
        </div>
      </section>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Heat pump not working right?"
        sub={`We service both cooling and heating modes. Call ${siteConfig.phone} for same-day service.`}
      />
    </>
  );
}
