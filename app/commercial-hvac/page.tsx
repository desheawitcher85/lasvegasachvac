import type { Metadata } from "next";
import PageHeader from "@/components/blocks/PageHeader";
import FAQBlock from "@/components/blocks/FAQBlock";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Commercial HVAC Service Las Vegas  -  Restaurants, Retail, Office",
  description:
    "Commercial HVAC repair and maintenance in Las Vegas. Rooftop units, walk-in coolers, restaurants, offices. Maintenance contracts available. Call (702) 930-3316.",
  alternates: { canonical: "/commercial-hvac/" },
};

const faqs = [
  {
    question: "Do you work on restaurant HVAC systems?",
    answer:
      "Yes. Restaurants are one of our primary commercial clients. We service rooftop units, make-up air units, exhaust hoods, and walk-in coolers and freezers.",
  },
  {
    question: "What is a preventive maintenance contract?",
    answer:
      "A quarterly service contract that includes scheduled tune-ups, filter changes, and coil cleaning. Contract clients get priority scheduling and discounted rates on repairs.",
  },
  {
    question: "How quickly can you respond to a commercial emergency?",
    answer:
      "Commercial emergencies, particularly walk-in cooler failures with food at risk, get priority dispatch. Call and let us know it's a commercial food safety situation.",
  },
  {
    question: "Do you work on rooftop units?",
    answer:
      "Yes. Rooftop units are our most common commercial call. We work on all major brands including Carrier, Trane, Lennox, York, and Daikin Applied.",
  },
  {
    question: "Can you handle HVAC for a multi-unit commercial property?",
    answer:
      "Yes. We work with property managers for retail centers, office buildings, and multi-tenant warehouses. We can set up maintenance schedules for multiple units.",
  },
  {
    question: "Are you familiar with commercial code requirements in Las Vegas?",
    answer:
      "Yes. Commercial HVAC work in Clark County requires licensed contractors and must meet specific ventilation and refrigerant handling requirements. We handle permit coordination when required.",
  },
];

export default function CommercialHVACPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema("Commercial HVAC", "commercial-hvac", "Commercial HVAC repair and maintenance for restaurants, retail, offices, and industrial properties in Las Vegas.")
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
              { name: "Commercial HVAC", url: "/commercial-hvac/" },
            ])
          ),
        }}
      />

      <PageHeader
        h1="Commercial HVAC Service in Las Vegas"
        supporting="Restaurant, retail, office, and industrial HVAC service. Maintenance contracts available."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Commercial HVAC", href: "/commercial-hvac/" },
        ]}
        source="commercial-hvac"
      />

      {/* Properties we service */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Properties We Service</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Restaurants and bars",
              "Retail stores and shopping centers",
              "Office buildings",
              "Medical offices and clinics",
              "Warehouses and distribution centers",
              "Schools and churches",
              "Hotels and hospitality",
              "Auto dealerships",
              "Industrial facilities",
            ].map((prop) => (
              <div key={prop} className="border border-gray-200 rounded p-3 bg-gray-50 text-sm text-gray-700">
                {prop}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { service: "Rooftop unit repair and replacement", detail: "We work on all major commercial RTU brands. Carrier, Trane, York, Lennox, Daikin Applied, and others." },
              { service: "Walk-in cooler and freezer service", detail: "Food safety emergencies get priority dispatch. We carry commercial refrigeration parts for common systems." },
              { service: "Make-up air units", detail: "Restaurant make-up air unit repair, calibration, and replacement. We understand the interaction with kitchen exhaust systems." },
              { service: "Exhaust hood systems", detail: "Hood balance testing and adjustment, exhaust fan repair, and compliance with Clark County ventilation requirements." },
              { service: "Preventive maintenance contracts", detail: "Quarterly service visits, priority dispatch, discounted repair rates, and documentation for insurance and code compliance." },
              { service: "New commercial installation", detail: "Design-build HVAC for tenant improvements, build-outs, and new construction. We coordinate with contractors and inspectors." },
            ].map(({ service, detail }) => (
              <div key={service} className="border border-gray-200 rounded p-5 bg-white">
                <p className="font-semibold text-gray-900 mb-2">{service}</p>
                <p className="text-gray-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance contracts */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preventive Maintenance Contracts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vegas commercial HVAC equipment runs hard. Roof temps above 130°F, dust loading from desert wind, and long cooling seasons mean systems that skip maintenance break down during peak demand periods.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our quarterly maintenance contracts include scheduled visits, coil cleaning, filter changes, refrigerant checks, and documentation of system condition. Contract clients get priority scheduling when something does break.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For restaurants, we also verify that make-up air and exhaust are balanced properly each visit. An imbalanced kitchen exhaust system costs you money on energy and creates code compliance exposure.
          </p>
        </div>
      </section>

      <FAQBlock faqs={faqs} />

      <CTAStrip
        heading="Commercial HVAC issue? We respond fast."
        sub={`Call ${siteConfig.phone} for commercial service. We prioritize food safety and critical cooling emergencies.`}
      />
    </>
  );
}
