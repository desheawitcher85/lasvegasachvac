import Link from "next/link";
import QuoteForm from "./QuoteForm";

interface Breadcrumb {
  name: string;
  href: string;
}

interface PageHeaderProps {
  h1: string;
  supporting: string;
  breadcrumbs: Breadcrumb[];
  source: string;
  mapSrc?: string;
}

export default function PageHeader({ h1, supporting, breadcrumbs, source, mapSrc }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-4" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <Link href={crumb.href} className="hover:text-red-600 transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-gray-700">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* H1 + supporting + optional map */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{h1}</h1>
            <p className="text-gray-600 mb-4">{supporting}</p>
            {mapSrc && (
              <div className="rounded overflow-hidden">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${h1} - service area map`}
                />
              </div>
            )}
          </div>

          {/* Mini quote form */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded p-5 bg-gray-50 lg:sticky lg:top-4">
              <p className="font-semibold text-gray-900 mb-4 text-sm">Get a Free Same-Day Quote</p>
              <QuoteForm source={source} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
