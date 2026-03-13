import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Copy } from "lucide-react";
import {
  getOptimizationModes,
  API_REQUEST_EXAMPLE,
  type OptimizationMode,
} from "@/constants/new-hire-compensation-data";
import { useGender } from "@/lib/gender";
import { highlightJSON } from "@/utils/json-highlight";

const MODE_LABELS: Record<OptimizationMode, string> = {
  maxErsparnis: "MaxErsparnis Beispiel",
  maxNetto: "MaxNetto Beispiel",
  freeCalc: "FreeCalc Beispiel",
};

export default function NewHireCompensationOptimizationModesSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<OptimizationMode>("maxErsparnis");
  const gendered = useGender();
  const OPTIMIZATION_MODES = getOptimizationModes(gendered);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-4">
            Das i-Tüpfelchen: Drei Optimierungsmodi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wählen Sie den perfekten Modus für Ihre Ziele
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {OPTIMIZATION_MODES.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.id}
                className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all ${
                  selectedMode === mode.id
                    ? "ring-4 ring-lohn-primary scale-105"
                    : "hover:shadow-xl"
                }`}
                onClick={() => setSelectedMode(mode.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${mode.iconBgClass} rounded-xl flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${mode.iconColorClass}`} />
                  </div>
                  {selectedMode === mode.id && (
                    <Badge className="bg-lohn-primary text-white">Aktiv</Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold text-lohn-primary mb-3">
                  {mode.title}
                </h3>
                <p className="text-gray-600 mb-4">{mode.description}</p>
                <div className={`${mode.highlightBgClass} p-3 rounded-lg`}>
                  <p className={`text-sm font-medium ${mode.highlightTextClass}`}>
                    {mode.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">
              API Request - {MODE_LABELS[selectedMode]}
            </h3>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-400 hover:text-white"
              onClick={() => copyToClipboard(API_REQUEST_EXAMPLE, "request")}
            >
              {copiedCode === "request" ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <pre
            className="text-sm overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: highlightJSON(API_REQUEST_EXAMPLE) }}
          />
        </div>
      </div>
    </section>
  );
}
