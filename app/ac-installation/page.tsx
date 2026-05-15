import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "AC Installation Las Vegas  -  New System Install",
  description:
    "New AC system installation in Las Vegas. Free in-home estimates. Manual J sizing. All major brands. Call (702) 930-3316.",
  alternates: { canonical: "/ac-installation/" },
};

const faqs = [
  {
    question: "How do I know what size AC I need?",
    answer:
      "We do a Manual J load calculation, not an eyeball estimate. The calculation accounts for your home's square footage, ceiling height, insulation levels, window orientation, and local climate data. Oversized and undersized systems both cause problems.",
  },
  {
    question: "What brands do you install?",
    answer:
      "Carrier, Trane, Lennox, Goodman, Rheem, American Standard, and York. We recommend based on your budget, the efficiency rating that makes sense for Vegas's long cooling season, and parts availability in the local market.",
  },
  {
    question: "What's a good SEER rating for Las Vegas?",
    answer:
      "16 SEER or higher makes sense in Vegas because systems run 9+ months per year. The energy savings from a higher-efficiency system add up quickly when you're running it that much. NV Energy also offers rebates on qualifying equipment.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential split system replacements take 4-8 hours. New construction with ductwork can take 1-2 days. We'll give you a specific timeframe when we quote the job.",
  },
  {
    question: "Can I get financing?",
    answer:
      "Yes. We work with financing partners to offer monthly payment options. Ask when you call for your free estimate.",
  },
  {
    question: "Are there any rebates available?",
    answer:
      "Yes. NV Energy offers rebates on qualifying high-efficiency systems. Federal tax credits under the Inflation Reduction Act are also available for systems meeting certain efficiency thresholds. We'll walk you through what applies to your specific equipment selection.",
  },
  {
    question: "What happens to my old system?",
    answer:
      "We remove and dispose of the old system as part of the installation. Refrigerant is recovered properly per EPA regulations.",
  },
  {
    question: "Do you install mini splits?",
    answer:
      "Yes. We install single-zone and multi-zone ductless mini split systems for garages, additions, casitas, and homes without existing ductwork.",
  },
];

export default function ACInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("AC Installation", "ac-installation", "New AC system installation for homes and businesses in Las Vegas. Free in-home estimates.")
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
              { name: "AC Installation", url: "/ac-installation/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Installation in Las Vegas"
        supporting="New AC system installation for homes and businesses. Free in-home estimates."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "AC Installation", href: "/ac-installation/" },
        ]}
        source="ac-installation"
      />

      {/* Signs you need replacement */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Signs It's Time to Replace Your AC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sign: "System is 12+ years old", detail: "Vegas systems wear out faster than the national average due to extended runtime and extreme heat." },
              { sign: "Repair costs are mounting", detail: "When repairs approach 50% of replacement cost, a new system usually makes better financial sense." },
              { sign: "Energy bills climbing year over year", detail: "An aging compressor and degraded components reduce efficiency, which shows up on your NV Energy bill." },
              { sign: "Inconsistent cooling between rooms", detail: "Hot spots despite the system running constantly can mean the system is undersized or losing capacity." },
              { sign: "R-22 (Freon) system", detail: "R-22 is no longer manufactured. Recharging is expensive and the supply shrinks every year." },
              { sign: "Constant breakdowns", detail: "Two or more major repairs in a single season is a reliable signal that the system is at end of life." },
            ].map(({ sign, detail }) => (
              <div key={sign} className="border border-gray-200 rounded p-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-1">{sign}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SEER + Manual J */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why SEER Rating Matters in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SEER (Seasonal Energy Efficiency Ratio) measures how efficiently an AC unit cools. A higher SEER rating means lower operating costs. In most of the country, systems run 5-6 months per year, so the payback on high-SEER equipment takes time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Las Vegas, systems run 9+ months. The energy savings from a 16-SEER versus a 14-SEER system accumulate much faster. NV Energy also offers rebates on qualifying equipment, which improves the payback calculation further.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We size every system using a Manual J load calculation, not rule-of-thumb estimates. Oversized systems short-cycle and don't dehumidify properly. Undersized systems run constantly and still can't hit the setpoint. Getting the size right matters.
          </p>
        </div>
      </section>

      {/* Rebates */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rebates and Tax Credits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-5 bg-white">
              <p className="font-semibold text-gray-900 mb-2">NV Energy Rebates</p>
              <p className="text-gray-600 text-sm">NV Energy offers rebates on qualifying high-efficiency heat pumps and AC systems. Amounts vary by equipment type and efficiency level. Ask for current availability when you get your quote.</p>
            </div>
            <div className="border border-gray-200 rounded p-5 bg-white">
              <p className="font-semibold text-gray-900 mb-2">Federal Tax Credit (IRA)</p>
              <p className="text-gray-600 text-sm">Federal tax credits may be available for qualifying systems under the Inflation Reduction Act. Consult your tax advisor for eligibility.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Free in-home estimate. No pressure."
        sub={`Call ${siteConfig.phone} to schedule. We'll size the system right and give you honest options.`}
      />
    </>
  );
}
