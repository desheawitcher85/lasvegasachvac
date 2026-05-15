import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/siteConfig";
import QuoteForm from "@/components/blocks/QuoteForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Vegas AC HVAC  -  Call or Get a Quote",
  description:
    "Contact Vegas AC HVAC for same-day service in Las Vegas. Call (702) 930-3316 or fill out the quote form. Available 24/7.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact/" },
            ])
          ),
        }}
      />

      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Contact</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-600">Call for same-day service or fill out the form. We'll get back to you fast.</p>
        </div>
      </div>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Phone</p>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="text-xl font-bold text-red-600 hover:text-red-700"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Available 24/7, including nights and weekends</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-gray-900 hover:text-red-600">
                      {siteConfig.email}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">For non-urgent inquiries only</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Hours</p>
                    <p className="text-gray-900">{siteConfig.hours}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Standard rates 8am-6pm. After-hours surcharges apply.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Service Area</p>
                    <p className="text-gray-900">{siteConfig.address.city}, {siteConfig.address.state} and surrounding communities</p>
                    <p className="text-xs text-gray-500 mt-0.5">Las Vegas, Henderson, Summerlin, North Las Vegas, Spring Valley, and more</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
                <p className="text-sm font-semibold text-gray-700 mb-1">Emergency AC failure?</p>
                <p className="text-xs text-gray-600 mb-3">Don't use email for emergencies. Call directly for the fastest response.</p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="block w-full bg-red-600 text-white text-center font-semibold py-3 rounded hover:bg-red-700 transition-colors text-sm"
                >
                  Call Now: {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Quote form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Get a Free Quote</h2>
              <div className="border border-gray-200 rounded p-5 bg-gray-50">
                <QuoteForm source="contact" mode="full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
