import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";

interface AlertBannerProps {
  type: "success" | "warning" | "error";
  title: string;
  message: string;
}

const AlertBanner = ({ type, title, message }: AlertBannerProps) => {
  const icons = {
    success: <CheckCircle className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    error: <AlertCircle className="h-5 w-5" />,
  };

  const variants = {
    success: "border-success bg-success/10 text-success-foreground",
    warning: "border-warning bg-warning/10 text-warning-foreground",
    error: "border-destructive bg-destructive/10 text-destructive-foreground",
  };

  return (
    <Alert className={`${variants[type]} border-2`}>
      {icons[type]}
      <AlertTitle className="font-semibold">{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default AlertBanner;
