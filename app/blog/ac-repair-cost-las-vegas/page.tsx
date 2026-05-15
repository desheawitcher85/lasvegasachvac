import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const slug = "ac-repair-cost-las-vegas";
const headline = "How Much Does AC Repair Cost in Las Vegas?";
const description =
  "AC repair in Las Vegas costs $150 to $1,500 for most repairs. Capacitor: $150-$400. Refrigerant: $200-$600. Compressor: $1,500-$2,800. See full cost breakdown.";
const datePublished = "2024-06-01";

export const metadata: Metadata = {
  title: `${headline} | ${siteConfig.brandName}`,
  description,
  alternates: { canonical: `https://${siteConfig.domain}/blog/${slug}/` },
};

const faqs = [
  {
    question: "Is the diagnostic fee waived if I book a repair?",
    answer:
      "At Vegas AC HVAC, the $89 diagnostic fee is waived when you proceed with the repair on the same visit. If you choose not to repair, the fee covers the technician's time and diagnosis report.",
  },
  {
    question: "Does refrigerant cost extra on top of the repair bill?",
    answer:
      "Yes. Refrigerant is charged separately by the pound. R-410A runs $50-$80 per pound. R-22 (older systems) runs $100-$175 per pound due to scarcity. The tech will tell you exactly how many pounds your system needs before starting.",
  },
  {
    question: "Does Vegas heat make AC repairs cost more?",
    answer:
      "Indirectly, yes. Systems run harder in Vegas and components fail faster. Emergency same-day repairs in summer peak (June-August) may carry a priority dispatch fee. Parts availability is generally good because every HVAC shop in the valley stocks high-demand components.",
  },
  {
    question: "What's included in an AC repair warranty?",
    answer:
      "Parts and labor warranties vary by component. Most reputable shops offer 1-year labor and 5-year parts on compressors, 90-day to 1-year on capacitors, and 30-90 days on refrigerant work (assuming no new leak). Always get the warranty terms in writing before authorizing work.",
  },
];

const repairCosts = [
  { repair: "Diagnostic Fee", lowCost: "$89", highCost: "$150", notes: "Often waived with repair" },
  { repair: "Capacitor Replacement", lowCost: "$150", highCost: "$400", notes: "Most common summer repair" },
  { repair: "Refrigerant Recharge (R-410A)", lowCost: "$200", highCost: "$450", notes: "Per leak repair + recharge" },
  { repair: "Refrigerant Recharge (R-22)", lowCost: "$350", highCost: "$600", notes: "R-22 scarcity drives cost" },
  { repair: "Contactor Replacement", lowCost: "$150", highCost: "$350", notes: "Electrical component" },
  { repair: "Blower Motor", lowCost: "$300", highCost: "$700", notes: "Indoor unit" },
  { repair: "Condenser Fan Motor", lowCost: "$250", highCost: "$600", notes: "Outdoor unit" },
  { repair: "Evaporator Coil", lowCost: "$600", highCost: "$1,200", notes: "Labor-intensive replacement" },
  { repair: "Condenser Coil", lowCost: "$700", highCost: "$1,500", notes: "Outdoor unit core" },
  { repair: "Compressor", lowCost: "$1,500", highCost: "$2,800", notes: "Most expensive repair" },
];

export default function ACRepairCostPage() {
  const jsonLd = [
    articleSchema({ headline, description, slug, datePublished }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog/" },
      { name: headline, url: `/blog/${slug}/` },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        h1={headline}
        supporting="Full cost breakdown for common AC repairs in the Las Vegas area. Prices current as of 2024."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "AC Repair Cost Las Vegas", href: `/blog/${slug}/` },
        ]}
        source={`blog-${slug}`}
      />

      {/* Quick Answer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-4 py-1">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base leading-relaxed">
              AC repair in Las Vegas typically costs $150 to $1,500 depending on the issue. Capacitor replacement
              runs $150-$400. Refrigerant recharge is $200-$600. Compressor replacement hits $1,500-$2,800. Most
              homeowners pay between $300 and $700 for a typical residential AC repair.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Body */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto prose-sm text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What the Diagnostic Fee Covers</h2>
            <p>
              Most Las Vegas HVAC companies charge an $89 to $150 diagnostic fee. That fee pays for a licensed
              technician to drive to your home, inspect the system, run electrical tests, check refrigerant pressure,
              and identify the root cause.
            </p>
            <p className="mt-3">
              The diagnostic fee is not a service charge layered on top of the repair. It is the cost of getting an
              accurate answer. A technician who skips the diagnostic and goes straight to quoting a repair is guessing.
            </p>
            <p className="mt-3">
              At most reputable shops, the diagnostic fee is waived when you authorize the repair on the same visit.
              Ask before you schedule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AC Repair Cost by Type</h2>
            <p className="mb-4">
              The table below covers the most common residential AC repairs in Las Vegas. Prices include parts and
              labor. Emergency or after-hours calls may add $50-$150 depending on the company.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Repair Type</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Low</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">High</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {repairCosts.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-3 py-2">{row.repair}</td>
                      <td className="border border-gray-200 px-3 py-2">{row.lowCost}</td>
                      <td className="border border-gray-200 px-3 py-2">{row.highCost}</td>
                      <td className="border border-gray-200 px-3 py-2 text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Factors That Affect Your Repair Cost</h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">System Brand and Age</h3>
            <p>
              Older systems use parts that are harder to source. Premium brands like Lennox or Trane use proprietary
              components that cost more than generic replacements. Budget brands often use off-the-shelf parts that
              cost less but may not fit correctly in all systems.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Refrigerant Type</h3>
            <p>
              Systems made before 2010 typically use R-22 (Freon). R-22 production was phased out in 2020. Remaining
              supplies are expensive. A recharge that costs $250 on an R-410A system can cost $500 or more on an R-22
              system. If your system uses R-22 and has a refrigerant leak, replacement is usually the smarter financial
              call.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-5 mb-2">Time of Year</h3>
            <p>
              June through August is peak season in Las Vegas. Technicians are booked solid. Same-day or next-day
              availability may come with a premium. Scheduling maintenance in spring (March-May) avoids this entirely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vegas-Specific Factors That Drive Costs Up</h2>

            <p>
              Las Vegas has conditions that accelerate wear on HVAC equipment and affect repair pricing.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Extreme Heat</h3>
            <p>
              Summer temperatures regularly exceed 110°F. Condensers, compressors, and capacitors operate near or above
              their rated limits for months at a time. Components that last 10 years in a moderate climate may fail in
              5-7 years in Vegas.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Dust and Desert Air</h3>
            <p>
              Dust loads condenser coils and clogs filters faster than in most cities. A coil cleaning that costs $80
              as a preventive step can prevent a $600 coil replacement caused by overheating.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">R-22 Scarcity</h3>
            <p>
              Vegas has a large stock of older homes with R-22 systems still running. Demand for R-22 refrigerant
              stays high here, which keeps prices elevated even as the national supply shrinks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Repair vs. Replace</h2>
            <p>
              The general industry rule: if the repair costs more than 50% of what a new system costs, replace it.
              A new basic system in Las Vegas runs $4,000-$8,000 installed. So if you're looking at a $2,500 compressor
              replacement on a 12-year-old unit, replacement is worth pricing out.
            </p>
            <p className="mt-3">
              For more detail on when replacement makes financial sense, see our guide on{" "}
              <Link href="/blog/when-to-replace-ac-las-vegas/" className="text-red-600 underline hover:text-red-700">
                when to replace your AC in Las Vegas
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Evaluate a Repair Quote</h2>
            <p>
              A written quote should list every part by name and part number, labor cost as a separate line item, and
              warranty terms. If a company gives you a single lump-sum number with no breakdown, ask them to itemize.
            </p>
            <p className="mt-3">
              Get at least two quotes for any repair over $500. The diagnostic fee from a second company is worth paying
              if it confirms or challenges a high-dollar recommendation.
            </p>
            <p className="mt-3">
              Ask specifically: is this repair fixing the root cause or treating a symptom? A failed capacitor on a
              brand-new system is different from a failed capacitor on a system where the compressor is already
              struggling.
            </p>
          </section>

        </div>
      </article>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Get a same-day AC repair quote in Las Vegas."
        sub="Call now or fill out the form. Most jobs diagnosed and repaired in a single visit."
      />
    </>
  );
}
