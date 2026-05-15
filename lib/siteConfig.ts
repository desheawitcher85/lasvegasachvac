export const siteConfig = {
  domain: "vegasachvac.com",
  brandName: "Vegas AC HVAC",
  phone: "(702) 930-3316",
  phoneRaw: "+17029303316",
  email: "leads@vegasachvac.com",
  address: {
    city: "Las Vegas",
    state: "NV",
  },
  hours: "Open 24/7",
  serviceArea: [
    "Las Vegas",
    "Summerlin",
    "Henderson",
    "North Las Vegas",
    "Spring Valley",
    "Enterprise",
    "Paradise",
    "Boulder City",
    "Anthem",
    "Aliante",
    "Centennial Hills",
  ],
  primaryColor: "#dc2626",
  accentColor: "#dc2626",
  reviewCount: 19,
  reviewRating: 4.9,
} as const;

export const services = [
  { name: "AC Repair", slug: "ac-repair", description: "Diagnostic and repair for all residential and commercial AC systems. Most repairs completed same day." },
  { name: "AC Installation", slug: "ac-installation", description: "New system installation with free in-home estimates. All major brands. Manual J sizing." },
  { name: "Emergency AC Repair", slug: "emergency-ac-repair", description: "24/7 emergency response across the Vegas valley. Tech dispatched within 60 minutes." },
  { name: "Commercial HVAC", slug: "commercial-hvac", description: "Rooftop units, walk-in coolers, make-up air, and preventive maintenance contracts." },
  { name: "Ductless Mini Split", slug: "ductless-mini-split", description: "Single-zone and multi-zone mini splits for garages, additions, and converted spaces." },
  { name: "Heat Pump Repair", slug: "heat-pump-repair", description: "Heat pump repair and replacement. Both cooling and heating modes serviced." },
  { name: "Thermostat Installation", slug: "thermostat-installation", description: "Smart thermostat installation for Nest, Ecobee, Honeywell, and others. Same-day." },
  { name: "Furnace Repair", slug: "furnace-repair", description: "Furnace repair and replacement. Vegas winters drop to the 30s. Be ready." },
] as const;

export const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description: "Master-planned community in the western valley near Red Rock Canyon.",
  },
  {
    name: "Henderson",
    slug: "henderson",
    description: "Established city southeast of Las Vegas with Green Valley and Anthem communities.",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description: "Rapidly growing city with Aliante and Centennial Hills developments.",
  },
  {
    name: "Spring Valley",
    slug: "spring-valley",
    description: "Established mid-valley community with a mix of single-family and multi-family homes.",
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    description: "Fast-growing south valley with Mountain's Edge and Silverado Ranch.",
  },
  {
    name: "Paradise",
    slug: "paradise",
    description: "Central unincorporated area adjacent to the Strip with residential and commercial properties.",
  },
  {
    name: "Boulder City",
    slug: "boulder-city",
    description: "Small-town feel near Lake Mead with older homes and a tight-knit community.",
  },
  {
    name: "Anthem",
    slug: "anthem",
    description: "Master-planned community in Henderson with high-end homes and newer HVAC systems.",
  },
] as const;
