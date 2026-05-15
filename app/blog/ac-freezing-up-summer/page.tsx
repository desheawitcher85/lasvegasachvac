import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, articleSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const slug = "ac-freezing-up-summer";
const headline = "Why Is My AC Freezing Up in Summer?";
const description =
  "AC freezing up in summer is caused by restricted airflow or low refrigerant. Turn it off, let it thaw, change the filter. If it freezes again, call a tech.";
const datePublished = "2024-08-01";

export const metadata: Metadata = {
  title: `${headline} | ${siteConfig.brandName}`,
  description,
  alternates: { canonical: `https://${siteConfig.domain}/blog/${slug}/` },
};

const faqs = [
  {
    question: "How long does it take for a frozen AC to thaw?",
    answer:
      "Most systems take 2-4 hours to thaw completely at Las Vegas ambient temperatures. Do not try to rush it with heat guns or other tools. Set the thermostat to fan-only mode (not cool) to speed the thaw slightly by pushing warm air across the coil. Check that the coil is fully thawed before restarting in cooling mode.",
  },
  {
    question: "What if my AC keeps freezing up after I thaw it?",
    answer:
      "If it freezes a second time after you have changed the filter and cleared all vents, the cause is not restricted airflow. The likely culprit is low refrigerant from a leak, a failing blower motor, or a dirty evaporator coil that needs professional cleaning. Call a technician. Repeated freezing causes compressor damage over time.",
  },
  {
    question: "Is a frozen AC dangerous?",
    answer:
      "Not immediately dangerous in terms of fire or electrical risk, but dangerous to the equipment. Continuing to run a frozen system forces the compressor to work against abnormal pressure conditions. This is one of the leading causes of compressor failure. Compressor replacement runs $1,500-$2,800. Turning the system off when you spot freezing costs nothing.",
  },
  {
    question: "Can I run the fan while the AC is thawing?",
    answer:
      "Yes, and it helps. Set the thermostat to fan-only mode. This runs the indoor blower without engaging the compressor or outdoor unit. The warm room air moving across the frozen coil speeds the thaw. Do not set it to COOL during the thaw period.",
  },
  {
    question: "Does AC freezing in summer mean low refrigerant?",
    answer:
      "Not necessarily. Freezing can be caused by either restricted airflow (dirty filter, blocked vents, dirty coil) or low refrigerant. Restricted airflow is more common. Check and change your air filter first. If the system freezes again after a fresh filter and cleared vents, then low refrigerant becomes the likely cause and you need a technician.",
  },
];

const howToSteps = [
  {
    name: "Turn the system off at the thermostat",
    text: "Switch the thermostat to OFF or switch to fan-only mode. Do not leave it in cooling mode. Running the system frozen forces the compressor to work under abnormal pressure conditions and accelerates compressor failure.",
  },
  {
    name: "Switch the fan to ON to help thaw",
    text: "Set the thermostat fan switch to ON (not AUTO). This runs the indoor blower without engaging the compressor. Warm room air moving across the frozen coil speeds the thaw. Leave it running until the ice is fully melted.",
  },
  {
    name: "Check and replace the air filter",
    text: "Locate your air filter (usually at the return air vent or in the air handler cabinet). Pull it out and inspect it. If it is grey, clogged, or you cannot see light through it, replace it with a fresh filter. A clogged filter is the most common cause of AC freezing.",
  },
  {
    name: "Check all supply and return vents",
    text: "Walk through the home and make sure every supply vent is open and unobstructed. Closed or blocked vents restrict total airflow through the system and can cause coil temperatures to drop below freezing.",
  },
  {
    name: "Wait 2-4 hours for a full thaw",
    text: "Give the system at least 2-4 hours before restarting in cooling mode. Check the indoor unit for signs of ice. If you see any remaining frost or ice on the refrigerant lines or coil, wait longer.",
  },
  {
    name: "Restart and monitor",
    text: "After the thaw, switch the thermostat back to COOL. Check the air coming from vents after 15-20 minutes. It should be noticeably cool. Watch the system for the first hour. If the lines start frosting again, turn it off and call a technician.",
  },
];

export default function ACFreezingUpSummerPage() {
  const jsonLd = [
    articleSchema({ headline, description, slug, datePublished }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog/" },
      { name: headline, url: `/blog/${slug}/` },
    ]),
    howToSchema({
      name: "What to Do When Your AC Freezes Up",
      description:
        "Step-by-step instructions for thawing a frozen AC unit and getting it running again safely.",
      steps: howToSteps,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        h1={headline}
        supporting="Two causes, one fix sequence, and when to stop trying to fix it yourself."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "AC Freezing Up in Summer", href: `/blog/${slug}/` },
        ]}
        source={`blog-${slug}`}
      />

      {/* Quick Answer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-4 py-1">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base leading-relaxed">
              AC freezing up in summer is usually caused by restricted airflow (dirty filter, blocked vents, dirty
              coils) or low refrigerant from a leak. Turn the system off, let it thaw for 2-3 hours, change the
              filter, and run it again. If it freezes again, call a technician. Continuing to run a frozen system
              damages the compressor.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Body */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Causes an AC to Freeze in Summer</h2>
            <p>
              Ice forming on an AC system in 110°F summer heat sounds backwards. But it makes physical sense once you
              understand what is happening at the evaporator coil.
            </p>
            <p className="mt-3">
              The evaporator coil (inside your home) absorbs heat by keeping the refrigerant inside it at a very low
              temperature, typically around 40-50°F. Warm air from your home passes over the coil, the refrigerant
              absorbs the heat, and the air exits cooled. If the coil gets too cold (below 32°F), the moisture in the
              air freezes on contact with the coil instead of draining away.
            </p>
            <p className="mt-3">
              Two things cause the coil to get too cold: not enough warm air moving across it, or too much refrigerant
              pressure drop from a leak.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Cause 1: Restricted Airflow</h3>
            <p>
              If airflow is restricted, less warm air reaches the coil. The refrigerant inside the coil keeps absorbing
              what little heat it can, but without enough warm air to moderate the coil temperature, the coil gets
              colder and colder until it freezes.
            </p>
            <p className="mt-3">Airflow restriction sources:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 text-sm">
              <li>Clogged air filter (most common)</li>
              <li>Closed or blocked supply/return vents</li>
              <li>Dirty evaporator coil</li>
              <li>Failing blower motor running below rated speed</li>
              <li>Collapsed or crushed flex duct</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Cause 2: Low Refrigerant</h3>
            <p>
              When refrigerant is low due to a leak, the pressure in the evaporator coil drops. Lower pressure means
              a lower boiling point for the refrigerant, which means the coil gets colder than it should. The result
              is the same: coil temperatures drop below freezing and ice forms.
            </p>
            <p className="mt-3">
              Low refrigerant always means there is a leak. Refrigerant does not evaporate or get used up normally.
              If you have a refrigerant issue, it needs to be found, repaired, and the system recharged. Adding
              refrigerant without fixing the leak is a temporary fix.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Las Vegas AC Systems Are Especially Prone to Coil Icing</h2>
            <p>
              Vegas systems run nearly year-round. That means more total filter hours, more coil exposure to dust and
              debris, and less downtime for the system to be inspected.
            </p>
            <p className="mt-3">
              Las Vegas air carries fine particulate matter from desert dust and construction. These particles load
              air filters faster than in most cities. A filter that would last 60-90 days in a humid climate may
              need replacement every 30-45 days in Vegas during summer, when the system runs continuously.
            </p>
            <p className="mt-3">
              Evaporator coils also accumulate dust in Vegas homes faster than average. A coil that looks clean to the
              eye can still have enough fine dust coating to meaningfully restrict heat transfer. Professional coil
              cleaning every 1-2 years prevents this.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do When Your AC Freezes Up</h2>
            <p className="mb-4 text-gray-600 text-sm">Follow these steps in order.</p>
            <ol className="space-y-5">
              {howToSteps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-red-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">{step.name}</p>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens If You Keep Running a Frozen AC</h2>
            <p>
              Running a frozen system forces the compressor to work against abnormal refrigerant pressure. The
              compressor is designed to compress gas, not liquid. When refrigerant backs up in liquid form due to
              a frozen coil blocking flow, the compressor can receive liquid refrigerant, which causes what technicians
              call liquid slugging.
            </p>
            <p className="mt-3">
              Liquid slugging damages internal compressor valves and can cause complete compressor failure. A compressor
              that might have lasted another 5 years can be destroyed in a single extended run on a frozen coil.
              Compressor replacement: $1,500-$2,800. Turning the system off when you notice freezing: free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Call Immediately vs. Handle Yourself</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Situation</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2">First time freezing, filter was clogged</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700">Handle yourself: thaw, change filter, restart</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">Froze again after fresh filter</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Call a technician</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2">Ice on outdoor unit or refrigerant lines</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Call a technician</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">Grinding noise from outdoor unit while frozen</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Call immediately, system off</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2">Water pooling or dripping heavily indoors</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Call a technician</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">Temperature above 105°F, vulnerable persons in home</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Call for emergency service</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prevent Future Freezing</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Change the air filter every 30-45 days in summer (shorter cycle than the package says for Vegas conditions).</li>
              <li>Keep all supply and return vents open, including in unused rooms.</li>
              <li>Schedule annual maintenance that includes evaporator coil inspection and cleaning.</li>
              <li>Keep the area around the indoor air handler clear of stored items that could block the return air intake.</li>
              <li>Have refrigerant levels checked if the system is 5+ years old and has never been inspected.</li>
            </ul>
            <p className="mt-4">
              For more on what causes warm air after a freeze-thaw cycle, see our guide on{" "}
              <Link href="/blog/why-ac-blowing-warm-air/" className="text-red-600 underline hover:text-red-700">
                why your AC is blowing warm air
              </Link>
              .
            </p>
          </section>

        </div>
      </article>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="AC freezing up and won't stay fixed?"
        sub="We diagnose the root cause and fix it right. Same-day service across Las Vegas."
      />
    </>
  );
}
