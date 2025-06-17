
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { calculateEasternArchetype } from '@/utils/easternAstrologyCalculations';
import SEO from '@/components/SEO';

const MoonSign = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });
  const [moonSign, setMoonSign] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateMoonSign = () => {
    if (!formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth) {
      alert('Please fill in all fields');
      return;
    }

    setIsCalculating(true);
    
    try {
      const calculationData = {
        name: "Moon Sign Calculator",
        email: "user@example.com",
        dateOfBirth: formData.dateOfBirth,
        timeOfBirth: formData.timeOfBirth,
        placeOfBirth: formData.placeOfBirth
      };

      console.log('Calculating moon sign for:', calculationData);
      const calculation = calculateEasternArchetype(calculationData);
      setMoonSign(calculation.moonSign);
    } catch (error) {
      console.error('Error calculating moon sign:', error);
      alert('Error calculating moon sign. Please check your inputs.');
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
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Moon Sign Calculator</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 py-8 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your <span className="text-blue-600">Moon Sign</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover your moon sign using authentic Vedic astrology calculations based on your exact birth details.
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
                <Label htmlFor="placeOfBirth">Place of Birth</Label>
                <Input
                  id="placeOfBirth"
                  type="text"
                  placeholder="e.g., Kolkata, India"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                  className="w-full"
                />
              </div>

              <Button 
                onClick={calculateMoonSign}
                disabled={isCalculating}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isCalculating ? 'Calculating...' : 'Calculate Moon Sign'}
              </Button>
            </CardContent>
          </Card>

          {/* Results - Only Moon Sign */}
          {moonSign && (
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-center text-blue-800">Your Moon Sign</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-8 rounded-lg">
                  <span className="text-6xl mb-4 block">🌙</span>
                  <h2 className="text-4xl font-bold text-blue-600 mb-2">{moonSign}</h2>
                  <p className="text-gray-600">Your Vedic Moon Sign</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Information Section */}
          <Card className="mt-8 bg-gray-50">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">About Your Moon Sign</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  Your moon sign in Vedic astrology represents your emotional nature, mind, and subconscious patterns. 
                  It's calculated using the sidereal zodiac system, which accounts for the precession of equinoxes.
                </p>
                <p>
                  The moon sign is often considered more important than the sun sign in Vedic astrology, as it reflects 
                  your inner self and emotional responses to life experiences.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MoonSign;
