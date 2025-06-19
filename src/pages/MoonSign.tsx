
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { calculateEasternArchetype } from '@/utils/easternAstrologyCalculations';
import SEO from '@/components/SEO';
import LocationSelector from '@/components/LocationSelector';

const MoonSign = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    timeOfBirth: '',
    country: '',
    state: '',
    city: ''
  });
  const [calculations, setCalculations] = useState<{
    moonSign: string;
    lagna: string;
    atmakaraka: string;
    nakshatra: string;
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateAstrologyData = () => {
    if (!formData.dateOfBirth || !formData.timeOfBirth || !formData.country || !formData.state || !formData.city) {
      alert('Please fill in all fields including location details');
      return;
    }

    setIsCalculating(true);
    
    try {
      // Create place of birth string for backwards compatibility with calculation function
      const placeOfBirth = `${formData.city}, ${formData.state}, ${formData.country}`;
      
      const calculationData = {
        name: "Astrology Calculator",
        email: "user@example.com",
        dateOfBirth: formData.dateOfBirth,
        timeOfBirth: formData.timeOfBirth,
        placeOfBirth: placeOfBirth
      };

      console.log('Calculating astrology data for:', calculationData);
      const calculation = calculateEasternArchetype(calculationData);
      
      setCalculations({
        moonSign: calculation.moonSign,
        lagna: calculation.lagna,
        atmakaraka: calculation.atmakaraka,
        nakshatra: calculation.nakshatra
      });
    } catch (error) {
      console.error('Error calculating astrology data:', error);
      alert('Error calculating astrology data. Please check your inputs.');
    } finally {
      setIsCalculating(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Moon Sign Calculator - Vedic Astrology",
    "description": "Calculate your moon sign using authentic Vedic astrology methods. Enter your birth date, time, and place for accurate results.",
    "url": "https://karmamap.lovable.app/moonsign"
  };

  return (
    <>
      <SEO
        title="Moon Sign Calculator - Vedic Astrology | KarmaMap™"
        description="Calculate your moon sign using authentic Vedic astrology methods. Get accurate results based on your exact birth date, time, and place."
        keywords="moon sign calculator, vedic astrology, lunar sign, birth chart, astrology calculator"
        ogTitle="Free Moon Sign Calculator - Vedic Astrology"
        ogDescription="Calculate your moon sign using authentic Vedic astrology methods based on your birth details."
        canonicalUrl="https://karmamap.lovable.app/moonsign"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Header with Back Button */}
        <header className="px-4 py-4 sm:py-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🌙</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Astrology Calculator</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 py-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your <span className="text-blue-600">Vedic Chart</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover your moon sign, lagna, and atmakaraka using authentic Vedic astrology calculations.
            </p>
          </div>

          {/* Calculator Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">Enter Your Birth Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeOfBirth">Time of Birth</Label>
                <Input
                  id="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={(e) => handleInputChange('timeOfBirth', e.target.value)}
                  className="w-full"
                />
                <p className="text-sm text-gray-600">Enter in 24-hour format (e.g., 16:55 for 4:55 PM)</p>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Place of Birth</Label>
                <LocationSelector
                  country={formData.country}
                  state={formData.state}
                  city={formData.city}
                  onCountryChange={(value) => handleInputChange('country', value)}
                  onStateChange={(value) => handleInputChange('state', value)}
                  onCityChange={(value) => handleInputChange('city', value)}
                />
              </div>

              <Button 
                onClick={calculateAstrologyData}
                disabled={isCalculating}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Vedic Chart'}
              </Button>
            </CardContent>
          </Card>

          {/* Results - Vedic Calculations */}
          {calculations && (
            <div className="space-y-6">
              {/* Moon Sign */}
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-800">Moon Sign</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">🌙</span>
                    <h2 className="text-3xl font-bold text-blue-600 mb-1">{calculations.moonSign}</h2>
                    <p className="text-gray-600 text-sm">Your Vedic Moon Sign</p>
                  </div>
                </CardContent>
              </Card>

              {/* Lagna (Ascendant) */}
              <Card className="border-purple-200 bg-purple-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-purple-800">Lagna (Ascendant)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">⬆️</span>
                    <h2 className="text-3xl font-bold text-purple-600 mb-1">{calculations.lagna}</h2>
                    <p className="text-gray-600 text-sm">Your Rising Sign</p>
                  </div>
                </CardContent>
              </Card>

              {/* Atmakaraka */}
              <Card className="border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-orange-800">Atmakaraka</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">⭐</span>
                    <h2 className="text-3xl font-bold text-orange-600 mb-1">{calculations.atmakaraka}</h2>
                    <p className="text-gray-600 text-sm">Your Soul Planet</p>
                  </div>
                </CardContent>
              </Card>

              {/* Nakshatra */}
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-green-800">Nakshatra</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">✨</span>
                    <h2 className="text-3xl font-bold text-green-600 mb-1">{calculations.nakshatra}</h2>
                    <p className="text-gray-600 text-sm">Your Lunar Mansion</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Information Section */}
          <Card className="mt-8 bg-gray-50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">About These Calculations</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>Moon Sign:</strong> Your emotional nature and subconscious patterns using sidereal zodiac.
                </div>
                <div>
                  <strong>Lagna (Ascendant):</strong> Your personality, physical appearance, and life approach.
                </div>
                <div>
                  <strong>Atmakaraka:</strong> The planet with the highest degrees, representing your soul's purpose.
                </div>
                <div>
                  <strong>Nakshatra:</strong> Your birth star constellation, providing deeper personality insights.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MoonSign;
