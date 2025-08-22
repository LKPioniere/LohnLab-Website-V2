import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FunctionGroup } from "@/constants/roadmap-features";
import FeatureCard from "./FeatureCard";
import { TrendingUp, UserPlus, BarChart3, Database, MessageSquare, Shield, CheckCheck, Calculator } from "lucide-react";

const ICON_MAP = {
  TrendingUp,
  UserPlus,
  BarChart3,
  Database,
  MessageSquare,
  Shield,
  CheckCheck,
  Calculator
} as const;

const COLOR_MAP = {
  blue: 'from-blue-500 to-blue-600',
  teal: 'from-teal-500 to-teal-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600',
  emerald: 'from-emerald-500 to-emerald-600'
} as const;



interface FunctionGroupCardProps {
  functionGroup: FunctionGroup;
}

export default function FunctionGroupCard({ functionGroup }: FunctionGroupCardProps) {
  // Sort features by status: in-progress, planned, backlog, completed
  const statusOrder = { 'in-progress': 1, 'planned': 2, 'backlog': 3, 'concept': 4, 'completed': 5 };
  const sortedFeatures = [...functionGroup.features].sort((a, b) => 
    statusOrder[a.status] - statusOrder[b.status]
  );
  
  const IconComponent = ICON_MAP[functionGroup.icon as keyof typeof ICON_MAP];
  const gradientClass = COLOR_MAP[functionGroup.color as keyof typeof COLOR_MAP];

  const completedFeatures = functionGroup.features.filter(f => f.status === 'completed').length;
  const totalFeatures = functionGroup.features.length;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className={`bg-gradient-to-r ${gradientClass} text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <CardTitle className="text-xl">{functionGroup.title}</CardTitle>
              <CardDescription className="text-white/80">
                {completedFeatures}/{totalFeatures} Features fertig
              </CardDescription>
            </div>
          </div>
        </div>

      </CardHeader>
      
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">{functionGroup.description}</p>
        
        {/* Features with Scrollbar */}
        <div className="max-h-96 overflow-y-auto space-y-3 pr-2">
          {sortedFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} compact={true} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
