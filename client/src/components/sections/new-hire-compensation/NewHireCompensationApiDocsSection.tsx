import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Copy, Database, Settings, Shield } from "lucide-react";
import {
  API_RESPONSE_EXAMPLE,
  MAIN_FEATURES,
} from "@/constants/new-hire-compensation-data";
import { highlightJSON } from "@/utils/json-highlight";
import { useGender } from "@/lib/gender";

export default function NewHireCompensationApiDocsSection() {
  const gendered = useGender();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="api-docs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lohn-primary mb-4">
            API Dokumentation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Einfache Integration, kraftvolle Ergebnisse
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-lohn-primary mb-6">
              Response Beispiel
            </h3>
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">API Response</span>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                  onClick={() => copyToClipboard(API_RESPONSE_EXAMPLE, "response")}
                >
                  {copiedCode === "response" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <pre
                className="text-sm overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: highlightJSON(API_RESPONSE_EXAMPLE) }}
              />
            </div>
            <div className="mt-4 bg-green-100 p-4 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                💰 Ersparnis: 232,65€ pro {gendered ? "Mitarbeiter*in" : "Mitarbeiter"} bei gleichem Netto!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-lohn-primary mb-6">
              Hauptfunktionen
            </h3>
            <div className="space-y-4">
              {MAIN_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-start">
                      <Icon className="w-5 h-5 text-lohn-teal mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lohn-primary mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
