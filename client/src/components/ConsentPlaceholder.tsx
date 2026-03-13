import { Button } from "@/components/ui/button";
import { acceptMarketing } from "@/lib/cookie-consent";

interface ConsentPlaceholderProps {
  service: string;
  className?: string;
}

export default function ConsentPlaceholder({
  service,
  className = "",
}: ConsentPlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-800 text-white rounded-2xl p-8 ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      <span className="text-5xl mb-4">😢</span>
      <p className="text-center text-sm md:text-base text-gray-300 mb-6 max-w-sm">
        {service} kann nur mit Zustimmung zu Marketing-Cookies geladen werden.
      </p>
      <Button
        onClick={acceptMarketing}
        className="bg-lohn-primary text-white hover:bg-lohn-secondary rounded-full px-6 py-3 font-semibold shadow-md"
      >
        Cookies zulassen
      </Button>
    </div>
  );
}
