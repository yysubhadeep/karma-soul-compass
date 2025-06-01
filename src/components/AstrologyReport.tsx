
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Calendar, MapPin, Clock, Briefcase, Heart, Brain, Target, Shield, Lightbulb } from "lucide-react";
import { getArchetypeData, calculateArchetypeFromChart } from '@/data/archetypeData';

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
    
    // Fixed zodiac calculation with correct date ranges
    const getZodiacSign = (month: number, day: number) => {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return { name: "Capricorn", element: "Earth", ruling: "Saturn" };
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return { name: "Aquarius", element: "Air", ruling: "Uranus" };
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return { name: "Pisces", element: "Water", ruling: "Neptune" };
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return { name: "Aries", element: "Fire", ruling: "Mars" };
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return { name: "Taurus", element: "Earth", ruling: "Venus" };
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return { name: "Gemini", element: "Air", ruling: "Mercury" };
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return { name: "Cancer", element: "Water", ruling: "Moon" };
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return { name: "Leo", element: "Fire", ruling: "Sun" };
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return { name: "Virgo", element: "Earth", ruling: "Mercury" };
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return { name: "Libra", element: "Air", ruling: "Venus" };
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return { name: "Scorpio", element: "Water", ruling: "Mars" };
      } else {
        return { name: "Sagittarius", element: "Fire", ruling: "Jupiter" };
      }
    };

    const zodiac = getZodiacSign(month, day);

    // Generate moon and rising signs (simplified)
    const zodiacOrder = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const timeHour = parseInt(formData.timeOfBirth.split(':')[0]);
    const moonSign = zodiacOrder[(timeHour + day) % 12];
    const risingSign = zodiacOrder[(timeHour * 2 + month) % 12];
    
    // Generate dominant planet and element
    const dominantPlanet = zodiac.ruling;
    const dominantElement = zodiac.element;
    const dominantModality = ["Cardinal", "Fixed", "Mutable"][timeHour % 3];

    // Calculate archetype using the new system
    const archetypeResult = calculateArchetypeFromChart(
      zodiac.name,
      moonSign,
      risingSign,
      dominantPlanet,
      dominantElement,
      dominantModality
    );

    return {
      zodiac,
      moonSign,
      risingSign,
      dominantPlanet,
      dominantElement,
      dominantModality,
      archetype: archetypeResult.primary,
      secondaryArchetype: archetypeResult.secondary,
      scoreBreakdown: archetypeResult.scoreBreakdown,
      karmaNumbers: {
        life: (day + month + birthDate.getFullYear()) % 9 + 1,
        soul: day % 9 + 1,
        destiny: (month + birthDate.getFullYear()) % 9 + 1
      }
    };
  };

  const report = generateReport();
  const archetypeData = getArchetypeData(report.archetype);
  const secondaryArchetypeData = getArchetypeData(report.secondaryArchetype);

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      <div className="flex items-center space-x-4 mb-8">
        <Button 
          onClick={onBack}
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <h2 className="text-3xl font-bold text-gray-900">Your KarmaArchetype Report</h2>
      </div>

      {/* Personal Info Summary */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Star className="h-6 w-6 text-orange-600" />
            <span>Birth Chart Summary for {formData.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.dateOfBirth}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.timeOfBirth}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="h-5 w-5 text-orange-600" />
              <span className="font-medium">{formData.placeOfBirth}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Archetype */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
        <CardHeader className="text-center pb-6">
          <div className="text-6xl mb-4">🌟</div>
          <CardTitle className="text-3xl text-orange-800 mb-4">
            Your Primary KarmaArchetype
          </CardTitle>
          <div className="text-4xl font-bold text-orange-900 mb-2">
            {report.archetype}
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Based on your birth chart analysis, you embody the essence of <strong>{report.archetype}</strong>.
          </p>
          <div className="bg-white/50 rounded-lg p-4">
            <p className="text-md text-gray-600">
              Your secondary archetype is <strong>{report.secondaryArchetype}</strong>, adding depth to your karmic blueprint.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Astrological Profile - Vertical Layout */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <span>🌙</span>
            <span>Your Complete Astrological Profile</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Primary Signs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-orange-200 pb-2">Core Signs</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Sun Sign</h4>
                  <p className="text-sm text-gray-600">Core Identity</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.zodiac.name}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Moon Sign</h4>
                  <p className="text-sm text-gray-600">Emotional Nature</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.moonSign}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Rising Sign</h4>
                  <p className="text-sm text-gray-600">Life Approach</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">{report.risingSign}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dominant Influences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b border-red-200 pb-2">Dominant Influences</h3>
            <div className="grid gap-4">
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Dominant Planet</h4>
                  <p className="text-sm text-gray-600">Behavioral Force</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantPlanet}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Element</h4>
                  <p className="text-sm text-gray-600">Energy Type</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantElement}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Modality</h4>
                  <p className="text-sm text-gray-600">Life Rhythm</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">{report.dominantModality}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Life Purpose - Featured */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center space-x-2">
            <Heart className="h-6 w-6 text-blue-600" />
            <span>Your Life Purpose</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            {archetypeData.lifePurpose}
          </p>
        </CardContent>
      </Card>

      {/* Strengths & Growth Areas - Side by Side */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Star className="h-5 w-5 text-green-600" />
              <span>Your Strengths</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{archetypeData.strengths}</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Target className="h-5 w-5 text-yellow-600" />
              <span>Growth Areas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{archetypeData.growthAreas}</p>
          </CardContent>
        </Card>
      </div>

      {/* Shadow Patterns & Life Stages */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Shield className="h-5 w-5 text-purple-600" />
              <span>Shadow Patterns</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{archetypeData.shadows}</p>
          </CardContent>
        </Card>

        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Lightbulb className="h-5 w-5 text-indigo-600" />
              <span>Life Stages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{archetypeData.lifeStages}</p>
          </CardContent>
        </Card>
      </div>

      {/* Healing Practices */}
      <Card className="border-rose-200 bg-rose-50">
        <CardHeader>
          <CardTitle className="text-xl">🧘 Healing Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed text-lg">{archetypeData.healingPractices}</p>
        </CardContent>
      </Card>

      {/* Career Paths */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-xl">
            <Briefcase className="h-6 w-6 text-orange-600" />
            <span>Aligned Career Paths</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-3">
            {archetypeData.careerPaths.map((career, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-800 text-lg">{career}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-center mt-4">
            These career paths align with your natural {archetypeData.name} energy and purpose.
          </p>
        </CardContent>
      </Card>

      {/* Karma Numbers */}
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="text-xl">🔢 Your Karma Numbers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Life Path</h3>
                <p className="text-sm text-gray-600">Your life's purpose</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-orange-600">{report.karmaNumbers.life}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Soul Number</h3>
                <p className="text-sm text-gray-600">Your inner desires</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-orange-600">{report.karmaNumbers.soul}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
              <div>
                <h3 className="font-semibold text-gray-900">Destiny Number</h3>
                <p className="text-sm text-gray-600">Your life direction</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-orange-600">{report.karmaNumbers.destiny}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Message */}
      <Card className="border-orange-200 bg-gradient-to-r from-orange-100 to-red-100">
        <CardContent className="text-center py-8">
          <div className="text-4xl mb-4">🪷</div>
          <p className="text-xl text-gray-800 mb-4 font-medium">
            This is the beginning of your journey to inner clarity.
          </p>
          <p className="text-gray-600">
            Your detailed KarmaArchetype report has been sent to {formData.email}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AstrologyReport;
