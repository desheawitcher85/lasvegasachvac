import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema, howToSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "24/7 Emergency AC Repair Las Vegas  -  60-Min Response",
  description:
    "Emergency AC repair in Las Vegas available 24/7. Tech dispatched within 60 minutes for confirmed emergencies. Call (702) 930-3316 right now.",
  alternates: { canonical: "/emergency-ac-repair/" },
};

const faqs = [
  {
    question: "How fast can you respond to an emergency?",
    answer:
      "60 minutes for Las Vegas, Henderson, Summerlin, and Paradise. 90 minutes for North Las Vegas, Spring Valley, Enterprise, and Boulder City. We dispatch from the call, not from a central location.",
  },
  {
    question: "Do you charge more for after-hours calls?",
    answer:
      "Standard rates apply 8am-6pm, 7 days a week. A flat surcharge applies for after-hours calls (6pm-10pm) and overnight calls (10pm-6am). Both are disclosed before dispatch.",
  },
  {
    question: "What counts as an AC emergency?",
    answer:
      "Any situation where the indoor temperature is climbing rapidly and vulnerable people or animals are present. Also: confirmed refrigerant leaks, electrical burning smells, commercial cooling failures, and any situation where health or food safety is at risk.",
  },
  {
    question: "Is it safe to run my AC if I think there's a refrigerant leak?",
    answer:
      "No. Turn it off. Running a system with a refrigerant leak will damage the compressor and make the repair more expensive. Let it thaw if there's ice, then call us.",
  },
  {
    question: "My AC smells like it's burning. What should I do?",
    answer:
      "Turn the system off at the thermostat and the breaker. A burning smell usually means an electrical issue: failed capacitor, burned motor windings, or a wiring problem. Call immediately.",
  },
  {
    question: "How hot does it get inside without AC in Las Vegas?",
    answer:
      "In summer, indoor temps can reach 95°F+ within 2-3 hours on a 110°F day. Pets and elderly people face heat stroke risk within hours. This is a genuine emergency situation.",
  },
];

export default function EmergencyACRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Emergency AC Repair", "emergency-ac-repair", "24/7 emergency AC repair across Las Vegas with 60-minute response for confirmed emergencies.")
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
            howToSchema({
              name: "How to handle an AC emergency in Las Vegas",
              description: "Steps to take when your AC fails in Las Vegas heat",
              steps: [
                { name: "Turn the system off", text: "Turn the AC off at the thermostat to prevent further damage, especially if there are unusual sounds or smells." },
                { name: "Check the breaker", text: "Check if the AC circuit breaker has tripped. Reset it once. If it trips again, leave it off and call for service." },
                { name: "Move vulnerable people to a cooler space", text: "Get children, elderly family members, and pets to a cooler area such as a neighbor's home or a nearby business with AC." },
                { name: "Call for emergency service", text: "Call Vegas AC HVAC at (702) 930-3316. We dispatch 24/7. Confirm the emergency and we'll have a tech on the way." },
                { name: "Do not run a frozen system", text: "If ice is visible on the lines, let the system thaw completely before restarting. Running it frozen damages the compressor." },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Emergency AC Repair", url: "/emergency-ac-repair/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="24/7 Emergency AC Repair in Las Vegas"
        supporting="Same-day emergency response across the Vegas valley. Call us at any hour."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Emergency AC Repair", href: "/emergency-ac-repair/" },
        ]}
        source="emergency-ac-repair"
      />

      {/* Big call CTA */}
      <section className="bg-red-600 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="text-white">
            <p className="font-bold text-xl">AC out right now?</p>
            <p className="text-red-100 text-sm">Call directly. We pick up 24/7.</p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 bg-white text-red-600 font-bold text-xl px-8 py-4 rounded hover:bg-red-50 transition-colors sm:ml-auto"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>
      </section>

      {/* When to call */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Call for Emergency Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "AC fully stopped working in extreme heat",
              "Refrigerant leak suspected (hissing sound, oil stains, ice on lines)",
              "Electrical smell or smoke coming from the unit",
              "Elderly people, infants, or anyone with medical conditions in the home",
              "Pets left at home without cooling",
              "Commercial property with critical cooling needs",
              "Indoor temperature above 90°F",
              "System tripping the breaker repeatedly",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 border border-red-100 rounded bg-red-50">
                <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vegas heat reality */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What "Emergency" Actually Means in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An AC failure in Vegas in July is not the same as an AC failure in Chicago in June. Indoor temperatures in Las Vegas homes can reach 95°F or higher within 2-3 hours when the outside temp is 110°F and the AC goes down.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heat stroke risk is real within that window for children, elderly adults, and pets. Food safety in your refrigerator starts to be a concern within 4 hours. If you have medications that require refrigeration, those have an even shorter window.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Don't wait on a "wait and see" approach in Las Vegas summer heat. If your AC stopped working, call now.
          </p>
        </div>
      </section>

      {/* Response times */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Response Time by Area</h2>
          <div className="border border-gray-200 rounded overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Area</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Emergency Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Las Vegas", "60 minutes"],
                  ["Henderson", "60 minutes"],
                  ["Summerlin", "60 minutes"],
                  ["Paradise", "60 minutes"],
                  ["North Las Vegas", "90 minutes"],
                  ["Spring Valley", "90 minutes"],
                  ["Enterprise", "90 minutes"],
                  ["Boulder City", "90 minutes"],
                  ["Anthem", "90 minutes"],
                ].map(([area, time]) => (
                  <tr key={area} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{area}</td>
                    <td className="px-4 py-3 font-medium text-gray-900">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* After-hours pricing */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">After-Hours Pricing</h2>
          <p className="text-gray-600 text-sm mb-6">We're upfront about surcharges. You get the price before dispatch.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { window: "8am – 6pm (7 days)", rate: "Standard rates", note: "No surcharge" },
              { window: "6pm – 10pm", rate: "Flat surcharge applies", note: "Disclosed before dispatch" },
              { window: "10pm – 6am", rate: "Flat surcharge applies", note: "Disclosed before dispatch" },
            ].map(({ window, rate, note }) => (
              <div key={window} className="border border-gray-200 rounded p-5 bg-white">
                <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {window}
                </p>
                <p className="font-bold text-gray-900 text-lg">{rate}</p>
                <p className="text-gray-500 text-xs mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="AC emergency in Las Vegas? Call right now."
        sub="We pick up 24/7. Tech dispatched within 60 minutes for confirmed emergencies."
      />
    </>
  );
}
