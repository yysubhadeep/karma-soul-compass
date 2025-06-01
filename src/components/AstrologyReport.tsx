
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Calendar, MapPin, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface AstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

const AstrologyReport = ({ formData, onBack }: AstrologyReportProps) => {
  // Generate report based on birth data
  const generateReport = () => {
    const birthDate = new Date(formData.dateOfBirth);
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    
    // Simple zodiac calculation
    const zodiacSigns = [
      { name: "Capricorn", dates: [12, 22], element: "Earth", ruling: "Saturn" },
      { name: "Aquarius", dates: [1, 20], element: "Air", ruling: "Uranus" },
      { name: "Pisces", dates: [2, 19], element: "Water", ruling: "Neptune" },
      { name: "Aries", dates: [3, 21], element: "Fire", ruling: "Mars" },
      { name: "Taurus", dates: [4, 20], element: "Earth", ruling: "Venus" },
      { name: "Gemini", dates: [5, 21], element: "Air", ruling: "Mercury" },
      { name: "Cancer", dates: [6, 21], element: "Water", ruling: "Moon" },
      { name: "Leo", dates: [7, 23], element: "Fire", ruling: "Sun" },
      { name: "Virgo", dates: [8, 23], element: "Earth", ruling: "Mercury" },
      { name: "Libra", dates: [9, 23], element: "Air", ruling: "Venus" },
      { name: "Scorpio", dates: [10, 23], element: "Water", ruling: "Mars" },
      { name: "Sagittarius", dates: [11, 22], element: "Fire", ruling: "Jupiter" }
    ];

    let zodiac = zodiacSigns[0]; // Default to Capricorn
    
    for (let i = 0; i < zodiacSigns.length; i++) {
      const sign = zodiacSigns[i];
      if (i === 0) { // Capricorn special case
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
          zodiac = sign;
          break;
        }
      } else {
        const prevSign = zodiacSigns[i - 1];
        if (month === prevSign.dates[0] && day >= prevSign.dates[1]) {
          zodiac = sign;
          break;
        } else if (month === sign.dates[0] && day < sign.dates[1]) {
          zodiac = prevSign;
          break;
        }
      }
    }

    // Generate karma archetype based on birth time and place
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const archetypes = [
      "The Seeker", "The Builder", "The Healer", "The Leader", 
      "The Creator", "The Protector", "The Visionary", "The Transformer"
    ];
    
    const archetype = archetypes[timeHour % archetypes.length];

    return {
      zodiac,
      archetype,
      karmaNumbers: {
        life: (day + month + birthDate.getFullYear()) % 9 + 1,
        soul: day % 9 + 1,
        destiny: (month + birthDate.getFullYear()) % 9 + 1
      }
    };
  };

  const report = generateReport();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Button 
          onClick={onBack}
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-bold text-gray-900">Your KarmaArchetype Report</h2>
      </div>

      {/* Personal Info Summary */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-orange-600" />
            <span>Birth Chart Summary for {formData.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2 text-gray-700">
            <Calendar className="h-4 w-4" />
            <span>{formData.dateOfBirth}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Clock className="h-4 w-4" />
            <span>{formData.timeOfBirth}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <MapPin className="h-4 w-4" />
            <span>{formData.placeOfBirth}</span>
          </div>
        </CardContent>
      </Card>

      {/* Main Archetype */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-orange-800">
            🌟 Your KarmaArchetype: {report.archetype}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl mb-4">🧭</div>
          <p className="text-lg text-gray-700">
            Based on your birth time and cosmic alignment, you embody the essence of <strong>{report.archetype}</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Zodiac Information */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle>🌙 Your Zodiac Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Sun Sign</h3>
              <p className="text-xl text-orange-600">{report.zodiac.name}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Element</h3>
              <p className="text-xl text-orange-600">{report.zodiac.element}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-gray-900">Ruling Planet</h3>
              <p className="text-xl text-orange-600">{report.zodiac.ruling}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Karma Numbers */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle>🔢 Your Karma Numbers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
              <h3 className="font-semibold text-gray-900">Life Path</h3>
              <p className="text-3xl font-bold text-orange-600">{report.karmaNumbers.life}</p>
              <p className="text-sm text-gray-600">Your life's purpose</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
              <h3 className="font-semibold text-gray-900">Soul Number</h3>
              <p className="text-3xl font-bold text-orange-600">{report.karmaNumbers.soul}</p>
              <p className="text-sm text-gray-600">Your inner desires</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
              <h3 className="font-semibold text-gray-900">Destiny Number</h3>
              <p className="text-3xl font-bold text-orange-600">{report.karmaNumbers.destiny}</p>
              <p className="text-sm text-gray-600">Your life direction</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle>💡 Key Insights for {report.archetype}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Strengths:</h3>
            <p className="text-gray-700">
              Natural leadership qualities, strong intuition, and the ability to inspire others toward positive change.
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Growth Areas:</h3>
            <p className="text-gray-700">
              Learning to balance ambition with patience, and trusting the divine timing of your journey.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Life Purpose:</h3>
            <p className="text-gray-700">
              You are here to guide others through transformation and help them discover their own inner wisdom.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Message */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-100 to-red-100">
        <CardContent className="text-center py-8">
          <p className="text-lg text-gray-800 mb-4">
            🪷 This is the beginning of your journey to inner clarity.
          </p>
          <p className="text-sm text-gray-600">
            Your detailed KarmaArchetype report has been sent to {formData.email}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AstrologyReport;
