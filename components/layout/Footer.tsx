import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig, services, neighborhoods } from "@/lib/siteConfig";
import QuoteForm from "@/components/blocks/QuoteForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Quote form repeat */}
      <div className="bg-gray-800 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-2xl font-bold mb-2">Get a Free Same-Day Quote</h2>
          <p className="text-gray-400 mb-6 text-sm">Available 24/7. Most jobs scheduled same day.</p>
          <QuoteForm source="footer" />
        </div>
      </div>

      {/* NAP + links */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* NAP */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">{siteConfig.brandName}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
              <p className="text-gray-400">
                {siteConfig.address.city}, {siteConfig.address.state}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Licensed, Bonded &amp; Insured
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="text-sm hover:text-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {neighborhoods.map((n) => (
                <li key={n.slug}>
                  <Link href={`/${n.slug}/`} className="text-sm hover:text-white transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust + info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Why Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Available 24/7</li>
              <li>Same-Day Service</li>
              <li>Licensed, Bonded &amp; Insured</li>
              <li>Up-Front Pricing</li>
              <li>100% Satisfaction Guarantee</li>
              <li>Free Estimates</li>
            </ul>
            <div className="mt-6">
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {year} {siteConfig.brandName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact/" className="hover:text-gray-300 transition-colors">Contact</Link>
            <span>|</span>
            <Link href="/get-a-quote/" className="hover:text-gray-300 transition-colors">Get a Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
