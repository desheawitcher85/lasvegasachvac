import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const slug = "why-ac-blowing-warm-air";
const headline = "Why Is My AC Blowing Warm Air?";
const description =
  "AC blowing warm air usually means low refrigerant, dirty condenser coils, a failed capacitor, broken compressor, or thermostat issue. Fix costs range from $150 to $2,800.";
const datePublished = "2024-07-15";

export const metadata: Metadata = {
  title: `${headline} | ${siteConfig.brandName}`,
  description,
  alternates: { canonical: `https://${siteConfig.domain}/blog/${slug}/` },
};

const faqs = [
  {
    question: "Can I add refrigerant to my AC myself?",
    answer:
      "No. Refrigerant handling requires an EPA 608 certification. DIY refrigerant kits sold online are not compatible with modern split systems and can damage the compressor by introducing contaminants or incorrect refrigerant blends. Refrigerant work must be done by a licensed technician who can identify the leak, repair it, and recharge to the correct pressure.",
  },
  {
    question: "Will dirty condenser coils cause warm air?",
    answer:
      "Yes. Dirty condenser coils cannot release heat effectively. The refrigerant stays too warm as it returns from the outdoor unit, reducing its ability to absorb heat inside. The result is air that comes out of your vents warmer than it should be. In Las Vegas, coils clog with dust faster than in most cities. A coil cleaning every 12-18 months prevents this.",
  },
  {
    question: "How fast does a failed capacitor show up as a warm air problem?",
    answer:
      "Immediately. When a capacitor fails, either the compressor or the condenser fan motor cannot start. If the compressor does not start, no refrigerant circulates and the air blows warm within minutes. If the fan motor does not start, the compressor overheats quickly and shuts off on thermal protection. Either way, the symptom is rapid: the system runs but the air gets warmer over a 10-30 minute window.",
  },
  {
    question: "My system is brand new but blowing warm air. What's wrong?",
    answer:
      "A new system blowing warm air almost always points to an installation error. Common causes: incorrect refrigerant charge, a pinched or kinked refrigerant line, a thermostat wired incorrectly, or a reversing valve stuck in heat mode (on heat pumps). Contact the installer. This should be covered under the installation warranty and should not cost you anything to fix.",
  },
];

export default function WhyACBlowingWarmAirPage() {
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
        supporting="Five causes of warm air from your AC, with fix costs and Las Vegas-specific factors."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Why AC Blowing Warm Air", href: `/blog/${slug}/` },
        ]}
        source={`blog-${slug}`}
      />

      {/* Quick Answer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-4 py-1">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base leading-relaxed">
              AC blowing warm air usually means one of five things: low refrigerant from a leak, dirty condenser coils,
              a failed capacitor, a broken compressor, or a thermostat issue. The fix ranges from $150 (capacitor) to
              $2,800 (compressor). Most warm-air issues can be diagnosed in 20 minutes.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Body */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-gray-800 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cause 1: Low Refrigerant from a Leak</h2>
            <p>
              Refrigerant is the substance that carries heat out of your home. It absorbs heat at the indoor coil,
              travels to the outdoor unit, and releases that heat outside. When refrigerant levels drop due to a leak,
              there is not enough of it to absorb heat efficiently. The result is air at the vents that is lukewarm
              or barely cooler than room temperature.
            </p>
            <p className="mt-3">
              Refrigerant does not get consumed. If your system is low, it has a leak somewhere. Adding refrigerant
              without finding and fixing the leak is a temporary fix that will cost you again in 6-24 months.
            </p>
            <p className="mt-3">
              <strong>Fix cost:</strong> $200-$600 for leak repair and recharge (R-410A). R-22 systems: $350-$800.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cause 2: Dirty Condenser Coils</h2>
            <p>
              The condenser coils on the outdoor unit release the heat that the refrigerant collected from inside your
              home. When those coils are coated in dust, pollen, or debris, heat cannot escape. The refrigerant stays
              too warm, cycles back to the indoor unit without fully releasing its heat load, and your home never
              cools down.
            </p>
            <p className="mt-3">
              Las Vegas is particularly hard on condenser coils. Fine desert dust accumulates rapidly. A system that
              gets coil cleaning every 12 months in a humid climate may need it every 6-9 months in Vegas.
            </p>
            <p className="mt-3">
              <strong>Fix cost:</strong> $80-$200 for a professional coil cleaning. If coils are damaged beyond
              cleaning, condenser coil replacement runs $700-$1,500.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cause 3: Failed Capacitor</h2>
            <p>
              The capacitor is a small cylindrical component inside the outdoor unit that provides the starting and
              running boost for the compressor and condenser fan motor. When it fails, one or both of those components
              cannot operate properly.
            </p>
            <p className="mt-3">
              A failed run capacitor on the compressor means the compressor runs inefficiently or not at all. A failed
              start capacitor means the compressor struggles to start, draws excessive amperage, and may overheat
              quickly. Either way, cooling output drops fast.
            </p>
            <p className="mt-3">
              Capacitors are one of the most common summer failures in Las Vegas. The extreme heat degrades them faster
              than the manufacturer&apos;s rating assumes. A 5-year capacitor life in a moderate climate may be
              3 years in Vegas.
            </p>
            <p className="mt-3">
              <strong>Fix cost:</strong> $150-$400. One of the faster and less expensive AC repairs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cause 4: Broken Compressor</h2>
            <p>
              The compressor is what pressurizes refrigerant and makes the entire cooling cycle work. A failed
              compressor means no refrigerant circulation, no heat transfer, and no cooling. The air coming out of
              your vents will be at or above room temperature.
            </p>
            <p className="mt-3">
              Compressor failure is the most expensive cause of warm air. It often follows years of operating with
              low refrigerant, dirty coils, or repeated hard starts, all of which put extra stress on the compressor.
            </p>
            <p className="mt-3">
              <strong>Fix cost:</strong> $1,500-$2,800 for compressor replacement. On systems 10+ years old, full
              replacement is often the better call. See our guide on{" "}
              <Link href="/blog/signs-ac-compressor-failing/" className="text-red-600 underline hover:text-red-700">
                signs your AC compressor is failing
              </Link>{" "}
              for a full breakdown.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cause 5: Thermostat Issue</h2>
            <p>
              Before assuming a mechanical failure, check the thermostat. Two settings cause warm air without any
              hardware problem at all.
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
              <li>
                <strong>Fan set to ON instead of AUTO.</strong> When set to ON, the blower runs continuously, even when
                the system is not in a cooling cycle. Between cooling cycles, it blows unconditioned air that feels
                warm.
              </li>
              <li>
                <strong>Mode set to HEAT instead of COOL.</strong> Easy to happen after winter. The system runs but
                heats instead of cools.
              </li>
            </ul>
            <p className="mt-3">
              A thermostat that is malfunctioning and sending incorrect signals to the system can also cause problems.
              Thermostat replacement costs $150-$400 for a standard programmable unit and $200-$600 for a smart
              thermostat installed by a tech.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vegas-Specific Factors That Cause Warm Air</h2>
            <p>
              Two conditions specific to Las Vegas make warm-air issues more common here than in other markets.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Heavy Dust on Condenser Coils</h3>
            <p>
              Vegas&apos;s desert environment puts more particulate in the air than nearly any other major US city.
              Condenser coils that might stay reasonably clean for a full season elsewhere can become significantly
              restricted in Las Vegas after just a few months of continuous summer operation.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Extreme Ambient Temperature</h3>
            <p>
              AC systems are rated to operate up to 115-125°F ambient temperature. Vegas regularly hits or approaches
              those limits. At the top end of the operating range, systems have no thermal headroom. A slightly low
              refrigerant charge or marginally restricted coil that would be invisible in a 90°F climate becomes a
              warm-air problem at 115°F.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Check These Before Calling a Tech</h2>
            <p>
              Run through this list first. Any of these can cause warm air and cost nothing to fix.
            </p>
            <ol className="mt-3 space-y-2 list-decimal list-inside text-gray-700">
              <li>Check the thermostat: confirm it is set to COOL, not HEAT or FAN ONLY.</li>
              <li>Check the air filter. A completely clogged filter restricts airflow to the point the system freezes or underperforms.</li>
              <li>Check the outdoor unit. Make sure nothing is stacked against it. It needs 2 feet of clearance on all sides.</li>
              <li>Check the circuit breaker. A tripped breaker can cause the outdoor unit to stop while the indoor blower keeps running, blowing uncooled air.</li>
              <li>Check all supply vents. Closed vents in multiple rooms restrict airflow system-wide.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Call Immediately</h2>
            <p>
              Call a technician immediately, without trying other fixes first, if any of these apply:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
              <li>You hear grinding, screeching, or banging from the outdoor unit.</li>
              <li>The circuit breaker has tripped more than once.</li>
              <li>You see ice on the refrigerant lines or indoor unit.</li>
              <li>The outdoor unit is not running at all despite the thermostat calling for cool.</li>
              <li>Outdoor temperatures are above 105°F and you have elderly, children, or medical needs in the home.</li>
            </ul>
            <p className="mt-3">
              In Vegas, a failed AC in summer is not just uncomfortable. It becomes a health risk quickly. Do not
              wait out a full day before calling.
            </p>
          </section>

        </div>
      </article>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="AC blowing warm air? We can find the cause today."
        sub="Same-day diagnostic across the Las Vegas valley. Most warm-air issues resolved in a single visit."
      />
    </>
  );
}
