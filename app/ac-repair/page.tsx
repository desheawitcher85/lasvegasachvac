import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "AC Repair in Las Vegas  -  Same-Day Service",
  description:
    "AC repair in Las Vegas for all makes and models. Diagnostic and repair same day in 90%+ of cases. Licensed, insured. Up-front pricing. Call (702) 930-3316.",
  alternates: { canonical: "/ac-repair/" },
};

const faqs = [
  {
    question: "How long does AC repair take?",
    answer:
      "Most repairs take 1-3 hours on site. We stock common parts on our trucks, so 90%+ of jobs are done in a single visit. Complex repairs like compressor replacements take 3-5 hours.",
  },
  {
    question: "How much will my repair cost?",
    answer:
      "Pricing varies by system and repair type. Call us for a free quote before any work starts.",
  },
  {
    question: "Do you charge for diagnostics?",
    answer:
      "Yes, there is a diagnostic fee. That fee is waived if you proceed with the repair. So if you move forward, there's no extra charge for the diagnosis.",
  },
  {
    question: "What brands do you repair?",
    answer:
      "All major brands: Carrier, Trane, Lennox, Goodman, Rheem, American Standard, York, Bryant, Amana, Day & Night, and others.",
  },
  {
    question: "Can my AC be repaired or do I need a new one?",
    answer:
      "General rule: if the repair costs more than 50% of a new system, replacement usually makes more sense. We'll give you honest numbers on both options so you can decide. We don't push replacements when a repair will do.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes. Parts carry a 1-year warranty. Labor is warranted for 90 days. If something fails within those windows, we come back at no charge.",
  },
  {
    question: "Is my refrigerant covered?",
    answer:
      "Refrigerant is priced per pound and billed separately from labor. We'll tell you exactly how many pounds your system needs and the cost per pound before charging anything.",
  },
  {
    question: "What if my AC fails on the weekend?",
    answer:
      "Call us. We work 7 days a week. Standard rates apply Monday through Sunday, 8am to 6pm. After-hours and overnight service has a flat surcharge that we'll quote you upfront before dispatching.",
  },
];

export default function ACRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("AC Repair", "ac-repair", "Same-day AC diagnostic and repair for residential and commercial systems across Las Vegas.")
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
              { name: "AC Repair", url: "/ac-repair/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="AC Repair in Las Vegas"
        supporting="Same-day AC repair for residential and commercial systems. Most repairs done in one visit."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "AC Repair", href: "/ac-repair/" },
        ]}
        source="ac-repair"
      />

      {/* What we fix */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Fix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { issue: "AC not cooling", detail: "System runs but can't bring the temp down. Usually a refrigerant, coil, or compressor issue." },
              { issue: "AC blowing warm air", detail: "Condenser coil dirty, refrigerant low, capacitor failed, or compressor starting to go." },
              { issue: "AC compressor problems", detail: "Hard starting, not starting, or tripping the breaker. Compressor is the most expensive repair." },
              { issue: "Capacitor failure", detail: "One of the most common Vegas AC failures. Capacitors wear out fast in extreme heat." },
              { issue: "Refrigerant leaks (R-410A)", detail: "Hissing sound, ice on the lines, or oil stains near fittings. Requires leak detection and repair." },
              { issue: "Thermostat issues", detail: "Incorrect readings, unresponsive controls, or wiring problems between the stat and the air handler." },
              { issue: "Strange noises", detail: "Rattling, grinding, squealing, or banging. Each sound points to a different component." },
              { issue: "Frozen AC coils", detail: "Ice on the evaporator coil means restricted airflow or low refrigerant. Don't run it until it's fixed." },
              { issue: "Short cycling", detail: "System turns on and off every few minutes. Causes compressor wear and poor cooling." },
              { issue: "AC won't turn on", detail: "Could be a tripped breaker, blown fuse, failed contactor, or control board issue." },
            ].map(({ issue, detail }) => (
              <div key={issue} className="border border-gray-200 rounded p-4 bg-gray-50">
                <p className="font-semibold text-gray-900 mb-1">{issue}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair process */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Repair Process</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Diagnostic visit (fee waived with repair)", desc: "Tech arrives, runs a full system diagnostic. Identifies the problem and checks for related issues." },
              { step: "2", title: "Up-front pricing before any work", desc: "You get the full repair cost before we touch anything. No pressure. No surprises." },
              { step: "3", title: "Repair completed same day in 90%+ of cases", desc: "We stock common parts on the truck. Most jobs are done in a single visit." },
              { step: "4", title: "Parts and labor warranty", desc: "1-year warranty on parts. 90-day warranty on labor. If it fails within those windows, we come back at no charge." },
              { step: "5", title: "Follow-up call", desc: "We follow up within 48 hours to confirm the system is running right." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-gray-600 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Vegas-specific */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why AC Units Fail More Often in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vegas is harder on AC equipment than almost anywhere else in the country.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Roof surface temperatures hit 130°F in summer. The outdoor condenser sits in that heat all day, working against ambient temps that can push 115°F. That thermal load wears out capacitors, contactors, and compressors faster than the manufacturer's rated lifespan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Caliche dust gets into condenser coils and reduces airflow. Monsoon-season power surges fry capacitors and control boards. Hard water causes scale on water-cooled systems and humidifiers. And most Vegas systems run 9+ months a year instead of the national 5-6 month average.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A 10-year-old Vegas AC has logged more runtime than a 15-year-old system in Phoenix or Denver. Plan accordingly.
          </p>
        </div>
      </section>

      <ReviewsCarousel />

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading={`AC broken in the ${new Date().getMonth() >= 4 && new Date().getMonth() <= 9 ? "Vegas heat" : "cold snap"}? We can help today.`}
        sub={`Call ${siteConfig.phone} or fill out the quote form. Most calls answered in under 2 minutes.`}
      />
    </>
  );
}
