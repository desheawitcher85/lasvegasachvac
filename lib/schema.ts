import { siteConfig } from "./siteConfig";

const baseUrl = `https://${siteConfig.domain}`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": siteConfig.brandName,
    "image": `${baseUrl}/logo.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": siteConfig.phoneRaw,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398,
    },
    "areaServed": siteConfig.serviceArea.map((city) => ({
      "@type": "City",
      "name": city,
    })),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": siteConfig.reviewRating.toString(),
      "reviewCount": siteConfig.reviewCount.toString(),
    },
  };
}

export function serviceSchema(serviceName: string, serviceSlug: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "description": description,
    "provider": {
      "@id": baseUrl,
    },
    "url": `${baseUrl}/${serviceSlug}/`,
    "areaServed": {
      "@type": "State",
      "name": "Nevada",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer,
      },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": opts.headline,
    "description": opts.description,
    "author": {
      "@type": "Organization",
      "name": siteConfig.brandName,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.brandName,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
      },
    },
    "datePublished": opts.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${opts.slug}/`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url}`,
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": opts.name,
    "description": opts.description,
    "step": opts.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
    })),
  };
}
