import type { Metadata } from "next";
import HeroBlock from "@/components/blocks/HeroBlock";
import ServiceGrid from "@/components/blocks/ServiceGrid";
import ServiceAreaList from "@/components/blocks/ServiceAreaList";
import FAQBlock from "@/components/blocks/FAQBlock";
import ReviewsCarousel from "@/components/blocks/ReviewsCarousel";
import CTAStrip from "@/components/blocks/CTAStrip";
import { faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import { ShieldCheck, Clock, DollarSign, Star, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair & HVAC Service in Las Vegas | Vegas AC HVAC",
  description:
    "Same-day AC repair across Las Vegas, Henderson, and Summerlin. Licensed, bonded, insured. Emergency service available 24/7. Call (702) 930-3316.",
  alternates: { canonical: "/" },
};

const homepageFAQs = [
  {
    question: "How much does AC repair cost in Las Vegas?",
    answer:
      "Pricing varies by repair type and system. Call us for a free quote before any work starts.",
  },
  {
    question: "Do you offer emergency AC repair?",
    answer:
      "Yes. We answer calls 24/7, including nights, weekends, and holidays. For confirmed emergencies in Las Vegas, Henderson, Summerlin, and Paradise, we dispatch a tech within 60 minutes. Outlying areas like North Las Vegas and Boulder City are 90 minutes.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We cover the full Las Vegas valley including Las Vegas, Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, Paradise, Boulder City, Anthem, Aliante, and Centennial Hills.",
  },
  {
    question: "How quickly can you get to my house?",
    answer:
      "Same-day in 95%+ of cases. Emergency calls are dispatched within 60-90 minutes. Non-emergency calls are usually scheduled within 2-4 hours for same-day service.",
  },
  {
    question: "What's the average AC repair turnaround time?",
    answer:
      "Most repairs take 1-3 hours on site. We carry common parts on our trucks, so 90%+ of repairs are finished in a single visit. If we need to order a part, we'll tell you upfront and schedule a return trip.",
  },
  {
    question: "Do you work on commercial HVAC systems?",
    answer:
      "Yes. We service rooftop units, walk-in coolers, make-up air systems, and exhaust hoods. Preventive maintenance contracts are available for restaurants, retail, offices, and warehouses.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes. All technicians are Nevada licensed, and we carry full general liability and workers compensation insurance. We're also bonded. Ask to see documentation any time.",
  },
  {
    question: "Do you offer financing for new AC installs?",
    answer:
      "Yes. We work with financing partners to offer plans with low monthly payments. Ask about financing when you call for your free estimate.",
  },
  {
    question: "What brands do you service?",
    answer:
      "All major brands: Carrier, Trane, Lennox, Goodman, Rheem, American Standard, York, Bryant, Amana, Day & Night, Mitsubishi, Daikin, and others.",
  },
  {
    question: "Why do AC units fail more often in Las Vegas?",
    answer:
      "A few reasons. Roof surface temps hit 130°F, making outdoor units work harder. Caliche dust clogs condenser coils. Hard water causes scale buildup in humidifiers and water-cooled systems. Monsoon-season power surges fry capacitors and control boards. Vegas systems also run 9+ months a year instead of the national 5-6 month average. They simply wear out faster.",
  },
];

const usps = [
  {
    icon: Clock,
    title: "Available 24/7",
    description:
      "Phone answered by a real person around the clock. Emergency dispatch within 60 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Bonded & Insured",
    description:
      "Nevada licensed technicians. Full liability and workers comp. Documentation available on request.",
  },
  {
    icon: DollarSign,
    title: "Up-Front Pricing",
    description:
      "You get the full price before any work starts. No surprise add-ons when the bill comes.",
  },
  {
    icon: Star,
    title: "Same-Day Service",
    description:
      "95%+ of calls get same-day service. Most jobs are scheduled within 2-4 hours of your call.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description:
      "If you're not satisfied with the work, we'll make it right. That's the whole policy.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homepageFAQs)) }}
      />

      <HeroBlock />

      <ServiceGrid />

      <ServiceAreaList />

      {/* Why choose us */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Vegas AC HVAC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-red-600 mt-0.5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel carousel />

      <FAQBlock faqs={homepageFAQs} />

      {/* About blurb */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Vegas AC HVAC</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vegas AC HVAC was built to give Las Vegas homeowners a reliable, honest AC repair option. No call centers. No subcontractors. When you call, a local technician picks up and comes out.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vegas is one of the hardest climates on AC equipment in the country. Roof temps over 130 degrees. Dust everywhere. Nine months of runtime. We know what breaks here and how to fix it fast.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We service Las Vegas, Henderson, Summerlin, North Las Vegas, Spring Valley, and the full surrounding valley. Same-day in most cases. Available 24/7 for emergencies. All work comes with a written warranty.
          </p>
        </div>
      </section>

      <CTAStrip
        heading="AC not cooling? We can be there today."
        sub={`Call ${siteConfig.phone} or fill out the form. Most calls answered in under 2 minutes.`}
      />
    </>
  );
}
