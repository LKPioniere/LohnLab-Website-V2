import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Copy } from "lucide-react";
import {
  GET_OPTIONS_LIST_RESPONSE,
  GET_OPTIONS_LIST_ENDPOINT,
  LOHNBAUSTEINE_INFO,
} from "@/constants/new-hire-compensation-data";
import { highlightJSON } from "@/utils/json-highlight";

export default function NewHireCompensationLohnbausteineSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

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
            Verfügbare Lohnbausteine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abrufen aller verfügbaren Lohnbausteine mit der getOptionsList API
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-lohn-primary">
                getOptionsList Endpoint
              </h3>
              <p className="text-gray-600 mt-1">
                Erhalten Sie eine vollständige Liste aller verfügbaren Lohnbausteine
              </p>
            </div>
            <Badge className="bg-green-100 text-green-800">GET Request</Badge>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <code className="text-sm text-gray-800">{GET_OPTIONS_LIST_ENDPOINT}</code>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">Response</span>
              <Button
                size="sm"
                variant="ghost"
                className="text-gray-400 hover:text-white"
                onClick={() => copyToClipboard(GET_OPTIONS_LIST_RESPONSE, "optionsList")}
              >
                {copiedCode === "optionsList" ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>
            <pre
              className="text-sm overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: highlightJSON(GET_OPTIONS_LIST_RESPONSE) }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {LOHNBAUSTEINE_INFO.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`${item.bgClass} rounded-lg p-6`}>
                <Icon className={`w-8 h-8 ${item.iconColorClass} mb-3`} />
                <h4 className="font-semibold text-lohn-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
