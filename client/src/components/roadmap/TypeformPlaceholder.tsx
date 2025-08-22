import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Star } from "lucide-react";

export default function TypeformPlaceholder() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-blue-900">
          Ihre Meinung ist gefragt!
        </CardTitle>
        <CardDescription className="text-blue-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Helfen Sie uns dabei, 
          die nächsten wichtigsten Features zu priorisieren.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-900">Lorem Ipsum</h4>
            <p className="text-sm text-blue-700">Lorem ipsum dolor sit amet</p>
          </div>
          <div className="text-center">
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-900">Dolor Sit</h4>
            <p className="text-sm text-blue-700">Consectetur adipiscing elit</p>
          </div>
          <div className="text-center">
            <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-900">Amet Consectetur</h4>
            <p className="text-sm text-blue-700">Sed do eiusmod tempor</p>
          </div>
        </div>

        {/* Placeholder for Typeform embed */}
        <div className="bg-white rounded-lg p-8 border-2 border-dashed border-blue-300 text-center">
          <MessageSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-gray-700 mb-2">
            Typeform Umfrage wird hier eingebettet
          </h4>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Hier wird später die Typeform-Umfrage für Beta-Tester integriert.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Platzhalter für Umfrage-Button
          </Button>
        </div>

        {/* Additional Info */}
        <div className="bg-blue-100 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Warum ist Ihr Feedback wichtig?</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>• Sed do eiusmod tempor incididunt ut labore et dolore</li>
            <li>• Ut enim ad minim veniam, quis nostrud exercitation</li>
            <li>• Duis aute irure dolor in reprehenderit in voluptate</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
