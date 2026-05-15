import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const slug = "when-to-replace-ac-las-vegas";
const headline = "When Should You Replace Your AC in Las Vegas?";
const description =
  "Replace your Las Vegas AC when it's 12+ years old, repair costs exceed 50% of replacement, or it uses R-22. Vegas systems wear out faster than the national average.";
const datePublished = "2024-06-15";

export const metadata: Metadata = {
  title: `${headline} | ${siteConfig.brandName}`,
  description,
  alternates: { canonical: `https://${siteConfig.domain}/blog/${slug}/` },
};

const faqs = [
  {
    question: "What is the average AC lifespan in Las Vegas?",
    answer:
      "Most Las Vegas AC systems last 10-14 years with regular maintenance. The national average is 15-20 years. Vegas systems run 9+ months per year in extreme heat, which adds years of equivalent wear time compared to moderate climates. Systems that skip annual maintenance often fail before the 10-year mark.",
  },
  {
    question: "How do I know if repair or replace is the smarter financial choice?",
    answer:
      "Multiply the repair cost by the system's age. If that number exceeds the cost of a new system, replace it. Example: $1,200 repair on a 12-year-old unit. $1,200 x 12 = $14,400. A new system costs $6,000-$9,000. Replacement wins. This is called the 'repair vs. replace rule' and it accounts for both current repair cost and remaining useful life.",
  },
  {
    question: "Does NV Energy offer rebates for AC replacement?",
    answer:
      "Yes. NV Energy's Home Energy Rebate program offers rebates for qualifying high-efficiency systems (16 SEER2 or higher). Rebates typically range from $200 to $500 depending on system size and efficiency rating. The contractor must be an approved NV Energy Trade Ally to submit the rebate on your behalf. Check nvenergyrebates.com for current amounts.",
  },
  {
    question: "What AC brands hold up best in Las Vegas heat?",
    answer:
      "Carrier, Trane, Lennox, and Rheem all perform well in desert climates when properly sized and maintained. There is no single best brand for Vegas. What matters more: correct sizing via Manual J load calculation, proper installation, and a high SEER2 rating for efficiency. A well-installed mid-tier unit outperforms a poorly installed premium unit every time.",
  },
];

const comparisonData = [
  { factor: "System age", replaceSignal: "12+ years", repairSignal: "Under 8 years" },
  { factor: "Repair cost", replaceSignal: "Over 50% of new system cost", repairSignal: "Under 25% of new system cost" },
  { factor: "Refrigerant type", replaceSignal: "R-22 (Freon)", repairSignal: "R-410A or R-32" },
  { factor: "Efficiency (SEER)", replaceSignal: "Under 14 SEER", repairSignal: "16 SEER or higher" },
  { factor: "Repair frequency", replaceSignal: "2+ repairs in last 2 years", repairSignal: "First or second repair ever" },
  { factor: "Comfort issues", replaceSignal: "Uneven cooling, humidity problems", repairSignal: "Single component failure" },
];

export default function WhenToReplaceACPage() {
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
        supporting="Three clear rules to help Las Vegas homeowners decide between repairing and replacing their AC system."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "When to Replace AC Las Vegas", href: `/blog/${slug}/` },
        ]}
        source={`blog-${slug}`}
      />

      {/* Quick Answer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-4 py-1">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base leading-relaxed">
              Replace your AC when it&apos;s 12+ years old, repair costs hit 50% of replacement cost, or it uses R-22
              refrigerant (Freon). In Las Vegas, systems run 9+ months a year, so they wear out faster than the
              national 15-year average. If you&apos;re spending $1,500+ on a 10-year-old system, replacement usually
              makes more financial sense.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Body */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Age Rule: 12 Years in Vegas</h2>
            <p>
              The national AC lifespan benchmark is 15-20 years. That number assumes a system runs 4-6 months per year
              in a moderate climate. Las Vegas is not a moderate climate.
            </p>
            <p className="mt-3">
              Vegas systems run from March through November. They operate in sustained 110°F heat. Compressors,
              capacitors, and motors work near their rated limits for weeks at a time. The equivalent wear on a Vegas
              system is roughly 1.5x what the same system would experience in Dallas and 2x what it would see in Denver.
            </p>
            <p className="mt-3">
              The practical Vegas lifespan: 10-14 years with maintenance. 8-10 years without. Once a system crosses the
              12-year mark, every major repair needs a replacement comparison alongside the repair quote.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Repair Cost Rule: 50% Threshold</h2>
            <p>
              A new system installed in Las Vegas costs $4,500 to $9,000 depending on size, brand, and efficiency.
              The standard rule: if a single repair exceeds 50% of replacement cost, replacement is worth serious
              consideration.
            </p>
            <p className="mt-3">
              For most Vegas homes, that threshold sits around $2,500-$4,000. Compressor replacements ($1,500-$2,800)
              often push right against this line. A compressor replacement on a 10-year-old system keeps you running
              for 2-4 more years. A new system gives you 12+ years with full warranty coverage and better efficiency.
            </p>
            <p className="mt-3">
              The math gets clearer when you factor in energy costs. Older, inefficient systems run harder and cost
              more per month to operate in Vegas summers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The R-22 Rule: Replace Before It Leaks Again</h2>
            <p>
              R-22 refrigerant (Freon) was phased out of production in 2020. Systems built before 2010 almost always
              use R-22. The remaining stockpile is finite and prices are high: $100-$175 per pound, versus $50-$80 for
              modern R-410A.
            </p>
            <p className="mt-3">
              If your R-22 system has a refrigerant leak, you have two options: pay to fix the leak and recharge
              with expensive R-22, or replace the system with a modern R-410A or R-32 unit. The second option usually
              wins once you calculate the leak repair cost plus the refrigerant cost plus the ongoing energy penalty
              of running an old, inefficient unit.
            </p>
            <p className="mt-3">
              One R-22 recharge is a judgment call. Two is almost always a replacement signal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vegas-Specific Wear Factors</h2>
            <p>
              Several conditions specific to Las Vegas accelerate system aging beyond the age and cost rules above.
            </p>
            <ul className="mt-3 space-y-3 list-disc list-inside text-gray-700">
              <li>
                <strong>Hard water scale:</strong> Vegas tap water is mineral-heavy. Condensate lines and drain pans
                accumulate scale faster, increasing clog risk.
              </li>
              <li>
                <strong>Dust loading:</strong> Fine desert particulates coat condenser coils and reduce heat transfer.
                Systems without annual coil cleaning work harder to achieve the same output.
              </li>
              <li>
                <strong>Thermal cycling stress:</strong> Daytime highs of 115°F followed by 80°F nights cause metal
                components to expand and contract repeatedly, stressing connections and refrigerant lines.
              </li>
              <li>
                <strong>Continuous runtime:</strong> Vegas systems rarely get overnight recovery time in summer. They
                run around the clock during heat waves, adding effective runtime hours at a pace no other major US city
                matches.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SEER Upgrade: The Energy Savings Math</h2>
            <p>
              Replacing a 10 SEER system (common in 2000s-era Vegas homes) with a 16 SEER2 unit cuts cooling energy
              use by roughly 37%. In Las Vegas, where a household might run the AC for 2,500+ hours per year, that
              savings is meaningful.
            </p>
            <p className="mt-3">
              A 4-ton system running at $0.10/kWh in Las Vegas:
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 text-sm">
              <li>10 SEER system: ~$1,400/year in cooling costs</li>
              <li>16 SEER2 system: ~$875/year in cooling costs</li>
              <li>Savings: ~$525/year</li>
            </ul>
            <p className="mt-3">
              At $525/year in savings, a $6,000 system pays for itself in about 11 years purely in energy reduction.
              Add in NV Energy rebates and avoided repair costs, and the payback period shortens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair vs. Replace: Side-by-Side</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Factor</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-red-700">Replace Signal</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold text-green-700">Repair Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-200 px-3 py-2 font-medium">{row.factor}</td>
                      <td className="border border-gray-200 px-3 py-2 text-red-700">{row.replaceSignal}</td>
                      <td className="border border-gray-200 px-3 py-2 text-green-700">{row.repairSignal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions to Ask Your Technician</h2>
            <p>
              Before authorizing a major repair, ask the tech these questions directly:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
              <li>If you fix this today, what is the next most likely thing to fail on this system?</li>
              <li>Given the age and condition, what would you do if this were your house?</li>
              <li>Can you give me a replacement quote alongside this repair quote?</li>
              <li>Does this system qualify for NV Energy rebates if we replace it?</li>
            </ul>
            <p className="mt-3">
              A technician who gives you honest answers to all four is worth trusting. One who pushes repair without
              discussing replacement on an old system deserves a second opinion.
            </p>
          </section>

        </div>
      </article>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Get a repair and replacement quote side by side."
        sub="Our techs give you both options, with honest recommendations. No pressure."
      />
    </>
  );
}
