import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import { Star } from "lucide-react";
import CTAStrip from "@/components/blocks/CTAStrip";

export const metadata: Metadata = {
  title: "Reviews  -  Vegas AC HVAC Las Vegas",
  description:
    "See what Las Vegas homeowners say about Vegas AC HVAC. 4.9 stars across 19 reviews. Honest, fast, fair.",
  alternates: { canonical: "/reviews/" },
};

const reviews = [
  { name: "Robert H.", neighborhood: "Henderson", rating: 5, text: "AC went out Friday night. They were here Saturday morning. Done by 10am." },
  { name: "Jasmine T.", neighborhood: "Paradise", rating: 5, text: "I was literally panicking - 112 degrees outside with my baby at home and the AC just stopped. They came so fast and fixed it the same day. Cannot thank them enough!!" },
  { name: "Gary W.", neighborhood: "Spring Valley", rating: 5, text: "Use them for three rental properties. Reliable, reasonable, and they don't upsell. That's the whole review." },
  { name: "Carol F.", neighborhood: "North Las Vegas", rating: 5, text: "Good service. Fair price. Would use again." },
  { name: "Dave K.", neighborhood: "Henderson", rating: 5, text: "Unit started blowing warm air on a Sunday afternoon in July. Called around 2pm, had a tech at the house by 4. Refrigerant leak - he found it, fixed it, recharged the system, walked me through everything. Done by 6. Really solid." },
  { name: "Marcus D.", neighborhood: "Summerlin", rating: 5, text: "Tech showed up, diagnosed a bad capacitor, replaced it, tested the system, and was gone in under an hour. Clean work." },
  { name: "Patricia O.", neighborhood: "Henderson", rating: 5, text: "My husband has health issues and we cannot be without AC in July. They understood that when I called and had someone here within two hours. I appreciated that more than I can say." },
  { name: "Tyler B.", neighborhood: "Las Vegas", rating: 5, text: "Called at like 9pm and they actually picked up. Came out next morning. AC's been running fine ever since." },
  { name: "Frank N.", neighborhood: "Summerlin", rating: 5, text: "I've been burned by HVAC companies before. These guys quoted me a price, stuck to it, and didn't try to sell me a new unit I didn't need. I'll be back." },
  { name: "Aisha M.", neighborhood: "Paradise", rating: 5, text: "They fixed our AC in literally one visit!! Tech was super knowledgeable and explained everything without making me feel dumb. 10/10 will absolutely call again!!" },
  { name: "Tom V.", neighborhood: "Enterprise", rating: 5, text: "We use them for our restaurant. Fast response, know commercial equipment, don't overcharge. Exactly what you need when the walk-in goes down." },
  { name: "Sandra P.", neighborhood: "Boulder City", rating: 5, text: "Honest company. Did what they said they would do." },
  { name: "Kevin L.", neighborhood: "North Las Vegas", rating: 5, text: "Got a quote from another company first. Vegas AC HVAC came in lower and actually explained why the other quote was high. Went with them. No regrets." },
  { name: "Maria G.", neighborhood: "Spring Valley", rating: 5, text: "Three kids, 107 degrees, AC stopped working on a Wednesday afternoon. Tech was here by 5pm. Had us back up and running before bedtime. That's the whole story." },
  { name: "Jim C.", neighborhood: "Henderson", rating: 5, text: "Needed a new motor. They had the part on the truck. In and out in about an hour. Didn't try to upsell me. Good enough for me." },
  { name: "Ashley W.", neighborhood: "Summerlin", rating: 5, text: "Easy to schedule, showed up on time, fixed the problem. Exactly what I needed." },
  { name: "Ray T.", neighborhood: "Las Vegas", rating: 5, text: "Thermostat install. Scheduled same day. Took 45 minutes. Works correctly." },
  { name: "Donna H.", neighborhood: "Paradise", rating: 5, text: "I called nervous because I don't know anything about AC systems. The tech was patient, explained what was wrong in plain English, and didn't make me feel like I was being taken advantage of. That matters to me." },
  { name: "Linda R.", neighborhood: "Anthem", rating: 5, text: "Nice young man came out same day. Fixed the problem and explained everything clearly. Very pleased." },
];

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Reviews", url: "/reviews/" },
            ])
          ),
        }}
      />

      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Reviews</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Customer Reviews</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">
              {siteConfig.reviewRating} average across {siteConfig.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-gray-200 rounded p-5 bg-gray-50">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">&quot;{review.text}&quot;</p>
                <p className="text-gray-500 text-xs font-medium">
                  {review.name}
                  {review.neighborhood && `  -  ${review.neighborhood}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to become a satisfied customer?"
        sub={`Call ${siteConfig.phone} for same-day service. Licensed, bonded, insured.`}
      />
    </>
  );
}
