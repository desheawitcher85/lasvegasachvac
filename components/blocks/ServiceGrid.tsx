import { Wrench, Zap, Clock, Building2, Wind, Thermometer, Settings, Flame } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/siteConfig";
import { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "ac-repair": Wrench,
  "ac-installation": Zap,
  "emergency-ac-repair": Clock,
  "commercial-hvac": Building2,
  "ductless-mini-split": Wind,
  "heat-pump-repair": Settings,
  "thermostat-installation": Thermometer,
  "furnace-repair": Flame,
};

interface ServiceGridProps {
  heading?: string;
}

export default function ServiceGrid({ heading = "Our Services" }: ServiceGridProps) {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              slug={service.slug}
              description={service.description}
              Icon={iconMap[service.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
