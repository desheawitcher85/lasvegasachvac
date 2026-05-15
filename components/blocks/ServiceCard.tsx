import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  name: string;
  slug: string;
  description: string;
  Icon?: LucideIcon;
}

export default function ServiceCard({ name, slug, description, Icon }: ServiceCardProps) {
  return (
    <div className="border border-gray-200 rounded p-5 bg-white hover:border-red-300 transition-colors">
      {Icon && (
        <div className="mb-3">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
      )}
      <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={`/${slug}/`}
        className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors"
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}
