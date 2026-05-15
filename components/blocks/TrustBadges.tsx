import { ShieldCheck, Clock, Star, Tag } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed, Bonded & Insured" },
  { icon: Clock, label: "Available 24/7" },
  { icon: Star, label: "4.9 / 19 Reviews" },
  { icon: Tag, label: "Free Estimates" },
];

interface TrustBadgesProps {
  dark?: boolean;
}

export default function TrustBadges({ dark = false }: TrustBadgesProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className={`w-4 h-4 flex-shrink-0 ${dark ? "text-red-400" : "text-red-600"}`} />
          <span className={`text-xs font-medium ${dark ? "text-white/90" : "text-gray-700"}`}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
