"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface Review {
  name: string;
  rating: number;
  text: string;
  neighborhood?: string;
}

const placeholderReviews: Review[] = [
  {
    name: "Robert H.",
    rating: 5,
    text: "AC went out Friday night. They were here Saturday morning. Done by 10am.",
    neighborhood: "Henderson",
  },
  {
    name: "Jasmine T.",
    rating: 5,
    text: "I was literally panicking - 112 degrees outside with my baby at home and the AC just stopped. They came so fast and fixed it the same day. Cannot thank them enough!!",
    neighborhood: "Paradise",
  },
  {
    name: "Gary W.",
    rating: 5,
    text: "Use them for three rental properties. Reliable, reasonable, and they don't upsell. That's the whole review.",
    neighborhood: "Spring Valley",
  },
  {
    name: "Carol F.",
    rating: 5,
    text: "Good service. Fair price. Would use again.",
    neighborhood: "North Las Vegas",
  },
  {
    name: "Dave K.",
    rating: 5,
    text: "Unit started blowing warm air on a Sunday afternoon in July. Called around 2pm, had a tech at the house by 4. Refrigerant leak - he found it, fixed it, recharged the system, walked me through everything. Done by 6. Really solid.",
    neighborhood: "Henderson",
  },
  {
    name: "Marcus D.",
    rating: 5,
    text: "Tech showed up, diagnosed a bad capacitor, replaced it, tested the system, and was gone in under an hour. Clean work.",
    neighborhood: "Summerlin",
  },
  {
    name: "Patricia O.",
    rating: 5,
    text: "My husband has health issues and we cannot be without AC in July. They understood that when I called and had someone here within two hours. I appreciated that more than I can say.",
    neighborhood: "Henderson",
  },
  {
    name: "Tyler B.",
    rating: 5,
    text: "Called at like 9pm and they actually picked up. Came out next morning. AC's been running fine ever since.",
    neighborhood: "Las Vegas",
  },
  {
    name: "Frank N.",
    rating: 5,
    text: "I've been burned by HVAC companies before. These guys quoted me a price, stuck to it, and didn't try to sell me a new unit I didn't need. I'll be back.",
    neighborhood: "Summerlin",
  },
  {
    name: "Aisha M.",
    rating: 5,
    text: "They fixed our AC in literally one visit!! Tech was super knowledgeable and explained everything without making me feel dumb. 10/10 will absolutely call again!!",
    neighborhood: "Paradise",
  },
  {
    name: "Tom V.",
    rating: 5,
    text: "We use them for our restaurant. Fast response, know commercial equipment, don't overcharge. Exactly what you need when the walk-in goes down.",
    neighborhood: "Enterprise",
  },
  {
    name: "Sandra P.",
    rating: 5,
    text: "Honest company. Did what they said they would do.",
    neighborhood: "Boulder City",
  },
  {
    name: "Kevin L.",
    rating: 5,
    text: "Got a quote from another company first. Vegas AC HVAC came in lower and actually explained why the other quote was high. Went with them. No regrets.",
    neighborhood: "North Las Vegas",
  },
  {
    name: "Maria G.",
    rating: 5,
    text: "Three kids, 107 degrees, AC stopped working on a Wednesday afternoon. Tech was here by 5pm. Had us back up and running before bedtime. That's the whole story.",
    neighborhood: "Spring Valley",
  },
  {
    name: "Jim C.",
    rating: 5,
    text: "Needed a new motor. They had the part on the truck. In and out in about an hour. Didn't try to upsell me. Good enough for me.",
    neighborhood: "Henderson",
  },
  {
    name: "Ashley W.",
    rating: 5,
    text: "Easy to schedule, showed up on time, fixed the problem. Exactly what I needed.",
    neighborhood: "Summerlin",
  },
  {
    name: "Ray T.",
    rating: 5,
    text: "Thermostat install. Scheduled same day. Took 45 minutes. Works correctly.",
    neighborhood: "Las Vegas",
  },
  {
    name: "Donna H.",
    rating: 5,
    text: "I called nervous because I don't know anything about AC systems. The tech was patient, explained what was wrong in plain English, and didn't make me feel like I was being taken advantage of. That matters to me.",
    neighborhood: "Paradise",
  },
  {
    name: "Linda R.",
    rating: 5,
    text: "Nice young man came out same day. Fixed the problem and explained everything clearly. Very pleased.",
    neighborhood: "Anthem",
  },
];

interface ReviewsCarouselProps {
  reviews?: Review[];
  carousel?: boolean;
}

export default function ReviewsCarousel({ reviews = placeholderReviews, carousel = false }: ReviewsCarouselProps) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What Our Customers Say</h2>
        <p className="text-gray-500 text-sm mb-8">
          4.9 stars across 19 reviews
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visible.map((review, i) => (
            <div key={i} className="border border-gray-200 rounded p-5 bg-gray-50">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
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

        {carousel && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm text-gray-500">
              {page + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
