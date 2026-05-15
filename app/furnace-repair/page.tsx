import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Furnace Repair Las Vegas  -  Winter Heating Service",
  description:
    "Furnace repair in Las Vegas. Yes, you need heat  -  winter nights drop to the 30s. Same-day furnace repair and replacement. Call (702) 930-3316.",
  alternates: { canonical: "/furnace-repair/" },
};

const faqs = [
  {
    question: "Do people in Las Vegas really need furnace repair?",
    answer:
      "Yes. Winter nights in December and January regularly drop to the mid-30s, and cold snaps can push below freezing. Without a working furnace, your home will be 45-50°F by morning. That's genuinely uncomfortable and can be dangerous for elderly residents.",
  },
  {
    question: "How much does furnace repair cost?",
    answer:
      "Pricing varies by repair type and system condition. We quote before touching anything.",
  },
  {
    question: "How long should a furnace last in Las Vegas?",
    answer:
      "15-20 years is normal for a gas furnace. Because Vegas furnaces run less than in colder climates (maybe 3-4 months vs 6-7 months), they often last toward the longer end of that range.",
  },
  {
    question: "My furnace won't ignite. What should I check first?",
    answer:
      "Check the thermostat is set to heat and the setpoint is above the current indoor temp. Check that the furnace filter isn't completely clogged. Check that the furnace switch and main gas valve are both on. If all that's fine, the ignitor, thermocouple, or control board is likely the issue.",
  },
  {
    question: "Is annual furnace maintenance worth it in Las Vegas?",
    answer:
      "Yes. An affordable annual tune-up catches small problems before they become expensive failures. It also confirms your heat exchanger is intact, which matters for carbon monoxide safety.",
  },
  {
    question: "My furnace smells like it's burning. Should I be concerned?",
    answer:
      "A burning dust smell at the start of the season is normal  -  it's dust burning off the heat exchanger. A persistent burning smell, burning plastic smell, or rotten egg smell (gas leak) are all reasons to turn it off and call immediately.",
  },
];

export default function FurnaceRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Furnace Repair", "furnace-repair", "Furnace repair and replacement in Las Vegas. Winter nights drop to the 30s  -  get your heat working.")
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
              { name: "Furnace Repair", url: "/furnace-repair/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="Furnace Repair in Las Vegas"
        supporting="Yes, you need heat in Vegas. Winter nights drop to the 30s. Furnace repair and replacement."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Furnace Repair", href: "/furnace-repair/" },
        ]}
        source="furnace-repair"
      />

      {/* Why Vegas furnaces matter */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Yes, You Need a Working Furnace in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las Vegas is known for summer heat, but winters are real. December through February sees overnight lows in the mid-30s, with cold snaps that push into the upper 20s. Daytime highs in January average around 55°F.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Without a working furnace, a typical Vegas home will drop to 45-50°F overnight. That's uncomfortable at best and a genuine health concern for elderly residents or young children.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Because Vegas furnaces see lighter use than systems in cold climates, they often get ignored. Then the first cold night of the year arrives and nothing works. Don't wait. Get a fall tune-up before you need it.
          </p>
        </div>
      </section>

      {/* Common issues */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Furnace Problems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { issue: "Furnace won't ignite", detail: "Failed ignitor, thermocouple, or gas valve. The most common furnace service call." },
              { issue: "Blowing cold air", detail: "Wrong thermostat mode, tripped limit switch, or failed heat exchanger." },
              { issue: "Pilot light or ignitor problems", detail: "Standing pilot or hot surface ignitor failure. Both are straightforward repairs." },
              { issue: "Heat exchanger issues", detail: "Cracks in the heat exchanger allow combustion gases into the airstream  -  a carbon monoxide risk. Requires inspection and often replacement." },
              { issue: "Strange smells", detail: "Dust burn-off at season start is normal. Gas smell, burning plastic, or persistent burning odors warrant a service call." },
              { issue: "Strange noises", detail: "Banging, rattling, or squealing from a furnace usually points to a blower motor, inducer, or expansion noise issue." },
            ].map(({ issue, detail }) => (
              <div key={issue} className="border border-gray-200 rounded p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1">{issue}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Annual Furnace Maintenance</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An affordable annual tune-up covers: heat exchanger inspection (carbon monoxide safety), burner cleaning, ignitor testing, flue check, thermocouple or ignitor replacement if needed, and a full safety check.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Schedule it in September or October before the heating season starts. Techs are readily available then. Wait until December and you're competing with everyone else who forgot.
          </p>
        </div>
      </section>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Furnace not working? We can fix it today."
        sub={`Same-day furnace repair across Las Vegas. Call ${siteConfig.phone}.`}
      />
    </>
  );
}
