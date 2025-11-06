import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, Thermometer, Droplet } from "lucide-react";

interface PatientCardProps {
  name: string;
  age: number;
  id: string;
  status: "stable" | "warning" | "critical";
  heartRate: number;
  temperature: number;
  bloodPressure: string;
  oxygen: number;
}

const PatientCard = ({
  name,
  age,
  id,
  status,
  heartRate,
  temperature,
  bloodPressure,
  oxygen,
}: PatientCardProps) => {
  const statusColors = {
    stable: "success",
    warning: "warning",
    critical: "destructive",
  } as const;

  const getStatusBadge = () => {
    const variant = statusColors[status];
    return (
      <Badge variant={variant} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <Card className="p-6 hover:shadow-medium transition-all duration-300 card-gradient border-border/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {age} years • ID: {id}
          </p>
        </div>
        {getStatusBadge()}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
          <div className="p-2 rounded-full bg-primary/10">
            <Heart className="h-5 w-5 text-primary animate-pulse-glow" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Heart Rate</p>
            <p className="text-lg font-semibold text-foreground">{heartRate} bpm</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
          <div className="p-2 rounded-full bg-accent/10">
            <Thermometer className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Temperature</p>
            <p className="text-lg font-semibold text-foreground">{temperature}°F</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
          <div className="p-2 rounded-full bg-destructive/10">
            <Activity className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Blood Pressure</p>
            <p className="text-lg font-semibold text-foreground">{bloodPressure}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
          <div className="p-2 rounded-full bg-primary/10">
            <Droplet className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">SpO2</p>
            <p className="text-lg font-semibold text-foreground">{oxygen}%</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PatientCard;
