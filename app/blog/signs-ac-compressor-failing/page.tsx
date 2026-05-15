import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import Link from "next/link";

const slug = "signs-ac-compressor-failing";
const headline = "10 Signs Your AC Compressor Is Failing";
const description =
  "Signs of AC compressor failure: warm air, loud noises, tripped breakers, reduced airflow. Compressor replacement in Las Vegas costs $1,500-$2,800.";
const datePublished = "2024-07-01";

export const metadata: Metadata = {
  title: `${headline} | ${siteConfig.brandName}`,
  description,
  alternates: { canonical: `https://${siteConfig.domain}/blog/${slug}/` },
};

const faqs = [
  {
    question: "How long do compressors last in Las Vegas?",
    answer:
      "In moderate climates, compressors last 10-15 years. In Las Vegas, 8-12 years is more realistic. Systems that run in sustained 110°F heat without regular maintenance often see compressor issues before the 10-year mark. Annual tune-ups that check refrigerant levels and clean coils extend compressor life significantly.",
  },
  {
    question: "Can a failing compressor damage other parts of the AC?",
    answer:
      "Yes. A failing compressor draws excessive amperage, which stresses capacitors and contactors. It can also cause refrigerant pressure imbalances that overload the metering device or cause the evaporator coil to ice. Running a system with a known bad compressor risks turning a $1,500 compressor replacement into a $3,000+ whole-system repair.",
  },
  {
    question: "What causes AC compressor failure in Las Vegas?",
    answer:
      "The three most common causes are low refrigerant (causes overheating), dirty condenser coils (restricts heat rejection and overloads the compressor), and electrical issues like power surges or voltage spikes. Vegas heat amplifies all three. A compressor running in 115°F ambient heat with coils 20% clogged by dust is operating well outside its design limits.",
  },
  {
    question: "Is it worth replacing just the compressor on an older system?",
    answer:
      "Generally, no. If the system is 10+ years old, replacing only the compressor leaves you with an aging unit where other components will fail soon. A new compressor costs $1,500-$2,800. A fully new system costs $4,500-$9,000 and comes with a full manufacturer warranty. On systems under 8 years old, compressor replacement can make sense if everything else is in good condition.",
  },
  {
    question: "How much does AC compressor replacement cost in Las Vegas?",
    answer:
      "Compressor replacement in Las Vegas typically runs $1,500 to $2,800 for residential systems. The range depends on the compressor model (single-stage vs. two-stage vs. variable-speed), system tonnage, and labor time. Larger 5-ton systems and premium variable-speed compressors sit at the high end of the range.",
  },
];

const signs = [
  {
    number: "1",
    title: "AC Blowing Warm Air",
    body:
      "The compressor is responsible for pressurizing refrigerant so it can absorb heat from your home. A failing compressor cannot build adequate pressure, so refrigerant moves through the system without doing its job. The result is air that comes out of the vents at room temperature or warmer. Warm air is the most direct symptom of compressor problems.",
  },
  {
    number: "2",
    title: "Loud Clicking or Grinding Sounds from the Outdoor Unit",
    body:
      "A functioning compressor makes a low, steady hum. Clicking on startup is normal. Persistent clicking, grinding, rattling, or screeching from the outdoor unit is not. These sounds often indicate worn bearings inside the compressor motor, internal valve failure, or debris contact. Do not ignore these sounds. They typically get worse, not better.",
  },
  {
    number: "3",
    title: "Circuit Breaker Trips Repeatedly",
    body:
      "A failing compressor draws more amperage than a healthy one. When it pulls more current than the circuit is rated for, the breaker trips. If your AC breaker trips once during a heat wave, it can be a fluke. If it trips twice in a week, the compressor is the likely cause. Do not keep resetting the breaker without a diagnosis. Overcurrent is a fire and equipment hazard.",
  },
  {
    number: "4",
    title: "Hard Start: The System Struggles to Turn On",
    body:
      "A compressor in early failure often takes several seconds to start, sometimes making a labored humming sound before the outdoor fan and compressor fully engage. This is called hard starting. It happens because the compressor motor windings are weakening or the electrical starting components (capacitor, start kit) are degraded. A hard start kit can sometimes extend compressor life, but it is a temporary fix.",
  },
  {
    number: "5",
    title: "Oil Stains or Spots Near the Outdoor Unit",
    body:
      "Compressors contain lubricating oil that circulates with the refrigerant. If the compressor casing cracks or a seal fails, oil can leak out and leave dark stains on the concrete pad beneath the outdoor unit. Refrigerant leaks are colorless, but they often occur alongside oil seepage. If you see dark spots or a greasy residue near the outdoor unit, get it inspected.",
  },
  {
    number: "6",
    title: "Ice on the Refrigerant Lines or Indoor Coil",
    body:
      "When a compressor fails to maintain proper refrigerant pressure, the evaporator coil can get too cold and freeze the moisture in the air around it. Ice on the copper lines running between the indoor and outdoor unit, or frost on the indoor air handler, points to a refrigerant pressure problem. The compressor is often the source.",
  },
  {
    number: "7",
    title: "Electricity Bills Spike Without Explanation",
    body:
      "A struggling compressor runs longer cycles to achieve the same cooling. It uses more electricity to do less work. If your NV Energy bill jumps noticeably month-over-month without a change in usage habits, and your home still feels less comfortable, the compressor is a suspect. This is a subtle sign that often appears before the more dramatic symptoms.",
  },
  {
    number: "8",
    title: "Short Cycling: System Turns On and Off Rapidly",
    body:
      "Short cycling means the AC starts, runs for 1-3 minutes, shuts off, then restarts. A healthy system runs 15-20 minute cycles. Short cycling can have multiple causes, but a failing compressor that overheats quickly and trips its internal safety switch is a common one. Short cycling puts enormous stress on the compressor and capacitor, accelerating failure.",
  },
  {
    number: "9",
    title: "The System Will Not Start At All",
    body:
      "A compressor that has fully failed may prevent the entire outdoor unit from starting. You may hear the indoor air handler run (blowing unconditioned air) while the outdoor unit stays silent. This can also be caused by a failed capacitor or contactor, which are cheaper repairs. A tech can distinguish between them with a capacitance and resistance test in about 10 minutes.",
  },
  {
    number: "10",
    title: "Reduced Airflow from Vents",
    body:
      "Low airflow combined with warm air is a strong compressor signal. The compressor affects refrigerant pressure throughout the system. When pressure is off, the evaporator coil cannot absorb heat efficiently, and the system may reduce airflow as a result. Note: reduced airflow alone can also be caused by a clogged filter or dirty coil, so check those first.",
  },
];

export default function ACCompressorFailingPage() {
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
        supporting="Compressor failure is the most expensive AC repair. Catching it early can prevent full system damage."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Signs AC Compressor Failing", href: `/blog/${slug}/` },
        ]}
        source={`blog-${slug}`}
      />

      {/* Quick Answer */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-red-600 pl-4 py-1">
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Quick Answer</p>
            <p className="text-gray-800 text-base leading-relaxed">
              Common signs of compressor failure include AC blowing warm air, loud clicking or grinding sounds from the
              outdoor unit, circuit breaker trips, reduced airflow, and the unit struggling to start. Compressor
              replacement in Las Vegas runs $1,500-$2,800, making it one of the most expensive AC repairs.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Body */}
      <article className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-gray-800 space-y-10">

          <section>
            <p className="text-gray-700">
              The compressor is the heart of your AC system. It pressurizes refrigerant, which is what allows the
              refrigerant to absorb heat from inside your home and release it outside. When the compressor fails,
              the whole system stops working. Replacement costs $1,500-$2,800 for most residential systems in Las
              Vegas. Here are the 10 signs to watch for.
            </p>
          </section>

          <section className="space-y-8">
            {signs.map((sign) => (
              <div key={sign.number} className="border-l-4 border-gray-200 pl-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {sign.number}. {sign.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">{sign.body}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Causes Compressor Failure in Las Vegas</h2>
            <p>
              Las Vegas conditions create a perfect environment for early compressor failure. The three primary causes:
            </p>
            <ul className="mt-3 space-y-3 list-disc list-inside text-gray-700">
              <li>
                <strong>Low refrigerant from a leak.</strong> The compressor depends on refrigerant flowing through it
                to stay cool. Low refrigerant causes the compressor to overheat and eventually seize.
              </li>
              <li>
                <strong>Dirty condenser coils.</strong> In Vegas, dust accumulates on outdoor coils rapidly. Clogged
                coils cannot release heat, forcing the compressor to work in elevated temperatures it was not rated for.
              </li>
              <li>
                <strong>Electrical issues.</strong> Power surges, voltage fluctuations, and repeated hard starts
                degrade the motor windings inside the compressor over time.
              </li>
            </ul>
            <p className="mt-3">
              Annual maintenance that includes a coil cleaning, refrigerant check, and electrical inspection prevents
              most of these causes before they become compressor-level problems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Repair vs. Replace Math for Compressor Failures</h2>
            <p>
              Compressor replacement sits right at the financial threshold where replacement often wins. Here is how
              the math usually works:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">System Age</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Compressor Cost</th>
                    <th className="border border-gray-200 px-3 py-2 text-left font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2">Under 6 years</td>
                    <td className="border border-gray-200 px-3 py-2">$1,500-$2,800</td>
                    <td className="border border-gray-200 px-3 py-2 text-green-700">Repair (check warranty first)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-3 py-2">6-10 years</td>
                    <td className="border border-gray-200 px-3 py-2">$1,500-$2,800</td>
                    <td className="border border-gray-200 px-3 py-2 text-yellow-700">Get both quotes, compare</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2">10+ years</td>
                    <td className="border border-gray-200 px-3 py-2">$1,500-$2,800</td>
                    <td className="border border-gray-200 px-3 py-2 text-red-700">Replacement usually wins</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              For a detailed breakdown, see our guide on{" "}
              <Link href="/blog/when-to-replace-ac-las-vegas/" className="text-red-600 underline hover:text-red-700">
                when to replace your AC in Las Vegas
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If You Suspect Compressor Failure</h2>
            <p>
              Do not keep running the system. A failing compressor can damage the contactor, capacitor, and metering
              device by causing refrigerant pressure imbalances. Turning the system off prevents secondary damage.
            </p>
            <p className="mt-3">
              Set your thermostat to fan-only mode if you need air circulation while waiting for a technician. The
              indoor blower will run without engaging the compressor.
            </p>
            <p className="mt-3">
              Call for a diagnostic. A technician can confirm compressor failure with electrical tests in about
              15-20 minutes. They should give you both a repair quote and a replacement quote before you decide.
            </p>
          </section>

        </div>
      </article>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Suspect your compressor is failing?"
        sub="We diagnose AC compressor issues same day across the Las Vegas valley. Call now."
      />
    </>
  );
}
