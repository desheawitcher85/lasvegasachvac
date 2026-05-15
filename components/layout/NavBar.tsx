"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { services, neighborhoods } from "@/lib/siteConfig";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-3">
                Services <ChevronDown className="w-3 h-3" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg py-2 w-56 z-50">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}/`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Area dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors py-3">
                Service Area <ChevronDown className="w-3 h-3" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded shadow-lg py-2 w-48 z-50">
                  {neighborhoods.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/${n.slug}/`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {n.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">About</Link>
            <Link href="/reviews/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">Reviews</Link>
            <Link href="/contact/" className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/get-a-quote/"
              className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="block py-2 text-sm text-gray-700 hover:text-red-600"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-4 mb-2">Service Areas</p>
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/${n.slug}/`}
                className="block py-2 text-sm text-gray-700 hover:text-red-600"
                onClick={() => setMobileOpen(false)}
              >
                {n.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
              <Link href="/about/" className="block py-2 text-sm text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/reviews/" className="block py-2 text-sm text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Reviews</Link>
              <Link href="/contact/" className="block py-2 text-sm text-gray-700 hover:text-red-600" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>
            <Link
              href="/get-a-quote/"
              className="block mt-4 bg-red-600 text-white text-sm font-semibold px-4 py-3 rounded text-center hover:bg-red-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
