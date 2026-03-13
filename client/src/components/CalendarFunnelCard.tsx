import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CalendarType } from "@/constants/contact-data";

interface CalendarFunnelCardProps {
  type: CalendarType;
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: () => void;
}

export function CalendarFunnelCard({
  type,
  title,
  description,
  icon: Icon,
  isSelected,
  onSelect,
}: CalendarFunnelCardProps) {
  return (
    <Card
      onClick={() => onSelect()}
      className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-300 overflow-hidden flex flex-col rounded-2xl relative ${
        isSelected ? "shadow-md border-lohn-primary" : "shadow-sm"
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 z-10">
          <CheckCircle2 className="w-6 h-6 text-lohn-primary bg-white rounded-full" />
        </div>
      )}
      <div className="relative bg-linear-to-l from-lohn-primary to-lohn-secondary p-8 pb-6">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300">
          <Icon className="text-white" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 text-center min-h-[64px] flex items-center justify-center">
          {title}
        </h3>
      </div>
      <CardContent className="pt-6 pb-8 px-6 bg-white flex-1 flex flex-col">
        <p className="text-gray-700 mb-6 text-center min-h-[80px] flex items-center justify-center flex-1">
          {description}
        </p>
        <Button
          className="w-full bg-lohn-primary hover:bg-lohn-secondary text-white font-semibold py-5 text-base rounded-full shadow-md hover:shadow-lg transition-all"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          Zum Kalender
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </CardContent>
    </Card>
  );
}
