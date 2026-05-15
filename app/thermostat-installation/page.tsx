import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Thermostat Installation Las Vegas  -  Nest, Ecobee, Honeywell",
  description:
    "Smart thermostat installation in Las Vegas. Nest, Ecobee, Honeywell, Sensi, and more. NV Energy rebates available. Same-day service. Call (702) 930-3316.",
  alternates: { canonical: "/thermostat-installation/" },
};

const faqs = [
  {
    question: "How much does thermostat installation cost in Las Vegas?",
    answer:
      "Cost depends on the thermostat model and whether a C-wire adapter is needed. Call for a quote.",
  },
  {
    question: "Do I need a C-wire for a smart thermostat?",
    answer:
      "Many smart thermostats require a C-wire (common wire) for continuous power. A lot of older Vegas homes don't have one at the thermostat. We can add a C-wire adapter or run a new wire depending on your system.",
  },
  {
    question: "Which smart thermostat is best for Las Vegas?",
    answer:
      "For most homes, the Ecobee SmartThermostat Premium or Nest Learning Thermostat (4th gen) are the best options. Both handle extended cooling cycles well and have remote sensors for multi-room balancing. The Ecobee edges out Nest in homes with rooms that run significantly hotter than others.",
  },
  {
    question: "Are there rebates for smart thermostats in Nevada?",
    answer:
      "Yes. NV Energy offers rebates on qualifying smart thermostats. Ask when you call - rebate availability changes periodically.",
  },
  {
    question: "Can you help me set it up after installation?",
    answer:
      "Yes. We walk you through the schedule setup and show you how to use the app before we leave. The goal is that you're comfortable running it on your own.",
  },
  {
    question: "Will a smart thermostat save money on my NV Energy bill?",
    answer:
      "Yes, if you use it right. The main savings come from automatically raising the setpoint when you're away or asleep, and from better scheduling around NV Energy's peak rate hours. Most households see 10-15% savings on cooling costs.",
  },
];

export default function ThermostatInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Thermostat Installation", "thermostat-installation", "Smart thermostat installation in Las Vegas. Nest, Ecobee, Honeywell, and other brands.")
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
              { name: "Thermostat Installation", url: "/thermostat-installation/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="Thermostat Installation in Las Vegas"
        supporting="Smart thermostat install for Nest, Ecobee, Honeywell, and others. Same-day service."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Thermostat Installation", href: "/thermostat-installation/" },
        ]}
        source="thermostat-installation"
      />

      {/* Vegas benefits */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Smart Thermostats Matter in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A Las Vegas AC runs 10-12 hours a day in summer. That's roughly double the national average. Anything you can do to reduce unnecessary runtime saves real money.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A smart thermostat lets you set the house to 82°F while you're at work and cool it back to 74°F before you get home. Without smart scheduling, the system runs all day trying to hold 74°F in a house nobody's in. That's pure waste.
          </p>
          <p className="text-gray-700 leading-relaxed">
            NV Energy also has peak rate hours in summer. A smart thermostat can pre-cool the house before peak rates kick in and reduce runtime during the expensive hours.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Brands We Install</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { brand: "Ecobee SmartThermostat Premium", note: "Our top pick for Las Vegas homes with multiple rooms. Remote sensors balance temperature across zones. Works with all major smart home platforms." },
              { brand: "Nest Learning Thermostat (4th Gen)", note: "Learns your schedule and adjusts automatically. Clean interface, Google Home integration, NV Energy rebate eligible." },
              { brand: "Honeywell Home T6 Pro / T9", note: "Reliable, simple, and compatible with almost any HVAC system. The T9 includes a remote room sensor." },
              { brand: "Sensi Smart Thermostat", note: "Mid-range option with straightforward scheduling and good app. Emerson-made, solid reliability record." },
            ].map(({ brand, note }) => (
              <div key={brand} className="border border-gray-200 rounded p-5 bg-white">
                <p className="font-semibold text-gray-900 mb-2">{brand}</p>
                <p className="text-gray-600 text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Ready to install a smart thermostat?"
        sub={`Same-day installation available. Call ${siteConfig.phone} to schedule.`}
      />
    </>
  );
}
