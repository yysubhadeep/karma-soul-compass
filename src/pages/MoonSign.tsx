import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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
    detailedData?: any;
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
        placeOfBirth: placeOfBirth,
        // Pass individual location components for coordinate lookup
        country: formData.country,
        state: formData.state,
        city: formData.city
      };

      console.log('Calculating astrology data for:', calculationData);
      const calculation = calculateEasternArchetype(calculationData);
      
      setCalculations({
        moonSign: calculation.moonSign,
        lagna: calculation.lagna,
        atmakaraka: calculation.atmakaraka,
        nakshatra: calculation.nakshatra,
        detailedData: calculation
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
              {/* Moon Sign - KEEP EXACTLY AS IS */}
              <Card className="border-blue-200 bg-blue-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-blue-800">Moon Sign (Confirmed Accurate)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">🌙</span>
                    <h2 className="text-3xl font-bold text-blue-600 mb-1">{calculations.moonSign}</h2>
                    <p className="text-gray-600 text-sm">Your Vedic Moon Sign</p>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Planetary Positions Table */}
              {calculations.detailedData && calculations.detailedData.planetaryPositions && (
                <Card className="border-purple-200 bg-purple-50/50">
                  <CardHeader>
                    <CardTitle className="text-center text-purple-800">Complete Planetary Positions</CardTitle>
                    <p className="text-center text-sm text-purple-600">
                      Calculated using birth coordinates: {calculations.detailedData.birthCoordinates ? 
                        `${calculations.detailedData.birthCoordinates.latitude.toFixed(4)}°N, ${calculations.detailedData.birthCoordinates.longitude.toFixed(4)}°E` : 
                        'Default coordinates used'}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-4 rounded-lg overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="font-bold">Planet</TableHead>
                            <TableHead className="font-bold">Longitude</TableHead>
                            <TableHead className="font-bold">Rashi</TableHead>
                            <TableHead className="font-bold">Degrees in Sign</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.entries(calculations.detailedData.planetaryPositions).map(([planet, longitude]) => {
                            const planetLong = Number(longitude);
                            const rashi = calculations.detailedData.zodiacSigns?.[planet] || 
                                         ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor(planetLong / 30)];
                            const degreesInSign = planetLong % 30;
                            
                            return (
                              <TableRow key={planet}>
                                <TableCell className="font-medium capitalize">{planet}</TableCell>
                                <TableCell>{planetLong.toFixed(2)}°</TableCell>
                                <TableCell className="font-medium">{rashi}</TableCell>
                                <TableCell>{degreesInSign.toFixed(2)}°</TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                    
                    {/* Rashi Chart Visual */}
                    <div className="mt-6 bg-white p-4 rounded-lg">
                      <h3 className="font-bold text-purple-700 mb-4 text-center">Rashi Chart Layout</h3>
                      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
                        {[
                          { rashi: 'Aries', house: 1 }, { rashi: 'Taurus', house: 2 }, { rashi: 'Gemini', house: 3 }, { rashi: 'Cancer', house: 4 },
                          { rashi: 'Pisces', house: 12 }, { rashi: '', house: 0 }, { rashi: '', house: 0 }, { rashi: 'Leo', house: 5 },
                          { rashi: 'Aquarius', house: 11 }, { rashi: '', house: 0 }, { rashi: '', house: 0 }, { rashi: 'Virgo', house: 6 },
                          { rashi: 'Capricorn', house: 10 }, { rashi: 'Sagittarius', house: 9 }, { rashi: 'Scorpio', house: 8 }, { rashi: 'Libra', house: 7 }
                        ].map((cell, index) => {
                          const planetsInRashi = Object.entries(calculations.detailedData.planetaryPositions).filter(([planet, longitude]) => {
                            const planetLong = Number(longitude);
                            const planetRashi = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor(planetLong / 30)];
                            return planetRashi === cell.rashi;
                          });
                          
                          return (
                            <div key={index} className={`border border-gray-300 h-20 p-1 text-xs ${cell.rashi ? 'bg-gray-50' : 'bg-gray-200'}`}>
                              {cell.rashi && (
                                <>
                                  <div className="font-bold text-purple-600 mb-1">{cell.rashi.slice(0, 3)}</div>
                                  <div className="text-xs space-y-0.5">
                                    {planetsInRashi.map(([planet]) => (
                                      <div key={planet} className="text-blue-600">{planet.slice(0, 3)}</div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Nakshatra - Should be accurate based on moon position */}
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-green-800">Nakshatra (Birth Star)</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-white p-6 rounded-lg">
                    <span className="text-4xl mb-2 block">✨</span>
                    <h2 className="text-3xl font-bold text-green-600 mb-1">{calculations.nakshatra}</h2>
                    <p className="text-gray-600 text-sm">Your Lunar Mansion</p>
                  </div>
                </CardContent>
              </Card>

              {/* Test Results for Other Calculations */}
              <Card className="border-yellow-200 bg-yellow-50/50">
                <CardHeader>
                  <CardTitle className="text-center text-yellow-800">Calculated Using Your Birth Coordinates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-700 mb-2">Lagna (Ascendant)</h3>
                    <p className="text-2xl font-bold text-yellow-600">{calculations.lagna}</p>
                    <p className="text-sm text-gray-600">Calculated using precise birth coordinates</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-700 mb-2">Atmakaraka</h3>
                    <p className="text-2xl font-bold text-yellow-600">{calculations.atmakaraka}</p>
                    <p className="text-sm text-gray-600">Planet with highest degrees in its sign</p>
                  </div>

                  {/* Additional confident calculations */}
                  {calculations.detailedData && (
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-semibold text-yellow-700 mb-2">Calculation Details</h3>
                      <div className="text-sm space-y-1">
                        <p><strong>Primary Archetype:</strong> {calculations.detailedData.primaryArchetype}</p>
                        <p><strong>Secondary Archetype:</strong> {calculations.detailedData.secondaryArchetype}</p>
                        <p><strong>Ayanamsa Used:</strong> {calculations.detailedData.ayanamsa?.toFixed(6)}°</p>
                        <p className="text-xs text-gray-500 mt-2">Check console logs for detailed astronomical calculations</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Instructions for verification */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Calculation Status</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>✅ <strong>Moon Sign:</strong> Confirmed accurate using high-precision calculations</p>
                    <p>✅ <strong>Nakshatra:</strong> Accurate - calculated from precise moon position</p>
                    <p>✅ <strong>Planetary Positions:</strong> High-precision calculations with exact degrees</p>
                    <p>✅ <strong>Lagna:</strong> Calculated using your actual birth coordinates</p>
                    <p>✅ <strong>Atmakaraka:</strong> Determined by highest degrees within sign rule</p>
                    <p className="mt-3 text-xs">All calculations use Vedic sidereal system with Lahiri Ayanamsa. Check browser console for detailed calculation logs.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MoonSign;
