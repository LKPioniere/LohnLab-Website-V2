import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Feature, STATUS_CONFIG } from "@/constants/roadmap-features";

interface FeatureCardProps {
  feature: Feature;
  compact?: boolean;
}

export default function FeatureCard({ feature, compact = false }: FeatureCardProps) {
  const statusConfig = STATUS_CONFIG[feature.status];

  return (
    <Card className={`${compact ? 'p-3' : 'p-4'} hover:shadow-md transition-shadow`}>
      <CardHeader className={compact ? 'pb-2' : 'pb-3'}>
        <div className="flex items-center justify-between">
          <CardTitle className={compact ? 'text-sm' : 'text-base'}>{feature.title}</CardTitle>
          <Badge className={statusConfig.color}>
            {statusConfig.label}
          </Badge>
        </div>
        {feature.releaseQuarter && (
          <CardDescription className="text-xs text-gray-500">
            Geplant: {feature.releaseQuarter}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className={compact ? 'pt-0' : ''}>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </CardContent>
    </Card>
  );
}
