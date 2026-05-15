import Image from "next/image";
import QuoteForm from "./QuoteForm";
import TrustBadges from "./TrustBadges";

export default function HeroBlock() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center">
      {/* Background image */}
      <Image
        src="/las-vegas-skyline.jpg"
        alt="Las Vegas valley skyline - Vegas AC HVAC serves the entire Las Vegas metro area"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: H1 + trust signals */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              AC Repair &amp; HVAC Service in Las Vegas
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Same-day AC repair across Las Vegas, Henderson, and Summerlin. Licensed, bonded, insured. Available 24/7.
            </p>
            <TrustBadges dark />
          </div>

          {/* Right: Quote form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h2 className="text-gray-900 font-bold text-lg mb-1">Get a Free Same-Day Quote</h2>
              <p className="text-gray-500 text-xs mb-4">Most calls returned within 15 minutes.</p>
              <QuoteForm source="homepage-hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
