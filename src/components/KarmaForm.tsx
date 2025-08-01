import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import PlaceAutosuggest from "./PlaceAutosuggest";
import AstrologyReport from "./AstrologyReport";

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

const KarmaForm = () => {
  const [showReport, setShowReport] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });
  const [loading, setLoading] = useState(false);

  

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateKarmaMap = async () => {
    if (
      !formData.name ||
      !formData.dateOfBirth ||
      !formData.timeOfBirth ||
      !formData.placeOfBirth
    ) {
      toast.error("Please fill in all details");
      return;
    }

    setLoading(true);
    
    // Simulate processing time for better UX
    setTimeout(() => {
      setLoading(false);
      toast.success("🌟 Your KarmaArchetype has been generated!");
      setShowReport(true);
    }, 2000);
  };

  const handleBackToForm = () => {
    setShowReport(false);
    setFormData({
      name: "",
      dateOfBirth: "",
      timeOfBirth: "",
      placeOfBirth: "",
    });
  };

  // Show report if generated
  if (showReport) {
    return <AstrologyReport formData={formData} onBack={handleBackToForm} />;
  }

  return (
    <div className="w-full max-w-sm mx-auto px-2">
      <Card className="bg-white/95 backdrop-blur-sm border-orange-200 shadow-lg">
        <CardHeader className="text-center pb-4 px-4 pt-6">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
            🌟 Get Your Free KarmaArchetype
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 px-4 pb-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="date"
              className="text-sm font-medium text-gray-700"
            >
              Date of Birth
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                handleInputChange("dateOfBirth", e.target.value)
              }
              className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="time"
              className="text-sm font-medium text-gray-700"
            >
              Time of Birth (24-hour format)
            </Label>
            <Input
              id="time"
              type="time"
              value={formData.timeOfBirth}
              onChange={(e) =>
                handleInputChange("timeOfBirth", e.target.value)
              }
              className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="place"
              className="text-sm font-medium text-gray-700"
            >
              Place of Birth
            </Label>
            <PlaceAutosuggest
              id="place"
              placeholder="Start typing your city name..."
              value={formData.placeOfBirth}
              onChange={(value) =>
                handleInputChange("placeOfBirth", value)
              }
              className="h-12 text-base border-2 border-gray-200 focus:border-orange-400 rounded-lg pr-10"
            />
            <p className="text-xs text-gray-500 mt-1">
              💡 Start typing to see suggestions for Indian cities
            </p>
          </div>

          <Button
            onClick={generateKarmaMap}
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold h-14 text-base mt-6 rounded-lg touch-manipulation"
          >
            {loading
              ? "Generating Your KarmaMap..."
              : "🧭 Generate My KarmaArchetype"}
          </Button>

          <div className="text-xs text-gray-500 text-center mt-4 px-2 leading-relaxed">
            Your data is secure and will only be used to generate your
            personalized KarmaArchetype report.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KarmaForm;
