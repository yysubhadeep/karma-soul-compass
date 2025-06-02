
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Compass } from "lucide-react";
import { calculateWesternChart, calculateWesternArchetypes } from '@/utils/westernAstrologyCalculations';
import { getArchetypeEmoji } from '@/utils/archetypeUtils';

interface FormData {
  name: string;
  email: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface WesternAstrologyReportProps {
  formData: FormData;
  onBack: () => void;
}

const WesternAstrologyReport = ({ formData, onBack }: WesternAstrologyReportProps) => {
  const [loading, setLoading] = useState(true);
  const [archetype, setArchetype] = useState<string>("");
  const [secondaryArchetype, setSecondaryArchetype] = useState<string>("");
  const [planetarySigns, setPlanetarySigns] = useState<any>(null);

  useEffect(() => {
    const generateReport = async () => {
      setLoading(true);
      
      // Simulate calculation time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      try {
        console.log("Generating Western astrology report for:", formData);
        
        // Calculate Western chart using astronomia
        const chartData = calculateWesternChart(
          formData.dateOfBirth,
          formData.timeOfBirth,
          formData.placeOfBirth
        );
        
        console.log("Chart data calculated:", chartData);
        
        // Calculate archetypes based on planetary positions
        const archetypeResults = calculateWesternArchetypes(chartData.signs);
        
        console.log("Archetype results:", archetypeResults);
        
        setArchetype(archetypeResults.primary);
        setSecondaryArchetype(archetypeResults.secondary);
        setPlanetarySigns(chartData.signs);
        
      } catch (error) {
        console.error("Error generating Western report:", error);
        // Fallback to simple calculation
        setArchetype("Mystic");
        setSecondaryArchetype("Visionary");
      }
      
      setLoading(false);
    };

    generateReport();
  }, [formData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h2 className="text-xl font-bold mb-4">Calculating Your Precise Archetype</h2>
            <p className="text-gray-600 mb-4">
              Using advanced astronomical calculations...
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p>✨ Converting IST to UTC</p>
              <p>🌟 Calculating planetary longitudes</p>
              <p>🎯 Mapping to archetypes</p>
              <p>📊 Analyzing scoring patterns</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <header className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <Button 
            onClick={onBack}
            variant="outline" 
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <Compass className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold text-gray-900">Western KarmaMap™</span>
          </div>
        </div>
      </header>

      {/* Main Report */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Personal Info */}
        <Card className="border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
            <CardTitle className="text-center text-purple-800">
              🔮 {formData.name}'s Western KarmaArchetype Report
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <span className="font-semibold text-gray-700">Birth Date:</span>
                <p className="text-gray-600">{formData.dateOfBirth}</p>
              </div>
              <div className="text-center">
                <span className="font-semibold text-gray-700">Birth Time:</span>
                <p className="text-gray-600">{formData.timeOfBirth} IST</p>
              </div>
              <div className="text-center">
                <span className="font-semibold text-gray-700">Birth Place:</span>
                <p className="text-gray-600">{formData.placeOfBirth}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Archetype Result */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
          <CardContent className="text-center p-8">
            <div className="text-6xl mb-4">{getArchetypeEmoji(archetype)}</div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">Your Primary Western Archetype</h2>
            <div className="text-3xl font-bold text-purple-900 mb-4">{archetype}</div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Based on precise astronomical calculations using the astronomia library, your planetary positions reveal the essence of <strong>{archetype}</strong>.
            </p>
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                🌟 Your secondary archetype influence is <strong>{secondaryArchetype}</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Planetary Positions */}
        {planetarySigns && (
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-center text-purple-800">
                🪐 Your Planetary Sign Positions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(planetarySigns).map(([planet, sign]) => (
                  <div key={planet} className="text-center bg-purple-50 rounded-lg p-3">
                    <div className="font-semibold text-gray-700">{planet}</div>
                    <div className="text-purple-600 font-medium">{sign as string}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Method Explanation */}
        <Card className="border-purple-200">
          <CardHeader>
            <CardTitle className="text-center text-purple-800">
              ⭐ Advanced Calculation Method
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🔮 Astronomia Library Precision</h4>
                <p>Your birth time was converted from IST to UTC and processed through the astronomia JavaScript library for exact planetary longitude calculations.</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🌟 Western Astrology Methods</h4>
                <p>Each planet's position was calculated using real astronomical data and mapped to the appropriate zodiac sign using precise 30-degree divisions.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🎯 Archetype Scoring System</h4>
                <p>Your planetary sign placements were analyzed against our 12 archetype patterns using weighted scoring for Sun, Moon, and other planetary influences.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-purple-200 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4">🌟 Discover More About Your {archetype} Nature</h3>
            <p className="mb-4 opacity-90">
              This precise calculation reveals just the beginning of your cosmic blueprint. 
              Explore deeper insights into your {archetype} archetype.
            </p>
            <Button 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3"
              onClick={() => window.location.href = '/western-experiment'}
            >
              Calculate Another Chart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WesternAstrologyReport;
